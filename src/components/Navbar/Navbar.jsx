import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then(()=> console.log('User Logged Out Successfully'))
            .catch(error=> console.error(error))
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
        <div className="navbar bg-rose-900 lg:pl-12 lg:pr-5">
            <div className="navbar-start">
                <div className="dropdown ">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden mr-0 pr-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-4" fill="none" viewBox="0 0 20 20" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-rose-900">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case md:text-2xl text-white ml-0 pb-0">
                    Cultural Calibration
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 ">
                    {navLinks}
                </ul>
            </div>
            




{/* 
            <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
 */}







            <div className="navbar-end">
                {
                    user ?
                        <>
                        
            <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
        <img src={user.photoURL} />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-rose-900 rounded-box w-52">
        <li>
        <span className=" text-white "> {user.displayName} </span>
        </li>
        <li>
        <span className=" text-white "> {user.email} </span>
        </li>
        <li><button onClick={handleSignOut} className=" py-1 px-2 md:py-2 md:px-4 bg-rose-700 rounded-lg hover:bg-rose-400  text-white font-semibold text-sm md:text-base">Sign Out</button></li>
      </ul>
    </div>
                        </>
                        :
                        <Link to='/login'>
                            <button className=" bg-rose-700 rounded-lg hover:bg-rose-400 text-white font-semibold py-1 px-2 md:py-2 md:px-4 text-sm md:text-base">Login</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;