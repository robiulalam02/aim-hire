import React from 'react';

const Hero = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className='flex justify-between items-center'>
                <div className='w-6/12 flex flex-col gap-5'>
                    <h1 className='text-6xl lato-font leading-16'>FIND YOUR PERFECT DREAM JOB WITH <br /> AIM HIRE</h1>
                    <p>Discover Local and Remote Jobs Tailored to Your Aspirations. Your Gateway to Diverse Career Opportunities Across the Nation.</p>
                </div>
                <div className='w-6/12 flex justify-center'>
                    <img className='w-[520px]' src="/src/assets/job-search-1.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;