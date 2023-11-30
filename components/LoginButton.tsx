"use client"
import { signIn } from "next-auth/react"
import { Button } from "./ui/button"


export default function LoginButton() {

  return (
    <>
      <Button onClick={() => signIn("google")} variant={"outline"} size={"lg"} className="border-emon-accent bg-transparent rounded-full hover:bg-emon-accent">Get Started</Button>
    </>
  )
}