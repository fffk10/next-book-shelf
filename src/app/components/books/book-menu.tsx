'use client'

import { CommonButton } from '@/app/components/common/buttons'
import { Flex, Stack } from '@yamada-ui/react'
import Link from 'next/link'

type Props = {}

const BookMenu = (props: Props) => {
  return (
    <Flex justifyContent='end'>
      {/* 検索 */}

      {/* 削除 */}
      <Stack mr={3}>
        <CommonButton text='削除' colorScheme='yellow' disable={true} />
      </Stack>

      {/* 追加 */}
      <Stack>
        <Link href='/books/create'>
          <CommonButton text='追加' />
        </Link>
      </Stack>
    </Flex>
  )
}

export default BookMenu
