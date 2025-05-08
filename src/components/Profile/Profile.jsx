import React, { use } from 'react';
import { ProviderContext } from '../../providers/ProviderContext';
import { FaRegUser } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const Profile = () => {
    const { profile } = use(ProviderContext)
    return (
        <div className='h-screen max-w-screen-2xl mx-auto flex justify-center items-center'>
            {
                profile &&
                <div className='flex flex-col items-center gap-2'>
                    <img className='' src={profile.photoURL} alt="" />
                    <h3 className='flex items-center gap-2'><FaRegUser   /> {profile.displayName}</h3>
                    <p className='flex items-center gap-2'><FiMail /> {profile.email}</p>
                    <button>update profile</button>
                </div>
            }
        </div>
    );
};

export default Profile;