"use client"
import  React, { useContext } from "react"
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
import { AuthContext } from "@/context/AuthState"


export function Profile() {
    const authContext = useContext(AuthContext);
    const { authData, setAuthData } = authContext;

    const handleSignUp = async() =>{
        console.log(authData);
        const res = await fetch("http://localhost:8000/signup/",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(authData)
        });

        console.log(res.json());
    }
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
                            <RadioGroup className="flex" onValueChange={(e)=> setAuthData(e)} defaultValue="Male">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="Male" id="r1" />
                                    <Label htmlFor="r1">Male</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="Female" id="r2" />
                                    <Label htmlFor="r2">Female</Label>
                                </div>
                            </RadioGroup>
                        </div>
                        <div className="flex mt-4 flex-col space-y-1.5">
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label className="mb-1" htmlFor="picture">Your Profile Image</Label>
                                <Input id="image" type="file" />
                            </div>
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline">Skip</Button>
                <Button onClick={handleSignUp}>Continue</Button>
            </CardFooter>
        </Card>
    )
}
