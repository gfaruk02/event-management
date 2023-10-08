// import { useContext, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../provider/AuthProvider";


const Login = () => {

    // const { signInUser, singInGoogle } = useContext(AuthContext);
    // const [showPassword, setShowPassword] = useState(false);
    // const navigate = useNavigate();
    // const handleRegister = (e) => {
    //     console.log('register');
    //     e.preventDefault();
    //     const form = new FormData(e.currentTarget)
    //     const email = form.get('email');
    //     const password = form.get('password');
    //     console.log(email, password);
    //     //sign In User
    //     signInUser(email, password)
    //     .then(result=>{
    //         console.log(result.user);
    //         e.target.reset();
    //         navigate('/');
    //     })
    //     .catch(error =>{
    //         console.error(error);
    //     })
    // }
    // const handleGoogleSignIn =()=>{
    //     singInGoogle()
    //     .then(result=>{
    //         console.log(result.user);
    //     })
    //     .catch(error=>{
    //         console.error(error);
    //     })
    // }
    return (
        <div>
            <div className="text-center pt-10 w-4/5 md:w-2/3 lg:w-2/6 mx-auto " >
                <div className="relative mb-4 grid h-28 w-full place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-pink-400 to-pink-400 bg-clip-border text-white shadow-lg shadow-pink-500/40">
                    <h1 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">Login</h1>
                </div>
                <div className="border mb-9 pb-3">
                    <form onSubmit={handleRegister} className="mx-auto card-body w-full">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" type="email" placeholder="email" name="email" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" type={showPassword? "text":"password"}  
                            placeholder="password"
                            name="password" required />
                            <span onClick={()=>setShowPassword(!showPassword)}>show</span>
                        </div>

                        <div className="-ml-2.5 flex justify-between">
                            <div className="inline-flex items-center">
                                <label
                                    className="relative flex cursor-pointer items-center rounded-full p-3"
                                    htmlFor="checkbox"
                                    data-ripple-dark="true"
                                >
                                    <input
                                        type="checkbox"
                                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                                        id="checkbox"
                                    />
                                    <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-3.5 w-3.5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            stroke="currentColor"
                                            strokeWidth="1"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </span>
                                </label>
                                <label
                                    className="mt-px cursor-pointer select-none font-light text-gray-700"
                                    htmlFor="checkbox"
                                >
                                    Remember Me
                                </label>

                            </div>
                            <div>
                                <label className="label">
                                    <a href="#" className=" link link-hover text-gray-700  font-lighttext-base">Forgot password?</a>
                                </label>
                            </div>
                        </div>
                        <div className="form-control mt-6 rounded-lg  bg-gradient-to-tr from-pink-400 to-pink-400 bg-clip-border text-white shadow-lg shadow-pink-500/40">
                            <button className="py-3 px-4 ">Login</button>
                        </div>
                        <div> 
                            <button onClick={handleGoogleSignIn}> Gogle Signin</button>
                        </div>
                    </form>
                    <p className="mt-2 mb-3 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">Do not Have an Account? Please <Link className="ml-1 block font-sans text-base font-bold leading-normal text-pink-500 antialiased" to="/register"> <button className=""> Register</button></Link></p>
                </div>

            </div>
        </div>
    );
};

export default Login;