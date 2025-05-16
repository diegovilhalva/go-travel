import useQueryBlogPosts from "../../hooks/useQueryBlogPosts"
import Error from "../Error"
import Spinner from "../Spinner"
import BlogPost from "./BlogPost"


const News = () => {
  const {blogPosts,error,isLoading} = useQueryBlogPosts()
  
 
  return (
    <section className="max-3xl:py-34 max-3xl:px-20 px-24 py-36 max-2xl:px-14 max-2xl:py-28 max-xl:px-10 max-xl:py-26 max-lg:px-6 max-lg:py-24 max-sm:px-4 max-sm:pb-12">
        <div className="m-auto max-w-389">
            <h2 className="tracking-6 max-3xl:text-[2.875rem] max-3xl:mb-32 mb-34 text-center text-[3.25rem] font-semibold max-2xl:mb-26 max-2xl:text-[2.625rem] max-xl:mb-20 max-xl:text-[2.25rem] max-md:mb-16 max-sm:text-[2rem]">Latest News from us</h2>
            {isLoading &&  !error && (<Spinner />)}
            <ul className="max-3xl:gap-y-32 flex flex-col gap-y-34 max-2xl:gap-y-26 max-xl:gap-y-18 max-lg:items-center max-sm:gap-y-24">
                {!isLoading && !error && blogPosts?.map((post) => (
                    <BlogPost post={post} key={post.id} />
                ))}
            </ul>
            {!isLoading && error && (<Error >
                  It looks like something went wrong while loading our recent news.
              </Error>)}
        </div>
    </section>
  )
}

export default News