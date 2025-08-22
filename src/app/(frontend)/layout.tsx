import React from 'react'
import './styles.css'
import { Orbitron } from 'next/font/google'

export const metadata = {
  description: 'Transformers Token',
  title: 'Transformers',
}

const orbitron = Orbitron({
  subsets: ['latin'],
})

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" className={orbitron.className} suppressHydrationWarning>
      <body className="bg-black">
        <main>{children}</main>
      </body>
    </html>
  )
}
