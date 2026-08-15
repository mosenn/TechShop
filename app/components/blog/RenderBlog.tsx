import React from "react";
import Titel from "../titel/titel";
import BlogGrid from "./grid";

const RenderBlog = () => {
  return (
    <div className=" overflow-hidden">
      <Titel
        titel="قبل از انتخاب نهایی، هوشمندانه بررسی کنید"
        line={true}
        underTitle={`با خواندن تحلیل‌های تخصصی و تجربیات کاربران،
            خریدی آگاهانه و بدون تردید را تجربه کنید`}
        h1Style="text-2xl font-bold text-right  tab:text-center p-1"
        underTitleStyle="text-right font-normal text-sm leading-[25px]"
      />
      <BlogGrid/>
    </div>
  );
};

export default RenderBlog;
