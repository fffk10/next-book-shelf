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

export default function SignupForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined)

  const [showPassword, { toggle }] = useBoolean()

  return (
    <VStack mt={4} as='form' action={dispatch}>
      {errorMessage && (
        <CommonAlert
          status='error'
          description='このメールアドレスは既に登録されています。'
        />
      )}

      <Stack>
        <FormControl helperMessage='メールアドレスは後から変更できます。'>
          <Label>メールアドレス</Label>
          <Input name='email' placeholder='例) example@example.com' />
        </FormControl>
      </Stack>

      <Stack>
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
      </Stack>

      <Stack>
        <RegisterButton />
      </Stack>
    </VStack>
  )
}

function RegisterButton() {
  const { pending } = useFormStatus()

  return (
    <Button colorScheme='primary' type='submit' aria-disabled={pending}>
      ログイン
    </Button>
  )
}
