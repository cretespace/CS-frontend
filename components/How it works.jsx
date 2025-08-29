import React from "react";

export default function How () {
    return (
        <section className=" pt-[60px] pr-[165px] pb-[60px] pl-[165px] gap-[10px] bg-[rgba(0,0,0,1)] ">
            <div className=" gap-[48px]">
                <h2 className="text-center font-medium text-[40px] leading-[100%] tracking-[0%] text-[rgba(255,255,255,1)]">
                        How it Works
                </h2>
                <div className="  grid md:grid-cols-3 gap-[30px] space-x-[30px] mt-15">
                     <div className="">
                        <div className="gap-[12px]">

                       
                    <img className="w-[20.25px] h-[17.25px] top-[3.75px] left-[2.25px] " src="/Vector.png"/>
                  <h3 className="font-medium text-lg leading-[28px] tracking-[0px] text-[rgba(47,194,43,1)] mb-2 mt-[-24px] ml-10">Order from Anywhere</h3>
                   </div>
                   <p className="font-normal text-xs leading-[24px] tracking-[0.1px] text-[rgba(255,255,255,1)]">
                        Place your order online from your phone or computer. Upload your files, choose what you need, and confirm; all without leaving your location.
                   </p>
                </div>

                <div className="gap-[12px]">
                    <img className="w-[20px] h-[20px] top-[2px] left-[2px] " src="/Vector (1).png"/>
                  <h3 className="font-medium text-lg leading-[28px] tracking-[0px] text-[rgba(47,194,43,1)] mb-2 mt-[-24px] ml-10">Pick Up When Ready</h3>
                   <p className="font-normal text-xs leading-[24px] tracking-[0.1px] text-[rgba(255,255,255,1)]">
                        Get a message when your order is done. Stop by at any of our CRETESPACE stores, and collect it at a time that’s convenient for you.
                   </p>
                </div>

                <div className="gap-[12px]">
                    <img className="w-[22px] h-[16.01px] top-[5px] left-[1px] " src="/Vector (7).png"/>
                  <h3 className="font-medium text-lg leading-[28px] tracking-[0px] text-[rgba(47,194,43,1)] mb-2 mt-[-24px] ml-10">Get it delivered</h3>
                   <p className="font-normal text-xs leading-[24px] tracking-[0.1px] text-[rgba(255,255,255,1)]">
                   Prefer not to go out? Select our delivery option and we’ll bring your order straight to your home, school, or office. It’s fast, safe, and saves you time.
                   </p>
                </div>
                 
                </div>
            </div>
        </section>
    )
}