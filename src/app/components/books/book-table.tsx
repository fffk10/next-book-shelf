'use client'

import { addMultiple, addSelectedIds } from '@/app/books/booksSlice'
import { Book } from '@/app/models/Book'
import { AppDispatch, RootState } from '@/app/store'
import { Column, PagingTable } from '@yamada-ui/table'
import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

type BookTableProps = {
  books: Book[]
}

const BookTable: React.FC<BookTableProps> = ({ books }) => {
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
    ],
    []
  )

  const selectedIds = useSelector((state: RootState) => state.books.selectedIds)
  const dispatch: AppDispatch = useDispatch()
  useEffect(() => {
    dispatch(addMultiple(books))
  }, [books, dispatch])

  const handleChangeSelect = (ids: string[]) => {
    dispatch(addSelectedIds(ids))
  }

  return (
    <div className='max-h-[900px] overflow-y-auto'>
      <PagingTable
        variant='striped'
        columns={columns}
        data={books}
        rowId='id'
        highlightOnHover
        selectedRowIds={selectedIds}
        onChangeSelect={handleChangeSelect}
        rowsClickSelect
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

export default BookTable
