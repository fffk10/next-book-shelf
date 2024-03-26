import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { UIProvider } from '@yamada-ui/react'
import { theme } from '@/app/theme'
import { customConfig } from '@/app/theme/config'
import ThemeScript from '@/app/theme/script'
import { cookies } from 'next/headers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BookShelf',
  description: 'BookShelf',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookiesData = cookies()

  return (
    <html lang='ja'>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <ThemeScript />
        <UIProvider config={customConfig} theme={theme}>
          {children}
        </UIProvider>
      </body>
    </html>
  )
}
