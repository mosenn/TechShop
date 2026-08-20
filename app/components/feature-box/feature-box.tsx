import { BoxTime, Headphone, I24Support, Verify } from "iconsax-reactjs";
import React from "react";

const FeatureBox = () => {
  return (
    <main className="grid  sm5:flex sm5:flex-wrap des:grid des:grid-cols-4 justify-center lg:items-center gap-3  grid-cols-2 lg:grid-cols-4 lg:justify-items-center lg:gap-0 ">
      <div
        className=" sm5:w-[170px] sm6:w-[185px]  sm5:justify-evenly   tab:w-[250px] tab:text-[1rem] des:w-full des:text-sm lg:h-[70%]  lg:w-[75%] lg:p-0 lg:justify-around  flex items-center justify-around rounded-xl  text-[12px]   p-3   bg-linear-to-br from-brand-box-start to-[#19161C] shadow-[inset_0_0_8px_0_rgb(255_255_255/25%)]"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        {/* <BoxTime
          size="32"
          color="currentColor"
          className="  text-brand-primary-soft/70  size-8 tab:size-10.5 des:size-9"
        /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          className="draw-icon text-brand-primary-soft/70"
        >
          <path
            d="M3.17 7.44 12 12.55l8.77-5.08M12 21.61v-9.07"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M21.61 9.17v5.66c0 .05 0 .09-.01.14-.7-.61-1.6-.97-2.6-.97-.94 0-1.81.33-2.5.88A3.97 3.97 0 0 0 15 18c0 .75.21 1.46.58 2.06.09.16.2.31.32.45l-1.83 1.01c-1.14.64-3 .64-4.14 0l-5.34-2.96c-1.21-.67-2.2-2.35-2.2-3.73V9.17c0-1.38.99-3.06 2.2-3.73l5.34-2.96c1.14-.64 3-.64 4.14 0l5.34 2.96c1.21.67 2.2 2.35 2.2 3.73Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M23 18c0 1.2-.53 2.27-1.36 3A4 4 0 0 1 19 22c-2.21 0-4-1.79-4-4 0-1.26.58-2.39 1.5-3.12A3.999 3.999 0 0 1 23 18Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M19.25 16.75v1.5L18 19"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
        تحویل سریع کالا
      </div>
      <div
        className="  sm5:w-[175px] sm6:w-[185px]  sm5:justify-evenly tab:w-[250px] tab:text-[1rem] des:w-full des:text-sm   lg:h-[70%]  lg:w-[75%] lg:p-0 lg:justify-evenly  flex items-center justify-around rounded-xl text-[12px]   p-3    bg-linear-to-br from-brand-box-start to-[#19161C] shadow-[inset_0_0_8px_0_rgb(255_255_255/25%)] "
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        {/* <Verify
          size="32"
          color="currentColor"
          className=" text-brand-primary-soft/70  size-8 tab:size-10.5 des:size-9"
        /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={32}
          height={32}
          viewBox="0 0 24 24"
          fill="none"
          className="text-brand-primary-soft/70 animate-draw-infinite"
        >
          {/* تیک تایید داخل آیکون */}
          <path
            d="m8.38 12 2.41 2.42 4.83-4.84"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* کادر بیرونی گل/مدال */}
          <path
            d="M10.75 2.45c.69-.59 1.82-.59 2.52 0l1.58 1.36c.3.26.86.47 1.26.47h1.7c1.06 0 1.93.87 1.93 1.93v1.7c0 .39.21.96.47 1.26l1.36 1.58c.59.69.59 1.82 0 2.52l-1.36 1.58c-.26.3-.47.86-.47 1.26v1.7c0 1.06-.87 1.93-1.93 1.93h-1.7c-.39 0-.96.21-1.26.47l-1.58 1.36c-.69.59-1.82.59-2.52 0l-1.58-1.36c-.3-.26-.86-.47-1.26-.47H6.18c-1.06 0-1.93-.87-1.93-1.93V16.1c0-.39-.21-.95-.46-1.25l-1.35-1.59c-.58-.69-.58-1.81 0-2.5l1.35-1.59c.25-.3.46-.86.46-1.25V6.2c0-1.06.87-1.93 1.93-1.93h1.73c.39 0 .96-.21 1.26-.47l1.58-1.35Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        ضمانت اصالت کالا
      </div>

      <div
        className=" sm5:w-[175px] sm6:w-[185px]  sm5:justify-evenly tab:w-[250px] tab:text-[1rem] des:w-full  des:text-sm  lg:h-[70%]  lg:w-[80%] lg:p-0 lg:justify-evenly flex items-center justify-around rounded-xl text-[12px]      bg-linear-to-br from-brand-box-start to-[#19161C] shadow-[inset_0_0_8px_0_rgb(255_255_255/25%)] "
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        {/* <Headphone
          size="32"
          color="currentColor"
          className=" text-brand-primary-soft/70 mx-2 size-8 tab:size-10.5 des:size-9 translate-x-1"
        /> */}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          className="animate-draw-headphone text-brand-primary-soft/70"
        >
          <path
            d="M5.46 18.49v-2.92c0-.97.76-1.84 1.84-1.84.97 0 1.84.76 1.84 1.84v2.81c0 1.95-1.62 3.57-3.57 3.57-1.95 0-3.57-1.63-3.57-3.57v-6.16C1.89 6.6 6.33 2.05 11.95 2.05 17.57 2.05 22 6.6 22 12.11v6.16c0 1.95-1.62 3.57-3.57 3.57-1.95 0-3.57-1.62-3.57-3.57v-2.81c0-.97.76-1.84 1.84-1.84.97 0 1.84.76 1.84 1.84v3.03"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <p className="-translate-x-2">پشتیبانیِ کامل کالا</p>
      </div>

      <div
        className=" sm5:w-[175px] sm6:w-[185px]  sm5:justify-evenly tab:w-[250px] tab:text-[1rem] des:w-full  des:text-sm  lg:h-[70%]  lg:w-[75%] lg:p-6 lg:justify-around  flex items-center justify-around rounded-xl  text-[12px]   p-3   bg-linear-to-br from-brand-box-start to-[#19161C] shadow-[inset_0_0_8px_0_rgb(255_255_255/25%)]"
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        {/* <I24Support
          size="32"
          color="currentColor"
          className=" text-brand-primary-soft/70  size-8 tab:size-10.5   tab:-translate-x-1  des:size-9"
        /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          className="animate-draw-support text-brand-primary-soft/70"
        >
          {/* کادر بیرونی پیام */}
          <path
            d="M18 18.86h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69c-.56-.56-1.33-.87-2.12-.87H6c-1.66 0-3-1.33-3-2.97V4.98c0-1.64 1.34-2.97 3-2.97h12c1.66 0 3 1.33 3 2.97v10.91c0 1.63-1.34 2.97-3 2.97Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* عدد ۲۴ داخل باکس */}
          <path
            d="M7 9.16c0-.93.76-1.69 1.69-1.69.93 0 1.69.76 1.69 1.69 0 1.88-2.67 2.08-3.26 3.87-.12.37.19.74.58.74h2.68M16.04 13.76V8.05a.58.58 0 0 0-.42-.56.593.593 0 0 0-.66.25c-.72 1.16-1.5 2.48-2.18 3.64-.11.19-.11.44 0 .63s.32.31.55.31H17"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        پشتیبانی 24 / 7
      </div>
    </main>
  );
};

export default FeatureBox;
