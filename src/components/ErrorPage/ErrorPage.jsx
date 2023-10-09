import { NavLink } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <div className="h-screen flex justify-center items-center text-center bg-rose-200">
                <div>
                    <h1 className="text-5xl pb-5">Oops! You`re lost.</h1>
                    <p className="text-2xl pb-2">The page you are looking for was not found</p>
                    <div className="mt-5  py-3 px-4 bg-rose-500 rounded-md text-xl font-semibold text-white"> 
                    <NavLink to="/">Go Home</NavLink>
                </div>
                </div>
                <br />
                
            </div>
        </div>
    );
};

export default ErrorPage;