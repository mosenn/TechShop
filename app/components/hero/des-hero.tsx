import { ArrowLeft } from "iconsax-reactjs";
import React from "react";

const DesktopHero = () => {
  return (
    <main className=" hidden xl:flex relative   flex-col tab:flex-row justify-center items-center ">
      {/* image */}
      <div className="relative  border  w-[728px] h-[760.81px] mb-[150px] lg:border">
        <div className="bg-[url('/imgs/hero/mobile-2.png')] w-[420.59px] h-[698.38px]    bg-cover bg-center bg-no-repeat absolute "></div>
        <div className="bg-[url('/imgs/hero/mobile-1.png')] w-[420.59px] h-[698.38px]   bg-cover bg-center bg-[30%] bg-no-repeat relative z-10 translate-x-[210px] "></div>
      </div>
      {/* text & buttons */}
      <section className="flex flex-col  w-[40%]">
        {/* title */}
        <div className=" hidden tab:flex  ">
          <h1 className=" font-bold text-[50px] des:text-[96px]  lg:bg-red-700 text-center text-right">
            تکنولوژی در دستان تو{" "}
          </h1>
        </div>
        {/* text */}
        <section className="grid gap-2">
          <div className="  font-meduim text-[32px] tab:text-[24px] des:text-[32px]">
            <p className="w-[250px] tab:w-[300px] des:w-full flex justify-end  leading-section-xl">
              <span className="hidden tab:inline-block des:hidden  h-fit  w-fit mx-2 des:mx-0">
                مثل
              </span>
              جمع خوب ها اینجا جَمعهِ
            </p>
          </div>
          <div className=" ">
            <p className="font-normal text-[20px] tab:text-[24px] text-right">
              <span className="tab:hidden des:inline">مثل </span>
              حرفه ای ها خرید کن
            </p>
          </div>
        </section>
        {/* buttons */}
        <div className="flex  py-4   justify-end">
          <button className="bg-brand-primary w-[146px] h-[46px] rounded-lg px-2 mx-3 flex justify-center items-center font-normal text-[14px]">
            <span className="mx-2">
              <ArrowLeft size="20" color="#FFFFFF" />
            </span>
            مشاوره بگیر
          </button>
          <button className=" border border-brand-border w-[146px] h-[46px] rounded-lg px-2  flex justify-center items-center font-normal text-[14px]">
            مقایسه کن
          </button>
        </div>
      </section>
    </main>
  );
};

export default DesktopHero;
