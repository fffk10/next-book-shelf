import type { NextAuthConfig } from 'next-auth'

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      if (isLoggedIn) return true
      return false
    },
    async redirect({ url, baseUrl }) {
      return baseUrl + '/books'
    },
  },
  providers: [],
} satisfies NextAuthConfig
