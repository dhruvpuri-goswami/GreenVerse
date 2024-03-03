"use client"
import { AuthContext } from '@/context/AuthState';
import { faBars, faGlobe, faMessage, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useContext } from 'react'
import logo from "../../../public/logo.png"
import Image from 'next/image'

export default function DashboardNav() {
    const { setUser } = useContext(AuthContext);
    const pathname = usePathname();
    const router = useRouter();
    const handleLogOut = () => {
        localStorage.removeItem('user');
        setUser(null);
        router.push('/Account/Signin');
    }

    return (
        <header className="px-4 h-[12%] bg-[#002E1C] text-white shadow">
            <div className="relative mx-auto flex max-w-screen-lg flex-col py-4 sm:flex-row sm:items-center sm:justify-between">
                <a className="flex items-center text-2xl font-black" href="/">
                    {/* Image Logo */}
                    <Image src={logo} width={150} />
                </a>
                <input className="peer hidden" type="checkbox" id="navbar-open" />
                <label className="absolute right-0 mt-1 cursor-pointer text-xl sm:hidden" for="navbar-open">
                    <span className="sr-only">Toggle Navigation</span>
                    <FontAwesomeIcon icon={faBars} />
                </label>
                <nav aria-label="Header Navigation" className="peer-checked:block hidden pl-2 py-6 sm:block sm:py-0">
                    <ul className="flex flex-col items-center font-medium gap-y-4 sm:flex-row sm:gap-x-8">
                        <li className="w-max h-max">
                            <Link className={`${pathname.replace('/', '') === "Dashboard" ? "text-[#23c856]" : "text-white"} -center justify-center`} href="/Dashboard">Dashboard</Link></li>
                        <li className="w-max h-max">
                            <Link className={`${pathname.replace('/', '') === "Message" ? "text-[#23c856]" : "text-white"} -center justify-center`} href="#">
                                Message</Link></li>
                        <li className="w-max h-max">
                            <Link className={`${pathname.replace('/', '') === "Explore" ? "text-[#23c856]" : "text-white"} -center justify-center`} href="#">
                                Explore</Link></li>
                        <li className="w-max h-max">
                            <Link className={`${pathname.replace('/', '') === "Profile" ? "text-[#23c856]" : "text-white"} -center justify-center`} href="#">
                                Profile</Link></li>
                        <li className="w-max h-max">
                            <Link className={`${pathname.replace('/', '') === "Post" ? "text-[#23c856]" : "text-white"} -center justify-center`} href="/Post">Post</Link></li>
                        <li className="mt-2 sm:mt-0">
                            <button className="rounded-xl border-2 border-secondary_theme px-6 py-2 font-medium text-white flex" onClick={handleLogOut}>
                                Logout
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
