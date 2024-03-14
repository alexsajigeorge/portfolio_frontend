import React from "react";

const Heading = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <div className="relative z-50 pointer-events-none select-none">
      <h1 className="md:text-6xl lg:text-7xl text-4xl font-medium text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400 pointer-events-none">
        {title}
      </h1>
      <div className="max-w-[28rem] overflow-auto flex justify-center mx-auto">
        <p className="text-center pt-2 text-neutral-400 text-sm sm:text-sm">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default Heading;
