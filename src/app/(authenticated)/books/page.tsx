import PageTitle from '@/app/components/parts/page-title'
import BookMenu from '@/app/features/book/components/table/book-menu'
import BookTable from '@/app/features/book/components/table/book-table'
import { fetchBooks } from '@/app/lib/books/data'
import { Box } from '@yamada-ui/react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '書籍一覧',
  description: 'books page',
}

export default async function Books() {
  const books = await fetchBooks()

  return (
    <Box>
      <PageTitle text='書籍一覧' />

      <BookMenu />

      <BookTable books={books} />
    </Box>
  )
}
