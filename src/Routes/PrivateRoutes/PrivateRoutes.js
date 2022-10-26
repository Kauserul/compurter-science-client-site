import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Spinner from 'react-bootstrap/Spinner';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <div className='w-100 d-flex align-items-center justify-content-center'>
                <Spinner animation="border" variant="primary" />
            </div>
    }

    if(user){
        return children
    }
    return <Navigate to='/login' state={{from : location}} replace></Navigate>
};

export default PrivateRoutes;