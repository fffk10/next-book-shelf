'use client'

import { Box } from '@yamada-ui/react'

type MainProps = {
  children: React.ReactNode
}

export default function Main({ children }: MainProps) {
  return (
    <Box flexGrow={1} p={4}>
      {children}
    </Box>
  )
}
