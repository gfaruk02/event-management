

const Blog = () => {
    return (
        <div className=' mt-3 lg:mt-10'>
            <div className='grid grid-cols-3'>
                <div className='col-span-2 px-1 lg:px-5 my-3 '>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <img src={'https://i.ibb.co/1zncg9C/IMG-2979.jpg'} className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                        <h1 className="text-3xl font-bold">Cultural Dance Workshops</h1>
                        <p className="py-6">At Your Cultural Dance Workshop, we offer an immersive and enriching experience for individuals and groups interested in exploring the world of cultural dance. Our workshops are designed to celebrate the diversity of dance traditions from around the globe while promoting cultural understanding and appreciation.</p>
                        </div> 
                    </div>
                    <br />
                    <br />
                    <hr />
                    <div className="grid grid-cols-1 md:grid-cols-2 mt-3 md:mt-10">
                        <div>
                        <h1 className="text-3xl font-bold">Cultural Art Exhibition</h1>
                        <p className="py-6">At Your Cultural Dance Workshop, we offer an immersive and enriching experience for individuals and groups interested in exploring the world of cultural dance. Our workshops are designed to celebrate the diversity of dance traditions from around the globe while promoting cultural understanding and appreciation.</p>
                        </div> 
                        <img src={'https://i.ibb.co/zGYKpbw/exhibition-on-dong-ho-folk-paintings.jpg'} className="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div>

                    </div>
                </div>

                <div className="text-center mb-10 mx-auto border p-3">
                    <h1 className="text-2xl py-3">Latest Calibration</h1>
                    <div className="card w-96 bg-base-100 shadow-xl mb-5">
                        <figure><img src={'https://i.ibb.co/g47fT9P/71368897-Traditional-dance-performance-in-the-Sarawak-Cultural-Village-Kampung-Budaya-Sarawak-near-K.jpg'} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Traditional Dance Performance</h2>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl ">
                        <figure><img src={'https://i.ibb.co/cygLzJW/almonte-celtfest-scaled.jpg'} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Today Program</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;