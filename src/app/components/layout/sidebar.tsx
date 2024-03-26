'use client'

import Link from 'next/link'
import { RiBookLine } from 'react-icons/ri'
import { CiSettings } from 'react-icons/ci'
import { useTheme } from '@yamada-ui/react'

type SidebarItem = {
  name: string
  href: string
  icon: React.ReactNode
}

export const SidebarItems: SidebarItem[] = [
  { name: 'books', href: 'books', icon: <RiBookLine /> },
  { name: 'setting', href: 'settings', icon: <CiSettings /> },
]

export default function Sidebar() {
  const { themeScheme, changeThemeScheme } = useTheme()

  return (
    <aside className='h-full hidden md:block w-52 bg-white text-gray-900 p-4 border-r '>
      <nav className='flex flex-col h-full'>
        <ul className='mb-auto'>
          {SidebarItems.map((item) => (
            <li key={item.name} className='m-3 h-'>
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
        <div>{themeScheme}</div>
        <button onClick={() => changeThemeScheme('pink')}>pink</button>
        <button onClick={() => changeThemeScheme('blue')}>blue</button>
        <button onClick={() => changeThemeScheme('light')}>light</button>
      </nav>
    </aside>
  )
}
