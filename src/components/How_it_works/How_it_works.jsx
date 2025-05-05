import React from 'react';

const How_it_works = () => {
    return (
        <div className='max-w-screen-xl mx-auto h-96 mt-20'>
            <h2 className='text-center text-3xl font-semibold'>How It <span className='text-secondary'>Works?</span></h2>
            <div className='flex items-center gap-6 justify-between mt-12'>

                <div className='flex flex-col gap-2 shadow-sm w-full p-4 rounded-md relative'>
                    <div className='flex justify-center'>
                        <img className='w-48' src="/src/assets/get-started.png" alt="" />
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
                        <img className='w-48' src="/src/assets/job-search-2.png" alt="" />
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
                        <img className='w-48' src="/src/assets/Account-rafiki.png" alt="" />
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
                        <img className='w-48' src="/src/assets/hired.png" alt="" />
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