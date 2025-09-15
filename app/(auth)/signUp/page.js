"use client";
import SIgnupForm from "@/components/forms/SIgnupForm";
import Icon from "@/components/ui/Icon";
import {
  bCenterSignupInfo,
  businessSignupInfo,
  formItems,
  individualSignupInfo,
  studentSignupInfo,
} from "@/constants";
import Cookies from "js-cookie";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [accountType, setAccountType] = useState("Individual");

  useEffect(() => {
    const cookieType = Cookies.get("accountType");
    if (cookieType) {
      setAccountType(cookieType);
    }
  }, []);

  let signupInfo;
  if (accountType === "Individual") {
    signupInfo = individualSignupInfo;
  } else if (accountType === "Business") {
    signupInfo = businessSignupInfo;
  } else if (accountType === "Student") {
    signupInfo = studentSignupInfo;
  } else if (accountType === "Business Center") {
    signupInfo = bCenterSignupInfo;
  }

  return (
    <section
      style={{
        backgroundImage: "url(/bgblur.png)",
        backgroundSize: "cover",
        backgroundPosition: "left",
      }}
      className="min-h-screen -mx-[162px] px-[162px]"
    >
      <div className="lg:flex gap-[5rem] pt-[85px] ">
        {/* Left Section */}
        <div className="flex-[0.5]  max-h-[85vh] overflow-scroll scroll-hide flex-shrink-0 flex-col gap-[54px] fixed top-[80px] h-fit hidden md:flex">
          <div>
            <h1 className="font-[500] text-[36px] font-helvetica">
              Create your Account
            </h1>
            <h2 className="text-[#2FC22B] font-[500] text-[24px]">
              {accountType} Account
            </h2>
          </div>

          <div className="flex flex-col gap-[36px]">
            {signupInfo?.map((item, index) => (
              <div key={index} className="flex flex-col gap-[12px]">
                <Icon src={item.icon} />
                <h3 className="font-[400] text-[18px] font-inter">
                  {item.text}
                </h3>
                <h4 className="font-[300] text-[12px] text-white/60 w-[80%] font-helvetica -mt-1 leading-[15px]">
                  {item.subtext}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Form Section */}
        <div className="2xl:w-[671px] lg:w-[571px]  ml-auto overflow-scroll scroll-hide mb-10">
          <SIgnupForm
            accountType={accountType}
            setAccountType={setAccountType}
            signup
            isSignup
            array={formItems[accountType]}
            cta="Sign Up"
            bottomText="Already have an account?"
            link="Login"
          />
        </div>
      </div>
    </section>
  );
};

export default Page;
