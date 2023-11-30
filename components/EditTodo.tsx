"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { ClipboardEdit } from "lucide-react"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod";
import { taskSchema } from "@/lib/validation"
import { Textarea } from "./ui/textarea"
import { Checkbox } from "./ui/checkbox"
import { toast } from "sonner"
import { editTodo } from "@/lib/actions/todo.action"
import { useState } from "react"

type EditTodo = {
  task: string,
  status: boolean,
  id: string
}
const EditTodo = ({ task, status, id }: EditTodo) => {

  const [open, setOpen] = useState<boolean>(false)

  const form = useForm<z.infer<typeof taskSchema>>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      task: task,
      status: status
    },
  })

  const handleSubmit = async (values: z.infer<typeof taskSchema>) => {
    const res = await editTodo({ isImportant: values.status, task: values.task, id })
    if (res) {
      setOpen(false)
      toast.success("Todo update success.")
    } else {
      toast.error("Todo update failed .")
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <ClipboardEdit size={20} className="hover:text-emon-accent hover:cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update Task</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-3">
              <FormField
                control={form.control}
                name="task"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Task</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Need to attend the meeting at 9:00 AM" className="text-black" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow bg-white">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-emon-dark">
                        This is a important task.
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <div className="flex justify-between items-center pt-5">
                <Button type="submit" className="bg-transparent border border-emon-accent hover:bg-emon-accent hover:text-black text-white rounded-full">Update Task</Button>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default EditTodo