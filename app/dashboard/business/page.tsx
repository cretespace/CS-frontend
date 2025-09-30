"use client";
import Icon from "@/components/ui/Icon";
import {
  Card,
  CloudLibrary,
  StatsCard,
} from "@/components/ui/ReusableComponents";
import {
  aiSuggestions,
  businessTools,
  cloud,
  currentTask,
  stats,
  usage,
} from "@/constants/dashboard";
import React, { useState } from "react";

const page = () => {
  const [isActive, setIsActive] = useState("stat");
  return (
    <div>
      {/* top - welcome, stats */}
      <div className="mb-[30px]">
        {/* welcome */}
        <div className="flex justify-between items-center mb-[20px]">
          <p className="text-[24px]">
            Welcome Back, <span className="font-[700]">Jinova</span>
          </p>
          <button className="bg-[#2FC22B] flex gap-1 items-center justify-center w-[139.9px] h-[32px] rounded-[8px] py-[12px] px-[17px] border-[0.5px] border-[#2FC22B00]">
            <span className="text-[20px]">+ </span> <span>New Request</span>
          </button>
        </div>

        {/* stats */}
        <div className="flex w-full gap-[12px]">
          {/* stats - card */}
          {stats.map((item, index) => (
            <StatsCard key={index} item={item} />
          ))}
        </div>
      </div>

      {/* bottom -  */}
      <div className="flex gap-[30px]">
        {/* left */}
        <div className="space-y-[35px]">
          {/* AI-Powered Suggestions */}
          <div className="space-y-[15px]">
            <p className="font-[500] text-[#A2FF9F]">AI-Powered Suggestions</p>
            <Card className="">
              <Icon
                style="ml-auto mb-[15px]"
                src="/dash/business/refresh.svg"
              />
              <div className={`flex gap-[16px]`}>
                {aiSuggestions.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={`space-y-[11px] py-[15px] px-[25px] h-[153px] rounded-[10px] ${item.bgColor}`}
                    >
                      <Icon src={item.icon} />
                      <p className={`${item.textColor}`}>{item.text}</p>
                      <button
                        className={`rounded-[5px] h-[28px] flex justify-center items-center ${item.btnTextColor} py-[12px] px-[10px] text-[11px] ${item.btnColor}`}
                      >
                        {item.btnText}
                      </button>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>

          {/* Current Tasks */}
          <div className="space-y-[15px]">
            <p className="font-[500] text-[#A2FF9F]">Current Tasks</p>
            <Card className="space-y-[16px]">
              {currentTask.map((item, index) => {
                let statusColor;
                if (item.status === "In Progress") {
                  statusColor = "bg-[#FA7B48]";
                } else if (item.status === "Assigned") {
                  statusColor = "bg-[#6DF7A2]";
                } else if (item.status === "Delivered") {
                  statusColor = "bg-[#7B59BA]";
                } else {
                  statusColor = "bg-[#F24B61]";
                }

                return (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <Icon src={item.icon} w={32} h={32} />

                    {/* title  */}
                    <p className="text-left w-[23%]">{item.title}</p>
                    <p className="w-[23%] text-[12px] text-white/70">
                      {item.subtitle}
                    </p>

                    {/* status  */}
                    <div className="w-[13%] flex items-center gap-[6px]">
                      <div
                        className={`rounded-full w-[8px] h-[8px] ${statusColor}`}
                      ></div>
                      <p className="text-[12px]">{item.status}</p>
                    </div>

                    {/* progress  */}
                    <div className="flex gap-3 w-[13%] ">
                      <Icon src={item.progressBar} w={99.56} h={7} />
                      <div className="text-[12px]">{item.progress}%</div>
                    </div>

                    {/* view btn  */}
                    <button className="text-[10px] text-[#2FC22B] w-[10%] bg-[#083A0F66] w-[64px] h-[21px] rounded-[6px] border-[0.4px] border-[#FFFFFF33]">
                      View
                    </button>
                  </div>
                );
              })}
            </Card>
          </div>

          {/* Business Tools */}
          <div className="space-y-[15px]">
            <p className="font-[500] text-[#A2FF9F]">Business Tools</p>
            <div className="grid grid-cols-4 gap-[16px]">
              {businessTools.map((item, index) => (
                <Card key={index} className="">
                  <div className="flex flex-col    gap-[17px]">
                    <div className="flex justify-between">
                      <Icon src={item.icon} w={39.3} h={35.21} style="m-auto" />
                      <Icon
                        src={
                          item.arrow
                            ? item.arrow
                            : "/dash/business/arrow-green.svg"
                        }
                        w={15}
                        h={15}
                      />
                    </div>
                    <p className="text-center text-[12px]">{item.text}</p>
                  </div>
                  <p className="text-center text-[10px] text-[#A2FF9F]">
                    {item.subtitle}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* right */}
        <div>
          {/* Subscription Usage */}
          <div className="mb-[30px]">
            <p className="font-[500] text-[#A2FF9F]">Subscription Usage</p>
            <Card className="space-y-[15px] mt-[15px]">
              {/* header */}
              <div className="flex justify-between items-center">
                <p className=" font-[500]">Monthly</p>
                <div className="flex gap-[3.22px]">
                  <p className="text-[11.28px] text-white/50">View Details</p>
                  <Icon src="/dash/recent/view.svg" w={12.89} h={12.89} />
                </div>
              </div>

              {/* progress  */}
              <div className="flex flex-col items-center gap-[12px]">
                <Icon src="/dash/business/sub-progress.svg" w={175} h={95} />
                <div className="flex justify-between">
                  <button className="w-[108px] flex items-center h-[32px] rounded-[5px] border-[0.5px] py-[12px] px-[14px] bg-[#252525] text-[12px] font-inter text-[#2FC22B]">
                    Upgrade Plan
                  </button>
                  <p className="w-[50%] font-inter font-[300] text-[10px] text-white/60">
                    Upgrade to a yearly plan to enjoy special features
                  </p>
                </div>
              </div>

              {/* history  */}
              <div>
                <div className="flex justify-between my-[15px]">
                  <p
                    onClick={() => setIsActive("stat")}
                    className={`${
                      isActive === "stat" &&
                      "text-[#A2FF9F] border-b-[1px] border-b-[#A2FF9F] pb-1"
                    } cursor-pointer`}
                  >
                    Usage Statistics
                  </p>
                  <p
                    onClick={() => setIsActive("hist")}
                    className={`${
                      isActive === "hist" &&
                      "text-[#A2FF9F]  border-b-[1px] border-b-[#A2FF9F] pb-1"
                    } cursor-pointer`}
                  >
                    History
                  </p>
                </div>

                <div className="space-y-[14px]">
                  {usage.map((item, index) => (
                    <div
                      key={index}
                      className="h-[40px] bg-[#1B1B1B] items-center rounded-[8px] border-[0.8px] border-[#FFFFFF1A] py-[6px] px-[10px] flex justify-between"
                    >
                      <div className="flex gap-[8px]">
                        <Icon src={item.icon} w={24} h={24} />
                        <p className="text-[12px] font-inter">{item.text}</p>
                      </div>
                      <p className="font-inter text-[10px] text-white/60">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Cloud Library */}
          <CloudLibrary />
        </div>
      </div>
    </div>
  );
};

export default page;
