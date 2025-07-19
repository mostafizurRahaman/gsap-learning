import React from "react";
import AbsoluteTime from "./_components/absolute-time";
import RelativePosition from "./_components/relative-position";
import LabelPosition from "./_components/label-position";

const GSAPPositioning = () => {
   return (
      <div className="p-5">
         {/* Absolute Number parameter */}
         <AbsoluteTime />
         {/*  By following previous animation with greater then and less then */}
         <RelativePosition />
         {/* Label Position  */}
         <LabelPosition />
      </div>
   );
};

export default GSAPPositioning;
