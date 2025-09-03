
import React from "react";
import Image from "next/image";
import FadeInSection from "@/components/FadeinSection";

import Faq from '@/components/faq';
import Footer from '@/components/footer';
import Accounttype from '@/components/Account type'
import Navbar from "@/components/Navbar";
import Hero from '@/components/Hero';
import How from '@/components/How it works';
import Oneplatform from '@/components/One platform';
import Whycretespace from '@/components/Why cretespace';
import Business from '@/components/Business success';
import Individual from '@/components/Individual success';


// THIS FILE CONTAINS HARD CODING, WARNING ! WARNING ! WARNING !


export default function Page () {
  return (
      <main className="">
        <Hero/>
        <How/>
        <Oneplatform/>
        <hr className=" border-[rgb(4,59,3)]"/>
        <Whycretespace/>
         <hr className=" border-[rgb(4,59,3)]"/>
         <Business/>
        <hr className=" border-[rgb(4,59,3)]"/>
         <Individual/>
        <hr className=" border-[rgb(4,59,3)]"/>
        <Accounttype/>
         <hr className=" border-[rgb(4,59,3)]"/>
         <Faq/>
          <hr className=" border-[rgb(4,59,3)]"/>
          <Footer/>

      </main>
    
    
  )
  
}