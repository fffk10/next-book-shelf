import type { Metadata } from 'next'
import Footer from '@/app/components/layout/footer'
import Header from '@/app/components/layout/header'
import Main from '@/app/components/layout/main'
import { UIProvider } from '@yamada-ui/react'
import Providers from '@/app/providers'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ログインページ',
  description: 'login page',
}

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ja'>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Providers>
          <UIProvider>
            <Header />
            <div className='flex flex-1'>
              <Main>{children}</Main>
            </div>
            <Footer />
          </UIProvider>
        </Providers>
      </body>
    </html>
  )
}
