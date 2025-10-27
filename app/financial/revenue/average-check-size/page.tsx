import { RESTAURANTS } from '@/lib/restaurant-data'

export default function AverageCheckSizeKPI() {
  // FIN_004 Average Check Size (ACS) - Exact specifications from restaurant_kpi_metrics_127.txt
  const acsData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      totalRevenue: 285000,
      totalCovers: 485,
      averageCheckSize: 587,
      dineInACS: 650, // Higher for dine-in
      deliveryACS: 420, // Lower due to limited items
      takeawayACS: 395,
      variance: 5.2, // +5.2% vs 30-day average
      status: 'good', // Within target range ₹350-₹700
      daypartBreakdown: {
        breakfast: 285, // Lower check size
        lunch: 585,
        dinner: 745 // Highest check size
      },
      channelBreakdown: {
        dineIn: { acs: 650, covers: 290 },
        delivery: { acs: 420, covers: 135 },
        takeaway: { acs: 395, covers: 60 }
      }
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      totalRevenue: 225000,
      totalCovers: 425,
      averageCheckSize: 529,
      dineInACS: 595,
      deliveryACS: 380,
      takeawayACS: 365,
      variance: 2.8, // +2.8% vs 30-day average
      status: 'good',
      daypartBreakdown: {
        breakfast: 265,
        lunch: 525,
        dinner: 685
      },
      channelBreakdown: {
        dineIn: { acs: 595, covers: 255 },
        delivery: { acs: 380, covers: 115 },
        takeaway: { acs: 365, covers: 55 }
      }
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      totalRevenue: 185000,
      totalCovers: 545,
      averageCheckSize: 339,
      dineInACS: 385,
      deliveryACS: 295,
      takeawayACS: 275,
      variance: -8.5, // -8.5% vs 30-day average (warning range)
      status: 'warning', // Close to critical threshold ₹300
      daypartBreakdown: {
        breakfast: 195,
        lunch: 335,
        dinner: 455
      },
      channelBreakdown: {
        dineIn: { acs: 385, covers: 325 },
        delivery: { acs: 295, covers: 145 },
        takeaway: { acs: 275, covers: 75 }
      }
    }
  ]

  const chainAverage = acsData.reduce((sum, item) => sum + item.averageCheckSize, 0) / acsData.length
  const chainVariance = acsData.reduce((sum, item) => sum + item.variance, 0) / acsData.length

  const getStatusColor = (acs: number) => {
    if (acs >= 350) return 'text-green-600'
    if (acs >= 300) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (acs: number) => {
    if (acs >= 350) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (acs >= 300) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getStatusIcon = (acs: number) => {
    if (acs >= 500) return '🎯'
    if (acs >= 350) return '✅'
    if (acs >= 300) return '⚠️'
    return '🚨'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Average Check Size (ACS)
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: FIN_004 | Direct Measure of Pricing Power & Upselling Effectiveness
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
            <strong>Formula:</strong> Total Revenue ÷ Number of Covers (transactions)
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Average amount spent per customer. Direct measure of pricing power and upselling effectiveness.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> 5–10% increase in ACS through beverages/desserts compounds significantly across 3 locations. Easier than driving covers.
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
            <div className="text-xs font-normal text-green-600">₹350–₹700</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">₹300–₹350</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&lt;₹300</div>
          </div>
        </div>
      </div>

      {/* Chain Summary */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          📈 Chain Performance Summary
        </h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <span className="text-xs font-normal text-gray-500">Chain Average Check Size</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getStatusColor(chainAverage)}`}>
                ₹{chainAverage.toFixed(0)}
              </span>
              <span>{getStatusIcon(chainAverage)}</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Average Trend vs 30-day</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${chainVariance > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {chainVariance > 0 ? '+' : ''}{chainVariance.toFixed(1)}%
              </span>
              <span>{chainVariance > 0 ? '📈' : '📉'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Location Performance */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Performance (Ranked by ACS)
        </h2>
        <div className="space-y-3">
          {acsData
            .sort((a, b) => b.averageCheckSize - a.averageCheckSize)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.averageCheckSize)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span>{getStatusIcon(location.averageCheckSize)}</span>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-black dark:text-white">
                    ₹{location.averageCheckSize}
                  </div>
                  <div className={`text-xs font-normal ${location.variance > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {location.variance > 0 ? '+' : ''}{location.variance.toFixed(1)}% vs avg
                  </div>
                </div>
              </div>
              
              {/* Drill-down breakdown */}
              <div className="grid grid-cols-2 gap-4 mt-3">
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-1">Channel ACS Breakdown</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Dine-in:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.dineInACS}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Delivery:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.deliveryACS}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Takeaway:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.takeawayACS}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-1">Daypart ACS Breakdown</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Breakfast:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.daypartBreakdown.breakfast}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Lunch:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.daypartBreakdown.lunch}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Dinner:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.daypartBreakdown.dinner}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional metrics */}
              <div className="mt-3 pt-2 border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">Total Covers Today:</span>
                  <span className="font-normal text-black dark:text-white">{location.totalCovers}</span>
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
              <li>• PetPooja POS /orders endpoint</li>
              <li>• Count unique transactions (covers)</li>
              <li>• Revenue by channel & daypart</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Daily (real-time updates)</li>
              <li>• Alert: Yellow if -5% vs 30-day average</li>
              <li>• Drill down: menu category, daypart, channel</li>
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
            • Track separately: dine-in (higher ACS) vs. delivery (lower ACS due to limited items)
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Monitor beverage attach rate impact on overall ACS
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Consider price sensitivity variations across metro locations
          </p>
        </div>
      </div>

      {/* Users & Access */}
      <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-lg border border-gray-200">
        <h2 className="text-xs font-bold text-black dark:text-white mb-2">
          👥 Authorized Users
        </h2>
        <p className="text-xs font-normal text-gray-500">
          Manager, Finance
        </p>
      </div>
    </div>
  )
}