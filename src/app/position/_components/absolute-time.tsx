"use client";
import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import CodeRenderer from "@/components/code-preview";

//  ** Register Gsap **
gsap.registerPlugin(useGSAP);

const AbsoluteTime = () => {
   const absConRef = useRef<HTMLDivElement>(null);
   const [tlTime, setTlTime] = useState<number>(0);
   const [time, setTime] = useState<{
      start: number;
      complete: number;
   }>({
      start: 0,
      complete: 0,
   });

   useGSAP(() => {
      const [box1, box2] = absConRef.current?.getElementsByTagName(
         "div"
      ) as HTMLCollectionOf<HTMLDivElement>;

      const tl = gsap.timeline({
         onStart: () => {
            setTlTime(new Date().getSeconds());
         },
      });

      tl.to(
         box1,
         {
            x: 500,
            borderRight: `10px solid #000`,
            duration: 3,
            borderTopRightRadius: "50%",
            borderBottomRightRadius: "50%",
            onStart: () => {
               setTime((prev) => ({
                  ...prev,
                  start: new Date().getSeconds(),
               }));
            },
            onComplete: () => {
               setTime((prev) => ({
                  ...prev,
                  complete: new Date().getSeconds(),
               }));
            },
         },
         3
      ).to(
         box2,
         {
            x: 500,
            borderRight: `10px solid #000`,
            duration: 3,
            borderTopRightRadius: "50%",
            borderBottomRightRadius: "50%",
            onStart: () => {
               setTime((prev) => ({
                  ...prev,
                  start: new Date().getSeconds(),
               }));
            },
            onComplete: () => {
               setTime((prev) => ({
                  ...prev,
                  complete: new Date().getSeconds(),
               }));
            },
         },
         2
      );
   });

   return (
      <div className="space-y-5 p-5 border-2 border-black" ref={absConRef}>
         <h2 className="font-bold text-4xl">
            Absolute Position: start timeline- {tlTime} sec
         </h2>
         <CodeRenderer
            code={`<div className="space-y-5 p-5" ref={absConRef}>
         <h2>Absolute Position {tlTime}</h2>
         <p>
            start <span>{time.start}</span> complete:{" "}
            <span>{time.complete}</span>
         </p>
         <p>টাইললাইন শুরু হওয়ার নিদিষ্ট সময় পরে শুরু হবে। </p>
         <div className="box bg-blue-500 w-10 h-10 border border-gray-100"></div>
         <div className="box bg-red-500 w-10 h-10 border border-gray-100"></div>
         <div className="box bg-yellow-500 w-10 h-10 border border-gray-100"></div>
      </div>`}
         />
         <p>
            start <span>{time.start} sec</span> complete:{" "}
            <span>{time.complete} sec</span>
         </p>
         <p>টাইললাইন শুরু হওয়ার নিদিষ্ট সময় পরে শুরু হবে। </p>
         <ul>
            <li>
               🔸 Absolute Position = নির্দিষ্ট সেকেন্ডে শুরু করার নির্দেশনা।
            </li>
            <li>
               🔸 এটা টাইমলাইনে অ্যানিমেশন একদম নির্ভরযোগ্য সময় অনুযায়ী চালায়।
            </li>
         </ul>
         <div className="box bg-blue-500 w-10 h-10 border border-gray-100"></div>
         <div className="box bg-red-500 w-10 h-10 border border-gray-100"></div>
         <div className="box bg-yellow-500 w-10 h-10 border border-gray-100"></div>
      </div>
   );
};

export default AbsoluteTime;
