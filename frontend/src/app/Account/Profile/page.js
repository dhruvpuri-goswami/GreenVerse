import { Profile } from '@/components/accounts/Profile'
import Nav from '@/components/global/Nav'
import React from 'react'

export default function page() {
  return (
    <div className='w-screen h-screen flex-col items-center justify-center'>
      <Nav />
      <Profile />
    </div>
  )
}
