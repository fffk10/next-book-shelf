import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeSchemeScript } from '@yamada-ui/react'
import config from 'next/config'

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
  return (
    <html lang='ja'>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <ThemeSchemeScript type='cookie' nonce='testing' />
        {children}
      </body>
    </html>
  )
}
