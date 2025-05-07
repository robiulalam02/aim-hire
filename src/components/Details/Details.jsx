import React from 'react';
import { Link } from 'react-router';
import Jobs from '../Jobs/Jobs';

const Details = ({ company }) => {
    return (
        <div>
            <div className='flex items-center justify-between bg-primary p-6 rounded-2xl mb-20'>
                <div className='flex gap-10 items-center'>

                    <div className='w-70 overflow-hidden bg-white h-28 p-4 rounded-2xl flex justify-center items-center shadow-sm'>
                        <img className='' src={company.logo} alt="" />
                    </div>

                    <div>
                        <h2 className='text-2xl font-semibold'>{company.name}</h2>
                        <p><span className='font-medium text-secondary'>location:</span> {company.location}</p>
                    </div>

                </div>

                <div>
                    <h2 className='text-xl font-semibold'>Website: <br /> <Link target='_blank' to={company.website} className='text-lg font-normal underline'>{company.website}</Link></h2>
                </div>

                <div>
                    <h2 className='text-xl font-semibold'>Company Type: <br /> <span className='text-lg font-normal'>{company.industry}</span></h2>
                </div>
            </div>

            <div>
                <h1 className='text-2xl text-center my-6 font-semibold'>Available <span className='text-secondary'>Jobs</span></h1>
                <div className='bg-primary rounded-2xl'>
                    {
                        company.jobs.map(job => <Jobs job={job}></Jobs>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Details;