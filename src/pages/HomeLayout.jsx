import React, { useEffect, useState } from 'react';
import How_it_works from '../components/How_it_works/How_it_works';
import All_Companies from '../components/Company/All_Companies';
import Hero from '../components/Hero/Hero';
import FAQ from '../components/FAQ/FAQ';
import Testimonial from '../components/Testimonial/Testimonial';
import Blogs from '../components/Blogs/Blogs';
import { Helmet } from 'react-helmet-async';
// import { useLoaderData } from 'react-router';

const HomeLayout = () => {
    // const companyData = useLoaderData();
    const [companyData, setCompanyData] = useState();
    useEffect(() => {
        fetch('main-company.json').then(res => res.json()).then(data => setCompanyData(data));
    }, [])
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <section className='bg-[url(/src/assets/shiny-overlay.svg)] bg-cover bg-center'>
                <Hero></Hero>
            </section>
            <section>
                <How_it_works></How_it_works>
            </section>
            <section>
                <All_Companies companyData={companyData}></All_Companies>
            </section>
            <section>
                <FAQ></FAQ>
            </section>
            <section>
                <Testimonial></Testimonial>
            </section>
        </div>
    );
};

export default HomeLayout;