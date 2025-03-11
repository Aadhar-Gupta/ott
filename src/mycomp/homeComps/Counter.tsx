"use client";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedCounterProps {
  target: number;
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  target,
  duration = 2,
}) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest) + "+");

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Start animation only once when in view

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, { duration });
      return controls.stop; // Cleanup animation
    }
  }, [isInView, count, target, duration]);

  return (
    <motion.div ref={ref} className="text-5xl font-bold">
      <motion.h1>{rounded}</motion.h1>
    </motion.div>
  );
};

export default AnimatedCounter;
