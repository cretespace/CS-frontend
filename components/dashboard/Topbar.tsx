import React from "react";
import Icon from "../ui/Icon";
import Image from "next/image";

const Topbar = () => {
  return (
    <div className="flex justify-between ">
      {/* left - searchbar */}
      <div className="flex items-center gap-[8px] w-[300px] min-h-[36px]  rounded-[10px] border-[1px] py-[8px] px-[22px] bg-[#141414] border-white/15">
        <Icon src="/dash/search.svg" w={14.33} h={14.33} />
        <p className="font-inter font-[300] text-[12px] text-white/50">
          What do you want to do today?
        </p>
      </div>

      {/* right - user details */}
      <div className="flex gap-[16px] items-center">
        <div className="flex gap-[8px] ">
          <Icon src="/dash/info.svg" w={31} h={31} />
          <Icon src="/dash/bell.svg" w={31} h={31} />
        </div>

        <div className="flex items-center gap-[6px]">
          <Icon
            style="rounded-full w-[34px] h-[34px] object-cover border-[1px] border-[#A2FF9F]"
            src="/dash/dp2.jpg"
          />
          <p className="leading-none">Favour</p>
          <Icon src="/dash/dropdown.svg" w={12} h={7.5} />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
