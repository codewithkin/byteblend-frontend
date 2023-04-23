import { useEffect, useState, useTransition } from "react";
import useData from "../hooks/useData";
import Post from "./Post";
import NavBar from "./NavBar";


const Posts = () => {
    const [ posts, setPosts ] = useState([]);
    const { fetchData, error, isPending } = useData('http://localhost:4000/api/byteblend/');
    useEffect(() => {
        if(isPending) {
            setPosts("Loading...")
        }
        fetchData().then((data) => { setPosts(data.posts); })
    }, [])

    return ( 
        <section className="p-2">
            {
            posts.map(post => {                
                return(<Post poster={post.poster} contents={post.contents} key={Math.random()}/>)
            })
        }
        </section>
     );
}
 
export default Posts;