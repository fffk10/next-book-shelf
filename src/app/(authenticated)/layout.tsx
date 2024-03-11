import Footer from '@/app/components/layout/footer'
import Header from '@/app/components/layout/header'
import Sidebar from '@/app/components/layout/sidebar'
import Main from '@/app/components/layout/main'
import Providers from '@/app/providers'
import { UIProvider } from '@yamada-ui/react'

type AuthenticatedLayoutProps = {
  children: React.ReactNode
}

export default function AuthenticatedLayout({
  children,
}: AuthenticatedLayoutProps) {
  return (
    <Providers>
      <UIProvider>
        <Header />
        <div className='flex flex-1'>
          <Sidebar />
          <Main>{children}</Main>
        </div>
        <Footer />
      </UIProvider>
    </Providers>
  )
}
