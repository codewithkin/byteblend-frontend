import { AiOutlineHome, AiOutlinePlus, AiOutlineUser } from 'react-icons/ai';
import { BsChat } from 'react-icons/bs';
import { CiSearch } from 'react-icons/ci';
import { NavLink, Route, Routes } from 'react-router-dom';
import NewPost from '../pages/NewPost';
import Home from '../pages/Home';
import { useContext, useState } from 'react';
import { PostsContext } from '../context/PostsContext';

const NavBar = () => {
    const {posts} = useContext(PostsContext);
    const [searchTerm, setTerm] = useState("");

    return ( 
        <nav className='absolute bg-white w-full shadow-md flex justify-between items-center'>
            <section className='lg:block hidden border-gray-300 border  lg:ml-10 lg:flex justify-between items-center pr-10'>
                <input 
                value={searchTerm}
                onChange={(e) => setTerm(e.target.value)}
                type="search" className='px-12 py-2 outline-none'
                placeholder="Make a query..." />
                <CiSearch size="25" fill="gray"/>
            </section>
            <section className='flex gap-6 justify-center align-middle p-4 '>
                <NavLink to='/'>
                    <AiOutlineHome size={40} fill="gray"/>
                </NavLink>
                <NavLink to="/chats/all">
                    <BsChat size={40} fill="gray"/>
                </NavLink>
                <NavLink to="/posts/new">
                    <AiOutlinePlus size={40} fill="gray"/>
                </NavLink>
                <NavLink to="/profile/mine">
                    <AiOutlineUser size={40} fill="gray"/>
                </NavLink>
                <NavLink to="/settings">
                    <CiSearch size={40} fill="gray"/>
                </NavLink>
            </section>
        </nav>
     );
}
 
export default NavBar;