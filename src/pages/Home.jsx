import Feed from "../components/Feed";
import Profile from '../components/Profile';
import Search from "../components/Search";

const Home = () => {
    return ( 
        <article className="home">
            <section className="lg:flex lg:gap-2">
                <Profile/>
                <Feed />
                <Search />
            </section>
        </article>
     );
}
 
export default Home;