import React from 'react';
import Navbar from '../Navbar/Navbar';
import { NavLink } from 'react-router';
import { PiHouseLineBold } from 'react-icons/pi';
import { Helmet } from 'react-helmet-async';
import errorImg from '../../assets/404_error.svg'

const ErrorPage = () => {
    return (
        <div>
            <Helmet>
                <title>404 - page not found</title>
            </Helmet>
            <header className='mb-24'>
                <Navbar></Navbar>
            </header>
            <main className='flex flex-col justify-center items-center h-dvh'>
                <div className='flex justify-center'>
                    <NavLink to="/">
                        <button className='px-6 py-3 flex items-center gap-1 rounded-full border border-secondary text-secondary font-medium hover:text-white hover:bg-secondary transition ease-in-out'><PiHouseLineBold size={20} /> <span>Back Home</span></button>

                    </NavLink>
                </div>
                <img className='h-[400px]' src={errorImg} alt="" />
            </main>
        </div>
    );
};

export default ErrorPage;