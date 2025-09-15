import React from "react";
import Icon from "./Icon";

const Upload = ({ accountType }) => {
  return (
    <div>
      <p className="mb-2 font-inter font-[400]">
        Upload {accountType === "Student" ? "Student ID" : "Office Photo"}{" "}
      </p>

      <div className="h-[186px]  bg-[#062D0866] border-[1px] border-[#2FC22B1A] rounded-[8px] flex justify-center items-center flex-col gap-[10px]">
        <Icon src={"/signUp/upload.svg"} w={46} h={46} />
        <div>
          <span className="font-semibold font-inter text-white/50">
            Drag files here or{" "}
          </span>
          <span className="font-semi-bold text-[#2FC22B]"> Browse </span>
        </div>
        <p className="text-[11px] text-white/70 font-[300]">
          Selected Format: (JPEG, PNG, Max 5MB)
        </p>
      </div>

      <div className="h-[67px] mt-3 py-[12px] items-center px-[15px] bg-[#062D0866] border-[1px] border-[#2FC22B1A] rounded-[8px] flex gap-[21px]">
        <Icon src={"/icons/success.svg"} />
        <div>
          <p className="font-semibold text-[12px] mb-2">
            {accountType === "Student" ? "Student ID" : "Office Photo"}{" "}
          </p>
          <Icon src="/images/progressbar.svg" w={498} h={3} />

          <div className="flex justify-between">
            <p className="font-semibold text-[#2FC22B] text-[10px] text-white/60 mt-2 ">
              {" "}
              12300 kb
            </p>
            <p className="font-semibold text-[#2FC22B] text-[10px] text-white/60 mt-2 ">
              {" "}
              100%{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
