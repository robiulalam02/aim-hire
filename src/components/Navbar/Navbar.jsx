import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    const links = <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/companies">Companies</NavLink>
        <NavLink to="/jobs">Jobs</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/about-us">About us</NavLink>
    </>
    return (
        <nav className=" bg-transparent ">
            <div className='max-w-screen-2xl mx-auto navbar py-6'>
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
                    <img width={140} src="/src/assets/logo-1.png" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-10 text-lg">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end flex gap-5">
                    <button className='text-secondary border font-medium border-secondary px-4 py-2 rounded-md'>Login</button>
                    <button className='bg-secondary text-white px-4 py-2 rounded-md'>Register</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;