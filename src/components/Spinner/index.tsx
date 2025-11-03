import React from "react";
import { ClipLoader } from "react-spinners";

const Spinner: React.FC = () => {
  return (
    <div className=" fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-[rgba(0,0,0,0.1)]">
      <div className=" bg-white px-7 py-4 rounded-2xl text-center">
        <ClipLoader
          color={"#1F2B57"}
          loading={true}
          size={60}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        <p className=" text-[#1F2B57]">Loading ...</p>
      </div>
    </div>
  );
};

export default Spinner;
