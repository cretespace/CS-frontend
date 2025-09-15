"use client";
import LoginForm from "@/components/forms/LoginForm";
import { formData } from "@/constants/login";

import React, { useState } from "react";

const Page = () => {
  const [userType, setUserType] = useState<string>("login");

  return (
    <div
      style={{
        backgroundImage: "url(/bgblur.png)",
        backgroundSize: "cover",
        backgroundPosition: "left",
      }}
      className="flex justify-center items-center min-h-[90vh] -mx-[162px] px-[162px] "
    >
      {/* Form div */}
      <div className="my-[122px] ">
        <LoginForm
          setUserType={setUserType}
          object={formData[userType]}
          userType={userType}
        />
      </div>
    </div>
  );
};

export default Page;
