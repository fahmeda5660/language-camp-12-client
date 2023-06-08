import { useContext, useEffect, useState } from 'react';
// import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2'
import { useForm } from 'react-hook-form';
// import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email }
                        fetch('https://bistro-boss-server-eta-self.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })

                    })
                    .catch(error => console.log(error))
            })
    };


    return (
        <>
            {/* <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet> */}
            <div className="bg-gradient-to-r from-orange-200 pt-16">
            <div className="container text-center pt-12 pb-20">
                <div className="bg-white shadow-lg border max-w-lg mx-auto pt-9 pb-12 px-12">
                    <h1 className="text-black text-4xl font-bold mb-9">Please Login</h1>
                    <form className="grid grid-cols-1 mt-5 space-y-3 " onSubmit={handleSubmit(onSubmit)}>
                        <input className="input input-bordered rounded-none w-full" placeholder="Email" {...register("email", { required: true })} />
                        {errors.email && <span className="text-rose-600">Email is required</span>}
                        <input className="input input-bordered rounded-none w-full" type="password" placeholder="Password" {...register("password", { required: true })} />
                        {errors.password && <span className="text-rose-600">Password is required</span>}

                        <input className="bg-primary hover:cursor-pointer text-white font-semibold py-2" type="submit" value="Login" />
                    </form>
                    <p>
                        Forgot password? <span className="hover:cursor-pointer hover:underline text-blue-800 mt-3 inline-block">Click here to reset passsword.</span>
                    </p>
                    <p>
                        New here?
                        <Link to="/signup" className="hover:cursor-pointer hover:underline text-blue-800 mt-3 inline-block">
                            Please Register
                        </Link>
                    </p>
                    <div className="divider mt-7">OR</div>
                    <div>
                        <button onClick={() => signInWithGoogle()} className="border flex justify-center items-center w-full py-2">
                            <span className="mr-3">
                                <svg height="20" viewBox="0 0 20 20" width="100%" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
                                    <path d="M19.6 10.23c0-.82-.1-1.42-.25-2.05H10v3.72h5.5c-.15.96-.74 2.31-2.04 3.22v2.45h3.16c1.89-1.73 2.98-4.3 2.98-7.34z" fill="#4285F4"></path>
                                    <path
                                        d="M13.46 15.13c-.83.59-1.96 1-3.46 1-2.64 0-4.88-1.74-5.68-4.15H1.07v2.52C2.72 17.75 6.09 20 10 20c2.7 0 4.96-.89 6.62-2.42l-3.16-2.45z"
                                        fill="#34A853"
                                    ></path>
                                    <path d="M3.99 10c0-.69.12-1.35.32-1.97V5.51H1.07A9.973 9.973 0 000 10c0 1.61.39 3.14 1.07 4.49l3.24-2.52c-.2-.62-.32-1.28-.32-1.97z" fill="#FBBC05"></path>
                                    <path d="M10 3.88c1.88 0 3.13.81 3.85 1.48l2.84-2.76C14.96.99 12.7 0 10 0 6.09 0 2.72 2.25 1.07 5.51l3.24 2.52C5.12 5.62 7.36 3.88 10 3.88z" fill="#EA4335"></path>
                                </svg>
                            </span>
                            Sign in with google
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Login;