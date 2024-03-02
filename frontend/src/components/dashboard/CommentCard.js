import React from 'react'
import {
    Card
} from "@/components/ui/card"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReply } from '@fortawesome/free-solid-svg-icons'
export default function CommentCard() {
    return (
        <Card className="my-5">
            <div class="p-3 w-full text-left">
                <div class="mb-2 flex flex-col justify-between text-gray-600 sm:flex-row">
                    <h3 class="font-bold text-[13px]">Diana Anderson</h3>
                    <button class="cursor-pointer px-4 text-center text-xs leading-tight transition-colors duration-150 ease-in-out border border-transparent hover:border-gray-500 rounded-lg font-bold">
                        <FontAwesomeIcon className='mr-2' icon={faReply} />
                        Reply
                    </button>
                </div>
                <p class="text-[13px]">Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
                <div class="mt-2 flex items-center justify-between text-gray-600">
                    <time class="text-xs" datetime="2022-11-13T20:00Z">July 18, 2022 at 10:36 AM</time>
                </div>
            </div>
        </Card>
    )
}
