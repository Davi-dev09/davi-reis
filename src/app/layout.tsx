import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'David Reis - Desenvolvedor Web Senior',
  description: 'Portfolio profissional de David Reis, desenvolvedor web especializado em React, Next.js e TypeScript.',
  keywords: ['desenvolvedor', 'web developer', 'react', 'next.js', 'typescript'],
  openGraph: {
    title: 'David Reis - Desenvolvedor Web Senior',
    description: 'Código que gera resultados. Desenvolvimento web premium com foco em performance e conversão.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-slate-950 text-white overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}