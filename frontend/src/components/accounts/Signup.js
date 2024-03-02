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


export function Signup() {
  const authContext = useContext(AuthContext);
  const { authData, setAuthData } = authContext;

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
    console.log(authData);

    //do validations
    router.push('/Account/Profile');
  }

  return (
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
              <Input onChange={handleChange} id="name" placeholder="Joe" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Email</Label>
              <Input onChange={handleChange} id="email" placeholder="joe@gmail.com" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Password</Label>
              <Input onChange={handleChange} id="password" placeholder="****" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button onClick={handleClick}>Continue</Button>
      </CardFooter>
    </Card>
  )
}
