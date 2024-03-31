import Form from '@/app/features/book/components/form/form'
import { Heading, Stack } from '@yamada-ui/react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '書籍新規登録',
  description: 'create book page',
}

export default function Create() {
  return (
    <Stack>
      <Heading as='h2'>書籍新規登録</Heading>

      <Form />
    </Stack>
  )
}
