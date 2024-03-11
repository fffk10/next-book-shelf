import BookMenu from '@/app/features/book/components/table/book-menu'
import BookTable from '@/app/features/book/components/table/book-table'
import { fetchBooks } from '@/app/lib/books/data'
import { Heading, Stack } from '@yamada-ui/react'

export default async function Books() {
  const books = await fetchBooks()

  return (
    <Stack>
      <Heading as='h2'>書籍リスト</Heading>

      {/* menu */}
      <BookMenu />

      <BookTable books={books} />
    </Stack>
  )
}
