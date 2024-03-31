import Footer from '@/app/components/layout/footer'
import Header from '@/app/components/layout/header'
import Main from '@/app/components/layout/main'
import Sidebar from '@/app/components/layout/sidebar/sidebar'
import Providers from '@/app/providers'
import { Flex } from '@yamada-ui/react'

type AuthenticatedLayoutProps = {
  children: React.ReactNode
}

export default function AuthenticatedLayout({
  children,
}: AuthenticatedLayoutProps) {
  return (
    <Providers>
      <Header />
      <Flex flexGrow={1}>
        <Flex flexDirection='column'>
          <Sidebar />
        </Flex>
        <Main>{children}</Main>
      </Flex>
      <Footer />
    </Providers>
  )
}
