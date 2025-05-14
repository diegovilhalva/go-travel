import { motion } from "motion/react"
import { Location } from "../../utils/contentTypes"
import { Location as LocationIcon} from "../Icons/Location"
import Star from "../Icons/Star"

interface LocationCardProps {
    location: Location
}

const LocationCard = ({ location }: LocationCardProps) => {
    return (
        <motion.li initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:29}}
        transition={{duration:0.35,ease:"easeInOut"}} className="group cursor-pointer ">
            <div className="relative mb-8 overflow-hidden  rounded-3xl  ">

                <img src={location.img} alt={location.alt} className="transform transition-all duration-300 ease-in-out group-hover:scale-103" />
                <div className="absolute top-5  right-6 flex items-center gap-x-2 rounded-[.625rem] bg-white/85 backdrop-blur-3xl px-3 py-1.5">
                    <Star className="size-6 fill-yellow " />
                    <p className="text-grey-600 tracking-6 text-[1.0625rem] font-semibold">{location.rating}</p>
                </div>
            </div>
            <div className="flex items-end justify-between">
                <div className="">
                    <p className="mb-3.5 text-[1.75rem] font-semibold">{location.title}</p>
                    <div className="flex items-center">
                        <LocationIcon className="size-6 mr-1.5"  />
                        <p className="text-grey-700 text-lg">{location.location}</p>
                    </div>
                </div>
                <p className="font-rubik text-[1.75rem] " >${location.pricePerPerson}/<span className="text-[1.25rem]">Pax</span></p>
            </div>
        </motion.li>
    )
}

export default LocationCard 