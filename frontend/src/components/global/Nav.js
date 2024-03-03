import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import logo from "../../../public/logo.png"
import Image from 'next/image'

export default function Nav() {
    return (
        <header className="px-4 shadow bg-[#002E1C] text-white">
            <div className="relative mx-auto flex max-w-screen-lg flex-col py-4 sm:flex-row sm:items-center sm:justify-between">
                <a className="flex items-center text-2xl font-black" href="/">
                    {/* Image Logo */}
                    <Image src={logo} width={150}/>
                    {/* <span className='text-primary_theme -ml-1 mt-3'>reen<span className='text-secondary_theme'>Verse</span></span> */}
                </a>
                <input className="peer hidden" type="checkbox" id="navbar-open" />
                <label className="absolute right-0 mt-1 cursor-pointer text-xl sm:hidden" htmlFor="navbar-open">
                    <span className="sr-only">Toggle Navigation</span>
                    <FontAwesomeIcon icon={faBars} />
                </label>
                <nav aria-label="Header Navigation" className="peer-checked:block hidden pl-2 py-6 sm:block sm:py-0">
                    <ul className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-8">
                        <li className=""><a className="hover:text-white" href="#">Home</a></li>
                        <li className="mt-2 sm:mt-0"><Link className="rounded-xl border-2 border-secondary_theme px-6 py-2 font-medium hover:bg-secondary_theme hover:text-white" href="/Account/Signin">Login</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
