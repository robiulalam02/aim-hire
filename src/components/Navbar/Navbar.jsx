import React, { use, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { ProviderContext } from '../../providers/ProviderContext';
import { IoLogOutOutline } from 'react-icons/io5';
import logo from '../../assets/logo-1.png';
import logo2 from '../../assets/logo-2.png';

const Navbar = () => {

    const navigate = useNavigate();
    const { profile, signOutUser } = use(ProviderContext);
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme)
    })

    const links = <>
        <NavLink to="/">Home</NavLink>
        {
            profile &&
            <NavLink to="/my-profile">Profile</NavLink>
        }
        <NavLink to="/blogs">Blogs</NavLink>
        <NavLink to="/contact-us">Contact us</NavLink>
        <li className='text-start md:hidden'>
            <label className="swap swap-rotate w-1/3">
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" onChange={e => e.target.checked ? setTheme("dark") : setTheme("light")} />

                {/* sun icon */}
                <svg
                    className="swap-on h-10 w-10 text-yellow-400 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path
                        d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                {/* moon icon */}
                <svg
                    className="swap-off h-10 w-10 text-yellow-400 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path
                        d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
            </label>
        </li>
        {
            profile ?
                <div>
                    <button onClick={() => { signOutUser; navigate('/') }} className='text-secondary border font-medium border-secondary gap-1 flex md:hidden items-center px-4 py-2 rounded-md'>Logout <IoLogOutOutline size={20} /></button>
                </div> :
                <div className='flex gap-5 md:hidden'>
                    <button onClick={() => navigate('/auth/login')} className='text-secondary border font-medium border-secondary px-4 py-2 rounded-md'>Login</button>
                    <button onClick={() => navigate('/auth/register')} className='bg-secondary text-white px-4 py-2 rounded-md'>Register</button>
                </div>
        }

    </>
    return (
        <nav className="backdrop-blur-3xl h-24 fixed w-full top-0 z-50">
            <div className='navbar pr-5 md:px-10 py-6'>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-4">
                            {links}
                        </ul>
                    </div>
                    {
                        theme === "dark" ?
                            <img width={140} src={logo2} alt="" />
                            :
                            <img width={140} src={logo} alt="" />
                    }
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-10 text-lg">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        profile ?
                            <div className='flex items-center gap-6'>

                                <div className='hidden md:block'>
                                    <label className="swap swap-rotate">
                                        {/* this hidden checkbox controls the state */}
                                        <input type="checkbox" onChange={e => e.target.checked ? setTheme("dark") : setTheme("light")} />

                                        {/* sun icon */}
                                        <svg
                                            className="swap-on h-10 w-10 text-yellow-400 fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                                        </svg>

                                        {/* moon icon */}
                                        <svg
                                            className="swap-off h-10 w-10 text-yellow-400 fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                                        </svg>
                                    </label>
                                </div>

                                {
                                    profile.photoURL === null ? <button onClick={() => navigate('/my-profile')} className='w-12 h-12 rounded-full overflow-hidden'>
                                        <img className='h-full w-full object-cover' src="/src/assets/default-logo.jpg" alt="" />
                                    </button> :
                                        <button onClick={() => navigate('/my-profile')} className='w-12 h-12 rounded-full overflow-hidden'>
                                            <img className='h-full w-full object-cover' src={profile.photoURL} alt="" />
                                        </button>
                                }

                                <button onClick={() => { signOutUser(); navigate('/') }} className='text-secondary border font-medium border-secondary gap-1 hidden md:flex items-center px-4 py-2 rounded-md'>Logout <IoLogOutOutline size={20} /></button>
                            </div> :
                            <div className='hidden md:flex gap-5'>
                                <label className="swap swap-rotate">
                                    {/* this hidden checkbox controls the state */}
                                    <input type="checkbox" onChange={e => e.target.checked ? setTheme("dark") : setTheme("light")} />

                                    {/* sun icon */}
                                    <svg
                                        className="swap-on h-10 w-10 text-yellow-400 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                                    </svg>

                                    {/* moon icon */}
                                    <svg
                                        className="swap-off h-10 w-10 text-yellow-400 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                                    </svg>
                                </label>
                                <button onClick={() => navigate('/auth/login')} className='text-secondary dark:text-gray-50 border font-medium border-secondary px-4 py-2 rounded-md'>Login</button>
                                <button onClick={() => navigate('/auth/register')} className='bg-secondary text-white px-4 py-2 rounded-md'>Register</button>
                            </div>


                    }

                </div>
            </div>
        </nav>
    );
};

export default Navbar;