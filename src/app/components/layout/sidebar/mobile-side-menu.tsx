import { ITEMS } from '@/app/components/layout/sidebar/sidebar-items'
import ThemeToggle from '@/app/components/parts/theme-toggle'
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  List,
  ListItem,
  Text,
} from '@yamada-ui/react'
import NextLink from 'next/link'

interface MobileSideMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileSideMenu({
  isOpen,
  onClose,
}: MobileSideMenuProps) {
  return (
    <Drawer p={4} isOpen={isOpen} onClose={onClose} placement='left' size='sm'>
      <DrawerHeader></DrawerHeader>

      <DrawerBody>
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
      </DrawerBody>

      <DrawerFooter>
        <Box>
          <ThemeToggle />

          <Button variant='unstyled'>ログアウト</Button>
        </Box>
      </DrawerFooter>
    </Drawer>
  )
}
