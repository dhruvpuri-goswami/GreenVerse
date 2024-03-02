import DashboardMain from '@/components/dashboard/DashboardMain'
import DashboardNav from '@/components/dashboard/DashboardNav'
import React from 'react'

export default function page() {
    return (
        <div className='w-screen h-screen flex-col items-center justify-between'>
            <DashboardNav />
            <DashboardMain />
        </div>
    )
}
