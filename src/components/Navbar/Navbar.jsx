import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import userDefaultPicture from "../../assets/user.png"

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }
    
    const navLinks = <>
        <li className="font-semibold font-poppins "> <NavLink to="/" style={isActive => ({
            color: isActive ? "white" : "DarkSlateBlue"
        })} > Home</NavLink> </li>
        <li className="font-semibold font-poppins "> <NavLink to="/login" style={isActive => ({
            color: isActive ? "white" : "DarkSlateBlue"
        })} > Login</NavLink> </li>
        <li className="font-semibold font-poppins "> <NavLink to="/register" style={isActive => ({
            color: isActive ? "white" : "DarkSlateBlue"
        })} > Register</NavLink> </li>
        {
            user &&
            <>
                <li className="font-semibold font-poppins "> <NavLink to="/about" style={isActive => ({
                    color: isActive ? "white" : "DarkSlateBlue"
                })} > About Us</NavLink> </li>
                <li className="font-semibold font-poppins "> <NavLink to="/contact" style={isActive => ({
                    color: isActive ? "white" : "DarkSlateBlue"
                })} > Contact US</NavLink> </li>
            </>
        }
        <li className="font-semibold font-poppins "> <NavLink to="/blog" style={isActive => ({
            color: isActive ? "white" : "DarkSlateBlue"
        })} > Blog</NavLink> </li>
    </>
    return (
        <div className="navbar bg-rose-900 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-2xl text-white">
                    Cultural Rhythms
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 ">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">


                {
                    user ?
                        <>

                            <span> {user.email} </span>
                            <div className="w-10 rounded-full mx-2">
                                <img src={userDefaultPicture} />
                            </div>
                            <button onClick={handleSignOut} className=" py-2 px-4 bg-rose-700 rounded-lg hover:bg-rose-400  text-white font-semibold">Sign Out</button>
                        </>
                        :
                        <Link to='/login'>
                            <button className=" bg-rose-700 rounded-lg hover:bg-rose-400 text-white font-semibold py-2 px-4">Login</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;