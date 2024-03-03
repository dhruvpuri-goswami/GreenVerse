import Signin from '@/components/accounts/Signin'
import Nav from '@/components/global/Nav'
import Image from 'next/image'
import React from 'react'
import signInImage from "../../../../public/SignIn.png"

export default function page() {
    return (
        <div className='w-screen h-screen flex-col items-center justify-center'>
            <Nav />
            <div className='w-screen h-[88%] flex items-center justify-evenly'>
                <Image width={300} src={signInImage} />
                <Signin />
            </div>
        </div>
    )
}
