"use client";
import {
  FollowPointer,
  FollowerPointerCard,
} from "@/components/ui/following-pointer";
import Heading from "@/components/ui/heading";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-card";
import TypewriterEffectSmooth, {
  TypewriterEffect,
} from "@/components/ui/typewriter";
import { motion, useInView } from "framer-motion";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex space-x-2 items-center">
    <Image
      src={avatar}
      height="20"
      width="20"
      alt="thumbnail"
      className="rounded-full border-2 border-white"
    />
    <p>{title}</p>
  </div>
);
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

  const blogContent = {
    slug: "amazing-tailwindcss-grid-layouts",
    author: "Manu Arora",
    date: "28th March, 2023",
    title: "Amazing Tailwindcss Grid Layout Examples",
    description:
      "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
    image: "/demo/thumbnail.png",
    authorAvatar: "/manu.png",
  };
  const [isVisible, setIsVisible] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);
  return (
    <>
      <div className="">
        <div className="absolute inset-x-0 top-[42rem] sm:top-[50rem]">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        {/* <TypewriterEffectSmooth className="" words={wordsArray} /> */}
      </div>

      <div ref={ref} className="relative sm:mt-[28rem] mt-40">
        <div className="relative max-h-[320px] flex items-center justify-center mr-auto ">
          <div className="w-full h-full ">
            <img
              src="/images/about/keyboard2.png"
              className="w-full h-full"
              alt=""
            />
          </div>
          <div className="absolute z-10 sm:right-0 ">
            {isVisible && (
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
                exit={{ opacity: 0, x: 100 }}
              >
                <img
                  src="/images/about/codeblock.svg"
                  className="w-full h-full "
                  alt=""
                />
              </motion.div>
            )}
          </div>
        </div>
      </div>
      <Heading title={"rdtfghuji"} subtitle={"tgyhjkl"} />
    </>
  );
};

export default About;
