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
  List,
  ListItem,
  Stack,
  VStack,
} from '@yamada-ui/react'
import { ChangeEvent, useState } from 'react'
import { useFormState } from 'react-dom'
import { useDebounce } from 'react-use'

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
  /** 検索結果サジェスト */
  const [suggestions, setSuggestions] = useState<GoogleBook[]>([])
  /** サジェスト選択用index */
  const [focusedIndex, setFocusedIndex] = useState(-1)
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

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const eventKey = e.key
    if (
      eventKey === 'ArrowUp' ||
      eventKey === 'ArrowDown' ||
      eventKey === 'ConfirmEnter' ||
      eventKey === 'Escape'
    ) {
      e.preventDefault()
    }

    switch (eventKey) {
      case 'ArrowUp':
        setFocusedIndex((prevIndex) =>
          prevIndex <= 0 ? suggestions.length - 1 : prevIndex - 1
        )
        break

      case 'ArrowDown':
        setFocusedIndex((prevIndex) =>
          prevIndex === suggestions.length - 1 ? 0 : prevIndex + 1
        )
        break

      case 'ConfirmEnter':
        // ここで検索のAPIを叩く
        break

      case 'Escape':
        setSuggestions([])
        setFocusedIndex(-1)
        break
    }
  }

  const selectBook = (book: GoogleBook) => {
    console.log(`selected book=${book}`)
  }

  /**
   * 検索インプットデバウンス処理
   * 入力が終わってから500ms後に検索処理を実行
   */
  useDebounce(
    () => {
      if (searchKeyword.trim() === '') {
        return
      }
      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY
      const url = `${
        process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_URL
      }?q=${encodeURIComponent(searchKeyword)}&key=${apiKey}`

      const fetchBooks = async () => {
        try {
          const response = await fetch(url)
          if (!response.ok) {
            throw new Error('APIからのレスポンスが正常ではありません。')
          }
          const data = await response.json()
          setSuggestions(data.items)
        } catch (error) {
          console.error('検索中にエラーが発生しました:', error)
        }
      }

      fetchBooks()
    },
    1000,
    [searchKeyword]
  )

  return (
    <Box as='form' p={4} action={dispatch}>
      <VStack maxW='800px'>
        {/* 書籍検索 */}
        <Label>キーワード検索</Label>
        <Flex position='relative'>
          <Input
            name='search'
            value={searchKeyword}
            placeholder='書籍名/著者名など'
            onChange={handleSearchKeywordChange}
            onKeyDown={handleOnKeyDown}
          />
          {/* サジェスト */}
          {suggestions.length > 0 && (
            <List
              border={1}
              borderRadius={2}
              w='100%'
              px={2}
              py={2}
              bg={['white', 'gray.600']}
              position='absolute'
              top='100%'
              left={0}
              zIndex={50}
            >
              {suggestions.map((suggestion, i) => (
                <ListItem
                  key={suggestion.id}
                  tabIndex={i === focusedIndex ? 0 : -1}
                  border={1}
                  bg={i === focusedIndex ? 'gray.200' : 'transparent'}
                >
                  {suggestion.volumeInfo.title}
                </ListItem>
              ))}
            </List>
          )}
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

        {/* 各種入力項目 */}
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
