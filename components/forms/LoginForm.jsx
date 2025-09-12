import React from "react";
import FormInput from "../ui/FormInput";
import CustomButton from "../ui/CustomButton";
import Icon from "../ui/Icon";
import Link from "next/link";

const LoginForm = ({ object, setType, type }) => {
  return (
    <form className="p-10 lg:w-[646px]  rounded-[18.94px] flex flex-col gap-[28px] border-[0.95px] border-[#0C520A80]">
      <div>
        <p className="font-helvetica text-[40px] text-center font-[500]">
          {object?.title}
        </p>
        <p className=" text-center font-[400] text-white/80">
          {object?.subtitle}
        </p>
      </div>

      {object.array?.map((item, index) => (
        <FormInput
          key={index}
          label={item.label}
          placeholder={item.placeholder}
          type={item.type}
          login
        />
      ))}

      {type === "login" && (
        <div className="flex justify-between">
          <div className="flex gap-1 items-center">
            <Icon src={"/signUp/check.svg"} w={20} h={20} />
            <p className="text-white/60 font-inter font-[400]">Remember Me</p>
          </div>
          <p
            className="cursor-pointer text-[#2FC22B] font-inter font-[600]"
            onClick={() => setType("trouble")}
          >
            Forgot Password?
          </p>
        </div>
      )}

      <CustomButton
        submitFn={object.submitFn}
        text={object?.btnText || "Login"}
      />

      <div className="flex justify-center gap-1 -mt-4">
        <p className="font-inter font-[400] text-white/70">{object.btmText}</p>
        <a
          href={object?.btmRoute || ""}
          className="text-[#2FC22B] font-inter font-[500] cursor-pointer"
        >
          {object.btmLabel}
        </a>
      </div>
    </form>
  );
};

export default LoginForm;
