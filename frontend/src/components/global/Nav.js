import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Nav() {
    return (
        <header className="mb-2 px-4 shadow">
            <div className="relative mx-auto flex max-w-screen-lg flex-col py-4 sm:flex-row sm:items-center sm:justify-between">
                <a className="flex items-center text-2xl font-black" href="/">
                    {/* Image Logo */}
                    <span className='text-primary'>Green<span className='text-secondary'>Verse</span></span>
                </a>
                <input className="peer hidden" type="checkbox" id="navbar-open" />
                <label className="absolute right-0 mt-1 cursor-pointer text-xl sm:hidden" htmlFor="navbar-open">
                    <span className="sr-only">Toggle Navigation</span>
                    <FontAwesomeIcon icon={faBars} />
                </label>
                <nav aria-label="Header Navigation" className="peer-checked:block hidden pl-2 py-6 sm:block sm:py-0">
                    <ul className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-8">
                        <li className=""><a className="text-gray-600 hover:text-primary_theme" href="#">Home</a></li>
                        <li className="mt-2 sm:mt-0"><a className="rounded-xl border-2 border-primary_theme px-6 py-2 font-medium text-slate-800 hover:bg-primary_theme hover:text-white" href="#">Login</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
