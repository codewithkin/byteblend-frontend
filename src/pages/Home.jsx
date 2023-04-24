import Feed from "../components/Feed";
import Profile from '../components/Profile';
import PostsContextProvider from "../context/PostsContext";
import Chat from "./Chat";

const Home = () => {
    return ( 
        <article className="home lg:py-20 ">
            <section className="lg:flex mt-0 lg:gap-2">
                <PostsContextProvider>
                    <Profile/>
                    <Feed />
                    <Chat />
                </PostsContextProvider>
            </section>
        </article>
     );
}
 
export default Home;