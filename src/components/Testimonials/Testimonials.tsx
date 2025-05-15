import { testimonials } from "../../utils/content"
import Testimonial from "./Testimonial"


const Testimonials = () => {
  return (
    <section className="px-24 py-36 ">
        <div className="m-auto max-w-389">
            <h2 className="mb-22 text-center text-[3.875rem] font-semibold">What Our Vacationers Say</h2>
            <ul className="flex gap-x-20">
                {testimonials.map((testimonial) => (
                    <Testimonial testimonial={testimonial} key={testimonial.id}/>
                ))}
            </ul>
        </div>
    </section>
  )
}

export default Testimonials