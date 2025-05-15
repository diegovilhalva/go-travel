import useQueryBlogPosts from "../../hooks/useQueryBlogPosts"
import Error from "../Error"
import Spinner from "../Spinner"
import BlogPost from "./BlogPost"


const News = () => {
  const {blogPosts,error,isLoading} = useQueryBlogPosts()
  
 
  return (
    <section className="px-24 py-36">
        <div className="m-auto max-w-389">
            <h2 className="tracking-6 mb-34 text-center text-[3.25rem] font-semibold">Latest News from us</h2>
            {isLoading &&  !error && (<Spinner />)}
            <ul className="flex flex-col gap-y-34">
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