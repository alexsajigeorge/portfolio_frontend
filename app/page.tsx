import HeroSection from "@/components/home/hero-section";
import KeyboardIllustration from "@/components/ui/keyboard-illustration";
import About from "./about/page";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-card";
import Projects from "./projects/page";

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
export default function Home() {
  return (
    <main className="sm:min-h-screen flex flex-col items-center justify-center gap-5  px-4 lg:px-40">
      <HeroSection />
      <About />
      <Projects />
    </main>
  );
}
