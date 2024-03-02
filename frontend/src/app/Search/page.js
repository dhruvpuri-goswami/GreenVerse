import DashboardNav from '@/components/dashboard/DashboardNav'
import SearchInpt from '@/components/search/SearchInpt'
import LoadResult from '@/components/search/LoadResult'
import React from 'react'

export default function page() {
  return (
    <div className='w-screen h-screen flex-col items-center justify-between'>
        <DashboardNav />

        <div className='w-full h-[88%] p-3 flex flex-col items-center justify-between'>
            <SearchInpt />
            <LoadResult />
        </div>
    </div>
  )
}
