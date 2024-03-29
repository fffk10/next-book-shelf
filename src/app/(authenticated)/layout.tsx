import Footer from '@/app/components/layout/footer'
import Header from '@/app/components/layout/header'
import Sidebar from '@/app/components/layout/sidebar/sidebar'
import Main from '@/app/components/layout/main'
import Providers from '@/app/providers'

type AuthenticatedLayoutProps = {
  children: React.ReactNode
}

export default function AuthenticatedLayout({
  children,
}: AuthenticatedLayoutProps) {
  return (
    <Providers>
      <Header />
      <div className='flex flex-1'>
        <div className='flex flex-col'>
          <Sidebar />
        </div>
        <Main>{children}</Main>
      </div>
      <Footer />
    </Providers>
  )
}
