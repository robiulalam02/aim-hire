import React from 'react';
import { Link } from 'react-router';

const CompanyCard = ({ data }) => {
    
    return (

        <Link to={`/company-details/${data.id}`} className='flex '>
            <div className='flex flex-col items-center justify-center gap-2'>
                <img className='w-[50%] dark:bg-gray-50' src={data.logo} alt="" />
                <div className='text-center'>
                    <h3 className='font-semibold'>{data.name}</h3>
                    <p>{data.jobs.length} jobs available</p>
                    <p className='text-slate-400'><small>click to view details</small></p>
                </div>
            </div>
        </Link>

    );
};

export default CompanyCard;