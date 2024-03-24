'use client'

import { signup } from '@/app/lib/signup/action'
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
  const initialState = { message: '', errors: {} }
  const [state, dispatch] = useFormState(signup, initialState)

  const [showPassword, { toggle }] = useBoolean()

  return (
    <VStack as='form' mt={4} action={dispatch}>
      <Stack>
        <FormControl>
          <Label>ユーザー名</Label>
          <Input name='username' />
        </FormControl>
      </Stack>

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
      登録
    </Button>
  )
}
