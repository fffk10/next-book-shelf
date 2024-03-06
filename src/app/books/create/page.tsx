import CreateForm from '@/app/components/books/form/create-form'
import { Heading, Stack } from '@yamada-ui/react'

export default function Create() {
  return (
    <Stack>
      <Heading as='h2'>新規登録</Heading>

      <CreateForm />
    </Stack>
  )
}
