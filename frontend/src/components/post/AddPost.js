import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "../ui/textarea"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons"

export function AddPost() {
    return (
        <Card className="w-[80vw] m-auto mt-2 border-none">
            <CardHeader>
                <CardTitle>Create a Post</CardTitle>
                <CardDescription>Write your post.</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="title">Title</Label>
                            <Input id="title" placeholder="Write your title of post." />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="description">Description</Label>
                            <Textarea id="description" placeholder="write you description of post." />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="framework">Images & Videos</Label>
                            <div class="flex flex-col items-center justify-center rounded-lg border-2 border-dashed px-4 py-10">
                                <p class="mt-4 text-center text-sm font-medium text-gray-800">
                                    Drop Files here or
                                    <label class="shadow-blue-100 mt-2 block rounded-full border bg-white px-4 py-0.5 font-normal text-primary_theme shadow hover:bg-blue-50">
                                        <input class="hidden" type="file" name="file" id="" />
                                        browse</label>
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="description">Tag</Label>
                            <Input id="title" placeholder="Write your tag of post." />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button variant="outline"><FontAwesomeIcon width={15} className="mr-2" icon={faPaperPlane} />Post</Button>
            </CardFooter>
        </Card>
    )
}
