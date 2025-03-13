"use client";
import Showcase from "@/mycomp/showcase/Showcase";
import { motion } from "framer-motion";
import { useRef } from "react";

function page() {
  const scrolldiv = useRef(null);
  function Scroll(): undefined {}
  return (
    <motion.div
      ref={scrolldiv.current}
      whileInView={Scroll()}
      className="bg-black overflow-x-hidden"
    >
      <Showcase></Showcase>;
    </motion.div>
  );
}

export default page;
