import Heading from "@/components/ui/heading";
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
  return (
    <>
      <div>
        <Heading
          title=" Journey into Innovation"
          subtitle="  Showcasing Fullstack Wizardry & Design Magic"
        />

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
              className="pl-[5rem] absolute -top-10"
              words={wordsArray}
            />

            <Image
              src="/images/about/keyboard.svg"
              width={1000}
              height={1000}
              alt="about"
            />
          </div>
          <div className="absolute sm:-right-[10%]">
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
