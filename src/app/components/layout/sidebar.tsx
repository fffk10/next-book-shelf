'use client'

import Link from 'next/link'

const Sidebar: React.FC = () => {
  return (
    <aside className='hidden md:block w-64 bg-white text-gray-900 p-4 border-r '>
      <nav>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/'>Contact</Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
