"use client";

import { ArrowLeft, BatteryFull, Drop, HeartAdd } from "iconsax-reactjs";
import Image from "next/image";
import React from "react";
import styles from "./GlassCircle.module.css";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y } from "swiper/modules";

const watchSlides = [
  {
    id: 1,
    image: "/imgs/watchs/1.png",
    imageAlt: "watch",
    title: "ساعت هوشمند",
    name: "Galexy Watch8",
    size: "48mm",
    description:
      "ترکیبی بی نظیر از طراحی کلاسیک و تکنولوژی هوشمند . مناسب برای ورزش و کار و زندگی روزمره با امکانات پیشرفته سلامت و اتصال هوشمند",
    battery: "3 روز",
  },
  {
    id: 2,
    image: "/imgs/watchs/tactix_8_51mm_Solar.png",
    imageAlt: "tactix_8_51mm_Solar",
    title: "ساعت هوشمند",
    name: "Garmin - Tactix SOLAR",
    size: "51mm",
    description:
      "گارمین دستیار نظامی قدرتمند، فوق‌سخت و تاکتیکال. ایده‌آل برای تمرینات سنگین و با دوام بی‌نظیر و تکنولوژی پیشرفته.",
    battery: "30 روز",
  },
  {
    id: 3,
    image: "/imgs/watchs/61MHW8rFw6L.png",
    imageAlt: "Amazfit Active 3",
    title: "ساعت هوشمند",
    name: "Amazfit Active 3",
    size: "45mm",
    description:
      "همراه حرفه‌ای ورزشکاران؛ با نمایشگر کریستال یاقوت (Sapphire) و GPS دقیق. این ساعت با پشتیبانی از نقشه‌های آفلاین، ۱۷۰+ مود ورزشی",
    battery: "12 روز",
  },
];

const featureItems = [
  {
    id: 1,
    icon: HeartAdd,
    text: "پایش هوشمند سلامت",
  },
  {
    id: 2,
    icon: Drop,
    text: "مقاوم در برابر اب   5 ATM",
  },
  {
    id: 3,
    icon: BatteryFull,
    text: "شارژ باتری",
    rotate: true,
  },
];

const WatchSlider = () => {
  return (
    <main className="relative    grid gap-5">
      <div className="relative    overflow-hidden">
        <Swiper
          className="  "
          modules={[Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{
            clickable: true,
            el: `.${styles.heroPagination}`,
            bulletClass: styles.paginationBullet,
            bulletActiveClass: styles.paginationBulletActive,
          }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {watchSlides.map((item) => (
            <SwiperSlide key={item.id} className=" w-fit  ">
              <main className="grid  gap-5 tab:grid-cols-2 lg:p-4 xl:p-8">
                <section className="relative isolate overflow-hidden">
                  {/* Glow */}
                  <div
                    className="pointer-events-none absolute left-1/2 top-1/2 z-0
                 h-102 w-96 -translate-x-1/2 -translate-y-1/2
                 rounded-full opacity-50 blur-[140px]
                 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.4)_0%,rgba(14,165,233,0)_100%)]"
                  />

                  {/* دایره و ساعت */}
                  <figure className="relative z-20 flex items-center justify-center ">
                    <div className={`${styles.glassCircle}`}>
                      <Image
                        src={item.image}
                        className="mt-12 w-[80%] h-auto xl:w-[90%]"
                        alt={item.imageAlt}
                        width={300}
                        height={300}
                      />
                    </div>
                  </figure>
                </section>

                {/* texts & buttons (info) */}
                <section className=" gap-2 flex flex-col xl:items-center">
                  {/* texts */}
                  <div className="   text-right  xl:text-center *:my-2">
                    <h1 className="font-normal text-xl xl:text-[40px]">
                      {item.title}
                    </h1>
                    <h2 className="font-medium text-[1rem] mx-6 xl:text-[36px]">
                      {item.name}
                    </h2>
                    <p className="font-bold text-[1rem] gap-2 flex w-[96%] justify-end xl:justify-center">
                      Classsic
                      <span className="border border-[#16A2AB]   p-2 flex items-center justify-center text-center w-[54px] h-[22px] mx-2  text-[#16A2AB] rounded-[32px] font-medium text-[12px]">
                        {item.size}
                      </span>
                    </p>
                    <article className="flex justify-end">
                      <p className="font-normal text-[1rem] text-brand-text-secondary w-[327px]    ">
                        {item.description}
                      </p>
                    </article>
                  </div>

                  {/* icons-texts */}
                  <ul className="   flex justify-end *:[li]:w-[75px] ">
                    {featureItems.map((feature) => {
                      const Icon = feature.icon;

                      return (
                        <li
                          key={feature.id}
                          style={{
                            direction: "rtl",
                          }}
                          className=" flex flex-col mx-4 items-center text-center text-[12px] font-light text-[#F3F3F3]"
                        >
                          <Icon
                            size="32"
                            color="#FF8A65"
                            className={`my-2 ${feature.rotate ? "rotate-270" : ""}`}
                          />

                          {feature.text}

                          {/* <span>{item.ATM}</span> */}

                          {feature.id === 3 && <span>{item.battery}</span>}
                        </li>
                      );
                    })}
                  </ul>

                  {/* buttons */}
                  <div className="flex py-4 justify-end">
                    <button className="bg-brand-primary w-36.5 h-11.5 rounded-lg px-2 mx-3 flex justify-center items-center font-normal text-[14px]">
                      <span className="mx-2">
                        <ArrowLeft size="20" color="#FFFFFF" />
                      </span>
                      مشاهده و خرید
                    </button>
                    <button className="     -brand-   w-36.5 h-11.5 rounded-lg px-2 flex justify-center items-center font-normal text-[14px]">
                      جزئیات بیشتر
                    </button>
                  </div>
                </section>
              </main>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={styles.heroPagination} />
    </main>
  );
};

export default WatchSlider;
