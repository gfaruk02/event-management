
import Header from "../Header/Header";



const Home = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Header></Header>
            <div>
                <div className="text-center py-10"> 
                    <h1 className="text-5xl pb-2">WHY CHOOSE US FOR YOUR EVENT?</h1>
                    <p> Event that you will Remember  </p>
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
            <h1>services</h1>
        </div>
    );
};

export default Home;