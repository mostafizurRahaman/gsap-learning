"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomBounce } from "gsap/CustomBounce";
import { CustomEase as InternalCustomEase } from "gsap/CustomEase";

gsap.registerPlugin(CustomBounce, InternalCustomEase);

export const CustomEase = () => {
   const ref = useRef<HTMLDivElement>(null);

   useGSAP(() => {
      const [box1] = ref.current?.getElementsByTagName(
         "div"
      ) as HTMLCollectionOf<HTMLDivElement>;

      gsap.to(box1, {
         top: "200px",
         duration: 5,
         repeat: 3,
         ease: CustomBounce.create("myBounce", {
            strength: 1,
            endAtStart: false,
            squash: 1,
            squashID: "myBounce-squash",
         }),
      });
   });

   return (
      <div className="relative h-screen " ref={ref}>
         <div className="box w-20 h-20 rounded-full border-2 border-black absolute top-[80%] left-1/2 -translate-1/2"></div>
      </div>
   );
};
