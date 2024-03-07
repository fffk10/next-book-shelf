'use client'

import { Book } from '@/app/models/Book'
import { Column, PagingTable } from '@yamada-ui/table'
import { useMemo } from 'react'

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
        header: 'ISBN番号',
        accessorKey: 'isbn',
      },
      {
        header: '出版社',
        accessorKey: 'publishedDate',
      },
      {
        header: 'カバー画像',
        accessorKey: 'coverImage',
      },
    ],
    []
  )

  return (
    <div className='max-h-[900px] overflow-y-auto'>
      <PagingTable
        variant='striped'
        columns={columns}
        data={books}
        highlightOnHover
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
