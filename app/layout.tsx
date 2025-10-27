import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Sidebar } from '@/components/sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TaraAnalytics - Multi-Unit Restaurant Chain Analytics',
  description: 'Comprehensive analytics platform for multi-unit restaurant chain operators to track, monitor, and optimize operational performance across all restaurants.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen flex">
          <Sidebar />
          <main className="flex-1 md:ml-64 overflow-y-auto bg-background">
            <div className="container mx-auto p-6 pt-16 md:pt-6">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  )
}