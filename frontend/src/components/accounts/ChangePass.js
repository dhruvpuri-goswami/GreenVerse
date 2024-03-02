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
import { AuthContext } from "@/context/AuthState"
import { AlertDestructive } from "../ui/AlertDestructive"
import { useRouter } from "next/navigation"

const ChangePass = () => {
    const authContext = useContext(AuthContext);
    const { changePassHandle } = authContext;
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [passwords, setPasswords] = useState({
        password: "",
        confirmPassword: ""
    });
    const router = useRouter()

    const handleInput = (e) => {
        setPasswords((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    const handlePassChange = async (e) => {
        e.preventDefault();
        if (passwords.password !== passwords.confirmPassword) {
            setIsError(true);
            setErrorMessage("Password and Confirm Password does not match");
            setTimeout(() => {
                setIsError(false);
            }, 1500);
            return;
        }

        if (passwords.password === "" || passwords.confirmPassword === "") {
            setIsError(true);
            setErrorMessage("Please enter your password");
            setTimeout(() => {
                setIsError(false);
            }, 1500);
            return;
        }

        const res = await changePassHandle(passwords.password, passwords.confirmPassword);
        if (res.error !== undefined || res.error !== null) {
            setIsError(true);
            setErrorMessage(res.error);
            setTimeout(() => {
                setIsError(false);
            }, 1500);
            return router.push('/Account/Signin');
        }

        setIsError(true);
        setErrorMessage(res.success);
        setTimeout(() => {
            setIsError(false);
        }, 2000);
        return router.push('/Account/Signin');
    }

    return (
        <>
            <div className={`absolute w-1/3 -translate-y-1/2 ${isError ? "top-12" : "-top-1/2"} -translate-x-1/2 left-1/2 ease-in duration-500`}>
                <AlertDestructive errorMessage={errorMessage} />
            </div>
            <Card className="w-[350px] m-auto">
                <CardHeader>
                    <CardTitle>Forget Password</CardTitle>
                    <CardDescription>Hey, forget password? Don't worry!!</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="password">Password</Label>
                                <Input onChange={handleInput} type="password" id="password" placeholder="********" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="confirmPassword">Confirm password</Label>
                                <Input onChange={handleInput} type="password" id="confirmPassword" placeholder="********" />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <div className="pt-3">
                </div>
                <CardFooter className="flex justify-between">
                    <Button onClick={handlePassChange}>Continue</Button>
                </CardFooter>
            </Card>
        </>
    )
}

export default ChangePass