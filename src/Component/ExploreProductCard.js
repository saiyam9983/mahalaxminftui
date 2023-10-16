import React from "react";
import fire from "../images/001-fire.png";
import { useState } from "react";
import Aos from "aos";
import { useEffect } from "react";

const ExploreProductCard = (props) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const [toggle, setToggle] = useState();
  const changeToggle = (index) => {
    setToggle(index);
  };
  console.log(props.data);
  return (
    <>
      <div
        onMouseOver={() => changeToggle(1)}
        onMouseOut={() => changeToggle(0)}
        data-aos={props.data.animation}>
        <div className="  rounded-xl py-6  mb-6  flex 3xl:justify-end justify-center items-center space-x-4 mx-2  hover:scale-105 duration-500">
          <div className="bg-gray-800 text-center px-6 py-2 sm:pt-3  HoverEffect rounded-xl relative">
            <img alt="images" className="my-5" src={props.data.imageUrl} />
            {props.data.id === 2 ? (
              <div className="w-full flex justify-center items-center absolute bottom-[250px] left-[-2px]">
                <button className="font-bold text-md px-10 py-5 boxbgColor rounded-xl text-white ">
                  Place A Bid
                </button>
              </div>
            ) : (
              <div className="w-full flex justify-center items-center absolute bottom-[180px] left-[-2px]">
                <div className="flex justify-center items-center bg-black p-2 px-5 rounded-2xl">
                  <img alt="images" src={fire} />
                  <span className="text-white font-bold px-1">
                    {props.data.time}
                  </span>
                </div>
              </div>
            )}
            <div className="flex justify-between items-center mt-5">
              <div className="text-white  sm:text-sm text-sm font-bold text-left ">
                {props.data.title}
              </div>

              <div className="">
                <button
                  className={
                    toggle === 1
                      ? "p-1 px-5 font-bold text-white  text-md rounded-xl bg-gray-800  border-none "
                      : "p-1 px-5  font-bold text-white  text-md rounded-xl boxbgColor "
                  }>
                  BSC
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center my-5">
              <div className="flex justify-center items-center">
                <img
                  alt="images"
                  src={props.data.imageUrl}
                  className="w-10 sm:w-14  "
                />

                <div className="flex justify-start px-2 items-start flex-col">
                  <p className="text-white text-left text-sm">Creator</p>
                  <h1 className="text-white text-lg font-bold text-left ">
                    {props.data.name}
                  </h1>
                </div>
              </div>

              <div className="flex justify-end px-2 items-end flex-col">
                <p className="text-white text-right text-sm">
                  {props.data.ownerAddress}
                </p>
                <h1 className="text-white text-lg font-bold  ">
                  {props.data.chainId == 80001 ? "Sepolia" : "ETH"}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ExploreProductCard;
