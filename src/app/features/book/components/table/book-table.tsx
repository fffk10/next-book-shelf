'use client'

import {
  addMultiple,
  addSelectedIds,
} from '@/app/features/book/slice/booksSlice'
import { Book } from '@/app/models/Book'
import { AppDispatch, RootState } from '@/app/store'
import { Box } from '@yamada-ui/react'
import { Column, PagingTable } from '@yamada-ui/table'
import Link from 'next/link'
import { useEffect, useMemo } from 'react'
import { MdModeEdit } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'

type BookTableProps = {
  books: Book[]
}

export default function BookTable({ books }: BookTableProps) {
  const columns = useMemo<Column<Book>[]>(
    () => [
      {
        header: '#',
        accessorKey: 'id',
      },
      {
        header: '書籍名',
        accessorKey: 'title',
      },
      {
        header: '著者',
        accessorKey: 'author',
      },
      {
        header: '出版社',
        accessorKey: 'publisher',
      },
      {
        id: 'edit',
        header: '',
        cell: ({ row }) => (
          <Link
            href={`books/edit/${row.id}`}
            target='_blank'
            className='items-center'
          >
            <MdModeEdit />
          </Link>
        ),
      },
    ],
    []
  )

  const selectedIds = useSelector((state: RootState) => state.books.selectedIds)
  const dispatch: AppDispatch = useDispatch()
  useEffect(() => {
    dispatch(addMultiple(books))
  }, [books, dispatch])

  /**
   * 書籍選択ハンドラ
   * @param ids 選択済みの書籍IDリスト
   */
  const handleChangeSelect = (ids: string[]) => {
    dispatch(addSelectedIds(ids))
  }

  return (
    <Box h='full' maxW={{ base: 'full', sm: '90vw' }} overflow='auto'>
      <PagingTable
        w={{ base: 'full', sm: '80%' }}
        variant='striped'
        columns={columns}
        data={books}
        rowId='id'
        highlightOnHover
        selectedRowIds={selectedIds}
        onChangeSelect={handleChangeSelect}
        theadProps={{
          position: 'sticky',
          top: 0,
          left: 0,
          bg: ['gray.200', 'gray.800'],
          zIndex: 10,
        }}
      />
    </Box>
  )
}
