import { motion } from "motion/react";
import Star from "../Icons/Star";

interface RatingProps {
    name:string;
    rating:number;
    img:string;
    className:string;
}


const Rating = ({className,img,name,rating}:RatingProps) => {
  return (
    <motion.div initial={{opacity:0, y:100,scale:0.95}} 
    whileInView={{opacity:1,y:0,scale:1}} viewport={{once:true,amount:0}}  transition={{duration:0.5,ease:"easeInOut"}} className={`absolute flex gap-x-2.5 rounded-xl bg-white/85 py-3.5 pr-5 pl-3 drop-shadow-[0_4px_30px_rgba(0,0,0,0.12)] backdrop-blur-3xl max-xl:py-2.5 max-sm:pr-6 max-sm:pl-2 ${className}`} >
        <div className="bg-grey-300 max-3xl:size-16 flex size-17 items-end justify-center overflow-hidden rounded-full max-2xl:size-14 max-xl:size-13 max-sm:size-10">
            <img src={img} className="max-3xl:size-14 size-15 max-2xl:size-13 max-xl:size-12 max-sm:size-9" alt="Graphic of person rating photo" />
        </div>
        <div className="max-3xl:gap-y-1.5 flex flex-col gap-y-2 max-2xl:gap-y-1">
            <p className="tracking-6 max-3xl:text-sm font-semibold max-sm:text-xs">{name}</p>
            <div className="flex items-center">
                <Star className="fill-yellow mr-2 size-6 max-sm:mr-1.5 max-sm:size-4" />
                <p className="text-grey-600 max-3xl:text-[.9375rem] text-[1.0625rem] font-semibold max-xl:text-sm max-sm:text-xs">{rating}</p>
            </div>
        </div>
    </motion.div>
  )
}

export default Rating