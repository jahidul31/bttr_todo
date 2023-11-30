"use client"

import { cn } from "@/lib/utils"
import { BookText, CheckSquare, ListTodo, LogOut, Settings } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import { signOut } from "next-auth/react"
import { SideNavLink } from "@/lib/const"
import { usePathname } from "next/navigation"

interface PageProps {
  session: any
}

const SideNav = ({ session }: PageProps) => {
  const currentPath = usePathname()
  const path = currentPath.slice(1, currentPath.length)
  return (
    <div className="w-[30%] hidden md:flex rounded-2xl bg-emon-dark py-4 min-h-full shadow-2xls justify-between flex-col text-md">
      <div className="flex flex-col gap-3 justify-center items-center">
        <Image src={session.user?.image || ""} alt="user" width={64} height={64} className="p-2 border border-emon-accent rounded-full" />
        <h1>{session.user?.name}</h1>
      </div>

      <div className="space-y-4">
        {SideNavLink.map((link: any) => (
          <div className={cn(path === link.path && "border-l-2 border-emon-accent", "flex items-center gap-3 pl-5 py-1")} key={link.path}>
            {link.icon(path)}
            <Link href={link.link}>{link.title}</Link>
          </div>
        ))}
      </div>

      <div className="text-left pl-6 hover:border-l-2 hover:border-emon-accent">
        <Button className="pl-0 bg-transparent hover:bg-transparent" onClick={() => signOut()}><LogOut size={16} className="mr-3" /> Log Out</Button>
      </div>
    </div>
  )
}

export default SideNav