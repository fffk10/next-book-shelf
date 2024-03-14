import LoginForm from '@/app/features/login/components/login-form'
import { Box, Flex, Heading, Link } from '@yamada-ui/react'

const Login = () => {
  return (
    <Box margin='auto' maxW='400px'>
      <Heading as='h2'>ログイン</Heading>

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
