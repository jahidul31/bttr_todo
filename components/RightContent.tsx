import { AlignJustify } from "lucide-react"
import AddTask from "./AddTask"
import SingleTask from "./SingleTask"
import { Button } from "./ui/button"
import { ScrollArea } from "./ui/scroll-area"
import MobileNav from "./MobileNav"
import { getServerSession } from "next-auth"

interface PageProps {
  title: string,
  task: any,
  email: any
}

const RightContent = async ({ title, task, email }: PageProps) => {

  const session = await getServerSession()

  return (
    <>
      <div className="border-b flex justify-between items-center border-emon-light pb-3">
        <div className="md:hidden">
          <MobileNav session={session} />
        </div>
        <h1 className="text-2xl font-bold">{title}</h1>
        <AddTask email={email} />
      </div>


      <ScrollArea className='w-full h-full pt-10 pb-16 md:pr-3'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:mr-3">
          {task.length > 0 ? task.map((tsk: any, index: any) => (
            <SingleTask content={tsk.task} isComplete={tsk.isCompleted} isImportant={tsk.isImportant} id={tsk.id} key={tsk.id} index={index} createdAt={tsk.createdAt} />
          )) : (
            <h1 className="text-2xl font-bold col-span-3">There is no record found.</h1>
          )}
        </div>
      </ScrollArea>

    </>
  )
}

export default RightContent