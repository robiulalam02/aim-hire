import React from 'react';
import getStarted from '../../assets/get-started.png';
import jobSearch from '../../assets/job-search-2.png';
import applyJob from '../../assets/Account-rafiki.png';
import hiredImg from '../../assets/hired.png';

const How_it_works = () => {
    return (
        <div className='max-w-screen-xl mx-auto h-auto p-4 md:p-0 md:h-96 mt-20'>
            <h2 className='text-center text-3xl font-semibold'>How It <span className='text-secondary'>Works?</span></h2>
            <div className='flex flex-col md:flex-row items-center gap-6 justify-between mt-12'>

                <div className='flex flex-col gap-2 shadow-sm w-full p-4 rounded-md relative'>
                    <div className='flex justify-center'>
                        <img className='w-48' src={getStarted} alt="" />
                    </div>
                    <div>
                        <h3 className='text-xl font-medium mb-2'>Get Started</h3>
                        <p>Build your profile to get started.</p>
                    </div>
                    <div className='bg-primary absolute top-0 w-10 h-10 rounded-full flex justify-center items-center mt-4'>
                        <span className='text-primary-content font-bold'>1</span>
                    </div>
                </div>

                <div className='flex flex-col gap-2 shadow-sm w-full p-4 rounded-md relative'>
                    <div className='flex justify-center'>
                        <img className='w-48' src={jobSearch} alt="" />
                    </div>
                    <div>
                        <h3 className='text-xl font-medium mb-2'>Search Jobs</h3>
                        <p>find jobs that match your goals.</p>
                    </div>
                    <div className='bg-primary absolute top-0 w-10 h-10 rounded-full flex justify-center items-center mt-4'>
                        <span className='text-primary-content font-bold'>2</span>
                    </div>
                </div>

                <div className='flex flex-col gap-2 shadow-sm w-full p-4 rounded-md relative'>
                    <div className='flex justify-center'>
                        <img className='w-48' src={applyJob} alt="" />
                    </div>
                    <div>
                        <h3 className='text-xl font-medium mb-2'>Apply Easily</h3>
                        <p>Apply to jobs quick in one click</p>
                    </div>
                    <div className='bg-primary absolute top-0 w-10 h-10 rounded-full flex justify-center items-center mt-4'>
                        <span className='text-primary-content font-bold'>3</span>
                    </div>
                </div>

                <div className='flex flex-col gap-2 shadow-sm w-full p-4 rounded-md relative'>
                    <div className='flex justify-center'>
                        <img className='w-48' src={hiredImg} alt="" />
                    </div>
                    <div>
                        <h3 className='text-xl font-medium mb-2'>Get Hired</h3>
                        <p>receive offers & interviews</p>
                    </div>
                    <div className='bg-primary absolute top-0 w-10 h-10 rounded-full flex justify-center items-center mt-4'>
                        <span className='text-primary-content font-bold'>4</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default How_it_works;