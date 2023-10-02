import React from "react";
// import Aos from 'aos';
// import { useEffect } from "react";
 

  const NewNFT = () => {
  // useEffect(() => {
  //   Aos.init({ duration: 3000 })
  // }, [])

    return (
    <>
      <div className=" max-w-7xl mx-auto  sm:my-0 2xl:my-20  xl:gap-x-20 flex  flex-col 2xl:p-0 sm:p-20 p-4  ">
        <div className=" gap-x-10  gap-y-10   xl:gap-x-20 flex  w-full justify-start items-start mx-2 flex-col" >
          <div>
            <h1 className="text-white text-2xl sm:text-4xl 2xl:text-5xl text-start font-bold">Create New NFT</h1>
          </div>
          <div>
            <h2 className="text-gray-400 text-lg sm:text-xl lg:2xl 2xl:text-3xl text-start font-semibold ">Single Edition On Binance</h2>
          </div>
        </div>
        <div className="lg:grid max-w-7xl  mt-10 gap-x-10 grid-cols-1 gap-y-10 md:grid-cols-3 md:gap-y-0 xl:gap-x-20 flex flex-col  justify-start items-start">
          
         <div className="lg:grid  col-span-2   rounded-2xl grid-cols-1   flex flex-col  justify-start items-center p-1 ">

         <div className=" gap-x-10  gap-y-4   xl:gap-x-20 flex  w-full justify-start items-start  flex-col" s>
          <div>
            <h1 className="text-white text-lg sm:text-xl lg:2xl 2xl:text-3xl text-start font-bold my-2" >Choose Wallet</h1>
          </div>
           <div className=" w-full boxBround flex  justify-between sm:justify-around items-center p-10  bg-black">
                 < h1 className="text-white text-xl font-bold">0xfD886...BFDA</h1>
                 
              
                <div className=" ">
                            <button className="font-bold text-white text-xs xl:text-sm"> <span className="flex p-1  px-4 rounded-md items-center space-x-3  bg-stone-700 text-green-500    transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
                            Connected
                                </span>
                                </button>
                            </div>
        
                
           </div>
        </div>
       
        <div className=" gap-x-10  gap-y-10   xl:gap-x-20 flex  w-full justify-start mt-10 items-start flex-col" >
          <div>
            <h1 className="text-white text-lg sm:text-xl lg:2xl 2xl:text-3xl text-start font-bold mt-2">Upload File</h1>
          </div>
           <div className=" w-full boxBroundDashad flex justify-center items-center flex-col p-10 bg-black">
                 < h1 className="text-gray-400 text-sm sm:text-xl  my-4 font-bold text-center">PNG, GIF, WEBP, MP4 or MP3. Max 100mb.</h1>
                 
          <div className=" my-4">
                            <button className="font-bold text-white text-xs xl:text-sm outline-none" > <span className="flex boxbgColor rounded-md items-center space-x-3   py-2 px-4 lg:px-6 xl:py-4 xl:px-10  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
                            Choose Files
                                </span>
                                </button>
                            </div>
           </div>
        </div>
       
         </div>
         <div className="  gap-x-10  gap-y-4   xl:gap-x-20 flex  w-full justify-start items-start  flex-col sm:my-0 my-5 " >
          <div>
            <h1 className="text-white text-lg sm:text-xl lg:2xl 2xl:text-3xl text-start font-bold my-2">Preview</h1>
          </div>
           <div className="  boxBround flex justify-center flex-col items-start p-10   h-[500px] bg-black mx-2">
                 < h1 className="text-white text-lg sm:text-2xl  font-bold w-full text-center">0xfD886...BFDA</h1>
                 
                 < p className="text-white text-sm sm:text-xl   p-6 py-12 text-center">Upload file and choose
 collection to preview your
 brand new NFT</p>
           </div>
        </div>
          </div> 

      </div>
      <div className=" max-w-7xl mx-auto gap-x-10  gap-y-10   xl:gap-x-20 flex  flex-col 2xl:p-0 sm:p-20 p-2  ">
        <div className=" gap-x-10  gap-y-3  xl:gap-x-20 flex  w-full justify-start items-start mx-2 flex-col" >
          <div>
            <h1 className="text-white text-sm sm:text-lg lg:xl 2xl:text-2xl  text-start font-bold">Choose collection</h1>
          </div>
          <div className="boxBround p-6 flex justify-center items-center flex-col rounded-xl bg-black my-2">
            <div className="boxbgColor rounded-full h-12 w-12 my-2 "></div>
          <h1 className="text-white text:sm sm:text-xl  text-start font-bold">Maalaxmi</h1>
            <h2 className="text-gray-400 text-sm text-start font-semibold">Maa</h2>
          </div>
        </div>
        <div className="lg:grid max-w-7xl  mt-10 gap-x-10 grid-cols-1 gap-y-10 md:grid-cols-3 md:gap-y-0 xl:gap-x-20 flex flex-col  justify-start items-start">
          
         <div className="lg:grid  col-span-2   rounded-2xl grid-cols-1   flex flex-col  justify-start items-center mx-2 ">

         <div className=" gap-x-10  gap-y-4   xl:gap-x-20 flex  w-full justify-start items-start mx-2 flex-col" >
          <div>
            <h1 className="text-white text-sm sm:text-lg 2xl:text-xl  text-start font-bold">Name</h1>
          </div>
           <div className=" w-full  flex  justify-center items-center   inputBg rounded-xl">
            <input type="text" placeholder="Redeemable T-Shirt with logo&quot " className="bg-transparent p-4 h-full w-full outline-none text-white" />
           </div>
        </div>
        <div className=" gap-x-10  gap-y-4   xl:gap-x-20 flex  w-full justify-start items-start mx-2 flex-col mt-10" >
          <div>
            <h1 className="text-white text-sm sm:text-lg 2xl:text-xl  text-start font-bold">Description (Optional)</h1>
          </div>
           <div className=" w-full  flex  justify-center items-center   inputBg rounded-xl">
           <textarea name="w3review" rows="4" cols="50" className="bg-transparent p-4 h-full w-full outline-none text-gray-400 ">Purchasing you'll be able to get the real T-Shirt&quot; </textarea>   </div>
        </div>
        <div className=" gap-x-10  gap-y-4   xl:gap-x-20 flex  w-full justify-start items-start mx-2 flex-col mt-10" >
          <div>
            <h1 className="text-white text-sm sm:text-lg 2xl:text-xl  text-start font-bold">Rotalties</h1>
          </div>
           <div className=" w-full  flex  justify-between items-center   inputBg rounded-xl">
            <input type="text" placeholder="0" className="bg-transparent p-4 h-full w-3/4 outline-none text-white" />
            <input type="text" value="%" className="bg-transparent p-4 h-full w-1/4 outline-none text-end text-white" />
          
           </div>
        </div>
        <div className=" gap-x-10  gap-y-4   xl:gap-x-20 flex  w-full justify-start items-start mx-2 flex-col mt-10" >
          <div>
            <h1 className="text-white text-sm sm:text-lg 2xl:text-xl  text-start font-bold">Suggested: 0%, 10%, 20%, 30%. Maximum is 50%</h1>
          </div>

            <button className="bg-transparent sm:p-2 py-2  w-full outline-none text-white font-bold  text-xs xl:text-sm " >
            <span className="flex rounded-md items-center space-x-3 buttonBg  py-2 p-4 lg:px-6 xl:py-4 xl:px-10  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
            Show advanced settings
                                </span>
            </button>
          
        </div>
        <div className="   gap-y-10  w-full flex  justify-between items-center px-2 mt-10" >
      
          <div className=" ">
                            <button className="font-bold text-white text-xs xl:text-sm outline-none" > <span className="flex rounded-md items-center space-x-3 buttonBg  py-2 px-4 lg:px-6 xl:py-4 xl:px-10  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
                            Create item
                                </span>
                                </button>
                            </div>
          <div>
            <h1 className="text-gray-300  sm:text-md lg-text-lg xl:text-xl 2xl:text-2xl text-sm sm:text-2xl  font-bold">Unsaved changes ?</h1>
          </div>


        </div>
       
         </div>
  
          </div> 
    

      </div>
    </>
  );
};
export default NewNFT;
