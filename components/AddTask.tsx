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
import { PlusCircle } from "lucide-react"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod";
import { taskSchema } from "@/lib/validation"
import { Textarea } from "./ui/textarea"
import { Checkbox } from "./ui/checkbox"
import { toast } from "sonner"
import { addTodo } from "@/lib/actions/todo.action"
import { useState } from "react"

const AddTask = ({ email }: { email: any }) => {

  const [open, setOpen] = useState<boolean>(false)

  const form = useForm<z.infer<typeof taskSchema>>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      task: "",
      status: false
    },
  })

  const handleSubmit = async (values: z.infer<typeof taskSchema>) => {
    const res = await addTodo({ email: email, isImportant: values.status, task: values.task })
    if (res) {
      setOpen(false)
      toast.success("Todo added success.")
    } else {
      toast.error("Todo create failed .")
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-transparent border-emon-accent text-white rounded-full hover:bg-emon-accent"><PlusCircle className={"md:mr-3"} size={16} /> <span className="hidden md:block">Add Task</span></Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
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
                <Button type="submit" className="bg-transparent border border-emon-accent hover:bg-emon-accent hover:text-black text-white rounded-full">Add Task</Button>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default AddTask