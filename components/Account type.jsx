"use client";

import { useState } from "react";
import FadeInSection from "./FadeinSection";

const plans = [
  {
    title: "Individual",
    subtitle: "For Personal Use",
    price: "FREE",
    per: "/month",
    button: "Current Plan",
    thing: 'Features:',
    image: <img src="Vector (9).png"/>,
    highlighted: false,
    features: [
      "in-app order tracking",
      "Cloud file storage (2GB)",
      "pay-per service, no subscription",
      "Access to  CRETESPACE templates",
      "Access to typing, design, scanning",
      "Chat support with CRETESPACE agents"
    ],
  },
  {
    title: "Business",
    subtitle: "For SMEs and growing companies",
    price: "₦30,000",
    per: "/month",
    button: "Upgrade to Business",
     thing: 'Features:',
    image: <img src="Vector (9).png"/>,
    highlighted: true,
    features: [
      "Virtual meeting booking",
      "Unlimited cloud storage for team",
      "Dedicated CRETESPACE support agent",
      "Monthly report & analytics dashboard",
      "Access to business templates & admin tools",
      " Team collaboration & task management tools",
    ],
  },
  {
    title: "Student",
    subtitle: "For academic work and support",
    price: "₦10,000",
    per: "/month",
    button: "Upgrade to Student",
     thing: 'Features:',
      image: <img src="streamline-plump_graduation-cap-solid.png"/>,
    highlighted: false,
    features: [
      "in-app order tracking",
      "Cloud file storage (2GB)",
      "pay-per service, no subscription",
      "Access to  CRETESPACE templates",
      "Access to typing, design, scanning",
      "Chat support with CRETESPACE agents"
    ],
  },
  {
    title: "Business Centre",
    subtitle: "For Business centre",
    price: "₦80,000",
    per: "/month",
    button: "Upgrade to Business Centre",
     thing: 'Features:',
      image: <img src="fluent_laptop-48-filled.png"/>,
    highlighted: false,
    features: [
      "in-app order tracking",
      "Cloud file storage (2GB)",
      "pay-per service, no subscription",
      "Access to  CRETESPACE templates",
      "Access to typing, design, scanning",
      "Chat support with CRETESPACE agents"
    ],
  },
];

export default function Pricing() {
  const [billing, setBilling] = useState("monthly");

  return (
    <section className="bg-[rgba(0,0,0,1)] pl-[165px] pr-[165px] pt-[71px] pb-[81px]">
    
      <div className=" rounded-[20px] border-1 border-[rgba(12,82,10,0.7)]">
        {/* Green light glow on top */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-72 h-20 rounded-full blur-3xl"></div>

        {/* Header */}
        <div className="text-center  ">
          <h2 className="font-medium text-[40px] text-center mt-[50px]">Choose your Account Type</h2>
          <p className="font-normal text-sm text-center text-[rgba(255,255,255,0.7)]">
            Choose the account that fits your work, study, or business needs.
          </p>
          <div className="inline-flex bg-[rgba(0,28,5,1)] mt-[18px] ">
            <button
              onClick={() => setBilling("monthly")}
              className={`rounded-[5px]  ${
                billing === "monthly"
                  ? "bg-[rgba(1,53,0,1)] text-white font-medium text-sm "
                  : ""
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("annual")}
              className={`rounded-[5px] ${
                billing === "annual"
                  ? " bg-[rgba(1,53,0,1)] font-normal text-sm text-[rgba(255,255,255,0.5)] "
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Annual
            </button>
          </div>
        </div>
                {/* pl-[50px] pr-[55px] pb-[55px] gap-2 */}
        {/* Pricing cards */}
        
        
        <div className="grid grid-cols-1 md:grid-cols-4 mt-[26px] gap-3 pl-[50px] pr-[55px] pb-[55px]">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`flex flex-col p-6 rounded-[20px] bg-gradient-to-b from black to-[rgba(10,69,18,0.85)] border ${
                plan.highlighted ? "border-[rgb(15,108,12)]" : "border-[rgba(47,194,43,0.2)]"
              }`}
            >
              <div className="">
                 <div className='mt-[15px]'>{plan.image}</div>
                <h3 className="font-medium text-[24px] text-[rgba(255,255,255,1)]">{plan.title}</h3>
                <p className="font-normal text-xs text-[rgba(255,255,255,0.65)]">{plan.subtitle}</p>
              </div>

              <div className="mt-[28px] pl-[20px] pr-[20px]">
                <span className="font-bold  text-[40px] text-[rgba(255,255,255,1)] ">{plan.price} <br/></span>
                <div className="mt-[-10px]  text-center">
                  <span className="font-normal text-[12px] text-[rgba(255,255,255,0.65)]">{plan.per}</span>
                </div>
              </div>
              

             

              <button
                className={`rounded-[7px] border-1 pt-[2px] pr-[20px] pb-[2px] pl-[20px] gap-[10px] mt-[12px] ${
                  plan.highlighted
                    ? "bg-[rgba(47,194,43,1)] h-[36px] border-none font-medium text-[12px] text-white "
                    : "bg-[rgba(10,69,18,0.2)] font-normal text-xs h-[36px]  border border-[rgba(47,194,43,0.25)]"
                    
                   

                    
                }`
              
              }
              >
                {plan.button}
                
              </button>

               

              <ul className="mt-[18px]  text-sm text-gray-300">
                <div className="">
                <span className="font-medium text-[12px] text-[rgba(255,255,255,1)]">{plan.thing}</span>
              </div>
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 font-normal text-[10px] mt-[8px] ">
                     <img src="Vector (10).png"/> {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}


// export default function Pricing () {
//   return (
//     <section className="bg-[rgba(0,0,0,1)] pl-[165px] pr-[165px] pt-[71px] pb-[81px]">
//       <div className=" rounded-[20px] border-1 border-[rgba(12,82,10,0.7)]  ">
//         <h2 className="font-medium text-[40px] text-center">Choose your Account Type</h2>
//         <p className="font-normal text-sm text-center text-[rgba(255,255,255,0.7)]">Choose the account that fits your work, study, or business needs.</p>
//       </div>
//     </section>
//   )
// }