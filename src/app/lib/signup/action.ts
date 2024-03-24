'use server'

import { ValidateMessageState } from '@/app/types/validate'
import { sql } from '@vercel/postgres'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { date, z } from 'zod'

const SignupFormSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: 'メールアドレスは必須です',
    })
    .max(255, {
      message: 'メールアドレスは255文字以内で入力してください',
    }),
  password: z
    .string()
    .min(1, {
      message: 'パスワードは必須です',
    })
    .max(255, {
      message: 'パスワードは255文字以内で入力してください',
    }),
})

const Signup = SignupFormSchema.omit({})

/**
 * ユーザー登録
 * @param prevState (未使用)
 * @param formData フォームデータ
 */
export const signup = async (
  prevState: ValidateMessageState,
  formData: FormData
) => {
  const validatedFields = Signup.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  })

  if (!validatedFields.success) {
    const errors = {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Signup.',
    }
    console.error(errors)
    return errors
  }

  // TODO ユーザー登録
  // await sql`
  // INSERT INTO invoices (customer_id, amount, status, date)
  // `

  revalidatePath('/login')
  redirect('/login')
}
