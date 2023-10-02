import React from "react";
import { useState } from "react";
import ExploreProductImage1 from "../images/Cards/ExploreProduct/ExploreProductImage1.png";
// import Aos from 'aos';
// import { useEffect } from "react";
 

    
    const Sell = () => {
  // useEffect(() => {
  //   Aos.init({ duration: 3000 })
  // }, [])
  const [selected1, setSelected1] = useState("");
  const [selected2, setSelected2] = useState("");


  const handleChange1 = (event) => {
    setSelected1(event.target.value);
  };

  const handleChange2 = (event) => {
    setSelected2(event.target.value);
  };

 

  return (
    <>
      <div className=" max-w-7xl mx-auto   sm:my-20   flex  flex-col p-4  bg-black  shadowbox">
        <div className="   gap-y-10  flex  justify-start items-start mx-2 my-5" >
          <div>
            <h1 className="text-white text-2xl lg:text-3xl 2xl:text-4xl font-semibold capitalize">
              List For Sale
            </h1>
          </div>
        </div>

        <div className="lg:grid w-full mx-auto  grid-cols-1  md:grid-cols-5 md:gap-y-0  gap-5 flex flex-col-reverse  justify-center items-start">
          <div className="  rounded-xl py-4  bg-black mb-6    w-full col-span-3 mr-10 lg:pr-10">
            <div className="w-full inputBg rounded-xl text-white flex justify-start items-start flex-col p-4 mb-5 relative" >
              <h1 className="font-semibold text-md sm:text-xl my-2">
                Fixed Price
              </h1>
              <p className="text-sm sm:text-md font-normal my-2 ">
                The item is listed at the price set set.
              </p>
              <div>
                <div className="p-1 border-2 border-[#eeb200] rounded-full absolute right-10 top-10">
                    <div className="rounded-full h-3 w-3 bg-[#eeb200]">

                    </div>
                </div>
              </div>
            </div>
            <div className="w-full inputBg rounded-xl text-white flex justify-start items-start flex-col p-4 my-5" >
              <h1 className="font-semibold text-md sm:text-xl my-2">
                Sell to highest bidder
              </h1>
              <p className="text-sm sm:text-md font-normal my-2 ">
                The item is listed for auction.{" "}
                <span className="font-bold">Learn More</span>{" "}
              </p>
            </div>
            <div className="my-5">
              <h1 className="text-white text-lg md:text-xl  lg:text-2xl font-medium capitalize" >
                Set A Price
              </h1>
            </div>

            <div className="    grid grid-cols-1 sm:grid-cols-2   w-full  items-center gap-5">
              <div className="" >
                <div>
                  <h1 className="text-gray-200 text-sm  text-start  my-2">
                    Startin Price
                  </h1>
                </div>
                <div className="   flex  justify-center items-center   inputBg rounded-xl">
                  <input
                    type="number"
                    placeholder="Amount"
                    className="bg-transparent p-4 h-full w-full placeholder:text-white outline-none text-white"
                  />
                </div>
              </div>
              <div className=" " >
                <h1 className=" text-sm  text-start  my-2">.</h1>

                <div></div>
                <div className="   flex  justify-center items-center w-full  inputBg rounded-xl px-4 ">
                  <select
                    value={selected1}
                    onChange={handleChange1}
                    className="bg-transparent p-4 h-full w-full outline-none text-white "
                  >
                    <option disabled={true} value="">
                      BNB
                    </option>
                    <option value="Male"> BNB</option>
                    <option value="Female">BNB</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="my-5" >
              <h1 className="text-white text-lg md:text-xl  lg:text-2xl font-medium capitalize">
                {" "}
                Duration
              </h1>
            </div>

            <div className="" >
              <div className="   flex  justify-center items-center w-full  inputBg rounded-xl px-4 ">
                <select
                  value={selected2}
                  onChange={handleChange2}
                  className="bg-transparent p-4 h-full w-full outline-none text-white font-semibold "
                >
                  <option disabled={true} value="">
                    1 Month
                  </option>
                  <option value="apple"> 2 Month</option>
                  <option value="banana"> 3 Month</option>
                  <option value="kiwi"> 4 Month</option>
                  <option value="kiwi"> 5 Month</option>
                </select>
              </div>
            </div>
            <div>
            <div className="my-5" >
              <h1 className="text-white text-lg md:text-xl  lg:text-2xl font-medium capitalize">
                {" "}
                More Option
              </h1>
            </div>
                <div className="w-full" >
                    <table className="w-full text-gray-400 font-medium text-lg border-collapse">
                        <tbody className="w-full">
                            <tr className="w-full h-12 border-b border-gray-400">
                                <td>Listing Price</td>
                                <td className="text-end"> ---BNB  </td>
                            </tr>
                             <tr className="w-full h-12 border-b border-gray-400">
                                <td>Marketplace</td>
                                <td className="text-end">2.5%</td>
                            </tr>
                            <tr className="w-full h-12 border-b border-gray-400">
                                <td>Creater Earning</td>
                                <td className="text-end">0 </td>
                            </tr>
                            
                            <tr className="w-full h-20  text-white text-xl sm:text-2xl">
                                <td>Total Potential Earning</td>
                                <td className="text-end">--BNB</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="w-full my-5" >

                <button className=" py-4 rounded-xl flex justify-center boxbgColor items-center w-full outline-none text-white font-bold  text-xs xl:text-sm transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300" >
            Complete Listing
            </button>
                </div>
            </div>

          </div>
          <div className="  rounded-2xl     w-full flex  justify-center items-center flex-col  col-span-2" >
            <div className=" px-10 pt-10 pb-5 sm:pt-20 sm:px-20  inputBg  flex justify-center items-center flex-col md:max-w-2xl max-w-md  rounded-xl   ">
              <img
                className="w-[300px]"
                src={ExploreProductImage1}
                alt="exploreProduct"
              />
              <div className="text-white font-medium text-xl w-full text-start mt-10 my-3">
                Testnft01
              </div>
              <div className="text-white font-medium text-3xl w-full text-start  my-3">
                Test NFT 1
              </div>
              <div className="text-white font-medium text-xl w-full text-start  my-3">
                --BNB
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Sell;
