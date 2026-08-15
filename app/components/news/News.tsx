import Titel from "../titel/titel";
import NewsMobile from "./news-mobile";
import NewsTablet from "./news-tab";

const News = () => {
  return (
    <main>
              <Titel
          titel="خبر های تکنولوژی رو دنبال کنید"
          line={true}
          h1Style="text-[36px] font-medium my-0"
        />

      <NewsMobile />
      <NewsTablet />
    </main>
  );
};

export default News;
