import React from "react";
import img from '../images/IMG.png';
import img2 from '../images/Image.png';
import img3 from '../images/Background.png';
import item2 from '../images/items/Item(1).png';
import item4 from '../images/items/Item(2).png';
import item5 from '../images/items/Item(3).png';
import item1 from '../images/items/Item.png';
import item3 from '../images/items/Object.png';
import Aos from 'aos';
import { useEffect } from "react";

const Hero = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])
    return (
        <>
            <div className="bg-cover bg-vulcan bg-no-repeat bg-center mt-[-105px] md:mt-[-131px] px-3 pt-20 md:pt-40 pb-12 lg:block xl:px-0 w-screen">
                <div className="lg:grid max-w-7xl mx-auto gap-x-10 grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-y-0 xl:gap-x-20 flex justify-center items-center flex-col flex-col-reverse ">

                    <div className="sm:grid flex justify-center items-center " data-aos="zoom-in-right">
                        <div className="space-y-4 md:space-y-7">
                            <h1 className="font-bold text-white text-2xl md:text-2xl lg:text-3xl 2xl:text-5xl">Discover a New Era of Crypto Currency</h1>
                            <p className="text-gray-500 font-semibold text-base md:text-sm lg:text-lg 2xl:text-xl">Maalaxmi NFT is the primier marketplace for NFT, which are digital items you can truly own. Digital items have existed for a long time, but never like this.</p>
                            <div className="flex gap-x-4 xl:gap-x-8">
                            <a className="font-bold text-white text-xs xl:text-sm" href="/" target="_blank" rel="noreferrer"> <span className="flex rounded-md items-center space-x-3 boxbgColor py-2 px-4 lg:px-6 xl:py-4 xl:px-10  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
                                    Get Started
                                </span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="  rounded-xl py-6  mb-6  flex 2xl:justify-end sm:justify-start justify-center items-center space-x-4 " data-aos="zoom-in-left">
                        <div className="bg-transparent text-center px-4 py-2 sm:pt-3   rounded-xl boxbgColor">
                          <img  className="" alt="images" src={img}/>

                          <div className="flex justify-between items-center mt-5">
                            
                            
                           <div className="text-white text-lg font-bold text-left ">
                           "Hemlet Contemplates...
                           </div>

                            <div className="">
                                <button className="text-white font-bold text-sm rounded-lg  p-2 px-4 bg-black/80">
                                    BSC
                                </button>
                            </div>
                          </div>
                          <div className="flex justify-between items-center my-5">
                            
                            <div className="flex justify-center items-center">
                                <img alt="images" src={img3} />

                           <div  className="flex justify-start px-2 items-start flex-col">
                            <p className="text-white text-left text-sm">Cretor</p>
                            <h1 className="text-white text-lg font-bold text-left ">Salvadordali</h1>
                           </div>
                            </div>

                            <div  className="flex justify-end px-2 items-end flex-col">
                            <p className="text-white text-right text-sm">Cretor Bid</p>
                            <h1 className="text-white text-lg font-bold  ">4.89 ETH</h1>
                           </div>
                          </div>
                        </div>
                        

                    
                    </div>
                </div>
                <div className="lg:grid max-w-7xl mx-auto gap-x-10 grid-cols-1 gap-y-10 xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 md:gap-y-0 xl:gap-x-20 my-10 hidden" >
                   <div className=" my-16 flex justify-center items-center w-full">
                    <img alt="images" className="w-[200px] h-[40px]" src={item1}/>
                   </div>
                   <div className=" my-16 flex justify-center items-center w-full">
                    <img alt="images" className="w-[200px] h-[40px]" src={item2}/>
                   </div>
                   <div className=" my-16 flex justify-center items-center w-full">
                    <img alt="images" className="w-[200px] h-[40px]" src={item3}/>
                   </div>
                   <div className=" my-16 flex justify-center items-center w-full">
                    <img alt="images" className="w-[200px] h-[40px]" src={item4}/>
                   </div>
                   <div className=" my-16 flex justify-center items-center w-full">
                    <img alt="images" className="w-[200px] h-[40px]" src={item5}/>
                   </div>
                </div>
                <div className="mediaClass text-center pl-4 py-2 sm:pt-3 sm:px-18 absolute top-40 right-0  bg-slate-900 rounded-xl overflow-hidden xl:flex hidden  -z-50 " data-aos="zoom-in">
                          <img alt="images" className="my-5 ml-2" src={img2}/>
                            
                        </div>
                        

            </div>

        </>
    );

}
export default Hero;