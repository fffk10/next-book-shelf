import LoginForm from '@/app/features/login/components/login-form'
import { Box, Heading } from '@yamada-ui/react'

const Login = () => {
  return (
    <Box margin='auto' maxW='400px'>
      <Heading as='h2'>ログイン</Heading>

      <LoginForm />
    </Box>
  )
}

export default Login
