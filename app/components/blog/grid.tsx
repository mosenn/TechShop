"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowCircleLeft, ArrowCircleRight } from "iconsax-reactjs";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import Titel from "../titel/titel";

import "swiper/css";
import "swiper/css/navigation";
import BlogCard from "./blog";

const blogs = [
  {
    id: 1,
    title: "بررسی تخصصی دوربین آیا این گوشی بهترین انتخاب سال است ؟",
    description:
      "در این مقاله، عملکرد باتری و کیفیت لنزهای جدید را زیر ذره‌بین بردیم تا ببینیم ارزش خرید دارد یا خیر.",
    imageSrc: "/imgs/blog/pic.png",
    author: "تچ شاپ",
    read: " 5 دقیقه خواندن",
    date: "۲۵  اردیبهشت ۱۴۰۳",
  },
  {
    id: 2,
    title: "بررسی تخصصی دوربین آیا این گوشی بهترین انتخاب سال است ؟",
    description:
      "در این مقاله، عملکرد باتری و کیفیت لنزهای جدید را زیر ذره‌بین بردیم تا ببینیم ارزش خرید دارد یا خیر.",
    imageSrc: "/imgs/blog/pic.png",
    author: "تچ شاپ",
    read: " 5 دقیقه خواندن",
    date: "۲۵  اردیبهشت ۱۴۰۳",
  },
  {
    id: 3,
    title: "بررسی تخصصی دوربین آیا این گوشی بهترین انتخاب سال است ؟",
    description:
      "در این مقاله، عملکرد باتری و کیفیت لنزهای جدید را زیر ذره‌بین بردیم تا ببینیم ارزش خرید دارد یا خیر.",
    imageSrc: "/imgs/blog/pic.png",
    author: "تچ شاپ",
    read: " 5 دقیقه خواندن",
    date: "۲۵  اردیبهشت ۱۴۰۳",
  },
  {
    id: 4,
    title: "بررسی تخصصی دوربین آیا این گوشی بهترین انتخاب سال است ؟",
    description:
      "در این مقاله، عملکرد باتری و کیفیت لنزهای جدید را زیر ذره‌بین بردیم تا ببینیم ارزش خرید دارد یا خیر.",
    imageSrc: "/imgs/blog/pic.png",
    author: "تچ شاپ",
    read: " 5 دقیقه خواندن",
    date: "۲۵  اردیبهشت ۱۴۰۳",
  },
];

const BlogGrid = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const updateNavState = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const nextDisabled = isEnd;
  const prevDisabled = isBeginning;

  const nextPulse = isBeginning && !isEnd;
  const prevPulse = isEnd && !isBeginning;

  return (
    <main className="w-full flex flex-col gap-4 p-4 bg-linear-to-b from-brand-bg via-brand-bg-section/60 to-brand-bg-section/60 rounded-xl border border-[#565656] overflow-hidden">
      <Titel
        titel="قبل از انتخاب نهایی، هوشمندانه بررسی کنید"
        underTitle={`با خواندن تحلیل‌های تخصصی و تجربیات کاربران،
            خریدی آگاهانه و بدون تردید را تجربه کنید`}
        h1Style="text-2xl font-bold text-right  tab:text-center p-1"
        underTitleStyle="text-right font-normal text-sm leading-[25px]"
      />

      <section className="flex w-full justify-end gap-4 ">
        <motion.button
          type="button"
          className={`product-next ${nextDisabled ? "cursor-default" : "cursor-pointer"}`}
          aria-label="next"
          animate={{
            scale: nextDisabled ? 0.86 : nextPulse ? [1, 1.06, 1.1, 1] : 1,
            opacity: nextDisabled ? 0.35 : 1,
          }}
          transition={{
            scale: nextPulse
              ? {
                  duration: 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
              : {
                  duration: 0.25,
                  ease: "easeOut",
                },
            opacity: {
              duration: 0.25,
              ease: "easeOut",
            },
          }}
        >
          <ArrowCircleLeft
            color={nextDisabled ? "#9CA3AF" : "#FF8A65"}
            size={42}
          />
        </motion.button>

        <motion.button
          type="button"
          className={`product-prev ${prevDisabled ? "cursor-default" : "cursor-pointer"}`}
          aria-label="previous"
          animate={{
            scale: prevDisabled ? 0.86 : prevPulse ? [1, 1.06, 1.1, 1] : 1,
            opacity: prevDisabled ? 0.35 : 1,
          }}
          transition={{
            scale: prevPulse
              ? {
                  duration: 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
              : {
                  duration: 0.25,
                  ease: "easeOut",
                },
            opacity: {
              duration: 0.25,
              ease: "easeOut",
            },
          }}
        >
          <ArrowCircleRight
            color={prevDisabled ? "#9CA3AF" : "#FF8A65"}
            size={42}
          />
        </motion.button>
      </section>

      <section className="w-full">
        <div className="w-full">
          <div className="w-full">
            <div className="overflow-hidden">
              <Swiper
                modules={[Navigation]}
                navigation={{
                  nextEl: ".product-next",
                  prevEl: ".product-prev",
                }}
                onSwiper={updateNavState}
                onSlideChange={updateNavState}
                onReachBeginning={updateNavState}
                onReachEnd={updateNavState}
                // fromEdge={updateNavState}
                spaceBetween={25}
                slidesPerView={1}
                breakpoints={{
                  480: { slidesPerView: 1 },
                  600: { slidesPerView: 1.2 },
                  700: { slidesPerView: 1.5 },
                  768: { slidesPerView: 2.1 },
                  900: { slidesPerView: 3 },
                  1024: { slidesPerView: 3 },
                  1280: { slidesPerView: 3 },
                  1440: { slidesPerView: 3 },
                }}
                className="product-swiper"
              >
                {blogs.map((b) => (
                  <SwiperSlide key={b.id} className="box-border">
                    <div className="flex justify-center">
                      <BlogCard {...b} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogGrid;
