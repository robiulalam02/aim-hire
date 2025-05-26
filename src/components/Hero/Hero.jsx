import { motion } from "framer-motion";
import React from 'react';
import heroImg from '../../assets/job-search-2.png';

const Hero = () => {
    return (
        <div className='max-w-screen-xl mx-auto h-auto md:h-[580px] flex md:flex-row flex-col items-center mt-24'>
            <div className='flex flex-col-reverse md:flex-row justify-between items-center py-5'>
                <div className='md:w-6/12 w-full flex flex-col gap-5 text-center md:text-start p-4 md:p-0'>
                    <h1 className='md:text-6xl text-gray-900 text-4xl lato-font font-semibold leading-10 md:leading-18'>FIND YOUR PERFECT DREAM <span className="bg-secondary text-white px-3 rounded-2xl">JOB</span> WITH AIMHIRE</h1>
                    <p className="text-gray-600">Discover Local and Remote Jobs Tailored to Your Aspirations. Your Gateway to Diverse Career Opportunities Across the Nation.</p>
                </div>
                <div className='md:w-6/12 w-full flex justify-center'>
                    <motion.img
                        className="w-[520px] z-0"
                        src={heroImg}
                        alt="Hero Image"
                        animate={{ y: [0, -20, 0] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut",
                        }} />
                </div>
            </div>
        </div>
    );
};

export default Hero;