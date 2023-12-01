"use client"

import { AlignJustify, LogOut } from "lucide-react"
import { Button } from "./ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { SideNavLink } from "@/lib/const"
import { signOut } from "next-auth/react"
import { usePathname } from "next/navigation"


const MobileNav = ({ session }: { session: any }) => {
  const currentPath = usePathname()
  const path = currentPath.slice(1, currentPath.length)

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size={"icon"} className="bg-emon-dark border border-emon-accent">
          <AlignJustify />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="flex justify-between flex-col">
        <SheetHeader>
          <div className="flex flex-col gap-3 justify-center items-center">
            <Image src={session.user?.image || ""} alt="user" width={64} height={64} className="p-2 border border-emon-accent rounded-full" />
            <h1>{session.user?.name}</h1>
          </div>
        </SheetHeader>

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
      </SheetContent>
    </Sheet>

  )
}

export default MobileNav