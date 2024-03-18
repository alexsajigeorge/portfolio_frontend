"use client";
import { motion } from "framer-motion";

const Heading = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <div className="relative z-50 pointer-events-none select-none">
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="md:text-6xl lg:text-7xl text-4xl font-medium text-center  max-w-[20rem] sm:max-w-[38rem] bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400 pointer-events-none"
      >
        {title}
        <div className="max-w-[32rem] overflow-auto flex justify-center mx-auto">
          <p className="text-center leading-[1.6] font-normal pointer-events-none max-w-[20rem] sm:max-w-[38rem] pt-2 text-neutral-400 text-sm sm:text-sm">
            {subtitle}
          </p>
        </div>
      </motion.h1>
    </div>
  );
};

export default Heading;
