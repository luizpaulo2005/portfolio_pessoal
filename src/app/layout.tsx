import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portifólio - Luiz Paulo',
  description: 'Portifólio de Luiz Paulo, web developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="br">
      <body className={`${inter.className} bg-gray-900 text-zinc-200 `}>{children}</body>
    </html>
  )
}
