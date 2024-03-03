"use client"

import { useRouter } from "next/navigation";
import { getUser } from "./AuthState";
import { useLocalStorage } from "@/lib/useLocalStorage";

const { createContext, useState, useEffect } = require("react");

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
    const [postObj,setPostObj] = useState({
        title: "",
        description: "",
        images: [],
        tags: [],
    });
    const router = useRouter();
    const user = useLocalStorage("user");
            
    const [posts, setPosts] = useState([]);

    const addPost = async(uploadedImages) => {
        console.log(user)
        try{
            //api call
            const res = await fetch('http://localhost:8000/add-post/',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: postObj.title,
                    description: postObj.description,
                    images: uploadedImages,
                    tags: postObj.tags,
                    user: user[0]?.email,
                    username: user[0]?.name
                })
            });
            const data = await res.json();
            console.log(data);
            
            if(data.status === 200){
                return data;
            }

            return {
                isError: true,
                error: data.error
            }
        }catch(err){
            return {
                isError: true,
                error: err.message
            }
        }
    }

    const getPosts = async(limit = 5) => {
        try{
            const res = await fetch(`http://localhost:8000/posts/limited/?limit=${limit}`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const data = await res.json();
            console.log(data)
            
            if(data.status === 200){
                setPosts(data.posts);
                console.log(data);
            }
        }catch(err){
            console.log(err);
        }
    }

    return (
        <PostContext.Provider value={{postObj,setPostObj, addPost, getPosts , posts}}>
            {children}
        </PostContext.Provider>
    );
}
    