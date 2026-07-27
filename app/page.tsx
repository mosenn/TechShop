import NavBar from "./components/header/navbar";
import ControlSpacing from "./components/layout/control-spacing";
import Hero from "./components/hero/hero";
import FeatureBox from "./components/feature-box/feature-box";
import Titel from "./components/titel/titel";
import WatchSlider from "./components/watch-slider/slider";
import Category from "./components/product-category/category";
import { CategoriesGrid } from "./components/product-category/grid";

export default function Home() {
  return (
    <ControlSpacing>
      <main className="grid  gap-section-mobile tab:gap-section-tablet xl:gap-section-xl">
        <NavBar />
        <Hero />
        <FeatureBox />
        <Titel
          line={true}
          titel="اصیل ترین ها را از ما بخواهید "
          underTitle="مقایسه کنید بهترین تجربه خرید با ما همیشه همراه شما هستیم "
        />
        <WatchSlider />
        {/*  */}
        <CategoriesGrid />
      </main>
    </ControlSpacing>
  );
}
