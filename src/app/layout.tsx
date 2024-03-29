import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { UIProvider, colorModeManager, ColorModeScript } from '@yamada-ui/react'

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
        <ColorModeScript type='cookie' nonce='testing' />
        <UIProvider colorModeManager={{ ...colorModeManager }.cookieStorage}>
          {children}
        </UIProvider>
      </body>
    </html>
  )
}
