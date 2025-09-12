import React from "react";

const CustomButton = ({ text, submitFn }) => {
  return (
    <button
      onClick={submitFn || console.log("clicked")}
      className="h-[45px] bg-[#2FC22B] flex items-center justify-center py-[15px] px-[10px] rounded-[10px]"
    >
      <p className="font-[400] text[16px] text-helvetica">{text}</p>
    </button>
  );
};

export default CustomButton;
