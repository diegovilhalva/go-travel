import {type Service } from "../../utils/contentTypes"

interface ServiceProps {
    service:Service
}

const Service = ({service}:ServiceProps) => {
  return (
    <li
      key={service.id}
      className="group max-3xl:justify-start max-3xl:gap-y-14 max-3xl:h-auto max-3xl:max-w-85 flex h-90 max-w-90 flex-col justify-between max-2xl:max-w-75 max-xl:gap-x-16 max-lg:max-w-90 max-md:gap-y-12"
    >
      <service.Icon className="max-3xl:h-22.5 max-3xl:group-first-of-type:h-22.5 h-26 place-self-center group-first-of-type:h-21 max-sm:h-21 max-sm:group-first-of-type:h-24" />
      <div className="text-center">
        <h3 className="tracking-6 max-3xl:text-[1.5rem]/9 max-3xl:mb-8 mb-9.5 text-[1.75rem]/10.5 font-semibold text-nowrap max-xl:mb-7 max-sm:mb-6">
          {service.heading}
        </h3>
        <p className="text-grey-900/85 tracking-6 max-3xl:text-sm/8.5 font-rubik text-base/9.5">
          {service.description}
        </p>
      </div>
    </li>
  )
}

export default Service