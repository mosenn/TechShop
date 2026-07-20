import Image from "next/image";
import NavBar from "./components/header/navbar";
import ControlSpacing from "./components/layout/control-spacing";
import Hero from "./components/hero/hero";
import FeatureBox from "./components/feature-box/feature-box";

export default function Home() {
  return (
    <ControlSpacing>
      <main className="grid  gap-section-mobile tab:gap-section-tablet">
        <NavBar />
        <Hero />
        <FeatureBox/>
      </main>
    </ControlSpacing>
  );
}
