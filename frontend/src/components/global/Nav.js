import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Nav() {
    return (
        <header class="mb-2 px-4 shadow">
            <div class="relative mx-auto flex max-w-screen-lg flex-col py-4 sm:flex-row sm:items-center sm:justify-between">
                <a class="flex items-center text-2xl font-black" href="/">
                    {/* Image Logo */}
                    <span className='text-primary'>Green<span className='text-secondary'>Verse</span></span>
                </a>
                <input class="peer hidden" type="checkbox" id="navbar-open" />
                <label class="absolute right-0 mt-1 cursor-pointer text-xl sm:hidden" for="navbar-open">
                    <span class="sr-only">Toggle Navigation</span>
                    <FontAwesomeIcon icon={faBars} />
                </label>
                <nav aria-label="Header Navigation" class="peer-checked:block hidden pl-2 py-6 sm:block sm:py-0">
                    <ul class="flex flex-col gap-y-4 sm:flex-row sm:gap-x-8">
                        <li class=""><a class="text-gray-600 hover:text-blue-600" href="#">Home</a></li>
                        <li class="mt-2 sm:mt-0"><a class="rounded-xl border-2 border-blue-600 px-6 py-2 font-medium text-blue-600 hover:bg-blue-600 hover:text-white" href="#">Login</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
