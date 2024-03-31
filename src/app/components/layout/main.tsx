'use client'

import { Flex } from '@yamada-ui/react'

type MainProps = {
  children: React.ReactNode
}

export default function Main({ children }: MainProps) {
  return <Flex p={4}>{children}</Flex>
}
