"use client";
import LoginForm from "@/components/forms/LoginForm";
import Icon from "@/components/ui/Icon";
import { formData } from "@/constants/login";
import Link from "next/link";

import React, { useState } from "react";

const Page = () => {
  const type = "newPass";
  const [isSuccessfull, setisSuccessfull] = useState(false);

  return (
    <div
      style={{
        backgroundImage: "url(/bgblur.png)",
        backgroundSize: "cover",
        backgroundPosition: "left",
      }}
      className="min-h-[90vh] -mx-[162px] px-[162px] "
    >
      <Link href={"/login"}>
        <div className="items-center pt-[120px] flex gap-2">
          <Icon src="/icons/backarrow.svg" />
          <p className="font-helvetica font-[400] text-[13px] text-[#2FC22B]">
            Back to Login
          </p>
        </div>
      </Link>
      <div className="flex justify-center items-center -mx-[162px] px-[162px] ">
        {isSuccessfull ? (
          <div className="my-[122px] ">
            <LoginForm object={formData[type]} type={type} />
          </div>
        ) : (
          <div className="my-[122px] flex flex-col items-center gap-[32px]">
            <Icon src="/icons/bigcheck.svg" w={110} h={110} />
            <p className="font-helvetica font-[500] text-[36px] ">
              Password reset successful
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
