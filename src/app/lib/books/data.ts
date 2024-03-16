'use server'

import { sql } from '@vercel/postgres'
import { Book } from '@/app/models/Book'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

const baseUrl = 'http://localhost:3333/books'

export const fetchBook = async (id: number): Promise<Book> => {
  const response = await fetch(`${baseUrl}/${id}`)
  const data = await response.json()

  return data
}

export const fetchBooks = async (): Promise<Book[]> => {
  const response = await fetch(baseUrl)
  const data = await response.json()

  return data
}

/**
 * 登録済み書籍削除
 * @param id 削除対象書籍のid
 */
export const deleteBook = async (id: string): Promise<void> => {
  try {
    await fetch(`${baseUrl}/${id}`, {
      method: 'DELETE',
    })
  } catch (err) {
    console.error(err)
  }

  revalidatePath('/books')
  redirect('/books')
}
