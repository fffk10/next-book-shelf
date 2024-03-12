import {
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Alert,
} from '@yamada-ui/react'
import { text } from 'stream/consumers'

type CommonAlertProps = {
  status: 'info' | 'success' | 'warning' | 'error'
  title?: string
  description?: string
}

export default function CommonAlert({
  status,
  title,
  description,
}: CommonAlertProps) {
  return (
    <Alert status={status}>
      <AlertIcon />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  )
}
