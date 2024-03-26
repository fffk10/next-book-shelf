import Footer from '@/app/components/layout/footer'
import Header from '@/app/components/layout/header'
import Sidebar from '@/app/components/layout/sidebar'
import Main from '@/app/components/layout/main'
import Providers from '@/app/providers'
import { signOut } from '../../../auth'

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
        <div className='flex flex-col h-[85vh]'>
          <Sidebar />
          <form
            action={async () => {
              'use server'
              await signOut()
            }}
            className='flex-none h-auto p-4'
          >
            <button>ログアウト</button>
          </form>
        </div>
        <Main>{children}</Main>
      </div>
      <Footer />
    </Providers>
  )
}
