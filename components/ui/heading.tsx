import { motion, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const Heading = ({ title, subtitle }: { title: string; subtitle: string }) => {
  const [isVisible, setIsVisible] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  return (
    <div ref={ref} className="relative z-50 pointer-events-none select-none">
      {isVisible && (
        <>
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="md:text-6xl lg:text-7xl text-4xl font-medium text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400 pointer-events-none"
          >
            {title}
          </motion.h1>
          <div className="max-w-[32rem] overflow-auto flex justify-center mx-auto">
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              className="text-center pt-2 text-neutral-400 text-sm sm:text-sm"
            >
              {subtitle}
            </motion.p>
          </div>
        </>
      )}
    </div>
  );
};

export default Heading;
