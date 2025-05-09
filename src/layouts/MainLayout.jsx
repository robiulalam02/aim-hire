import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet, useLocation } from 'react-router';
import Footer from '../components/Footer/Footer';
import Loading from '../components/Loading/Loading';
import { ToastContainer } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

const MainLayout = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const timeout = setTimeout(() => setLoading(false), 500); // simulate loading
        return () => clearTimeout(timeout);
    }, [location]);

    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            {loading && <Loading />}
            <ToastContainer />
            <header>
                <Navbar />
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default MainLayout;