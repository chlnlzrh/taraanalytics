import { RESTAURANTS } from '@/lib/restaurant-data'

export default function TotalDailyRevenueKPI() {
  // FIN_001 Total Daily Revenue - Exact specifications from restaurant_kpi_metrics_127.txt
  const dailyRevenueData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      todayRevenue: 285000,
      yesterdayRevenue: 295000,
      avg30DayRevenue: 275000,
      variance: 3.6, // +3.6% vs 30-day average
      status: 'good', // Within target range
      daypartBreakdown: {
        breakfast: 28500, // 10%
        lunch: 171000, // 60%
        dinner: 85500 // 30%
      },
      channelBreakdown: {
        dineIn: 199500, // 70%
        delivery: 57000, // 20%
        takeaway: 28500 // 10%
      }
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      todayRevenue: 225000,
      yesterdayRevenue: 235000,
      avg30DayRevenue: 220000,
      variance: 2.3, // +2.3% vs 30-day average
      status: 'good',
      daypartBreakdown: {
        breakfast: 22500,
        lunch: 135000,
        dinner: 67500
      },
      channelBreakdown: {
        dineIn: 157500,
        delivery: 45000,
        takeaway: 22500
      }
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      todayRevenue: 185000,
      yesterdayRevenue: 195000,
      avg30DayRevenue: 200000,
      variance: -7.5, // -7.5% vs 30-day average (warning range)
      status: 'warning',
      daypartBreakdown: {
        breakfast: 18500,
        lunch: 111000,
        dinner: 55500
      },
      channelBreakdown: {
        dineIn: 129500,
        delivery: 37000,
        takeaway: 18500
      }
    }
  ]

  const chainTotal = dailyRevenueData.reduce((sum, item) => sum + item.todayRevenue, 0)
  const chainAverage = dailyRevenueData.reduce((sum, item) => sum + item.variance, 0) / dailyRevenueData.length

  const getStatusColor = (variance: number) => {
    if (variance >= -5) return 'text-green-600'
    if (variance >= -10) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (variance: number) => {
    if (variance >= -5) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (variance >= -10) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getStatusIcon = (variance: number) => {
    if (variance >= -5) return '📈'
    if (variance >= -10) return '⚠️'
    return '📉'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Total Daily Revenue
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: FIN_001 | Baseline Measure of Daily Revenue Performance
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
            <strong>Formula:</strong> Sum of all sales transactions in a day (before discounts)
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Gross sales for a single day across all service channels. Baseline measure of daily revenue performance.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> Daily revenue tracking reveals demand trends, marketing effectiveness, and helps forecast monthly performance.
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
            <div className="text-xs font-normal text-green-600">₹1.5L–₹3L/day</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">-5% to -10% vs 30-day avg</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&lt;-10% vs 30-day avg</div>
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
            <span className="text-xs font-normal text-gray-500">Total Chain Revenue Today</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-black dark:text-white">
                ₹{chainTotal.toLocaleString('en-IN')}
              </span>
              <span>💰</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Average Variance vs 30-day</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getStatusColor(chainAverage)}`}>
                {chainAverage > 0 ? '+' : ''}{chainAverage.toFixed(1)}%
              </span>
              <span>{getStatusIcon(chainAverage)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Location Performance */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Performance (Today vs 30-day Average)
        </h2>
        <div className="space-y-3">
          {dailyRevenueData
            .sort((a, b) => b.todayRevenue - a.todayRevenue)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.variance)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span>{getStatusIcon(location.variance)}</span>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-black dark:text-white">
                    ₹{location.todayRevenue.toLocaleString('en-IN')}
                  </div>
                  <div className={`text-xs font-normal ${getStatusColor(location.variance)}`}>
                    {location.variance > 0 ? '+' : ''}{location.variance.toFixed(1)}% vs avg
                  </div>
                </div>
              </div>
              
              {/* Drill-down breakdown */}
              <div className="grid grid-cols-2 gap-4 mt-3">
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-1">Daypart Breakdown</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Breakfast:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.daypartBreakdown.breakfast.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Lunch:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.daypartBreakdown.lunch.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Dinner:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.daypartBreakdown.dinner.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-1">Channel Breakdown</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Dine-in:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.channelBreakdown.dineIn.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Delivery:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.channelBreakdown.delivery.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Takeaway:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.channelBreakdown.takeaway.toLocaleString('en-IN')}</span>
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
              <li>• PetPooja POS API /orders endpoint</li>
              <li>• Sum of transaction amounts</li>
              <li>• Real-time sales data</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Daily (by 8 AM next day)</li>
              <li>• Real-time during operating hours</li>
              <li>• Alert if &lt;-10% vs rolling average</li>
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
            • Exclude GST from display if net calculation preferred
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Align with accounting period (1st–30th)
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Track festive season variations for accurate benchmarking
          </p>
        </div>
      </div>

      {/* Users & Access */}
      <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-lg border border-gray-200">
        <h2 className="text-xs font-bold text-black dark:text-white mb-2">
          👥 Authorized Users
        </h2>
        <p className="text-xs font-normal text-gray-500">
          Owner, Manager, Finance
        </p>
      </div>
    </div>
  )
}