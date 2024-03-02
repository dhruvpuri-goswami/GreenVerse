"use client"
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
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
    const [forgetPassEmail,setForgetPassEmail] = useState("");
    const params = useParams();
    const router = useRouter();

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
            if(data.status === 200){
                return data;
            }

            return {
                isError : true,
                error : data.error
            }
            //handle route
        }catch(err){
            return {
                isError : true,
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
            if(data.status === 200){
                return data;
            }

            return {
                isError : true,
                error : data.error
            }
        }catch(err){
            return {
                isError : true,
                error : err.message
            }
        }
    }


    //handling forgot password
    const forgetPassHandle = async(email) =>{
        setForgetPassEmail(email);
        try{
            const res = await fetch("http://localhost:8000/forget-password/",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email
                })
            });

            const data = await res.json();

            return data;
            //handle route
        }catch(err){
            return {
                error : err.message
            }
        }
        
    }

    //handle change password for forget password
    const changePassHandle = async(password) =>{
        console.log(params)
        const uid = params.slug[0];
        const token = params.slug[1];
        console.log(uid,token)
        try{
            const res = await fetch("http://localhost:8000/change-password/",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    password,
                    uid,
                    token
                })
            });

            const data = await res.json();
            if(data.status === 200){
                console.log(data.success);
                return {
                    error : null
                };
            }

            return {
                error : data.error
            }
            //handle route
        }catch(err){
            return {
                error : err.message
            }
        }
    }
0
    return (
        <AuthContext.Provider value={{ authData, setAuthData, signin, signup, forgetPassHandle, changePassHandle}}>
            {children}
        </AuthContext.Provider>
    );
};

