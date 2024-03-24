'use server'

import { ValidateMessageState } from '@/app/types/validate'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { z } from 'zod'

const SignupFormSchema = z.object({
  username: z
    .string()
    .min(1, {
      message: 'ユーザー名は必須です',
    })
    .max(255, {
      message: 'ユーザー名は255文字以内で入力してください',
    }),
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
    username: formData.get('username'),
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

  const { username, email, password } = validatedFields.data

  const body = {
    username,
    email,
    password, // TODO 暗号化
  }
  await fetch(`${process.env.API_ENDPOINT}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  // TODO メールアドレス認証

  revalidatePath('/login')
  redirect('/login')
}
