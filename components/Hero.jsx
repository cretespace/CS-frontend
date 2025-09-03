"use client"
import { CircleArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Hero () {
     
  return (
   

      <section className="flex justify-between -mx-[165px] px-[165px] h-[404px]"  style={{
            backgroundImage: "url('/newhero.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
         <div className="flex flex-col gap-[38px] mt-[51px]">
                    <h1 className="text-[30px] font-mono sm:text-[54px] md:text-[64px] lg:text-[72px] font-bold  sm:leading-[20px] md:leading-[80px] lg:leading-[80px] tracking-[1px] text-left text-global-3 font-ebrima ">
                      Skip the Wait,<br />
                      Skip the Stress.
                    </h1>
                    <p className="font-inter text-[18px] text-[#C0C0C0] -mt-5">
                      Africa's first Cloud-powered Digital business centre.
                    </p>

                    <div className="flex  items-center w-full gap-[16px] font-ebrima">
                     <button 
                      className="bg-[#00A0D4] p-[10px] rounded-[10px] gap-[8px] w-[195px] flex justify-center font-[500] items-center"
                        >
                        Get started for free
                       <CircleArrowRight size={20}/>
                        </button>
                    <p className="font-[500]">
                      Learn more
                    </p>
                  </div>
                  </div>
       <Image 
                  src="/GUY2 1.png" 
                  alt="Hero Image" 
                  width={416} height={404}
                  className="object-cover  "
                  />
      </section>
    )
}




{/* <section className=" w-full flex justify-start items-center font-ebrima">
        <div 
          className="w-full flex justify-center items-center"
          style={{
            backgroundImage: "url('/newhero.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="w-full max-w-full mx-auto ">
            <div className="flex flex-row lg:flex-row justify-between items-center w-full py-[25px] sm:py-[50px]">
              <div className="flex flex-col justify-start items-center w-full lg:w-auto mb-[2px] sm:mb-[1px]">
                <div className="flex flex-col gap-[19px] sm:gap-[38px] justify-start items-center w-full">
                  <div className="flex flex-col gap-[8px] sm:gap-[8px] justify-center items-start w-full">
                    <h1 className="text-[30px] sm:text-[54px] md:text-[64px] lg:text-[60px] font-[900] leading-[40px] sm:leading-[20px] md:leading-[70px] lg:leading-[70px] tracking-[1px] text-left text-global-3 font-ebrima ">
                      Skip the Wait,<br />
                      Skip the Stress.
                    </h1>
                    <p className="text-sm lg:text-sm font-normal leading-[18px] sm:leading-[20px] md:leading-[22px] text-left text-gray-400 tracking-wide">
                      Africa's first Cloud-powered Digital business centre.
                    </p>
                  </div>
                  <div className="flex flex-row sm:flex-row justify-start items-center text-center w-full gap-4 font-ebrima">
                     <button 
                      className="bg-[rgba(0,160,212,1)] text-[14px] sm:text-[16px] font-medium px-[5px] sm:px-[10px] py-[5px] sm:py-[5px] rounded-[10px]  sm:gap-[8px] flex items-center"
                        >
                        Get started for free
                       <CircleArrowRight size={20}/>
                        </button>
                    <p className="text-[14px] sm:text-[16px] font-medium text-left  mt-[5px] sm:mt-[0px]  cursor-pointer hover:text-global-1 transition-colors">
                      Learn more
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-[36%] mt-8 lg:mt-0">
                <img 
                  src="/GUY2 1.png" 
                  alt="Hero Image" 
                  width={416} height={404}
                  className="  "
                  />
              </div>
            </div>
          </div>
        </div>
      </section> */}