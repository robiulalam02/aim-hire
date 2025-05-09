import React, { use } from 'react';
import { ProviderContext } from '../../providers/ProviderContext';
import { Link, useLocation, useNavigate } from 'react-router';
import swal from 'sweetalert';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

const Register = () => {

    const { registerUser, updateUser, googleSignIn } = use(ProviderContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleRegister = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const image = e.target.image.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        registerUser(email, password)
            .then(() => {
                updateUser(name, image);
                swal({
                    title: "Good job!",
                    text: "Registration Successful!",
                    icon: "success",
                });
                navigate(`${location.state ? location.state : '/'}`)
            })
            .catch(() => {
                toast.error('user registration failed or email already in use')
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => {
                swal({
                    title: "Good job!",
                    text: "Registration Successful!",
                    icon: "success",
                });
                navigate(`${location.state ? location.state : '/'}`)
            })
    }

    return (
        <div className='flex justify-center max-w-screen-2xl my-40 mx-auto items-center'>
            <Helmet>
                <title>Register</title>
            </Helmet>
            <div class="relative flex flex-col rounded-xl shadow-sm p-5">
                <h4 class="block text-xl font-medium text-slate-800">
                    Register user
                </h4>
                <p class="text-slate-500 font-light">
                    Nice to meet you! Enter your details to register.
                </p>
                <form onSubmit={handleRegister} class="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div class="mb-1 flex flex-col gap-6">
                        <div class="w-full max-w-sm min-w-[200px]">
                            <label class="block mb-2 text-sm text-slate-600">
                                Your Name
                            </label>
                            <input type="text" name='name' required class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Your Name" />
                        </div>
                        <div class="w-full max-w-sm min-w-[200px]">
                            <label class="block mb-2 text-sm text-slate-600">
                                Image URL
                            </label>
                            <input type="text" name='image' class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Image URL" />
                        </div>
                        <div class="w-full max-w-sm min-w-[200px]">
                            <label class="block mb-2 text-sm text-slate-600">
                                Email
                            </label>
                            <input required type="email" name='email' class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Your Email" />
                        </div>
                        <div class="w-full max-w-sm min-w-[200px]">
                            <label class="block mb-2 text-sm text-slate-600">
                                Password
                            </label>
                            <input
                                required
                                pattern="^(?=.*[a-z])(?=.*[A-Z]).{6,}$"
                                title="Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
                                type="password" name='password' class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Your Password" />
                        </div>
                    </div>
                    <div class="inline-flex items-center mt-2">
                        <label class="flex items-center cursor-pointer relative" for="check-2">
                            <input type="checkbox" class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800" id="check-2" />
                            <span class="absolute text-white opacity-0 pointer-events-none peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </span>
                        </label>
                        <label class="cursor-pointer ml-2 text-slate-600 text-sm" for="check-2">
                            Remember Me
                        </label>
                    </div>
                    <button class="mt-4 w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="submit">
                        Register
                    </button>

                    <div className="flex items-center w-full my-4">
                        <hr className="w-full text-gray-600" />
                        <p className="px-3 text-gray-600">OR</p>
                        <hr className="w-full text-gray-600" />
                    </div>

                    <div className="my-6 space-y-4">
                        <button onClick={handleGoogleSignIn} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-600 focus:ring-rose-600">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                            </svg>
                            <p>Continue with Google</p>
                        </button>
                    </div>


                    <p class="flex justify-center mt-6 text-sm text-slate-600">
                        Don&apos;t have an account?
                        <Link to="/auth/login" class="ml-1 text-sm font-semibold text-slate-700 underline">
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;