import { BoxTime, Headphone, I24Support, Verify } from "iconsax-reactjs";
import React from "react";

const FeatureBox = () => {
  return (
    <main className="grid justify-center lg:items-center gap-3  grid-cols-2 lg:grid-cols-4">
      <div className="tab:text-[1rem] lg:h-[70%]  lg:w-full  flex items-center justify-center rounded-xl  text-[12px]   p-3 lg:p-6  des:px-[65px]   bg-linear-to-br from-brand-box-start to-[#19161C] shadow-[inset_0_0_8px_0_rgb(255_255_255/25%)]">
        <BoxTime
          size="32"
          color="currentColor"
          className="mx-3  text-brand-primary-soft/70  size-8 tab:size-10.5"
        />
        تحویل سریع کالا
      </div>
      <div className="tab:text-[1rem] lg:h-[70%] lg:w-full lg:p-0 flex items-center justify-center rounded-xl text-[12px]   p-3  des:px-[65px]   bg-linear-to-br from-brand-box-start to-[#19161C] shadow-[inset_0_0_8px_0_rgb(255_255_255/25%)] ">
        <Verify
          size="32"
          color="currentColor"
          className="mx-3 text-brand-primary-soft/70  size-8 tab:size-10.5"
        />
        ضمانت اصالت کالا
      </div>
      <div className=" tab:text-[1rem] lg:h-[70%]  lg:w-full  flex items-center justify-center rounded-xl  text-[12px]   bg-linear-to-br from-brand-box-start to-[#19161C] shadow-[inset_0_0_8px_0_rgb(255_255_255/25%)]">
        <Headphone
          size="32"
          color="currentColor"
          className="mx-3 text-brand-primary-soft/70  size-8 tab:size-10.5"
        />
        خدمات پس از فروش
      </div>
      <div className="tab:text-[1rem] lg:h-[70%]  lg:w-full  flex items-center justify-center rounded-xl  text-[12px]   p-3 lg:p-6  des:px-[65px]   bg-linear-to-br from-brand-box-start to-[#19161C] shadow-[inset_0_0_8px_0_rgb(255_255_255/25%)]">
        <I24Support
          size="32"
          color="currentColor"
          className="mx-3 text-brand-primary-soft/70  size-8 tab:size-10.5"
        />
        پشتیبانی 24 / 7
      </div>
    </main>
  );
};

export default FeatureBox;
