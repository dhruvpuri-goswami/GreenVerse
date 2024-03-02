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

    const addPost = async(uploadedImages) => {
        console.log(postObj);
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
                    tags: postObj.tags
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

    return (
        <PostContext.Provider value={{postObj,setPostObj, addPost}}>
            {children}
        </PostContext.Provider>
    );
}
    