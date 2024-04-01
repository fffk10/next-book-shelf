import SettingItem from '@/app/(authenticated)/settings/setting-item'
import Section from '@/app/components/layout/section'
import { Heading, Stack } from '@yamada-ui/react'

export default function Account() {
  return (
    <Section>
      <Heading as='h3' size='md'>
        アカウント
      </Heading>

      <Stack px={2}>
        <SettingItem item='ユーザー名' value='fffk10' />
      </Stack>
    </Section>
  )
}
