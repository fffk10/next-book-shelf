import { BreakPoint } from '@/app/types/breakpoint'
import { ValidateMessageState } from '@/app/types/validate'
import { FormControl, Label, Input } from '@yamada-ui/react'

/**
 * @property name
 * @property label
 * @property placeholder
 * @property size
 * @property validateMessageState
 */
export type FormInputProps = {
  name: string
  label: string
  placeholder?: string
  size?: BreakPoint
  validateMessageState?: ValidateMessageState
}

/**
 * Formを構成するInput要素
 * @param name 対象項目
 * @param label 項目ラベル名
 * @param placeholder プレイスホルダー
 * @param size サイズ
 * @param validateMessageState バリデーションエラーメッセージ
 * @returns
 */
const FormInput: React.FC<FormInputProps> = ({
  name,
  label,
  placeholder = '',
  size = 'md',
  validateMessageState = {},
}) => {
  return (
    <FormControl
      isInvalid={!!validateMessageState.errors?.[name]}
      errorMessage={validateMessageState.errors?.[name] ?? ''}
    >
      <Label>{label}</Label>
      <Input name={name} placeholder={placeholder} size={size} />
    </FormControl>
  )
}

export default FormInput
