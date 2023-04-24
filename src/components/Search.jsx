import { CiSearch } from "react-icons/ci";
import {motion} from 'framer-motion';

const Search = () => {
    return ( 
        <section className=" p-2">
            <section
            className='lg:block hidden rounded-full border-gray-300 border w-full lg:flex justify-between items-center '>
                <input type="search" className='px-5 py-2 outline-none' placeholder="Make a query..." />
                <CiSearch size="25" fill="gray" className="mr-2"/>
            </section>
        </section>
     );
}
 
export default Search;