'use client'

import FormButton from '@/app/features/book/components/form/form-button'
import FormInput, {
  FormInputProps,
} from '@/app/features/book/components/form/form-input'
import { createBook, editBook } from '@/app/lib/books/actions'
import { Book } from '@/app/models/Book'
import { ValidateMessageState } from '@/app/types/validate'
import { Box, FormControl, Input, Label, Stack, VStack } from '@yamada-ui/react'
import { ChangeEvent, useState } from 'react'
import { useFormState } from 'react-dom'

/** Form入力要素 */
const FormInputList: FormInputProps[] = [
  {
    name: 'title',
    label: '書籍名',
    placeholder: '書籍名',
    size: 'md',
  },
  {
    name: 'author',
    label: '作者',
    placeholder: '作者',
    size: 'md',
  },
]

const initBook: Book = {
  id: 0,
  title: '',
  author: '',
  isbn: '',
  publisher: '',
  publishedDate: '',
  description: '',
  coverImage: '',
}

type FormProps = {
  book?: Book // 編集対象の書籍 propsに渡されない場合は新規登録
}

export default function Form({ book }: FormProps) {
  const isEdit = book ? true : false
  // バリデーションメッセージ
  const initialState: ValidateMessageState = { message: null, errors: {} }
  const action = isEdit ? editBook : createBook
  const [state, dispatch] = useFormState(action, initialState)

  // フォームの入力内容
  const [formValue, setFormValue] = useState<Book>(
    isEdit && book ? book : initBook
  )
  /**
   * フォーム内容更新ハンドラ
   * @param e イベント
   */
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Box as='form' p={4} action={dispatch}>
      <VStack maxW='800px'>
        {/* 編集画面はIDを表示 */}
        {isEdit && (
          <Stack key={book?.id}>
            <FormControl>
              <Label>ID</Label>
              <Input name='id' value={book?.id} readOnly />
            </FormControl>
          </Stack>
        )}

        {FormInputList.map((elem) => (
          <Stack key={elem.name}>
            <FormInput
              name={elem.name}
              label={elem.label}
              placeholder={elem.placeholder}
              value={formValue}
              valueChange={handleOnChange}
              size={elem.size}
              validateMessageState={state}
            />
          </Stack>
        ))}

        <FormButton />
      </VStack>
    </Box>
  )
}
