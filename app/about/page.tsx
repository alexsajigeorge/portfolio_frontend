"use client";
import {
  FollowPointer,
  FollowerPointerCard,
} from "@/components/ui/following-pointer";
import Heading from "@/components/ui/heading";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-card";
import { LampContainer, LampDemo } from "@/components/ui/lamp";
import TypewriterEffectSmooth, {
  TypewriterEffect,
} from "@/components/ui/typewriter";
import { motion, useInView } from "framer-motion";

import Image from "next/image";
import React, { useRef, useState } from "react";

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
      text: "Creative",
    },
    {
      text: "Coder.",
      className: "text-emerald-500 dark:text-emerald-500 ",
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
      <div className="h-full w-full  overflow-hidden">
        <div className="">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
        <div className="">
          <div className="flex flex-col justify-center w-full items-center py-[2rem] md:py-[7rem]">
            <TypewriterEffectSmooth words={wordsArray} />
            <motion.p
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="text-center leading-[1.6] font-normal pointer-events-none max-w-[20rem] sm:max-w-[38rem] pt-2 text-neutral-400 text-sm sm:text-sm"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              animi aut eveniet quia voluptates placeat adipisci repudiandae
              velit unde laboriosam!
            </motion.p>
          </div>

          <div className=" ">
            <div className="hidden sm:block ">
              <motion.div
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.7,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="w-full h-full "
              >
                <img
                  src="/images/about/keyboardblock.png"
                  className="w-full h-full"
                  alt=""
                />
              </motion.div>
            </div>
            <div className="flex-col justify-center items-center flex gap-2 sm:hidden">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                  delay: 0.8,
                }}
                className="w-full h-full "
              >
                <img
                  src="/images/about/keyboard2.png"
                  className="w-full h-full"
                  alt="keyboard"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  ease: "easeInOut",
                  delay: 0.8,
                }}
                className="w-full h-full px-2 sm:px-5"
              >
                <img
                  src="/images/about/codeblock.svg"
                  className="w-full h-full"
                  alt="codeblock"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
