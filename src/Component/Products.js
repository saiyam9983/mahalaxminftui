import React from "react";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { ExploreProductData } from "./Data";
import ExploreProductCard from "./ExploreProductCard";
import { useState } from "react";
import Aos from "aos";
import { useEffect } from "react";

const Products = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [selected1, setSelected1] = useState("");
  const [selected2, setSelected2] = useState("");
  const [selected3, setSelected3] = useState("");

  const handleChange1 = (event) => {
    setSelected1(event.target.value);
  };

  const handleChange2 = (event) => {
    setSelected2(event.target.value);
  };

  const handleChange3 = (event) => {
    setSelected3(event.target.value);
  };
  return (
    <>
      <div className=" max-w-7xl mx-auto   flex  flex-col p-3  sm:my-20">
        <div className=" my-4 flex  justify-between items-center ">
          <div>
            <h1 className="text-white text-xl lg:text-2xl 2xl:text-4xl  font-bold">
              Explore Product
            </h1>
          </div>

          <div className=" ">
            <a
              className="font-bold text-white text-xs xl:text-sm"
              href="/"
              target="_blank"
              rel="noreferrer">
              {" "}
              <span className="flex rounded-md items-center space-x-3 buttonBg  py-2 px-4 lg:px-6 xl:py-4 xl:px-10  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
                <FilterAltOutlinedIcon className="text-white" /> Filter
              </span>
            </a>
          </div>
        </div>
        <div className="grid w-full mx-auto  grid-cols-1 gap-y-10 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5  gap-8  justify-center items-center  mb-10">
          <div className="flex justify-start items-start flex-col w-full h-10 sm:my-0 my-2 ">
            <p className=" text-xs text-gray-200 ">Likes</p>
            <div className="my-2 p-3 flex justify-center  items-center bg-brown w-full ">
              <select
                value={selected1}
                onChange={handleChange1}
                className="bg-transparent h-full w-full text-white">
                <option disabled={true} value="">
                  Most Liked
                </option>
                <option value="apple">15 Days</option>
                <option value="banana">30 Days</option>
                <option value="kiwi">65 Days</option>
                <option value="kiwi">90 Days</option>
              </select>
            </div>
          </div>
          <div className="flex justify-start items-start flex-col w-full h-10 sm:my-0 my-2 ">
            <p className=" text-xs text-gray-200 ">Catagory</p>
            <div className="my-2 p-3 flex justify-center  items-center bg-brown w-full ">
              <select
                value={selected2}
                onChange={handleChange2}
                className="bg-transparent h-full w-full text-white">
                <option disabled={true} value="">
                  Catagory
                </option>
                <option value="apple">15 Days</option>
                <option value="banana">30 Days</option>
                <option value="kiwi">65 Days</option>
                <option value="kiwi">90 Days</option>
              </select>
            </div>
          </div>
          <div className="flex justify-start items-start flex-col w-full h-10  sm:my-0 my-2">
            <p className=" text-xs text-gray-200 ">Sale Type</p>
            <div className="my-2 p-3 flex justify-center  items-center bg-brown w-full ">
              <select
                value={selected3}
                onChange={handleChange3}
                className="bg-transparent h-full w-full text-white">
                <option disabled={true} value="">
                  Sale Type
                </option>
                <option value="apple">15 Days</option>
                <option value="banana">30 Days</option>
                <option value="kiwi">65 Days</option>
                <option value="kiwi">90 Days</option>
              </select>
            </div>
          </div>
          <div className="flex justify-start items-start flex-col w-full h-10 sm:my-0 my-2 ">
            <p className=" text-xs text-gray-200 ">Price</p>
            <div className="my-2  grid grid-cols-3  items-center w-full ">
              <button className="bg-zinc-700 text-white  px-5 py-3 ">
                Min
              </button>
              <div className="text-white w-full text-center  font-bold">To</div>
              <button className="bg-zinc-700 text-white  px-5  py-3">
                Max
              </button>
            </div>
          </div>
          <div className="flex justify-start items-start flex-col w-full h-10 sm:my-0 my-2 ">
            <p className=" text-xs text-gray-200 ">Submit</p>

            <div className=" w-full my-2">
              <button className="w-full h-ful text-center boxbgColor py-3 text-white font-semibold rounded-xl">
                Submit
              </button>
            </div>
          </div>
        </div>

        <div className="sm:grid max-w-7xl mx-auto gap-x-10 grid-cols-1 gap-y-10  md:grid-cols-2 lg:grid-cols-3 md:gap-y-0 xl:gap-x-20 flex flex-col  justify-center items-center">
          {ExploreProductData.map((item, index) => (
            <ExploreProductCard key={index} data={item} />
          ))}
        </div>

        <div className=" mx-auto  w-40 sm:w-48 flex justify-center items-center ">
          <a
            className="font-bold text-white text-xs xl:text-sm"
            href="/"
            target="_blank"
            rel="noreferrer">
            {" "}
            <span className="flex rounded-md items-center space-x-3 buttonBg  py-2 px-4 lg:px-6 xl:py-4 xl:px-10  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
              View More
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Products;
