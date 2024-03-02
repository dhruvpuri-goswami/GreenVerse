import React from 'react'
import Sidebar from './Sidebar'
import Feed from './Feed'

export default function DashboardMain() {
    return (
        <div className='bg-gray-100 h-[88%] w-screen flex items-center justify-between'>
            <Sidebar />
            <div className="w-[90%] h-full flex flex-col">
                <main className="w-full overflow-y-auto flex-grow p-2">
                    <Feed />
                    <Feed />
                    <Feed />
                    <Feed />
                    <Feed />
                    <Feed />
                    <Feed />
                </main>
            </div>
        </div>
    )
}
