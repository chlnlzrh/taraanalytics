'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  BarChart3, 
  DollarSign, 
  Settings, 
  Users, 
  ShoppingCart, 
  ChefHat, 
  Shield, 
  Smartphone, 
  TrendingUp, 
  FileText,
  ChevronDown,
  Menu,
  Home
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { useMenuState } from '@/lib/menu-state'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

interface MenuSection {
  id: string
  title: string
  icon: React.ComponentType<{ className?: string }>
  href?: string
  items?: Array<{
    title: string
    href: string
    description?: string
  }>
}

const menuSections: MenuSection[] = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    icon: Home,
    href: '/',
  },
  {
    id: 'financial',
    title: 'Financial Performance',
    icon: DollarSign,
    items: [
      { title: 'Revenue & Sales', href: '/financial/revenue' },
      { title: 'Profitability & Margins', href: '/financial/profitability' },
      { title: 'India-Specific Financial', href: '/financial/india-specific' },
    ],
  },
  {
    id: 'operational',
    title: 'Operational Efficiency',
    icon: BarChart3,
    items: [
      { title: 'Service & Capacity', href: '/operational/service' },
      { title: 'Labor Productivity', href: '/operational/productivity' },
      { title: 'Inventory & Assets', href: '/operational/inventory' },
      { title: 'Order Accuracy & Waste', href: '/operational/accuracy' },
    ],
  },
  {
    id: 'customer',
    title: 'Customer Experience',
    icon: Users,
    items: [
      { title: 'Acquisition & Traffic', href: '/customer/acquisition' },
      { title: 'Retention & Loyalty', href: '/customer/retention' },
      { title: 'Satisfaction & Reputation', href: '/customer/satisfaction' },
    ],
  },
  {
    id: 'food-cost',
    title: 'Food Cost & Inventory',
    icon: ChefHat,
    items: [
      { title: 'Cost Metrics', href: '/food-cost/metrics' },
      { title: 'Variance & Yield', href: '/food-cost/variance' },
      { title: 'Inventory Optimization', href: '/food-cost/optimization' },
      { title: 'Supplier Performance', href: '/food-cost/supplier' },
    ],
  },
  {
    id: 'labor',
    title: 'Labor Management',
    icon: Users,
    items: [
      { title: 'Labor Cost & Productivity', href: '/labor/cost' },
      { title: 'Workforce Stability', href: '/labor/stability' },
      { title: 'Staffing & Training', href: '/labor/staffing' },
    ],
  },
  {
    id: 'quality',
    title: 'Quality & Compliance',
    icon: Shield,
    items: [
      { title: 'Food Safety & Hygiene', href: '/quality/safety' },
      { title: 'Operational Compliance', href: '/quality/compliance' },
    ],
  },
  {
    id: 'digital',
    title: 'Digital & Marketing',
    icon: Smartphone,
    items: [
      { title: 'Digital Channel Mix', href: '/digital/channels' },
      { title: 'Aggregator Operations', href: '/digital/aggregator' },
      { title: 'Marketing Performance', href: '/digital/marketing' },
    ],
  },
  {
    id: 'comparative',
    title: 'Comparative Analytics',
    icon: TrendingUp,
    items: [
      { title: 'Location Performance', href: '/comparative/location' },
      { title: 'Item & Menu Analytics', href: '/comparative/menu' },
      { title: 'Operational Consistency', href: '/comparative/consistency' },
      { title: 'Best Practice Identification', href: '/comparative/best-practices' },
    ],
  },
  {
    id: 'reports',
    title: 'Reports',
    icon: FileText,
    href: '/reports',
  },
  {
    id: 'settings',
    title: 'Settings',
    icon: Settings,
    href: '/settings',
  },
  {
    id: 'kpi',
    title: 'KPI Deep Dive',
    icon: TrendingUp,
    items: [
      { title: 'Prime Cost % (FIN_008)', href: '/kpi/prime-cost' },
    ],
  },
]

interface SidebarContentProps {
  onItemClick?: () => void
}

function SidebarContent({ onItemClick }: SidebarContentProps) {
  const pathname = usePathname()
  const { expandedSections, toggleSection } = useMenuState()

  const isActiveSection = (section: MenuSection) => {
    if (section.href) {
      return pathname === section.href
    }
    return section.items?.some(item => pathname === item.href) || false
  }

  const isActiveItem = (href: string) => pathname === href

  return (
    <div className="flex flex-col h-full">
      <div className="p-6 border-b">
        <h1 className="text-xs font-bold text-black dark:text-white">
          TaraAnalytics
        </h1>
      </div>
      
      <nav className="flex-1 p-4 space-y-0.5 overflow-y-auto">
        {menuSections.map((section) => {
          const isExpanded = expandedSections.includes(section.id)
          const isActive = isActiveSection(section)
          const Icon = section.icon

          if (section.href) {
            return (
              <Link
                key={section.id}
                href={section.href}
                onClick={onItemClick}
                className={cn(
                  'flex items-center gap-3 py-1 px-2 rounded-md text-xs font-normal transition-colors duration-300',
                  isActive
                    ? 'text-black dark:text-white bg-accent'
                    : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                )}
              >
                <Icon className="h-4 w-4 flex-shrink-0" />
                <span>{section.title}</span>
              </Link>
            )
          }

          return (
            <Collapsible key={section.id} open={isExpanded}>
              <CollapsibleTrigger
                onClick={() => toggleSection(section.id)}
                className={cn(
                  'flex items-center justify-between w-full py-1 px-2 rounded-md text-xs font-normal transition-colors duration-300',
                  isActive
                    ? 'text-black dark:text-white'
                    : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                )}
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-4 w-4 flex-shrink-0" />
                  <span>{section.title}</span>
                </div>
                <ChevronDown 
                  className={cn(
                    'h-3 w-3 transition-transform duration-300',
                    isExpanded && 'rotate-180'
                  )} 
                />
              </CollapsibleTrigger>
              
              <CollapsibleContent className="ml-4 space-y-0.5 animate-accordion-down">
                {section.items?.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onItemClick}
                    className={cn(
                      'flex items-center py-1 px-2 ml-6 rounded-md text-xs font-normal transition-colors duration-300',
                      isActiveItem(item.href)
                        ? 'text-black dark:text-white bg-accent'
                        : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                    )}
                  >
                    {item.title}
                  </Link>
                ))}
              </CollapsibleContent>
            </Collapsible>
          )
        })}
      </nav>
    </div>
  )
}

export function Sidebar() {
  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 bg-background border-r">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar */}
      <Sheet>
        <SheetTrigger asChild>
          <button className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-background border">
            <Menu className="h-4 w-4" />
            <span className="sr-only">Toggle menu</span>
          </button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-64">
          <SidebarContent onItemClick={() => {}} />
        </SheetContent>
      </Sheet>
    </>
  )
}