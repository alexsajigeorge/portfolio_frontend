"use client";

import { SparklesCore } from "@/components/ui/sparkles";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const handleKeyPress = (event) => {
      // Check if the pressed key is 'N' or 'n'
      if (event.key === "P" || event.key === "p") {
        // Redirect to the specific page (replace '/desired-page' with your page path)
        router.push("/contact");
      }
    };

    // Add event listener when component mounts
    document.addEventListener("keydown", handleKeyPress);

    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [router]);
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <div className="absolute top-10">
        <button className="bg-slate-800 no-underline  group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative flex space-x-2 items-center z-10 font-medium rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
            <span>Press M to toggle theme</span>
            <img src="/images/icons/right-arrow.svg" alt="" />
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </button>
      </div>
      <div className="h-screen w-full  flex flex-col items-center justify-center overflow-hidden">
        <h1 className="md:text-7xl text-5xl lg:text-9xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 relative z-20">
          fusionfolio
        </h1>
        <div className="w-[20rem] sm:w-[40rem] relative animate-fade-in">
          {/* Gradients */}
          <div className="absolute sm:inset-x-20 inset-x-10 top-0 bg-gradient-to-r from-emerald-400/0 via-emerald-400/90  to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute sm:inset-x-20 inset-x-10 top-0 bg-gradient-to-r from-emerald-400/0 via-emerald-400/90  to-transparent h-px w-3/4" />
          <div className="absolute sm:inset-x-60  inset-x-28 top-0 bg-gradient-to-r from-transparent via-emerald-600/90 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute sm:inset-x-60 inset-x-28 top-0 bg-gradient-to-r from-transparent via-emerald-600/90 to-transparent h-px w-1/4" />

          {/* Core component */}
          {/* <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          /> */}

          {/* Radial Gradient to prevent sharp edges */}
          {/* <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div> */}
        </div>
        <div className="mt-5">
          <p className="text-[13px] max-w-[40rem] text-center font-normal text-neutral-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            nostrum fugit quaerat veniam animi rem culpa sapiente et? Cum,
            consequatur.
          </p>
        </div>
      </div>

      <div className="h-40">d</div>
    </main>
  );
}
