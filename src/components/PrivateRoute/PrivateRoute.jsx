import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const localtion = useLocation();

    if(loading){
        return <span className="loading loading-infinity loading-lg"></span>
    }
    if(user){
        return children;
    }
    return <Navigate state={localtion.pathname} to="/login"></Navigate>
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node
}