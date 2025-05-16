import { HeroBenefit as Benefit } from "../../utils/contentTypes"

interface HeroBenefitProps {
  benefit:Benefit;
}

const HeroBenefit = ({benefit}:HeroBenefitProps) => {
  return (
    <li
      key={benefit.id}
      className="max-3xl:gap-x-10 flex items-center gap-x-12 max-2xl:gap-x-8 max-xl:flex-col max-xl:gap-y-6 max-md:max-w-70 max-sm:max-w-max"
    >
      <div className="bg-primary-100 flex size-24 shrink-0 items-center justify-center rounded-full max-2xl:size-20">
        <benefit.Icon className="fill-primary-700" />
      </div>
      <div className="flex flex-col gap-y-2.5 max-2xl:gap-y-2">
        <p className="text-grey-600 tracking-6 max-3xl:text-[1.5rem]/9 text-[1.75rem]/10.5 font-medium whitespace-nowrap max-2xl:text-[1.375rem] max-xl:text-center max-lg:text-[1.25rem]">
          {benefit.heading}
        </p>
        <p className="tracking-6 text-grey-600 max-3xl:text-sm/6.5 font-rubik text-base/7.5 max-xl:text-center">
          {benefit.description}
        </p>
      </div>
    </li>
  )
}

export default HeroBenefit