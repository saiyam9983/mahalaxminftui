import React from "react";
import { useState } from "react";
import fire from '../images/Cards/LiveAuction/001-fire.png';
import dontfire from '../images/Cards/LiveAuction/001-fires.png';
import RedHeart from '../images/Cards/LiveAuction/redheart.png';
import WhiteHeart from '../images/Cards/LiveAuction/heart.png';
import Aos from 'aos';
import { useEffect } from "react";
 
const LiveAuctionCard =(props)=>{
   
  const [toggle , setToggle] =useState();
  const changeToggle=(index)=>{
    setToggle(index);
  }
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

  return(
        <>
        <div onMouseOver={()=>changeToggle(1)} onMouseOut={()=>changeToggle(0) }  data-aos={props.data.animation}>
         <div className="  rounded-xl py-6  mb-6  flex 3xl:justify-end justify-center items-center space-x-4 mx-2  hover:scale-105 duration-500" >
            <div className="bg-gray-800 text-center px-6 py-2 sm:pt-3  HoverEffect rounded-xl relative " >
              <img alt="images"  className="my-5" src={props.data.image} />
              <div className="absolute top-12 right-10 h-8 w-8 bg-white rounded-full flex justify-center items-center">
                <img  src={toggle ===1  ?RedHeart : WhiteHeart} alt="heart"/>
              </div>

              <div className="flex justify-between items-center mt-5">
                    <h1 className="text-white text-sm font-bold text-left ">
                      {props.data.title}
                    </h1>
                
                <p className="text-white text-right text-sm">{props.data.cretorName}</p>
                 
              </div>
              <div className="flex justify-between items-center my-2 ">
                <div className="flex justify-center items-center ">
                  <img alt="images" className="w-10 sm:w-14  "  src={props.data.icon} />

                  <div className="flex justify-start mx-2 items-start flex-col">
                    <p className="text-white text-left text-sm"> 
                    {props.data.name}
                    </p>
                  </div>
                </div>

                <div className="flex justify-end mx-2 items-end flex-col">
                  <h1 className="text-white text-sm font-bold  ">{props.data.currency }</h1>
                </div>
              </div>
              <div className="flex justify-between items-center my-7">
                    <h1 className="text-white text-sm font-bold text-left flex justify-center items-center ">
                   <img  src={toggle === 1 ? dontfire : fire } alt="images" className="mx-2 w-5 h-5" /> {props.data.time}
                    </h1>
                
                 <button className={toggle === 1 ? "p-2 px-10 font-bold text-white buttons rounded-xl bg-gray-800 hover:bg-gray-800 " : "p-2 px-10 font-bold text-white buttons rounded-xl boxbgColor hover:bg-gray-800 "} >Bid</button> 
              </div>
            </div>
          </div>
        </div>
        
        
        </>
    );

}
export default LiveAuctionCard;