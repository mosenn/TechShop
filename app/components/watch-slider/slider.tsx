import { ArrowLeft, BatteryFull, Drop, HeartAdd } from "iconsax-reactjs";
import Image from "next/image";
import React from "react";
import styles from "./GlassCircle.module.css";

const WatchSlider = () => {
  return (
    <main className="relative border grid gap-5">
      {/* watch image */}

      <section className="relative isolate overflow-hidden">
        {/* Glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 z-0
               h-[407px] w-[385px] -translate-x-1/2 -translate-y-1/2
               rounded-full opacity-50 blur-[140px]
               bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.4)_0%,rgba(14,165,233,0)_100%)]"
        />

        {/* Glass بزرگ جدید */}
        {/* <div
          className={`${styles.largeGlass} pointer-events-none absolute rotate-10 rounded-full
                left-1/2 top-1/2 z-10
                h-[380px] w-[390px]
                -translate-x-1/2 -translate-y-1/2 `}
        /> */}

        {/* دایره و ساعت */}
        <figure className="relative z-20 flex items-center justify-center ">
          <div className={styles.glassCircle}>
            <Image
              src="/imgs/watchs/1.png"
              className="mt-12"
              alt="watch"
              width={300}
              height={300}
            />
          </div>
        </figure>
      </section>

      {/*  */}
      <section className="flex flex-col ">
        {/* texts */}
        <div className="border text-right *:my-2">
          <h1 className="font-normal text-xl">ساعت هوشمند</h1>
          <h2 className="font-bold text-[1rem] mx-6">Galexy Watch8</h2>
          <p className="font-bold text-[1rem] mx-4 flex w-[96%]   justify-end ">
            Classsic{" "}
            <span className="border p-2 flex items-center justify-center text-center w-[54px] h-[22px] mx-2 border-[#16A2AB] text-[#16A2AB] rounded-[32px] font-medium text-[12px]">
              48mm
            </span>
          </p>
          <article>
            <p className="font-normal text-[1rem] text-brand-text-secondary">
              ترکیبی بی نظیر از طراحی کلاسیک و تکنولوژی هوشمند . مناسب برای ورزش
              و کار و زندگی روزمره با امکانات پیشرفته سلامت و اتصال هوشمند
            </p>
          </article>
        </div>
        {/* icons-texts */}
        <ul className="border flex  justify-end  *:[li]:w-[75px] *:[li]:border *:[li]:border-amber-200 ">
          <li className=" flex flex-col items-center text-center text-[12px] font-light text-[#F3F3F3]">
            <HeartAdd size="32" color="#FF8A65" className="my-2" />
            پایش هوشمند سلامت
          </li>
          <li className=" flex flex-col items-center text-center text-[12px] font-light text-[#F3F3F3]">
            <Drop size="32" color="#FF8A65" className="my-2" />
            مقاوم در برابر اب 5ATM
          </li>
          <li className=" flex flex-col items-center text-center text-[12px] font-light text-[#F3F3F3]">
            <BatteryFull
              size="32"
              color="#FF8A65"
              className="rotate-270 my-2"
            />
            باتری قدرتمند تا 3 روز
          </li>
        </ul>
        {/* buttons */}
        <div className="flex  py-4   justify-end">
          <button className="bg-brand-primary w-36.5 h-11.5 rounded-lg px-2 mx-3 flex justify-center items-center font-normal text-[14px]">
            <span className="mx-2">
              <ArrowLeft size="20" color="#FFFFFF" />
            </span>
            مشاهده و خرید
          </button>
          <button className=" border border-brand-border w-36.5 h-11.5 rounded-lg px-2  flex justify-center items-center font-normal text-[14px]">
            جزئیات بیشتر
          </button>
        </div>
        {/* dots */}

        <div className="flex flex-col items-center gap-3 absolute top-[40%] left-[10%] ">
          {/* Active */}
          <div className="h-8 w-1 rounded-full bg-cyan-400" />

          {/* Dot */}
          <div className="h-1.5 w-1.5 rounded-full bg-zinc-500" />

          {/* Dot */}
          <div className="h-1.5 w-1.5 rounded-full bg-zinc-500" />

          {/* Active Item */}
          <div className="h-8 w-1 rounded-full bg-zinc-400" />

          {/* Dot */}
          <div className="h-1.5 w-1.5 rounded-full bg-zinc-500" />

          {/* Dot */}
          <div className="h-1.5 w-1.5 rounded-full bg-zinc-500" />
        </div>
      </section>
    </main>
  );
};

export default WatchSlider;
