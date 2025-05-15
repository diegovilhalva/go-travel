import { createClient } from "@supabase/supabase-js";
import { BlogPost, Location } from "../utils/contentTypes";
import { Database } from "./supabase";

const supabaseUrl = "https://erxyqhdtjfkjesskrwih.supabase.co"

const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY

const supabase = createClient<Database>(supabaseUrl,supabaseKey)

export async function getBlogPost() {
    const {data,error} = await supabase.from("BlogPosts").select()
    if (error) {
        throw new Error(`Error: Database returned error when fetching blog posts: ${error.message}`)
    }


    const  blogPosts:BlogPost[] = data.map((post) => {
        return{
            id:post.id,
            img:post.img_url,
            alt:post.img_alt,
            date:post.date_created,
            title:post.article_title,
            summary:post.article_summary
        }
    } )
    return blogPosts

}


export async function getLocations(){
    const {data,error} = await supabase.from("Locations").select()

     if (error) {
        throw new Error(`Error: Database returned error when locations: ${error.message}`)
    }

    const locations:Location[] = data.map((location) => {
        return {
            id:location.id,
            img:location.img_url,
            alt:location.img_alt,
            location:location.location,
            pricePerPerson:location.price_per_person,
            rating:location.rating,
            title:location.title
        }
    })

    return locations

}