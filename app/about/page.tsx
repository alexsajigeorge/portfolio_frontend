import Image from "next/image";
import React from "react";

const About = ({}: { className?: string }) => {
  return (
    <>
      <div>
        {/* <h1 className="text-5xl font-bold text-center">Fusionfolio</h1>
        <p className="text-center dark:text-neutral-400 text-neutral-600">
          Showcasing Fullstack Wizardry & Design Magic
        </p> */}

        <Image
          src="/images/about/techstack.svg"
          alt="about"
          width={800}
          height={800}
          className="mt-10 mx-auto"
        />
      </div>
    </>
  );
};

export default About;
