import React from "react";
import { useState } from "react";
import Card1 from "../images/Rectangle 2933.png";
import Card2 from "../images/Rectangle 2934.png";

import PersonIcon from '@mui/icons-material/Person';
import EditIcon from '@mui/icons-material/Edit';
// import Aos frt { useEffect } from "react";
 

  const Profile = () => {
  // useEffect(() => {
  //   Aos.init({ duration: 3000 })
  // }, [])

const [toggle , setToggle]= useState(1);

const toggleTab =(index)=>{
  setToggle(index);
  
}


const [selected1, setSelected1] = useState('');
const [selected2, setSelected2] = useState('');
const [selected3, setSelected3] = useState('');

const handleChange1 = event => {
  setSelected1(event.target.value);

};

const handleChange2 = event => {
  setSelected2(event.target.value);

};

const handleChange3 = event => {
  setSelected3(event.target.value);

};

    return (
    <>
      <div className=" max-w-7xl mx-auto gap-x-10  gap-y-10  sm:my-20 2xl:my-40  xl:gap-x-20 flex  flex-col  px-2">
        <div className=" gap-x-10  gap-y-10   xl:gap-x-20 flex  justify-between items-center " >
          <div>
            <h1 className="text-white text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-bold capitalize">Edit your Profile</h1>
          </div>

    
          <div className=" ">
                            <button className="font-bold text-white text-xs xl:text-sm" href="/" target="_blank" rel="noreferrer"> <span className="flex rounded-md items-center space-x-3 buttonBg  py-2 px-4 lg:px-6 xl:py-4 xl:px-10  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
                            Preview
                                </span>
                                </button>
                            </div>
        </div>
        <div className="lg:grid max-w-7xl mx-auto gap-x-10 grid-cols-1 gap-y-10 md:grid-cols-3 md:gap-y-0 xl:gap-x-20 flex flex-col  justify-center items-start">
        <div className="  rounded-xl py-6   w-full flex 3xl:justify-end justify-start items-center space-x-4 " >
            <div className=" boxBorder text-center  px-6 sm:py-5 py-5   bg-black  rounded-xl   ">
              <div className={toggle === 1 ?"boxbgColor buttonBgs rounded-xl  flex justify-start items-center m-2 md:px-4  py-2 px-3 cursor-pointer" :" buttonBgs rounded-xl  flex justify-start items-center m-2 md:px-4 px-3 py-2 cursor-pointer" } onClick={()=>toggleTab(1)} >
                <span className={toggle === 1 ?"w-12 h-12 rounded-full bg-black flex justify-center items-center ":"w-12 h-12 rounded-full boxbgColor flex justify-center items-center "}>
                   <EditIcon className="w-12 h-12 outline-none text-white"/>
                </span>
                 <h1 className="text-white text-sm font-semibold px-4">Edit Profile Image</h1>
              </div>
              <div className={toggle === 2 ?"boxbgColor buttonBgs rounded-xl  flex justify-start items-center m-2 md:px-4 px-3 py-2 cursor-pointer" :" buttonBgs rounded-xl  flex justify-start items-center m-2 md:px-4 px-3 py-2 cursor-pointer" } onClick={()=>toggleTab(2)}>
                <span className={toggle === 2 ?"w-12 h-12 rounded-full bg-black flex justify-center items-center ":"w-12 h-12 rounded-full boxbgColor flex justify-center items-center "}>
                   <PersonIcon className="w-12 h-12 outline-none text-white"/>
                </span>
                 <h1 className="text-white text-sm font-semibold px-4">Personal Imformation</h1>
              </div>
            </div>
          </div>
         
    
       <div className={toggle === 1 ?" block col-span-2 "  : "hidden col-span-2 "}>

         <div className="lg:grid  col-span-2  boxBorder rounded-2xl grid-cols-1 flex   flex-col  justify-start items-start  " >

          <div className="lg:grid  col-span-2   grid-cols-1 md:grid-cols-3  flex flex-col  justify-start items-start  ">
          <div className="  rounded-xl     flex  justify-start items-start flex-col  m-5 " > 
            <h1 className="text-[#eeb853] w-full">Change Your Profile Picture</h1>
              <img alt="images" className="my-5 w-full h-[200px]"src={Card2} />

        
        <div className="  my-2">
                            <button className="font-bold text-white text-xs xl:text-sm" href="/" target="_blank" rel="noreferrer"> <span className="flex rounded-md items-center space-x-3 boxbgColor  py-2 px-4 lg:px-6 xl:py-4 xl:px-10  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
                            Upload Profile
                                </span>
                                </button>
                            </div> 
          </div>
          <div className="  rounded-xl  col-span-2    flex  justify-start items-start  flex-col m-5 " >
          <h1 className="text-[#eeb853] w-full text-start">Change Your Cover Photo </h1>
              <img alt="images" className="my-5 w-full h-[200px]"src={Card1} />
    
        <div className=" my-2 ">
                            <button className="font-bold text-white text-xs xl:text-sm" href="/" target="_blank" rel="noreferrer"> <span className="flex rounded-md items-center space-x-3 boxbgColor  py-2 px-4 lg:px-6 xl:py-4 xl:px-10  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
                            Upload Cover
                                </span>
                                </button>
                            </div> 
          </div>
          </div>
          
         </div>

       </div>

       <div className={toggle === 2 ?" block col-span-2  "  : "hidden col-span-2 "}>
       <div className="  border boxBorder rounded-xl py-8 col-span-2 bg-black mb-6 p-4  w-full"  >
                  
                  <div className="  gap-4 grid grid-cols-1 sm:grid-cols-2   w-full  items-center  ">
                  <div className="" >
         
                   <div>
                     <h1 className="text-gray-300 text-md  text-start  my-2">First Name</h1>
                   </div>
                    <div className="   flex  justify-center items-center   inputBg rounded-xl">
                     <input type="text" placeholder="First name " className="bg-transparent p-3 h-full w-full outline-none text-white" />
                    </div>
                  </div>
                    <div className="" >
         
                    <div>
                     <h1 className="text-gray-300 text-md  text-start  my-2"> Last Name</h1>
                   </div>
                    <div className="   flex  justify-center items-center   inputBg rounded-xl">
                     <input type="text" placeholder="Last name " className="bg-transparent p-3 h-full w-full outline-none text-white" />
                    </div>
                    </div>
                 </div>
                 <div className="  flex   justify-start items-start  flex-col my-4 "  >
                 <div>
                     <h1 className="text-gray-300 text-md  text-start  my-2"> Email</h1>
                   </div>
                    <div className="   flex  justify-center items-center w-full   inputBg rounded-xl">
                     <input type="email" placeholder="email" className="bg-transparent p-3 h-full w-full outline-none text-white" />
                    </div>
                 </div>
                 <div className=" gap-x-10  gap-y-2   xl:gap-x-20 flex  w-full justify-start items-start  flex-col  my-4 " >
                   <div>
                   <h1 className="text-gray-300 text-md  text-start  my-2">Edit your bio</h1>
                   </div>
                    <div className="   flex  justify-center items-center w-full   inputBg rounded-xl">
                    <textarea  name="w3review" rows="4" cols="50" className="bg-transparent p-4 h-full w-full outline-none text-white"  form="usrform">Hello, I am Alamin, A Front-end Developer...</textarea>   </div>
                 </div>
                 <div className="  gap-4  grid grid-cols-1 sm:grid-cols-2  w-full  items-center   my-4 ">
                  <div className="" >
         
                   <div>
                     <h1 className="text-gray-300 text-sm  text-start  my-2">Your Role</h1>
                   </div>
                    <div className="   flex  justify-center items-center   inputBg rounded-xl">
                     <textarea  name="w3review" rows="1" cols="50" className="bg-transparent p-3   h-full w-full outline-none text-white"  form="usrform">Front-end Devloper</textarea>  
               
                    </div>
                  </div>
                    <div className=" " >
                    <h1 className="text-gray-300 text-sm  text-start  my-2">Gender</h1>
                   
                    <div>
 
                   </div>
                   <div className="   flex  justify-center items-center w-full  inputBg rounded-xl px-4 " >
                    
                    <select value={selected3} onChange={handleChange3} className="bg-transparent p-3 h-full w-full outline-none text-white " >
                 <option disabled={true} value="">
                   Select Your Gender
                 </option>
                 <option value="Male"> Male</option>
                 <option value="Female">Female</option>
              
               </select>
         
                             </div>
                    </div>
                 </div>
                 <div className="  gap-4 grid grid-cols-1 sm:grid-cols-2  w-full  items-center  my-4 ">
                  <div className="" >
         
                  <div>
                     <h1 className=" text-sm  text-start  my-2">Location</h1>
                   </div>
                   <div className="   flex  justify-center items-center w-full  inputBg rounded-xl px-4 " >
                    
                    <select value={selected2} onChange={handleChange2} className="bg-transparent p-3 h-full w-full outline-none text-white " >
                 <option disabled={true} value="">
                   Currecy
                 </option>
                 <option value="apple"> USDC</option>
                 <option value="banana">USDC</option>
                 <option value="kiwi">USDC</option>
                 <option value="kiwi">USDC</option>
               </select>
         
                             </div>
                  </div>
                    <div className=""  >
         
                    <div>
                     <h1 className="text-gray-300 text-sm  text-start  my-2"> Phone Number</h1>
                   </div>
                    <div className="   flex  justify-center items-center   inputBg rounded-xl">
                     <input type="phone" placeholder="Phone number" className="bg-transparent p-3 h-full w-full outline-none text-white " />
                    </div>
                    </div>
                 </div>
                 <div className="  gap-4 grid grid-cols-1 sm:grid-cols-2  w-full  items-center  my-4 ">
                  <div className="" >
                  <div>
                     <h1 className=" text-sm  text-start  my-2"> Currecy</h1>
                   </div>
                    <div className="   flex  justify-center items-center w-full  inputBg rounded-xl px-4 " >
                    
           <select value={selected1} onChange={handleChange1} className="bg-transparent p-3 h-full w-full outline-none text-white " >
        <option disabled={true} value="">
          Location
        </option>
        <option value="apple"> city</option>
        <option value="banana">city</option>
        <option value="kiwi">city</option>
        <option value="kiwi">city</option>
      </select>

                    </div>
                  </div>
                    <div className="" >
         
                    <div>
                     <h1 className="text-gray-300 text-sm  text-start  my-2"> Address</h1>
                   </div>
                    <div className="   flex  justify-center items-center   inputBg rounded-xl">
                     <input type="text" placeholder="USA" className="bg-transparent p-3 h-full w-full outline-none text-white" />
                    </div>
                    </div>
                 </div> 
         
                 <div className="   gap-y-10  w-full flex  justify-center sm:justify-end items-center  mt-10 " >
               
                   <div className=" px-4 " >
                            <button className="font-bold text-white text-xs xl:text-sm" href="/" target="_blank" rel="noreferrer"> <span className="flex rounded-md items-center space-x-3 boxbgColor  py-2 px-4 lg:px-6 xl:py-4 xl:px-10  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
                            Cancle
                                </span>
                                </button>
                            </div> 
                   <div className=" px-4 " >
                            <button className="font-bold text-white text-xs xl:text-sm" href="/" target="_blank" rel="noreferrer"> <span className="flex rounded-md items-center space-x-3 boxbgColor  py-2 px-4 lg:px-6 xl:py-4 xl:px-10  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
                            Save
                                </span>
                                </button>
                            </div> 
         
         
         
                 </div>
                
                  </div>
                  </div>
         



        </div>
      </div>
    </>
  );
};
export default Profile;
