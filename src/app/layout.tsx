import './globals.css'
import { Urbanist,Figtree } from 'next/font/google'

const urbanist = Urbanist({
  subsets: ['latin'],
  variable: '--font-urbanist',
  display: 'swap',
})
const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-figtree',
  display: 'swap',
})

export const metadata = {
  title: 'Fametonic',
  description: 'Font test',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${figtree.variable}`}>
      <body className=" bg-black text-white">
        {children}
      </body>
    </html>
  )
}
