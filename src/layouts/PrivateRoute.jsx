import React, { use } from 'react';
import { ProviderContext } from '../providers/ProviderContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../components/Loading/Loading';

const PrivateRoute = ({children}) => {
    const {profile, loading} = use(ProviderContext)
    const location = useLocation();
    
    if (loading) {
        return <Loading />
    }

    if (!profile) {
        return <Navigate state={location.pathname} to="/auth/login"></Navigate>
    }
    return children;
};

export default PrivateRoute;