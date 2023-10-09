
import { FaBook, FaMailBulk, FaPhone } from 'react-icons/fa';
const Contact = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/J3GdW3F/1.jpg)' }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md ">
                        <div>
                            <h1 className="mb-5 text-5xl font-bold">Contact Us</h1>
                            <p className="mb-5">Thank you for your interest in getting in touch with us. We value your feedback, questions, and inquiries. Please use the following contact information or the provided contact form to reach us:</p>
                            <button className="py-4 px-6 rounded-xl  bg-rose-600 
                                    hover:bg-rose-400 ">Get Started</button>
                        </div>

                    </div>
                </div>
            </div>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto items-center">
                <div className='mx-auto'> 
                <div className='flex gap-4 items-center pb-10'> 
                    <FaBook className='text-rose-500 text-2xl'></FaBook>
                    <div> 
                        <h4 className="text-xl pb-3 text-rose-600"> Address:</h4>
                        <p> 260/Cultur , Dhaka, Bangladesh</p>
                    </div>
                </div>
                <div className='flex gap-4 items-center  pb-10'> 
                    <FaPhone className='text-rose-500 text-2xl'></FaPhone>
                    <div> 
                        <h4 className="text-xl pb-3 text-rose-600"> Phone:</h4>
                        <p> 01710110000</p>
                        <p> 01810110000</p>
                    </div>
                </div>
                <div className='flex gap-4 items-center  pb-10'> 
                    <FaMailBulk className='text-rose-500 text-2xl'></FaMailBulk>
                    <div> 
                        <h4 className="text-xl pb-3 text-rose-600"> Email:</h4>
                        <p>admin@culturalcelebration.com</p>
                    </div>
                </div>
                </div>
                <div className="hero min-h-screen">

                    <div className="hero-content">
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <h1 className=" text-rose-600 font-semibold text-center text-2xl pt-2">Send Message</h1>
                            <form className="card-body text-neutral-900">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Name" name="Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Type Message</span>
                                    </label>
                                    <textarea placeholder="Write Your Message" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary  bg-rose-600 
                                    hover:bg-rose-400 ">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;