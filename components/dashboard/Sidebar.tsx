"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Logo } from "../ui/ReusableComponents";
import { dashboardNav } from "@/constants/dashboard";
import Icon from "../ui/Icon";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Sidebar = () => {
  const [isDropdownClicked, setIsDropdownClicked] = useState(false);
  const pathname = usePathname();
  return (
    <div className="px-[22px] py-[18px] hidden lg:block fixed top-[12px] w-[206px] overflow-y-auto left-[12px] rounded-[10px] border-[1px] border-white/5 bg-[#141414]">
      <Logo />
      <div className="space-y-[16px] mt-[44px]">
        {dashboardNav.map((item, index) => (
          <div key={index} className="space-y-[14px]">
            <div
              className={`-mx-[22px] cursor-pointer h-[38px] items-center px-[22px] flex gap-[12px]  py-[10.86px] ${
                pathname === item.route ? "bg-[#2FC22B0D]  text-[#A2FF9F]" : ""
              } ${
                item.name === "My Orders"
                  ? "border-t-[0.5px] border-white/10 pt-8"
                  : "rounded-[5px] "
              }`}
            >
              <Icon src={item.icon} w={18} h={18} />
              <p
                className={`font-inter font-[500] ${
                  pathname === item.route ? "text-[#A2FF9F]" : "text-white/60"
                }`}
              >
                {item.name}
              </p>
              {pathname === item.route && (
                <div className="rounded-l-[14px] w-[6px] bg-[#A2FF9F] h-[36.86px] ml-auto -mr-[22px]" />
              )}

              {item.name === "My Orders" && (
                <Image
                  width={8}
                  height={4}
                  src="/dash/dbwhite.svg"
                  alt="img"
                  className="ml-auto transition ease-in-out duration 10s"
                  onClick={() => setIsDropdownClicked(!isDropdownClicked)}
                />
              )}
            </div>

            {item.name === "My Orders" && (
              <>
                {!isDropdownClicked && (
                  <div className="border-b-[0.5px] pb-8 border-white/10 -mx-[22px]  pl-[52px] px-[22px] space-y-[15px]">
                    {item.options.map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center gap-[8px]"
                      >
                        <p
                          className={`w-[8.08px] h-[8.08px] rounded-full ${item.bgColor}`}
                        ></p>
                        <p className="text-[12px] text-white/60">{item.name}</p>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
