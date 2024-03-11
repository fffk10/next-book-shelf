import { FormControl, Label, Input, Button, Stack, Box } from '@yamada-ui/react'

export default function Form() {
  return (
    <Box as='form' action=''>
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
        <Button>クリア</Button>
        <Button>ログイン</Button>
      </Stack>
    </Box>
  )
}
