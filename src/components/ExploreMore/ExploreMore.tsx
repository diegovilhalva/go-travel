import { useState } from "react"
import { locations } from "../../utils/content"
import CaretUp from "../Icons/CaretUp"
import LocationCard from "./LocationCard"
import { LOCATION_CARDS_SHOWN } from "../../utils/costants"


const ExploreMore = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const totalLocations = locations.length
    const renderLocations = locations.slice(currentIndex, currentIndex + LOCATION_CARDS_SHOWN)

    const handleRightClick = () => setCurrentIndex(prevIndex => prevIndex + 1)
    const handleLeftClick = () => setCurrentIndex(prevIndex => prevIndex - 1)

    return (
        <section className="px-24 py-26" id="ExploreMore">
            <div className="m-auto max-w-389 ">
                <div className="flex items-end justify-between gap-y-33">
                    <div className="">
                        <h2 className="tracking-6 mb-4 text-[3.25rem] font-semibold">Explore More</h2>
                        <p className="tracking-6 text-grey-700 text-[1.75rem] font-light">Let's go on an adventure</p>
                    </div>
                    <div className="mb-2 flex gap-x-6">
                        <button className="bg-grey-300 not-disabled:hover:bg-grey-400 flex size-18 cursor-pointer place-content-center rounded-full  transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 " onClick={handleLeftClick} disabled={currentIndex === 0} aria-label="arrow-left">
                            <CaretUp className="w-6 -rotate-90 fill-white" />
                        </button>
                        <button className="bg-primary-700 not-disabled:hover:bg-primary-800 flex size-18 cursor-pointer place-content-center rounded-full  transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 " onClick={handleRightClick} disabled={currentIndex>= totalLocations - LOCATION_CARDS_SHOWN} aria-label="arrow right">
                            <CaretUp className="w-6 rotate-90 fill-white" />
                        </button>
                    </div>
                </div>
                <ul className="mt-33 grid grid-cols-3 gap-x-29 gap-y-24">
                    {renderLocations.map((location) => (
                        <LocationCard location={location} key={location.id} />
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default ExploreMore