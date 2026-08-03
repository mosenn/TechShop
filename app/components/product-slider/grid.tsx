"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowCircleLeft, ArrowCircleRight } from "iconsax-reactjs";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import Titel from "../titel/titel";
import ProductCard from "./product";

import "swiper/css";
import "swiper/css/navigation";

const products = [
  {
    id: 1,
    title: "گوشی هوشمند",
    imageSrc: "/imgs/products/pro17.png",
    price: "۳۵۴,۹۹۹,۰۰۰",
  },
  {
    id: 2,
    title: "گوشی هوشمند",
    imageSrc: "/imgs/products/pro17.png",
    price: "۵۴,۹۹۹,۰۰۰",
  },
  {
    id: 3,
    title: "گوشی هوشمند",
    imageSrc: "/imgs/products/pro17.png",
    price: "۳۴,۹۹۹,۰۰۰",
  },
  {
    id: 4,
    title: "گوشی هوشمند",
    imageSrc: "/imgs/products/pro17.png",
    price: "۳۵۴,۹۹۹,۰۰۰",
  },
];

const ProductGrid = () => {
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
    <main className="w-full overflow-hidden">
      <Titel
        line={true}
        titel="محصولات پر طرفدار"
        h1Style="text-2xl font-bold my-2 tab:my-4"
      />

      <section className="my-4 flex w-full justify-end gap-4 p-2">
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
        <div className="w-full rounded-2xl ring-2 ring-inset ring-brand-border-soft shadow-[-4px_-4px_4px_0_rgba(164,46,46,0.3),4px_4px_4px_0_rgba(139,25,25,0.3)]">
          <div className="w-full rounded-2xl px-3 py-4 sm:px-4 md:px-5">
            <div className="overflow-hidden rounded-[calc(1rem-2px)]">
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
                spaceBetween={0}
                slidesPerView={1}
                breakpoints={{
                  480: { slidesPerView: 1 },
                  600: { slidesPerView: 2 },
                  768: { slidesPerView: 2.1 },
                  900: { slidesPerView: 3 },
                  1024: { slidesPerView: 3 },
                  1280: { slidesPerView: 3 },
                  1440: { slidesPerView: 4 },
                }}
                className="product-swiper"
              >
                {products.map((product) => (
                  <SwiperSlide
                    key={product.id}
                    className="box-border px-2 py-2"
                  >
                    <div className="flex justify-center">
                      <ProductCard {...product} />
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

export default ProductGrid;
