import NavBar from "./components/header/navbar";
import ControlSpacing from "./components/layout/control-spacing";
import Hero from "./components/hero/hero";
import FeatureBox from "./components/feature-box/feature-box";
import Titel from "./components/titel/titel";
import WatchSlider from "./components/watch-slider/slider";

export default function Home() {
  return (
    <ControlSpacing>
      <main className="grid  gap-section-mobile tab:gap-section-tablet xl:gap-section-xl">
        <NavBar />
        <Hero />
        <FeatureBox />
        <Titel />
        <WatchSlider />
      </main>
    </ControlSpacing>
  );
}
