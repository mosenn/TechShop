import Image from "next/image";
import NavBar from "./components/header/navbar";
import ControlSpacing from "./components/layout/control-spacing";
import Hero from "./components/hero/hero";

export default function Home() {
  return (
    <ControlSpacing>
      <main className="grid border gap-section-mobile tab:gap-section-tablet">
        <NavBar />
        <Hero />
      </main>
    </ControlSpacing>
  );
}
