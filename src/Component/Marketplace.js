import React from "react";
import { useState } from "react";
import ExploreProductImage1 from "../images/Cards/ExploreProduct/ExploreProductImage1.png";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Marketplace = () => {
  // useEffect(() => {
  //   Aos.init({ duration: 3000 })
  // }, [])
  const [toggle, setToggle] = useState(false);
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);

  return (
    <>
      <div className=" max-w-7xl mx-auto  sm:my-20    flex  flex-col p-4  bg-black  shadowbox">
        <div className="   gap-y-10  flex  justify-start items-start mx-2 my-2">
          <div>
            <h1 className="text-white text-2xl lg:text-3xl 2xl:text-4xl font-semibold capitalize">
              List For Sale
            </h1>
          </div>
        </div>

        <div className="lg:grid w-full mx-auto  grid-cols-1  md:grid-cols-5 md:gap-y-0  gap-5 flex flex-col  justify-center items-start">
          <div className="  rounded-2xl     w-full flex  justify-center items-center flex-col  col-span-2">
            <div className=" p-10 sm:px-20 sm:py-28   inputBg  flex justify-center items-center flex-col md:max-w-2xl max-w-md  rounded-xl w-full  ">
              <img
                className="w-[500px]"
                src={ExploreProductImage1}
                alt="exploreProduct"
              />
            </div>
          </div>

          <div className="  rounded-xl py-4  bg-black mb-6    w-full col-span-3 lg:ml-10 lg:pr-10">
            <div className="w-full flex justify-between items-center">
              <div className=" font-medium text-gray-200 text-md w-full text-start  my-3">
                Test NFT 1
              </div>
              <div className="flex justify-center items-center">
                <span className="w-7  h-7  rounded-full bg-gray-200 mx-1"></span>
                <span className="w-7  h-7  rounded-full bg-gray-200 mx-1"></span>
                <span className="w-7  h-7  rounded-full bg-gray-200 mx-1"></span>
              </div>
            </div>
            <div className="text-white font-medium  text-xl md:text-3xl w-full text-start  my-6">
              TestNFT01 <br />
              <span className=" text-sm sm:text-md lg:text-lg text-white ">
                Owned by <span className="text-[#f3b93d] font-bold">You</span>
              </span>
            </div>
            <div className="text-white font-medium text-sm sm:text-xl w-full text-start flex justify-start items-center  mt-10 my-5">
              <span className="w-7  h-7  rounded-full bg-gray-200 mx-3"></span>{" "}
              12Views
              <span className="w-7  h-7  rounded-full bg-gray-200 mx-3"></span>
              14Arts
            </div>
            <div className=" boxBorder text-center  px-6 py-3   bg-black  rounded-xl   ">
              <div
                className=" boxbgColors text-center   py-3   bg-black  rounded-xl  flex  justify-between items-center my-4"
                onClick={() => {
                  setToggle(!toggle);
                }}>
                <div className="flex justify-center items-center text-white font-semibold">
                  <span className="w-7  h-7  rounded-full bg-gray-200 mx-3"></span>{" "}
                  Price History
                </div>
                <div className="text-white px-6">
                  {toggle ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </div>
              </div>
              {toggle ? (
                <div className=" boxbgColors text-center   py-3   bg-black  rounded-xl  flex  justify-between items-center my-4">
                  <div className="flex justify-center items-center text-3xl text-white font-semibold">
                    graph
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className=" boxBorder text-center  px-6 py-3   bg-black  rounded-xl   ">
          <div>
            <div
              className=" boxbgColors text-center   py-3   bg-black  rounded-xl  flex  justify-between items-center my-4"
              onClick={() => {
                setToggle1(!toggle1);
              }}>
              <div className="flex justify-center items-center text-white font-semibold">
                <span className="w-7  h-7  rounded-full bg-gray-200 mx-3"></span>{" "}
                Description
              </div>
              <div className="text-white px-6">
                {toggle1 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </div>
            </div>
            {toggle1 ? (
              <div className="  text-center flex-col  py-3   bg-black  rounded-xl  flex  justify-between items-center my-4">
                <div className=" text-start w-full  text-lg sm:text-xl text-white font-semibold">
                  By You
                </div>
                <div className="text-start w-full  text-sm sm:text-md text-white my-2 ">
                  <p>
                    The world’s first and largest digital marketplace for crypto
                    collectibles and non-fungible tokens (NFTs). Buy, sell, and
                    discover exclusive digital items.
                  </p>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div>
            <div
              className=" boxbgColors text-center   py-3   bg-black  rounded-xl  flex  justify-between items-center my-4"
              onClick={() => {
                setToggle2(!toggle2);
              }}>
              <div className="flex justify-center items-center text-white font-semibold">
                <span className="w-7  h-7  rounded-full bg-gray-200 mx-3"></span>{" "}
                Details
              </div>
              <div className="text-white px-6">
                {toggle2 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </div>
            </div>
            {toggle2 ? (
              <div className="  text-center flex-col  py-3   bg-black  rounded-xl  flex  justify-between items-center my-4">
                <div className="w-full">
                  <table className="w-full text-gray-400 font-medium text-sm sm:text-lg border-collapse">
                    <tbody className="w-full">
                      <tr className="w-full h-12 border-b border-gray-400">
                        <td className="text-start">Contract Address</td>
                        <td className="text-end"> 0x256...5862 </td>
                      </tr>
                      <tr className="w-full h-12 border-b border-gray-400">
                        <td className="text-start">Token ID</td>
                        <td className="text-end">0x256...5862</td>
                      </tr>
                      <tr className="w-full h-12 border-b border-gray-400">
                        <td className="text-start">Token Standard</td>
                        <td className="text-end">BNB-1525 </td>
                      </tr>
                      <tr className="w-full h-12 border-b border-gray-400">
                        <td className="text-start">Chain</td>
                        <td className="text-end"> Jaipur </td>
                      </tr>
                      <tr className="w-full h-12 border-b border-gray-400">
                        <td className="text-start">Metdata</td>
                        <td className="text-end">Centralized</td>
                      </tr>
                      <tr className="w-full h-12 border-b border-gray-400">
                        <td className="text-start">Lst Updated</td>
                        <td className="text-end">6 days ago</td>
                      </tr>
                      <tr className="w-full h-12 border-b border-gray-400">
                        <td className="text-start">Creator Earnings</td>
                        <td className="text-end">0% </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className=" boxBorder text-center  px-6 py-3   bg-black  rounded-xl  my-5 ">
          <div>
            <div
              className=" boxbgColors text-center   py-3   bg-black  rounded-xl  flex  justify-between items-center my-4"
              onClick={() => {
                setToggle3(!toggle3);
              }}>
              <div className="flex justify-center items-center text-white font-semibold">
                <span className="w-7  h-7  rounded-full bg-gray-200 mx-3"></span>{" "}
                Items Activity
              </div>
              <div className="text-white px-6">
                {toggle3 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </div>
            </div>
            {toggle3 ? (
              <div className="  text-center flex-col  py-3   bg-black  rounded-xl  flex  justify-between items-center my-4 overflow-hidden">
                <div className="w-full overflow-x-auto  ">
                  <table className=" font-medium text-lg border-collapse w-[900px] sm:w-[1180px] p-5 ">
                    <thead className="w-full text-white text-md sm:text-lg">
                      <tr>
                        <th className=" text-start">Event</th>
                        <th className="text-center">Price</th>{" "}
                        <th className="text-center">From</th>{" "}
                        <th className="text-center">To</th>{" "}
                        <th className="text-end">Date</th>
                      </tr>
                    </thead>
                    <tbody className="w-full text-gray-400 text-sm sm:text-md">
                      <tr>
                        <td className="w-28 h-8  sm:w-40  text-start">
                          Transfer
                        </td>
                        <td className="w-28 h-8  sm:w-40 text-center ">
                          1Matic
                        </td>
                        <td className="w-28 h-8  sm:w-40 text-center text-blue-600">
                          21DHIKO
                        </td>
                        <td className="w-28 h-8  sm:w-40 text-center text-blue-600">
                          You
                        </td>
                        <td className="w-28 h-8  sm:w-40  text-blue-600 text-end">
                          2d Ago
                        </td>
                      </tr>
                      <tr>
                        <td className="w-28 h-8 sm:w-40  text-start">Sale</td>
                        <td className="w-28 h-8 sm:w-40 text-center">1Matic</td>
                        <td className="w-28 h-8 sm:w-40 text-center text-blue-600">
                          21DHIKO
                        </td>
                        <td className="w-28 h-8 sm:w-40 text-center text-blue-600">
                          You
                        </td>
                        <td className="w-28 h-8 sm:w-40 text-blue-600 text-end">
                          2d Ago
                        </td>
                      </tr>
                      <tr>
                        <td className="w-28 h-8 sm:w-40  text-start">List</td>
                        <td className="w-28 h-8 sm:w-40 text-center">1Matic</td>
                        <td className="w-28 h-8 sm:w-40 text-center text-blue-600">
                          21DHIKO
                        </td>
                        <td className="w-28 h-8 sm:w-40 text-center text-blue-600">
                          You
                        </td>
                        <td className="w-28 h-8 sm:w-40 text-blue-600 text-end">
                          2d Ago
                        </td>
                      </tr>
                      <tr>
                        <td className=" w-28 h-8 sm:w-40  text-start">
                          Transfer
                        </td>
                        <td className="w-28 h-8 sm:w-40 text-center">1Matic</td>
                        <td className="w-28 h-8 sm:w-40 text-center text-blue-600">
                          21DHIKO
                        </td>
                        <td className="w-28 h-8 sm:w-40 text-center text-blue-600">
                          You
                        </td>
                        <td className="w-28 h-8 sm:w-40 text-blue-600 text-end">
                          2d Ago
                        </td>
                      </tr>
                      <tr>
                        <td className="w-28 h-8 sm:w-40  text-start">Sale</td>
                        <td className="w-28 h-8 sm:w-40 text-center">1Matic</td>
                        <td className="w-28 h-8 sm:w-40 text-center text-blue-600">
                          21DHIKO
                        </td>
                        <td className="w-28 h-8 sm:w-40 text-center text-blue-600">
                          You
                        </td>
                        <td className="w-28 h-8 sm:w-40 text-blue-600 text-end">
                          2d Ago
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Marketplace;
