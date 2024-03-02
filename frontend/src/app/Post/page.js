import DashboardNav from '@/components/dashboard/DashboardNav'
import { AddPost } from '@/components/post/AddPost'
import React from 'react'

export default function page() {
  return (
    <div className='w-screen h-screen flex-col items-center justify-between'>
        <DashboardNav />
        <AddPost />
    </div>
  )
}
