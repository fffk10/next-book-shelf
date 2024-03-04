// app/components/Main.tsx
'use client'

interface MainProps {
  children: React.ReactNode
}

const Main: React.FC<MainProps> = ({ children }) => {
  return <main className='flex-1 p-4 bg-white text-gray-900'>{children}</main>
}

export default Main
