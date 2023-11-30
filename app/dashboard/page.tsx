import RightContent from '@/components/RightContent'
import SideNav from '@/components/SideNav'
import { getAllTodo } from '@/lib/actions/todo.action'
import { getServerSession } from 'next-auth'

const Dashboard = async () => {

  const session = await getServerSession()
  const allTodo = await getAllTodo({ email: session?.user?.email })

  return (
    <div className='w-full h-screen p-5 flex gap-10'>
      <SideNav session={session} active='dashboard' />

      <div className='px-5 md:px-10 w-full h-full py-5 bg-emon-dark rounded-2xl relative overflow-hidden'>
        <RightContent title='All Task' email={session?.user?.email} task={allTodo} />
      </div>
    </div>
  )
}

export default Dashboard