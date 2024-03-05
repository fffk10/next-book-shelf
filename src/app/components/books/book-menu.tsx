'use client'

import { AddButton } from '@/app/components/utils/buttons'

type Props = {}

const BookMenu = (props: Props) => {
  return (
    <div className='flex justify-end my-2 mx-4'>
      <AddButton onClick={() => console.log('clicked!')} />
    </div>
  )
}

export default BookMenu
