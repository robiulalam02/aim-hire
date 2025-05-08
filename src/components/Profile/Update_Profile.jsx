import React, { use } from 'react';
import { ProviderContext } from '../../providers/ProviderContext';
import { useNavigate } from 'react-router';

const Update_Profile = () => {
    const { updateUser } = use(ProviderContext);
    const navigate = useNavigate();

    const handleUpdateUser = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const image = e.target.image.value;

        updateUser(name, image)
            .then(() => {
                navigate('/my-profile')
            })
    }
    return (
        <div className='h-screen max-w-screen-2xl mx-auto flex justify-center items-center'>
            <form onSubmit={handleUpdateUser} class="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 shadow-sm p-5 bg-primary rounded-2xl">
                <h3 className='text-2xl font-semibold mb-5 text-center'>update user profile</h3>
                <div class="mb-1 flex flex-col gap-6">
                    <div class="w-full max-w-sm min-w-[200px]">
                        <label class="block mb-2 text-sm text-slate-600">
                            Name
                        </label>
                        <input type="text" name='name' class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="New Name" />
                    </div>
                    <div class="w-full max-w-sm min-w-[200px]">
                        <label class="block mb-2 text-sm text-slate-600">
                            Photo URL
                        </label>
                        <input type="text" name='image' class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Photo URL" />
                    </div>
                </div>
                <div class="inline-flex items-center mt-2">
                </div>
                <button class="mt-4 w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="submit">
                    update information
                </button>
            </form>
        </div>
    );
};

export default Update_Profile;