import { TextGenerateEffect } from "@/components/ui/text-generate";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter";
import Image from "next/image";
import React from "react";

const About = ({}: { className?: string }) => {
  const words = `Tech Enthusiast and 
  Creative Coder `;

  const wordsArray = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Aceternity.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <>
      <div>
        {/* <h1 className="text-5xl font-bold text-center">
          Journey into Innovation
        </h1>
        <p className="text-center dark:text-neutral-400 text-neutral-600 text-sm">
          Showcasing Fullstack Wizardry & Design Magic
        </p> */}

        <Image
          src="/images/about/techstack.svg"
          alt="about"
          width={800}
          height={800}
          className="mt-10 sm:mt-20 mx-auto"
        />

        <div className="flex -mt-28 relative justify-between items-center">
          <div className="absolute  sm:-left-[30%]">
            <TypewriterEffectSmooth
              className="max-w-[500px]"
              words={wordsArray}
            />
            <Image
              src="/images/about/keyboard.svg"
              width={1000}
              height={1000}
              alt="about"
            />
          </div>
          <div className="absolute  sm:-right-[10%]">
            <Image
              src="/images/about/codeblock.svg"
              width={400}
              height={400}
              alt="about"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
