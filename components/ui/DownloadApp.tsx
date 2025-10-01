import React from "react";
import Icon from "./Icon";
import { Card } from "./ReusableComponents";
import Image from "next/image";

const DownloadApp = () => {
  return (
    <div className="relative bg-[#141414] rounded-[15px] border-[0.5px]  border-[#137110]   min-w-[197px] h-[165px] ">
      <div className="flex justify-between mt-7">
        {/* phone  */}
        <Icon src="/dash/student/phone.svg" style="z-30" w={89} h={132.99} />

        {/* right - text and qr code  */}
        <div className="z-30 space-y-[24px]">
          {/* text  */}
          <div className="flex flex-col items-center mr-5">
            <p className="text-[#A2FF9F] text-[20px] font-inter font-[500]">
              Download
            </p>
            <p className="font-inter font-[500] text-[12px]">Our mobile App</p>
          </div>

          {/* qr code  */}
          <div>
            <Icon src="/dash/student/qr.svg" w={100} h={37.0} />
          </div>
        </div>
      </div>
      <Image
        width={130}
        height={130}
        src="/dash/student/ellipse.svg"
        alt="img"
        className={`absolute bottom-0 z-10 rounded-l-[15px] object-cover `}
      />

      {/* download-icon */}
      <Icon
        src="/dash/student/download-icon.svg"
        style="absolute -top-6 z-30 left-1/2 -translate-x-1/2"
        w={48}
        h={48}
      />
    </div>
  );
};

export default DownloadApp;
