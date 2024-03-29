'use client'

import Link from 'next/link'
import { CiSettings } from 'react-icons/ci'
import { RiBookLine } from 'react-icons/ri'

type SidebarItem = {
  name: string
  href: string
  icon: React.ReactNode
}

export const ITEMS: SidebarItem[] = [
  { name: 'books', href: 'books', icon: <RiBookLine /> },
  { name: 'setting', href: 'settings', icon: <CiSettings /> },
]

export default function SidebarItems() {
  return (
    <ul className='mb-auto'>
      {ITEMS.map((item) => (
        <li key={item.name} className='m-3 h-'>
          <Link href={`/${item.href}`} className='flex items-center text-lg'>
            <span className='mr-2'>{item.icon}</span>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
