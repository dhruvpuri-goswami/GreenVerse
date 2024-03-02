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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"


export function Profile() {
    return (
        <Card className="w-[350px] m-auto">
            <CardHeader>
                <CardTitle>Your Profile</CardTitle>
                <CardDescription>Hey, please enter your details.</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-x-1.5">
                            <Label className="mb-2" htmlFor="sex">Your Sex</Label>
                            <RadioGroup className="flex" defaultValue="comfortable">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="default" id="r1" />
                                    <Label htmlFor="r1">Male</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="comfortable" id="r2" />
                                    <Label htmlFor="r2">Female</Label>
                                </div>
                            </RadioGroup>
                        </div>
                        <div className="flex mt-4 flex-col space-y-1.5">
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label className="mb-1" htmlFor="picture">Your Profile Image</Label>
                                <Input id="picture" type="file" />
                            </div>
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline">Skip</Button>
                <Button>Continue</Button>
            </CardFooter>
        </Card>
    )
}
