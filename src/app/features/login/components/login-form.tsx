'use client'

import CommonAlert from '@/app/components/parts/alert'
import { authenticate } from '@/app/lib/login/actions'
import {
  FormControl,
  Label,
  Input,
  VStack,
  Stack,
  Button,
  InputGroup,
  InputRightElement,
  useBoolean,
} from '@yamada-ui/react'
import { useFormState, useFormStatus } from 'react-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined)

  const [showPassword, { toggle }] = useBoolean()

  return (
    <VStack mt={4} as='form' action={dispatch}>
      {errorMessage && (
        <CommonAlert
          status='error'
          description='メールアドレスまたはパスワードに誤りがあるか、登録されていません。'
        />
      )}

      <Stack>
        <FormControl>
          <Label>メールアドレス</Label>
          <Input name='email' placeholder='例) example@example.com' />
        </FormControl>
      </Stack>

      <Stack>
        <FormControl>
          <Label>パスワード</Label>
          <InputGroup>
            <Input
              name='password'
              pr='4.5rem'
              type={showPassword ? 'text' : 'password'}
              placeholder='例) password01'
            />

            <InputRightElement isClick>
              <Button variant='unstyled' size='sm' onClick={toggle}>
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </Stack>

      <Stack>
        <LoginButton />
      </Stack>
    </VStack>
  )
}

function LoginButton() {
  const { pending } = useFormStatus()

  return (
    <Button colorScheme='primary' type='submit' aria-disabled={pending}>
      ログイン
    </Button>
  )
}
