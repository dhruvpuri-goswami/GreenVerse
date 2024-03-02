import { faBars, faGlobe, faMessage, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function DashboardNav() {
    return (
        <header className="px-4 h-[12%] shadow">
            <div className="relative mx-auto flex max-w-screen-lg flex-col py-4 sm:flex-row sm:items-center sm:justify-between">
                <a className="flex items-center text-2xl font-black" href="/">
                    {/* Image Logo */}
                    <span className='text-primary_theme_theme'>Green<span className='text-secondary_theme_theme'>Verse</span></span>
                </a>
                <input className="peer hidden" type="checkbox" id="navbar-open" />
                <label className="absolute right-0 mt-1 cursor-pointer text-xl sm:hidden" for="navbar-open">
                    <span className="sr-only">Toggle Navigation</span>
                    <FontAwesomeIcon icon={faBars} />
                </label>
                <nav aria-label="Header Navigation" className="peer-checked:block hidden pl-2 py-6 sm:block sm:py-0">
                    <ul className="flex flex-col items-center font-medium gap-y-4 sm:flex-row sm:gap-x-8">
                        <li className="w-max h-max">
                            <a className="text-slate-800 hover:text-primary_theme_theme flex items-center justify-center" href="#">Home</a></li>
                        <li className="w-max h-max">
                            <a className="text-slate-800 hover:text-primary_theme_theme flex items-center justify-center" href="#">
                                Message</a></li>
                        <li className="w-max h-max">
                            <a className="text-slate-800 hover:text-primary_theme_theme flex items-center justify-center" href="#">
                                Explore</a></li>
                        <li className="w-max h-max">
                            <a className="text-slate-800 hover:text-primary_theme_theme flex items-center justify-center" href="#">
                                Profile</a></li>
                        <li className="w-max h-max">
                            <a className="text-slate-800 hover:text-primary_theme_theme flex items-center justify-center" href="#">Create</a></li>
                        <li className="mt-2 sm:mt-0"><a className="rounded-xl border-2 border-primary_theme px-6 py-2 font-medium text-primary_theme-theme hover:bg-primary_theme hover:text-white flex" href="#">Logout</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
