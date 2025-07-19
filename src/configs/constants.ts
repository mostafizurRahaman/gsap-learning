//  Positioning Number Context **
export const extractNumberSnippet = `
 'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const GsapTimingExample: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    const box1 = el?.querySelector('.box1')
    const box2 = el?.querySelector('.box2')

    const tl = gsap.timeline()

    tl.to(box1, { x: 100, duration: 1 }, 0)  // starts at 0s
    tl.to(box2, { x: 100, duration: 1 }, 3)  // starts at 3s (delayed in timeline)
  }, [])

  return (
    <div ref={containerRef} className="space-x-4 flex mt-10 ml-10">
      <div className="box1 w-20 h-20 bg-blue-500" />
      <div className="box2 w-20 h-20 bg-red-500" />
    </div>
  )
}

export default GsapTimingExample

  `;
