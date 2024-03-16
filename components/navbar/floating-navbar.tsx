"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

import Link from "next/link";
import { AnimatedTooltip } from "../ui/tooltip";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Bookmark, Contact, Home, Workflow } from "lucide-react";

const persona = [
  {
    id: 1,
    name: "Alex Saji",
    designation: "Creative Developer",
    image: "/images/avatars/avatar-1.jpg",
  },
];

const navItems = [
  { name: "Home", link: "/", icon: <Home /> },
  { name: "About", link: "/about", icon: <Bookmark /> },
  { name: "Projects", link: "/projects", icon: <Workflow /> },
  { name: "Contact", link: "/contact", icon: <Contact /> },
];

export const FloatingNav = ({}: { className?: string }) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);
  const pathname = usePathname();

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction > 0) {
          setVisible(true);
        } else {
          setVisible(true);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={`${
          pathname === "/" ? "px-1" : " pl-6"
        } flex max-w-fit bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%]  fixed sm:bottom-7 bottom-7 inset-x-0 mx-auto animate-shimmer  border border-transparent  dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-1 py-1  items-center justify-center space-x-4 `}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={`${
              pathname === navItem.link
                ? "backdrop-filter backdrop-blur-xl bg-opacity-30 bg-white/[0.1] flex justify-center py-3 px-3 sm:px-5 rounded-full text-sm"
                : "relative dark:text-neutral-400 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 text-sm"
            } `}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block">{navItem.name}</span>
          </Link>
        ))}
        <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white rounded-full">
          <AnimatedTooltip items={persona} />
        </button>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
      </motion.div>
    </AnimatePresence>
  );
};
