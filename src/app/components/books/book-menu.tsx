'use client'

import { AddButton } from '@/app/components/utils/buttons'
import Link from 'next/link'

type Props = {}

const BookMenu = (props: Props) => {
  return (
    <div className='flex justify-end my-2 mx-4'>
      <Link href='/books/create'>
        <AddButton />
      </Link>
    </div>
  )
}

export default BookMenu
