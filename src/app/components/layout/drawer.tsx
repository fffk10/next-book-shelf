import { ITEMS } from '@/app/components/layout/sidebar/sidebar-items'
import { Box, Button, List, ListItem, Text } from '@yamada-ui/react'
import NextLink from 'next/link'
import { useEffect } from 'react'

interface DrawerProps {
  isOpen: boolean
  onClose: () => void
}

export default function Drawer({ isOpen, onClose }: DrawerProps) {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      window.addEventListener('keydown', handleEscape)
    }

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  return (
    <Box
      position='fixed'
      initialLetter={0}
      zIndex={50}
      display={isOpen ? 'block' : 'none'}
    >
      <Box
        position='fixed'
        insetY={0}
        left={0}
        w={64}
        p={4}
        bg='white'
        textColor='gray.900'
      >
        <Button variant='unstyled' onClick={onClose}>
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
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </Button>
        <Box as='nav'>
          <List>
            {ITEMS.map((item) => (
              <ListItem key={item.name}>
                <NextLink
                  href={`/${item.href}`}
                  className='flex items-center text-lg'
                >
                  {item.icon} <Text marginLeft={2}>{item.name}</Text>
                </NextLink>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  )
}
