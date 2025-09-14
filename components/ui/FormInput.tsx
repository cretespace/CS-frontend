import React from "react";
import Image from "next/image";
import Icon from "./Icon";

type FormInputProps = {
  label?: string;
  placeholder?: string;
  type?: string;
  phone?: string;
  two?: string;
  signup?: string;
};

const FormInput = ({
  label,
  phone,
  placeholder,
  type,
  two,
  signup,
}: FormInputProps) => {
  return (
    <div className="flex flex-col gap-[12px]">
      <label className="font-inter font-[500]">{label}</label>

      <div className={two && "flex gap-[8px]"}>
        {two && (
          <div
            className={`border-[#2FC22B1A] flex gap-3 ${
              two && "w-[20%] bg-[#062D0866] "
            } h-[45px] flex items-center rounded-[8px] border-[1.22px] py-[23px] px-[12px]`}
          >
            <Image width={20} height={20} alt="img" src={"/signUp/flag.svg"} />
            <input className="outline-none " type={type} placeholder={phone} />
          </div>
        )}

        <div
          className={`border-[#2FC22B1A] bg-[#062D0866] ${
            two && "flex-1"
          } h-[45px] flex items-center justify-between rounded-[8px] border-[1.22px] py-[23px] px-[12px]`}
        >
          <input
            className="outline-none h-[45px] bg-transparent w-full"
            type={type}
            placeholder={type === "password" ? "**********" : placeholder}
          />
          {type === "password" && (
            <Icon src={"/signUp/closeeye.svg"} w={20} h={20} />
          )}
        </div>
      </div>
      {type === "password" && signup && (
        <p className="text-white/70 -mt-2 text-[12px] font-[300]">
          Minimum length is 8 characters
        </p>
      )}
    </div>
  );
};

export default FormInput;
