import Form from '@/app/features/book/components/form/form'
import { Heading, Stack } from '@yamada-ui/react'

export default function Create() {
  return (
    <Stack>
      <Heading as='h2'>書籍新規登録</Heading>

      <Form />
    </Stack>
  )
}
