import React from "react";
import {NewestItemsData} from  './Data';
import NewestItemsCard from "./NewestItemsCard";
import Aos from 'aos';
import { useEffect } from "react";
 



const NewestItems = () => {
  
  
        useEffect(() => {
            Aos.init({ duration: 1000 })
        }, [])
  return (
    <>
      <div className=" max-w-7xl mx-auto gap-x-10  gap-y-10   xl:gap-x-20 flex  flex-col p-3 ">
        <div className=" gap-x-10  gap-y-10   xl:gap-x-20 flex  justify-between items-center px-2 py-4" >
          <div>
            <h1 className="text-white text-xl lg:text-2xl 2xl:text-4xl font-bold">
              Newest Items
            </h1>
          </div>

        

          <div className=" ">
                            <a className="font-bold text-white text-xs xl:text-sm" href="/" target="_blank" rel="noreferrer"> <span className="flex rounded-md items-center space-x-3 buttonBg  py-2 px-4 lg:px-6 xl:py-4 xl:px-10  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
                            View More
                                </span>
                                </a>
                            </div>
        </div>
        <div className="sm:grid max-w-7xl mx-auto gap-x-10 grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3 md:gap-y-0 xl:gap-x-20 flex flex-col  justify-center items-center">
        {NewestItemsData.map((item, index) => (
            <NewestItemsCard key={index} data={item} />
          ))}     
        </div>
      </div>
    </>
  );
};
export default NewestItems;
