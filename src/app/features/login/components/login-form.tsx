'use client'

import { CommonButton } from '@/app/components/parts/button'
import { authenticate } from '@/app/lib/login/actions'
import {
  FormControl,
  Label,
  Input,
  VStack,
  Stack,
  Button,
} from '@yamada-ui/react'
import { useFormState, useFormStatus } from 'react-dom'

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined)

  return (
    <VStack as='form' action={dispatch}>
      <Stack>
        <FormControl>
          <Label>メールアドレス</Label>
          <Input />
        </FormControl>
      </Stack>

      <Stack>
        <FormControl>
          <Label>password</Label>
          <Input />
        </FormControl>
      </Stack>

      <Stack>
        <CommonButton text='クリア' />
        {/* <LoginButton /> */}
      </Stack>

      {/* {errorMessage && <>ログイン失敗</>} */}
    </VStack>
  )
}

// function LoginButton() {
//   const { pending } = useFormStatus()

//   return <Button>Log in</Button>
// }
