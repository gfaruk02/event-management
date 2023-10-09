
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const Details = () => {
    const { id } = useParams();
    const services = useLoaderData();
    console.log(services);
    const [service, setService] = useState([])
    useEffect(() => {
        const singleService = services?.find(service => service.id === id)
        setService(singleService)

    }, [id, services])
    console.log(service);


    return (
        <div className="max-w-7xl mx-auto">
            <div> 
                <div className=" "> 
                    <img className="h-[90vh] w-full" src={service.image} alt="" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-2 pt-14 pb-5 gap-9"> 
                <h1 className="text-2xl font-bold pb-2 text-right"> {service.name}</h1>
                <p className="flex justify-end"> <span className="bg-rose-500 px-5 py-3 rounded-lg text-xl font-semibold text-white"> Price: $ {service.price}</span> </p>
                </div>
                <div className="px-56 text-center"> 
                    {service.description}
                </div>
            </div>


            <div className=" flex items-center gap-4 bg-rose-300 mt-10 rounded-lg mb-10">
                <div className="w-1/2 p-6">
                    <img className="rounded-lg" src={`https://i.ibb.co/z8MZryX/Great-Hall-Custom-Setup-01-1.png`} alt="" />
                </div>
                <div className="pl-4">
                    <div >  
                    <h1 className="text-2xl font-semibold pb-2">All Celebration Packages Include</h1>
                    <ul className="text-base leading-6 list-disc">
                        <li>Set up and breakdown of standard tables and chairs in our inventory</li>
                        <li> Selection of linens</li>
                        <li>Flexible space for buffet and desert areas</li>
                        <li>Clean restroom facilities</li>
                        <li>Complimentary self-parking on-site</li>
                        <li>High speed Wi-Fi access</li>
                        <li> Venue time for rehearsal, based on availability</li>
                    </ul>
                    </div>
                    <div> 
                    <h1 className="text-2xl font-semibold pb-2">Rental Fees Do Not Include</h1>
                    <ul className="text-base leading-6 list-disc">
                        <li>Full Coordination/planner services</li>
                        <li>Food and Beverage</li>
                        <li>Waiters and barmen</li>
                        <li>Flowers and décor</li>
                        <li>Bar setup, please ask us about bar service</li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;