import ForgetPass from '@/components/accounts/ForgetPass'
import Nav from '@/components/global/Nav'
import React from 'react'

const page = () => {
  return (
    <div className='w-screen h-screen flex-col items-center justify-center'>
            <Nav />
            <div className='w-screen h-[88%] flex items-center justify-between'>
                {/* <Image /> */}
                <ForgetPass />
            </div>
    </div>
  )
}

export default page