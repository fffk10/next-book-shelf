'use client'

import { Icon, List, ListItem, Text } from '@yamada-ui/react'
import NextLink from 'next/link'
import { CiSettings } from 'react-icons/ci'
import { RiBookLine } from 'react-icons/ri'

type SidebarItem = {
  name: string
  href: string
  icon: React.ReactNode
}

export const ITEMS: SidebarItem[] = [
  { name: 'books', href: 'books', icon: <Icon as={RiBookLine} /> },
  { name: 'setting', href: 'settings', icon: <Icon as={CiSettings} /> },
]

export default function SidebarItems() {
  return (
    <List marginBottom='auto'>
      {ITEMS.map((item) => (
        <ListItem key={item.name} m={2} h={3}>
          <NextLink
            href={`/${item.href}`}
            className='flex items-center text-lg'
          >
            {item.icon} <Text marginLeft={2}>{item.name}</Text>
          </NextLink>
        </ListItem>
      ))}
    </List>
  )
}
