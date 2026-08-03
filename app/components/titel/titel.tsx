type props = {
  titel?: string;
  underTitle?: string;
  line?: true;
  h1Style?: string;
};
const Titel = ({ titel, underTitle, line, h1Style }: props) => {
  return (
    <section className=" flex gap-2 items-center flex-col justify-center">
      <div className="gap-2  text-center">
        {/*  */}
        <h1 className={h1Style}>
          {/* اصیل ترین ها را از ما بخواهید */}
          {titel}
        </h1>
        <h2 className="text-xl font-normal">
          {/* مقایسه کنید بهترین تجربه خرید با ما همیشه همراه شما هستیم */}
          {underTitle}
        </h2>
      </div>
      {/* line */}
      {line && (
        <div className="bg-brand-accent w-[59px] h-[5px] my-2 border border-brand-accent rounded-sm"></div>
      )}
    </section>
  );
};

export default Titel;
