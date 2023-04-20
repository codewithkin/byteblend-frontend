import { Link } from "react-router-dom";

const PageNotFound = () => {
    return ( 
        <article className="h-[60vh] flex justify-center flex-col items-center gap-4">
            <h1 className="text-2xl font-bold text-ncs text-center">Page not found, go back MOZISI!</h1>
            <p className="text-white font-bold py-2 px-6 rounded-full bg-ncs w-[100px] text-center"><Link>Home</Link></p>
        </article>
     );
}
 
export default PageNotFound;