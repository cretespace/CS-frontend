import React from "react";

export default function Hero () {
    return (
        <section className=" pr-[162px] pl-[162px] gap-[10px]" style={{backgroundImage: "url('Crete background.jpg')"}}  > 
        <div className="  flex flex-col md:flex-row items-center justify-between ">
            <div className=" gap-[38px]  left-[3px] space-y-[24px]">
                <h1 className=" font-bold font-ebrima text-[72px]    leading-[80px] tracking-[1px] text-[rgba(255,255,255,1)]">
                    Skip the Wait, <br/> Skip the Stress.
                    </h1>
                    <p className="font-normal text-[18px]  leading-[28px] tracking-[0px] text-[rgba(192,192,192,1)]">
                        Africa's first Cloud-powered Digital business centre.
                    </p>
                    <div className="space-x-8">
                        <button className="p-[10px] font-medium text-base leading-[24px] tracking-[0.1px] text-[rgba(255,255,255,1)] rounded-[10px] gap-[8px] bg-[rgba(0,160,212,1)]">
                            Get started for free
                            
                </button>
                 <button className="font-medium text-base leading-[24px] tracking-[0.1px] rounded-[10px] gap-[8px] text-[rgba(255,255,255,1)]  ">Learn more</button>
                    </div>
            </div>
            <div className="">
                <img src="/GUY2 1.png" width={416} height={404} alt="" />
            </div>
        </div>
        </section>
    )
}