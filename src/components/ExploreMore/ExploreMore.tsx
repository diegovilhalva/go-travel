import { useState } from "react"
import CaretUp from "../Icons/CaretUp"
import LocationCard from "./LocationCard"
import { LOCATION_CARDS_SHOWN } from "../../utils/costants"
import useQueryLocations from "../../hooks/useQueryLocations"
import Spinner from "../Spinner"
import Error from "../Error"


const ExploreMore = () => {
    const {locations,error,isLoading} = useQueryLocations()
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const totalLocations = locations?.length || 0
    const renderLocations = locations?.slice(currentIndex, currentIndex + LOCATION_CARDS_SHOWN)

    const handleRightClick = () => setCurrentIndex(prevIndex => prevIndex + 1)
    const handleLeftClick = () => setCurrentIndex(prevIndex => prevIndex - 1)

    return (
        <section  className="max-3xl:px-20 px-24 py-26 max-2xl:px-14 max-xl:px-10 max-lg:px-6 max-lg:py-24 max-sm:px-4"id="ExploreMore">
            <div className="max-mdlg:max-w-lg m-auto max-w-389">
                <div className="flex items-end justify-between gap-y-33 max-sm:flex-wrap max-sm:gap-x-16 max-sm:gap-y-10">
                    <div className="">
                        <h2 className="tracking-6 max-3xl:text-[2.875rem] mb-4 text-[3.25rem] font-semibold max-2xl:text-[2.625rem] max-xl:text-[2.25rem] max-md:mb-3 max-sm:text-[2rem]">Explore More</h2>
                        <p className="tracking-6 text-grey-700 max-3xl:text-[1.5rem] text-[1.75rem] font-light max-2xl:text-[1.375rem] max-xl:text-[1.25rem] max-md:text-lg max-sm:text-base">Let's go on an adventure</p>
                    </div>
                    <div className="max-3xl:mb-1.5 max-3xl:gap-x-5 mb-2 flex gap-x-6 max-2xl:gap-x-4 max-xl:mb-0.5 max-sm:gap-x-3">
                        <button className="bg-grey-300 not-disabled:hover:bg-grey-400 flex size-18 cursor-pointer place-content-center rounded-full transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 max-2xl:size-17 max-xl:size-16 max-sm:size-15" onClick={handleLeftClick} disabled={currentIndex === 0} aria-label="arrow-left">
                            <CaretUp className="w-6 -rotate-90 fill-white" />
                        </button>
                        <button className="bg-primary-700 not-disabled:hover:bg-primary-800 flex size-18 cursor-pointer place-content-center rounded-full transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 max-2xl:size-17 max-xl:size-16 max-sm:size-15" onClick={handleRightClick} disabled={currentIndex>= totalLocations - LOCATION_CARDS_SHOWN} aria-label="arrow right">
                            <CaretUp className="w-6 rotate-90 fill-white" />
                        </button>
                    </div>
                </div>
                {isLoading && !error && <Spinner />}
                {!isLoading && error && (
                    <Error>An error has occurred while fetching the locations. </Error>
                )}
            
                {!isLoading && !error && (<ul className="max-3xl:mt-31 max-3xl:gap-x-26 max-mdlg:grid-cols-1 mt-33 grid grid-cols-3 gap-x-29 gap-y-24 max-2xl:mt-24 max-2xl:gap-x-16 max-2xl:gap-y-20 max-xl:mt-20 max-xl:grid-cols-2 max-xl:gap-x-22 max-lg:gap-x-12 max-md:mt-16 max-sm:gap-y-16">
                    {renderLocations?.map((location) => (
                        <LocationCard location={location} key={location.id} />
                    ))}
                </ul>)}
            </div>
        </section>
    )
}

export default ExploreMore