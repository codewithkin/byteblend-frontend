import { useEffect, useState } from "react";
import useData from "../hooks/useData";
import Post from "./Post";
import NavBar from "./NavBar";


const Posts = () => {
    const [ posts, setPosts ] = useState([]);
    const { fetchData, error } = useData('http://localhost:4000/api/byteblend/');
    useEffect(() => {
        fetchData().then((data) => { setPosts(data.posts); })
    }, [])

    return ( 
        <section>
            {
            posts.map(post => {                
                return(<Post poster={post.poster} contents={post.contents} key={Math.random()}/>)
            })
        }
        </section>
     );
}
 
export default Posts;