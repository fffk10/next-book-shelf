import Form from '@/app/features/book/components/form/form'
import { fetchBook } from '@/app/lib/books/data'
import { Stack, Heading } from '@yamada-ui/react'

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
      <Heading as='h2'>書籍編集</Heading>
      <Form book={book} />
    </Stack>
  )
}
