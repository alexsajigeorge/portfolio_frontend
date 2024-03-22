import { BackgroundCellAnimation } from "@/components/ui/background-ripple";
import { BentoGridProjects } from "@/components/ui/bento-projects";
import Heading from "@/components/ui/heading";
import React from "react";

const Projects = () => {
  return (
    <>
      <div className="w-full py-[4rem] md:py-[7rem] flex flex-col  items-center">
        <Heading
          title="Projects"
          subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fuga iure repudiandae deserunt! Accusamus, reprehenderit reiciendis perspiciatis architecto enim quia?
"
        />
        <div className="pt-16 w-full z-50 px-4 lg:px-40">
          <BentoGridProjects />
        </div>
      </div>
    </>
  );
};

export default Projects;
