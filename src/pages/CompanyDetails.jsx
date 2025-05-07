import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Details from '../components/Details/Details';

const CompanyDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const [company, setCompany] = useState();

    useEffect(() => {
        const filteredData = data.find(item => item.id === id);
        setCompany(filteredData);
    }, [data, id]);

    return (
        <div className='max-w-screen-xl mx-auto my-20 p-5 rounded-2xl'>
            {
                company &&
                <Details company={company}></Details>
            }
        </div>
    );
};

export default CompanyDetails;