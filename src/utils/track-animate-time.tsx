import React from "react";

export const trackAnimateTime = <T,>(
   state: T,
   setState: React.Dispatch<React.SetStateAction<T>>,
   property: keyof T
) => {
   setState((prev) => ({
      ...prev,
      [property]: new Date().getSeconds(),
   }));
};
