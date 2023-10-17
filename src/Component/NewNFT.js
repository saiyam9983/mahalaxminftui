import React, { useEffect, useRef, useState } from "react";
import useTruncateWalletAddress from "../hooks/useTruncate";
import {
  useAccount,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import axios from "axios";
import usePinataGatewayUrl from "../hooks/usePinataGatewayUrl";
import { useMutation } from "@apollo/client";
import { createNft } from "../graphql/mutations/createNft";
import { NFT_CONTRACT } from "../contracts/address/ContractAddress";
const initialFormState = {
  name: "",
  description: "",
  royalties: "",
};
// import Aos from 'aos';
// import { useEffect } from "react";

const NewNFT = () => {
  // useEffect(() => {
  //   Aos.init({ duration: 3000 })
  // }, [])
  const { address, isConnected } = useAccount();
  const [imagePreview, setImagePreview] = useState(
    "https://images.appypie.com/wp-content/uploads/2022/04/18184120/uploadImg.svg"
  );
  const [selectedFile, setSelectedFile] = useState();
  const resetFormFields = () => {
    // Reset form fields to their initial values
    setFormFields(initialFormState);
    setSelectedFile();
    setImagePreview(
      "https://images.appypie.com/wp-content/uploads/2022/04/18184120/uploadImg.svg"
    );
  };
  const [metadataURI, setMetadataURI] = useState(false);
  const { config } = usePrepareContractWrite({
    address: NFT_CONTRACT,
    abi: [
      {
        inputs: [
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "string",
            name: "uri",
            type: "string",
          },
        ],
        name: "safeMint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
    functionName: "safeMint",
    args: [address, metadataURI],
  });
  const { data, write } = useContractWrite(config);

  const {
    data: transDATA,
    isLoading,
    isSuccess,
  } = useWaitForTransaction({
    hash: data?.hash,
  });
  const [formFields, setFormFields] = useState(initialFormState);
  const JWT =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIxZWQwNDEyMC1hYmRhLTRjNDUtYTYwMy03ODk0MGY2N2M0YWEiLCJlbWFpbCI6ImNvb2xlc3RzYWl5YW1AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjIxYjg0Yjk4ZTIwZjBmNzBlMjczIiwic2NvcGVkS2V5U2VjcmV0IjoiYjhkYWE0NzdhNTg1NzZiNDlkYTE3ZDEzYmI2ZWM1MDM1YjFmNWJlZDMxMjlhYzYwNjM5MjVhOWQyYjQyMTAxOSIsImlhdCI6MTY5NjUyMjcwMn0.AT6mVLoA7lCF8WVEvfWRbn3r1ICU8IKcumoagTweEmA";
  const [createNFT] = useMutation(createNft);
  const fileInputRef = useRef(null);

  const generatePinataGatewayUrl = (ipfsHash) => {
    return ipfsHash ? `https://gateway.pinata.cloud/ipfs/${ipfsHash}` : null;
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  console.log("====================================");
  console.log(transDATA, "nft data");
  console.log("====================================");
  useEffect(() => {
    if (isSuccess && transDATA) {
      createNFT({
        variables: {
          name: formFields.name,
          tokenId: parseInt(transDATA?.logs[1]?.data, 16).toString(),
          imageUrl: metadataURI,
          chainId: 80001,
          nftStatus: "minted",
          collectionAddress: NFT_CONTRACT,
          url: metadataURI,
          network: "Sepolia",
        },
      })
        .then((response) => {
          alert("NFT Minted Successfully");
          resetFormFields();
          return;
        })
        .catch((error) => {
          alert("Database is not initialized");
          resetFormFields();
          return;
        });
    }
  }, [isSuccess]);
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      // You can access the selected file here and perform further actions
      console.log(`Selected file: ${selectedFile.name}`);
      const imageUrl = URL.createObjectURL(selectedFile);
      setSelectedFile(selectedFile);
      setImagePreview(imageUrl);
    }
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("====================================");
    console.log(event.target.description);
    console.log("====================================");
    // Validation checks
    if (!selectedFile) {
      alert("Please select a file.");
      return;
    }

    if (!formFields.description) {
      alert("Please enter a description.");
      return;
    }

    if (
      !/^\d+$/.test(formFields.royalties) ||
      parseInt(formFields.royalties) < 0 ||
      parseInt(formFields.royalties) > 50
    ) {
      alert("Royalties must be a number between 0 and 50.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    const metadata = JSON.stringify({
      name: formFields.name,
      description: formFields.description,
      royalties: formFields.royalties,
      image: selectedFile,
    });
    formData.append("pinataMetadata", metadata);

    const options = JSON.stringify({
      cidVersion: 0,
    });
    formData.append("pinataOptions", options);

    try {
      const res = await axios.post(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        formData,
        {
          maxBodyLength: "Infinity",
          headers: {
            "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
            Authorization: `Bearer ${JWT}`,
          },
        }
      );

      const pinataGatewayUrlImg = generatePinataGatewayUrl(res.data.IpfsHash);
      setMetadataURI(pinataGatewayUrlImg);
      write?.();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className=" max-w-7xl mx-auto  sm:my-0 2xl:my-20  xl:gap-x-20 flex  flex-col 2xl:p-0 sm:p-20 p-4  ">
        <div className=" gap-x-10  gap-y-10   xl:gap-x-20 flex  w-full justify-start items-start mx-2 flex-col">
          <div>
            <h1 className="text-white text-2xl sm:text-4xl 2xl:text-5xl text-start font-bold">
              Create New NFT
            </h1>
          </div>
          <div>
            <h2 className="text-gray-400 text-lg sm:text-xl lg:2xl 2xl:text-3xl text-start font-semibold ">
              Single Edition On Binance
            </h2>
          </div>
        </div>
        <div className="lg:grid max-w-7xl  mt-10 gap-x-10 grid-cols-1 gap-y-10 md:grid-cols-3 md:gap-y-0 xl:gap-x-20 flex flex-col  justify-start items-start">
          <div className="lg:grid  col-span-2   rounded-2xl grid-cols-1   flex flex-col  justify-start items-center p-1 ">
            <div
              className=" gap-x-10  gap-y-4   xl:gap-x-20 flex  w-full justify-start items-start  flex-col"
              s>
              <div>
                <h1 className="text-white text-lg sm:text-xl lg:2xl 2xl:text-3xl text-start font-bold my-2">
                  Choose Wallet
                </h1>
              </div>
              <div className=" w-full boxBround flex  justify-between sm:justify-around items-center p-10  bg-black">
                <h1 className="text-white text-xl font-bold">
                  {useTruncateWalletAddress(address)}
                </h1>

                <div className=" ">
                  <button className="font-bold text-white text-xs xl:text-sm">
                    {" "}
                    <span
                      className={`flex p-1  px-4 rounded-md items-center space-x-3  bg-stone-700 ${
                        isConnected ? "text-green-500" : "text-gray-500"
                      }    transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300`}>
                      {isConnected ? "Connected" : "Disconnected"}
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <div className=" gap-x-10  gap-y-10   xl:gap-x-20 flex  w-full justify-start mt-10 items-start flex-col">
              <div>
                <h1 className="text-white text-lg sm:text-xl lg:2xl 2xl:text-3xl text-start font-bold mt-2">
                  Upload File
                </h1>
              </div>
              <div className=" w-full boxBroundDashad flex justify-center items-center flex-col p-10 bg-black">
                <h1 className="text-gray-400 text-sm sm:text-xl  my-4 font-bold text-center">
                  PNG, GIF, WEBP, MP4 or MP3. Max 100mb.
                </h1>

                <div className="my-4">
                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <button
                    className="font-bold boxbgColor text-white text-xs xl:text-sm outline-none bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 lg:px-6 xl:py-4 xl:px-10 rounded-md transition ease-in-out delay-100 transform hover:-translate-y-1 hover:scale-105 duration-300"
                    onClick={handleButtonClick}>
                    Choose Files
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="gap-x-10  gap-y-4   xl:gap-x-20 flex  w-full justify-start items-start  flex-col sm:my-0 my-5 ">
            <div>
              <h1 className="text-white text-lg sm:text-xl lg:2xl 2xl:text-3xl text-start font-bold my-2">
                Preview
              </h1>
            </div>
            <div className="rounded-lg shadow-lg overflow-hidden bg-white mx-2">
              <div className="boxbgColor text-white">
                <img
                  src={imagePreview}
                  alt="NFT Preview"
                  className="w-full max-h-auto object-contain"
                />
              </div>
              <div className="flex boxbgColor justify-between p-2">
                <h1 className="text-lg sm:text-2xl font-bold">
                  {useTruncateWalletAddress(address)}
                </h1>
                <p className="text-sm sm:text-base mt-1">BNB</p>
              </div>

              {imagePreview ? null : (
                <div className="p-4 text-center">
                  <p className="text-sm sm:text-xl">
                    Upload a file and choose a collection to preview your brand
                    new NFT.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <form onSubmit={handleFormSubmit}>
        <div className="max-w-7xl mx-auto gap-x-10  gap-y-10   xl:gap-x-20 flex  flex-col 2xl:p-0 sm:p-20 p-2  ">
          <div className="lg:grid max-w-7xl  mt-10 gap-x-10 grid-cols-1 gap-y-10 md:grid-cols-3 md:gap-y-0 xl:gap-x-20 flex flex-col  justify-start items-start">
            <div className="lg:grid  col-span-2   rounded-2xl grid-cols-1   flex flex-col  justify-start items-center mx-2 ">
              <div className=" gap-x-10  gap-y-4   xl:gap-x-20 flex  w-full justify-start items-start mx-2 flex-col">
                <div>
                  <h1 className="text-white text-sm sm:text-lg 2xl:text-xl  text-start font-bold">
                    Name
                  </h1>
                </div>
                <div className=" w-full  flex  justify-center items-center   inputBg rounded-xl">
                  <input
                    type="text"
                    required
                    name="name"
                    placeholder="Redeemable T-Shirt with logo&quot "
                    value={formFields.name}
                    onChange={(e) =>
                      setFormFields({ ...formFields, name: e.target.value })
                    }
                    className="bg-transparent p-4 h-full w-full outline-none text-white"
                  />
                </div>
              </div>
              <div className=" gap-x-10  gap-y-4   xl:gap-x-20 flex  w-full justify-start items-start mx-2 flex-col mt-10">
                <div>
                  <h1 className="text-white text-sm sm:text-lg 2xl:text-xl  text-start font-bold">
                    Description (Optional)
                  </h1>
                </div>
                <div className=" w-full  flex  justify-center items-center   inputBg rounded-xl">
                  <textarea
                    name="description"
                    required
                    rows="4"
                    cols="50"
                    placeholder="Enter description"
                    value={formFields.description}
                    onChange={(e) =>
                      setFormFields({
                        ...formFields,
                        description: e.target.value,
                      })
                    }
                    className="bg-transparent p-4 h-full w-full outline-none text-gray-400 "></textarea>{" "}
                </div>
              </div>
              <div className=" gap-x-10  gap-y-4   xl:gap-x-20 flex  w-full justify-start items-start mx-2 flex-col mt-10">
                <div>
                  <h1 className="text-white text-sm sm:text-lg 2xl:text-xl  text-start font-bold">
                    Rotalties
                  </h1>
                </div>
                <div className=" w-full  flex  justify-between items-center   inputBg rounded-xl">
                  <input
                    name="royalties"
                    required
                    type="text"
                    placeholder="0"
                    className="bg-transparent p-4 h-full w-3/4 outline-none text-white"
                    value={formFields.royalties}
                    onChange={(e) =>
                      setFormFields({
                        ...formFields,
                        royalties: e.target.value,
                      })
                    }
                  />
                  <input
                    type="text"
                    value="%"
                    className="bg-transparent p-4 h-full w-1/4 outline-none text-end text-white"
                  />
                </div>
              </div>
              <div className=" gap-x-10  gap-y-4   xl:gap-x-20 flex  w-full justify-start items-start mx-2 flex-col mt-10">
                <div>
                  <h1 className="text-white text-sm sm:text-lg 2xl:text-xl  text-start font-bold">
                    Suggested: 0%, 10%, 20%, 30%. Maximum is 50%
                  </h1>
                </div>

                <button className="bg-transparent sm:p-2 py-2  w-full outline-none text-white font-bold  text-xs xl:text-sm ">
                  <span className="flex rounded-md items-center space-x-3 buttonBg  py-2 p-4 lg:px-6 xl:py-4 xl:px-10  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
                    Show advanced settings
                  </span>
                </button>
              </div>
              <div className="   gap-y-10  w-full flex  justify-between items-center px-2 mt-10">
                <div className=" ">
                  <button
                    type="submit"
                    className="font-bold text-white text-xs xl:text-sm outline-none">
                    {" "}
                    <span className="flex rounded-md items-center space-x-3 buttonBg  py-2 px-4 lg:px-6 xl:py-4 xl:px-10  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
                      Create item
                    </span>
                  </button>
                </div>
                <div>
                  <h1 className="text-gray-300  sm:text-md lg-text-lg xl:text-xl 2xl:text-2xl text-sm sm:text-2xl  font-bold">
                    Unsaved changes ?
                    {/* {isSuccess && (
                      <div>
                        Successfully minted your NFT!
                        <div>
                          <a href={`https://etherscan.io/tx/${data?.hash}`}>
                            Etherscan
                          </a>
                        </div>
                      </div>
                    )} */}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default NewNFT;
