"use client";
import React, { useRef } from "react";
import wireframe from "@/assets/car-wireframe.png";
import car from "@/assets/car.png";
import Image from "next/image";

// GSAP
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollTriggerPin = () => {
   const containerRef = useRef<HTMLDivElement>(null);

   useGSAP(() => {
      const ctx = gsap.context(() => {
         const tl = gsap.timeline({
            scrollTrigger: {
               trigger: ".main",
               start: "top center",
               end: "bottom center",
               scrub: true,
               pin: true,
               markers: true,
            },
         });

         tl.to(".image", {
            opacity: 1,
            scale: 1,
            duration: 5,
            width: "896px ",
            ease: "power2.out",
         });
      }, containerRef);

      return () => ctx.revert();
   }, []);

   return (
      <div ref={containerRef}>
         <div className="relative h-screen w-screen overflow-hidden main">
            <Image
               className="absolute top-0 left-0 w-4xl h-full object-contain z-0 wire-frame overflow-hidden"
               src={wireframe}
               alt="wireframe"
            />
            <Image
               className="absolute top-0 left-0 w-0 h-full object-contain z-10 image opacity-0 scale-50"
               src={car}
               alt="car"
            />
         </div>
         <div className="h-screen w-screen bg-black" />
      </div>
   );
};

export default ScrollTriggerPin;
