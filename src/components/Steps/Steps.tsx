import bg from "../../../public/swimmingDudes.webp"
import { steps } from "../../utils/content"
import Rating from "./Rating"


const Steps = () => {
    return (
        <section className="max-3xl:px-20 max-3xl:py-34 px-24 py-36 max-2xl:px-14 max-2xl:py-28 max-xl:px-10 max-xl:py-26 max-lg:px-6 max-lg:py-24 max-sm:px-4">
      <div className="max-3xl:px-16 m-auto max-w-432 px-21.5 max-2xl:px-9 max-xl:px-0 max-md:max-w-lg">
        <div className="mt-4 text-center max-md:mt-0">
          <h2 className="tracking-6 max-3xl:text-[2.875rem] max-3xl:mb-4.5 mb-5 text-[3.25rem] font-semibold max-2xl:mb-4 max-2xl:text-[2.625rem] max-xl:mb-2.5 max-xl:text-[2.25rem] max-sm:text-[2rem]">
            Travel to make sweet memories
          </h2>
          <p className="tracking-6 text-grey-700 max-3xl:text-[1.5rem]/9 text-[1.75rem]/10.5 font-light max-2xl:text-[1.375rem] max-xl:text-[1.25rem] max-md:text-lg max-sm:text-base">
            Find the trips that flexible lifestyle
          </p>
        </div>

        <div className="max-3xl:pt-24.5 flex items-start justify-between gap-x-44 pt-26 max-2xl:gap-x-28 max-2xl:pt-20 max-xl:gap-x-16 max-lg:flex-wrap-reverse max-lg:justify-center max-lg:gap-y-16 max-md:pt-16 max-sm:pt-12">
          <div className="max-w-min shrink-5 max-xl:max-w-max max-lg:max-w-lg max-md:px-8 max-sm:px-0">
            <ul className="mb-14 flex flex-col gap-y-14 max-2xl:mb-12 max-2xl:gap-y-12">
              {steps.map((step) => (
                <li key={step.id} className="flex flex-col gap-y-4.5">
                  <p className="bg-primary-700 max-3xl:text-[1.125rem]/6.5 max-3xl:px-4.5 w-min rounded-[.5rem] px-5.5 py-0.5 text-[1.375rem]/8 font-semibold text-white">
                    {step.id}
                  </p>
                  <h3 className="tracking-6 max-3xl:text-[1.5rem]/9 w-max text-[1.75rem]/10.5 font-semibold text-nowrap max-xl:w-auto max-xl:text-wrap">
                    {step.heading}
                  </h3>
                  <p className="text-grey-900 tracking-6 max-3xl:text-sm/7 text-base/8 font-light">
                    {step.description}
                  </p>
                </li>
              ))}
            </ul>
            <a
              className="bg-primary-700 hover:bg-primary-800 max-3xl:text-base w-max cursor-pointer rounded-[.625rem] px-8 py-3.5 text-lg font-medium text-white transition-all duration-200 max-xl:py-3 max-xl:text-sm max-xl:font-normal max-lg:py-3.5 max-lg:text-base"
              href="#ExploreMore"
            >
              Start your explore
            </a>
          </div>

          <figure className="max-3xl:px-16 relative shrink-2 px-20 max-2xl:px-8 max-md:px-6 max-sm:px-0">
            <img
              src={bg}
              alt="A photo of two men swimming"
              className="max-h-[50.8rem] rounded-[3.25rem] max-2xl:max-h-180 max-xl:rounded-[2.5rem] max-lg:max-w-lg max-lg:rounded-[2rem] max-md:max-w-[100%] max-md:rounded-3xl"
            />
            <Rating
              key={1}
              name="Tiffany Miller"
              rating={4.6}
              img="/headshots/tiffany.webp"
              className="max-3xl:top-24.5 absolute top-28 left-0 max-md:top-24 max-sm:hidden"
            />
            <Rating
              key={2}
              name="Amari Reece"
              rating={4.9}
              img="/headshots/amari.webp"
              className="max-3xl:bottom-24.5 absolute right-0 bottom-28 max-md:bottom-24 max-sm:hidden"
            />
          </figure>
        </div>
      </div>
    </section>
    )
}

export default Steps