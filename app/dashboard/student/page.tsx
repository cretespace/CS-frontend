import Icon from "@/components/ui/Icon";
import {
  Card,
  CloudLibrary,
  StatsCard,
} from "@/components/ui/ReusableComponents";
import { studentStats } from "@/constants/dashboard";
import React from "react";

const page = () => {
  return (
    <div className="space-y-[25px]">
      {/* top - welcome section  */}
      <div className="flex gap-[20px] ">
        <div className="flex-[0.5] bg-[#2FC22B] relative pt-[24px] px-[15px] flex  flex-wrap justify-between w-full  min-h-[165px] rounded-[10px]">
          <div className="space-y-[24px]">
            <p className="text-[24px] ">
              Welcome Back, <span className="font-[700] ">Favour</span>
            </p>
            <div className="relative">
              <p className="font-[200] text-white/70 text-[12px]">
                Motivational Quote
              </p>
              <p className="font-[500] text-white/90">
                “Don’t watch the clock; do what it does. Keep going.”
              </p>
              <p className="absolute right-0 font-[200] text-white/70 text-[12px]">
                ~ Sam Levenson
              </p>
            </div>
          </div>
          <Icon
            style="absolute right-[38px] -top-5"
            src="/dash/woman.svg"
            h={645.92}
            w={142.02}
          />
          <Icon
            style="object-cover "
            src="/dash/images/hd.svg"
            h={245.92}
            w={102.02}
          />
        </div>

        {/* empty card */}
        <Card className="flex-[0.5]"></Card>
      </div>

      {/* center - stats  */}
      <div className="flex gap-[10px]">
        {studentStats.map((item, index) => (
          <StatsCard key={index} item={item} />
        ))}
      </div>

      {/* bottom - form & self service tools  */}
      <div className="flex gap-[10px]">
        {/* Request Academic Help  */}
        <div className="flex-1/3 space-y-[10px]">
          <p className=" text-[#A2FF9F] font-[500]">Request Academic Help</p>
          <Card></Card>
        </div>

        {/* Self Service Tools */}
        <div className="flex-1/3 space-y-[10px]">
          <p className=" text-[#A2FF9F] font-[500]">Self Service Tools</p>
          <Card></Card>
        </div>

        {/* Cloud Library  */}
        <div className="flex-1/3">
          <CloudLibrary student />
        </div>
      </div>
    </div>
  );
};

export default page;
