import { AiOutlineHome, AiOutlinePlus, AiOutlineUser } from 'react-icons/ai';
import { BsChat } from 'react-icons/bs';
import { CiSearch } from 'react-icons/ci';
import { NavLink, Route, Routes } from 'react-router-dom';
import NewPost from '../pages/NewPost';
import Home from '../pages/Home';

const NavBar = () => {
    return ( 
        <nav className='absolute bg-white w-full shadow-md flex justify-between items-center'>
            <section className='lg:block hidden border-gray-300 border'>
                <input type="search" className='px-20 py-2 ' placeholder="Discover..." />
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