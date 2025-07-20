"use client";
import React, { ReactNode } from "react";
import {
   EaseBack,
   EasePower1,
   EasePower2,
   EasePower3,
   EasePower4,
   CustomEase,
} from "./_components";

export const EasingSection = ({
   name,
   children,
}: {
   name: string;
   children: ReactNode;
}) => {
   return (
      <div className="w-full p-5 rounded-lg border-2 border-blue-600 bg-amber-950/40 space-y-5">
         <h3 className="text-xl text-mono uppercase">{name}</h3>
         <section>{children}</section>
      </div>
   );
};

export default function Easing() {
   return (
      <div className="p-10">
         <EasingSection name="Power 1">
            <EasePower1 />
         </EasingSection>
         <EasingSection name="Power 2">
            <EasePower2 />
         </EasingSection>
         <EasingSection name="Power 3">
            <EasePower3 />
         </EasingSection>
         <EasingSection name="Power 4">
            <EasePower4 />
         </EasingSection>
         <EasingSection name="Ease Back">
            <EaseBack />
         </EasingSection>
         <EasingSection name="Custom Bounce">
            <CustomEase />
         </EasingSection>
      </div>
   );
}
