import React from 'react';

const Jobs = ({ job }) => {
    return (
        <div>
            <section className="p-4 lg:p-8 text-gray-800">
                <div className="container mx-auto space-y-12">
                    <div className="flex flex-col h-[400px] overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img src={job.bannerImage} alt="" className="h-full w-6/12 object-cover bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-between p-4 bg-gray-50">
                            <div>
                                <span className="text-xs uppercase text-gray-600">{job.jobType}</span>
                                <h3 className="text-3xl font-bold">{job.title}</h3>
                                <p className="text-gray-600">{job.description}</p>
                            </div>
                            <div>
                                <p className="text-gray-600">{job.location}</p>
                                <p className="text-gray-600">{job.salary}</p>
                            </div>
                            <div>
                                <p className='font-semibold'>Requirements:</p>
                                <ul>
                                    {
                                        job.requirements.map((item, index) => <small key={index}>{item}</small>)
                                    }
                                </ul>
                            </div>
                            <button type="button" className="self-start border border-secondary px-6 py-2 rounded-md text-secondary font-semibold">Apply</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Jobs;