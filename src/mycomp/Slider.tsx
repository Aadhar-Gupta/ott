"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SliderData from "./SliderData";

gsap.registerPlugin(ScrollTrigger);

export default function Slider() {
  const component = useRef<HTMLDivElement | null>(null);
  const slider = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!slider.current) return;

    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray<HTMLDivElement>(".panel");
      let totalPanels = panels.length;

      gsap.to(panels, {
        xPercent: -100 * (totalPanels - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (totalPanels - 3),
          end: () => `+=${slider.current?.offsetWidth || 0}`,
          markers: false,
        },
      });

      ScrollTrigger.create({
        trigger: slider.current,
        start: "right right",
        end: "right left",
        onLeave: () => ScrollTrigger.getById("horizontal-scroll")?.kill(),
      });
    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={component} className="w-full overflow-hidden">
      <div ref={slider} className="flex w-[400vw] h-screen">
        <SliderData />
      </div>
    </div>
  );
}
