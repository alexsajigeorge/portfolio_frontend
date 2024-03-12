import HeroSection from "@/components/home/hero-section";
import About from "./about/page";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-5 ">
      <HeroSection />
      <div className="bg-gradient-to-r from-transparent via-neutral-600 to-transparent h-[1px] w-full"></div>
      <About />
    </main>
  );
}
