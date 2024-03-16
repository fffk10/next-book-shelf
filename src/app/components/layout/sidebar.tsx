'use client'

import Link from 'next/link'
import { RiBookLine } from 'react-icons/ri'
import { CiSettings } from 'react-icons/ci'
import { Button, List, ListItem } from '@yamada-ui/react'
import { CommonButton } from '@/app/components/parts/button'

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
  return (
    <aside className='hidden md:block w-52 bg-white text-gray-900 p-4 border-r '>
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

        <List mt='auto'>
          <ListItem m='0.75rem' h='1.75rem'>
            <Button variant='unstyled' fontWeight='sm'>
              Sign out
            </Button>
          </ListItem>
        </List>
      </nav>
    </aside>
  )
}
