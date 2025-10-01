import DownloadApp from "@/components/ui/DownloadApp";
import Icon from "@/components/ui/Icon";
import {
  Card,
  CloudLibrary,
  StatsCard,
} from "@/components/ui/ReusableComponents";
import {
  currentTask,
  selfServiceTools,
  studentStats,
  taskFeed,
} from "@/constants/dashboard";
import React from "react";

const page = () => {
  return (
    <div className="space-y-[25px]">
      {/* top - welcome section  */}
      <div className="flex gap-[20px] ">
        {/* welcome banner  */}
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
            src="/dash/student/man.svg"
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

        <div className="flex-[0.2]">
          <DownloadApp />
        </div>

        {/* refer a friend  */}
        <div className="relative bg-[#141414] flex gap-2 flex-[0.3] rounded-[13px] border-[0.5px]  border-[#2FC22B80]   w-[197px] h-[165px] ">
          {/* toggle  */}
          <Icon
            src="/dash/student/toggle.svg"
            style="w-[19px] h-[19px] right-3 absolute top-2"
          />

          {/* boy with microphone  */}
          <Icon
            src="/dash/student/refer.svg"
            style="h-[127px] left-2 absolute bottom-0"
            w={143.24}
          />

          {/* right - text  */}
          <div className="absolute top-7 right-3 space-y-[10px]">
            {/* refer a friend  */}
            <div className="relative w-[120px] ">
              <p className="text-[#2FC22B] leading-none font-inter font-[600] text-[26px]">
                REFER A{" "}
              </p>
              <p className="text-[#2FC22B] leading-none font-inter font-[600] text-[26px] absolute right-0">
                FRIEND
              </p>
            </div>

            {/* horisontal line  */}
            <div className="h-[1px] bg-[#2FC22B] mt-10"></div>

            {/* discount  */}
            <div className="h-[47px] w-[127px] rounded-[5px] border-[0.5px] py-[11px] px-[3px] border-[#2FC22B]">
              <p className="font-inter text-[10.5px] ">
                Get <span className="text-[#2FC22B]">10% </span>off next time
                when you refer a friend
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* center - stats  */}
      <div className="flex gap-[10px]">
        {studentStats.map((item, index) => (
          <StatsCard key={index} item={item} />
        ))}
      </div>

      {/* bottom of page */}
      <div className="flex gap-[30px]">
        {/* Task Feed & self service tools  */}
        <div className="flex-[0.7] space-y-[20px]">
          {/* Task Feed*/}
          <div className="  space-y-[10px]">
            <p className="font-[500] text-[#A2FF9F]">Task Feed</p>
            <Card className="space-y-[16px]">
              {taskFeed.map((item, index) => {
                let statusColor;
                if (item.status === "In Progress") {
                  statusColor = "text-[#FA7B48]";
                } else if (item.status === "Assigned") {
                  statusColor = "text-[#6DF7A2]";
                } else if (item.status === "Delivered") {
                  statusColor = "text-[#7B59BA]";
                } else {
                  statusColor = "text-[#F24B61]";
                }

                let bgColor;
                if (item.status === "In Progress") {
                  bgColor = "bg-[#FA7B48]";
                } else if (item.status === "Assigned") {
                  bgColor = "bg-[#6DF7A2]";
                } else if (item.status === "Delivered") {
                  bgColor = "bg-[#7B59BA]";
                } else {
                  bgColor = "bg-[#F24B61]";
                }
                return (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <Icon src={item.icon} w={32} h={32} />

                    {/* title  */}
                    <p className="text-left w-[18%]">{item.title}</p>

                    {/* status */}
                    <div
                      className={`w-[15%] gap-[6px] ${statusColor} rounded-[8.08px] border-[0.4px] border-white/20  flex items-center text-[11.31px] justify-center min-h-[23px] bg-[#202020]`}
                    >
                      <p
                        className={`w-[8px] h-[8px] ${bgColor} rounded-full`}
                      ></p>
                      <p>{item.status}</p>
                    </div>

                    {/* due  */}
                    <p className="w-[15%] text-[12px] text-white/70">
                      {item.subtitle}
                    </p>

                    {/* progress bar */}
                    <div className="flex gap-3 w-[13%] ">
                      <Icon src={item.progressBar} w={99.56} h={7} />
                      <div className="text-[12px]">{item.progress}%</div>
                    </div>

                    {/* view btn  */}
                    <button className="text-[10px] text-[#2FC22B] w-[10%] bg-[#083A0F66] w-[64px] h-[21px] rounded-[6px] border-[0.4px] border-[#FFFFFF33]">
                      View
                    </button>

                    {/* chat agent btn  */}
                    <button className="text-[10px] w-[10%] w-[64px] h-[21px] rounded-[6px] border-[0.4px] border-[#FFFFFF33]">
                      Chat Agent
                    </button>
                  </div>
                );
              })}
            </Card>
          </div>

          {/* Self-Service Tools */}
          <div className="  space-y-[10px]">
            <p className="font-[500] text-[#A2FF9F]">Self-Service Tools</p>
            <div className="rounded-[10px] h-[288px] border-[0.5px]  border-white/10  py-[19px] px-[24px]  grid grid-cols-2 gap-[12.1px] bg-[#0D0D0D]">
              {selfServiceTools.map((item, index) => (
                <div
                  key={index}
                  className="h-[65.65px] rounded-[5.04px] border-[0.5px] py-[11.09px] px-[15.13px] flex items-center gap-[10.08px] bg-[#141414] border-[#FFFFFF1A]"
                >
                  <Icon src={item.icon} w={41.56} />
                  <div>
                    <p className="font-[500] text-[14.12px]">{item.title}</p>
                    <p className="text-[12.1px] text-white/60">
                      {item.subtitle}
                    </p>
                  </div>
                  <div className="bg-[#222020] w-[22.87px] h-[21.54px] flex items-center justify-center rounded-[3.03px]  ml-auto">
                    <Icon src="/dash/business/arrow-green.svg" w={19} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Request Academic Help  */}
          <div className="  space-y-[10px]">
            <p className="font-[500] text-[#A2FF9F]">Task Feed</p>
            <Card className="space-y-[16px]">
              {taskFeed.map((item, index) => (
                <div></div>
              ))}
            </Card>
          </div>
        </div>

        {/* Cloud Library  */}
        <div className="flex-[0.3]">
          <CloudLibrary student />
        </div>
      </div>
    </div>
  );
};

export default page;
