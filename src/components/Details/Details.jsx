import React, { useState } from 'react';
import { Link } from 'react-router';
import Jobs from '../Jobs/Jobs';

const Details = ({ company }) => {
    const [selectedJob, setSelectedJob] = useState(null);
    const [showModal, setShowModal] = useState();
    return (

        <div className='mt-20'>

            {showModal && selectedJob &&
                <div className="fixed inset-0 backdrop-blur-xs flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg w-full max-w-xl">
                        <div className='flex justify-between gap-8'>
                            <h2 className="text-xl font-bold mb-2">{selectedJob.title} <small className='font-normal'>{selectedJob.jobType}</small></h2>
                            <div className='w-28 overflow-hidden'>
                                <img className='w-full object-cover' src={company.logo} alt="" />
                            </div>
                        </div>
                        <p><strong>Location:</strong> {selectedJob.location}</p>
                        <p><strong>Description:</strong> {selectedJob.description}</p>
                        <p className='mb-2'><strong>Salary:</strong> {selectedJob.salary}</p>
                        <p><strong>Requirements:</strong></p>
                        {
                            selectedJob.requirements.map((item, index) => <p key={index}>{item}</p>)
                        }
                        {/* Add more job details here */}
                        <div className='flex justify-end items-center mt-5'>
                            <div className='flex gap-5 justify-center items-center'>
                                <button
                                    className="px-4 py-2 bg-red-500 text-white rounded"
                                    onClick={() => setShowModal(false)}
                                >
                                    Close
                                </button>

                                <button className='btn btn-primary'><Link target='_blank' to={company.website}>Apply</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            }

            <div className='flex flex-col lg:flex-row items-center justify-between bg-primary p-6 rounded-2xl mb-20 gap-4 lg:gap-0'>
                <div className='flex flex-col md:flex-row gap-10 items-center w-full'>

                    <div className='w-full overflow-hidden bg-white h-28 p-4 rounded-2xl flex justify-center items-center shadow-sm'>
                        <img className='' src={company.logo} alt="" />
                    </div>

                    <div className='w-full'>
                        <h2 className='text-2xl font-semibold'>{company.name}</h2>
                        <p><span className='font-medium text-secondary'>location:</span> {company.location}</p>
                    </div>

                </div>

                <div className='w-full flex flex-col md:flex-row justify-center'>
                    <h2 className='text-xl font-semibold'>Website: <br /> <Link target='_blank' to={company.website} className='text-lg font-normal underline'>{company.website}</Link></h2>
                </div>

                <div className='w-full flex flex-col md:flex-row justify-center'>
                    <h2 className='text-xl font-semibold'>Company Type: <br /> <span className='text-lg font-normal'>{company.industry}</span></h2>
                </div>
            </div>

            <div>
                <h1 className='text-2xl text-center my-6 font-semibold'>Available <span className='text-secondary'>Jobs</span></h1>
                <div className='bg-primary rounded-2xl'>
                    {
                        company.jobs.map(job => <Jobs setSelectedJob={setSelectedJob} setShowModal={setShowModal} job={job}></Jobs>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Details;