import BookMenu from '@/app/features/book/components/table/book-menu'
import BookTable from '@/app/features/book/components/table/book-table'
import { fetchBooks } from '@/app/lib/books/data'
import { Box, Heading } from '@yamada-ui/react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '書籍一覧',
  description: 'books page',
}

export default async function Books() {
  const books = await fetchBooks()

  return (
    <Box>
      <Heading as='h2'>書籍一覧</Heading>

      <BookMenu />

      <BookTable books={books} />
    </Box>
  )
}
