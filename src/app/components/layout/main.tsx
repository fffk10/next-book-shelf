// app/components/Main.tsx
'use client'

type MainProps = {
  children: React.ReactNode
}

export default function Main({ children }: MainProps) {
  return <main className='flex-1 p-4 bg-white text-gray-900'>{children}</main>
}
