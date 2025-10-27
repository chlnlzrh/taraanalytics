import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Sidebar } from '@/components/sidebar'
import { LayoutWrapper } from '@/components/layout-wrapper'

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
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </div>
      </body>
    </html>
  )
}