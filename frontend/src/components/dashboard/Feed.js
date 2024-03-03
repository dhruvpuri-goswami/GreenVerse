import { faCommentDots, faComments, faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import { faAdd, faPhone, faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'
import { PostImageSlide } from './PostImageSlide'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { CommentsSheet } from './CommentsSheet'

export default function Feed({ post }) {
    return (
        <div class="mx-auto my-8 bg-white w-[85%] rounded-xl border border-gray-100 p-4 shadow-lg">
            <div class="mb-4 flex justify-between border-b pb-3 px-5">
                <p class="text-xl font-bold text-gray-700">Sahil Nayak</p>
                <div className='w-28 flex items-center justify-between'>
                    <button class="text-sm font-medium text-slate-700 focus:outline-none focus:ring-1"><FontAwesomeIcon width={20} icon={faCommentDots} /></button>
                    <button class="text-sm font-medium text-slate-700 focus:outline-none focus:ring-1"><FontAwesomeIcon width={17} icon={faPhone} /></button>
                    <button class="text-sm font-medium text-slate-700 focus:outline-none focus:ring-1"><FontAwesomeIcon width={17} icon={faVideo} /></button>
                </div>
            </div>
            <div className='pr-5'>
                <div class="w-full flex items-center">
                    <div className="mr-5 w-full max-w-[250px] flex items-center justify-between">
                        <PostImageSlide images={post.image_urls} />
                    </div>
                    <div className='h-full flex flex-col justify-between'>
                        <p className='text-sm font-bold mb-2 text-primary_theme'>{post.title}</p>
                        <p className='text-sm h-[200px] overflow-y-auto text-justify'>{post.description}</p>
                        <div className='w-full h-[50px] flex flex-row-reverse items-center justify-between mt-3'>
                            <div className='flex items-center justify-between'>
                                <Input className="mr-3" placeholder="Add a comment...." />
                                <Button variant="outline">
                                    <FontAwesomeIcon width={15} className='mr-2' icon={faPaperPlane} />
                                    Post
                                </Button>
                            </div>
                            <CommentsSheet aidescription={post.ai_generated_comment}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
