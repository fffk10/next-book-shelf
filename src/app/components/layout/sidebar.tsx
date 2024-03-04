// app/components/Sidebar.tsx
'use client'

const Sidebar: React.FC = () => {
  return (
    <aside className='hidden md:block w-64 bg-gray-200 p-4'>
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
    </aside>
  )
}

export default Sidebar
