import type { NextAuthConfig } from 'next-auth'

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const isOnBooks = nextUrl.pathname.startsWith('/books')
      if (isOnBooks) {
        if (isLoggedIn) return true
        return false
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/books', nextUrl))
      }
      return true
    },
    async redirect({ url, baseUrl }) {
      return baseUrl + '/books'
    },
  },
  providers: [],
} satisfies NextAuthConfig
