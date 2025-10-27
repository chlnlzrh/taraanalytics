import { RESTAURANTS } from '@/lib/restaurant-data'

export default function GrossProfitMarginKPI() {
  // FIN_005 Gross Profit Margin % - Exact specifications from restaurant_kpi_metrics_127.txt
  const grossProfitData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      revenue: 485000,
      cogs: 155200, // 32% of revenue
      grossProfit: 329800,
      grossProfitMargin: 68.0, // Good margin
      status: 'good', // 65-72% target range
      categoryBreakdown: {
        food: { revenue: 340000, cogs: 108800, margin: 68.0 },
        beverages: { revenue: 97000, cogs: 24250, margin: 75.0 },
        desserts: { revenue: 48000, cogs: 22200, margin: 53.8 }
      },
      gstCategory: {
        gst5: { revenue: 242500, cogs: 77600 }, // Basic food items
        gst18: { revenue: 242500, cogs: 77600 } // AC restaurant service
      }
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      revenue: 395000,
      cogs: 118500, // 30% of revenue
      grossProfit: 276500,
      grossProfitMargin: 70.0, // Excellent margin
      status: 'excellent', // Above 70%
      categoryBreakdown: {
        food: { revenue: 280000, cogs: 84000, margin: 70.0 },
        beverages: { revenue: 79000, cogs: 19750, margin: 75.0 },
        desserts: { revenue: 36000, cogs: 14750, margin: 59.0 }
      },
      gstCategory: {
        gst5: { revenue: 197500, cogs: 59250 },
        gst18: { revenue: 197500, cogs: 59250 }
      }
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      revenue: 365000,
      cogs: 146000, // 40% of revenue
      grossProfit: 219000,
      grossProfitMargin: 60.0, // Warning range
      status: 'warning', // 60-65% warning range
      categoryBreakdown: {
        food: { revenue: 255000, cogs: 102000, margin: 60.0 },
        beverages: { revenue: 73000, cogs: 29200, margin: 60.0 },
        desserts: { revenue: 37000, cogs: 14800, margin: 60.0 }
      },
      gstCategory: {
        gst5: { revenue: 182500, cogs: 73000 },
        gst18: { revenue: 182500, cogs: 73000 }
      }
    }
  ]

  const chainAverage = grossProfitData.reduce((sum, item) => sum + item.grossProfitMargin, 0) / grossProfitData.length
  const chainTotalRevenue = grossProfitData.reduce((sum, item) => sum + item.revenue, 0)
  const chainTotalCogs = grossProfitData.reduce((sum, item) => sum + item.cogs, 0)
  const chainOverallMargin = ((chainTotalRevenue - chainTotalCogs) / chainTotalRevenue) * 100

  const getStatusColor = (margin: number) => {
    if (margin >= 72) return 'text-green-600'
    if (margin >= 65) return 'text-green-600'
    if (margin >= 60) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (margin: number) => {
    if (margin >= 72) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (margin >= 65) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (margin >= 60) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getStatusIcon = (margin: number) => {
    if (margin >= 72) return '🟢'
    if (margin >= 65) return '✅'
    if (margin >= 60) return '⚠️'
    return '🚨'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Gross Profit Margin %
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: FIN_005 | Indicator of Pricing Relative to Ingredient Costs
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
            <strong>Formula:</strong> (Revenue - COGS) ÷ Revenue × 100
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Percentage of revenue remaining after subtracting food/beverage costs. Indicator of pricing relative to ingredient costs.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> Typically 60–72% for Indian restaurants. Lower margins indicate high COGS or excessive discounting.
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
            <div className="text-xs font-normal text-green-600">65–72%</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">60–65%</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&lt;60%</div>
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
            <span className="text-xs font-normal text-gray-500">Chain Average Margin</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getStatusColor(chainAverage)}`}>
                {chainAverage.toFixed(1)}%
              </span>
              <span>{getStatusIcon(chainAverage)}</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Overall Chain Margin</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getStatusColor(chainOverallMargin)}`}>
                {chainOverallMargin.toFixed(1)}%
              </span>
              <span>💰</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Performance Status</span>
            <div className="text-xs font-normal text-green-600">
              ✓ Above Target Range (Chain performing well)
            </div>
          </div>
        </div>
      </div>

      {/* Location Ranking */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Ranking by Gross Profit Margin
        </h2>
        <div className="space-y-3">
          {grossProfitData
            .sort((a, b) => b.grossProfitMargin - a.grossProfitMargin)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.grossProfitMargin)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span>{getStatusIcon(location.grossProfitMargin)}</span>
                </div>
                <div className="text-right">
                  <div className={`text-xs font-bold ${getStatusColor(location.grossProfitMargin)}`}>
                    {location.grossProfitMargin.toFixed(1)}%
                  </div>
                  <div className="text-xs font-normal text-gray-500">
                    ₹{location.grossProfit.toLocaleString('en-IN')} profit
                  </div>
                </div>
              </div>
              
              {/* Revenue and COGS breakdown */}
              <div className="grid grid-cols-3 gap-4 mb-3 text-xs">
                <div>
                  <span className="text-gray-500">Revenue:</span>
                  <div className="font-normal text-black dark:text-white">₹{location.revenue.toLocaleString('en-IN')}</div>
                </div>
                <div>
                  <span className="text-gray-500">COGS:</span>
                  <div className="font-normal text-black dark:text-white">₹{location.cogs.toLocaleString('en-IN')}</div>
                </div>
                <div>
                  <span className="text-gray-500">COGS %:</span>
                  <div className="font-normal text-black dark:text-white">{((location.cogs / location.revenue) * 100).toFixed(1)}%</div>
                </div>
              </div>

              {/* Category breakdown */}
              <div className="mt-3">
                <h4 className="text-xs font-bold text-gray-600 mb-2">Category Margin Breakdown</h4>
                <div className="grid grid-cols-3 gap-4 text-xs">
                  <div>
                    <span className="text-gray-500">Food:</span>
                    <div className="font-normal text-black dark:text-white">{location.categoryBreakdown.food.margin.toFixed(1)}%</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Beverages:</span>
                    <div className="font-normal text-black dark:text-white">{location.categoryBreakdown.beverages.margin.toFixed(1)}%</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Desserts:</span>
                    <div className="font-normal text-black dark:text-white">{location.categoryBreakdown.desserts.margin.toFixed(1)}%</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Waterfall Analysis */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          📊 Revenue → Gross Profit Waterfall (Chain Total)
        </h2>
        <div className="space-y-3">
          <div className="flex justify-between items-center p-2 bg-blue-50 dark:bg-blue-900/20 rounded">
            <span className="text-xs font-normal text-blue-800 dark:text-blue-300">Total Revenue</span>
            <span className="text-xs font-bold text-blue-900 dark:text-blue-300">₹{chainTotalRevenue.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between items-center p-2 bg-red-50 dark:bg-red-900/20 rounded">
            <span className="text-xs font-normal text-red-800 dark:text-red-300">Less: COGS</span>
            <span className="text-xs font-bold text-red-900 dark:text-red-300">-₹{chainTotalCogs.toLocaleString('en-IN')}</span>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700 pt-2">
            <div className="flex justify-between items-center p-2 bg-green-50 dark:bg-green-900/20 rounded">
              <span className="text-xs font-bold text-green-800 dark:text-green-300">Gross Profit</span>
              <span className="text-xs font-bold text-green-900 dark:text-green-300">
                ₹{(chainTotalRevenue - chainTotalCogs).toLocaleString('en-IN')} ({chainOverallMargin.toFixed(1)}%)
              </span>
            </div>
          </div>
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
              <li>• PetPooja POS (revenue)</li>
              <li>• Inventory API (COGS)</li>
              <li>• Item-level cost tracking</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Weekly (after inventory reconciliation)</li>
              <li>• Alert: Red if &lt;60%</li>
              <li>• Drill down: by menu category, by location, by item</li>
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
            • Monitor separately for GST categories (5% vs. 18%); affects net margin differently
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Track ingredient inflation impact on COGS quarterly
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Consider seasonal variations in ingredient costs (monsoon, festival seasons)
          </p>
        </div>
      </div>

      {/* Users & Access */}
      <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-lg border border-gray-200">
        <h2 className="text-xs font-bold text-black dark:text-white mb-2">
          👥 Authorized Users
        </h2>
        <p className="text-xs font-normal text-gray-500">
          Owner, CFO, Finance
        </p>
      </div>
    </div>
  )
}