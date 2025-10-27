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
    href?: string
    description?: string
    items?: Array<{
      title: string
      href: string
      description?: string
    }>
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
      { 
        title: 'Revenue & Sales', 
        items: [
          { title: 'Total Daily Revenue (FIN_001)', href: '/financial/revenue/daily-revenue' },
          { title: 'Same-Store Sales Growth (FIN_002)', href: '/financial/revenue/sssg' },
          { title: 'Revenue per Available Seat Hour (FIN_003)', href: '/financial/revenue/revpash' },
          { title: 'Average Check Size (FIN_004)', href: '/financial/revenue/average-check' },
        ]
      },
      { 
        title: 'Profitability & Margins', 
        items: [
          { title: 'Gross Profit Margin % (FIN_005)', href: '/financial/profitability/gross-profit' },
          { title: 'EBITDA Margin % (FIN_006)', href: '/financial/profitability/ebitda' },
          { title: 'Net Profit Margin % (FIN_007)', href: '/financial/profitability/net-profit' },
          { title: 'Prime Cost % (FIN_008)', href: '/financial/profitability/prime-cost' },
          { title: 'Breakeven Point (FIN_009)', href: '/financial/profitability/breakeven' },
        ]
      },
      { 
        title: 'India-Specific Financial', 
        items: [
          { title: 'GST Collection & Reconciliation (FIN_010)', href: '/financial/india-specific/gst-collection' },
          { title: 'Aggregator Revenue % (FIN_011)', href: '/financial/india-specific/aggregator-revenue' },
          { title: 'Discount & Promotion Cost % (FIN_012)', href: '/financial/india-specific/discount-cost' },
          { title: 'Cash vs Digital Payment Mix (FIN_013)', href: '/financial/india-specific/payment-mix' },
          { title: 'Utility Cost per Revenue Rupee (FIN_014)', href: '/financial/india-specific/utility-cost' },
        ]
      },
    ],
  },
  {
    id: 'operational',
    title: 'Operational Efficiency',
    icon: BarChart3,
    items: [
      { 
        title: 'Service & Capacity', 
        
        items: [
          { title: 'Table Turnover Rate (OPR_001)', href: '/operational/service/table-turnover' },
          { title: 'Seat Occupancy % (OPR_002)', href: '/operational/service/seat-occupancy' },
          { title: 'Average Service Time (OPR_003)', href: '/operational/service/service-time' },
          { title: 'Kitchen Ticket Time (OPR_004)', href: '/operational/service/kitchen-time' },
          { title: 'Peak vs Off-Peak Ratio (OPR_005)', href: '/operational/service/peak-ratio' },
        ]
      },
      { 
        title: 'Labor Productivity', 
        
        items: [
          { title: 'Revenue per Labor Hour (OPR_006)', href: '/operational/productivity/revenue-per-hour' },
          { title: 'Covers per Labor Hour (OPR_007)', href: '/operational/productivity/covers-per-hour' },
          { title: 'Labor Hours per ₹1000 Revenue (OPR_008)', href: '/operational/productivity/hours-per-revenue' },
          { title: 'Overtime Hours % (OPR_009)', href: '/operational/productivity/overtime' },
        ]
      },
      { 
        title: 'Inventory & Assets', 
        
        items: [
          { title: 'Inventory Turnover Ratio (OPR_010)', href: '/operational/inventory/turnover' },
          { title: 'Days of Inventory on Hand (OPR_011)', href: '/operational/inventory/days-on-hand' },
          { title: 'Equipment Downtime Hours (OPR_012)', href: '/operational/inventory/downtime' },
        ]
      },
      { 
        title: 'Order Accuracy & Waste', 
        
        items: [
          { title: 'Order Accuracy Rate % (OPR_013)', href: '/operational/accuracy/order-accuracy' },
          { title: 'Stock-out Incidents (OPR_014)', href: '/operational/accuracy/stock-out' },
          { title: 'Waste & Spoilage % (OPR_015)', href: '/operational/accuracy/waste' },
        ]
      },
    ],
  },
  {
    id: 'customer',
    title: 'Customer Experience',
    icon: Users,
    items: [
      { 
        title: 'Acquisition & Traffic', 
        
        items: [
          { title: 'Daily Footfall / Covers (CUS_001)', href: '/customer/acquisition/footfall' },
          { title: 'Customer Acquisition Cost (CUS_002)', href: '/customer/acquisition/cac' },
          { title: 'CAC Payback Period (CUS_003)', href: '/customer/acquisition/payback' },
          { title: 'New vs Repeat Customer Ratio (CUS_004)', href: '/customer/acquisition/new-repeat' },
        ]
      },
      { 
        title: 'Retention & Loyalty', 
        
        items: [
          { title: 'Customer Retention Rate (CUS_005)', href: '/customer/retention/retention-rate' },
          { title: 'Repeat Customer Rate (CUS_006)', href: '/customer/retention/repeat-rate' },
          { title: 'Loyalty Program Participation (CUS_007)', href: '/customer/retention/loyalty-participation' },
          { title: 'Customer Lifetime Value (CUS_008)', href: '/customer/retention/clv' },
        ]
      },
      { 
        title: 'Satisfaction & Reputation', 
        
        items: [
          { title: 'Net Promoter Score (CUS_009)', href: '/customer/satisfaction/nps' },
          { title: 'Customer Satisfaction Score (CUS_010)', href: '/customer/satisfaction/css' },
          { title: 'Average Online Rating (CUS_011)', href: '/customer/satisfaction/online-rating' },
          { title: 'Complaint Rate (CUS_012)', href: '/customer/satisfaction/complaint-rate' },
          { title: 'Complaint Resolution Time (CUS_013)', href: '/customer/satisfaction/resolution-time' },
          { title: 'Review Response Rate % (CUS_014)', href: '/customer/satisfaction/review-response' },
          { title: 'Wait Time for Walk-ins (CUS_015)', href: '/customer/satisfaction/wait-time' },
        ]
      },
    ],
  },
  {
    id: 'food-cost',
    title: 'Food Cost & Inventory',
    icon: ChefHat,
    items: [
      { 
        title: 'Cost Metrics', 
        
        items: [
          { title: 'Food Cost % (FOD_001)', href: '/food-cost/metrics/food-cost' },
          { title: 'Beverage Cost % (FOD_002)', href: '/food-cost/metrics/beverage-cost' },
          { title: 'Prime Cost % (FOD_003)', href: '/food-cost/metrics/prime-cost' },
          { title: 'Cost of Goods Sold (FOD_004)', href: '/food-cost/metrics/cogs' },
        ]
      },
      { 
        title: 'Variance & Yield', 
        
        items: [
          { title: 'Theoretical vs Actual Cost Variance (FOD_005)', href: '/food-cost/variance/cost-variance' },
          { title: 'Portion Control Variance (FOD_006)', href: '/food-cost/variance/portion-control' },
          { title: 'Recipe Adherence Rate % (FOD_007)', href: '/food-cost/variance/recipe-adherence' },
          { title: 'Waste & Spoilage by Category (FOD_008)', href: '/food-cost/variance/waste-spoilage' },
          { title: 'Shrink & Variance (FOD_009)', href: '/food-cost/variance/shrink' },
        ]
      },
      { 
        title: 'Inventory Optimization', 
        
        items: [
          { title: 'Par-Level Adherence % (FOD_010)', href: '/food-cost/optimization/par-level' },
          { title: 'Inventory Age Analysis (FOD_011)', href: '/food-cost/optimization/age-analysis' },
          { title: 'Top 10 Item Food Cost % (FOD_012)', href: '/food-cost/optimization/top-item-cost' },
        ]
      },
      { 
        title: 'Supplier Performance', 
        
        items: [
          { title: 'Vendor On-Time/In-Full (FOD_013)', href: '/food-cost/supplier/otif' },
          { title: 'Purchase Price Variance (FOD_014)', href: '/food-cost/supplier/price-variance' },
          { title: 'Vendor Quality Score (FOD_015)', href: '/food-cost/supplier/quality-score' },
          { title: 'FEFO Compliance % (FOD_016)', href: '/food-cost/supplier/fefo-compliance' },
        ]
      },
    ],
  },
  {
    id: 'labor',
    title: 'Labor Management',
    icon: Users,
    items: [
      { 
        title: 'Labor Cost & Productivity', 
        
        items: [
          { title: 'Labor Cost % (LAB_001)', href: '/labor/cost/labor-cost' },
          { title: 'Revenue per Labor Hour (LAB_002)', href: '/labor/cost/revenue-per-hour' },
          { title: 'Covers per Labor Hour (LAB_003)', href: '/labor/cost/covers-per-hour' },
        ]
      },
      { 
        title: 'Workforce Stability', 
        
        items: [
          { title: 'Employee Turnover Rate % (LAB_004)', href: '/labor/stability/turnover' },
          { title: 'Average Tenure (LAB_005)', href: '/labor/stability/tenure' },
          { title: 'Absenteeism Rate % (LAB_006)', href: '/labor/stability/absenteeism' },
          { title: 'Shift Coverage % (LAB_007)', href: '/labor/stability/shift-coverage' },
        ]
      },
      { 
        title: 'Staffing & Training', 
        
        items: [
          { title: 'Staff-to-Customer Ratio (LAB_008)', href: '/labor/staffing/staff-ratio' },
          { title: 'Manager-to-Staff Ratio (LAB_009)', href: '/labor/staffing/manager-ratio' },
          { title: 'Training Hours per Employee (LAB_010)', href: '/labor/staffing/training-hours' },
          { title: 'Training Completion Rate % (LAB_011)', href: '/labor/staffing/training-completion' },
          { title: 'Food Safety Certification Rate (LAB_012)', href: '/labor/staffing/safety-certification' },
        ]
      },
    ],
  },
  {
    id: 'quality',
    title: 'Quality & Compliance',
    icon: Shield,
    items: [
      { 
        title: 'Food Safety & Hygiene', 
        
        items: [
          { title: 'FSSAI Compliance Score (QUA_001)', href: '/quality/safety/fssai-compliance' },
          { title: 'Internal Quality Audit Score (QUA_002)', href: '/quality/safety/internal-audit' },
          { title: 'Temperature Log Compliance % (QUA_003)', href: '/quality/safety/temperature-log' },
          { title: 'Food Safety Incidents (QUA_004)', href: '/quality/safety/safety-incidents' },
          { title: 'Hygiene Audit Score (QUA_005)', href: '/quality/safety/hygiene-audit' },
          { title: 'Plate Waste % (QUA_006)', href: '/quality/safety/plate-waste' },
          { title: 'Expiry Date Violations (QUA_007)', href: '/quality/safety/expiry-violations' },
        ]
      },
      { 
        title: 'Operational Compliance', 
        
        items: [
          { title: 'GST Filing Timeliness (QUA_008)', href: '/quality/compliance/gst-filing' },
          { title: 'Fire Safety Compliance (QUA_009)', href: '/quality/compliance/fire-safety' },
          { title: 'Labor Law Compliance (QUA_010)', href: '/quality/compliance/labor-law' },
          { title: 'Liquor License Compliance (QUA_011)', href: '/quality/compliance/liquor-license' },
        ]
      },
    ],
  },
  {
    id: 'digital',
    title: 'Digital & Marketing',
    icon: Smartphone,
    items: [
      { 
        title: 'Digital Channel Mix', 
        
        items: [
          { title: 'Online Order Share % (DIG_001)', href: '/digital/channels/online-share' },
          { title: 'Aggregator Commission % (DIG_002)', href: '/digital/channels/commission' },
          { title: 'Direct Orders % (DIG_003)', href: '/digital/channels/direct-orders' },
          { title: 'Payment Method Mix (DIG_004)', href: '/digital/channels/payment-mix' },
        ]
      },
      { 
        title: 'Aggregator Operations', 
        
        items: [
          { title: 'Aggregator SLA Compliance (DIG_005)', href: '/digital/aggregator/sla-compliance' },
          { title: 'Aggregator Cancellation Rate % (DIG_006)', href: '/digital/aggregator/cancellation-rate' },
          { title: 'Aggregator Refund Rate % (DIG_007)', href: '/digital/aggregator/refund-rate' },
          { title: 'Menu Parity (DIG_008)', href: '/digital/aggregator/menu-parity' },
          { title: 'Aggregator Ratings (DIG_009)', href: '/digital/aggregator/ratings' },
        ]
      },
      { 
        title: 'Marketing Performance', 
        
        items: [
          { title: 'Marketing ROI (DIG_010)', href: '/digital/marketing/roi' },
          { title: 'Loyalty Program Participation (DIG_011)', href: '/digital/marketing/loyalty-participation' },
          { title: 'Loyalty Program Active Rate (DIG_012)', href: '/digital/marketing/loyalty-active' },
          { title: 'Promo Code Redemption Rate (DIG_013)', href: '/digital/marketing/promo-redemption' },
          { title: 'Email Open Rate % (DIG_014)', href: '/digital/marketing/email-open' },
          { title: 'Social Media Engagement % (DIG_015)', href: '/digital/marketing/social-engagement' },
          { title: 'Website Traffic to Conversion % (DIG_016)', href: '/digital/marketing/web-conversion' },
          { title: 'Influencer Campaign Reach (DIG_017)', href: '/digital/marketing/influencer-reach' },
          { title: 'Reservation Conversion Rate (DIG_018)', href: '/digital/marketing/reservation-conversion' },
        ]
      },
    ],
  },
  {
    id: 'comparative',
    title: 'Comparative Analytics',
    icon: TrendingUp,
    items: [
      { 
        title: 'Location Performance', 
        
        items: [
          { title: 'Revenue Variance by Location (CMP_001)', href: '/comparative/location/revenue-variance' },
          { title: 'Same-Store Sales Growth Variance (CMP_002)', href: '/comparative/location/sssg-variance' },
          { title: 'Prime Cost % Ranking (CMP_003)', href: '/comparative/location/prime-cost-ranking' },
          { title: 'Food Cost % Ranking (CMP_004)', href: '/comparative/location/food-cost-ranking' },
          { title: 'Labor Cost % Ranking (CMP_005)', href: '/comparative/location/labor-cost-ranking' },
          { title: 'EBITDA Margin by Location (CMP_006)', href: '/comparative/location/ebitda-ranking' },
          { title: 'Profit Margin Variance (CMP_007)', href: '/comparative/location/profit-variance' },
          { title: 'Customer Satisfaction Spread (CMP_008)', href: '/comparative/location/satisfaction-spread' },
        ]
      },
      { 
        title: 'Item & Menu Analytics', 
        
        items: [
          { title: 'Bottom 20% Menu Items by Location (CMP_009)', href: '/comparative/menu/bottom-items' },
          { title: 'Top 10 Item Revenue Contribution % (CMP_010)', href: '/comparative/menu/top-items' },
          { title: 'Menu Mix Variance Across Locations (CMP_011)', href: '/comparative/menu/mix-variance' },
          { title: 'Item Contribution Margin % (CMP_012)', href: '/comparative/menu/contribution-margin' },
        ]
      },
      { 
        title: 'Operational Consistency', 
        
        items: [
          { title: 'Table Turnover Variance (CMP_013)', href: '/comparative/consistency/turnover-variance' },
          { title: 'Labor Productivity Scatter (CMP_014)', href: '/comparative/consistency/productivity-scatter' },
          { title: 'Waste % Variance (CMP_015)', href: '/comparative/consistency/waste-variance' },
          { title: 'Order Accuracy Variance (CMP_016)', href: '/comparative/consistency/accuracy-variance' },
          { title: 'Complaint Rate Variance (CMP_017)', href: '/comparative/consistency/complaint-variance' },
        ]
      },
      { 
        title: 'Best Practice Identification', 
        
        items: [
          { title: 'Outlier Analysis (High Performers) (CMP_018)', href: '/comparative/best-practices/outlier-analysis' },
          { title: 'Composite Performance Index (CMP_019)', href: '/comparative/best-practices/performance-index' },
        ]
      },
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
]

interface SidebarContentProps {
  onItemClick?: () => void
}

function SidebarContent({ onItemClick }: SidebarContentProps) {
  const pathname = usePathname()
  const { expandedSections, expandedSubSections, isCollapsed, toggleSection, toggleSubSection, setCollapsed } = useMenuState()

  const isActiveSection = (section: MenuSection) => {
    if (section.href) {
      return pathname === section.href
    }
    return section.items?.some(item => {
      if (item.href && pathname === item.href) return true
      return item.items?.some(subItem => pathname === subItem.href) || false
    }) || false
  }

  const isActiveItem = (href: string) => pathname === href

  const isActiveSubSection = (item: any) => {
    if (item.href && pathname === item.href) return true
    return item.items?.some((subItem: any) => pathname === subItem.href) || false
  }

  return (
    <div className="flex flex-col h-full">
      <div className="p-6 border-b flex items-center justify-between">
        {!isCollapsed && (
          <h1 className="text-xs font-bold text-black dark:text-white">
            TaraAnalytics
          </h1>
        )}
        <button
          onClick={() => setCollapsed(!isCollapsed)}
          className="p-1 rounded-md hover:bg-accent transition-colors duration-200"
        >
          <Menu className="h-4 w-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300" />
          <span className="sr-only">Toggle sidebar</span>
        </button>
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
                    : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300',
                  isCollapsed && 'justify-center'
                )}
                title={isCollapsed ? section.title : undefined}
              >
                <Icon className="h-4 w-4 flex-shrink-0" />
                {!isCollapsed && <span>{section.title}</span>}
              </Link>
            )
          }

          return (
            <Collapsible key={section.id} open={isExpanded}>
              <CollapsibleTrigger
                onClick={() => !isCollapsed && toggleSection(section.id)}
                className={cn(
                  'flex items-center justify-between w-full py-1 px-2 rounded-md text-xs font-normal transition-colors duration-300',
                  isActive
                    ? 'text-black dark:text-white'
                    : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300',
                  isCollapsed && 'justify-center'
                )}
                title={isCollapsed ? section.title : undefined}
              >
                <div className={cn("flex items-center gap-3", isCollapsed && "justify-center")}>
                  <Icon className="h-4 w-4 flex-shrink-0" />
                  {!isCollapsed && <span>{section.title}</span>}
                </div>
                {!isCollapsed && (
                  <ChevronDown 
                    className={cn(
                      'h-3 w-3 transition-transform duration-300',
                      isExpanded && 'rotate-180'
                    )} 
                  />
                )}
              </CollapsibleTrigger>
              
              {!isCollapsed && (
                <CollapsibleContent className="ml-4 space-y-0.5 animate-accordion-down">
                  {section.items?.map((item) => {
                  const subSectionId = `${section.id}-${item.title.toLowerCase().replace(/\s+/g, '-')}`
                  const isSubExpanded = expandedSubSections.includes(subSectionId)
                  const isSubActive = isActiveSubSection(item)
                  
                  // If item has subitems, render as collapsible
                  if (item.items) {
                    return (
                      <Collapsible key={subSectionId} open={isSubExpanded}>
                        <CollapsibleTrigger
                          onClick={() => toggleSubSection(subSectionId)}
                          className={cn(
                            'flex items-center justify-between w-full py-1 px-2 ml-6 rounded-md text-xs font-normal transition-colors duration-300',
                            isSubActive
                              ? 'text-black dark:text-white'
                              : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                          )}
                        >
                          <span>{item.title}</span>
                          <ChevronDown 
                            className={cn(
                              'h-3 w-3 transition-transform duration-300',
                              isSubExpanded && 'rotate-180'
                            )} 
                          />
                        </CollapsibleTrigger>
                        
                        <CollapsibleContent className="ml-4 space-y-0.5 animate-accordion-down">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              onClick={onItemClick}
                              className={cn(
                                'flex items-center py-1 px-2 ml-6 rounded-md text-xs font-normal transition-colors duration-300',
                                isActiveItem(subItem.href)
                                  ? 'text-black dark:text-white bg-accent'
                                  : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                              )}
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </CollapsibleContent>
                      </Collapsible>
                    )
                  }
                  
                  // Regular item without subitems
                  return (
                    <Link
                      key={item.href}
                      href={item.href!}
                      onClick={onItemClick}
                      className={cn(
                        'flex items-center py-1 px-2 ml-6 rounded-md text-xs font-normal transition-colors duration-300',
                        isActiveItem(item.href!)
                          ? 'text-black dark:text-white bg-accent'
                          : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                      )}
                    >
                      {item.title}
                    </Link>
                  )
                  })}
                </CollapsibleContent>
              )}
            </Collapsible>
          )
        })}
      </nav>
    </div>
  )
}

export function Sidebar() {
  const { isCollapsed } = useMenuState()
  
  return (
    <>
      {/* Desktop Sidebar */}
      <div className={cn(
        "hidden md:flex md:flex-col md:fixed md:inset-y-0 bg-background border-r transition-all duration-300",
        isCollapsed ? "md:w-16" : "md:w-64"
      )}>
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