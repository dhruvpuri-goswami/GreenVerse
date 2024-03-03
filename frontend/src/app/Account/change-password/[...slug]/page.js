import ChangePass from "@/components/accounts/ChangePass"
import Nav from "@/components/global/Nav"
import Image from "next/image"

const page = () => {
  return (
    <div className='w-screen h-screen flex-col items-center justify-center'>
          <Nav />
          <div className='w-screen h-[88%] flex items-center justify-between'>
              <ChangePass />
          </div>
    </div>
  )
}

export default page