import HeroSection from "@/components/home/hero-section";
import KeyboardIllustration from "@/components/ui/keyboard-illustration";
import About from "./about/page";

export default function Home() {
  return (
    <main className="sm:min-h-screen flex flex-col items-center justify-center gap-5  px-4 lg:px-40">
      <HeroSection />
      <About />
      {/* <KeyboardIllustration /> */}
    </main>
  );
}
