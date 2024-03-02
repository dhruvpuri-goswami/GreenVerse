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
import { useRouter } from "next/navigation"
import { AuthContext } from "@/context/AuthState"
import { AlertDestructive } from "../ui/AlertDestructive"
import Link from "next/link"

export default function Signin() {
    const authContext = useContext(AuthContext);
    const { authData, setAuthData, signin } = authContext;
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    //calling route for naviagation
    const router = useRouter();

    //on Input field change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setAuthData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    const handleSignin = async () => {
        //do validations
        const validationRes = validate(authData.email, authData.password);
        if (validationRes.isError) {
            setIsError(true);
            setErrorMessage(validationRes.errorMessage);
            setTimeout(() => {
                setIsError(false);
            }, 1500);
            return;
        }

        const res = await signin();
        if (res.error) {
            setIsError(true);
            setErrorMessage(res.error);
            setTimeout(() => {
                setIsError(false);
            }, 1500);
            return;
        }
    }

    const validate = (email, password) => {
        if (authData.email === "" || authData.password === "") {
            return {
                isError: true,
                errorMessage: "Please fill all fields"
            };
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            return {
                isError: true,
                errorMessage: "Please enter a valid email"
            };
        }

        if (password.length < 8) {
            return {
                isError: true,
                errorMessage: "Password must be atleast 8 characters"
            };
        }

        return {
            isError: false,
        };
    }

    return (
        <>
            <div className={`absolute w-1/3 -translate-y-1/2 ${isError ? "top-12" : "-top-1/2"} -translate-x-1/2 left-1/2 ease-in duration-500`}>
                <AlertDestructive errorMessage={errorMessage} />
            </div>
            <Card className="w-[350px] m-auto">
                <CardHeader>
                    <CardTitle>Signin</CardTitle>
                    <CardDescription>Hey, Signin to your account</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="framework">Email</Label>
                                <Input onChange={handleChange} id="email" placeholder="joe@gmail.com" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="framework">Password</Label>
                                <Input onChange={handleChange} type="password" id="password" placeholder="********" />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
                    <Button onClick={handleSignin}>Continue</Button>
                </CardFooter>
                    <div className="ml-7 mb-3 -mt-2 text-sm">
                        Don't have an account? <Link href={'/Account/Signup'} className="text-blue-500 cursor-pointer">Signup</Link>
                    </div>
            </Card>
        </>
    )
}
