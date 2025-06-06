import React, { use } from 'react';
import { ProviderContext } from '../../providers/ProviderContext';
import { FaRegUser } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { useNavigate } from 'react-router';
import { Helmet } from 'react-helmet-async';

const Profile = () => {
    const { profile } = use(ProviderContext);
    const navigate = useNavigate();
    return (
        <div className='h-screen max-w-screen-2xl mx-auto flex justify-center items-center'>
            <Helmet>
                <title>Profile</title>
            </Helmet>
            {
                profile &&
                <div className='flex flex-col items-center gap-2'>
                    <div className='w-28 h-28 overflow-hidden rounded-full'>
                        {
                            profile.photoURL === null ? <img className='h-full w-full object-cover' src="/src/assets/default-logo.jpg" alt="" /> : <img className='h-full w-full object-cover' src={profile.photoURL} alt="" />
                        }
                    </div>
                    <h3 className='flex items-center gap-2'><FaRegUser /> {profile.displayName}</h3>
                    <p className='flex items-center gap-2'><FiMail /> {profile.email}</p>
                    <button onClick={() => navigate('/update-profile')} className='border border-rose-400 px-4 py-2 rounded-xl text-rose-600 font-medium'>update profile</button>
                </div>
            }
        </div>
    );
};

export default Profile;