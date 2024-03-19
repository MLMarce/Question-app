import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Absolute Truth',
  description: 'Are you ready?',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative bg-[#111122] flex flex-col items-center p-2 w-screen h-screen`}>
        <div className='text-center'>
          <b className='text-white'>Welcome to the</b>
          <h1 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'>Absolute Truth</h1>
        </div>
        <div className='relative w-full h-auto flex-1 justify-center items-center'>
          {children}
        </div>
      </body>
    </html>
  )
}
