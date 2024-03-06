import { sql } from '@vercel/postgres'
import { Book } from '@/app/models/Book'

export const fetchBooks = async (): Promise<Book[]> => {
  const books = await sql<Book>`
    SELECT *
    FROM books
    LIMIT 100`

  return books.rows
}
