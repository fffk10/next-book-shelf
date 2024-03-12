'use client'

import CommonAlert from '@/app/components/parts/alert'
import { CommonButton } from '@/app/components/parts/button'
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
  Checkbox,
  Box,
} from '@yamada-ui/react'
import { useFormState, useFormStatus } from 'react-dom'

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
        <InputGroup>
          <Input
            pr='4.5rem'
            type={showPassword ? 'text' : 'password'}
            placeholder='例) password01'
          />

          <InputRightElement w='4.5rem' isClick>
            <Button h='1.75rem' size='sm' onClick={toggle}>
              {showPassword ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </Stack>

      <Stack>
        <LoginButton />
      </Stack>
    </VStack>
  )
}

function LoginButton() {
  const { pending } = useFormStatus()

  return <Button type='submit'>ログイン</Button>
}
