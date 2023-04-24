import { useContext, useEffect, useState, useTransition } from "react";
import Post from "./Post";
import { PostsContext } from "../context/PostsContext";;


const Posts = () => {
    const { posts } = useContext(PostsContext);

    return ( 
        <section className="px-2">
            <article className="flex flex-col">
                <h2 className="text-2xl font-bold text-center text-gray-400">Trending posts today</h2>
                {
                    posts.length == 0 ?
                    <h1 className="text-3xl text-gray-400 text-center overflow-hidden self-center justify-self-center` font-bold">Loading...</h1> :
                    posts.map(post => {                
                        return(<Post poster={post.poster} contents={post.contents} key={Math.random()}/>)
                    })
                }
            </article>
        </section>
     );
}
 
export default Posts;