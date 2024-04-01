import { Flex, Heading, Text } from '@yamada-ui/react'

type SettingItemProps = {
  /** 項目名 */
  item: string
  /** 値 */
  value: string
}

export default function SettingItem({ item, value }: SettingItemProps) {
  return (
    <Flex>
      <Heading as='h4' size='sm' flexGrow={1} opacity={0.5}>
        {item}
      </Heading>
      <Text flexGrow={3} opacity={0.5}>
        {value}
      </Text>
    </Flex>
  )
}
