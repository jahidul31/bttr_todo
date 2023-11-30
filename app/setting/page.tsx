import SideNav from '@/components/SideNav'
import { getServerSession } from 'next-auth'

const SettingPage = async () => {
  const session = await getServerSession()

  return (
    <div className='w-full h-screen p-5 flex gap-10'>
      <SideNav session={session} active='setting' />

      <div className='px-10 w-full h-full py-5 bg-emon-dark rounded-2xl relative overflow-hidden'>
        <div className="border-b flex justify-between items-center border-emon-light pb-3">
          <h1 className="text-2xl font-bold">Setting</h1>
        </div>
        <div className="border-b flex justify-between items-center border-emon-light py-3">
          <div className="grid grid-cols-3">
            <div className="col-span-2">
              <h1 className='text-xl font-semibold'>Export all your todo.</h1>
              <span className='text-xs font-light'>Backup your todo as csv formate.</span>
            </div>
          </div>
        </div>
        <div className="border-b flex justify-between items-center border-emon-light py-3">
          <div className="grid grid-cols-3">
            <div className="col-span-2">
              <h1 className='text-xl font-semibold'>Delete your account.</h1>
              <span className='text-xs font-light'>If you delete you all data will also delete from our server. It never be found when it was deleted.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingPage