import { customConfig } from '@/app/features/theme/config'
import { UIProvider, colorModeManager } from '@yamada-ui/react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

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
        <UIProvider
          config={customConfig}
          colorModeManager={{ ...colorModeManager }.cookieStorage}
        >
          {children}
        </UIProvider>
      </body>
    </html>
  )
}
