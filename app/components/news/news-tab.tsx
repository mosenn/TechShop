"use client";
import React, { useState } from "react";
import Titel from "../titel/titel";
import Image from "next/image";
import style from "./tab.module.css";
import {
  ArrowCircleLeft,
  ArrowCircleRight,
  Instagram,
  Send2,
  Youtube,
} from "iconsax-reactjs";

const NewsTablet = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <main className="hidden  tab:grid  bg-linear-to-b from-brand-bg via-brand-bg-section/60 to-brand-bg-section/60 rounded-xl border border-[#565656]">
      <div className="gap-5 flex flex-col p-2 xl:hidden">
        <Titel
          titel="خبر های تکنولوژی رو دنبال کنید"
          line={true}
          h1Style="text-[36px] font-medium my-0"
        />
        {/* picture */}
        <section
          className="relative mx-auto aspect-video w-full tab:max-w-175 des:max-w-[97%] lg:max-w-[80%] bg-transparent group"
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          onTouchStart={() => setIsActive(true)}
          onTouchEnd={() => setIsActive(false)}
        >
          {/* پنل ۱: بالا چپ */}
          <figure
            className={`${style.panel} absolute inset-0 ${isActive ? `${style.paused} ${style.fullClip}` : "-translate-x-2 -translate-y-2 opacity-90 " + style.animateFloatA} [clip-path:polygon(0_0,30%_0,30%_100%,0_100%)]`}
          >
            <Image
              src="/imgs/news/main.png"
              alt="news"
              fill
              className="object-cover"
            />
          </figure>

          {/* پنل ۲: وسط بالا */}
          <figure
            className={`${style.panel} absolute inset-0 ${isActive ? `${style.paused} ${style.fullClip}` : "-translate-y-2 opacity-90 " + style.animateFloatB} [clip-path:polygon(31%_0,50%_0,50%_69%,31%_69%)]`}
          >
            <Image
              src="/imgs/news/main.png"
              alt="news"
              fill
              className="object-cover"
            />
          </figure>

          {/* پنل ۳: وسط پایین */}
          <figure
            className={`${style.panel} absolute inset-0 ${isActive ? `${style.paused} ${style.fullClip}` : "translate-y-2 opacity-90 " + style.animateFloatC} [clip-path:polygon(31%_71%,50%_71%,50%_100%,31%_100%)]`}
          >
            <Image
              src="/imgs/news/main.png"
              alt="news"
              fill
              className="object-cover"
            />
          </figure>

          {/* پنل ۴: ستون عمودی وسط راست */}
          <figure
            className={`${style.panel} absolute inset-0 ${isActive ? `${style.paused} ${style.fullClip}` : "translate-x-2 opacity-90 " + style.animateFloatD} [clip-path:polygon(51%_0,71%_0,71%_100%,51%_100%)]`}
          >
            <Image
              src="/imgs/news/main.png"
              alt="news"
              fill
              className="object-cover"
            />
          </figure>

          {/* پنل ۵: راست بالا */}
          <figure
            className={`${style.panel} absolute inset-0 ${isActive ? `${style.paused} ${style.fullClip}` : "translate-x-2 -translate-y-2 opacity-90 " + style.animateFloatA} [clip-path:polygon(72%_0,100%_0,100%_30%,72%_30%)]`}
          >
            <Image
              src="/imgs/news/main.png"
              alt="news"
              fill
              className="object-cover"
            />
          </figure>

          {/* پنل ۶: راست وسط */}
          <figure
            className={`${style.panel} absolute inset-0 ${isActive ? `${style.paused} ${style.fullClip}` : "translate-x-2 opacity-90 " + style.animateFloatB} [clip-path:polygon(72%_32%,100%_32%,100%_68%,72%_68%)]`}
          >
            <Image
              src="/imgs/news/main.png"
              alt="news"
              fill
              className="object-cover"
            />
          </figure>

          {/* پنل ۷: راست پایین */}
          <figure
            className={`${style.panel} absolute inset-0 ${isActive ? `${style.paused} ${style.fullClip}` : "translate-x-2 translate-y-2 opacity-90 " + style.animateFloatC} [clip-path:polygon(72%_70%,100%_70%,100%_100%,72%_100%)]`}
          >
            <Image
              src="/imgs/news/main.png"
              alt="news"
              fill
              className="object-cover"
            />
          </figure>
        </section>
      </div>
      {/*  */}
      {/* py-4 */}
      <div className=" flex justify-center p-2 xl:hidden ">
        <section className="grid grid-cols-2 my-4 w-full max-w-175 des:max-w-[97%] lg:max-w-[82%] ">
          {/* left box */}
          <section className="h-full  gap-7 py-5 flex flex-col">
            {/* title */}
            <div className="text-right font-medium text-[20px] text-brand-text-soft">
              <h1>مارک با تغییرات اینستاگرام امده</h1>
            </div>

            <div className="0 justify-between flex  ">
              {/* social */}
              <ul className="flex justify-center  *:mx-2">
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
              {/* date */}
              <article className="font-normal text-xs leading-6 text-right text-brand-text-soft">
                <p>72026-07-11</p>
                <p>Saturday - July 11, 2026</p>
              </article>
            </div>
          </section>
          {/* right box */}
          <section className=" flex items-end flex-col text-right">
            {/* arrows */}
            <div className="flex   justify-end p-2 gap-6">
              <ArrowCircleLeft color={"#FF8A65"} size={42} />
              <ArrowCircleRight color={"#FF8A65"} size={42} />
            </div>
            {/* text */}
            <article className="font-normal text-[14px] w-60 leading-6 ">
              <p>
                امروز سامسونگ حرفای رو برای گفتن داره خبر های که در بازار امروز
                هست به این موضوع اشاره داره
              </p>
            </article>
          </section>
        </section>
      </div>

      {/* XL Layout */}
      <section className="hidden xl:grid w-full max-w-360 mx-auto grid-cols-[1fr_auto_1fr]  items-center gap-x-16 px-10 py-10">
        {/* Left Side: date -> news title -> socials */}
        <div className="flex flex-col items-center justify-end gap-6  text-left  h-full">
          {/* date */}
          <article className=" w-full text-right font-normal text-xs leading-6 text-brand-text-soft">
            <p>72026-07-11</p>
            <p>Saturday - July 11, 2026</p>
          </article>

          {/* news title */}
          <div className="font-medium text-[32px] leading-12    text-center  text-brand-text-soft">
            <h1> مارک با تغییرات اینستاگرام امده </h1>
          </div>

          {/* social */}
          <ul className="flex items-center gap-4 mb-5  w-full justify-center">
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

        {/* Center: title above image */}
        <div className="flex flex-col items-center gap-5 ">
          <Titel
            titel="خبر های تکنولوژی رو دنبال کنید"
            line={true}
            h1Style="text-[42px] font-medium my-0 text-center"
          />

          <section
            className="relative aspect-video w-130 2xl:w-155 xxl:border bg-transparent group"
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
                  : "translate-x-2 -translate-y-2 opacity-90 " +
                    style.animateFloatA
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
                  : "translate-x-2 translate-y-2 opacity-90 " +
                    style.animateFloatC
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
        </div>

        {/* Right Side: description -> arrows */}
        <div className="flex max-w-85 flex-col items-end text-right">
          <div className="flex justify-end gap-6  w-full py-4">
            <ArrowCircleLeft color="#FF8A65" size={42} />
            <ArrowCircleRight color="#FF8A65" size={42} />
          </div>
          <article className="font-normal text-[16px] leading-7 text-brand-text-soft">
            <p>
              امروز سامسونگ حرفای رو برای گفتن داره خبر های که در بازار امروز
              هست به این موضوع اشاره داره
            </p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default NewsTablet;
