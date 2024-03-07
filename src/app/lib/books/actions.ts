'use server'

import { ValidateMessageState } from '@/app/types/validate'
import { sql } from '@vercel/postgres'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { z } from 'zod'

const FormSchema = z.object({
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

const CreateBook = FormSchema.omit({})

/**
 * 書籍新規登録
 * @param prevState (未使用)
 * @param formData フォームデータ
 */
export const createBook = async (
  prevState: ValidateMessageState,
  formData: FormData
): Promise<ValidateMessageState | void> => {
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

  const isbn = '1234567' // TODO book apiで取ってくる
  await sql`
    INSERT INTO books (title, author, isbn)
    VALUES (${title}, ${author}, ${isbn})
    `

  revalidatePath('/books')
  redirect('/books')
}

/**
 * 登録済み書籍削除
 * @param ids 削除対象書籍のids(単体削除にも対応)
 */
export const deleteBooks = async (ids: string | string[]): Promise<void> => {
  // 単体でidを渡された場合は配列に変換 TODO ここでnumberに変更するのは気持ち悪い
  const targetIds = Array.isArray(ids) ? ids.map(Number) : [Number(ids)]

  try {
    // TODO 複数消すときに"3,4"となっている
    await sql`
      DELETE FROM books WHERE id IN (${targetIds.join(',')})
    `
  } catch (err) {
    console.log(err)
  }

  revalidatePath('/books')
  redirect('/books')
}
