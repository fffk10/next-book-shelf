import PageTitle from '@/app/components/parts/page-title'
import SignupForm from '@/app/features/signup/components/signup-form'
import { Box } from '@yamada-ui/react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '会員登録ページ',
  description: 'signup page',
}

const Signup = () => {
  return (
    <Box margin='auto' maxW='400px'>
      <PageTitle text='会員登録' />

      <SignupForm />
    </Box>
  )
}

export default Signup
