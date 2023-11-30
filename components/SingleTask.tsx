import { Badge } from "./ui/badge"
import EditTodo from "./EditTodo"
import CompleteTask from "./CompleteTask"
import { DeleteTask } from "./DeleteTask"
import { MotionDiv } from "./Motion"
import { formatTimeToNow } from "@/lib/utils"

interface PageProps {
  content: string
  id: string
  isComplete: boolean
  isImportant: boolean
  index: any
  createdAt: any
}

const stagger = 0.25;

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const SingleTask = ({ content, id, isComplete, isImportant, index, createdAt }: PageProps) => {
  return (
    <>
      <MotionDiv
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{
          delay: index * stagger,
          ease: "easeInOut",
          duration: 0.5,
        }}
        viewport={{ amount: 0 }}
        className="bg-emon-dark2 rounded-lg p-4 flex justify-between flex-col gap-2"
      >
        <h1>{content}</h1>
        <h6 className="text-xs text-emon-light mt-3">
          {formatTimeToNow(new Date(createdAt))}
        </h6>
        <div className="flex justify-between items-center mt-3">
          <div className="flex gap-2">
            {isComplete && <Badge className="bg-green-400 text-emon-dark hover:bg-green-400">Completed</Badge>}
            {isImportant && <Badge className="bg-red-400 text-emon-dark2 hover:bg-red-400">Important</Badge>}
            {!isComplete && <CompleteTask id={id} />}
          </div>

          <div className="flex gap-2">
            <EditTodo id={id} status={isImportant} task={content} />
            <DeleteTask id={id} />
          </div>
        </div>
      </MotionDiv>
    </>
  )
}

export default SingleTask