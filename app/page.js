
import React from "react";
import Image from "next/image";
import FadeInSection from "@/components/FadeinSection";

import Faq from '@/components/faq';
import Footer from '@/components/footer';
import Accounttype from '@/components/Account type'





export default function Page() {


  return (
    <div  className="h-[550px]  text-white" style={{backgroundImage: "url('Crete background.jpg')"}} >
    {/*Start of Navbar */}

    <nav className="flex justify-between items-center px-8 py-4 bg-[rgb(11,0,0)]">

    {/*start of logo*/}
     <div className="text-2xl font-bold">
      <img src="/Crete Logo.png" alt="crete logo" width={100} height={100}/>
    </div>
     {/*end of logo*/}

      {/*links*/}

    <div className="hidden md:flex space-x-6 text-sm font-medium ">
      <a href="#" className="hover:text-green-400">Our Hubs</a>
       <a href="#" className="hover:text-green-400">FAQs</a>
        <a href="#" className="hover:text-green-400">About</a>
         <a href="#" className="hover:text-green-400">Support</a>
          <a href="#" className="hover:text-green-400">Log in</a>
          <button className="bg-[rgb(0,160,212)] px-4 h-8 mt-[-5px] rounded-md ">
            Sign up
          </button>
          </div>
    </nav>


     {/*Hero Section*/}
     
     <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-12 ml-[150px]">

       {/*Left Content*/}
            <FadeInSection direction="right">
       <div className="max-w-xl space-y-6 ml-3 ">
        <h1 className=" font-ebrima font-extrabold text-7xl leading-tight">
          Skip the Wait, <br/>  Skip the Stress.
        </h1>
        <p className="text-gray-200 text-lg">
          Africa's first Cloud-powered Digital business centre.
        </p>
        <div className="flex space-x-4">
          <button className="bg-blue-500 px-5 h-11  rounded-xl font-semibold hover:scale-105 hover:shadow-lg transition">
            Get started for free 
           
          </button>
          <button className=" px-6 py-3 rounded-md font-semibold ">Learn more</button>
        </div>
        </div>
          </FadeInSection>

         {/*Right Image*/}
           
         <div className=" md:mt-0 md:w-1/2 flex justify-center mr-10 ">
         <Image src='/GUY2 1.png'
         alt="Hero image"
         width={440}
         height={440}
         className="drop-shadow-2xl"
          />
          
         
         
         
         </div>
         
        </section>
     

     {/*How it works Section*/}

        
          <section className="bg-black text-white py-16 px-6 md:px-20 mt-[-46px]">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              How It Works
            </h2>

            <div className="grid md:grid-cols-3 gap-12 ml-[68px] mt-15">
              {/* Order from Anywhere */}
              <FadeInSection direction="right">
                <div>
                   <img className="ml-2" src="/Vector.png"/>
                  <h3 className="text-lg  text-green-500 mb-2 mt-[-24px] ml-10">Order from Anywhere</h3>
                  <p className="text-gray-300">
                    Place your order online from your phone or <br/> computer. Upload your files, choose what you need, <br/> and confirm, all without leaving your location.
                  </p>
                </div>
                </FadeInSection>

                {/* Pick Up When Ready */}
                <FadeInSection direction="right">
                <div>
                  <img className="ml-2" src="/Vector (1).png"/>
                  <h3 className="text-lg  text-green-500 mb-2 mt-[-24px]  ml-10">Pick Up When Ready</h3>
                  <p className="text-gray-300">
                    Get a message when your order is done. Stop by at <br/> any of our CRETESPACE stores. and collect it at a <br/> time that convenient for you.
                  </p>
                </div>
                </FadeInSection>

                {/* Get it delivered */}
                <FadeInSection direction="right">
                    <div>
                   <img className="ml-2" src="/Vector (7).png"/>
                  <h3 className="text-lg  text-green-500 mb-2 mt-[-22px] ml-10">Get it delivered</h3>
                  <p className="text-gray-300 ">
                    Prefer not to go out? Select our delivery option and <br/> we'll bring your order straight to your home, school, or <br/> office. it's fast,safe, and saves you time.
                  </p>
                </div>
                </FadeInSection>


            </div>


          </section>
         

         

         {/*One Platform Section*/}

          <section className="bg-black text-white py-16 md:px-20 ">
            <img className="ml-[582px] mb-[-50px]" src="/Vector (2).png" width={190} />
            <FadeInSection direction="left">
              <h2 className="text-5xl font-bold text-center mb-4 ">
                One Platform,  Endless Possibilities.
              </h2>
              </FadeInSection>

                <FadeInSection direction="left">
            <p className="text-center text-gray-400  mx-auto mb-12">
              From individuals to business,
              <span className="text-[rgb(47,194,43)] font-semibold">CRETESPACE </span>
                puts all your essential tools and services in one secure platform.
            </p>
            </FadeInSection>

             {/*Features Grid*/}
             <FadeInSection direction="right">
              <div className="grid md:grid-cols-3 gap-8">
                  <div className="p-6 border  border-[rgb(4,59,3)] rounded-xl">
                  <h3 className="text-2xl font-semibold mb-2">Secure Online Ordering</h3>
                  <p className="text-gray-400 mb-4">
                    Place service requestes from anywhere with data protection and privacy built in.
                  </p>
              <img className="ml-85" src="/ic_baseline-headset.png"/>
                  
                  </div>

                   <div className="p-6 border border-[rgb(4,59,3)] rounded-xl ">
                  <h3 className="text-2xl font-semibold mb-2">Real-Time Order Tracking</h3>
                  <p className="text-gray-400 mb-4">
                   Follow the progress of your orders from start to finish with instant status updates.
                  </p>
                 <img className="ml-85" src="/mdi_package-variant-closed-check.png"/>
                  
                  </div>

                   <div className="p-6 border border-[rgb(4,59,3)] rounded-xl">
                  <h3 className="text-2xl font-semibold mb-2">Cloud File Storage</h3>
                  <p className="text-gray-400 mb-4">
                   Upload, store and retrieve your documents anytime, your files are always safe.
                  </p>
                 <img className="ml-85" src="/ic_outline-cloud.png"/>
                  
                  </div>

                   <div className="p-6 border border-[rgb(4,59,3)] rounded-xl ">
                  <h3 className="text-2xl font-semibold mb-2">Access to Expert Support</h3>
                  <p className="text-gray-400 mb-4">
                    Chat with CRETESPACE specialists for quick help and tailored solutions. 
                  </p>
                 <img className="ml-85" src="/ic_baseline-headset.png"/>
                  
                  </div>

                   <div className="p-6 border border-[rgb(4,59,3)] rounded-xl ">
                  <h3 className="text-2xl font-semibold mb-2">Wide Range of Services</h3>
                  <p className="text-gray-400 mb-4">
                    Enjoy everything from printing and design to typing, scanning, and file conversion.
                  </p>
                   <img className="ml-85" src="/solar_layers-linear.png"/>
                  
                  </div>

                   <div className="p-6 border border-[rgb(4,59,3)] rounded-xl ">
                  <h3 className="text-2xl font-semibold mb-2">Flexible Delivery Options</h3>
                  <p className="text-gray-400 mb-4">
                   Pick up your completed work in person or have it delivered to your doorstep.
                  </p>
                 <img className="ml-85" src="/icon-park-outline_delivery.png"/>
                  
                  </div>






              </div>
                </FadeInSection>

          </section>
        

    <hr className=" border-[rgb(4,59,3)]"/>



      {/* why Cretespace section */}
      <section className="bg-black text-white py-16 px-6 md:px-20">
        <FadeInSection>
        <h2 className=" text-3xl md:text-4xl font-bold text-center mb-12">
          Why CreteSpace?
        </h2>
        </FadeInSection>

          
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side Text */}
          <FadeInSection direction="right">
          <div className="ml-50">
            <h3 className="text-xl font-semibold text-[rgb(47,194,43)] mb-4">
              100% virtual Convenience 
            </h3>
            <p className="text-gray-300 leading-relaxed">
             Access all business centre services from your phone or <br/> computer without stepping into a physical office. Whether you <br/> need a quicl document conversion, a full project design, or bulk <br/> printing, CRETESPACE lets your order, track, and receive your <br/> work entirely online, saving you travel time and effort.
            </p>
          </div>
          </FadeInSection>

          {/* Right Side image */}
          <FadeInSection direction="right">
          <div className="flex justify-center">
            <img 
            src="/te 1.png"
            alt='virtual image'
            className="max-w-md mr-20"
            />
          </div>
          </FadeInSection>

        </div>
        

        {/* Access to verified experts */}

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side Text */}
          <FadeInSection direction="left">
          <div className="flex justify-center">
            <img
            src="/2440137 2.png"
            alt='virtual image'
            className="max-w-md"
            />
          </div>
          </FadeInSection>

          {/* Right Side image */}
          <FadeInSection direction="right">
          <div>
            <h3 className="text-xl font-semibold text-[rgb(47,194,43)] mb-4">
              Access to Verified Experts 
            </h3>
            <p className="text-gray-300 leading-relaxed">
             No matter the task, you have access to CRETESPACE's team of <br/> professionals. From admin support to creative design, our <br/> experts ensure jobs are completed accurately, efficiently, <br/> and to the highest standards. You can chat directly with them, <br/> share files, and give feedback in real time.
            </p>
          </div>
          </FadeInSection>

        </div>


        {/* secure file handling */}
         <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side Text */}
          <FadeInSection direction="left">
          <div className="ml-50">
            <h3 className="text-xl font-semibold text-[rgb(47,194,43)] mb-4">
              Secure File Handling  
            </h3>
            <p className="text-gray-300 leading-relaxed">
             Your documents and projects are protected with secure cloud <br/> storage and controlled access. You can upload, store, <br/> and retrieve files at any time without worrying about loss or <br/> unauthorized access. Plus, every file is backed up to prevent <br/> accidental deletion.
            </p>
          </div>
          </FadeInSection>

          {/* Right Side image */}
          <FadeInSection direction="right">
          <div className="flex justify-center">
            <img
            src="/ertt 1.png"
            alt='virtual image'
            className="max-w-md mr-20"
            />
          </div>
          </FadeInSection>

        </div>

        {/* Scabable for Everyone */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side Text */}
          <FadeInSection direction="left">
          <div className="flex justify-center">
            <img
            src="/freepik__i-need-a-vector-illustration-of-a-different-people__94425 1.png"
            alt='virtual image'
            className="max-w-md"
            />
          </div>
          </FadeInSection>

          {/* Right Side image */}
          <FadeInSection direction="left" >
          <div>
            <h3 className="text-xl font-semibold text-[rgb(47,194,43)] mb-4">
              Scalable for Everyone 
            </h3>
            <p className="text-gray-300 leading-relaxed">
            Whether you're a student working on assignments, a freelancer <br/> handling client porjects, a business managing admin tasks, or a <br/> physical business centre processing orders, CRETESPACE <br/> adapts to your needs with tailored features and account types.
            </p>
          </div>
          </FadeInSection>

        </div>




      </section>
   
   <hr className=" border-[rgb(4,59,3)]"/>


   
   {/* Business Sucess Stories Section */}

   <section className="bg-black text-white py-16 px-6 md:px-20">
    {/* Heading */}
    <FadeInSection> 
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
      <span className="text-[rgb(47,194,43)]">Business</span> Success Stories
    </h2>
    </FadeInSection>

    {/* Testimonials Grid */}
    <div className="grid md:grid-cols-3   ml-30">
      {/* Card 1 */}
      <FadeInSection> 
      <div className="bg-[rgb(23,23,23)] border border-gray-600  p-6 h-95 w-90 rounded-2xl shadow-lg">
        <p className="text-green-500 text-7xl mb-4">“</p>
        <h3 className="text-2xl font-bold mt-[-24px] mb-2">
          Smooth collaboration with <br/> experts
        </h3>
        <p className="text-gray-300 text-sm mb-6 mt-6">
           Our team works closely with CRETESPACE support agents who handle tasks
        quickly and professionally. It feels like we’ve added skilled staff
        without increasing payroll.
        </p>
        <hr className="border-[rgb(93,93,93)]" />
        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center space-x-3">
            <img src="Ellipse 9.png"/>
            <div>
              <p className="font-medium">Amaka Bello</p>
              <p className="text-gray-400 text-sm">HR Lead</p>
            </div>
          </div>
           <div className="flex space-x-1 mt-3 ">
               <img src="Vector (5).png"  /> 
                <img src="Vector (5).png" /> 
                 <img src="Vector (5).png" /> 
                  <img src="Vector (5).png" /> 
                   <img src="Vector (5).png" /> 
           </div>
        </div>
      </div>
      </FadeInSection>

      {/* Card 2 */}
      <FadeInSection>
       <div className="bg-[rgb(23,23,23)] border border-gray-600 p-6 h-95 w-90 rounded-2xl shadow-lg">
        <p className="text-green-500 text-7xl mb-4">“</p>
        <h3 className="text-2xl font-bold mt-[-24px] mb-2">
          Saves time and reduces <br/> costs
        </h3>
        <p className="text-gray-300 text-sm mb-6 mt-6">
          From cloud storage to virtual meetings, CRETESPACE has streamlined our admin processes.We've cut down on overhead costs <br/> while getting more done in less time
       
        </p>
       <hr className="border-[rgb(93,93,93)]" />
        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center space-x-3">
            <img src="Ellipse 9 (1).png"/>
            <div>
              <p className="font-medium">Samuel Ofor</p>
              <p className="text-gray-400 text-sm">Business Director</p>
            </div>
          </div>
          <div className="flex space-x-1 mt-3">
               <img src="Vector (5).png" /> 
                <img src="Vector (5).png" /> 
                 <img src="Vector (5).png" /> 
                  <img src="Vector (5).png" /> 
                   <img src="Vector (5).png" /> 
           </div>
        </div>
      </div>
        </FadeInSection>
      {/* Card 3 */}
      <FadeInSection> 
        <div className="bg-[rgb(23,23,23)] border border-gray-600 p-6 h-95 w-90 rounded-2xl shadow-lg">
        <p className="text-green-500 text-7xl mb-4">“</p>
        <h3 className="text-2xl font-bold mt-[-24px] mb-2">
          Our new virtual operations <br/> team
        </h3>
        <p className="text-gray-300 text-sm mb-6 mt-6">
          CRETESPACE has completely changed how we handle admin work, From document formatting to team collaboration and cloud storage, and we love it!
       
        </p>
        <hr className="border-[rgb(93,93,93)]" />
        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center space-x-3">
            <img src="Ellipse 9 (2).png"/>
            <div>
              <p className="font-medium">Tunde Adebayo</p>
              <p className="text-gray-400 text-sm">Operations Manager</p>
            </div>
          </div>
          <div className="flex space-x-1 mt-3">
               <img src="Vector (5).png" /> 
                <img src="Vector (5).png" /> 
                 <img src="Vector (5).png" /> 
                  <img src="Vector (5).png" /> 
                   <img src="Vector (5).png" /> 
           </div>
        </div>
      </div>
      </FadeInSection>

    </div>
   </section>


 <hr className=" border-[rgb(4,59,3)]"/>

   {/* Individuals Sucess Story */}
    <section className="bg-black text-white py-16 px-6 md:px-20">
    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
      <span className="text-[rgb(47,194,43)]">Individual</span> Success Stories
    </h2>

    {/* Testimonials Grid */}
    <div className="grid md:grid-cols-3 ml-30">
      {/* Card 1 */}
      <FadeInSection>
      <div className="bg-[rgb(23,23,23)] p-6 h-95 w-90  shadow-lg">
        <div className="flex space-x-1 mt-3 ">
               <img src="Vector (6).png"  /> 
                <img src="Vector (6).png" /> 
                 <img src="Vector (6).png" /> 
                  <img src="Vector (6).png" /> 
                   <img src="Vector (6).png" /> 
           </div>
        
        <p className="text-gray-300 mb-6 mt-12">
           "From assignments to final year <br/> projects, CRETESPACE handles it all. <br/> i love the cloud library -- i can store and print my work anytime, even right <br/> before a deadline"
       
        </p>
        
        <div className="flex items-center justify-between mt-[-20px]">
          <div className="mt-8">
            <img src="Ellipse 9 (5).png"/>
            <div>
              <p className="font-medium mt-2 text-[rgb(47,194,43)]">Ebube Okonkwo</p>
              <p className="text-gray-400 text-sm ">Product Designer</p>
            </div>
          </div>
          <div className="flex space-x-1 gap-2 mt-25">
               <img src="Icon.png"  /> 
                 <img src="Icon (1).png"  /> 
                
           </div>
        </div>
      </div>
       </FadeInSection>

      {/* Card 2 */}
      <FadeInSection>
      <div className="bg-[rgb(23,23,23)] p-6 h-95 w-90  shadow-lg">
        <div className="flex space-x-1 mt-3 ">
               <img src="Vector (6).png"  /> 
                <img src="Vector (6).png" /> 
                 <img src="Vector (8).png" /> 
                  <img src="Vector (8).png" /> 
                   <img src="Vector (8).png" /> 
           </div>
        
        <p className="text-gray-300 mb-6 mt-12">
           "Managing admin tasks used to eat up <br/> my time. With CRETESPACE, i have a <br/>dedicated support agent, cloud tools,  <br/> and quick printing all in one place. My <br/> business runs smoother than ever."
       
        </p>
        
        <div className="flex items-center justify-between mt-[-20px]">
          <div className="mt-8">
            <img src="Ellipse 9 (3).png"/>
            <div>
              <p className="font-medium mt-2 text-[rgb(47,194,43)]">Laura Nnaji</p>
              <p className="text-gray-400 text-sm ">Fashion Designer</p>
            </div>
          </div>
          <div className="flex space-x-1 gap-2 mt-25">
               <img src="Icon.png"  /> 
                 <img src="Icon (1).png"  /> 
                
           </div>
        </div>
      </div>
      </FadeInSection>

      {/* Card 3 */}
      <FadeInSection> 
      <div className="bg-[rgb(23,23,23)] p-6 h-95 w-90  shadow-lg">
        <div className="flex space-x-1 mt-3 ">
               <img src="Vector (6).png"  /> 
                <img src="Vector (6).png" /> 
                 <img src="Vector (6).png" /> 
                  <img src="Vector (6).png" /> 
                   <img src="Vector (8).png" /> 
           </div>
        
        <p className="text-gray-300 mb-6 mt-12">
           "CRETESPACE has been a lifesaver for <br/> my freelance work. i can typeset, print, <br/> and get documents delivered without  <br/> leaving my desk. it's fast, reliable, and <br/> stress-free."
       
        </p>
        
        <div className="flex items-center justify-between mt-[-20px]">
          <div className="mt-8">
            <img src="Ellipse 9 (4).png"/>
            <div>
              <p className="font-medium mt-2 text-[rgb(47,194,43)]">Danny Zani</p>
              <p className="text-gray-400 text-sm ">Student</p>
            </div>
          </div>
          <div className="flex space-x-1 gap-2 mt-25">
               <img src="Icon.png"  /> 
                 <img src="Icon (1).png"  /> 
                
           </div>
        </div>
      </div>
      </FadeInSection>

    </div>
   </section>

   <hr className=" border-[rgb(4,59,3)]"/>
   
   
  <Accounttype/>
   

     <hr className=" border-[rgb(4,59,3)]"/>
    
    <Faq/>

     <hr className=" border-[rgb(4,59,3)]"/>
    <Footer/>
    
    
    
    
    
    
    
    
    </div>


      
  


  )
}; 