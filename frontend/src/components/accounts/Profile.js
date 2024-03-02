"use client"
import React, { useContext, useEffect, useState } from "react"
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
import { useRouter } from "next/navigation"
import { AlertDestructive } from "../ui/AlertDestructive"
import { cloudinaryUpload } from "@/lib/cloudinaryUpload"


export function Profile() {
    const authContext = useContext(AuthContext);
    const { authData, setAuthData, signup } = authContext;
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [image, setImage] = useState({});
    const router = useRouter();

    //calling route for naviagation
    if (authData.name === "" || authData.email === "" || authData.password === "") {
        return router.push('/Account/Signup');
    }


    const handleSignUp = async (e) => {
        e.preventDefault();
        if (image.name !== undefined && image.name !== "") {
            try{
                const imageRes = await cloudinaryUpload(image, "greenverse/users/profile");
                setAuthData((prev) => ({
                    ...prev,
                    image: imageRes.url,
                }));
                console.log(imageRes.url)
            }catch(err){
                console.log(err)
                setErrorMessage("Interval Server Error");
                setIsError(true);
                setTimeout(() => {
                    setIsError(false);
                }, 1500);
                return;
            }
        }
            

        const res = await signup();
        if (res.error) {
            setIsError(true);
            setErrorMessage(res.error);
            setTimeout(() => {
                setIsError(false);
            }, 1500);
            return;
        }
        // useRouter().push('/Account/Profile');
    }


    const handleSkipBtn = async() => {
        setAuthData((prev) => ({...prev, sex : 'not specified', image: "not specified"}));
        const res = await signup();
        if (res.error) {
            setIsError(true);
            setErrorMessage(res.error);
            setTimeout(() => {
                setIsError(false);
            }, 1500);
            return;
        }
    }
        
    return (
        <>
            <div className={`absolute w-1/3 -translate-y-1/2 ${isError ? "top-12" : "-top-1/2"} -translate-x-1/2 left-1/2 ease-in duration-500`}>
                <AlertDestructive errorMessage={errorMessage} />
            </div>
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
                                <RadioGroup className="flex" onValueChange={(e) => setAuthData(e)} defaultValue="Male">
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
                                    <Input accept="image/*" onChange={(e) => setImage(e.target.files[0])} id="image" type="file" />
                                </div>
                            </div>
                        </div>
                    </form>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button variant="outline"  onClick={handleSkipBtn}>Skip</Button>
                        <Button onClick={handleSignUp}>Continue</Button>
                    </CardFooter>
            </Card>
        </>
    )
}
