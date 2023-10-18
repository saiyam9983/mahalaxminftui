import React from "react";
import Lottie from "lottie-react";
import createLoad from "./createLoad.json";
const CreateLoading = () => (
  <div className="p-5 max-w-[800px] w-full flex justify-center items-center m-auto">
    <Lottie animationData={createLoad} loop={true} height={300} width={500} />
  </div>
);

export default CreateLoading;
