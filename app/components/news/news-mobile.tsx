"use client";
import {
  ArrowCircleLeft,
  ArrowCircleRight,
  Instagram,
  Send2,
  Youtube,
} from "iconsax-reactjs";
import React, { useState } from "react";
import Titel from "../titel/titel";
import Image from "next/image";
import style from "./tab.module.css";
const NewsMobile = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <main className="overflow-hidden flex flex-col items-center  tab:hidden">
      <div className=" flex p-2 justify-end gap-4 w-full">
        <ArrowCircleLeft color={"#FF8A65"} size={42} />
        <ArrowCircleRight color={"#FF8A65"} size={42} />
      </div>
      <Titel
        line={true}
        titel="خبر های تکنولوژی رو دنبال کنید "
        h1Style="text-[32px] px-5 font-normal my-2"
      />

      <section
        className="relative aspect-video w-[95%] bg-transparent group my-6"
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
        onTouchStart={() => setIsActive(true)}
        onTouchEnd={() => setIsActive(false)}
      >
        {/* پنل ۱ */}
        <figure
          className={`${style.panel} absolute inset-0 ${
            isActive
              ? `${style.paused} ${style.fullClip}`
              : "-translate-x-2 -translate-y-2 opacity-90 " +
                style.animateFloatA
          } [clip-path:polygon(0_0,30%_0,30%_100%,0_100%)]`}
        >
          <Image
            src="/imgs/news/main.png"
            alt="news"
            fill
            className="object-cover"
          />
        </figure>

        {/* پنل ۲ */}
        <figure
          className={`${style.panel} absolute inset-0 ${
            isActive
              ? `${style.paused} ${style.fullClip}`
              : "-translate-y-2 opacity-90 " + style.animateFloatB
          } [clip-path:polygon(31%_0,50%_0,50%_69%,31%_69%)]`}
        >
          <Image
            src="/imgs/news/main.png"
            alt="news"
            fill
            className="object-cover"
          />
        </figure>

        {/* پنل ۳ */}
        <figure
          className={`${style.panel} absolute inset-0 ${
            isActive
              ? `${style.paused} ${style.fullClip}`
              : "translate-y-2 opacity-90 " + style.animateFloatC
          } [clip-path:polygon(31%_71%,50%_71%,50%_100%,31%_100%)]`}
        >
          <Image
            src="/imgs/news/main.png"
            alt="news"
            fill
            className="object-cover"
          />
        </figure>

        {/* پنل ۴ */}
        <figure
          className={`${style.panel} absolute inset-0 ${
            isActive
              ? `${style.paused} ${style.fullClip}`
              : "translate-x-2 opacity-90 " + style.animateFloatD
          } [clip-path:polygon(51%_0,71%_0,71%_100%,51%_100%)]`}
        >
          <Image
            src="/imgs/news/main.png"
            alt="news"
            fill
            className="object-cover"
          />
        </figure>

        {/* پنل ۵ */}
        <figure
          className={`${style.panel} absolute inset-0 ${
            isActive
              ? `${style.paused} ${style.fullClip}`
              : "translate-x-2 -translate-y-2 opacity-90 " + style.animateFloatA
          } [clip-path:polygon(72%_0,100%_0,100%_30%,72%_30%)]`}
        >
          <Image
            src="/imgs/news/main.png"
            alt="news"
            fill
            className="object-cover"
          />
        </figure>

        {/* پنل ۶ */}
        <figure
          className={`${style.panel} absolute inset-0 ${
            isActive
              ? `${style.paused} ${style.fullClip}`
              : "translate-x-2 opacity-90 " + style.animateFloatB
          } [clip-path:polygon(72%_32%,100%_32%,100%_68%,72%_68%)]`}
        >
          <Image
            src="/imgs/news/main.png"
            alt="news"
            fill
            className="object-cover"
          />
        </figure>

        {/* پنل ۷ */}
        <figure
          className={`${style.panel} absolute inset-0 ${
            isActive
              ? `${style.paused} ${style.fullClip}`
              : "translate-x-2 translate-y-2 opacity-90 " + style.animateFloatC
          } [clip-path:polygon(72%_70%,100%_70%,100%_100%,72%_100%)]`}
        >
          <Image
            src="/imgs/news/main.png"
            alt="news"
            fill
            className="object-cover"
          />
        </figure>
      </section>

      <article className=" font-normal text-[1rem] text-right p-2 mx-2 leading-7">
        <p>
          در بازار امروز سامسونگ حرفای رو برای گفتن داره خبر های که در بازار
          امروز هست به این موضوع اشاره داره
        </p>
      </article>
      <Titel line={true} h1Style="my-2" />
      <div className="social  py-6 ">
        <ul className="flex justify-center gap-3">
          <li>
            <Send2 size="32" color="#FF8A65" />
          </li>
          <li>
            <Youtube size="32" color="#FF8A65" />
          </li>

          <li>
            <Instagram size="32" color="#FF8A65" />
          </li>
        </ul>
      </div>
    </main>
  );
};

export default NewsMobile;
