import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Register = () => {
    const {registerUser} = useContext(AuthContext);
    const [registerError, setRegisterError] =useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = (e) => {
        console.log('register');
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const name = form.get('name');
        const photoUrl = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photoUrl, email, password);

        // setRegisterError('');
        setSuccess('');
        if(!/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-]).{6,}$/.test(password)){
            setRegisterError('Minimum 6 characters, at least one uppercase letter, one number and one special character:');
          
        }else{
            setRegisterError('');
            //create register User 
         registerUser(email, password)
         .then(result=>{
             console.log(result.user);
             setSuccess('User Created Successfully')
             e.target.reset();
         })
         .catch(error =>{
             console.error(error);
             setRegisterError(error.message);
         })
        }
  
        //  //create register User 
        //  registerUser(email, password)
        //  .then(result=>{
        //      console.log(result.user);
        //      setSuccess('User Created Successfully')
        //      e.target.reset();
        //  })
        //  .catch(error =>{
        //      console.error(error);
        //      setRegisterError(error.message);
        //  })
    }
    return (
        <div>
            <div className="text-center pt-10 w-4/5 md:w-2/3 lg:w-2/6 mx-auto " >
                <div className="relative mb-4 grid h-28 w-full place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-pink-400 to-pink-400 bg-clip-border text-white shadow-lg shadow-pink-500/40">
                    <h1 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">Register</h1>
                </div>
                <div className="border mb-9 pb-3">
                    <form onSubmit={handleRegister} className="mx-auto card-body w-full">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" type="text" placeholder="name" name="name" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" type="text" placeholder="photo" name="photo" required />
                        </div>
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
                            <input className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" type="password" placeholder="password" name="password" required />
                        </div>
                        <div className="form-control mt-6 rounded-lg  bg-gradient-to-tr from-pink-400 to-pink-400 bg-clip-border text-white shadow-lg shadow-pink-500/40">
                            <button className="py-3 px-4 ">Register</button>
                        </div>
                    </form>
                    <p className="mt-2 mb-3 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">Already! Have an Account? Please <Link className="ml-1 block font-sans text-base font-bold leading-normal text-pink-500 antialiased" to="/login"> <button className=""> Login</button></Link></p>
                </div>

            </div>
            {
                registerError && <p className=" text-red-700">{registerError}</p>
            }
            {
                success && <p>{success}</p>
            }
        </div>
    );
};

export default Register;