import { RESTAURANTS } from '@/lib/restaurant-data'

export default function BeverageCostPercentageKPI() {
  // FOD_002 Beverage Cost % - Exact specifications from restaurant_kpi_metrics_127.txt
  const beverageCostData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      beverageRevenue: 95000,
      beverageCOGS: 23750,
      beverageCostPercentage: 25.0,
      status: 'good', // Within target for mixed beverages
      categoryBreakdown: {
        alcohol: { revenue: 45000, cogs: 11250, percentage: 25.0 }, // 20-28% target
        softDrinks: { revenue: 35000, cogs: 3500, percentage: 10.0 }, // 8-12% target
        juices: { revenue: 15000, cogs: 2250, percentage: 15.0 } // Fresh juices
      },
      monthlyTrend: [24.2, 25.5, 24.8, 25.0],
      topBeverages: [
        { name: 'Premium Beer', volume: 120, costPer: 85, sellingPrice: 350, margin: 75.7 },
        { name: 'Fresh Lime Soda', volume: 200, costPer: 15, sellingPrice: 65, margin: 76.9 },
        { name: 'Lassi', volume: 80, costPer: 45, sellingPrice: 120, margin: 62.5 }
      ]
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      beverageRevenue: 78000,
      beverageCOGS: 19500,
      beverageCostPercentage: 25.0,
      status: 'good',
      categoryBreakdown: {
        alcohol: { revenue: 38000, cogs: 10640, percentage: 28.0 }, // At upper limit
        softDrinks: { revenue: 28000, cogs: 2520, percentage: 9.0 },
        juices: { revenue: 12000, cogs: 1800, percentage: 15.0 }
      },
      monthlyTrend: [25.8, 26.2, 25.1, 25.0],
      topBeverages: [
        { name: 'Domestic Beer', volume: 150, costPer: 70, sellingPrice: 280, margin: 75.0 },
        { name: 'Mango Lassi', volume: 90, costPer: 50, sellingPrice: 140, margin: 64.3 },
        { name: 'Soft Drinks', volume: 180, costPer: 14, sellingPrice: 60, margin: 76.7 }
      ]
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      beverageRevenue: 65000,
      beverageCOGS: 18850,
      beverageCostPercentage: 29.0,
      status: 'warning', // Higher costs due to premium positioning
      categoryBreakdown: {
        alcohol: { revenue: 32000, cogs: 9600, percentage: 30.0 }, // Above target
        softDrinks: { revenue: 20000, cogs: 2400, percentage: 12.0 }, // At upper limit
        juices: { revenue: 13000, cogs: 2600, percentage: 20.0 } // Higher due to premium ingredients
      },
      monthlyTrend: [28.5, 29.8, 28.9, 29.0],
      topBeverages: [
        { name: 'Craft Beer', volume: 80, costPer: 120, sellingPrice: 450, margin: 73.3 },
        { name: 'Fresh Fruit Juices', volume: 60, costPer: 65, sellingPrice: 180, margin: 63.9 },
        { name: 'Mocktails', volume: 70, costPer: 40, sellingPrice: 150, margin: 73.3 }
      ]
    }
  ]

  const chainTotalRevenue = beverageCostData.reduce((sum, item) => sum + item.beverageRevenue, 0)
  const chainTotalCOGS = beverageCostData.reduce((sum, item) => sum + item.beverageCOGS, 0)
  const chainBeverageCostPercentage = (chainTotalCOGS / chainTotalRevenue) * 100

  const getStatusColor = (percentage: number, category?: string) => {
    if (category === 'alcohol') {
      if (percentage >= 20 && percentage <= 28) return 'text-green-600'
      if (percentage > 28 && percentage <= 32) return 'text-yellow-600'
      return 'text-red-600'
    } else if (category === 'softDrinks') {
      if (percentage >= 8 && percentage <= 12) return 'text-green-600'
      if (percentage > 12 && percentage <= 15) return 'text-yellow-600'
      return 'text-red-600'
    } else {
      // Overall beverage cost
      if (percentage >= 18 && percentage <= 26) return 'text-green-600'
      if (percentage > 26 && percentage <= 30) return 'text-yellow-600'
      return 'text-red-600'
    }
  }

  const getStatusBg = (percentage: number) => {
    if (percentage >= 18 && percentage <= 26) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (percentage > 26 && percentage <= 30) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getStatusIcon = (percentage: number) => {
    if (percentage >= 18 && percentage <= 26) return '✅'
    if (percentage > 26 && percentage <= 30) return '⚠️'
    return '🚨'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Beverage Cost %
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: FOD_002 | Beverage costs as percentage of beverage revenue
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
            <strong>Formula:</strong> (Beverage COGS ÷ Beverage Revenue) × 100
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Beverage costs as percentage of beverage revenue. Alcohol 20–28%, soft drinks 8–12%.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> High-margin category; even small cost increases significantly impact profitability.
          </p>
        </div>
      </div>

      {/* Alert Thresholds */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🎯 Target Ranges & Alert Thresholds (by Category)
        </h2>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded border border-green-200">
            <div className="text-xs font-bold text-green-700 dark:text-green-300">Alcohol Target</div>
            <div className="text-xs font-normal text-green-600">20–28%</div>
          </div>
          <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded border border-green-200">
            <div className="text-xs font-bold text-green-700 dark:text-green-300">Soft Drinks Target</div>
            <div className="text-xs font-normal text-green-600">8–12%</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">Overall Warning</div>
            <div className="text-xs font-normal text-yellow-600">&gt;26%</div>
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
            <span className="text-xs font-normal text-gray-500">Chain Beverage Cost %</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getStatusColor(chainBeverageCostPercentage)}`}>
                {chainBeverageCostPercentage.toFixed(1)}%
              </span>
              <span>{getStatusIcon(chainBeverageCostPercentage)}</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Total Beverage Revenue</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-black dark:text-white">
                ₹{chainTotalRevenue.toLocaleString('en-IN')}
              </span>
              <span>🍹</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Total Beverage COGS</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-black dark:text-white">
                ₹{chainTotalCOGS.toLocaleString('en-IN')}
              </span>
              <span>📦</span>
            </div>
          </div>
        </div>
      </div>

      {/* Location Performance */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Performance Analysis
        </h2>
        <div className="space-y-3">
          {beverageCostData
            .sort((a, b) => a.beverageCostPercentage - b.beverageCostPercentage)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.beverageCostPercentage)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span>{getStatusIcon(location.beverageCostPercentage)}</span>
                </div>
                <div className="text-right">
                  <div className={`text-xs font-bold ${getStatusColor(location.beverageCostPercentage)}`}>
                    {location.beverageCostPercentage.toFixed(1)}%
                  </div>
                  <div className="text-xs font-normal text-gray-500">
                    ₹{location.beverageCOGS.toLocaleString('en-IN')} / ₹{location.beverageRevenue.toLocaleString('en-IN')}
                  </div>
                </div>
              </div>
              
              {/* Category Breakdown */}
              <div className="grid grid-cols-2 gap-4 mt-3">
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-1">Category Performance</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Alcohol:</span>
                      <span className={`font-normal ${getStatusColor(location.categoryBreakdown.alcohol.percentage, 'alcohol')}`}>
                        {location.categoryBreakdown.alcohol.percentage.toFixed(1)}%
                      </span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Soft Drinks:</span>
                      <span className={`font-normal ${getStatusColor(location.categoryBreakdown.softDrinks.percentage, 'softDrinks')}`}>
                        {location.categoryBreakdown.softDrinks.percentage.toFixed(1)}%
                      </span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Juices/Others:</span>
                      <span className="font-normal text-black dark:text-white">{location.categoryBreakdown.juices.percentage.toFixed(1)}%</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-1">Top Beverages</h4>
                  <div className="space-y-1">
                    {location.topBeverages.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex justify-between text-xs">
                        <span className="text-gray-500">{item.name}:</span>
                        <span className="font-normal text-black dark:text-white">{item.margin.toFixed(1)}% margin</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Monthly Trend */}
              <div className="mt-3">
                <h4 className="text-xs font-bold text-gray-600 mb-1">4-Week Trend</h4>
                <div className="flex gap-2">
                  {location.monthlyTrend.map((value, idx) => (
                    <div key={idx} className="text-xs">
                      <span className="text-gray-500">W{idx + 1}:</span>
                      <span className={`font-normal ml-1 ${getStatusColor(value)}`}>
                        {value}%
                      </span>
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
              <li>• PetPooja POS (beverage sales by category)</li>
              <li>• Inventory management (beverage stock)</li>
              <li>• Purchase orders (alcohol, soft drinks)</li>
              <li>• Recipe costing (fresh juices, mocktails)</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Daily (updated by 10 AM)</li>
              <li>• Weekly category analysis</li>
              <li>• Alert if alcohol cost &gt;28%</li>
              <li>• Monthly supplier review</li>
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
            • Track state excise duty variations affecting alcohol costs
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Monitor seasonal fruit prices for fresh juice costs
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Account for license compliance costs in pricing
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Separate tracking for imported vs. domestic brands
          </p>
        </div>
      </div>

      {/* Users & Access */}
      <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-lg border border-gray-200">
        <h2 className="text-xs font-bold text-black dark:text-white mb-2">
          👥 Authorized Users
        </h2>
        <p className="text-xs font-normal text-gray-500">
          Manager, Owner, Finance, Bar Manager
        </p>
      </div>
    </div>
  )
}