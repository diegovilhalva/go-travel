import { motion } from "motion/react"
import { type BlogPost } from "../../utils/contentTypes"
import { useState } from "react";
import formatDate from "../../utils/formatDate";

interface BlogPostProps{
    post:BlogPost
}


const BlogPost = ({post}:BlogPostProps) => {
     const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  return (
    <motion.li  className="group flex cursor-pointer items-center justify-between gap-x-36 max-2xl:grid max-2xl:grid-cols-[4fr_6fr] max-2xl:gap-x-22 max-xl:gap-x-12 max-lg:max-w-lg max-lg:grid-cols-1 max-lg:gap-y-10"  initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: imageLoaded ? 1 : 0, y: imageLoaded ? 0 : 20 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}>
        <div className="overflow-hidden rounded-[1.5rem]">
            <img src={post.img} alt={post.alt} className="max-h-108 transform rounded-[1.375rem] transition-all duration-300 ease-in-out group-hover:scale-103 max-sm:aspect-square max-sm:w-[100%] max-sm:object-cover"  onLoad={() => setImageLoaded(true)} />
        </div>
        <div className="max-3xl:mr-0 max-3xl:max-w-180 mr-11 max-w-195 max-2xl:max-w-max">
            <p className="tracking-6 text-grey-900 max-3xl:text-base max-3xl:mb-4 mb-4.5 text-[1.25rem] font-medium max-xl:mb-3.5 max-md:mb-4.5">{formatDate(post.date)}</p>
            <h4 className="tracking-6 max-3xl:text-[2.5rem] max-3xl:mb-5.5 mb-6 text-[2.75rem] font-medium max-2xl:text-[2rem] max-xl:mb-4 max-xl:text-[1.75rem] max-md:mb-6">{post.title}</h4>
            <p className="text-grey-800 max-3xl:text-base/12 max-3xl:mb-5.5 mb-6 text-lg/13.5 max-xl:mb-4 max-md:mb-6 max-sm:text-base/12">{post.summary}</p>
            <button className="bg-primary-700 hover:bg-primary-800 max-3xl:text-base cursor-pointer rounded-[.625rem] px-8 py-3.5 text-lg font-medium text-white transition-all duration-200 max-xl:py-3 max-xl:text-sm max-xl:font-normal max-lg:py-3.5 max-lg:text-base">View More</button>
        </div>
    </motion.li>

  )
}

export default BlogPost