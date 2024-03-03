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
import Link from "next/link"

const ForgetPass = () => {
  const authContext = useContext(AuthContext);
  const { forgetPassHandle } = authContext;
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter()

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handleForgetPass = async (e) => {
    e.preventDefault();
    if(!/\S+@\S+\.\S+/.test(email) || email === "" || email === null || email === undefined){
      setIsError(true);

      const errMsg = !/\S+@\S+\.\S+/.test(email) ? "Please enter a valid email" : "Please enter your email";
      setErrorMessage(errMsg);

      setTimeout(() => {
        setIsError(false);
      }, 1500);
      return;
    }

    const res = await forgetPassHandle(email);
    console.log(res)
    if(res.status === 200){
      setIsError(true);
      setErrorMessage(res.success);
      setTimeout(() => {
        setIsError(false);
      }, 2000);
      return router.push('/Account/Signin');
    }

    setIsError(true);
    setErrorMessage(res.error);
    setTimeout(() => {
      setIsError(false);
    }
    , 2000);
    return router.push('/Account/forget-password');
  }

  return (
    <>
            <div className={`absolute w-1/3 -translate-y-1/2 ${isError ? "top-12" : "-top-1/2"} -translate-x-1/2 left-1/2 ease-in duration-500`}>
                <AlertDestructive errorMessage={errorMessage} />
            </div>
            <Card className="w-[350px] m-auto">
                <CardHeader>
                    <CardTitle className="text-primary_theme">Forget Password</CardTitle>
                    <CardDescription>Hey, forget password? Don't worry!!</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="framework">Email</Label>
                                <Input onChange={handleEmailChange} id="email" placeholder="joe@gmail.com" />
                            </div>
                        </div>
                    </form>
                    <div className="my-5 text-sm">
                        Go Back to <Link href={'/Account/Signup'} className="text-secondary_theme cursor-pointer">SignUp</Link> | <Link href={'/Account/Signin'} className="text-secondary_theme cursor-pointer">SignIn</Link>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button onClick={handleForgetPass}>Continue</Button>
                </CardFooter>
            </Card>
            </>
  )
}

export default ForgetPass