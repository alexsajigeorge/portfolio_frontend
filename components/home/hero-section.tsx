import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-card";
import { BackgroundCellAnimation } from "../ui/background-ripple";
import { Meteors } from "../ui/meteors";

const HeroSection = () => {
  return (
    <>
      <div className="absolute inset-0 z-10">
        <BackgroundCellAnimation />
      </div>
      <div className="flex flex-col z-50 items-center justify-center">
        <div className="absolute top-10">
          <button className="bg-neutral-700 no-underline  group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex space-x-2 items-center z-10 font-medium rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
              <span>Coming Soon v0.1</span>
              <img src="/images/icons/right-arrow.svg" alt="" />
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </button>
        </div>
        <div className="h-screen w-full relative flex flex-col items-center justify-center overflow-hidden gap-2">
          <h1 className="md:text-7xl text-5xl lg:text-9xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 relative z-20">
            fusionfolio
          </h1>

          <div className="w-[20rem] sm:w-[40rem] relative animate-fade-in">
            {/* Gradients */}
            <div className="absolute sm:inset-x-20 inset-x-10 top-0 bg-gradient-to-r from-emerald-400/0 via-emerald-400/90  to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute sm:inset-x-20 inset-x-10 top-0 bg-gradient-to-r from-emerald-400/0 via-emerald-400/90  to-transparent h-px w-3/4" />
            <div className="absolute sm:inset-x-60  inset-x-28 top-0 bg-gradient-to-r from-transparent via-emerald-600/90 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute sm:inset-x-60 inset-x-28 top-0 bg-gradient-to-r from-transparent via-emerald-600/90 to-transparent h-px w-1/4" />
          </div>
          <div className="mt-5">
            <p className="text-center  leading-[1.6] text-neutral-400 text-sm sm:text-sm max-w-[20rem] sm:max-w-[38rem] font-normal ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              nostrum fugit quaerat veniam animi rem culpa sapiente et? Cum,
              consequatur.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
