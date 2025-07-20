"use client";
import Card from "./_components/card";

//  ** Import assets **
import img1 from "@/assets/1.png";
import img2 from "@/assets/2.png";
import img3 from "@/assets/3.png";
import img4 from "@/assets/4.png";
import img5 from "@/assets/5.png";
import img6 from "@/assets/6.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ScrollTriggerDemo = () => {
   const data = [
      {
         img: img1,
         title: "Animations",
         content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do.",
      },
      {
         img: img2,
         title: "Interactions",
         content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do.",
      },
      {
         img: img3,
         title: "Storytelling",
         content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do.",
      },
      {
         img: img4,
         title: "Performance",
         content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do.",
      },
      {
         img: img5,
         title: "Frameworks",
         content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do.",
      },
      {
         img: img6,
         title: "Design",
         content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do.",
      },
      {
         img: img1, // Reusing images
         title: "Hooks",
         content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do.",
      },
      {
         img: img2,
         title: "State",
         content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do.",
      },
      {
         img: img3,
         title: "Rendering",
         content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do.",
      },
      {
         img: img4,
         title: "Deployment",
         content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do.",
      },
   ];

   const cardsRef = useRef<HTMLDivElement>(null);

   useGSAP(() => {
      const tl = gsap?.timeline();

      const cards = cardsRef?.current?.getElementsByClassName("card");
      console.log(cards);

      if (cards && cards?.length > 0) {
         Array.from(cards).forEach((card) => {
            tl.to(card, {
               scale: 0.5,
               opacity: 0.8,
               scrollTrigger: {
                  trigger: card,
                  start: "top 15%",
                  end: "bottom 15%",
                  markers: true,
                  scrub: 1,
               },
            });
         });
      }
   });

   return (
      <div
         ref={cardsRef}
         className="bg-black   py-80 flex flex-col gap-5 items-center"
      >
         {data.map((item, index) => (
            <Card
               key={index}
               idx={index}
               content={item.content}
               title={item.title}
               img={item.img}
            />
         ))}
      </div>
   );
};

export default ScrollTriggerDemo;
