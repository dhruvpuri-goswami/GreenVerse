"use client"
import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import plantIcon from "../../../public/icons/plant.png"
import { useLocalStorage } from '@/lib/useLocalStorage'
export default function Sidebar() {
    const [user, setUser] = useLocalStorage("user");
    const userData = user;
    return (
        <div className="w-72 h-full py-3 flex flex-col justify-between bg-white border-t-2 border-r-2 shadow-lg">
            <div className="w-full h-[40%] p-2">
                <div class="relative mx-auto w-36 rounded-full">
                    <span class="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"></span>
                    {
                        userData?.img && userData.img !== "not specified" ? 
                        <Image
                        src={userData.img}
                        alt="Profile_Img"
                        width={500}
                        height={300}
                        className='rounded-full'
                        layout="responsive"
                        />
                        :
                        <Image
                        src="http://res.cloudinary.com/dwp77pami/image/upload/v1709445044/greenverse/users/profile/default_profile_img.png"
                        alt="Profile_Img"
                        width={500}
                        height={300}
                        className='rounded-full'
                        layout="responsive"
                        />
                    }   
                </div>
                <h1 class="mt-3 text-center text-lg font-bold leading-5 text-gray-900">{userData.name}</h1>
                <h3 class="text-sm text-semibold mt-1 text-center text-gray-600">Marketing Exec. at Denva Corp</h3>
            </div>
            <Button className="mx-5" variant="outline"><Image className="mr-3" width={25} src={plantIcon} /> Know you plant</Button>
        </div>
    )
}
