
import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
// import { useState } from "react";
import Services from "../Services/Services";



const Home = () => {
    const servicesData = useLoaderData();

    // const [services, setServices] = useState([]);
    return (
        <div className='w-11/12 mx-auto'>
            <Header></Header>
            <div>
                <div className="text-center py-10"> 
                    <h1 className="text-5xl pb-2 text-rose-600 font-bold">WHY CHOOSE US FOR YOUR EVENT?</h1>
                    <p className="md:py-5 px-16"> Organizing a successful event requires careful planning, creativity, and attention to detail. At [Your Event Company Name], we understand that you have many choices when it comes to event planning and management.  </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10"> 
                    <div className="border-r-2 pr-2">
                        <h3 className="text-2xl pb-2">ALL KIND OF LOGISTICS AND RESOURCES SUPPORT</h3>
                        <p className="pb-5">As an experienced Event Management company, we have all kind of Event equipment, logistics and resources available for your cultural celebrations programing </p>
                        <img className="pr-2" src={`https://i.ibb.co/cygLzJW/almonte-celtfest-scaled.jpg`} alt="" />
                    </div>
                    <div>
                    <img src={`https://i.ibb.co/J3GdW3F/1.jpg`} alt="" />
                        <h3 className="text-2xl pb-2 pt-5">EXPERIENCED EVENT PLANNER AND MANAGER</h3>
                        <p>When it is about making your Event successful, it is all about making a good plan, managing and executing successfully. And, we have experienced who will make your event unique and memorable!</p>
                    </div>
                </div>
            </div>
            <div> 
                <h1 className="text-5xl text-center py-10 text-rose-600 font-bold">Our Services</h1>
                <p className="text-center px-10 pb-5">At [Your Event Company Name], we offer a comprehensive range of services to meet all your event planning and management needs. Whether you are organizing a corporate conference, a wedding, a cultural celebration, or any other type of event, our experienced team is here to make it a seamless and memorable experience. Here are the services we provide:</p>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-3 ">
                {
                    servicesData.map(service => <Services key={service.id} service={service} ></Services>)
                }
            </div>
            {/* <h1>services</h1> */}
            <div className="hero mt-10 pt-5 bg-rose-100 mb-5 rounded-lg">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-xl font-bold pb-5">Your Next Event Place</h1>
      <h1 className="text-4xl font-bold text-rose-600">Book Our service Today!</h1>
      <p className="py-6">Our attractive, space invites your guests to be a part of a heavily invested event.</p>
      <button className="py-4 px-6 rounded-xl  bg-rose-600 hover:bg-rose-400 text-xl text-white font-semibold ">Get Booking</button>
      <div className="p-10"> 
        <h2 className=" text-3xl pb-2">Call Us At</h2>
        <p className="text-rose-600 text-lg">01718000000</p>
    </div>
    </div>
    
  </div>
</div>
        </div>
    );
};

export default Home;