"use client";
import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { trackAnimateTime } from "@/utils/track-animate-time";

//  ** Register GSAP **
gsap.registerPlugin(useGSAP);

interface ITimeline {
   tlStart: number;
   tlComplete: number;
   fStart: number;
   fComplete: number;
   SStart: number;
   SComplete: number;
   TStart: number;
   TComplete: number;
}

export default function RelativePosition() {
   const [time, setTime] = useState<ITimeline>({
      tlStart: 0,
      tlComplete: 0,
      fStart: 0,
      fComplete: 0,
      SStart: 0,
      SComplete: 0,
      TStart: 0,
      TComplete: 0,
   });

   //  ** Greater than >  and less then  < ref container
   const glRef = useRef<HTMLDivElement>(null);

   // ** Utils to update time **

   // ** amimate by useGSAP **

   useGSAP(() => {
      //  ** get boxes
      const [box1, box2, box3] = glRef.current?.getElementsByTagName(
         "div"
      ) as HTMLCollectionOf<HTMLDivElement>;

      //  define the timeline **
      const tl = gsap.timeline({
         onStart: () => trackAnimateTime(time, setTime, "tlStart"),
         onComplete: () => trackAnimateTime(time, setTime, "tlComplete"),
      });

      // ** animate elements **
      tl.to(
         box1,
         {
            x: 500,
            duration: 3,
            border: "5px dashed #fff",
            borderTopLeftRadius: "20px",
            borderBottomRightRadius: "20px",
            boxShadow: "4px 4px 5px #000",
            onStart: () => trackAnimateTime(time, setTime, "fStart"),
            onComplete: () => trackAnimateTime(time, setTime, "fComplete"),
         },
         "firstAnim"
      )
         .to(
            box2,
            {
               x: 500,
               duration: 3,
               borderRadius: "50%",
               background: "blue",
               onStart: () => trackAnimateTime(time, setTime, "SStart"),
               onComplete: () => trackAnimateTime(time, setTime, "SComplete"),
            },
            "<"
         )
         .to(
            box2,
            {
               x: 200,
               duration: 3,
            },
            ">-=2"
         )
         .to(
            box3,
            {
               x: 500,
               duration: 3,
               borderRadius: "50%",
               background: "red",
               onStart: () => trackAnimateTime(time, setTime, "TStart"),
               onComplete: () => trackAnimateTime(time, setTime, "TComplete"),
            },
            "firstAnim-=2"
         );
   });

   return (
      <div>
         <p>Relative Position</p>
         <p>Greater Then &lt; & Less Then &gt; Positioning </p>
         <p>
            Start From Previous animation start{" "}
            <code className="text-red-600 text-5xl">&lt;</code>
         </p>
         <blockquote className="bg-gray-400 rounded-4xl p-5 space-y-2">
            <p className="text-sm font-mono">
               👉 <span className="text-blue-600 text-2xl font-bold">&lt;</span>
               আগের অ্যানিমেশন <span className="font-bold">শুরু</span> হওয়ার
               সময়েই শুরু হবে
            </p>
            <p className="text-sm font-mono">
               👉 <span className="text-blue-600 text-2xl font-bold">&gt;</span>
               আগের অ্যানিমেশন <span className="font-bold">শেষ</span> হওয়ার পর
               শুরু হবে
            </p>
            <p className="text-sm font-mono">
               👉{" "}
               <span className="text-blue-600 text-2xl font-bold">&lt;+=2</span>
               আগের অ্যানিমেশন <span className="font-bold">শুরু</span> হওয়ার 2
               সেকেন্ড পর শুরু হবে
            </p>
            <p className="text-sm font-mono">
               👉{" "}
               <span className="text-blue-600 text-2xl font-bold">&lt;-=2</span>
               আগের অ্যানিমেশন <span className="font-bold">শুরু</span> হওয়ার 2
               সেকেন্ড আগে শুরু হবে
            </p>
            <p className="text-sm font-mono">
               👉{" "}
               <span className="text-blue-600 text-2xl font-bold">&gt;+=2</span>
               আগের অ্যানিমেশন <span className="font-bold">শেষ</span> হওয়ার 2
               সেকেন্ড পর শুরু হবে
            </p>
            <p className="text-sm font-mono">
               👉{" "}
               <span className="text-blue-600 text-2xl font-bold">&gt;-=2</span>
               আগের অ্যানিমেশন <span className="font-bold">শেষ</span> হওয়ার 2
               সেকেন্ড আগে শুরু হবে
            </p>
         </blockquote>

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
         <div className="space-y-5" ref={glRef}>
            <div className="box bg-orange-600 w-10 h-10"></div>
            <div className="box bg-purple-800 w-10 h-10"></div>
            <div className="box bg-sky-600 w-10 h-10"></div>
         </div>
      </div>
   );
}
