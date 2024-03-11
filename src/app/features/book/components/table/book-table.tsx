'use client'

import {
  addMultiple,
  addSelectedIds,
} from '@/app/features/book/slice/booksSlice'
import { Book } from '@/app/models/Book'
import { AppDispatch, RootState } from '@/app/store'
import { Column, PagingTable, Row } from '@yamada-ui/table'
import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdModeEdit } from 'react-icons/md'
import Link from 'next/link'

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
    <div className='h-[700px] overflow-y-auto'>
      <PagingTable
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
          bg: ['gray.200', 'red.700'],
          zIndex: 10,
        }}
      />
    </div>
  )
}
