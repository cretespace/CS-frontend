"use client";
import { useState } from "react";
import FadeInSection from "./FadeinSection";
import { CircleMinus, CirclePlus } from "lucide-react";

const faqs = [
  {
    question: "What services can I request on CRETESPACE?",
    answer:
      "You can request a wide range of business centre services including typing, graphic design, printing, scanning, file conversion, and custom project work. The platform also offers self-service tools, cloud storage, and access to professional templates for both personal and business use.",
  },
  {
    question: "Do I need a subscription to use the platform?",
    answer:
      "No subscription is required to get started. You can use the platform with a free account, but premium features may require a paid plan.",
  },
  {
    question: "How long does it take to complete an order?",
    answer:
      "Completion times vary depending on the service requested. Simple tasks may be completed within hours, while larger projects may take several days.",
  },
  {
    question: "Can I get my documents delivered?",
    answer:
      "Yes, you can opt for digital delivery via cloud storage or request physical delivery depending on your location.",
  },
  {
    question: "How secure are my files on CRETESPACE?",
    answer:
      "Your files are encrypted and stored securely. We prioritize data privacy and follow industry best practices.",
  },
  {
    question: "Can other business centres join the platform as partners?",
    answer:
      "Yes, business centres can join as partners to provide their services through the platform.",
  },
];

export default function Page() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-[56px]  gap-[52px] bg-[rgba(0,0,0,1)]">
      <div className="">
        <h1 className="text-[40px] font-helvetica mt-[-25px]  font-[500] text-center mb-2">
          Frequently asked questions
        </h1>
        <p className="text-center font-helvetica text-white/70 mb-10">
          Everything you need to know about{" "}
          <span className="font-semibold">CRETESPACE</span>
        </p>

        <div className="space-y-10 m-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b-[2px]  m-auto border-white/15 py-8"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left text-lg font-medium hover:text-green-600 transition"
              >
                <p className="text-[20px] font-[500] tracking-[-0.1px] font-helvetica font-white/70">
                  {faq.question}
                </p>
                <span className="text-[#2FC22B] text-[20px] ">
                  {openIndex === index ? (
                    <CircleMinus size={27} />
                  ) : (
                    <CirclePlus size={27} />
                  )}
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-2 text-white/65 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions */}

        <div className="rounded-[10px] h-[201px] border-1 py-[10px] px-[8px] gap-[10px] mt-[52px] bg-[rgba(25,25,25,1)] border-[rgba(47,194,43,0.3)] text-center ">
          <div className="flex justify-center mb-4">
            <img
              src="/images/persone.svg"
              alt="avatar1"
              className="w-10 h-10 rounded-full border-2 border-gray-700 -ml-2 first:ml-0"
            />
            <img
              src="/images/perstwo.svg"
              alt="avatar2"
              className="w-10 h-10 rounded-full border-2 border-gray-700 -ml-2"
            />
            <img
              src="/images/persthree.svg"
              alt="avatar3"
              className="w-10 h-10 rounded-full border-2 border-gray-700 -ml-2 first:ml-0"
            />
          </div>
          <h2 className="text-[20px] font-[400] font-helvetica ">
            Still have questions?
          </h2>
          <p className="text-white/70 mb-4 text-sm leading-[22px]">
            Didn’t find the answer you were looking for? Our support team is
            here to assist you.
          </p>
          <button className="leading-[23px] w-[108px] h-[36px] border-[1px] border-[#2FC22B] text-[16px] text-[#2FC22B] font-[400] font-helvetica px-[8px] py-[6px] rounded-[6px] hover:bg-green-600 hover:text-white transition">
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
}
