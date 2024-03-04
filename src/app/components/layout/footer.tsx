// app/components/Footer.tsx
'use client'

const Footer: React.FC = () => {
  return (
    <footer className='bg-gray-800 text-white p-4 text-center'>
      &copy; {new Date().getFullYear()} My Website
    </footer>
  )
}

export default Footer
