'use client'

import {  useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


gsap.registerPlugin(useGSAP)

export default function Home() {
  // ** Keep Track of box ref ** 
  const boxRef = useRef<HTMLDivElement>(null);

  const fromBoxRef = useRef<HTMLDivElement>(null);
  
 
//   ** GSAP Hook ** 
   useGSAP(()=>{

    gsap.to(boxRef.current, {
      x: 400,
      y: 200,
      rotation: 360,
      scale: 0.5,
      borderRadius: "50%",
      backgroundColor: "blue",
      color: "white",
      fontSize: "20px",
      fontWeight: "bold",
      textAlign: "center",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
      duration: 5,
    })

    
    gsap.from(fromBoxRef.current, {
      left:  `calc(100% - ${100 + (fromBoxRef.current?.offsetWidth as number)}px)`,
      top: 100,
      duration: 5,
      delay: 3, 
      zIndex: 10,
      onComplete: () => {
        fromBoxRef.current?.append("c")
        fromBoxRef.current?.classList?.add('w-80', 'h-80', 'bg-green-500', 'rounded-sm', 'animate-spin')
      }, 
      
    })

   
   }, []) 




 
  return (
    <div>

   <div className="flex justify-center items-center w-full bg-white  h-screen">
    {/*  Learning Gsap to */} 

    {/**
     * @gsap @to 
     * When we want to move or animate an element from default position to a specific position we use @to
     */
  }
     <div ref={boxRef} className="w-40 h-40 bg-red-500 rounded-sm"></div>

     {/*  Learning Gsap from  */}
     {/**
      * @gsap @from 
      * When we want to move or animate an element from a specific position to a default position we use @from
      * in this example the blue box will come from the position of  purple box to the default position of the blue box
      */}
     <div ref={fromBoxRef} className="w-10 h-10 bg-blue-500 rounded-sm top-[100px] left-[100px] absolute"></div>
     <div className="w-10 h-10 bg-purple-500 rounded-sm top-[100px] right-[100px] absolute"></div>
       
    
     
   </div>
 
      </div>
  );
}
