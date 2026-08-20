"use client";
import { ArrowLeft } from "iconsax-reactjs";
import Image from "next/image";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const MobileHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // مدت زمان انیمیشن (اختیاری)
      once: true, // اجرای انیمیشن فقط یک‌بار هنگام اسکرول (اختیاری)
    });
  }, []);

  return (
    <main className=" grid tab:grid-cols-2 items-start xl:hidden  relative ">
      {/* <div className="h-screen" data-aos="fade-in">
        mohsen
      </div> */}
      {/* title for mobile 390*/}
      <div
        className="  tab:hidden  flex  w-full justify-center top-[-7px]  sm5:top-[-55px]  absolute z-10"
        data-aos="fade-in"
      >
        <h1 className=" w-full max-w-[350px]  text-[48px]  text-center ">
          تکنولوژی در دستان تو{" "}
        </h1>
      </div>
      {/* image */}
      {/* translate-y-[-200px] */}
      <figure
        className=" h-screen   flex justify-center    tab:translate-y-[-100px]    "
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <Image
          // src="/imgs/hero/mobil1.png"
          className="border object-contain"
          src="/imgs/hero/mobile-1.png"
          width={340}
          height={340}
          alt="galexy"
        />
      </figure>

      {/* text & buttons */}
      <section className="grid tab:flex flex-col  justify-end tab:justify-center  text-right tab:h-screen">
        {/* text */}
        <section className="grid tab:flex flex-col gap-2 text-right  ">
          <div className="hidden tab:flex  ">
            <h1 className=" font-bold text-[64px] lg:text-[80px] text-center tab:text-right tab:h-fit">
              تکنولوژی در دستان تو{" "}
            </h1>
          </div>
          <div className="flex flex-col items-end   font-bold text-[32px] tab:text-[24px] des:text-[32px]">
            <p className="  w-[250px] tab:w-[300px] des:w-full flex justify-end  leading-[50px]">
              <span className="hidden tab:inline mx-1"> مثل </span>
              جمع خوب ها اینجا جَمعهِ
            </p>
            <p className="font-bold text-[20px] tab:text-[24px] text-right">
              <span className="inline tab:hidden"> مثل </span>
              حرفه ای ها خرید کن
            </p>
          </div>
          {/* buttons */}
          <div className="flex justify-end  py-4">
            <button className="bg-brand-primary rounded-lg px-2 mx-3 flex justify-center items-center font-normal text-[14px] w-[146px] h-[46px]">
              <span className="mx-2">
                <ArrowLeft size="20" color="#FFFFFF" />
              </span>
              مشاوره بگیر
            </button>
            <button className=" border border-brand-border  rounded-lg px-2  flex justify-center items-center font-normal text-[14px] w-[146px] h-[46px]">
              مقایسه کن
            </button>
          </div>
        </section>
      </section>
    </main>
  );
};

export default MobileHero;
