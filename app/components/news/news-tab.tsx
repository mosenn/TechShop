"use client";

import React, { useEffect, useState } from "react";
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

type NewsItem = {
  id: number;
  title: string;
  description: string;
  date: string;
  dateLabel: string;
  image: string;
};

const newsData: NewsItem[] = [
  {
    id: 1,
    title: "مارک با تغییرات اینستاگرام آمده",
    description:
      "امروز سامسونگ حرف‌هایی برای گفتن دارد. خبرهایی که در بازار امروز منتشر شده‌اند به این موضوع اشاره دارند.",
    date: "2026-07-11",
    dateLabel: "Saturday - July 11, 2026",
    image: "/imgs/news/main.png",
  },
  {
    id: 2,
    title: "اپل از قابلیت‌های جدید iOS رونمایی کرد",
    description:
      "اپل در نسخه‌ی جدید سیستم‌عامل خود امکانات تازه‌ای برای شخصی‌سازی و مدیریت بهتر دستگاه‌ها ارائه کرده است.",
    date: "2026-07-18",
    dateLabel: "Saturday - July 18, 2026",
    image: "/imgs/news/2.avif",
  },
  {
    id: 3,
    title: "هوش مصنوعی مسیر طراحی را تغییر می‌دهد",
    description:
      "ابزارهای هوش مصنوعی حالا نقش پررنگ‌تری در تولید محتوا، طراحی رابط کاربری و توسعه‌ی محصولات دیجیتال دارند.",
    date: "2026-07-25",
    dateLabel: "Saturday - July 25, 2026",
    image: "/imgs/news/3.avif",
  },
];

type NewsMosaicProps = {
  image: string;
  alt: string;
  isActive: boolean;
};

const NewsMosaic = ({ image, alt, isActive }: NewsMosaicProps) => {
  const panelClass = (idleClass: string, clipPath: string) =>
    `${style.panel} absolute inset-0 ${
      isActive
        ? `${style.paused} ${style.fullClip}`
        : `${idleClass} opacity-90`
    } ${clipPath}`;

  return (
    <>
      <figure
        className={panelClass(
          `-translate-x-2 -translate-y-2 ${style.animateFloatA}`,
          "[clip-path:polygon(0_0,30%_0,30%_100%,0_100%)]",
        )}
      >
        <Image src={image} alt={alt} fill className="object-cover" />
      </figure>

      <figure
        className={panelClass(
          `-translate-y-2 ${style.animateFloatB}`,
          "[clip-path:polygon(31%_0,50%_0,50%_69%,31%_69%)]",
        )}
      >
        <Image src={image} alt={alt} fill className="object-cover" />
      </figure>

      <figure
        className={panelClass(
          `translate-y-2 ${style.animateFloatC}`,
          "[clip-path:polygon(31%_71%,50%_71%,50%_100%,31%_100%)]",
        )}
      >
        <Image src={image} alt={alt} fill className="object-cover" />
      </figure>

      <figure
        className={panelClass(
          `translate-x-2 ${style.animateFloatD}`,
          "[clip-path:polygon(51%_0,71%_0,71%_100%,51%_100%)]",
        )}
      >
        <Image src={image} alt={alt} fill className="object-cover" />
      </figure>

      <figure
        className={panelClass(
          `translate-x-2 -translate-y-2 ${style.animateFloatA}`,
          "[clip-path:polygon(72%_0,100%_0,100%_30%,72%_30%)]",
        )}
      >
        <Image src={image} alt={alt} fill className="object-cover" />
      </figure>

      <figure
        className={panelClass(
          `translate-x-2 ${style.animateFloatB}`,
          "[clip-path:polygon(72%_32%,100%_32%,100%_68%,72%_68%)]",
        )}
      >
        <Image src={image} alt={alt} fill className="object-cover" />
      </figure>

      <figure
        className={panelClass(
          `translate-x-2 translate-y-2 ${style.animateFloatC}`,
          "[clip-path:polygon(72%_70%,100%_70%,100%_100%,72%_100%)]",
        )}
      >
        <Image src={image} alt={alt} fill className="object-cover" />
      </figure>
    </>
  );
};

const NewsTablet = () => {
  const [isActive, setIsActive] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isSliding, setIsSliding] = useState(false);

  const currentNews = newsData[currentIndex];
  const previousNews =
    previousIndex !== null ? newsData[previousIndex] : null;

  const changeSlide = (nextDirection: "next" | "prev") => {
    if (isSliding) return;

    setIsActive(false);
    setDirection(nextDirection);
    setPreviousIndex(currentIndex);
    setIsSliding(true);

    setCurrentIndex((oldIndex) => {
      if (nextDirection === "next") {
        return (oldIndex + 1) % newsData.length;
      }

      return (oldIndex - 1 + newsData.length) % newsData.length;
    });
  };

  useEffect(() => {
    if (!isSliding) return;

    const timer = window.setTimeout(() => {
      setPreviousIndex(null);
      setIsSliding(false);
    }, 850);

    return () => window.clearTimeout(timer);
  }, [isSliding]);

  const contentAnimation =
    isSliding && direction === "next"
      ? style.textEnterFromRight
      : isSliding
        ? style.textEnterFromLeft
        : "";

  const ArrowButtons = (
    <div className="flex justify-end gap-6 w-full py-4">
      <button
        type="button"
        aria-label="خبر بعدی"
        disabled={isSliding}
        onClick={() => changeSlide("next")}
        className="transition-opacity disabled:pointer-events-none disabled:opacity-40"
      >
        <ArrowCircleLeft color="#FF8A65" size={42} />
      </button>

      <button
        type="button"
        aria-label="خبر قبلی"
        disabled={isSliding}
        onClick={() => changeSlide("prev")}
        className="transition-opacity disabled:pointer-events-none disabled:opacity-40"
      >
        <ArrowCircleRight color="#FF8A65" size={42} />
      </button>
    </div>
  );

  const NewsImageSlider = (
    <section
      className="relative h-full w-full"
      onMouseEnter={() => !isSliding && setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onTouchStart={() => !isSliding && setIsActive(true)}
      onTouchEnd={() => setIsActive(false)}
    >
      {previousNews && (
        <div
          className={`${style.mosaicLayer} ${
            direction === "next"
              ? style.mosaicExitToLeft
              : style.mosaicExitToRight
          }`}
        >
          <NewsMosaic
            image={previousNews.image}
            alt={previousNews.title}
            isActive={true}
          />
        </div>
      )}

      <div
        className={`${style.mosaicLayer} ${
          isSliding
            ? direction === "next"
              ? style.mosaicEnterFromRight
              : style.mosaicEnterFromLeft
            : ""
        }`}
      >
        <NewsMosaic
          image={currentNews.image}
          alt={currentNews.title}
          isActive={isActive}
        />
      </div>
    </section>
  );

  return (
    <main className="hidden tab:grid bg-linear-to-b from-brand-bg via-brand-bg-section/60 to-brand-bg-section/60 rounded-xl border border-[#565656]">
      {/* Tablet Layout */}
      <div className="gap-5 flex flex-col p-2 xl:hidden">
        <Titel
          titel="خبر های تکنولوژی رو دنبال کنید"
          line={true}
          h1Style="text-[36px] font-medium my-0"
        />

        <section className="relative mx-auto aspect-video w-full tab:max-w-175 des:max-w-[97%] lg:max-w-[80%] bg-transparent">
          {NewsImageSlider}
        </section>
      </div>

      <div className="flex justify-center p-2 xl:hidden">
        <section className="grid grid-cols-2 my-4 w-full max-w-175 des:max-w-[97%] lg:max-w-[82%]">
          <section className="h-full gap-7 py-5 flex flex-col">
            <div
              key={`tablet-title-${currentNews.id}`}
              className={`${style.textSlide} ${contentAnimation} text-right font-medium text-[20px] text-brand-text-soft`}
            >
              <h1>{currentNews.title}</h1>
            </div>

            <div className="justify-between flex">
              <ul className="flex justify-center *:mx-2">
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

              <article
                key={`tablet-date-${currentNews.id}`}
                className={`${style.textSlide} ${contentAnimation} font-normal text-xs leading-6 text-right text-brand-text-soft`}
              >
                <p>{currentNews.date}</p>
                <p>{currentNews.dateLabel}</p>
              </article>
            </div>
          </section>

          <section className="flex items-end flex-col text-right">
            {ArrowButtons}

            <article
              key={`tablet-description-${currentNews.id}`}
              className={`${style.textSlide} ${contentAnimation} font-normal text-[14px] w-60 leading-6`}
            >
              <p>{currentNews.description}</p>
            </article>
          </section>
        </section>
      </div>

      {/* XL Layout */}
      <section className="hidden xl:grid w-full max-w-360 mx-auto grid-cols-[1fr_auto_1fr] items-center gap-x-16 px-10 py-10">
        <div className="flex flex-col items-center justify-end gap-6 text-left h-full">
          <article
            key={`xl-date-${currentNews.id}`}
            className={`${style.textSlide} ${contentAnimation} w-full text-right font-normal text-xs leading-6 text-brand-text-soft`}
          >
            <p>{currentNews.date}</p>
            <p>{currentNews.dateLabel}</p>
          </article>

          <div
            key={`xl-title-${currentNews.id}`}
            className={`${style.textSlide} ${contentAnimation} font-medium text-[32px] leading-12 text-center text-brand-text-soft`}
          >
            <h1>{currentNews.title}</h1>
          </div>

          <ul className="flex items-center gap-4 mb-5 w-full justify-center">
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

        <div className="flex flex-col items-center gap-5">
          <Titel
            titel="خبر های تکنولوژی رو دنبال کنید"
            line={true}
            h1Style="text-[42px] font-medium my-0 text-center"
          />

          <section className="relative aspect-video w-130 2xl:w-155 bg-transparent">
            {NewsImageSlider}
          </section>
        </div>

        <div className="flex max-w-85 flex-col items-end text-right">
          {ArrowButtons}

          <article
            key={`xl-description-${currentNews.id}`}
            className={`${style.textSlide} ${contentAnimation} font-normal text-[16px] leading-7 text-brand-text-soft`}
          >
            <p>{currentNews.description}</p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default NewsTablet;
