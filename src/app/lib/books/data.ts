import { sql } from '@vercel/postgres'
import { Book } from '@/app/models/Book'

export const fetchBooks = async (): Promise<Book[]> => {
  const books = await sql<Book>`
    SELECT *
    FROM books
    LIMIT 5`

  return books.rows
}
