import { motion } from "framer-motion";
import React from 'react';

const Hero = () => {
    return (
        <div className='max-w-screen-xl mx-auto h-[550px]'>
            <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
                <div className='w-6/12 flex flex-col gap-5'>
                    <h1 className='text-6xl lato-font font-semibold leading-18'>FIND YOUR PERFECT DREAM <span className="bg-secondary text-white px-3 rounded-2xl">JOB</span> WITH AIMHIRE</h1>
                    <p>Discover Local and Remote Jobs Tailored to Your Aspirations. Your Gateway to Diverse Career Opportunities Across the Nation.</p>
                </div>
                <div className='w-6/12 flex justify-center'>
                    <motion.img
                        className="w-[520px]"
                        src="/src/assets/job-search-2.png"
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