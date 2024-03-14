import HeroSection from "@/components/home/hero-section";
import About from "./about/page";
import { CustomScroll } from "react-custom-scroll";
import { PulseBeams } from "@/components/ui/pulsebeam";
import Image from "next/image";
import Projects from "./projects/page";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-5 ">
      <HeroSection />
      <div className="bg-gradient-to-r from-transparent via-neutral-600 to-transparent h-[1px] w-full sm:mb-16"></div>
      <About />
      <div className="bg-gradient-to-r from-transparent flex justify-start via-neutral-600 to-transparent h-[1px] w-1/2 sm:mb-16"></div>
      <Projects />
    </main>
  );
}
