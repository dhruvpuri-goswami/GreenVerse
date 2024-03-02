"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { faCommentDots, faComments, faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import { faAdd, faPhone, faTurnUp, faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useEffect } from "react"
import { Textarea } from "../ui/textarea"
import ToggleBox from "./ToggleBox"

export function CommentsSheet() {

    useEffect(() => {
        const listener = window.document.addEventListener("mouseenter", (e) => {
            console.log(e.view.document);
        })

    }, [])

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">
                    <FontAwesomeIcon width={15} className='mr-2' icon={faComments} />
                    View Comments
                </Button>
            </SheetTrigger>
            <SheetContent side="left">
                <SheetHeader>
                    <SheetTitle>Add Comments</SheetTitle>
                    <SheetDescription>
                        <p>
                          Post comments to <span>@Sahil</span>
                        </p>
                    </SheetDescription>
                </SheetHeader>
                <div className="">
                    <div className="py-4">
                        <div className="items-center gap-4">
                            <Textarea placeholder="Type your message here." />
                        </div>
                    </div>
                    <SheetFooter>
                            <Button variant="outline">
                                <FontAwesomeIcon width={15} className='mr-2 -rotate-90' icon={faTurnUp} />
                                @sahil
                            </Button>
                        <SheetClose asChild>
                            <Button variant="outline">
                                <FontAwesomeIcon width={15} className='mr-2' icon={faPaperPlane} />
                                Post
                            </Button>
                        </SheetClose>
                    </SheetFooter>
                </div>
                <div className="h-[70%] mt-5 w-full">
                    <ToggleBox />
                </div>
            </SheetContent>
        </Sheet>
    )
}
