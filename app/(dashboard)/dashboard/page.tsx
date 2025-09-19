import Icon from "@/components/ui/Icon";
import { Card } from "@/components/ui/ReusableComponents";
import {
  cloud,
  quickActions,
  recentActivities,
  services,
} from "@/constants/dashboard";
import React from "react";

const featuredDesigns = [
  "/dash/images/ad1.jpg",
  "/dash/images/ad2.jpg",
  "/dash/images/ad3.jpg",
];

const page = () => {
  return (
    <div className="mb-10">
      {/* top of page*/}
      <div className="lg:flex gap-7 ">
        {/* left */}
        <div className="flex-[0.7]">
          {/* top */}
          <div className="lg:flex gap-[14px]">
            {/* top - left - hero banner */}
            <div className="bg-[#2FC22B] relative pt-[24px] px-[15px] flex  flex-wrap justify-between w-full  min-h-[165px] rounded-[10px]">
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

            {/* top - left - 2  ads section*/}
            <Card className="lg:w-[39%] min-h-[165px] py-6 mt-5 lg:mt-0">
              {/* header */}
              <div className="flex -mt-4 px-2 mb-2 justify-between items-center">
                <p className="text-[#A2FF9F] font-[400]">Featured Designs</p>
                <div className="flex gap-3">
                  <Icon src="/dash/left2.svg" w={5} h={2.78} />
                  <Icon src="/dash/right.svg" w={6.14} h={3.78} />
                </div>
              </div>
              {/* body */}
              <div className="flex gap-1 px-2 border-y-[1px] py-1  border-white/20">
                {featuredDesigns.map((item, index) => (
                  <Icon
                    style="max-w-[57px]"
                    key={index}
                    src={item}
                    w={57.44}
                    h={96.15}
                  />
                ))}
              </div>
              {/* bottom */}
              <p className="font-inter px-2 text-[10px] text-white/70 -mb-4 mt-2">
                Need something similar?
                <span className="font-[500] text-[#2FC22B] pt-10">
                  {" "}
                  Order Here
                </span>
              </p>
            </Card>
          </div>

          {/* center - quick actions*/}
          <div className="my-[1.57rem] space-y-[14px]">
            <p className="text-[#A2FF9F] font-[500]">Quick Actions</p>
            <div className="lg:flex gap-[10.05px] ">
              {quickActions.map((item, index) => (
                <div
                  className={`${item.bgColor} flex items-center min-h-[73.37px] my-5 lg:my-0 lg:w-1/4 py-[12.06px] px-[15.1px] gap-[10.05px] rounded-[15.08px]`}
                >
                  <Icon w={47} h={45} src={item.icon} />
                  <div>
                    <p className={`font-[500] text-[12px] ${item.textColor}`}>
                      {item.title}
                    </p>
                    <p className={`${item.textColor} text-[9.55px] `}>
                      {item.subTittle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* recent activitiees */}
        <div className="flex-[0.3] ">
          <Card className="py-[20px] px-[18px] mine-h-[307px] space-y-[16px]">
            {/* header */}
            <div className="flex justify-between items-center">
              <p className="text-[#A2FF9F] font-[500]">Recent Activities</p>
              <div className="flex gap-[3.22px]">
                <p className="text-[11.28px] text-white/50">View all</p>
                <Icon src="/dash/recent/view.svg" w={12.89} h={12.89} />
              </div>
            </div>

            {/* body */}
            <div className="space-y-[26px] ">
              {recentActivities.map((item, index) => (
                <div key={index} className="flex gap-[24px]">
                  {/* right */}
                  <div className="flex gap-2 items-center flex-1">
                    <Icon w={24} h={24} src={item.icon} />
                    <p className="text-[12px] text-white/90">{item.name}</p>
                  </div>
                  {/* center */}
                  <Icon
                    style="flex-[0.3]"
                    src={item.progress}
                    w={58}
                    h={4.14}
                  />
                  {/* left */}
                  <p className="ml-auto flex-[0.2]">{item.percent}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* bottoom of full page */}
      <div className="lg:flex gap-7">
        {/* bottom - services*/}
        <div className="space-y-[18px] flex-[0.7]">
          <p className="text-[#A2FF9F] font-[500]">Services</p>

          {services.map((item, index) => {
            const textColor =
              item.status === "pending" ? "text-[#2FC22B]" : "text-[#EF4444]";
            const bgColor =
              item.status === "pending" ? "bg-[#2FC22B]" : "bg-[#EF4444]";
            return (
              <Card
                key={index}
                className="py-[16px] px-[21px] lg:flex items-center justify-between"
              >
                <div className="flex items-center  gap-[18px] flex-[0.2]">
                  <Icon src={item.icon} w={31} h={31} />
                  <p className="capitalize font-[500] ">{item.name}</p>
                </div>
                <p className={`flex-[0.4] text-white/70 my-3 lg:my-0`}>
                  {item.description}
                </p>
                {/* progress */}
                <div
                  className={`flex-[0.2] gap-[6px] ${textColor} rounded-[8.08px] border-[0.4px] border-white/20 w-[127px] flex items-center text-[11.31px] justify-center min-h-[23px] bg-[#202020]`}
                >
                  <p
                    className={`w-[8.08px] h-[8.08px] ${bgColor} rounded-full`}
                  ></p>
                  <p>{item.msg}</p>
                </div>
                <div className="flex gap-[8px] flex-[0.1] my-2 lg:,y-0">
                  <Icon h={16} w={16} src="/dash/plus.svg" />
                  <Icon h={16} w={16} src="/dash/time.svg" />
                  <Icon h={16} w={16} src="/dash/menu.svg" />
                </div>
              </Card>
            );
          })}
        </div>

        {/* cloud library */}
        <div className="flex-[0.3] space-y-[18px]">
          <p className=" text-[#A2FF9F] font-[500]">Cloud Library</p>

          <Card className="  px-[22.88px] ">
            {/* header */}
            <div className="flex justify-between  h-[59px] items-center">
              <p className=" font-[500]">Storage Activities</p>
              <div className="flex gap-[3.22px]">
                <p className="text-[11.28px] text-white/50">View Details</p>
                <Icon src="/dash/recent/view.svg" w={12.89} h={12.89} />
              </div>
            </div>

            <div className="flex flex-col  items-center h-[350px]">
              <Icon src="/dash/images/chart.svg" w={198.25} h={198.25} />

              <div className="mt-10 w-[191px] space-y-2">
                {cloud.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
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
      </div>
    </div>
  );
};

export default page;
