import ChangePass from "@/components/accounts/ChangePass"
import Nav from "@/components/global/Nav"

const page = () => {
  return (
    <div className='w-screen h-screen flex-col items-center justify-center'>
            <Nav />
            <ChangePass />
    </div>
  )
}

export default page