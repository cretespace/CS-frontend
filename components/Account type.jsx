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
      "Basic order tracking",
      "Cloud storage (2GB)",
      "Free services, no subscription",
      "Access to typing & formatting",
      "Chat support with CRETESPACE agents",
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
      "Access to business templates & pro tools",
      "Team collaboration & task management tools",
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
      "Basic order tracking",
      "Cloud storage (10GB)",
      "Free services, no subscription",
      "Access to typing & formatting",
      "Chat support with CRETESPACE agents",
    ],
  },
  {
    title: "Business Centre",
    subtitle: "For Personal Use",
    price: "₦80,000",
    per: "/month",
    button: "Upgrade to Business Centre",
     thing: 'Features:',
      image: <img src="fluent_laptop-48-filled.png"/>,
    highlighted: false,
    features: [
      "Basic order tracking",
      "Cloud storage (1TB)",
      "Free services, no subscription",
      "Access to typing, design, printing, scanning",
      "Chat support with CRETESPACE agents",
    ],
  },
];

export default function Pricing() {
  const [billing, setBilling] = useState("monthly");

  return (
    <section className="min-h-screen bg-black flex justify-center items-center px-4 py-16">
        <FadeInSection>
      <div className="relative max-w-7xl w-full p-10 rounded-2xl border border-[rgb(8,57,7)]">
        {/* Green light glow on top */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-72 h-20 bg-green-500/30 rounded-full blur-3xl"></div>

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-2">Choose your Account Type</h2>
          <p className="text-gray-400 text-sm mb-6">
            Choose the account that fits your work, study, or business needs.
          </p>
          <div className="inline-flex bg-[rgb(0,28,5)] rounded p-1">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-6 py-2 rounded text-sm font-medium transition text-white ${
                billing === "monthly"
                  ? "bg-[rgb(1,53,0)] text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("annual")}
              className={`px-6 py-2 rounded text-sm font-medium transition ${
                billing === "annual"
                  ? "bg-[rgb(1,53,0)] text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Annual
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`flex flex-col p-6 rounded-xl bg-gradient-to-b from black to-[rgb(7,47,12)] border ${
                plan.highlighted ? "border-[rgb(15,108,12)]" : "border-[rgb(9,40,9)]"
              }`}
            >
              <div className="mb-6">
                 {plan.image}
                <h3 className="text-2xl font-semibold text-white">{plan.title}</h3>
                <p className="text-gray-400 text-sm">{plan.subtitle}</p>
              </div>

              <div className="mb-6">
                <span className="text-5xl font-bold text-white ml-5">{plan.price} <br/></span>
                <span className="text-gray-400 ml-20">{plan.per}</span>
              </div>

             

              <button
                className={`w-full py-2 rounded-lg font-semibold text-sm transition ${
                  plan.highlighted
                    ? "bg-[rgb(47,194,43)] text-white "
                    : "bg-[rgb(6,43,12)] text-white border border-[rgb(47,194,43)]"
                }`}
              >
                {plan.button}
                
              </button>

               

              <ul className="mt-6 space-y-2 text-sm text-gray-300">
                <div className="">
                <span>{plan.thing}</span>
              </div>
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                     <img src="Vector (10).png"/> {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      </FadeInSection>
    </section>
  );
}
