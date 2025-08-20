import React from "react";
import Image from "next/image";




export default function Page() {
  return (
    <div  className="h-[550px]  text-white" style={{backgroundImage: "url('Crete background.jpg')"}} >
    {/*Start of Navbar */}

    <nav className="flex justify-between items-center px-8 py-4 bg-black">

    {/*start of logo*/}
    <div className="text-2xl font-bold">
      <img src="/Crete Logo.png" alt="crete logo" width={100} height={100}/>
    </div>
     {/*end of logo*/}

      {/*links*/}

    <div className="hidden md:flex space-x-6 text-sm font-medium">
      <a href="#" className="hover:text-green-400">Our Hubs</a>
       <a href="#" className="hover:text-green-400">FAQs</a>
        <a href="#" className="hover:text-green-400">About</a>
         <a href="#" className="hover:text-green-400">Support</a>
          <a href="#" className="hover:text-green-400">Log in</a>
          <button className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 transition">
            Sign up
          </button>
          </div>
    </nav>


     {/*Hero Section*/}

     <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-12  ">

       {/*Left Content*/}

       <div className="max-w-xl space-y-6 ">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Skip the Wait, <br/>  Skip the Stress.
        </h1>
        <p className="text-gray-200 text-lg">
          Africa's first Cloud-powered Digital business centre.
        </p>
        <div className="flex space-x-4">
          <button className="bg-blue-500 px-6 py-3 rounded-md font-semibold hover:scale-105 hover:shadow-lg transition">
            Get started for free
          </button>
          <button className="border border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-green-700 transition">Learn more</button>
        </div>
        </div>


         {/*Right Image*/}

         <div className=" md:mt-0 md:w-1/2 flex justify-center  ">
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

            <div className="grid md:grid-cols-3 gap-12 text-center">
              {/* Order from Anywhere */}
                <div>
                  <div className="text-green-500 text-4xl mb-4">logo</div>
                  <h3 className="text-lg font-semibold text-green-500 mb-2">Order from Anywhere</h3>
                  <p className="text-gray-300">
                     Place your order online from your phone or computer. Upload your files, 
                     choose what you need, and confirm; all without leaving your location.
                  </p>
                </div>

                {/* Pick Up When Ready */}
                <div>
                  <div className="text-green-500 text-4xl mb-4">logo</div>
                  <h3 className="text-lg font-semibold text-green-500 mb-2">Order from Anywhere</h3>
                  <p className="text-gray-300">
                     Place your order online from your phone or computer. Upload your files, 
                     choose what you need, and confirm; all without leaving your location.
                  </p>
                </div>

                {/* Get it delivered */}
                    <div>
                  <div className="text-green-500 text-4xl mb-4">logo</div>
                  <h3 className="text-lg font-semibold text-green-500 mb-2">Order from Anywhere</h3>
                  <p className="text-gray-300">
                     Place your order online from your phone or computer. Upload your files, 
                     choose what you need, and confirm; all without leaving your location.
                  </p>
                </div>


            </div>


          </section>
          

         

         {/*One Platform Section*/}

          <section className="bg-black text-white py-16 md:px-20">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                One Platform, <span className="underline decoration-green-500">Endless</span> Possibilities
              </h2>

            <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
              From individuals to business,
              <span className="text-green-500 font-semibold">CRETESPACE </span>
                puts all your essential tools and services in one secure platform
            </p>

             {/*Features Grid*/}
              <div className="grid md:grid-cols-3 gap-8">
                  <div className="p-6 border border-green-600 rounded-xl hover:bg-green-900/20 transition">
                  <h3 className="text-lg font-semibold mb-2">Secure Online Ordering</h3>
                  <p className="text-gray-400 mb-4">
                    Place service requestes from anywhere with data protection and privacy built in
                  </p>
                  <div className="text-green-500 text-2xl">logo</div>
                  
                  </div>

                   <div className="p-6 border border-green-600 rounded-xl hover:bg-green-900/20 transition">
                  <h3 className="text-lg font-semibold mb-2">Secure Online Ordering</h3>
                  <p className="text-gray-400 mb-4">
                    Place service requestes from anywhere with data protection and privacy built in
                  </p>
                  <div className="text-green-500 text-2xl">logo</div>
                  
                  </div>

                   <div className="p-6 border border-green-600 rounded-xl hover:bg-green-900/20 transition">
                  <h3 className="text-lg font-semibold mb-2">Secure Online Ordering</h3>
                  <p className="text-gray-400 mb-4">
                    Place service requestes from anywhere with data protection and privacy built in
                  </p>
                  <div className="text-green-500 text-2xl">logo</div>
                  
                  </div>

                   <div className="p-6 border border-green-600 rounded-xl hover:bg-green-900/20 transition">
                  <h3 className="text-lg font-semibold mb-2">Secure Online Ordering</h3>
                  <p className="text-gray-400 mb-4">
                    Place service requestes from anywhere with data protection and privacy built in
                  </p>
                  <div className="text-green-500 text-2xl">logo</div>
                  
                  </div>

                   <div className="p-6 border border-green-600 rounded-xl hover:bg-green-900/20 transition">
                  <h3 className="text-lg font-semibold mb-2">Secure Online Ordering</h3>
                  <p className="text-gray-400 mb-4">
                    Place service requestes from anywhere with data protection and privacy built in
                  </p>
                  <div className="text-green-500 text-2xl">logo</div>
                  
                  </div>

                   <div className="p-6 border border-green-600 rounded-xl hover:bg-green-900/20 transition">
                  <h3 className="text-lg font-semibold mb-2">Secure Online Ordering</h3>
                  <p className="text-gray-400 mb-4">
                    Place service requestes from anywhere with data protection and privacy built in
                  </p>
                  <div className="text-green-500 text-2xl">logo</div>
                  
                  </div>






              </div>


          </section>
        

    <hr className=''/>



      {/* why Cretespace section */}
      <section className="bg-black text-white py-16 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why CreteSpace?
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side Text */}
          <div>
            <h3 className="text-xl font-semibold text-green-500 mb-4">
              100% virtual Convenience 
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Access all business centre services from your phone or computer without
        stepping into a physical office. Whether you need a quick document
        conversion, a full project design, or bulk printing, CRETESPACE lets you
        order, track, and receive your work entirely online, saving you travel
        time and effort.
            </p>
          </div>

          {/* Right Side image */}
          <div className="flex justify-center">
            <img
            src="/GUY2 1.png"
            alt='virtual image'
            className="max-w-md"
            />
          </div>

        </div>

        {/* Access to verified experts */}

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side Text */}
          <div className="flex justify-center">
            <img
            src="/GUY2 1.png"
            alt='virtual image'
            className="max-w-md"
            />
          </div>

          {/* Right Side image */}
          <div>
            <h3 className="text-xl font-semibold text-green-500 mb-4">
              100% virtual Convenience 
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Access all business centre services from your phone or computer without
        stepping into a physical office. Whether you need a quick document
        conversion, a full project design, or bulk printing, CRETESPACE lets you
        order, track, and receive your work entirely online, saving you travel
        time and effort.
            </p>
          </div>

        </div>


        {/* secure file handling */}
         <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side Text */}
          <div>
            <h3 className="text-xl font-semibold text-green-500 mb-4">
              100% virtual Convenience 
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Access all business centre services from your phone or computer without
        stepping into a physical office. Whether you need a quick document
        conversion, a full project design, or bulk printing, CRETESPACE lets you
        order, track, and receive your work entirely online, saving you travel
        time and effort.
            </p>
          </div>

          {/* Right Side image */}
          <div className="flex justify-center">
            <img
            src="/GUY2 1.png"
            alt='virtual image'
            className="max-w-md"
            />
          </div>

        </div>

        {/* Scabable for Everyone */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side Text */}
          <div className="flex justify-center">
            <img
            src="/GUY2 1.png"
            alt='virtual image'
            className="max-w-md"
            />
          </div>

          {/* Right Side image */}
          <div>
            <h3 className="text-xl font-semibold text-green-500 mb-4">
              100% virtual Convenience 
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Access all business centre services from your phone or computer without
        stepping into a physical office. Whether you need a quick document
        conversion, a full project design, or bulk printing, CRETESPACE lets you
        order, track, and receive your work entirely online, saving you travel
        time and effort.
            </p>
          </div>

        </div>




      </section>
   
   <hr className="" />
   
   
   
   
   
   
   
   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </div>


      
  


  )
};


 