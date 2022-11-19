import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
       return (
        <div className='text-center'>
            <button className="btn loading">loading</button>
        </div>
       )
        // return <h2 className='text-red text-5xl'>Loading...</h2>
    }
    if(user){
        return children
    }
    // if not log in to=/login navigate to login page.
    return <Navigate to='/login' state={{from: location}} replace ></Navigate>
};

export default PrivateRoute;