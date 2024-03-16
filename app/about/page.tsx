import Heading from "@/components/ui/heading";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-card";
import TypewriterEffectSmooth from "@/components/ui/typewriter";

import Image from "next/image";
import React from "react";

const About = () => {
  const wordsArray = [
    {
      text: "Tech",
    },
    {
      text: "Enthusiast",
    },
    {
      text: "&",
    },
    {
      text: "Creative",
    },
    {
      text: "Coder.",
      className: "text-emerald-500 dark:text-emerald-500",
    },
  ];

  const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
      icon: "/images/icons/techstack/nextjs.svg",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
      icon: "/images/icons/techstack/vuejs.svg",
    },

    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
      icon: "/images/icons/techstack/reactjs.svg",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
      icon: "/images/icons/techstack/laravel.svg",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
      icon: "/images/icons/techstack/typescript.svg",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
      icon: "/images/icons/techstack/javascript.svg",
    },
  ];

  return (
    <>
      <div>
        <div className="absolute inset-x-0 -bottom-[10rem] sm:-bottom-[20rem]">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
        {/* <Image
          src="/images/about/techstack2.svg"
          alt="about"
          width={900}
          height={900}
          className="mt-10 sm:mt-20 absolute top-[] "
        /> */}

        {/* <TypewriterEffectSmooth className="" words={wordsArray} />
        <div className="flex  justify-between items-center">
          <div className="">
            <Image
              src="/images/about/keyboard2.png"
              className=" "
              width={800}
              height={800}
              alt="about"
            />
          </div>
          <div className="">
            <Image
              className=" z-50 "
              width={100}
              height={100}
              src="/images/about/codeblock_mob.svg"
              alt="about"
            />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default About;
