import PageTitle from '@/app/components/parts/page-title'
import Account from '@/app/features/settings/account'
import { VStack } from '@yamada-ui/react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '設定',
  description: 'settings page',
}

export default function Settings() {
  return (
    <VStack>
      <PageTitle text='設定画面' />

      <Account />
    </VStack>
  )
}
