import { Heading } from '@yamada-ui/react'

type PageTitleProps = {
  text: string
}

export default function PageTitle({ text }: PageTitleProps) {
  return (
    <Heading as='h2' size='lg'>
      {text}
    </Heading>
  )
}
