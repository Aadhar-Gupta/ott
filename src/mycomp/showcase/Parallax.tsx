"use client";

import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import showcase0 from "@/assets/showcase/showcase-1.png";
import showcase1 from "@/assets/showcase/showcase-2.png";
import showcase2 from "@/assets/showcase/showcase-3.png";

function useParallax(scrollYProgress: MotionValue<number>, distance: number) {
  return useTransform(scrollYProgress, [0, 1], [-distance, distance]);
}

function ShowcaseImage({ id }: { id: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useParallax(scrollYProgress, 300);
  const ImageArr = [showcase0, showcase1, showcase2];
  return (
    <section className="h-screen flex justify-center items-center snap-start relative">
      <div
        ref={ref}
        className="w-[300px] h-[400px] sm:w-[150px] sm:h-[200px] bg-gray-200 overflow-hidden rounded-lg"
      >
        <Image
          src={ImageArr[id]}
          alt={`Showcase ${id}`}
          width={300}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ y }}
        className="absolute text-green-400 text-[50px] font-bold tracking-tight top-[50%] left-[calc(50%+120px)]"
      >
        {`#00${id}`}
      </motion.h2>
    </section>
  );
}

export default function ParallaxShowcase() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="snap-y snap-mandatory">
      {[0, 1, 2].map((id) => (
        <ShowcaseImage key={id} id={id} />
      ))}
      <motion.div
        className="fixed left-0 right-0 bottom-[50px] h-[5px] bg-green-400 scale-x-0"
        style={{ scaleX }}
      />
    </div>
  );
}
