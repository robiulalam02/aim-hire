// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './style.css'

// import required modules
import { Pagination } from 'swiper/modules';

const Testimonial = () => {
    return (
        <div className='my-40 max-w-screen-2xl mx-auto'>
            <h2 className='text-3xl font-semibold text-center mb-10'>Success <span className='text-secondary'>Stories</span></h2>
            <Swiper
                autoplay={{ delay: 3000 }}
                loop={true}
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay]}
                className="h-[400px]"
            >
                <SwiperSlide>
                    <div className="flex flex-col items-center w-full p-6 justify-between lg:h-full lg:p-8 bg-primary text-gray-800">
                        <div className='w-16 h-16 bg-gray-500 rounded-full overflow-hidden'>
                            <img src="/src/assets/testimonial-1.jpg" alt="" className="w-full h-full object-cover" />
                        </div>
                        <p className="relative py-1 text-lg italic text-center text-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-secondary">
                                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                            </svg>"I applied through this platform and landed my first job within two weeks! The job listings are genuine, and the application process was super simple. I’m so thankful!"
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 text-secondary">
                                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                            </svg>
                        </p>
                        <div className="text-center text-gray-600">
                            <p>Ayesha Rahman</p>
                            <p>Junior Web Developer</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col items-center w-full p-6 justify-between lg:h-full lg:p-8 bg-primary text-gray-800">
                        <div className='w-16 h-16 bg-gray-500 rounded-full overflow-hidden'>
                            <img src="/src/assets/testimonial-2.jpg" alt="" className="w-full h-full object-cover" />
                        </div>
                        <p className="relative py-1 text-lg italic text-center text-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-secondary">
                                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                            </svg>"As a hiring manager, I found the dashboard intuitive and the quality of applicants impressive. We hired two candidates within a few days — highly recommended!"
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 text-secondary">
                                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                            </svg>
                        </p>
                        <div className="text-center text-gray-600">
                            <p>Saif Uddin</p>
                            <p>Creative Tech Ltd.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col items-center w-full p-6 justify-between lg:h-full lg:p-8 bg-primary text-gray-800">
                        <div className='w-16 h-16 bg-gray-500 rounded-full overflow-hidden'>
                            <img src="/src/assets/testimonial-3.jpg" alt="" className="w-full h-full object-cover" />
                        </div>
                        <p className="relative py-1 text-lg italic text-center text-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-secondary">
                                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                            </svg>"Being a fresh graduate, I was nervous about job hunting. This site helped me find internships and get interview tips that boosted my confidence. It made a huge difference!"
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 text-secondary">
                                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                            </svg>
                        </p>
                        <div className="text-center text-gray-600">
                            <p>Mehedi Hasan</p>
                            <p>Front end developer (Intern)</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col items-center w-full p-6 justify-between lg:h-full lg:p-8 bg-primary text-gray-800">
                        <div className='w-16 h-16 bg-gray-500 rounded-full overflow-hidden'>
                            <img src="/src/assets/testimonial-4.jpg" alt="" className="w-full h-full object-cover" />
                        </div>
                        <p className="relative py-1 text-lg italic text-center text-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-secondary">
                                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                            </svg>"I was looking for a platform that connects real talent with real opportunities. This site helped me find a new role that matches my skills and career goals perfectly. The process was smooth and stress-free."
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 text-secondary">
                                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                            </svg>
                        </p>
                        <div className="text-center text-gray-600">
                            <p>Iftekhar Ahmed</p>
                            <p>HR Executive</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Testimonial;