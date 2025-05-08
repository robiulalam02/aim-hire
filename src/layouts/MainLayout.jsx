import React, { use } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';
import { ProviderContext } from '../providers/ProviderContext';
import Loading from '../components/Loading/Loading';

const MainLayout = () => {
    const {loading} = use(ProviderContext);

    if (loading) {
        return <Loading />
    }

    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;