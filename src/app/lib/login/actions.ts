'use server'

import { signIn } from '../../../../auth'
import { AuthError } from 'next-auth'

/**
 * ユーザー認証
 * @param prevState (未使用)
 * @param formData フォームデータ
 */
export const authenticate = async (
  prevState: string | undefined,
  formData: FormData
) => {
  try {
    await signIn('credentials', formData)
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.'
        default:
          return 'Something went wrong.'
      }
    }
    throw error
  }
}
