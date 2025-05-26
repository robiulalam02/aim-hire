import React from 'react';
import Modal from '../Modal/Modal';

const Jobs = ({ job, setShowModal, setSelectedJob}) => {


    return (
        <div>

            <section className="p-4 lg:p-8 text-gray-800">

                <div className="container mx-auto space-y-12">
                    <div className="flex flex-col h-full lg:h-80 overflow-hidden rounded-md shadow-sm lg:flex-row  dark:shadow-slate-100">
                        <img src={job.bannerImage} alt="" className="h-full object-cover bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center gap-6 w-full p-4 bg-white dark:bg-transparent">
                            <div className='dark:text-white'>
                                <span className="text-xs uppercase text-gray-600 dark:text-gray-50">{job.jobType}</span>
                                <h3 className="text-3xl font-bold">{job.title}</h3>
                            </div>
                            <div className='dark:text-white'>
                                <p><strong>Salary:</strong></p>
                                <p className="text-gray-600 dark:text-gray-50">{job.salary}</p>
                            </div>

                            <button onClick={()=> {setSelectedJob(job); setShowModal(true)}} type="button" className="self-start border border-secondary px-6 py-2 rounded-md text-secondary font-medium">Details</button>
                        </div>
                    </div>
                </div>
                
            </section>

        </div>
    );
};

export default Jobs;