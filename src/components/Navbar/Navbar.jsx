import React, { use } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { ProviderContext } from '../../providers/ProviderContext';
import { IoLogOutOutline } from 'react-icons/io5';

const Navbar = () => {

    const navigate = useNavigate();
    const { profile, signOutUser } = use(ProviderContext);

    console.log(profile);
    // console.log(profile.photoURL);

    const links = <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/companies">Companies</NavLink>
        <NavLink to="/jobs">Jobs</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/about-us">About us</NavLink>
    </>
    return (
        <nav className=" backdrop-blur-3xl h-24 fixed w-full top-0 z-50">
            <div className=' navbar px-0 md:px-10 py-6'>
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
                <div className="navbar-end">

                    {
                        profile ?
                            <div className='flex items-center gap-6'>

                                <button onClick={()=> navigate('/my-profile')} className='w-12 h-12 rounded-full overflow-hidden'>
                                    <img className='h-full w-full object-cover' src={profile.photoURL} alt="" />
                                </button>

                                <button onClick={signOutUser} className='text-secondary border font-medium border-secondary gap-1 flex items-center px-4 py-2 rounded-md'>Logout <IoLogOutOutline size={20} /></button>
                            </div> :
                            <div className='flex gap-5'>
                                <button onClick={() => navigate('/auth/login')} className='text-secondary border font-medium border-secondary px-4 py-2 rounded-md'>Login</button>
                                <button onClick={() => navigate('/auth/register')} className='bg-secondary text-white px-4 py-2 rounded-md'>Register</button>
                            </div>


                    }

                </div>
            </div>
        </nav>
    );
};

export default Navbar;