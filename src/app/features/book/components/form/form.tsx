'use client'

import FormButton from '@/app/features/book/components/form/form-button'
import FormInput, {
  FormInputProps,
} from '@/app/features/book/components/form/form-input'
import { createBook, editBook } from '@/app/lib/books/actions'
import { Book } from '@/app/models/Book'
import { ValidateMessageState } from '@/app/types/validate'
import {
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  Label,
  Stack,
  VStack,
} from '@yamada-ui/react'
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
  /** 編集画面か新規登録画面か */
  const isEdit = book ? true : false
  /** バリデーションメッセージ */
  const initialState: ValidateMessageState = { message: null, errors: {} }
  const action = isEdit ? editBook : createBook
  const [state, dispatch] = useFormState(action, initialState)
  /** 検索キーワード */
  const [searchKeyword, setSearchKeyword] = useState('')

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

  const handleSearchKeywordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value)
  }

  const handleSearch = async () => {
    if (searchKeyword.trim() === '') {
      console.log('検索キーワードが入力されていません。')
      return
    }

    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY
    const url = `${
      process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_URL
    }?q=${encodeURIComponent(searchKeyword)}&key=${apiKey}`

    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error('APIからのレスポンスが正常ではありません。')
      }
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.error('検索中にエラーが発生しました:', error)
    }
  }

  return (
    <Box as='form' p={4} action={dispatch}>
      <VStack maxW='800px'>
        {/* 書籍検索 */}
        <Label>キーワード検索</Label>
        <Flex>
          <Input
            name='search'
            value={searchKeyword}
            placeholder='書籍名/著者名など'
            onChange={handleSearchKeywordChange}
          />
          <Button onClick={handleSearch}>検索</Button>
        </Flex>

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
