import React, { useEffect } from "react";
import { useState } from "react";
import Card1 from "../images/Rectangle 2933.png";
import Card2 from "../images/Rectangle 2934.png";

import PersonIcon from "@mui/icons-material/Person";
import EditIcon from "@mui/icons-material/Edit";
import { useLazyQuery, useMutation } from "@apollo/client";
import { userProfile } from "../graphql/queries/getUserProfile";
import { useAccount } from "wagmi";
import useUserIdFromLocalStorage from "../hooks/useUserIdFromLocalStorage";
import { updateUser } from "../graphql/mutations/updateUser";
// import Aos frt { useEffect } from "react";

const Profile = () => {
  // useEffect(() => {
  //   Aos.init({ duration: 3000 })
  // }, [])
  const [selected1, setSelected1] = useState("");
  const [selected2, setSelected2] = useState("");
  const { userId, setUserIdToLocalStorage, clearUserIdFromLocalStorage } =
    useUserIdFromLocalStorage();
  const [selected3, setSelected3] = useState("");
  const [profileData] = useLazyQuery(userProfile);
  const [updateProfileData] = useMutation(updateUser);
  const [userProfileData, setUserProfile] = useState([]);
  const [formData, setFormData] = useState({
    firstName: userProfileData.displayName ?? "",
    lastName: "",
    email: "",
    bio: userProfileData.about_details ?? "",
    currency: "",
    phoneNumber: "",
    location: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSaveData = () => {
    // Perform the save operation here, e.g., send the data to an API or update state
    console.log("Form data to be saved:", formData);

    // You can add code here to send the data to your backend or update the state with the form data.
    // Example: Call an API or update state with the formData

    updateProfileData({
      variables: {
        userId: userId,
        displayName: formData.firstName + formData.lastName,
        username: formData.firstName,
        about_details: formData.bio,
      },
      refetchQueries: [userProfile],
    })
      .then((res) => {
        alert("Updated profile data");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          bio: "",
          currency: "",
          phoneNumber: "",
          location: "",
          address: "",
        });
      })
      .catch((err) => {
        console.log("====================================");
        console.log(err);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          bio: "",
          currency: "",
          phoneNumber: "",
          location: "",
          address: "",
        });
        console.log("====================================");
      });
    // Reset the form fields after saving
  };
  const [toggle, setToggle] = useState(1);
  const { address, isConnected } = useAccount();

  const toggleTab = (index) => {
    setToggle(index);
  };

  useEffect(() => {
    if (isConnected) {
      profileData({
        variables: {
          walletAddress: address,
        },
      })
        .then((res) => {
          console.log("====================================");
          console.log(res);
          setUserProfile(res?.data?.user.user);
          console.log("====================================");
        })
        .catch((err) => {
          console.log("====================================");
          console.log(err);
          console.log("====================================");
        });
    }
  }, [isConnected]);

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
      <div className=" max-w-7xl mx-auto gap-x-10  gap-y-10  sm:my-20 2xl:my-40  xl:gap-x-20 flex  flex-col  px-2">
        <div className=" gap-x-10  gap-y-10   xl:gap-x-20 flex  justify-between items-center ">
          <div>
            <h1 className="text-white text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-bold capitalize">
              Edit your Profile
            </h1>
          </div>
          {console.log(userProfileData, "progilee")}
          <div className=" ">
            <button
              className="font-bold text-white text-xs xl:text-sm"
              href="/"
              target="_blank"
              rel="noreferrer">
              {" "}
              <span className="flex rounded-md items-center space-x-3 buttonBg  py-2 px-4 lg:px-6 xl:py-4 xl:px-10  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
                Preview
              </span>
            </button>
          </div>
        </div>
        <div className="lg:grid max-w-7xl mx-auto gap-x-10 grid-cols-1 gap-y-10 md:grid-cols-3 md:gap-y-0 xl:gap-x-20 flex flex-col  justify-center items-start">
          <div className="  rounded-xl py-6   w-full flex 3xl:justify-end justify-start items-center space-x-4 ">
            <div className=" boxBorder text-center  px-6 sm:py-5 py-5   bg-black  rounded-xl   ">
              <div
                className={
                  toggle === 1
                    ? "boxbgColor buttonBgs rounded-xl  flex justify-start items-center m-2 md:px-4  py-2 px-3 cursor-pointer"
                    : " buttonBgs rounded-xl  flex justify-start items-center m-2 md:px-4 px-3 py-2 cursor-pointer"
                }
                onClick={() => toggleTab(1)}>
                <span
                  className={
                    toggle === 1
                      ? "w-12 h-12 rounded-full bg-black flex justify-center items-center "
                      : "w-12 h-12 rounded-full boxbgColor flex justify-center items-center "
                  }>
                  <EditIcon className="w-12 h-12 outline-none text-white" />
                </span>
                <h1 className="text-white text-sm font-semibold px-4">
                  Edit Profile Image
                </h1>
              </div>
              <div
                className={
                  toggle === 2
                    ? "boxbgColor buttonBgs rounded-xl  flex justify-start items-center m-2 md:px-4 px-3 py-2 cursor-pointer"
                    : " buttonBgs rounded-xl  flex justify-start items-center m-2 md:px-4 px-3 py-2 cursor-pointer"
                }
                onClick={() => toggleTab(2)}>
                <span
                  className={
                    toggle === 2
                      ? "w-12 h-12 rounded-full bg-black flex justify-center items-center "
                      : "w-12 h-12 rounded-full boxbgColor flex justify-center items-center "
                  }>
                  <PersonIcon className="w-12 h-12 outline-none text-white" />
                </span>
                <h1 className="text-white text-sm font-semibold px-4">
                  Personal Imformation
                </h1>
              </div>
            </div>
          </div>

          <div
            className={
              toggle === 1 ? " block col-span-2 " : "hidden col-span-2 "
            }>
            <div className="lg:grid  col-span-2  boxBorder rounded-2xl grid-cols-1 flex   flex-col  justify-start items-start  ">
              <div className="lg:grid  col-span-2   grid-cols-1 md:grid-cols-3  flex flex-col  justify-start items-start  ">
                <div className="  rounded-xl     flex  justify-start items-start flex-col  m-5 ">
                  <h1 className="text-[#eeb853] w-full">
                    Change Your Profile Picture
                  </h1>
                  <img
                    alt="images"
                    className="my-5 w-full h-[200px]"
                    src={userProfileData?.avatar_url}
                  />

                  <div className="  my-2">
                    <button
                      className="font-bold text-white text-xs xl:text-sm"
                      href="/"
                      target="_blank"
                      rel="noreferrer">
                      {" "}
                      <span className="flex rounded-md items-center space-x-3 boxbgColor  py-2 px-4 lg:px-6 xl:py-4 xl:px-10  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
                        Upload Profile
                      </span>
                    </button>
                  </div>
                </div>
                <div className="  rounded-xl  col-span-2    flex  justify-start items-start  flex-col m-5 ">
                  <h1 className="text-[#eeb853] w-full text-start">
                    Change Your Cover Photo{" "}
                  </h1>
                  <img
                    alt="images"
                    className="my-5 w-full h-[200px]"
                    src={userProfileData?.bg_image}
                  />

                  <div className=" my-2 ">
                    <button
                      className="font-bold text-white text-xs xl:text-sm"
                      href="/"
                      target="_blank"
                      rel="noreferrer">
                      {" "}
                      <span className="flex rounded-md items-center space-x-3 boxbgColor  py-2 px-4 lg:px-6 xl:py-4 xl:px-10  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
                        Upload Cover
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggle === 2 ? " block col-span-2  " : "hidden col-span-2 "
            }>
            <div className="  border boxBorder rounded-xl py-8 col-span-2 bg-black mb-6 p-4  w-full">
              <div className="  gap-4 grid grid-cols-1 sm:grid-cols-2   w-full  items-center  ">
                <div className="">
                  <div>
                    <h1 className="text-gray-300 text-md  text-start  my-2">
                      First Name
                    </h1>
                  </div>
                  <div className="   flex  justify-center items-center   inputBg rounded-xl">
                    <input
                      type="text"
                      placeholder="First name"
                      defaultValue={userProfileData?.displayName}
                      value={formData.firstName}
                      name="firstName"
                      onChange={handleInputChange}
                      className="bg-transparent p-3 h-full w-full outline-none text-white"
                    />
                  </div>
                </div>
                <div className="">
                  <div>
                    <h1 className="text-gray-300 text-md  text-start  my-2">
                      {" "}
                      Last Name
                    </h1>
                  </div>
                  <div className="   flex  justify-center items-center   inputBg rounded-xl">
                    <input
                      type="text"
                      placeholder="Last name "
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="bg-transparent p-3 h-full w-full outline-none text-white"
                    />
                  </div>
                </div>
              </div>
              <div className="  flex   justify-start items-start  flex-col my-4 ">
                <div>
                  <h1 className="text-gray-300 text-md  text-start  my-2">
                    {" "}
                    Email
                  </h1>
                </div>
                <div className="   flex  justify-center items-center w-full   inputBg rounded-xl">
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-transparent p-3 h-full w-full outline-none text-white"
                  />
                </div>
              </div>
              <div className=" gap-x-10  gap-y-2   xl:gap-x-20 flex  w-full justify-start items-start  flex-col  my-4 ">
                <div>
                  <h1 className="text-gray-300 text-md  text-start  my-2">
                    Edit your bio
                  </h1>
                </div>
                <div className="   flex  justify-center items-center w-full   inputBg rounded-xl">
                  <textarea
                    name="bio"
                    rows="4"
                    cols="50"
                    value={formData.bio}
                    onChange={handleInputChange}
                    className="bg-transparent p-4 h-full w-full outline-none text-white"
                    form="usrform">
                    {userProfileData?.about_details}
                  </textarea>{" "}
                </div>
              </div>
              <div className="  gap-4  grid grid-cols-1 sm:grid-cols-2  w-full  items-center   my-4 "></div>
              <div className="  gap-4 grid grid-cols-1 sm:grid-cols-2  w-full  items-center  my-4 ">
                <div className="">
                  <div>
                    <h1 className=" text-sm  text-white text-start  my-2">
                      Currency
                    </h1>
                  </div>
                  <div className="   flex  justify-center items-center w-full  inputBg rounded-xl px-4 ">
                    <select
                      value={formData.currency}
                      name="currency"
                      onChange={handleInputChange}
                      className="bg-transparent p-3 h-full w-full outline-none text-white ">
                      <option disabled={true} value="">
                        Currency
                      </option>
                      <option value="BNB"> BNB</option>
                    </select>
                  </div>
                </div>
                <div className="">
                  <div>
                    <h1 className="text-gray-300 text-sm  text-start  my-2">
                      {" "}
                      Phone Number
                    </h1>
                  </div>
                  <div className="   flex  justify-center items-center   inputBg rounded-xl">
                    <input
                      type="phone"
                      placeholder="Phone number"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="bg-transparent p-3 h-full w-full outline-none text-white "
                    />
                  </div>
                </div>
              </div>
              <div className="  gap-4 grid grid-cols-1 sm:grid-cols-2  w-full  items-center  my-4 ">
                <div className="">
                  <div>
                    <h1 className=" text-sm  text-start  my-2"> Currecy</h1>
                  </div>
                  <div className="   flex  justify-center items-center w-full  inputBg rounded-xl px-4 ">
                    <select
                      value={formData.location}
                      name="location"
                      onChange={handleInputChange}
                      className="bg-transparent p-3 h-full w-full outline-none text-white ">
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
                <div className="">
                  <div>
                    <h1 className="text-gray-300 text-sm  text-start  my-2">
                      {" "}
                      Address
                    </h1>
                  </div>
                  <div className="   flex  justify-center items-center   inputBg rounded-xl">
                    <input
                      type="text"
                      value={formData.address}
                      name="address"
                      onChange={handleInputChange}
                      placeholder="USA"
                      className="bg-transparent p-3 h-full w-full outline-none text-white"
                    />
                  </div>
                </div>
              </div>

              <div className="   gap-y-10  w-full flex  justify-center sm:justify-end items-center  mt-10 ">
                <div className=" px-4 ">
                  <button
                    className="font-bold text-white text-xs xl:text-sm"
                    href="/"
                    target="_blank"
                    rel="noreferrer">
                    {" "}
                    <span className="flex rounded-md items-center space-x-3 boxbgColor  py-2 px-4 lg:px-6 xl:py-4 xl:px-10  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
                      Cancle
                    </span>
                  </button>
                </div>
                <div className=" px-4 ">
                  <button
                    className="font-bold text-white text-xs xl:text-sm"
                    href="/"
                    target="_blank"
                    onClick={handleSaveData}
                    rel="noreferrer">
                    {" "}
                    <span className="flex rounded-md items-center space-x-3 boxbgColor  py-2 px-4 lg:px-6 xl:py-4 xl:px-10  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
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
