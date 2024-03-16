import HeroSection from "@/components/home/hero-section";
import About from "./about/page";
import { CustomScroll } from "react-custom-scroll";
import { PulseBeams } from "@/components/ui/pulsebeam";
import Image from "next/image";
import Projects from "./projects/page";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {
  return (
    <main className="sm:min-h-screen flex flex-col items-center justify-center gap-5  px-4 lg:px-40">
      <HeroSection />
      <About />
    </main>
  );
}
