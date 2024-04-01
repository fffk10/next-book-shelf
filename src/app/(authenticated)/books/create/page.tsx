import PageTitle from '@/app/components/parts/page-title'
import Form from '@/app/features/book/components/form/form'
import { Box } from '@yamada-ui/react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '書籍新規登録',
  description: 'create book page',
}

export default function Create() {
  return (
    <Box>
      <PageTitle text='書籍新規登録' />

      <Form />
    </Box>
  )
}
