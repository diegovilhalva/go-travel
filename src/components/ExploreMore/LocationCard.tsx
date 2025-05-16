import { motion } from "motion/react";
import { Location } from "../../utils/contentTypes";
import { Location as LocationIcon } from "../Icons/Location";
import Star from "../Icons/Star";

interface LocationCardProps {
  location: Location;
}

export default function LocationCard({ location }: LocationCardProps) {
  return (
    <motion.li
      className="group cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <div className="max-3xl:mb-7.5 relative mb-8 overflow-hidden rounded-3xl max-sm:mb-6.5">
        <img
          className="max-mdlg:aspect-[361/327] transform transition-all duration-300 ease-in-out group-hover:scale-103"
          src={location.img}
          alt={location.alt}
        />
        <div className="max-3xl:gap-x-1.5 absolute top-5 right-6 flex items-center gap-x-2 rounded-[.625rem] bg-white/85 px-3 py-1.5 backdrop-blur-3xl max-sm:top-4.5 max-sm:right-4.5">
          <Star className="fill-yellow size-6 max-2xl:size-5" />
          <p className="text-grey-600 tracking-6 max-3xl:text-base text-[1.0625rem] font-semibold max-2xl:text-sm">
            {location.rating}
          </p>
        </div>
      </div>
      <div className="flex items-end justify-between max-sm:items-start">
        <div>
          <p className="max-3xl:text-[1.5rem] max-3xl:mb-3 mb-3.5 text-[1.75rem] font-semibold">
            {location.title}
          </p>
          <div className="flex items-center">
            <LocationIcon className="max-3xl:size-5 max-3xl:mr-1 mr-1.5 size-6" />
            <p className="text-grey-700 max-3xl:text-base text-lg">
              {location.location}
            </p>
          </div>
        </div>
        <p className="font-rubik max-3xl:text-[1.5rem] text-[1.75rem]">
          ${location.pricePerPerson}/
          <span className="max-3xl:text-[1.0625rem] text-[1.25rem]">Pax</span>
        </p>
      </div>
    </motion.li>
  );
}
