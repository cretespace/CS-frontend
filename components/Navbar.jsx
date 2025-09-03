import Link from "next/link";
import React from "react";

export default function Navbar () {
     return (
   <section className=" bg-[rgba(11,0,0,1)] border-b-[rgba(47,194,43,0.5)]  pt-[17px] pr-[40px] pb-[17px] pl-[40px] border-b justify-between" >
   
    <nav className=" w[476px]  flex justify-between items-center">
         <div>
         <img src="/Crete Logo.png" alt="crete logo" width={86} height={29}/>
    </div>
    <div className=" font-medium text-base leading-[24px] tracking-[0.1px] text-[rgba(184,184,184,1)] space-x-[32px]">
        <a href="#">Our Hubs</a>
        <a href="#">FAQs</a>
        <a href="#">About</a>
        <a href="#">Support</a>
        <a href="#">Login</a>
        <button  className="pt-[4px] pr-[6px] pb-[4px] pl-[6px] gap-[10px] rounded-md bg-[rgba(0,160,212,1)] text-base font-medium leading-[24px] tracking-[0.1px] text-[rgba(background: rgba(255, 255, 255, 1);
)]">
     <Link href="/register">
     
     Sign up
     </Link>
     </button>
    </div>
    </nav>
   </section>
  );
}