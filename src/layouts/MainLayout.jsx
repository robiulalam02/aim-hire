import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <header className='bg-primary'>
                <Navbar />
                <Hero />
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                
            </footer>
        </div>
    );
};

export default MainLayout;