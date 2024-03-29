import { ITEMS } from '@/app/components/layout/sidebar/sidebar-items'
import Link from 'next/link'
import { useEffect } from 'react'

interface DrawerProps {
  isOpen: boolean
  onClose: () => void
}

export default function Drawer({ isOpen, onClose }: DrawerProps) {
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
      <div
        className={`drawer-side fixed inset-y-0 left-0 w-64 bg-white text-gray-900 p-4 transition-all duration-500 transform -translate-x-full ${
          isOpen && 'translate-x-0'
        }`}
      >
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
            {ITEMS.map((item) => (
              <li key={item.name} className='m-3'>
                <Link
                  href={`/${item.href}`}
                  className='flex items-center text-lg'
                >
                  <span className='mr-2'>{item.icon}</span>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
