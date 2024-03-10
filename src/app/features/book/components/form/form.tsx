'use client'

import { useFormState } from 'react-dom'
import { createBook, editBook } from '@/app/lib/books/actions'
import { Stack, VStack, Input, Label, FormControl, Box } from '@yamada-ui/react'
import { ValidateMessageState } from '@/app/types/validate'
import FormInput, {
  FormInputProps,
} from '@/app/features/book/components/form/form-input'
import FormButton from '@/app/features/book/components/form/form-button'
import { Book } from '@/app/models/Book'
import { ChangeEvent, useState } from 'react'

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

const Form: React.FC<FormProps> = ({ book }) => {
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
    <Box as='form' action={dispatch}>
      <VStack>
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

export default Form
