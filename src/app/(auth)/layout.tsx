import Footer from '@/app/components/layout/footer'
import Header from '@/app/components/layout/header'
import Main from '@/app/components/layout/main'
import { Flex } from '@yamada-ui/react'

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      <Flex>
        <Main>{children}</Main>
      </Flex>
      <Footer />
    </>
  )
}
