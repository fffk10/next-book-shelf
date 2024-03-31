'use client'

import Drawer from '@/app/components/layout/drawer'
import { Button, Flex } from '@yamada-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const handleDrawerClose = async () => {
    setIsOpen(false)
  }

  return (
    <Flex
      as='header'
      justifyContent='space-between'
      p={4}
      text='white'
      alignItems='center'
      bgGradient='linear(to-r, #59a9e1, #f37bdf)'
      textColor='white'
    >
      <Link href='/'>
        <Flex fontSize='2xl'>
          <Image src='/logo.png' width={32} height={32} alt='logo' />
          BookShelf
        </Flex>
      </Link>
      <Button variant='unstyled' onClick={() => setIsOpen(!isOpen)}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
          />
        </svg>
      </Button>
      <Drawer isOpen={isOpen} onClose={handleDrawerClose} />
    </Flex>
  )
}
