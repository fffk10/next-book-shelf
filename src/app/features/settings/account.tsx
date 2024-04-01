import Section from '@/app/components/layout/section'
import { Flex, Heading, Stack, Text } from '@yamada-ui/react'

export default function Account() {
  return (
    <Section>
      <Heading as='h3' size='md'>
        アカウント
      </Heading>

      <Stack px={2}>
        <Flex>
          <Heading as='h4' size='sm' opacity={0.5}>
            ユーザー名
          </Heading>
          <Text>ユーザー名</Text>
        </Flex>
      </Stack>
    </Section>
  )
}
