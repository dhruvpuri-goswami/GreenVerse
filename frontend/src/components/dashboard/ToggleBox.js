import React from 'react'
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
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReply } from '@fortawesome/free-solid-svg-icons'
import CommentCard from './CommentCard'
import AiSuggest from './AiSuggest'

export default function ToggleBox() {
    return (
        <Tabs defaultValue="comments" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="comments">Comments</TabsTrigger>
                <TabsTrigger value="aisuggestion">AI Suggestion</TabsTrigger>
            </TabsList>
            <TabsContent value="comments">
                <div className="h-[305px] w-full overflow-y-auto">
                    <CommentCard />
                    <CommentCard />
                    <CommentCard />
                    <CommentCard />
                    <CommentCard />
                    <CommentCard />
                </div>
            </TabsContent>
            <TabsContent value="aisuggestion">
                <AiSuggest />
            </TabsContent>
        </Tabs>
    )
}
