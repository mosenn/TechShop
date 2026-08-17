import { BoxTime, Headphone, I24Support, Verify } from "iconsax-reactjs";
import React from "react";

const FeatureBox = () => {
  return (
    <main className="grid  sm5:flex sm5:flex-wrap des:grid des:grid-cols-4 justify-center lg:items-center gap-3  grid-cols-2 lg:grid-cols-4 lg:justify-items-center lg:gap-0 ">
      <div className=" sm5:w-[170px] sm6:w-[185px]  sm5:justify-evenly   tab:w-[250px] tab:text-[1rem] des:w-full des:text-sm lg:h-[70%]  lg:w-[75%] lg:p-0 lg:justify-around  flex items-center justify-around rounded-xl  text-[12px]   p-3   bg-linear-to-br from-brand-box-start to-[#19161C] shadow-[inset_0_0_8px_0_rgb(255_255_255/25%)]">
        <BoxTime
          size="32"
          color="currentColor"
          className="  text-brand-primary-soft/70  size-8 tab:size-10.5 des:size-9"
        />
        تحویل سریع کالا
      </div>
      <div className="  sm5:w-[175px] sm6:w-[185px]  sm5:justify-evenly tab:w-[250px] tab:text-[1rem] des:w-full des:text-sm   lg:h-[70%]  lg:w-[75%] lg:p-0 lg:justify-evenly  flex items-center justify-around rounded-xl text-[12px]   p-3    bg-linear-to-br from-brand-box-start to-[#19161C] shadow-[inset_0_0_8px_0_rgb(255_255_255/25%)] ">
        <Verify
          size="32"
          color="currentColor"
          className=" text-brand-primary-soft/70  size-8 tab:size-10.5 des:size-9"
        />
        ضمانت اصالت کالا
      </div>

      <div className=" sm5:w-[175px] sm6:w-[185px]  sm5:justify-evenly tab:w-[250px] tab:text-[1rem] des:w-full  des:text-sm  lg:h-[70%]  lg:w-[80%] lg:p-0 lg:justify-evenly flex items-center justify-around rounded-xl text-[12px]      bg-linear-to-br from-brand-box-start to-[#19161C] shadow-[inset_0_0_8px_0_rgb(255_255_255/25%)] ">
        <Headphone
          size="32"
          color="currentColor"
          className=" text-brand-primary-soft/70 mx-2 size-8 tab:size-10.5 des:size-9"
        />
        پشتیبانیِ کامل کالا
      </div>

      <div className=" sm5:w-[175px] sm6:w-[185px]  sm5:justify-evenly tab:w-[250px] tab:text-[1rem] des:w-full  des:text-sm  lg:h-[70%]  lg:w-[75%] lg:p-6 lg:justify-around  flex items-center justify-around rounded-xl  text-[12px]   p-3   bg-linear-to-br from-brand-box-start to-[#19161C] shadow-[inset_0_0_8px_0_rgb(255_255_255/25%)]">
        <I24Support
          size="32"
          color="currentColor"
          className=" text-brand-primary-soft/70  size-8 tab:size-10.5 tab:-translate-x-1  des:size-9"
        />
        پشتیبانی 24 / 7
      </div>
    </main>
  );
};

export default FeatureBox;
