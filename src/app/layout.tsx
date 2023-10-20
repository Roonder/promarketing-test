import type { Metadata } from 'next'
import {Poppins} from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: "Promarketing Test",
  description: 'Promarketing Technical Test for Frontend Developer\'s position',
}

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700']
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
