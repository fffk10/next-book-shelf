'use server'

import { ValidateMessageState } from '@/app/types/validate'
import { sql } from '@vercel/postgres'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { z } from 'zod'

const CreateFormSchema = z.object({
  title: z
    .string()
    .min(1, {
      message: '書籍名は必須です',
    })
    .max(255, {
      message: '書籍名は255文字以内で入力してください',
    }),
  author: z
    .string()
    .min(1, {
      message: '作者は必須です',
    })
    .max(255, {
      message: '作者は255文字以内で入力してください',
    }),
  // isbn: z.string(),
  // publisher: z.string(),
  // publishedDate: z.string(),
  // description: z.string(),
  // coverImage: z.string(),
})

const EditFormSchema = z.object({
  id: z.string(),
  title: z
    .string()
    .min(1, {
      message: '書籍名は必須です',
    })
    .max(255, {
      message: '書籍名は255文字以内で入力してください',
    }),
  author: z
    .string()
    .min(1, {
      message: '作者は必須です',
    })
    .max(255, {
      message: '作者は255文字以内で入力してください',
    }),
  // isbn: z.string(),
  // publisher: z.string(),
  // publishedDate: z.string(),
  // description: z.string(),
  // coverImage: z.string(),
})

const CreateBook = CreateFormSchema.omit({})
const PutBook = EditFormSchema.omit({})

/**
 * 書籍新規登録
 * @param prevState (未使用)
 * @param formData フォームデータ
 */
export const createBook = async (
  prevState: ValidateMessageState,
  formData: FormData
): Promise<ValidateMessageState> => {
  console.log('create start')
  console.log(`formData=${JSON.stringify(formData)}`)

  const validatedFields = CreateBook.safeParse({
    title: formData.get('title'),
    author: formData.get('author'),
  })

  if (!validatedFields.success) {
    const errors = {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Book.',
    }
    console.log(errors)
    return errors
  }

  const { title, author } = validatedFields.data
  console.log(`title=${title}, author=${author}`)

  const isbn = '1234567' // TODO book apiで取ってくる
  await sql`
    INSERT INTO books (title, author, isbn)
    VALUES (${title}, ${author}, ${isbn})
    `

  revalidatePath('/books')
  redirect('/books')
}

/**
 * 書籍更新
 * @param prevState (未使用)
 * @param formData フォームデータ
 */
export const editBook = async (
  prevState: ValidateMessageState,
  formData: FormData
): Promise<ValidateMessageState> => {
  const validatedFields = PutBook.safeParse({
    id: formData.get('id'),
    title: formData.get('title'),
    author: formData.get('author'),
  })

  if (!validatedFields.success) {
    const errors = {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Edit Book.',
    }
    console.log(errors)
    return errors
  }

  const { id, title, author } = validatedFields.data

  const isbn = '1234567' // TODO book apiで取ってくる
  await sql`
    UPDATE books SET 
    title = ${title},
    author = ${author}, 
    isbn = ${isbn}
    WHERE id = ${id} 
    `

  revalidatePath('/books')
  redirect('/books')
}
