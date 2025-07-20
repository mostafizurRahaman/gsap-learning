"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

// ** useGSAP Register **
gsap.registerPlugin(useGSAP);

export const EaseBack = () => {
   //  Container Ref*
   const containerRef = useRef<HTMLDivElement>(null);

   useGSAP(() => {
      const [box1, box2, box3, box4] =
         containerRef.current?.getElementsByTagName(
            "div"
         ) as HTMLCollectionOf<HTMLDivElement>;

      //  ** Define the timeline **
      const tl = gsap?.timeline();

      // ** animation :
      tl.addLabel("anim")
         .to(box1, {
            rotate: 360,
            duration: 5,
            ease: "back",
         })
         .to(
            box2,
            {
               rotate: 360,
               duration: 5,
               ease: "back.in(2.0)",
            },
            "anim"
         )
         .to(
            box3,
            {
               rotate: 360,
               duration: 5,
               ease: "back.out",
            },
            "anim"
         )
         .to(
            box4,
            {
               rotate: 360,
               duration: 5,
               ease: "back.inOut",
            },
            "anim"
         );
   });

   return (
      <div
         className="flex gap-10 items-center justify-center flex-wrap"
         ref={containerRef}
      >
         <div className="w-20 h-20 border flex items-center justify-center border-white bg-blue-600">
            Back
         </div>
         <div className="w-20 h-20 border flex items-center justify-center border-white bg-red-600">
            Back.in
         </div>
         <div className="w-20 h-20 border flex items-center justify-center border-white bg-gray-700">
            Back.out
         </div>
         <div className="w-20 h-20 border flex items-center justify-center border-white bg-yellow-600">
            .inout
         </div>
      </div>
   );
};
