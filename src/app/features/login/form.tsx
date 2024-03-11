import { CommonButton } from '@/app/components/parts/button'
import { FormControl, Label, Input, VStack, Stack } from '@yamada-ui/react'

export default function Form() {
  return (
    <VStack as='form' action=''>
      <Stack>
        <FormControl>
          <Label>ID</Label>
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
        <CommonButton text='ログイン' />
      </Stack>
    </VStack>
  )
}
