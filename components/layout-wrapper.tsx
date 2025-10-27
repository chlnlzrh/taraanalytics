'use client'

import { useMenuState } from '@/lib/menu-state'
import { cn } from '@/lib/utils'

interface LayoutWrapperProps {
  children: React.ReactNode
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  const { isCollapsed } = useMenuState()

  return (
    <main className={cn(
      "flex-1 overflow-y-auto bg-background transition-all duration-300",
      isCollapsed ? "md:ml-16" : "md:ml-64"
    )}>
      <div className="container mx-auto p-6 pt-16 md:pt-6">
        {children}
      </div>
    </main>
  )
}