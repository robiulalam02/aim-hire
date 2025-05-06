import React from 'react';
import { Link } from 'react-router';

const Details = ({ company }) => {
    return (
        <div className='flex items-center justify-between'>
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
    );
};

export default Details;