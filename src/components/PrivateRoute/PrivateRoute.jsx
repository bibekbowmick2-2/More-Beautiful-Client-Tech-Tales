import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { ContextProvider } from '../AuthProviders/AuthProvider';

const PrivateRoute = ({children}) => {
   const{user,loading} =useContext(ContextProvider);
   if(user){
    return children;
   }
   if(loading){
    return <div className="max-w-lg lg:max-w-lg mx-auto"><span className="loading loading-spinner loading-lg "></span></div> 
   }
    return (
        <div>
            <Navigate to="/"></Navigate>
        </div>
    );
};

export default PrivateRoute;