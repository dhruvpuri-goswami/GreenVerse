import React from 'react'

export default function ResultPostCard() {
    return (
        <div class="group my-3 w-full h-[130px] flex items-center justify-between overflow-hidden rounded-lg border py-4 text-gray-700 shadow transition hover:shadow-lg sm:mx-auto">
            <div class="flex flex-col pr-8 text-left sm:pl-4">
                <h3 class="text-sm text-gray-600">@sahilNayak</h3>
                <a href="#" class="mt-2 overflow-hidden text-base font-semibold sm:text-lg"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui incidunt quas eius possimus maxime exercitationem. </a>
                <p class="overflow-hidden text-sm">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.</p>
                <div class="mt-2 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
                    <div class="">Reacted:<span class="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900"> 2+ </span></div>
                </div>
            </div>
        </div>
    )
}
