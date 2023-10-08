

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/Z24tkbd/home-banner1.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">About Us</h1>
                        <p className="mb-5">Welcome to [Your Cultural Celebration Event]! We are passionate about promoting cultural diversity and fostering a sense of unity through vibrant and memorable celebrations of the worlds rich heritage.</p>
                        <button className="py-4 px-6 rounded-xl  bg-rose-600 hover:bg-rose-400">Booking </button>
                    </div>
                </div>

            </div>
            <div className="hero min-h-screen bg-base-200 pt-0 mt-0">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={`https://i.ibb.co/3zBbjCY/relaxation-banner.jpg`} className="max-w-xl h-96 rounded-lg shadow-2xl" />
                    <div className="md:p-8">
                        <h1 className="text-3xl text-rose-700 font-bold">Our Mission</h1>
                        <p className="py-6 ">At [Your Cultural Celebration Event], our mission is to create extraordinary experiences that bring people from all backgrounds together to celebrate the beauty of cultural diversity. We believe that by sharing the traditions, art, music, and flavors of different cultures, we can build bridges of understanding and appreciation.</p>
                    </div>
                </div>
            </div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <img src={`https://i.ibb.co/1zncg9C/IMG-2979.jpg`} className="max-w-xl h-96 rounded-lg shadow-2xl" />
                    <div className="lg:ml-10 lg:pr-10">
                        <h1 className="text-3xl text-rose-700 font-bold">Our Story</h1>
                        <p className="py-6">Founded by a group of cultural enthusiasts, [Your Cultural Celebration Event] was born out of a shared love for the arts, traditions, and customs that make each culture unique. Our journey began with a vision of creating a space where people of all backgrounds could come together to learn, engage, and celebrate.</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;