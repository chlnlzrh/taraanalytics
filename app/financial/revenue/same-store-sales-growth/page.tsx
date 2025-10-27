import { RESTAURANTS } from '@/lib/restaurant-data'

export default function SameStoreSalesGrowthKPI() {
  // FIN_002 Same-Store Sales Growth (SSSG) - Exact specifications from restaurant_kpi_metrics_127.txt
  const sssgData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      currentMonthRevenue: 8550000, // ₹85.5L this month
      priorYearSameMonth: 7950000, // ₹79.5L last year same month
      sssgPercentage: 7.5, // +7.5% YoY growth
      status: 'excellent', // Above 8% target
      channelBreakdown: {
        dineInGrowth: 8.2,
        deliveryGrowth: 6.8,
        takeawayGrowth: 7.1
      },
      menuCategoryGrowth: {
        mains: 7.8,
        beverages: 9.2,
        desserts: 5.4
      }
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      currentMonthRevenue: 6750000, // ₹67.5L this month
      priorYearSameMonth: 6300000, // ₹63L last year same month
      sssgPercentage: 7.1, // +7.1% YoY growth
      status: 'excellent',
      channelBreakdown: {
        dineInGrowth: 7.5,
        deliveryGrowth: 6.2,
        takeawayGrowth: 8.0
      },
      menuCategoryGrowth: {
        mains: 7.3,
        beverages: 8.1,
        desserts: 4.9
      }
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      currentMonthRevenue: 5550000, // ₹55.5L this month
      priorYearSameMonth: 5700000, // ₹57L last year same month
      sssgPercentage: -2.6, // -2.6% YoY decline
      status: 'critical', // Below 0% (decline)
      channelBreakdown: {
        dineInGrowth: -3.2,
        deliveryGrowth: -1.8,
        takeawayGrowth: -2.4
      },
      menuCategoryGrowth: {
        mains: -2.8,
        beverages: -1.9,
        desserts: -4.1
      }
    }
  ]

  const chainAverageSSSG = sssgData.reduce((sum, item) => sum + item.sssgPercentage, 0) / sssgData.length

  const getStatusColor = (sssg: number) => {
    if (sssg >= 8) return 'text-green-600'
    if (sssg >= 3) return 'text-green-600'
    if (sssg >= 0) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (sssg: number) => {
    if (sssg >= 8) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (sssg >= 3) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (sssg >= 0) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getStatusIcon = (sssg: number) => {
    if (sssg >= 8) return '🚀'
    if (sssg >= 3) return '📈'
    if (sssg >= 0) return '⚠️'
    return '📉'
  }

  const getStatusLabel = (sssg: number) => {
    if (sssg >= 8) return 'Excellent Growth'
    if (sssg >= 3) return 'Target Growth'
    if (sssg >= 0) return 'Stagnation'
    return 'Decline'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Same-Store Sales Growth (SSSG)
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: FIN_002 | Year-over-Year Organic Growth Indicator
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
            <strong>Formula:</strong> (Current Month Revenue - Prior Year Same Month Revenue) / Prior Year Same Month Revenue × 100
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Year-over-year revenue change for a location open &gt;12 months. Indicator of organic growth or decline.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> SSSG is critical for franchise valuations and strategic growth assessment. Typical mature chain target: 3–8% YoY.
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
            <div className="text-xs font-normal text-green-600">3–8% YoY growth</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">0–3% (stagnation)</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&lt;0% (decline)</div>
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
            <span className="text-xs font-normal text-gray-500">Chain Average SSSG</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getStatusColor(chainAverageSSSG)}`}>
                {chainAverageSSSG > 0 ? '+' : ''}{chainAverageSSSG.toFixed(1)}%
              </span>
              <span>{getStatusIcon(chainAverageSSSG)}</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Performance Status</span>
            <div className={`text-xs font-normal ${getStatusColor(chainAverageSSSG)}`}>
              {getStatusLabel(chainAverageSSSG)}
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Locations Growing</span>
            <div className="text-xs font-normal text-black dark:text-white">
              {sssgData.filter(loc => loc.sssgPercentage >= 0).length} of {sssgData.length}
            </div>
          </div>
        </div>
      </div>

      {/* Location Performance Ranking */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location SSSG Performance (Year-over-Year)
        </h2>
        <div className="space-y-3">
          {sssgData
            .sort((a, b) => b.sssgPercentage - a.sssgPercentage)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.sssgPercentage)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span>{getStatusIcon(location.sssgPercentage)}</span>
                </div>
                <div className="text-right">
                  <div className={`text-xs font-bold ${getStatusColor(location.sssgPercentage)}`}>
                    {location.sssgPercentage > 0 ? '+' : ''}{location.sssgPercentage.toFixed(1)}%
                  </div>
                  <div className="text-xs font-normal text-gray-500">
                    {getStatusLabel(location.sssgPercentage)}
                  </div>
                </div>
              </div>
              
              {/* Revenue Comparison */}
              <div className="mb-3">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-500">This Month:</span>
                  <span className="font-normal text-black dark:text-white">₹{(location.currentMonthRevenue / 100000).toFixed(1)}L</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">Same Month Last Year:</span>
                  <span className="font-normal text-black dark:text-white">₹{(location.priorYearSameMonth / 100000).toFixed(1)}L</span>
                </div>
              </div>

              {/* Drill-down breakdown */}
              <div className="grid grid-cols-2 gap-4 mt-3">
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-1">Channel Growth (YoY)</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Dine-in:</span>
                      <span className={`font-normal ${getStatusColor(location.channelBreakdown.dineInGrowth)}`}>
                        {location.channelBreakdown.dineInGrowth > 0 ? '+' : ''}{location.channelBreakdown.dineInGrowth.toFixed(1)}%
                      </span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Delivery:</span>
                      <span className={`font-normal ${getStatusColor(location.channelBreakdown.deliveryGrowth)}`}>
                        {location.channelBreakdown.deliveryGrowth > 0 ? '+' : ''}{location.channelBreakdown.deliveryGrowth.toFixed(1)}%
                      </span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Takeaway:</span>
                      <span className={`font-normal ${getStatusColor(location.channelBreakdown.takeawayGrowth)}`}>
                        {location.channelBreakdown.takeawayGrowth > 0 ? '+' : ''}{location.channelBreakdown.takeawayGrowth.toFixed(1)}%
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-1">Menu Category Growth (YoY)</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Mains:</span>
                      <span className={`font-normal ${getStatusColor(location.menuCategoryGrowth.mains)}`}>
                        {location.menuCategoryGrowth.mains > 0 ? '+' : ''}{location.menuCategoryGrowth.mains.toFixed(1)}%
                      </span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Beverages:</span>
                      <span className={`font-normal ${getStatusColor(location.menuCategoryGrowth.beverages)}`}>
                        {location.menuCategoryGrowth.beverages > 0 ? '+' : ''}{location.menuCategoryGrowth.beverages.toFixed(1)}%
                      </span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Desserts:</span>
                      <span className={`font-normal ${getStatusColor(location.menuCategoryGrowth.desserts)}`}>
                        {location.menuCategoryGrowth.desserts > 0 ? '+' : ''}{location.menuCategoryGrowth.desserts.toFixed(1)}%
                      </span>
                    </div>
                  </div>
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
              <li>• PetPooja POS API /reports</li>
              <li>• Historical revenue data</li>
              <li>• Same-month comparisons</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Monthly (after month-end close)</li>
              <li>• Yellow alert if 0–3%</li>
              <li>• Red alert if &lt;0%</li>
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
            • Account for festive season variations (Oct–Nov spike)
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Compare like-for-like months for accurate measurement
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Consider local competition and market changes
          </p>
        </div>
      </div>

      {/* Users & Access */}
      <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-lg border border-gray-200">
        <h2 className="text-xs font-bold text-black dark:text-white mb-2">
          👥 Authorized Users
        </h2>
        <p className="text-xs font-normal text-gray-500">
          Owner, CFO
        </p>
      </div>
    </div>
  )
}