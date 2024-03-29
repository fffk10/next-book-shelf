import ThemeToggle from '@/app/components/parts/theme-toggle'
import SidebarItems from '@/app/components/layout/sidebar/sidebar-items'
import { signOut } from '../../../../../auth'
import { Box, Button, Flex } from '@yamada-ui/react'

export default async function Sidebar() {
  return (
    <Box
      h='full'
      w={40}
      bg={['white', 'gray.800']}
      borderRight='1px'
      display={{ base: 'block', sm: 'none' }}
      p={4}
      textColor={['gray.900', 'white']}
    >
      <Flex flexDirection='column' h='full'>
        <SidebarItems />

        <ThemeToggle />
        <Flex
          as='form'
          flex='none'
          h='auto'
          p={4}
          action={async () => {
            'use server'
            await signOut()
          }}
        >
          <Button variant='unstyled'>ログアウト</Button>
        </Flex>
      </Flex>
    </Box>
  )
}
