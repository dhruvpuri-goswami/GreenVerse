"use client"
import React, { useContext, useEffect } from 'react'
import Sidebar from './Sidebar'
import Feed from './Feed'
import { PostContext } from '@/context/PostState';
const userData = localStorage.getItem("user");

export default function DashboardMain() {
    const postContext = useContext(PostContext);
    const { getPosts, posts } = postContext;

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div className='bg-gray-100 h-[88%] w-screen flex items-center justify-between'>
            <Sidebar />
            <div className="w-[90%] h-full flex flex-col">
                <main className="w-full overflow-y-auto flex-grow p-2">
                    {
                        //posts is object of objects
                        Object.keys(posts).map((key) => {
                            return <Feed key={key} post={posts[key]} />
                        })
                    }
                </main>
            </div>
        </div>
    )
}
