'use client'

import { CommonButton } from '@/app/components/common/buttons'
import CommonModal from '@/app/components/common/modal'
import { deleteBooks } from '@/app/lib/books/actions'
import { AppDispatch, RootState } from '@/app/store'
import { Flex, List, ListItem, Stack, Text } from '@yamada-ui/react'
import Link from 'next/link'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const BookMenu = () => {
  // 書籍状態管理
  const books = useSelector((state: RootState) => state.books.books)
  const selectedIds = useSelector((state: RootState) => state.books.selectedIds)
  const dispatch: AppDispatch = useDispatch()

  const [openDeleteModal, setOpenDeleteModal] = useState(false)

  /**
   * 削除確認モーダル表示内容作成メソッド
   * @returns 削除確認モーダルに表示するJSX
   */
  const makeDeleteModalContent = (): React.ReactNode => {
    return (
      <>
        <Text>以下の書籍を削除しますがよろしいですか？</Text>
        <List>
          {selectedIds.map((id) => {
            const book = books.find((book) => id == book.id.toString())
            return (
              <ListItem key={id}>
                {id}: {book?.title}
              </ListItem>
            )
          })}
        </List>
      </>
    )
  }

  /**
   * 削除確認モーダル 実削除処理
   */
  const handleDelete = async (): Promise<void> => {
    // TODO 消せるけど遅い
    // TODO Loading
    await deleteBooks(selectedIds)
  }

  return (
    <>
      <Flex justifyContent='end'>
        {/* 検索 */}

        {/* 削除 */}
        <Stack mr={3}>
          <CommonButton
            text='削除'
            colorScheme='yellow'
            disable={false}
            onClick={() => setOpenDeleteModal(true)}
          />
        </Stack>

        {/* 追加 */}
        <Stack>
          <Link href='/books/create'>
            <CommonButton text='追加' />
          </Link>
        </Stack>
      </Flex>
      <CommonModal
        isOpen={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        title='書籍削除確認'
        content={makeDeleteModalContent()}
        size='4xl'
        confirmText='削除する'
        onConfirm={handleDelete}
      />
    </>
  )
}

export default BookMenu
