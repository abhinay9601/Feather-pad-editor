import React from "react";
import { classnames } from "../utils/general";

const CustomInput = ({ customInput, setCustomInput }) => {
  return (
    <>
      {" "}
      <textarea
        rows="2"
        value={customInput}
        onChange={(e) => setCustomInput(e.target.value)}
        placeholder={`Custom input`}
        style={{"minHeight":"20vh"}}
        className="focus:outline-none text-black w-full border-2 border-black drop-shadow-md z-10 rounded-md px-4 py-2 mx-0 hover:shadow transition duration-200 bg-white mt-2"
      ></textarea>
    </>
  );
};

export default CustomInput;
