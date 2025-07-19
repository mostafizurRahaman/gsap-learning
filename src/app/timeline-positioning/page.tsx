"use client";

import CodeRenderer from "@/components/code-preview";
import { extractNumberSnippet } from "@/configs/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";

gsap.registerPlugin(useGSAP);

const TimelingWithPositioning = () => {
   const extractPositionRef = useRef<HTMLDivElement>(null);

   //  ** time state just for measure the timing
   const [time, setTime] = useState({
      box1Start: 0,
      box1End: 0,
      box2Start: 0,
      box2End: 0,
      box3Start: 0,
      box3End: 0,
   });

   useGSAP(() => {
      /**
       * Extract Number Positioning
       * টাইম লাইনের নিদিষ্ট সময় পরে আনিমেশন শুরু হবে।
       * যদি পুরো টাইম লাইন ১০ সেকেন্ড আমরা যদি Position Parameter এ নাম্বার 3 দেই তাহলে  এটি তিন সেকেন্ডে শুরু হবে
       * যদি timeline শুরু হয় 0 সেকেন্ডে, তাহলে এই অ্যানিমেশন চালু হবে 3 সেকেন্ডে।
       * এর মানে এই অ্যানিমেশনটা timeline-এ ঠিক ৩ সেকেন্ডে insert হবে।
       *  */
      const [box1, box2, box3] =
         extractPositionRef?.current?.getElementsByTagName(
            "div"
         ) as HTMLCollectionOf<HTMLDivElement>;

      //  define the timeline for extract number example **
      const extractNumberTimeline = gsap.timeline();

      extractNumberTimeline
         .to(box1, {
            x: 300,
            color: "blue",
            duration: 5,
            onStart: () => {
               setTime((prev) => ({
                  ...prev,
                  box1Start: new Date().getSeconds(),
               }));
            },
            onComplete: () => {
               setTime((prev) => ({
                  ...prev,
                  box1End: new Date().getSeconds(),
               }));
            },
         })
         .to(
            box2,
            {
               x: 300,
               color: "red",
               duration: 5,
               onStart: () => {
                  setTime((prev) => ({
                     ...prev,
                     box2Start: new Date().getSeconds(),
                  }));
               },
               onComplete: () => {
                  setTime((prev) => ({
                     ...prev,
                     box2End: new Date().getSeconds(),
                  }));
               },
            },
            3 // due to this it will start in 2 sec of position of timeline
         )
         .to(
            box3,
            {
               x: 300,
               color: "purple",
               duration: 5,
               onStart: () => {
                  setTime((prev) => ({
                     ...prev,
                     box3Start: new Date().getSeconds(),
                  }));
               },
               onComplete: () => {
                  setTime((prev) => ({
                     ...prev,
                     box3End: new Date().getSeconds(),
                  }));
               },
            },
            5
         );
   });

   return (
      <div className="p-5">
         <div>Positioning </div>

         <div className="flex flex-col gap-4" ref={extractPositionRef}>
            <h2 className="text-2xl text-violet-700 ">
               Extract Number As position parameter
            </h2>
            <CodeRenderer code={extractNumberSnippet}></CodeRenderer>
            <div className="amber w-10 h-10 bg-amber-400"></div>
            <p>
               {time.box1Start} - {time.box1End}
            </p>
            <div className="amber w-10 h-10 bg-violet-800"></div>
            <p>
               {time.box2Start} - {time.box2End}
            </p>
            <div className="amber w-10 h-10 bg-sky-500"></div>
            <p>
               {time.box3Start} - {time.box3End}
            </p>
         </div>
      </div>
   );
};

export default TimelingWithPositioning;
