import React from "react";
import BgImage from '../images/Rectangle 2928.png';
import  Avatar  from "../images/Rectangle 2929.png";
import TwitterIcon from '@mui/icons-material/Twitter';
import ShareIcon from '@mui/icons-material/Share';
import IosShareIcon from '@mui/icons-material/IosShare';
import LinearScaleIcon from '@mui/icons-material/LinearScale';
import ExploreProductCard from "./ExploreProductCard";
import {ExploreProductData} from "./Data";
import Aos from 'aos';
import { useEffect } from "react";
 



  

    const Followers = () => {
  useEffect(() => {
      Aos.init({ duration: 1000 })
  }, [])
    return (
        <>
          {/* <div className="bg-cover bg-vulcan bg-no-repeat bg-center mt-[-105px] md:mt-[-131px] px-3 pt-40 pb-12 lg:block xl:px-0 "> */}
            
            <div className="bg-cover  h-[550px]  sm:h-[700px] bg-vulcan bg-no-repeat bg-center mt-0 px-3 pb-12 lg:block xl:px-0 flex justify-start items-start ">
               <div className="w-full  flex justify-start items-start relative  ">
                <img  alt="images"  className="w-full h-[200px] md:h-[300px]" src={BgImage} />

               
                <div className="   flex justify-center items-center  flex-col w-full  absolute bottom-[-300px] sm:bottom-[-400px] md:bottom-[-300px]">
                    <div className=" max-w-7xl mx-auto  flex justify-center items-center  flex-col  " >

                    
                    <div className="bg-black p-2 rounded-2xl my-4 ">
                        <img  alt="images" className="2xl:w-44  2xl:h-48 w-36 h-40" src={Avatar} />

                    </div>
                < div>
                    <h1 className="2xl:text-4xl xl:3xl text-2xl font-bold text-white">MRS SUNAYRA AHSAN</h1>
                </div>
                 <div>

                    <h1 className="text-sm  sm:text-xl font-bold text-white my-2"><TwitterIcon /> <span className="mx-2">it0bsession</span></h1>
                 </div>
                  < div>
                    <h1 className="text-sm  sm:text-xxl font-bold text-white my-2"> 186k<span className="mx-1 text-gray-400">Created   </span> 156<span className="mx-1 text-gray-400">Owned</span></h1>
                  </div>
                  <div className=" flex justify-center items-center md:flex-row  flex-col">

        <div className="flex justify-center items-center">

        <div className="bg-gray-200   w-20 sm:w-20 rounded-xl mx-2 my-5 ">
          <button className="text-black w-full h-full  sm:p-3 py-2 px-3  outline-none   font-bold rounded-xl">
          <ShareIcon />
          </button>
        </div>          <div className="bg-gray-200   w-20 sm:w-20 rounded-xl mx-2 my-5 ">
          <button className="text-black w-full h-full  sm:p-3 py-2 px-3  outline-none   font-bold rounded-xl">
         <IosShareIcon/>
          </button>
        </div>          <div className="bg-gray-200   w-20 sm:w-20 rounded-xl mx-2 my-5 ">
          <button className="text-black w-full h-full  sm:p-3 py-2 px-3  outline-none   font-bold rounded-xl">
          <LinearScaleIcon/> 
          
                   </button>
        </div>
        </div>
           
                  </div>
                    
                 
        </div>
                    
                </div>
               </div>
                
            </div>
            <div className="max-w-7xl mx-auto  flex justify-center sm:justify-start items-center  flex-row flex-wrap  md:my-6  rounded-xl ">
            <div className=" flex justify-center sm:justify-start items-center  flex-row flex-wrap  my-6  boxBround rounded-xl mx-2 sm:w-full p-5 gap-2" >
           
        
          <div className="m-2 ">
                            <button className="font-bold text-white text-xs xl:text-sm" href="/" target="_blank" rel="noreferrer"> <span className="flex rounded-md items-center space-x-3 buttonBg  py-2 px-4 lg:px-6 xl:py-4 xl:px-10  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
                            On sale
                                </span>
                                </button>
                            </div>
        
          <div className=" m-2">
                            <button className="font-bold text-white text-xs xl:text-sm" href="/" target="_blank" rel="noreferrer"> <span className="flex rounded-md items-center space-x-3 buttonBg  py-2 px-4 lg:px-6 xl:py-4 xl:px-10  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
                            Owned
                                </span>
                                </button>
                            </div>
        
          <div className=" m-2">
                            <button className="font-bold text-white text-xs xl:text-sm" href="/" target="_blank" rel="noreferrer"> <span className="flex rounded-md items-center space-x-3 buttonBg  py-2 px-4 lg:px-6 xl:py-4 xl:px-10  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
                            On Auction
                                </span>
                                </button>
                            </div>
        
          <div className=" m-2">
                            <button className="font-bold text-white text-xs xl:text-sm" href="/" target="_blank" rel="noreferrer"> <span className="flex rounded-md items-center space-x-3 buttonBg  py-2 px-4 lg:px-6 xl:py-4 xl:px-10  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
                            Created
                                </span>
                                </button>
                            </div>
     
          <div className="m-2">
                            <button className="font-bold text-white text-xs xl:text-sm" href="/" target="_blank" rel="noreferrer"> <span className="flex rounded-md items-center space-x-3 buttonBg  py-2 px-4 lg:px-6 xl:py-4 xl:px-10  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
                            Liked
                                </span>
                                </button>
                            </div>
          </div>
               
                </div>
                <div className="lg:grid max-w-7xl mx-auto gap-x-10 grid-cols-1 gap-y-10 md:grid-cols-3 md:gap-y-0 xl:gap-x-20 flex flex-col  justify-center items-center  sm:p-0 p-3">
                {ExploreProductData.map((item, index) => (
            <ExploreProductCard key={index} data={item} />
          ))}
        </div>
        {/* </div> */}

          
                
            
        </>
    );

}
export default Followers;