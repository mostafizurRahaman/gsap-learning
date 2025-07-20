"use client";
import React, { useRef } from "react";
import { Bounce, gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Stagger = () => {
   const skills: string[] = [
      "React",
      "Javascript",
      "Next Js",
      "Express JS",
      "Hono",
      "Typescript",
      "GSAP",
      "HTML",
      "CSS",
      "Tailwind",
      "Bootstrap",
      "Ant Design",
      "PostgreSQL",
      "MongoDB",
   ];

   const ref = useRef<HTMLDivElement>(null);

   useGSAP(() => {
      const boxes = ref.current?.getElementsByTagName(
         "h3"
      ) as HTMLCollectionOf<HTMLHeadingElement>;

      gsap.from(boxes, {
         opacity: 0,
         left: "200px",
         duration: 5,
         filter: "blur(5px)",
         scale: 0.1,
         y: 80,
         stagger: {
            each: 0.1,
            from: "random",
            axis: "y",
            amount: 3,
            grid: [3, 1],
            ease: Bounce.easeIn,
            repeat: 2,
         },
      });
   });

   return (
      <div className="bg-gray-700" ref={ref}>
         <div className="flex  !gap-y-3 mx-auto  skills gap-x-5  items-center justify-center  h-screen max-w-4xl flex-wrap ">
            {skills?.map((item, idx) => (
               <h3
                  className="border-2  bg-black text-center border-white text-white font-mono w-1/4  text-lg px-5 py-3 rounded-full max-w-content"
                  key={idx}
               >
                  {item}
               </h3>
            ))}
         </div>
      </div>
   );
};

export default Stagger;
