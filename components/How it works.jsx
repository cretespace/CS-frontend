import React from "react";

const data = [
    {
        id: 1,
        title: "Order from anywhere",
        icon: "/Vector.png",
        content: "Place your order online from your phone or computer. Upload your files, choose what you need, and confirm; all without leaving your location."

    },
    {
        id: 2,
        title: "Order from anywhere",
        icon: "/Vector (1).png",
        content: "Get a message when your order is done. Stop by at any of our CRETESPACE stores, and collect it at a time that’s convenient for you."

    },
    {
        id: 3,
        title: "Order from anywhere",
        icon: "/Vector (7).png",
        content: "Prefer not to go out? Select our delivery option and we’ll bring your order straight to your home, school, or office. It’s fast, safe, and saves you time."

    }
]
export default function How() {
    return (
        <section className=" pt-[60px] pr-[165px] pb-[60px] pl-[165px] gap-[10px] bg-[rgba(0,0,0,1)] z-999">
            <div className=" gap-[48px]">
                <h2 className="text-center font-medium text-[25px] leading-[100%] tracking-[0%] text-[rgba(255,255,255,1)]">
                    How it Works
                </h2>
                <div className="  grid md:grid-cols-3 gap-[30px] space-x-[30px] mt-9">

                    {
                        data.map((articles, i) => (

                            <div key={i} className="">
                                <div className="gap-[12px]">


                                    <img className="w-[16px] h-[16px] top-[3.75px] left-[2.25px] " src={articles.icon} />
                                    <h3 className="font-medium text-sm leading-[28px] tracking-[0px] text-[rgba(47,194,43,1)] mb-2 mt-[-24px] ml-6">{articles.title}</h3>
                                </div>
                                <p className="font-normal text-[10px] leading-[20px] tracking-[0.1px] text-[rgba(255,255,255,1)] font-ebrima">
                                    {articles.content}
                                </p>
                            </div>
                        )

                        )
                    }
                </div>
            </div>
        </section>
    )
}