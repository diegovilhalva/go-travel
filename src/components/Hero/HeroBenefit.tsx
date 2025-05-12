import { HeroBenefit as Benefit } from "../../utils/contentTypes"

interface HeroBenefitProps {
  benefit:Benefit;
}

const HeroBenefit = ({benefit}:HeroBenefitProps) => {
  return (
    <li key={benefit.id} className="flex items-center gap-x-12 ">
      <div className="bg-primary-100 flex size-24 justify-center items-center rounded-full shrink-0">
        <benefit.Icon className="fill-primary-700"/>
      </div>
      <div>
        <p className="text-grey-600 tracking-6 text-[1.75rem]/10.5 font-medium whitespace-nowrap">{benefit.heading}</p>
        <p className="tracking-6 text-grey-600 font-rubik text-base/7.5">{benefit.description}</p>
      </div>
    </li>
  )
}

export default HeroBenefit