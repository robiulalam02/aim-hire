import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const CompanyDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const [company, setCompany] = useState();

    useEffect(() => {
        const filteredData = data.find(item => item.id === id);
        setCompany(filteredData);
    }, [data, id]);

    return (
        <div>
            {
                company && <img src={company.logo} alt="" />
            }
        </div>
    );
};

export default CompanyDetails;