"use client"
const { createContext, useState } = require("react");

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
    const [postObj,setPostObj] = useState({
        title: "",
        description: "",
        images: [],
        tags: [],
    })

    const addPost = async() => {
        console.log(postObj);
        try{
            //api call
            const res = await fetch('http://localhost:5000/api/addpost',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postObj)
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

    return (
        <PostContext.Provider value={{postObj,setPostObj, addPost}}>
            {children}
        </PostContext.Provider>
    );
}
    