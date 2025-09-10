import Image from "next/image";
import React from "react";

const data = [
  {
    id: 1,
    title: "Order from anywhere",
    icon: "/landing/icons/devices.svg",
    content:
      "Place your order online from your phone or computer. Upload your files, choose what you need, and confirm; all without leaving your location.",
  },
  {
    id: 2,
    title: "Order from anywhere",
    icon: "/landing/icons/clock.svg",
    content:
      "Get a message when your order is done. Stop by at any of our CRETESPACE stores, and collect it at a time that’s convenient for you.",
  },
  {
    id: 3,
    title: "Order from anywhere",
    icon: "/landing/icons/truck.svg",
    content:
      "Prefer not to go out? Select our delivery option and we’ll bring your order straight to your home, school, or office. It’s fast, safe, and saves you time.",
  },
];
export default function How() {
  return (
    <section className=" py-[60px] mb-[6.4rem] -mt-4 gap-[10px] ">
      <div className="gap-[48px]">
        <h2 className="text-center font-helvetica font-[500] text-[40px] ">
          How It Works
        </h2>
        <div className="   lg:grid grid-cols-3 gap-[30px]  mt-10">
          {data.map((articles, i) => (
            <div key={i} className="lg:h-[72px] lg:w-[350px] my-5 lg:my-0">
              <div className="gap-[12px] flex">
                <Image src={articles.icon} width={24} height={24} alt="icons" />
                <h3 className="font-[500] text-[18px] leading-[28px] tracking-[0px] text-[#2FC22B] font-helvetica">
                  {articles.title}
                </h3>
              </div>
              <p className="font-[300] text-[14px] leading-[24px] font-inter tracking-[0.1px] text-[#FFFFFF]  h-[72px] p-2">
                {articles.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
