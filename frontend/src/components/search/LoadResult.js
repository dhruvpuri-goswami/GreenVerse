import React from 'react'
import { Button } from '../ui/button'
import ResultPostCard from './ResultPostCard'

export default function LoadResult() {
    return (
        <div className='m-auto w-[80vw] h-[88%] p-5 flex flex-col border rounded items-center justify-between'>
            <div className='w-full'>
                <p className='text-slate-900 font-medium flex w-full justify-between items-center mb-3'>
                    <span className='block'>Ai Generated Result:</span>
                    <Button variant="outline">Generate</Button>
                </p>
                <p className='text-[14px] text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aliquam eligendi illum molestiae quia tempore, nobis optio nesciunt veritatis asperiores fugit, cupiditate sequi sunt quaerat voluptatem nihil dolorem incidunt iusto.</p>
            </div>
            <div className='w-full h-[400px] overflow-y-auto'>
                <p className='text-slate-900 font-medium flex w-full justify-between items-center my-3'>
                    <span className='block'>User Post Result:</span>
                </p>
                <ResultPostCard />
                <ResultPostCard />
                <ResultPostCard />
                <ResultPostCard />
            </div>
        </div>
    )
}
