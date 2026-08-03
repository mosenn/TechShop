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

const NewsMobile = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <main className="overflow-hidden border border-amber-600 tab:hidden">
      <div className="border flex p-2 justify-end gap-4 ">
        <ArrowCircleLeft color={"#FF8A65"} size={42} />
        <ArrowCircleRight color={"#FF8A65"} size={42} />
      </div>
      <Titel
        titel="خبر های تکنولوژی رو دنبال کنید "
        h1Style="text-[32px] px-5 font-normal my-2 tab:my-4 "
      />

      <section
        className="relative w-full max-w-[500px] h-[250px] overflow-hidden" // ابعاد والد مهم است
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
        onTouchStart={() => setIsActive(true)}
        onTouchEnd={() => setIsActive(false)}
      >
        {/* پنل سمت چپ */}
        <figure
          className={`absolute inset-0 transition-transform duration-700 ease-in-out
    [clip-path:polygon(0_0,55%_0,45%_100%,0_100%)]
    ${isActive ? "translate-x-0" : "-translate-x-5"}`}
        >
          <Image
            src="/imgs/news/main.png"
            alt="left-side"
            fill
            className="object-cover"
          />
        </figure>

        {/* پنل سمت راست */}
        <figure
          className={`absolute inset-0 transition-transform duration-700 ease-in-out
    [clip-path:polygon(55%_0,100%_0,100%_100%,45%_100%)]
    ${isActive ? "translate-x-0" : "translate-x-5"}`}
        >
          <Image
            src="/imgs/news/main.png"
            alt="right-side"
            fill
            className="object-cover"
          />
        </figure>
      </section>

      <article className="border font-normal text-[1rem] text-right p-2 mx-2 leading-7">
        <p>
          در بازار امروز سامسونگ حرفای رو برای گفتن داره خبر های که در بازار
          امروز هست به این موضوع اشاره داره
        </p>
      </article>
      <Titel line={true} />
      <div className="social border borde-green-500 py-6 ">
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
