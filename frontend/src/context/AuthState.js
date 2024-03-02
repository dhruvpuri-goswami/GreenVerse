"use client"
import React, { createContext, useState, useContext } from 'react';

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [authData, setAuthData] = useState({
        email: "",
        password: "",
        name: "",
        sex:"Male",
        image:"http://res.cloudinary.com/dk5b3jxve/image/data",
    });
0
    return (
        <AuthContext.Provider value={{ authData, setAuthData }}>
            {children}
        </AuthContext.Provider>
    );
};

