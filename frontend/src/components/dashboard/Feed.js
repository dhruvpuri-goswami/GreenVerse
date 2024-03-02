import { faCommentDots, faComments, faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import { faAdd, faPhone, faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'
import { PostImageSlide } from './PostImageSlide'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { CommentsSheet } from './CommentsSheet'

export default function Feed() {
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
                    <div className="mr-5 w-full flex items-center justify-between">
                        <PostImageSlide />
                    </div>
                    <div className='h-full flex flex-col justify-between'>
                        <p className='text-sm font-bold mb-2 text-primary_theme'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, voluptatibus.</p>
                        <p className='text-sm h-[200px] overflow-y-auto text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo corrupti reprehenderit dolore inventore commodi non doloremque. Aperiam dolorem corporis totam accusamus esse quae vitae similique neque architecto quis sed natus blanditiis dicta animi laudantium exercitationem ad cupiditate, amet sint adipisci qui est earum? Dolores earum animi fugiat ipsum aliquam laborum excepturi error quidem! Id, tempora eaque aliquam quidem deleniti necessitatibus! Maiores labore aspernatur inventore eum? Et ut accusantium nihil officiis culpa iure, soluta est laborum veniam quas? Natus et assumenda laboriosam inventore perferendis veritatis ipsam! Facilis ullam dolore voluptates fuga quae adipisci reiciendis, architecto nemo, excepturi quidem quos amet ratione velit eligendi assumenda eius ipsam? Aspernatur quo repellendus, expedita commodi possimus maxime! Repellat iusto autem et sint exercitationem ducimus ipsum consequuntur a eum velit? Qui et ratione quisquam facilis expedita quibusdam nesciunt quasi deleniti autem, quis aperiam consequatur culpa dignissimos, quod inventore officia! Libero iste est id animi molestias dignissimos. Fuga consequatur reiciendis eius voluptatum? Repellat, magnam ullam porro sed corrupti.</p>
                        <div className='w-full h-[50px] flex flex-row-reverse items-center justify-between mt-3'>
                            <div className='flex items-center justify-between'>
                                <Input className="mr-3" placeholder="Add a comment...." />
                                <Button variant="outline">
                                    <FontAwesomeIcon width={15} className='mr-2' icon={faPaperPlane} />
                                    Post
                                </Button>
                            </div>
                            <CommentsSheet />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
