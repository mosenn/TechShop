import Titel from "../titel/titel";
import CategoryCard from "./category";

const categories = [
  {
    id: 1,
    title: "گوشی هوشمند",
    imageSrc: "/imgs/category/iphone.png",
    videoSrc: "/videos/2-iphone.mp4",
  },
  {
    id: 2,
    title: "ساعت هوشمند",
    imageSrc: "/imgs/category/watch.png",
    videoSrc: "/videos/4-watch.mp4",
  },
  {
    id: 3,
    title: "اسپیکر",
    imageSrc: "/imgs/category/speaker.png",
    videoSrc: "/videos/3-speaker.mp4",
  },
  {
    id: 4,
    title: "هندزفری",
    imageSrc: "/imgs/category/airpod.png",
    videoSrc: "/videos/1-airpod.mp4",
  },
];

export function CategoriesGrid() {
  return (
    // flex flex-col items-center
    <main className=" bg-black text-right flex flex-col items-center gap-12 ">
      <Titel
        line={true}
        titel={" دسته‌بندی محصولات"}
        underTitle={"  محصول مناسب خودت رو سریع پیدا کن"}
      />
      {/* md:grid-cols-4 */}
      {/* max-w-6xl  */}

      {/* 
className="grid grid-cols-2  border border-amber-800   gap-4 " */}
      <section className="w-full flex justify-center md:justify-center ">
        {/* des:max-w-[620px] lg:max-w-[700px] xl:max-w-[730px]  xxl:max-w-[1124px] */}
        <div className="grid  w-full  max-w-[530px]  xl:max-w-[668px]  xxl:max-w-[700px] grid-cols-2 gap-4">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} {...cat} />
          ))}
        </div>
      </section>
    </main>
  );
}
