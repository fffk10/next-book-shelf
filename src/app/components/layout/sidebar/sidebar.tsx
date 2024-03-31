import SidebarItems from '@/app/components/layout/sidebar/sidebar-items'
import ThemeToggle from '@/app/components/parts/theme-toggle'
import { Box, Button, Flex } from '@yamada-ui/react'
import { signOut } from '../../../../../auth'

export default async function Sidebar() {
  return (
    <Box
      h='full'
      w={40}
      borderRight='1px'
      display={{ base: 'block', sm: 'none' }}
      p={4}
    >
      <Flex flexDirection='column' h='full'>
        <SidebarItems />

        <ThemeToggle />
        <Box
          as='form'
          h='auto'
          p={4}
          action={async () => {
            'use server'
            await signOut()
          }}
        >
          <Button variant='unstyled'>ログアウト</Button>
        </Box>
      </Flex>
    </Box>
  )
}
