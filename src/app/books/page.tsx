import BookMenu from '@/app/components/books/book-menu'
import BookTable from '@/app/components/books/book-table'
import { fetchBooks } from '@/app/lib/books/actions'
import { Heading } from '@yamada-ui/react'

export default async function Books() {
  const books = fetchBooks()
  return (
    <div>
      <Heading as='h2'>書籍リスト</Heading>

      {/* menu */}
      <BookMenu />

      <BookTable books={books} />
    </div>
  )
}
