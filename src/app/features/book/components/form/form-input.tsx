import { Book } from '@/app/models/Book'
import { BreakPoint } from '@/app/types/breakpoint'
import { ValidateMessageState } from '@/app/types/validate'
import { FormControl, Label, Input } from '@yamada-ui/react'
import { ChangeEvent } from 'react'

/**
 * @property name
 * @property label
 * @property placeholder
 * @property value
 * @property valueChange
 * @property size
 * @property validateMessageState
 */
export type FormInputProps = {
  name: string
  label: string
  placeholder?: string
  value?: Book
  valueChange?: (e: ChangeEvent<HTMLInputElement>) => void
  size?: BreakPoint
  validateMessageState?: ValidateMessageState
}

/**
 * Formを構成するInput要素
 * @param name 対象項目
 * @param label 項目ラベル名
 * @param placeholder プレイスホルダー
 * @param value 値
 * @param valueChange 値変更
 * @param size サイズ
 * @param validateMessageState バリデーションエラーメッセージ
 * @returns
 */
export default function FormInput({
  name,
  label,
  placeholder = '',
  value = { id: 0, title: '', author: '' },
  valueChange = () => {},
  size = 'md',
  validateMessageState = {},
}: FormInputProps) {
  return (
    <FormControl
      isInvalid={!!validateMessageState.errors?.[name]}
      errorMessage={validateMessageState.errors?.[name] ?? ''}
    >
      <Label>{label}</Label>

      <Input
        name={name}
        placeholder={placeholder}
        size={size}
        value={value[name as keyof Book]}
        onChange={valueChange}
      />
    </FormControl>
  )
}
