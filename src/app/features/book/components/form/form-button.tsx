import { Stack, Button } from '@yamada-ui/react'

export default function FormButton() {
  return (
    <Stack>
      <Button colorScheme='gray' type='reset'>
        クリア
      </Button>
      <Button colorScheme='secondary' type='submit'>
        登録
      </Button>
    </Stack>
  )
}
