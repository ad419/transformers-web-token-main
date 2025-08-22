import React from 'react'
import './styles.css'
import TransformersCursor from '../../components/ui/TransformersCursor'
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
      <body className="bg-black" style={{ cursor: 'none' }}>
        <TransformersCursor />
        <main>{children}</main>
      </body>
    </html>
  )
}
