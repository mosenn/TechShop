import NavBar from "./components/header/navbar";
import ControlSpacing from "./components/layout/control-spacing";
import Hero from "./components/hero/hero";
import FeatureBox from "./components/feature-box/feature-box";
import Titel from "./components/titel/titel";
import WatchSlider from "./components/watch-slider/slider";
import { CategoriesGrid } from "./components/product-category/grid";
import ProductGrid from "./components/product-slider/grid";
import TestimonialsSlider from "./components/testimonials-slider/testimonials";
import TechnologyNewsSlider from "./components/news/News";
import BlogGrid from "./components/blog/grid";

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
          h1Style="text-2xl font-bold my-2 tab:my-4"
        />
        <WatchSlider />
        {/*  */}
        <CategoriesGrid />
        {/*  */}

        <ProductGrid />

        {/*  */}

        <TestimonialsSlider />
{/*  */}

        <TechnologyNewsSlider />

        {/*  */}
        <BlogGrid/>
      </main>
    </ControlSpacing>
  );
}
