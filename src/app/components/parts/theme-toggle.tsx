'use client'

import { Button, useColorMode, Box } from '@yamada-ui/react'
import { CiDark, CiLight } from 'react-icons/ci'

export default function ThemeToggle() {
  const { colorMode, changeColorMode } = useColorMode()
  return (
    <Box gap='md' justifyContent='center'>
      {colorMode === 'light' ? (
        <Button
          w='full'
          justifyContent='center'
          alignItems='center'
          display='flex'
          variant='unstyled'
          onClick={() => changeColorMode('dark')}
        >
          <CiDark size='2rem' />
        </Button>
      ) : (
        <Button
          w='full'
          justifyContent='center'
          alignItems='center'
          display='flex'
          variant='unstyled'
          onClick={() => changeColorMode('light')}
        >
          <CiLight size='2rem' />
        </Button>
      )}
    </Box>
  )
}
