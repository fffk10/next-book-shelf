'use client'

import Link from 'next/link'
import { RiBookLine } from 'react-icons/ri'
import { CiSettings } from 'react-icons/ci'
import { useColorMode, Wrap, Button } from '@yamada-ui/react'

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
  const { colorMode, changeColorMode, toggleColorMode } = useColorMode()

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

        <Wrap gap='md'>
          <Button onClick={() => changeColorMode('light')}>ライトモード</Button>
          <Button onClick={() => changeColorMode('dark')}>ダークモード</Button>
          <Button onClick={() => changeColorMode('system')}>システム</Button>
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? 'ダーク' : 'ライト'}モードに切り替える
          </Button>
        </Wrap>
      </nav>
    </aside>
  )
}
