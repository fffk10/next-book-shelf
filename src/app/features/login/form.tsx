import form from '@/app/features/book/components/form/form'
import { FormControl, Label, Input, Button, Stack, Box } from '@yamada-ui/react'

const Form: React.FC = () => {
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

export default Form
