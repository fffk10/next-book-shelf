export type ValidateMessageState = {
  errors?: {
    [key: string]: string[]
  }
  message?: string | null
}
