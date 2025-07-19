"use client";

import { trackAnimateTime } from "@/utils/track-animate-time";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";

gsap.registerPlugin(useGSAP);

export default function LabelPosition() {
   const containerRef = useRef<HTMLDivElement>(null);
   const [time, setTime] = useState({
      tlStart: 0,
      tlEnd: 0,
      fStart: 0,
      fEnd: 0,
      sStart: 0,
      sEnd: 0,
      ThStart: 0,
      ThEnd: 0,
   });

   useGSAP(() => {
      const [box1, box2, box3] = containerRef.current?.getElementsByTagName(
         "div"
      ) as HTMLCollectionOf<HTMLDivElement>;

      // ** define the timeline **
      const tl = gsap.timeline({
         onStart: () => trackAnimateTime(time, setTime, "tlStart"),
         onComplete: () => trackAnimateTime(time, setTime, "tlEnd"),
         delay: 2,
      });

      // ** Define the animation **
      tl.to(
         box1,
         {
            x: 600,
            border: "5px solid #f00",
            width: "50px",
            height: "50px",
            duration: 3,
            onStart: () => trackAnimateTime(time, setTime, "fStart"),
            onComplete: () => trackAnimateTime(time, setTime, "fEnd"),
         },
         "firstAnim"
      )
         // .to(
         //    box1,
         //    {
         //       rotate: 260,
         //       duration: 3,
         //       onStart: () => trackAnimateTime(time, setTime, "box1S"),
         //       onComplete: () => trackAnimateTime(time, setTime, "box1E"),
         //    },
         //    "firstAnim+=1"
         // )
         .to(
            box2,
            {
               x: 500,
               duration: 5,
               onStart: () => trackAnimateTime(time, setTime, "sStart"),
               onComplete: () => trackAnimateTime(time, setTime, "sEnd"),
            },
            "+=50%"
         );
   });

   return (
      <div className="py-5">
         <div className="border-2 border-red-500">
            <h2 className="text-5xl my-3.5 text-blue-600">Position Label</h2>
            <div className="flex gap-3 items-center border border-black mb-2">
               {Object.entries(time)?.map((item, index) => {
                  return (
                     <div
                        key={index}
                        className="flex flex-row items-center gap-0.5 w-40 h-10 border-r border-black"
                     >
                        <p className="font-medium text-blue-600">{item?.[0]}</p>
                        <span>:</span>
                        <p className="text-xl font-bold text-orange-500">
                           {item?.[1]}
                        </p>
                     </div>
                  );
               })}
            </div>
            <div ref={containerRef}>
               <div className="bg-blue-600 w-10 h-10"></div>
               <div className="bg-blue-500 w-10 h-10"></div>
               <div className="bg-blue-700 w-10 h-10"></div>
            </div>
         </div>
      </div>
   );
}
