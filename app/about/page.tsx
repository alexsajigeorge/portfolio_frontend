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
        "Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.",
      name: "Next.js",
      title: "",
      icon: "/images/icons/techstack/nextjs.svg",
    },
    {
      quote:
        "Vue.js is an open-source model–view–viewmodel front end JavaScript library for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members.",
      name: "Vue.js",
      title: "",
      icon: "/images/icons/techstack/vuejs.svg",
    },

    {
      quote:
        "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js. ",
      name: "React",
      title: "",
      icon: "/images/icons/techstack/reactjs.svg",
    },
    {
      quote:
        "Laravel is a free and open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller architectural pattern and based on Symfony.",
      name: "Laravel",
      title: "",
      icon: "/images/icons/techstack/laravel.svg",
    },
    {
      quote:
        "TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript. It is designed for the development of large applications and transpiles to JavaScript. ",
      name: "TypeScript",
      title: "Moby-Dick",
      icon: "/images/icons/techstack/typescript.svg",
    },
    {
      quote:
        "JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior. Web browsers have a dedicated JavaScript engine that executes the client code. ",
      name: "JavaScript",
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
        <div className=" px-4 lg:px-40">
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
              Crafting High-Performance Websites with Stunning Design & Speed:
              Elevating User Experiences One Pixel at a Time
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
