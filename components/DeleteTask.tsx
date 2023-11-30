"use client"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Badge } from "./ui/badge"
import { deletedTask } from "@/lib/actions/todo.action"
import { toast } from "sonner"
import { Trash2 } from "lucide-react"


export const DeleteTask = ({ id }: { id: string }) => {

  const handleClick = async () => {
    const res = await deletedTask({ id })
    if (res) {
      toast.success("Todo update success.")
    } else {
      toast.error("Todo update failed.")
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Trash2 size={20} className="hover:cursor-pointer hover:text-emon-accent" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            To delete this task. If you delete it will also deleted from our server.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-transparent border border-red-500 text-white rounded-full px-10 hover:bg-red-500 hover:text-white">Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-transparent border border-emon-accent text-white rounded-full px-10 hover:bg-emon-accent hover:text-black" onClick={handleClick}>Yes</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
