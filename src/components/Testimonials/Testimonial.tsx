import { type Testimonial } from "../../utils/contentTypes"

interface TestimonialPops {
    testimonial:Testimonial
}

const Testimonial = ({testimonial}:TestimonialPops) => {
  return (
    <li className="relative ml-24 flex rounded-3xl bg-white py-16 pt-14 pr-12 pl-42 drop-shadow-[0px_0px_20px_rgba(0,0,0,0.05)]">
        <div className="absolute left-0 size-47.5 -translate-[50%] overflow-hidden after:bg-primary-700 after:absolute after:right-0 after:bottom-0 after:-z-1 after:block after:size-45 after:rounded-full">
            <img src={testimonial.img} alt={testimonial.alt} className="bg-grey-300 top-0 left-0 z-5 size-45 rounded-full" />
        </div>
        <div className="flex  flex-col justify-between gap-y-14">
            <p className="text-base/9 font-light">{testimonial.description}</p>
            <p className="font-medium">{testimonial.name} /{" "} <span className="font-light"> {testimonial.vacation}</span></p>
        </div>
    </li>
  )
}

export default Testimonial