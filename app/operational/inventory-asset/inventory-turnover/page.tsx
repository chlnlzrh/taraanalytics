import { RESTAURANTS } from '@/lib/restaurant-data'

export default function InventoryTurnoverKPI() {
  // OPR_010 Inventory Turnover Ratio - Exact specifications from restaurant_kpi_metrics_127.txt
  const inventoryData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      cogs: 142500, // Monthly COGS
      averageInventory: 28500, // Average inventory value
      turnoverRatio: 5.0, // Annual ratio (good performance)
      monthlyTurnover: 0.42, // Monthly equivalent
      status: 'good',
      variance: 25.0,
      categoryBreakdown: {
        vegetables: { cogs: 42750, inventory: 7125, turnover: 6.0 },
        meat: { cogs: 28500, inventory: 4750, turnover: 6.0 },
        dry_goods: { cogs: 42750, inventory: 9500, turnover: 4.5 },
        beverages: { cogs: 28500, inventory: 7125, turnover: 4.0 }
      },
      seasonalTrend: [4.2, 4.8, 5.0, 5.5, 5.2, 4.8], // Last 6 months
      cashTiedUp: 28500
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      totalCogs: 112500,
      averageInventory: 18750,
      turnoverRatio: 6.0, // Good performance
      monthlyTurnover: 0.5,
      status: 'good',
      variance: 50.0,
      categoryBreakdown: {
        vegetables: { cogs: 33750, inventory: 5063, turnover: 6.7 },
        meat: { cogs: 22500, inventory: 3375, turnover: 6.7 },
        dry_goods: { cogs: 33750, inventory: 6750, turnover: 5.0 },
        beverages: { cogs: 22500, inventory: 3563, turnover: 6.3 }
      },
      seasonalTrend: [5.1, 5.8, 6.0, 6.5, 6.2, 5.9], // Last 6 months
      cashTiedUp: 18750
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      totalCogs: 92500,
      averageInventory: 61667, // High inventory - critical
      turnoverRatio: 1.5, // Critical - below 2x threshold
      monthlyTurnover: 0.125,
      status: 'critical',
      variance: -62.5,
      categoryBreakdown: {
        vegetables: { cogs: 27750, inventory: 18500, turnover: 1.5 },
        meat: { cogs: 18500, inventory: 15417, turnover: 1.2 },
        dry_goods: { cogs: 27750, inventory: 18500, turnover: 1.5 },
        beverages: { cogs: 18500, inventory: 9250, turnover: 2.0 }
      },
      seasonalTrend: [1.2, 1.4, 1.5, 1.8, 1.6, 1.4], // Last 6 months
      cashTiedUp: 61667
    }
  ]

  const chainAverage = inventoryData.reduce((sum, item) => sum + item.turnoverRatio, 0) / inventoryData.length

  const getStatusColor = (ratio: number) => {
    if (ratio >= 4) return 'text-green-600'
    if (ratio >= 2) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (ratio: number) => {
    if (ratio >= 4) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (ratio >= 2) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xs font-bold text-black dark:text-white">
          Inventory Turnover Ratio
        </h1>
        <p className="text-xs font-normal text-gray-500 mt-1">
          KPI ID: OPR_010 | Inventory Management & Working Capital
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200">
        <h2 className="text-xs font-bold text-blue-900 dark:text-blue-300 mb-2">
          📊 Definition & Formula
        </h2>
        <div className="space-y-2">
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Formula:</strong> COGS ÷ Average Inventory Value
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> How many times inventory is fully replaced in a period. Higher is better; typically 4–8x annually.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> Low turnover ties up cash and increases spoilage risk; very high may signal frequent stock-outs.
          </p>
        </div>
      </div>

      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🎯 Target Ranges & Alert Thresholds
        </h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded border border-green-200">
            <div className="text-xs font-bold text-green-700 dark:text-green-300">TARGET</div>
            <div className="text-xs font-normal text-green-600">4–8x per year</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">2–4x per year</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&lt;2x per year</div>
          </div>
        </div>
      </div>

      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          📈 Chain Summary & Working Capital Impact
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-gray-50 dark:bg-gray-900/20 rounded border">
            <div className="text-xs font-bold text-gray-700 dark:text-gray-300">Chain Average</div>
            <div className="text-xs font-normal text-black dark:text-white">{chainAverage.toFixed(1)}x turnover</div>
          </div>
          <div className="text-center p-3 bg-gray-50 dark:bg-gray-900/20 rounded border">
            <div className="text-xs font-bold text-gray-700 dark:text-gray-300">Total Cash Tied Up</div>
            <div className="text-xs font-normal text-black dark:text-white">
              ₹{inventoryData.reduce((sum, item) => sum + item.cashTiedUp, 0).toLocaleString()}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Performance (Best = Highest Turnover)
        </h2>
        <div className="space-y-3">
          {inventoryData
            .sort((a, b) => b.turnoverRatio - a.turnoverRatio)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.turnoverRatio)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-black dark:text-white">
                    {location.turnoverRatio.toFixed(1)}x annually
                  </div>
                  <div className={`text-xs font-normal ${location.variance > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {location.variance > 0 ? '+' : ''}{location.variance.toFixed(1)}% vs target (4x)
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-3">
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-1">Category Performance</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Vegetables:</span>
                      <span className="font-normal text-black dark:text-white">{location.categoryBreakdown.vegetables.turnover.toFixed(1)}x</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Meat:</span>
                      <span className="font-normal text-black dark:text-white">{location.categoryBreakdown.meat.turnover.toFixed(1)}x</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Dry Goods:</span>
                      <span className="font-normal text-black dark:text-white">{location.categoryBreakdown.dry_goods.turnover.toFixed(1)}x</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Beverages:</span>
                      <span className="font-normal text-black dark:text-white">{location.categoryBreakdown.beverages.turnover.toFixed(1)}x</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-1">Financial Impact</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Monthly COGS:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.cogs?.toLocaleString() || location.totalCogs?.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Avg Inventory:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.averageInventory.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Days on Hand:</span>
                      <span className="font-normal text-black dark:text-white">{(365 / location.turnoverRatio).toFixed(0)} days</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Cash Tied Up:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.cashTiedUp.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200">
        <h2 className="text-xs font-bold text-orange-900 dark:text-orange-300 mb-2">
          🇮🇳 India-Specific Monitoring
        </h2>
        <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
          • Higher spoilage risk due to climate; adjust targets by season (3–5x in monsoon)
        </p>
      </div>
    </div>
  )
}