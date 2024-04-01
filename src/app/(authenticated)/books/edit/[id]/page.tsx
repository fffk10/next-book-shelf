import PageTitle from '@/app/components/parts/page-title'
import Form from '@/app/features/book/components/form/form'
import { fetchBook } from '@/app/lib/books/data'
import { Stack } from '@yamada-ui/react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '書籍編集',
  description: 'edit book page',
}

type BookEditProps = {
  /** querystrings */
  params: {
    /** 書籍ID */
    id: number
  }
}

/**
 * 書籍編集ページ
 * @param params id 書籍ID
 * @returns 書籍編集ページ
 */
export default async function BookEdit({ params }: BookEditProps) {
  const book = await fetchBook(params.id)

  return (
    <Stack>
      <PageTitle text='書籍編集' />
      <Form book={book} />
    </Stack>
  )
}
