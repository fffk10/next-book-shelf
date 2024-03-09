'use server'

import { QueryResult, sql } from '@vercel/postgres'
import { Book } from '@/app/models/Book'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export const fetchBook = async (id: number): Promise<Book> => {
  const book = await sql<Book>`
    SELECT * FROM books WHERE id = ${id}`

  return book.rows[0]
}

export const fetchBooks = async (): Promise<Book[]> => {
  const books = await sql<Book>`
    SELECT * FROM books ORDER BY id LIMIT 100`

  return books.rows
}

/**
 * 登録済み書籍削除
 * @param id 削除対象書籍のid
 */
export const deleteBooks = async (id: string): Promise<void> => {
  try {
    await sql`
      DELETE FROM books WHERE id IN (${id})
    `
  } catch (err) {
    console.log(err)
  }

  revalidatePath('/books')
  redirect('/books')
}
