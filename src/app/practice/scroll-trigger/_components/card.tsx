import Image, { StaticImageData } from "next/image";

interface ICard {
   idx: number;
   img: string | StaticImageData;
   title: string;
   content: string;
}

const Card = ({ idx, img, title, content }: ICard) => {
   return (
      <div
         className={`card card${idx} text-white py-20 px-8 text-center w-96 rounded-2xl flex flex-col justify-center gap-4 items-center bg-[#332219] sticky top-20`}
      >
         <Image
            src={img}
            width={180}
            height={180}
            alt={`card-${idx}`}
            className="w-[180px] aspect-square"
         />
         <h2 className="font-thin font-mono flex flex-col gap-4 text-2xl">
            The
            <br />
            <span className="text-3xl uppercase text-white font-bold">
               {title}
            </span>
         </h2>
         <p>{content}</p>
      </div>
   );
};

export default Card;
