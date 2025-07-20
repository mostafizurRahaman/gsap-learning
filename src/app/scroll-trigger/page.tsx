"use client";

import React from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeaderSection = () => {
   return (
      <div className="font-mono text-2xl h-screen font-bold w-screen flex items-center jusitfy-center px-10 bg-gray-500">
         <h2 className="text-5xl text-black leading-tight">
            Learn GSAP step-by-step with interactive examples to create stunning
            animations for modern web experiences.
         </h2>
      </div>
   );
};
const MiddleSection = () => {
   useGSAP(() => {
      const tl = gsap?.timeline({
         scrollTrigger: {
            trigger: ".two",
            start: "0% 50%",
            end: "50% 50%",
            markers: true,
            scrub: 1,
         },
      });

      tl.from(".two h2.left", {
         x: -1500,
         duration: 5,
         ease: "circ.in",
      });
      tl.from(
         ".two h2.right",
         {
            x: 1500,
            duration: 5,
            ease: "circ.in",
         },
         "<"
      );
   });

   return (
      <div className="two font-mono  h-screen font-bold w-screen flex flex-col gap-5 items-center jusitfy-center px-10 bg-black overflow-hidden">
         <h2 className="text-8xl text-white font-bold uppercase leading-tight heading left">
            Learn GSAP step-by-step
         </h2>
         <h2 className="text-8xl text-white font-bold uppercase leading-tight heading right">
            Learn GSAP step-by-step
         </h2>
         <h2 className="text-8xl text-white font-bold uppercase leading-tight heading left">
            Learn GSAP step-by-step
         </h2>
         <h2 className="text-8xl text-white font-bold uppercase leading-tight heading right">
            Learn GSAP step-by-step
         </h2>
      </div>
   );
};

export default function ScrollTriggerAnim() {
   return (
      <div>
         <HeaderSection />
         <MiddleSection />
      </div>
   );
}
