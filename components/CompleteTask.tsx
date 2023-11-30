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
import { completeTask } from "@/lib/actions/todo.action"
import { toast } from "sonner"

const CompleteTask = ({ id }: { id: string }) => {

  const handleClick = async () => {
    const res = await completeTask({ id })
    if (res) {
      toast.success("Todo update success.")
    } else {
      toast.error("Todo update failed .")
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Badge className="bg-emon-accent text-emon-dark2 hover:bg-emon-accent hover:cursor-pointer">Incompleted</Badge>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            To make this task as completed.
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

export default CompleteTask