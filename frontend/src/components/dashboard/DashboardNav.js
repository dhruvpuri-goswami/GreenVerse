"use client"
import { AuthContext } from '@/context/AuthState';
import { faBars, faGlobe, faMessage, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useContext } from 'react'

export default function DashboardNav() {
    const { setUser } = useContext(AuthContext);
    const pathname = usePathname();
    console.log(pathname)
    const router = useRouter();
    const handleLogOut = () =>{
        localStorage.removeItem('user');
        setUser(null);
        router.push('/Account/Login');
    }

    return (
        <header className="px-4 h-[12%] shadow">
            <div className="relative mx-auto flex max-w-screen-lg flex-col py-4 sm:flex-row sm:items-center sm:justify-between">
                <a className="flex items-center text-2xl font-black" href="/">
                    {/* Image Logo */}
                    <span className='text-primary_theme'>Green<span className='text-secondary_theme'>Verse</span></span>
                </a>
                <input className="peer hidden" type="checkbox" id="navbar-open" />
                <label className="absolute right-0 mt-1 cursor-pointer text-xl sm:hidden" for="navbar-open">
                    <span className="sr-only">Toggle Navigation</span>
                    <FontAwesomeIcon icon={faBars} />
                </label>
                <nav aria-label="Header Navigation" className="peer-checked:block hidden pl-2 py-6 sm:block sm:py-0">
                    <ul className="flex flex-col items-center font-medium gap-y-4 sm:flex-row sm:gap-x-8">
                        <li className="w-max h-max">
                            <Link className={`${pathname.replace('/','') === "Dashboard" ? "text-[#23c856]" : "text-slate-800"} hover:text-primary_theme flex items-center justify-center`} href="/Dashboard">Dashboard</Link></li>
                        <li className="w-max h-max">
                            <Link className={`${pathname.replace('/','') === "Message" ? "text-[#23c856]" : "text-slate-800"} hover:text-primary_theme flex items-center justify-center`} href="#">
                                Message</Link></li>
                        <li className="w-max h-max">
                            <Link className={`${pathname.replace('/','') === "Explore" ? "text-[#23c856]" : "text-slate-800"} hover:text-primary_theme flex items-center justify-center`} href="#">
                                Explore</Link></li>
                        <li className="w-max h-max">
                            <Link className={`${pathname.replace('/','') === "Profile" ? "text-[#23c856]" : "text-slate-800"} hover:text-primary_theme flex items-center justify-center`} href="#">
                                Profile</Link></li>
                        <li className="w-max h-max">
                            <Link className={`${pathname.replace('/','') === "Post" ? "text-[#23c856]" : "text-slate-800"} hover:text-primary_theme flex items-center justify-center`} href="/Post">Post</Link></li>
                        <li className="mt-2 sm:mt-0">
                            <button className="rounded-xl border-2 border-primary_theme px-6 py-2 font-medium text-primary_theme hover:bg-primary_theme hover:text-white flex" onClick={handleLogOut}>
                                Logout
                            </button>
                            </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
