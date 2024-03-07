'use client'

import { add, addMultiple, remove, clear } from '@/app/books/booksSlice'
import { CommonButton } from '@/app/components/common/buttons'
import { Book } from '@/app/models/Book'
import { AppDispatch, RootState } from '@/app/store'
import { Flex, Stack } from '@yamada-ui/react'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'

const BookMenu = () => {
  const books = useSelector((state: RootState) => state.books.books)
  const dispatch: AppDispatch = useDispatch()

  const handleAddBook = (book: Book) => {
    dispatch(add(book))
  }

  const handleAddMultipleBooks = (books: Book[]) => {
    dispatch(addMultiple(books))
  }

  const handleRemoveBook = (id: number) => {
    dispatch(remove(id))
  }

  const handleClearBooks = () => {
    dispatch(clear())
  }

  return (
    <Flex justifyContent='end'>
      {/* 検索 */}
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>

      {/* 削除 */}
      <Stack mr={3}>
        <CommonButton
          text='削除'
          colorScheme='yellow'
          disable={false}
          onClick={() => console.log()}
        />
      </Stack>

      {/* 追加 */}
      <Stack>
        <Link href='/books/create'>
          <CommonButton text='追加' />
        </Link>
      </Stack>
    </Flex>
  )
}

export default BookMenu
