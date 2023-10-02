import React from "react";
import icon1 from "../images/Facebook.png";
import icon2 from "../images/instagram.png";
import icon3 from "../images/twitter.png";

import logo from "../images/image 2.png";
// import Aos from 'aos';
// import { useEffect } from "react";
 



  
  



const Footer = () => {
  // useEffect(() => {
  //     Aos.init({ duration: 3000 })
  // }, [])
  return (
    <>
      <div className=" max-w-7xl mx-auto gap-x-10  gap-y-10   xl:gap-x-20 flex  flex-col mt-20  p-3">
        <div className="sm:grid max-w-7xl mx-auto gap-x-10 grid-cols-1 gap-y-10 xl:grid-cols-4 sm:grid-cols-2 md:gap-y-0 xl:gap-x-20 flex flex-col  justify-center items-start">
          <div className="flex justify-start items-start flex-col" >
            <div className="  rounded-xl py-3  mb-6  flex 3xl:justify-end justify-center items-center space-x-4 ">
              <div className="flex">
                <a
                  className="-m-1.5 p-1.5 text-white flex justify-center items-center "
                  href="/"
                >
                  <span className="sr-only">Your Company</span>
                  <img alt="images"
                    className="w-[48px] h-[46px] rounded-[500px ] border-solid border-1 "
                    src={logo}
                  />
                  <div className="text-white  text-[22px] font-bold px-2">
                    Maalaxmi
                  </div>
                </a>
              </div>
            </div>
            <div>
              <p className="text-gray-300 text-sm px-2">
                The world’s first and largest digital  marketplace for crypto
                collectibles and non-fungible tokens (NFTs). Buy, sell, and
                discover exclusive digital items.
              </p>
            </div>
          </div>
          <div className="flex justify-start items-start flex-col" >
            <div className="  rounded-xl py-3  mb-6  flex  justify-start items-center  px-2">
                
              <div className="text-white  text-[22px] font-bold ">
                    Resources
                  </div>
                
              
            </div>
            <div>
              <p className="text-gray-300 text-sm px-3 py-2">
             Help center </p>
             <p className="text-gray-300 text-sm px-3 py-2">
             Plateform status</p>
             <p className="text-gray-300 text-sm px-3 py-2">
             Partners</p>
             <p className="text-gray-300 text-sm px-3 py-2">
             Gas free marketplace</p>
             <p className="text-gray-300 text-sm px-3 py-2">
             Blog</p>
            </div>
          </div> 
          <div className="flex justify-start items-start flex-col" >
            <div className="  rounded-xl py-3  mb-6  flex  justify-start items-center  px-2">
                
              <div className="text-white  text-[22px] font-bold ">
                    Company
                  </div>
                
              
            </div>
            <div>
              <p className="text-gray-300 text-sm px-3 py-2">
             Our Team </p>
             <p className="text-gray-300 text-sm px-3 py-2">
             About us </p>
             <p className="text-gray-300 text-sm px-3 py-2">
             Contact us </p>
             <p className="text-gray-300 text-sm px-3 py-2">
             Career </p>
            </div>
          </div>        
            <div className="flex justify-start items-start flex-col" >
            <div className="  rounded-xl py-3  mb-6  flex 3xl:justify-end justify-center items-center space-x-4 px-2">
              <div className="flex">    
              <div className="text-white  text-[22px] font-bold px-2">
                    Contact
                  </div>
                
              </div>
            </div>
            <div>
              <p className="text-gray-300 text-sm px-3 py- 2">
              2715 Ash Dr. San Jose, 
              </p>
              <p className="text-gray-300 text-sm px-3 py- 2">
               South Dakota 83475
              </p>
            </div>
            <div className=" flex justify-center items-center flex-row px-3 py-4">
                <img alt="images"  className="w-8 h-8 mr-4" src={icon1}/>
                <img alt="images"  className="w-8 h-8 mx-4" src={icon3}/>
                <img alt="images"  className="w-8 h-8 mx-4" src={icon2}/>



            </div>
          </div>
          
        </div>
        <div className="flex justify-start items-start flex-col">
            <div>
              <p className="text-white text-sm px-3 my-10">
              2023 All Right Reserved
              </p>
            </div>
          </div>

      </div>
    </>
  );
};
export default Footer;
