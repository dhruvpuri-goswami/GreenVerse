"use client"
import React, { createContext, useState, useContext } from 'react';

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [authData, setAuthData] = useState({
        email: "",
        password: "",
        name: "",
        sex:"Male",
        image:"not specified",
    });

    const signup = async() =>{
        try{
            const res = await fetch("http://localhost:8000/signup/",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(authData)
            });

            const data = await res.json();
            console.log(data);

            //handle route
        }catch(err){
            return {
                error : err.message
            }
        }
    }

    const signin = async() =>{
        try{
            const res = await fetch("http://localhost:8000/signin/",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: authData.email,
                    password: authData.password
                })
            });

            const data = await res.json();
            console.log(data);

            //handle route
        }catch(err){
            return {
                error : err.message
            }
        }
    }
0
    return (
        <AuthContext.Provider value={{ authData, setAuthData ,signin, signup}}>
            {children}
        </AuthContext.Provider>
    );
};

