"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const Heading = ({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle: string;
  className?: string;
}) => {
  return (
    <div className="relative z-20 pointer-events-none select-none">
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className={cn(
          "text-2xl md:text-7xl font-bold text-center max-w-[20rem] sm:max-w-[38rem] bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400 pointer-events-none",
          className
        )}
      >
        <h1> {title}</h1>
        <div className="max-w-[32rem] overflow-auto flex justify-center mx-auto">
          <p
            className={cn(
              "text-center leading-[1.6] font-normal pointer-events-none max-w-[20rem] sm:max-w-[38rem] pt-2 text-neutral-400 text-sm sm:text-sm",
              className
            )}
          >
            {subtitle}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Heading;
