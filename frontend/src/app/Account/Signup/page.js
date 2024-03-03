import { Signup } from '@/components/accounts/Signup'
import Nav from '@/components/global/Nav'
import React from 'react'
import signUpImage from "../../../../public/SignUp.png"
import Image from 'next/image'

export default function page() {
    return (
        <div className='w-screen h-screen flex-col items-center justify-center'>
            <Nav />
            <div className='w-screen h-[88%] flex items-center justify-evenly'>
                <Image width={400} src={signUpImage} />
                <Signup />
            </div>
        </div>
    )
}
