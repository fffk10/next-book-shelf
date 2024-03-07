import BookMenu from '@/app/components/books/book-menu'
import BookTable from '@/app/components/books/book-table'
import { fetchBooks } from '@/app/lib/books/data'
import { AppDispatch, RootState } from '@/app/store'
import { Heading, Stack } from '@yamada-ui/react'
import { useSelector, useDispatch } from 'react-redux'

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
