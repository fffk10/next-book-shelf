import { Stack } from '@yamada-ui/react'

export default function Section({ children }: { children: React.ReactNode }) {
  return <Stack px={2}>{children}</Stack>
}
