import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Foooter from '../Footer/Footer';
import { ContextProvider } from '../AuthProviders/AuthProvider';

const Root = () => {
    const {isDark} = useContext(ContextProvider);
    return (
        <div className={`relative font-lato ${isDark ? 'bg-dark' : 'bg-light'}`}>
        
            <Header/>
            <Outlet/>
            <Foooter/>
        </div>
    );
};

export default Root;