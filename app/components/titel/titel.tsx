import React from "react";

const Titel = () => {
  return (
    <section className="border flex gap-2 items-center flex-col justify-center">
      <div className="gap-2 border w-[90%] text-center">
        <h1 className="text-2xl font-bold my-2 tab:my-4">اصیل ترین ها را از ما بخواهید</h1>
        <h2 className="text-xl font-normal">
          مقایسه کنید بهترین تجربه خرید با ما همیشه همراه شما هستیم
        </h2>
      </div>
      {/* line */}
      <div className="bg-brand-accent w-[59px] h-[5px] my-7 border border-brand-accent rounded-sm"></div>
    </section>
  );
};

export default Titel;
