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


export function Signup() {
  const authContext = useContext(AuthContext);
  const { authData, setAuthData } = authContext;
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  //calling route for naviagation
  const router = useRouter();

  const handleChange = (e) =>{
    const { name, value } = e.target;
    setAuthData((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(e);
    console.log(authData)
  }

  const handleClick = () => {
    //do validations
    const validationRes = validate(authData.name,authData.email,authData.password);

    if(validationRes.isError){
      setIsError(true);
      setErrorMessage(validationRes.errorMessage);
      setTimeout(() => {
          setIsError(false);
      }, 1500);
      return;
    }
    router.push('/Account/Profile');
  }

  //reset fields
  const handleCancel = () =>{
    setAuthData({
      name: "",
      email: "",
      password: "",
    })
  }

  //validating fields
  const validate = (name,email,password) => {
    if(authData.name === "" || authData.email === "" || authData.password === ""){
      return {
        isError: true,
        errorMessage: "Please fill all fields"
      };
    }

    if(name.trim() === "")
      return {
        isError: true,
        errorMessage: "Please fill all fields"
      };

    if(!/\S+@\S+\.\S+/.test(email)){
      return {
        isError: true,
        errorMessage: "Please enter a valid email"
      };
    }

    if(password.length < 8){
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
        <AlertDestructive errorMessage={errorMessage}/>
    </div>
    <Card className="w-[350px] m-auto">
      <CardHeader>
        <CardTitle>Signup</CardTitle>
        <CardDescription>Hey, Signup your account.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Fullname</Label>
              <Input value={authData.name} onChange={handleChange} id="name" placeholder="Joe" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Email</Label>
              <Input value={authData.email} onChange={handleChange} id="email" placeholder="joe@gmail.com" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Password</Label>
              <Input value={authData.password} onChange={handleChange} type="password" id="password" placeholder="********" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={handleCancel}>Cancel</Button>
        <Button onClick={handleClick}>Continue</Button>
      </CardFooter>
      <div className="ml-7 mb-3 -mt-2 text-sm">
        Already have an account? <Link href={'/Account/Signin'} className="text-blue-500 cursor-pointer">Signin</Link>   
      </div>
    </Card>
    </>
  )
}
