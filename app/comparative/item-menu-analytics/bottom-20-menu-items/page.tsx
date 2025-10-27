import { RESTAURANTS } from '@/lib/restaurant-data'

export default function Bottom20MenuItemsKPI() {
  // CMP_009 Bottom 20% Menu Items by Location - Exact specifications from restaurant_kpi_metrics_127.txt
  const menuItemsData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      totalMenuItems: 85,
      bottom20Items: [
        { name: 'Lemon Mint Cooler', revenueContribution: 0.4, margin: 28, status: 'critical', category: 'Beverages', monthlySales: 12 },
        { name: 'Paneer Tikka Masala', revenueContribution: 0.6, margin: 32, status: 'critical', category: 'Main Course', monthlySales: 18 },
        { name: 'Chocolate Brownie', revenueContribution: 0.8, margin: 45, status: 'warning', category: 'Desserts', monthlySales: 24 },
        { name: 'Mushroom Biryani', revenueContribution: 0.9, margin: 38, status: 'warning', category: 'Main Course', monthlySales: 28 },
        { name: 'Fresh Lime Soda', revenueContribution: 1.1, margin: 55, status: 'good', category: 'Beverages', monthlySales: 35 }
      ],
      totalItemsAtRisk: 17, // Items with <1% contribution or <40% margin
      potentialSavings: 125000 // Estimated monthly savings from optimization
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      totalMenuItems: 80,
      bottom20Items: [
        { name: 'Saffron Lassi', revenueContribution: 0.3, margin: 25, status: 'critical', category: 'Beverages', monthlySales: 8 },
        { name: 'Rajma Masala', revenueContribution: 0.7, margin: 35, status: 'warning', category: 'Main Course', monthlySales: 15 },
        { name: 'Gulab Jamun', revenueContribution: 0.9, margin: 42, status: 'warning', category: 'Desserts', monthlySales: 22 },
        { name: 'Veg Pulao', revenueContribution: 1.0, margin: 48, status: 'good', category: 'Main Course', monthlySales: 25 },
        { name: 'Masala Chai', revenueContribution: 1.2, margin: 65, status: 'good', category: 'Beverages', monthlySales: 45 }
      ],
      totalItemsAtRisk: 14,
      potentialSavings: 95000
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      totalMenuItems: 78,
      bottom20Items: [
        { name: 'Rose Milk', revenueContribution: 0.2, margin: 22, status: 'critical', category: 'Beverages', monthlySales: 6 },
        { name: 'Aloo Gobi', revenueContribution: 0.5, margin: 28, status: 'critical', category: 'Main Course', monthlySales: 12 },
        { name: 'Kulfi Faluda', revenueContribution: 0.8, margin: 38, status: 'warning', category: 'Desserts', monthlySales: 18 },
        { name: 'Chole Bhature', revenueContribution: 1.1, margin: 44, status: 'good', category: 'Main Course', monthlySales: 30 },
        { name: 'Nimbu Paani', revenueContribution: 1.3, margin: 58, status: 'good', category: 'Beverages', monthlySales: 40 }
      ],
      totalItemsAtRisk: 19,
      potentialSavings: 135000
    }
  ]

  const chainTotalAtRisk = menuItemsData.reduce((sum, item) => sum + item.totalItemsAtRisk, 0)
  const chainPotentialSavings = menuItemsData.reduce((sum, item) => sum + item.potentialSavings, 0)

  const getStatusColor = (status: string) => {
    if (status === 'good') return 'text-green-600'
    if (status === 'warning') return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (status: string) => {
    if (status === 'good') return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (status === 'warning') return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getStatusIcon = (status: string) => {
    if (status === 'good') return '✅'
    if (status === 'warning') return '⚠️'
    return '🚨'
  }

  const getItemStatusColor = (contribution: number, margin: number) => {
    if (contribution < 0.5 || margin < 30) return 'text-red-600'
    if (contribution < 1 || margin < 40) return 'text-yellow-600'
    return 'text-green-600'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Bottom 20% Menu Items by Location
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: CMP_009 | Menu Optimization Analytics
          </p>
        </div>
      </div>

      {/* Definition & Formula Card */}
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200">
        <h2 className="text-xs font-bold text-blue-900 dark:text-blue-300 mb-2">
          📊 Definition & Formula
        </h2>
        <div className="space-y-2">
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Formula:</strong> Identify lowest-revenue items (bottom 20% by contribution) per location
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Underperforming dishes; consider removing, repositioning, or repricing.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> Menu optimization yields margin improvement; kill low-volume/low-margin items.
          </p>
        </div>
      </div>

      {/* Alert Thresholds */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🎯 Target Ranges & Alert Thresholds
        </h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded border border-green-200">
            <div className="text-xs font-bold text-green-700 dark:text-green-300">TARGET</div>
            <div className="text-xs font-normal text-green-600">No item &lt;1% revenue or &lt;40% margin</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">0.5–1% contribution or 30–40% margin</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&lt;0.5% contribution or &lt;30% margin</div>
          </div>
        </div>
      </div>

      {/* Chain Summary */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          📈 Chain Menu Optimization Summary
        </h2>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <span className="text-xs font-normal text-gray-500">Total Items at Risk</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-red-600">
                {chainTotalAtRisk} items
              </span>
              <span>⚠️</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Potential Monthly Savings</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-green-600">
                ₹{chainPotentialSavings.toLocaleString('en-IN')}
              </span>
              <span>💰</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Optimization Priority</span>
            <div className="text-xs font-normal text-red-600">
              High - Immediate Action Required
            </div>
          </div>
        </div>
      </div>

      {/* Location Analysis */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Menu Optimization Analysis
        </h2>
        <div className="space-y-3">
          {menuItemsData
            .sort((a, b) => b.totalItemsAtRisk - a.totalItemsAtRisk)
            .map((location, index) => (
            <div key={location.restaurant.id} className="p-3 rounded border bg-white dark:bg-gray-800">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span className="text-xs font-normal text-red-600">
                    {location.totalItemsAtRisk} items at risk
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-green-600">
                    ₹{location.potentialSavings.toLocaleString('en-IN')} savings
                  </div>
                  <div className="text-xs font-normal text-gray-500">
                    {location.totalMenuItems} total items
                  </div>
                </div>
              </div>
              
              {/* Bottom 5 Items Analysis */}
              <div className="mt-3">
                <h4 className="text-xs font-bold text-gray-600 mb-2">Bottom 5 Items Analysis</h4>
                <div className="space-y-2">
                  {location.bottom20Items.map((item, idx) => (
                    <div key={idx} className={`p-2 rounded border ${getStatusBg(item.status)}`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className={`text-xs font-bold ${getItemStatusColor(item.revenueContribution, item.margin)}`}>
                            {item.name}
                          </span>
                          <span className="text-xs font-normal text-gray-500">
                            ({item.category})
                          </span>
                          <span>{getStatusIcon(item.status)}</span>
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-normal text-gray-500">
                            {item.revenueContribution}% revenue | {item.margin}% margin
                          </div>
                          <div className="text-xs font-normal text-gray-500">
                            {item.monthlySales} units/month
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Data Sources & Refresh */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🔄 Data Sources & Refresh Schedule
        </h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Data Sources:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• PetPooja POS (revenue by item per location)</li>
              <li>• Recipe cost database</li>
              <li>• Sales volume tracking</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Monthly analysis</li>
              <li>• Red alert if item &lt;0.5% or &lt;30% margin</li>
              <li>• Quarterly menu optimization review</li>
            </ul>
          </div>
        </div>
      </div>

      {/* India-Specific Considerations */}
      <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200">
        <h2 className="text-xs font-bold text-orange-900 dark:text-orange-300 mb-2">
          🇮🇳 India-Specific Monitoring
        </h2>
        <div className="space-y-1">
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Consider cultural preferences (signature items may have lower margin but high brand value)
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Regional taste variations across locations
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Seasonal menu items (monsoon specials, festival items)
          </p>
        </div>
      </div>

      {/* Users & Access */}
      <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-lg border border-gray-200">
        <h2 className="text-xs font-bold text-black dark:text-white mb-2">
          👥 Authorized Users
        </h2>
        <p className="text-xs font-normal text-gray-500">
          Manager, Chef
        </p>
      </div>
    </div>
  )
}