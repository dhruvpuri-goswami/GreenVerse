import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import plantIcon from "../../../public/icons/plant.png"
export default function Sidebar() {
    return (
        <div className="w-72 h-full py-3 flex flex-col justify-between bg-white border-t-2 border-r-2 shadow-lg">
            <div className="w-full h-[40%] p-2">
                <div class="relative mx-auto w-36 rounded-full">
                    <span class="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"></span>
                    <img class="mx-auto h-auto w-[80px] rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
                </div>
                <h1 class="mt-3 text-center text-lg font-bold leading-5 text-gray-900">Sahil Nayak</h1>
                <h3 class="text-sm text-semibold mt-1 text-center text-gray-600">Marketing Exec. at Denva Corp</h3>
            </div>
            <Button className="mx-5" variant="outline"><Image className="mr-3" width={25} src={plantIcon} /> Know you plant</Button>
        </div>
    )
}
