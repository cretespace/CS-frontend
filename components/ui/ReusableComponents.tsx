import Image from "next/image";
import React from "react";
import Icon from "./Icon";
import { cloud } from "@/constants/dashboard";

export const Logo = () => {
  return <Image src="/logo.svg" alt="crete logo" width={86} height={29} />;
};

export const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    className={`${className} bg-[#141414] rounded-[13px] border-[0.5px]  border-white/10  p-[18px]`}
    {...props}
  />
));

export const ImageCmp = ({ w, h, src, style }: any) => {
  return (
    <Image
      width={w || 130}
      height={h || 130}
      src={src || "/signUp/checkbox.svg"}
      alt="img"
      className={style}
    />
  );
};

export const StatsCard = ({ item }) => {
  return (
    <Card className="flex card-sec justify-between items-start lg:w-[205px] 2xl:w-[218px] h-[125px] ">
      {/* text */}
      <div>
        <p className="font-inter font-[500] text-[10px] ">{item.title}</p>
        <p className="text-[#2FC22B] flex lg:my-[5px] 2xl:my-[13px] lg:text-[20px] 2xl:text-[24px] font-inter font-[700]">
          {item.value}
        </p>
        <p className="font-inter text-[13px]">{item.subtitle}</p>
      </div>
      <Icon src={item.icon} h={35} w={35} />
    </Card>
  );
};

export const CloudLibrary = (student) => {
  return (
    <div
      className={`flex-[0.3] ${
        student ? "space-y-[10px] h-[385px]" : "space-y-[18px] mt-[20px]"
      } `}
    >
      <p className=" text-[#A2FF9F] font-[500]">
        {student ? "Digital Backpack" : "Cloud Library"}
      </p>

      <Card className="  px-[22.88px] ">
        {/* header */}
        <div className="flex justify-between  h-[59px] items-center">
          <p className=" font-[500]">
            {student ? "My Backpack" : "Storage Activities"}
          </p>
          <div className="flex gap-[3.22px]">
            <p className="text-[11.28px] text-white/50">View Details</p>
            <Icon src="/dash/recent/view.svg" w={12.89} h={12.89} />
          </div>
        </div>

        <div className="flex flex-col  items-center h-[350px]">
          <Icon src="/dash/images/chart.svg" w={198.25} h={198.25} />

          <div className="mt-10 w-[191px] space-y-2">
            {cloud.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <p
                  className={`w-[12px] mr-[12px] h-[12px] rounded-full ${item.bgColor}`}
                ></p>
                <p className="flex-1 text-[#D4D4D4]">{item.name}</p>
                <p className="text-[#F5F5F5]">{item.percent}</p>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};
