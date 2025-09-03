import React from "react";
const features=[

  {
    id:1,
    title:"Wide Range of Services",
    icon:"/solar_layers-linear.png",
    content:"Enjoy everything from printing and design to typing, scanning, and file conversion.",
  },
  {
    id:2,
    title:"Cloud File Storage",
    icon:"/ic_outline-cloud.png",
    content:"Upload, store, and retrieve your documents anytime, your files are always safe.",
  },
  {
    id:3,
    title:"Secure Online Ordering",
    icon:"/ic_outline-cloud.png",
    content:"Place service requests from anywhere with data protection and privacy built in.",
  },
  {
    id:4,
    title:"Real-Time Order Tracking",
    icon:"/mdi_package-variant-closed-check.png",
    content:"Follow the progress of your orders from start to finish with instant status updates",
  },
  {
    id:5,
    title:"Flexible Delivery Options",
    icon:"/icon-park-outline_delivery.png",
    content:"Pick up your completed work in person or have it delivered to your doorstep.",
  },
  {
    id:6,
    title:"Access to Expert Support",
    icon:"/ic_baseline-headset.png",
    content:"Chat with CRETESPACE specialists for quick help and tailored solutions.",
  }
]
export default function One () {
    return (
        <section className="pt-[20px] pr-[164px] pb-[59px] pl-[164px] gap-[10px] bg-[rgba(0,0,0,1)]">
                <div className="gap-[46px]">
                <h2 className="text-center font-bold text-[25px] leading-[100%] tracking-[0%] ">
                        One Platform, Endless Possibilities.
                        <img className="w-[110px] h-[6px] ml-[460px]" src="/Vector (2).png" alt="" />
                </h2>
                <p className="text-center  mt-2 text-[10px] leading-[100%] tracking-[0%] text-[#ffffff52]">
                    From individuals to businesses, <span className="font-bold text-sm leading-[100%] tracking-[0%] text-[rgba(47,194,43,1)]">CRETESPACE</span> puts all your essential tools and services in one secure platform.
                    </p>
                    <div className=" grid md:grid-cols-3 gap-[12px] mt-[30px]">
                      {
                        features.map((item,i)=>(
                           <div key={i} className="  h-[125px] rounded-[10px]  border-1 border-[rgb(4,59,3)]">
                                <h3 className="mt-[20px] ml-[18px] font-medium text-sm leading-[100%] tracking-[0%] text-[rgba(255, 255, 255, 1)]">
                                  {item.title}
                                    </h3>
                                    <p className="mt-[8px] ml-[18px] font-normal text-[10px] leading-[15px] text-[#ffffff7c] tracking-[0%] pr-12">
                                    {item.content}
                                    </p>
                                    <img className="float-right mr-4 mt-[10px] " src= {item.icon} width={30} height={30} alt="" />
                        </div>
                        ))
                      }
                    </div>
                </div>
        </section>
        
    )
}