import React from 'react';
import CompanyCard from './CompanyCard';

const All_Companies = ({companyData}) => {
    return (
        <div className='max-w-screen-2xl mx-auto my-40'>
            <h2 className='text-center text-3xl font-semibold'>Available <span className='text-secondary'>Companies</span></h2>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-12'>
                {
                    companyData?.map(data=> <CompanyCard key={data.id} data={data}></CompanyCard>)
                }
            </div>

        </div>

        
    );
};

export default All_Companies;