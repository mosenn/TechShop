type props = {
  titel?: string;
  underTitle?: string;
  line?: true;
  h1Style?: string;
  underTitleStyle?:string;
};
const Titel = ({ titel, underTitle, underTitleStyle, line, h1Style }: props) => {
  return (
    <section className=" flex  items-center flex-col justify-center">
      <div className=" text-center">
        {/*  */}
        {/* className={h1Style} */}
        <h1 className={`text-2xl ${underTitle ? "my-2" : "my-0"}` }>
          {/* اصیل ترین ها را از ما بخواهید */}
          {titel}
        </h1>
        {/* text-xl font-normal */}
        {/* className={underTitleStyle} */}
        <h2 >
          {/* مقایسه کنید بهترین تجربه خرید با ما همیشه همراه شما هستیم */}
          {underTitle}
        </h2>
      </div>
      {/* line */}
      {line && (
        <div className="bg-brand-accent w-[59px] h-[5px] my-4 border border-brand-accent rounded-sm"></div>
      )}
    </section>
  );
};

export default Titel;
