import React from 'react'
import { Button } from '../ui/button'
import ResultPostCard from './ResultPostCard'
import { Input } from '../ui/input'

export default function LoadResult() {
    return (
        <div className='m-auto w-[80vw] h-[88%] p-5 flex flex-row-reverse border rounded items-center justify-between'>
            <div className='w-full h-full flex flex-col justify-between items-center ml-5'>
                <div className='w-full h-[88%]'>
                    <p className='text-slate-900 font-medium mb-3'>
                        <span className='block'>Ai Generated Result:</span>
                    </p>
                    <p className='text-[14px] h-[90%] overflow-y-auto text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aliquam eligendi illum molestiae quia tempore, nobis optio nesciunt veritatis asperiores fugit, cupiditate sequi sunt quaerat voluptatem nihil dolorem incidunt iusto.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, quod neque dolore illo voluptas ut! Ratione facere voluptatibus delectus voluptate quia consectetur asperiores, nam voluptatum voluptates qui, sint, officiis veniam ullam ipsa cum. Impedit illum eligendi obcaecati ea laborum error a, id temporibus illo cum esse ut ratione placeat porro iste inventore quisquam autem repellendus odit cumque? Dicta ullam vitae, architecto quia non nobis iusto rem quaerat eaque molestiae ducimus nesciunt inventore quo molestias voluptatibus repellat quidem quam aut in asperiores eligendi dolores tempore cumque accusamus? Perspiciatis excepturi exercitationem, dicta cum sequi ab, dolorum provident quisquam illum fugiat vitae delectusvoluptate quia consectetur asperiores, nam voluptatum voluptates qui, sint, officiis veniam ullam ipsa cum. Impedit illum eligendi obcaecati ea laborum error a, id temporibus illo cum esse ut ratione placeat porro iste inventore quisquam autem repellendus odit cumque? Dicta ullam vitae, architecto quia non nobis iusto rem quaerat eaque molestiae ducimus nesciunt inventore quo molestias voluptatibus repellat quidem quam aut in asperiores eligendi dolores tempore cumque accusamus? Perspiciatis excepturi exercitationem, dicta cum sequi ab, dolorum provident quisquam illum fugiat vitae delectus.</p>
                </div>
                <div className='w-full flex h-[10%] items-center justify-between'>
                    <Input className="mr-3" placeholder="Write what you want to search?" />
                    <Button variant="outline">Generate</Button>
                </div>
            </div>
            <div className='w-full h-full overflow-y-auto'>
                <p className='text-slate-900 font-medium flex w-full justify-between items-center mb-3'>
                    <span className='block'>User Post Result:</span>
                </p>
                <div className='h-[90%] overflow-y-auto'>
                    <ResultPostCard />
                    <ResultPostCard />
                    <ResultPostCard />
                    <ResultPostCard />
                </div>
            </div>
        </div>
    )
}
