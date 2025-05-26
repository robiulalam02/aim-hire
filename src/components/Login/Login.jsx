import React, { use, useState } from 'react';
import { ProviderContext } from '../../providers/ProviderContext';
import { Link, useLocation, useNavigate } from 'react-router';
import swal from 'sweetalert';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const { signInUser, googleSignIn, setResetEmail, resetEmail } = use(ProviderContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const [errorMsg, setErrorMsg] = useState('')

    const handleLogin = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        setErrorMsg('');

        signInUser(email, password)
            .then(() => {
                swal({
                    title: "Welcome Back!",
                    text: "User Login Successful!",
                    icon: "success",
                });
                navigate(`${location.state ? location.state : '/'}`)
            })
            .catch(() => {
                setErrorMsg('Invalid email or password')
            })
    };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => {
                swal({
                    title: "Good job!",
                    text: "Login Successful!",
                    icon: "success",
                });
                navigate(`${location.state ? location.state : '/'}`)
            })
    }

    return (
        <div className='flex justify-center max-w-screen-2xl mx-auto my-20 h-screen items-center'>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div class="relative flex flex-col rounded-xl shadow-sm p-5 dark:bg-primary">
                <h4 class="block text-center text-2xl font-semibold text-slate-800 ">
                    Welcome Back
                </h4>
                <form onSubmit={handleLogin} class="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div class="mb-1 flex flex-col gap-6">
                        <div class="w-full max-w-sm min-w-[200px]">
                            <label class="block mb-2 text-sm text-slate-600 ">
                                Email
                            </label>
                            <input required defaultValue={resetEmail} onChange={(e) => setResetEmail(e.target.value)} type="email" name='email' class="w-full bg-transparent placeholder:text-slate-400 text-slate-700  text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Your Email" />
                        </div>
                        <div class="w-full max-w-sm min-w-[200px]">
                            <label class="block mb-2 text-sm text-slate-600 ">
                                Password
                            </label>
                            <input required type="password" onChange={() => setErrorMsg('')} name='password' class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200  rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Your Password" />
                        </div>
                    </div>
                    <div class="inline-flex items-center mt-2">
                        <button onClick={() => navigate('/forget-password')} type='button' class="cursor-pointer text-slate-600  text-sm" >
                            forget password?
                        </button>
                    </div>
                    <div>
                        <p className='text-error'>{errorMsg}</p>
                    </div>
                    <button class="mt-4 w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="submit">
                        Login
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


                    <p class="flex justify-center mt-6 text-sm text-slate-600 ">
                        Don&apos;t have an account?
                        <Link to="/auth/register" class="ml-1 text-sm font-semibold text-slate-700  underline">
                            Sign up
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;