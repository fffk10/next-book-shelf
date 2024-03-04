// app/components/Drawer.tsx
'use client'

import { useEffect } from 'react'

interface DrawerProps {
  isOpen: boolean
  onClose: () => void
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      window.addEventListener('keydown', handleEscape)
    }

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  return (
    <div
      className={`fixed inset-0 z-50 ${
        isOpen ? 'block' : 'hidden'
      } bg-black bg-opacity-50`}
    >
      <div className='fixed inset-y-0 left-0 w-64 bg-white p-4'>
        <button className='mb-4' onClick={onClose}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
        <nav>
          <ul>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Drawer
