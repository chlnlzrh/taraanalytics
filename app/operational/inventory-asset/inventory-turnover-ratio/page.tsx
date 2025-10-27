import { RESTAURANTS } from '@/lib/restaurant-data'

export default function InventoryTurnoverRatioKPI() {
  // OPR_010 Inventory Turnover Ratio - Inventory efficiency analysis
  const inventoryData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      costOfGoodsSold: 155200,
      averageInventoryValue: 48500,
      turnoverRatio: 3.2, // Times per month
      daysOfInventory: 9.4, // 30/3.2
      status: 'good', // 3-4 times is good for restaurants
      variance: 8.5, // vs target
      inventoryCategories: {
        dryGoods: 18500,
        fresh: 12000,
        beverages: 8500,
        packaging: 9500
      }
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      costOfGoodsSold: 118500,
      averageInventoryValue: 42000,
      turnoverRatio: 2.8,
      daysOfInventory: 10.7,
      status: 'warning', // Below optimal
      variance: -12.5,
      inventoryCategories: {
        dryGoods: 16000,
        fresh: 10500,
        beverages: 7200,
        packaging: 8300
      }
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      costOfGoodsSold: 146000,
      averageInventoryValue: 38500,
      turnoverRatio: 3.8,
      daysOfInventory: 7.9,
      status: 'excellent', // High efficiency
      variance: 18.7,
      inventoryCategories: {
        dryGoods: 14500,
        fresh: 9800,
        beverages: 6700,
        packaging: 7500
      }
    }
  ]

  const chainAverage = inventoryData.reduce((sum, item) => sum + item.turnoverRatio, 0) / inventoryData.length
  const chainAverageDays = inventoryData.reduce((sum, item) => sum + item.daysOfInventory, 0) / inventoryData.length
  const efficientLocations = inventoryData.filter(item => item.turnoverRatio >= 3.0).length

  const getStatusColor = (ratio: number) => {
    if (ratio >= 3.5) return 'text-green-600'
    if (ratio >= 3.0) return 'text-green-600' 
    if (ratio >= 2.5) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (ratio: number) => {
    if (ratio >= 3.5) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (ratio >= 3.0) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (ratio >= 2.5) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getStatusIcon = (ratio: number) => {
    if (ratio >= 3.5) return '🚀'
    if (ratio >= 3.0) return '✅'
    if (ratio >= 2.5) return '⚠️'
    return '🚨'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Inventory Turnover Ratio
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: OPR_010 | Inventory Efficiency Measurement
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
            <strong>Formula:</strong> Cost of Goods Sold ÷ Average Inventory Value
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> How many times inventory is sold and replaced over a period
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> Higher turnover indicates efficient inventory management and fresh ingredients
          </p>
        </div>
      </div>

      {/* Alert Thresholds */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🎯 Target Ranges & Alert Thresholds
        </h2>
        <div className="grid grid-cols-4 gap-3">
          <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded border border-green-200">
            <div className="text-xs font-bold text-green-700 dark:text-green-300">EXCELLENT</div>
            <div className="text-xs font-normal text-green-600">&gt;3.5x</div>
          </div>
          <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded border border-green-200">
            <div className="text-xs font-bold text-green-700 dark:text-green-300">GOOD</div>
            <div className="text-xs font-normal text-green-600">3.0-3.5x</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">2.5-3.0x</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&lt;2.5x</div>
          </div>
        </div>
      </div>

      {/* Chain Summary */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          📈 Chain Performance Summary
        </h2>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <span className="text-xs font-normal text-gray-500">Chain Average Turnover</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getStatusColor(chainAverage)}`}>
                {chainAverage.toFixed(1)}x/month
              </span>
              <span>{getStatusIcon(chainAverage)}</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Average Days on Hand</span>
            <div className="text-xs font-normal text-black dark:text-white">
              {chainAverageDays.toFixed(1)} days
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Efficient Locations</span>
            <div className="text-xs font-normal text-green-600">
              {efficientLocations}/3 locations above 3.0x
            </div>
          </div>
        </div>
      </div>

      {/* Location Ranking */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Inventory Efficiency Ranking
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
                  <span>{getStatusIcon(location.turnoverRatio)}</span>
                </div>
                <div className="text-right">
                  <div className={`text-xs font-bold ${getStatusColor(location.turnoverRatio)}`}>
                    {location.turnoverRatio.toFixed(1)}x/month
                  </div>
                  <div className="text-xs font-normal text-gray-500">
                    {location.daysOfInventory.toFixed(1)} days on hand
                  </div>
                  <div className={`text-xs font-normal ${location.variance > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {location.variance > 0 ? '+' : ''}{location.variance.toFixed(1)}% vs target
                  </div>
                </div>
              </div>
              
              {/* Financial metrics */}
              <div className="grid grid-cols-2 gap-4 mb-3 text-xs">
                <div>
                  <span className="text-gray-500">COGS:</span>
                  <div className="font-normal text-black dark:text-white">₹{location.costOfGoodsSold.toLocaleString('en-IN')}</div>
                </div>
                <div>
                  <span className="text-gray-500">Avg Inventory Value:</span>
                  <div className="font-normal text-black dark:text-white">₹{location.averageInventoryValue.toLocaleString('en-IN')}</div>
                </div>
              </div>

              {/* Inventory breakdown */}
              <div className="mt-3">
                <h4 className="text-xs font-bold text-gray-600 mb-2">Inventory Breakdown</h4>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Dry Goods:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.inventoryCategories.dryGoods.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Fresh Items:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.inventoryCategories.fresh.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Beverages:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.inventoryCategories.beverages.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Packaging:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.inventoryCategories.packaging.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Variance Analysis */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          📊 Performance vs Target Analysis
        </h2>
        <div className="space-y-2">
          {inventoryData.map((location) => (
            <div key={location.restaurant.id} className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
              <span className="text-xs font-normal text-black dark:text-white">{location.restaurant.fullName}</span>
              <div className="flex items-center gap-2">
                <span className={`text-xs font-bold ${location.variance > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {location.variance > 0 ? '+' : ''}{location.variance.toFixed(1)}%
                </span>
                <span>{location.variance > 0 ? '📈' : '📉'}</span>
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
              <li>• Inventory management system</li>
              <li>• Purchase orders and receipts</li>
              <li>• COGS from accounting</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Weekly</li>
              <li>• Alert: Red if ratio &lt;2.5x</li>
              <li>• Drill down: by inventory category</li>
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
            • Account for monsoon season impact on fresh ingredient procurement
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Monitor local supplier reliability and lead times
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Consider festival season demand fluctuations in inventory planning
          </p>
        </div>
      </div>

      {/* Users & Access */}
      <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-lg border border-gray-200">
        <h2 className="text-xs font-bold text-black dark:text-white mb-2">
          👥 Authorized Users
        </h2>
        <p className="text-xs font-normal text-gray-500">
          Operations Manager, Store Manager, Inventory Manager
        </p>
      </div>
    </div>
  )
}