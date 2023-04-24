import { createContext, useState, useEffect } from "react";
import useData from "../hooks/useData";

export const PostsContext = createContext();

const PostsContextProvider = (props) => {
    const [ posts, setPosts ] = useState([]);
    const { fetchData, error } = useData('http://localhost:4000/api/byteblend/');
    useEffect(() => {
            fetchData().then((data) => { setPosts(data.posts); });
    }, [])


    return ( 
        <PostsContext.Provider value={{ posts }}>
            {props.children}
        </PostsContext.Provider>
     );
}
 
export default PostsContextProvider;