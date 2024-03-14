import SignupForm from '@/app/features/signup/components/signup-form'
import { Box, Heading } from '@yamada-ui/react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '会員登録ページ',
  description: 'signup page',
}

const Signup = () => {
  return (
    <Box margin='auto' maxW='400px'>
      <Heading as='h2'>会員登録</Heading>

      <SignupForm />
    </Box>
  )
}

export default Signup
