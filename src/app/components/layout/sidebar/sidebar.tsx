import ThemeToggle from '@/app/components/parts/theme-toggle'
import SidebarItems from '@/app/components/layout/sidebar/sidebar-items'
import { signOut } from '../../../../../auth'

export default async function Sidebar() {
  return (
    <aside className='h-full hidden md:block w-40 bg-white text-gray-900 p-4 border-r '>
      <nav className='flex flex-col h-full'>
        <SidebarItems />

        <ThemeToggle />
        <form
          action={async () => {
            'use server'
            await signOut()
          }}
          className='flex-none h-auto p-4'
        >
          <button>ログアウト</button>
        </form>
      </nav>
    </aside>
  )
}
