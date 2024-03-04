import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/app/components/layout/footer'
import Header from '@/app/components/layout/header'
import Sidebar from '@/app/components/layout/sidebar'
import Main from '@/app/components/layout/main'
import { UIProvider } from '@yamada-ui/react'

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
        <UIProvider>
          <Header />
          <div className='flex flex-1'>
            <Sidebar />
            <Main>{children}</Main>
          </div>
          <Footer />
        </UIProvider>
      </body>
    </html>
  )
}
