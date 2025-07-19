'use client'
import React, { useRef } from 'react'

import { useGSAP } from '@gsap/react'
import {gsap} from 'gsap'

gsap.registerPlugin(useGSAP)


const GroupAnimationComponent = () => {
   const ref = useRef<HTMLDivElement>(null)

   
   useGSAP(()=>{
      const el1 = ref.current?.getElementsByClassName('box1')[0]
      const el2 = ref.current?.getElementsByClassName('box2')[0]
      const el3 = ref.current?.getElementsByClassName('box3')[0]
      gsap.fromTo([el1, el2, el3] as HTMLDivElement[] , {
         left: '1000px', 
         top: '100px', 
         duration: 3, 
      }, {
         left: "550px", 
         top: "550px", 
         transformX:"50%",
         transformY:"55%",
         duration: 3, 
         delay:3, 
         repeat: 2, 
         yoyo: true, 
         yoyoEase: "steps(10)"
      })

      // gsap.fromTo(el3 as HTMLDivElement , {
      //    left: '1000px', 
      //    top: '100px', 
      //    duration: 3, 
         
      // }, {
      //    left: "550px", 
      //    top: "550px", 
      //    duration: 3, 
      //    delay: 5
         
      // })


      //  gsap.fromTo(el2 as HTMLDivElement , {
      //    left: '1000px', 
      //    top: '100px', 
      //    duration: 3, 
      // }, {
      //    left: "550px", 
      //    top: "550px", 
      //    duration: 3, 
      //    delay: 8
         
      // })

   })



  return (
      <div ref={ref} className='relative p-16 gap-2'>
         <div className="w-30 h-30 bg-orange-500 rounded-full border-2 translate-1/2  border-white absolute left-[1000px] top-[100px]"></div>
         <div className="w-30 h-30 bg-orange-500 rounded-full border-2 translate-1/2  border-white absolute left-[500px] top-[500px]"></div>
         <div className="w-12 h-12 rounded-full box box1 bg-blue-700 absolute top-10 left-10"></div>
         <div className="w-10 h-10 rounded-full box box2 bg-red-700 absolute top-10 left-10 "></div>
         <div className="w-9 h-9 rounded-full box box3 bg-green-700 absolute top-10 left-10"></div>
      </div>
  )
}

export default GroupAnimationComponent
