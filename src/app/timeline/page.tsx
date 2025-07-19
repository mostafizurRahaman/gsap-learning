
'use client'

import React, { useRef, useState } from 'react'
import {useGSAP} from '@gsap/react'
import { gsap} from'gsap'

gsap.registerPlugin(useGSAP)
const Timeline = () => {
   const ref = useRef<HTMLDivElement>(null)
   
   const [time, setTime] = useState(0)
   

   //  +1 mean 1 sec before of previous animation ending 
   // -1

// ** Timeline ** 
   useGSAP(() => {
      //**  define a timeline : 
      const tl = gsap.timeline()

      //** Timeline ** 
      tl.to(ref.current?.getElementsByTagName('div')?.[0]  as HTMLDivElement, {
         x: 500, 
         width: '150px', 
         height: '150px', 
         duration: 3,
         onStart:() =>{
           setTime(new Date().getSeconds())
         }, 
         onComplete:() => {
            setTime(new Date().getSeconds())

         }

      }).addLabel('anim').to(ref.current?.getElementsByTagName('div')?.[1] as HTMLDivElement, {
         x: 500, 
         width: '120px', 
         height: '120px', 
         borderRadius: '50%', 
         duration: 2, 
         delay: 2, 
          onStart:() =>{
              setTime(new Date().getSeconds())
         }, 
         onComplete:() => {
              setTime(new Date().getSeconds())

         }
      }).to(ref.current?.getElementsByTagName('div')?.[2] as HTMLDivElement, { 
         x: 500, 
         width: '120px', 
         height: '120px', 
         border: '2px solid blue', 
         borderRadius: '3', 

         delay: 3,
         duration: 3,
            onStart:() =>{
             setTime(new Date().getSeconds())
         }, 
         onComplete:() => {
              setTime(new Date().getSeconds())

         }
         
      }).to(ref.current, {
         display:  "flex", 
         flexDirection: "column", 
         gap: '30px', 
         onComplete:  () =>  {
               setTime(new Date().getSeconds())
         }
      })

 

   })


  return (
    <div ref={ref} className='p-16 transition-all duration-500'>
       
       <h1 className='text-2xl'>Custom Define Delay {time}</h1>
      <div className="box box1 w-10 h-10 bg-blue-500"></div>
      <div className="box box2 w-10 h-10 bg-purple-500"></div>
      <div className="box box3 w-10 h-10 bg-violet-500"></div>
    </div>
  )
}

export default Timeline
