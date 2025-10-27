import Link from 'next/link'
import { RESTAURANTS } from '@/lib/restaurant-data'

export default function FoodCostOverview() {
  const foodCostKPIs = [
    {
      id: 'FOD_001',
      title: 'Food Cost %',
      description: 'Food costs as percentage of food revenue',
      category: 'Cost Metrics',
      href: '/food-cost/cost-metrics/food-cost-percentage',
      status: 'good',
      currentValue: '30.2%'
    },
    {
      id: 'FOD_002',
      title: 'Beverage Cost %',
      description: 'Beverage costs as percentage of beverage revenue',
      category: 'Cost Metrics',
      href: '/food-cost/cost-metrics/beverage-cost-percentage',
      status: 'good',
      currentValue: '24.8%'
    },
    {
      id: 'FOD_003',
      title: 'Prime Cost % (Food + Labor)',
      description: 'Combined food, beverage, and labor costs as percentage of revenue',
      category: 'Cost Metrics',
      href: '/food-cost/cost-metrics/prime-cost-percentage',
      status: 'warning',
      currentValue: '58.5%'
    },
    {
      id: 'FOD_004',
      title: 'Cost of Goods Sold (COGS)',
      description: 'Total cost of food/beverage sold in a period',
      category: 'Cost Metrics',
      href: '/food-cost/cost-metrics/cost-of-goods-sold',
      status: 'good',
      currentValue: '₹42.3L'
    },
    {
      id: 'FOD_005',
      title: 'Theoretical vs. Actual Cost Variance',
      description: 'Difference between expected COGS and actual COGS',
      category: 'Variance & Yield',
      href: '/food-cost/variance-yield/theoretical-actual-variance',
      status: 'critical',
      currentValue: '4.2%'
    },
    {
      id: 'FOD_006',
      title: 'Portion Control Variance',
      description: 'Average weight of served portion vs. recipe standard',
      category: 'Variance & Yield',
      href: '/food-cost/variance-yield/portion-control-variance',
      status: 'warning',
      currentValue: '8.5%'
    },
    {
      id: 'FOD_007',
      title: 'Recipe Adherence Rate %',
      description: 'Percentage of dishes meeting ingredient and portion standards',
      category: 'Variance & Yield',
      href: '/food-cost/variance-yield/recipe-adherence-rate',
      status: 'good',
      currentValue: '96.2%'
    },
    {
      id: 'FOD_008',
      title: 'Waste & Spoilage % (by Category)',
      description: 'Waste broken down by root cause',
      category: 'Variance & Yield',
      href: '/food-cost/variance-yield/waste-spoilage-percentage',
      status: 'good',
      currentValue: '2.8%'
    },
    {
      id: 'FOD_009',
      title: 'Shrink & Variance',
      description: 'Gap between counted inventory and system inventory',
      category: 'Variance & Yield',
      href: '/food-cost/variance-yield/shrink-variance',
      status: 'warning',
      currentValue: '₹1.2L'
    },
    {
      id: 'FOD_010',
      title: 'Par-Level Adherence %',
      description: 'Percentage of inventory items stocked at or above par',
      category: 'Inventory Optimization',
      href: '/food-cost/inventory-optimization/par-level-adherence',
      status: 'good',
      currentValue: '92.5%'
    },
    {
      id: 'FOD_011',
      title: 'Inventory Age Analysis',
      description: 'Percentage of inventory older than 30 days',
      category: 'Inventory Optimization',
      href: '/food-cost/inventory-optimization/inventory-age-analysis',
      status: 'good',
      currentValue: '5.2%'
    },
    {
      id: 'FOD_012',
      title: 'Top 10 Item Food Cost %',
      description: 'Food Cost % for each of top 10 revenue-generating dishes',
      category: 'Inventory Optimization',
      href: '/food-cost/inventory-optimization/top-ten-item-food-cost',
      status: 'good',
      currentValue: '72.3%'
    },
    {
      id: 'FOD_013',
      title: 'Vendor On-Time/In-Full (OTIF)',
      description: 'Percentage of orders received on time and complete',
      category: 'Supplier Performance',
      href: '/food-cost/supplier-performance/vendor-otif',
      status: 'warning',
      currentValue: '85.2%'
    },
    {
      id: 'FOD_014',
      title: 'Purchase Price Variance',
      description: 'Actual price paid vs. budgeted price',
      category: 'Supplier Performance',
      href: '/food-cost/supplier-performance/purchase-price-variance',
      status: 'critical',
      currentValue: '+12.8%'
    },
    {
      id: 'FOD_015',
      title: 'Vendor Quality Score',
      description: 'Composite score rating supplier reliability',
      category: 'Supplier Performance',
      href: '/food-cost/supplier-performance/vendor-quality-score',
      status: 'good',
      currentValue: '87.5'
    },
    {
      id: 'FOD_016',
      title: 'FEFO Compliance %',
      description: 'Percentage of stock correctly rotated (First-Expired-First-Out)',
      category: 'Supplier Performance',
      href: '/food-cost/supplier-performance/fefo-compliance',
      status: 'good',
      currentValue: '94.8%'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'text-green-600'
      case 'warning': return 'text-yellow-600'
      case 'critical': return 'text-red-600'
      default: return 'text-gray-600'
    }
  }

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'good': return 'bg-green-50 dark:bg-green-900/20 border-green-200'
      case 'warning': return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
      case 'critical': return 'bg-red-50 dark:bg-red-900/20 border-red-200'
      default: return 'bg-gray-50 dark:bg-gray-900/20 border-gray-200'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good': return '✅'
      case 'warning': return '⚠️'
      case 'critical': return '🚨'
      default: return '📊'
    }
  }

  const categories = [...new Set(foodCostKPIs.map(kpi => kpi.category))]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Food Cost & Inventory Management
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            Comprehensive monitoring of food costs, inventory optimization, and supplier performance
          </p>
        </div>
      </div>

      {/* KPI Summary Cards */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-card p-4 rounded-lg border">
          <div className="text-xs font-normal text-gray-500">Total KPIs</div>
          <div className="text-xs font-bold text-black dark:text-white">16</div>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200">
          <div className="text-xs font-normal text-green-600">Performing Well</div>
          <div className="text-xs font-bold text-green-700">{foodCostKPIs.filter(k => k.status === 'good').length}</div>
        </div>
        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200">
          <div className="text-xs font-normal text-yellow-600">Needs Attention</div>
          <div className="text-xs font-bold text-yellow-700">{foodCostKPIs.filter(k => k.status === 'warning').length}</div>
        </div>
        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200">
          <div className="text-xs font-normal text-red-600">Critical Issues</div>
          <div className="text-xs font-bold text-red-700">{foodCostKPIs.filter(k => k.status === 'critical').length}</div>
        </div>
      </div>

      {/* KPIs by Category */}
      {categories.map(category => (
        <div key={category} className="bg-card p-4 rounded-lg border">
          <h2 className="text-xs font-bold text-black dark:text-white mb-4">
            📊 {category}
          </h2>
          <div className="grid grid-cols-1 gap-3">
            {foodCostKPIs
              .filter(kpi => kpi.category === category)
              .map(kpi => (
                <Link key={kpi.id} href={kpi.href}>
                  <div className={`p-3 rounded border transition-colors hover:bg-gray-50 dark:hover:bg-gray-900/50 ${getStatusBg(kpi.status)}`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-normal text-gray-500">{kpi.id}</span>
                        <span className="text-xs font-bold text-black dark:text-white">
                          {kpi.title}
                        </span>
                        <span>{getStatusIcon(kpi.status)}</span>
                      </div>
                      <div className="text-right">
                        <div className={`text-xs font-bold ${getStatusColor(kpi.status)}`}>
                          {kpi.currentValue}
                        </div>
                      </div>
                    </div>
                    <p className="text-xs font-normal text-gray-500 mt-1">
                      {kpi.description}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      ))}

      {/* India-Specific Considerations */}
      <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200">
        <h2 className="text-xs font-bold text-orange-900 dark:text-orange-300 mb-2">
          🇮🇳 India-Specific Food Cost Considerations
        </h2>
        <div className="space-y-1">
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Monitor seasonal price fluctuations (monsoon impact on vegetables, festival demand spikes)
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Track supplier reliability during extreme weather conditions
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Consider regional variations in ingredient costs across locations
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Account for local sourcing preferences and quality standards
          </p>
        </div>
      </div>
    </div>
  )
}