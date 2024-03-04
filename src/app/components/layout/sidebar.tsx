'use client'

import Link from 'next/link'
import { RiBookLine } from 'react-icons/ri'
import { CiSettings } from 'react-icons/ci'

type SidebarItem = {
  name: string
  href: string
  icon: React.ReactNode
}

export const SidebarItems: SidebarItem[] = [
  { name: 'books', href: 'books', icon: <RiBookLine /> },
  { name: 'setting', href: 'settings', icon: <CiSettings /> },
]

const Sidebar: React.FC = () => {
  return (
    <aside className='hidden md:block w-64 bg-white text-gray-900 p-4 border-r '>
      <nav>
        <ul>
          {SidebarItems.map((item) => (
            <li key={item.name} className='m-3'>
              <Link
                href={`/${item.href}`}
                className='flex items-center text-lg'
              >
                <span className='mr-2'>{item.icon}</span>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
