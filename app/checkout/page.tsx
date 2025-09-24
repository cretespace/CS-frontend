"use client";
import CheckoutForm from "@/components/forms/CheckoutForm";
import TopSection from "@/components/layout/TopSection";
import Icon from "@/components/ui/Icon";
import { toggleContent } from "@/constants";
import Link from "next/link";
import React, { useState } from "react";

const page = () => {
  const [type, setType] = useState("Business");
  const obj = toggleContent[type];
  return (
    <div className="px-[162px]">
      <TopSection />
      <div className="pt-[132px]">
        {/* back routing arrow */}
        <div className="items-center flex gap-2 fixed top-[81px] -ml-2">
          <Icon src="/icons/backarrow.svg" />
          <p className="font-helvetica font-[400] text-[13px] text-[#2FC22B]">
            Previous
          </p>
        </div>

        {/* body */}
        <div className="lg:flex justify-between  ">
          {/* left alternating content */}
          <div className=" mb-5 fixed h-[75vh] overflow-scroll  scroll-hide flex-col ">
            {/* sub text */}
            <p className="font-helvetica text-[#2FC22B] ">
              Subscription for <span className="font-[700]">{type}</span>{" "}
              Account
            </p>
            {/* price */}
            <div className="flex items-end gap-[9px] my-2">
              <p className="text-[64px] font-[500] leading-none">{obj.price}</p>
              {/* Per month stacked */}
              <div className="flex flex-col leading-none text-white/70 ">
                <span>Per</span>
                <span>month</span>
              </div>
            </div>

            <p className="text-white/60">{obj.subtext}</p>

            {/* card */}
            <div className="w-[496px] my-[3rem] rounded-[14.47px]  border-[1.96px] border-[#2FC22B33] gap-[9.65px] ">
              {/* top */}
              <div className="flex rounded-t-[14.47px] justify-between bg-[#2FC22B33] px-[22.19px] py-[13.51px]">
                {/* top left */}
                <div>
                  <p className="font-[700] text-[13.51px] text-[#A2FF9F]">
                    {type}
                    <span className="font-[400]"> Account</span>
                  </p>
                  <p className="text-[11.58px] text-white/60">Billed Monthly</p>
                </div>

                {/* top right */}
                <p className="font-[500] text-[15.44px] text-[#A2FF9F]">
                  {obj.price}
                </p>
              </div>

              {/* bottom*/}
              <div className="flex justify-between bg-[#093E0F73] rounded-b-[14.47px]   px-[22.19px] py-[13.51px]">
                {/* bottom left */}
                <div className="flex items-center gap-[11.58px]">
                  <Icon src="/icons/toogle.svg" w={35.38} h={17.68} />
                  <p className="font-inter rounded-[3.86px] leading-[23.16px] text-[11.58px] bg-[#A2FF9F] h-[24px] text-black px-2">
                    Save {obj.saveAmount}
                  </p>
                  <p className="text-[11.58px] text-white/60">
                    With annual billing
                  </p>
                </div>

                {/* bottom right */}
                <p className="text-white/60 text-[11.58px]">
                  {obj.yearAmount}/year
                </p>
              </div>
            </div>

            {/* faq */}
            <div>
              <div className="flex justify-between items-center pb-5 border-b-[1px] border-white/30">
                <p>Subtotal</p>
                <p>{obj.subtotal}</p>
              </div>

              {/* middle */}
              <div className=" py-[2rem] border-b-[1px] border-white/30">
                <p className="text-[12px] border-b-[2px] border-white/30 w-fit pb-[0.1px]">
                  Add Loyalty Bonus Discount
                </p>
                <div className="text-white/60 text-[12px] flex justify-between items-center mt-4">
                  <div className="flex items-center gap-[4px]">
                    <p className="">Tax</p>
                    <Icon src="/icons/info.svg" w={13} h={13} />
                  </div>
                  <p>N1,000</p>
                </div>
              </div>

              <div className="mt-[2rem] flex justify-between items-center pb-5 border-b-[1px] border-white/30">
                <p>Total Amount Due</p>
                <p>{obj.subtotal}</p>
              </div>
            </div>
          </div>

          {/* right form */}
          <div className="  ml-auto scroll-hide mb-10">
            <CheckoutForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
