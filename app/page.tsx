import LoginButton from '@/components/LoginButton'
import { Button, buttonVariants } from '@/components/ui/button'
import { allUsers } from '@/lib/actions/todo.action'
import { cn } from '@/lib/utils'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {

  const session = await getServerSession()
  const users = await allUsers()


  return (
    <>
      <div className="container min-h-screen flex flex-col justify-between">
        <div className='flex justify-center items-center p-5 gap-5'>
          <Image src={"/logo-2.png"} width={32} height={32} alt='bttr-todo' /> <span className='text-3xl font-bold'>Better_Todo</span>
        </div>
        <div>
          {session ? (
            <>
              <div className="space-y-5">
                <div className='text-xl md:text-3xl font-bold capitalize flex gap-6 justify-center items-center'>Welcome <Image src={session.user?.image || ""} height={60} width={60} alt={session.user?.name || "Abater"} className='rounded-full p-1.5 border border-emon-accent' /> {session?.user?.name}</div>
                <h1 className='text-xl md:text-3xl font-bold text-center capitalize'>Keep Track Your task</h1>
              </div>
            </>
          ) : (
            <>
              <div className="space-y-3 md:space-y-5">
                <h1 className='text-xl md:text-3xl font-bold text-center capitalize'>Keep track of You, What you are doing </h1>
                <h1 className='text-xl md:text-3xl font-bold text-center capitalize mt-3 mb-10'>or Could be done.</h1>
              </div>
            </>
          )}




          <div className="text-center mt-10">
            {session ? <Link href={"/dashboard"} className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), "border-emon-accent bg-transparent rounded-full hover:bg-emon-accent")}>Dashboard</Link> : <LoginButton />}
          </div>
        </div>

        <div className='md:flex grid grid-cols-2 justify-center gap-10 mb-10'>
          <div className="bg-emon-dark md:px-20 px-5 py-8 space-y-3">
            <h1 className='text-xl text-center md:text-3xl font-bold'>+ {users?.totalUser}</h1>
            <h6 className='font-thin text-center'>Total User</h6>
          </div>
          <div className="bg-emon-dark md:px-20 px-5 py-8 space-y-3">
            <h1 className='text-xl md:text-3xl text-center font-bold'>+ {users?.totalTodo}</h1>
            <h6 className='font-thin text-center'>Todo Created</h6>
          </div>
        </div>
      </div>
    </>
  )
}
