'use client'

import MobileSideMenu from '@/app/components/layout/sidebar/mobile-side-menu'
import { Button, Flex, useDisclosure } from '@yamada-ui/react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex
      as='header'
      justifyContent='space-between'
      p={4}
      text='white'
      alignItems='center'
      bgGradient={[
        'linear(to-r, #59a9e1, #f37bdf)',
        'linear(to-r, #7f399a, #381945)',
      ]}
      textColor='white'
    >
      <Link href='/'>
        <Flex fontSize='2xl'>
          <Image src='/logo.png' width={32} height={36} alt='logo' />
          BookShelf
        </Flex>
      </Link>
      <Button
        display={{ base: 'none', sm: 'block' }}
        variant='unstyled'
        onClick={isOpen ? onClose : onOpen}
      >
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
      <MobileSideMenu isOpen={isOpen} onClose={onClose} />
    </Flex>
  )
}
