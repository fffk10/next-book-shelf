import PageTitle from '@/app/components/parts/page-title'
import LoginForm from '@/app/features/login/components/login-form'
import { Box, Flex, Link } from '@yamada-ui/react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ログインページ',
  description: 'login page',
}

const Login = () => {
  return (
    <Box margin='auto' maxW='400px'>
      <PageTitle text='ログイン' />

      <Flex m='0' justifyContent='end'>
        <Link href='/signup' w='140px'>
          会員登録はこちら
        </Link>
      </Flex>

      <LoginForm />
    </Box>
  )
}

export default Login
