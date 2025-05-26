import React from 'react';

const FAQ = () => {
    return (
        <div id='faq' className='max-w-screen-xl my-40 mx-auto flex flex-col items-center gap-5'>
            <h2 className='text-3xl font-semibold mb-5'>Job Portal <span className='text-secondary'>FAQs</span></h2>
            <div className='w-10/12'>
                <div className="collapse bg-base-100 border border-base-300 dark:border-slate-100">
                    <input type="radio" name="my-accordion-1" defaultChecked />
                    <div className="collapse-title font-semibold">1. How do I create an account on this platform?</div>
                    <div className="collapse-content text-sm">To create an account, click on the Register button at the top right, then fill out the required information including your email, password, and basic profile details. Once registered, you can log in and start exploring job opportunities.</div>
                </div>
                <div className="collapse bg-base-100 border border-base-300 dark:border-slate-100">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title font-semibold">2. Is it free to apply for jobs on this website?</div>
                    <div className="collapse-content text-sm">Yes, applying for jobs is completely free for job seekers. You can browse, save, and apply for as many jobs as you like without any cost.</div>
                </div>
                <div className="collapse bg-base-100 border border-base-300 dark:border-slate-100">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title font-semibold">3. How do I update my profile?</div>
                    <div className="collapse-content text-sm">Go to your profile settings by clicking on your profile picture after logging in. From there, you can update your personal information, upload a new image, and change your display name anytime.</div>
                </div>
                <div className="collapse bg-base-100 border border-base-300 dark:border-slate-100">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title font-semibold">4. Can I track the jobs I’ve applied for?</div>
                    <div className="collapse-content text-sm">Yes! Your dashboard includes an "Applied Jobs" section where you can view all the jobs you've applied to, along with their current status.</div>
                </div>
                <div className="collapse bg-base-100 border border-base-300 dark:border-slate-100">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title font-semibold">5. How do I contact the employer or company?</div>
                    <div className="collapse-content text-sm">After applying for a job, some listings may include a contact email or phone number. If not, employers will reach out to you directly through your provided contact details if they are interested.</div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;