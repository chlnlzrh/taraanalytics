import { RESTAURANTS } from '@/lib/restaurant-data'

export default function DailyFootfallKPI() {
  // CUS_001 Daily Footfall / Covers - Exact specifications from restaurant_kpi_metrics_127.txt
  const footfallData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      todayCovers: 285,
      yesterdayCovers: 295,
      avg30DayCovers: 275,
      variance: 3.6, // +3.6% vs 30-day average
      status: 'good', // Within target range
      daypartBreakdown: {
        breakfast: 28, // 10%
        lunch: 171, // 60%
        dinner: 86 // 30%
      },
      channelBreakdown: {
        dineIn: 200, // 70%
        delivery: 57, // 20%
        takeaway: 28 // 10%
      }
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      todayCovers: 225,
      yesterdayCovers: 235,
      avg30DayCovers: 220,
      variance: 2.3, // +2.3% vs 30-day average
      status: 'good',
      daypartBreakdown: {
        breakfast: 23,
        lunch: 135,
        dinner: 67
      },
      channelBreakdown: {
        dineIn: 158,
        delivery: 45,
        takeaway: 22
      }
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      todayCovers: 185,
      yesterdayCovers: 195,
      avg30DayCovers: 200,
      variance: -7.5, // -7.5% vs 30-day average (warning range)
      status: 'warning',
      daypartBreakdown: {
        breakfast: 19,
        lunch: 111,
        dinner: 55
      },
      channelBreakdown: {
        dineIn: 130,
        delivery: 37,
        takeaway: 18
      }
    }
  ]

  const chainTotal = footfallData.reduce((sum, item) => sum + item.todayCovers, 0)
  const chainAverage = footfallData.reduce((sum, item) => sum + item.variance, 0) / footfallData.length

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
            Daily Footfall / Covers
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: CUS_001 | Baseline Measure of Daily Customer Traffic
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
            <strong>Formula:</strong> Total number of customers served per day
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Daily customer count. Baseline measure; trends reveal marketing effectiveness and demand.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> Decline in footfall is early indicator of demand problems; allows proactive response.
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
            <div className="text-xs font-normal text-green-600">150–300 covers/day</div>
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
            <span className="text-xs font-normal text-gray-500">Total Chain Covers Today</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-black dark:text-white">
                {chainTotal.toLocaleString('en-IN')} covers
              </span>
              <span>👥</span>
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
          {footfallData
            .sort((a, b) => b.todayCovers - a.todayCovers)
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
                    {location.todayCovers.toLocaleString('en-IN')} covers
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
                      <span className="font-normal text-black dark:text-white">{location.daypartBreakdown.breakfast} covers</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Lunch:</span>
                      <span className="font-normal text-black dark:text-white">{location.daypartBreakdown.lunch} covers</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Dinner:</span>
                      <span className="font-normal text-black dark:text-white">{location.daypartBreakdown.dinner} covers</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-1">Channel Breakdown</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Dine-in:</span>
                      <span className="font-normal text-black dark:text-white">{location.channelBreakdown.dineIn} covers</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Delivery:</span>
                      <span className="font-normal text-black dark:text-white">{location.channelBreakdown.delivery} covers</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Takeaway:</span>
                      <span className="font-normal text-black dark:text-white">{location.channelBreakdown.takeaway} covers</span>
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
              <li>• PetPooja POS /orders (transaction count)</li>
              <li>• Customer count tracking</li>
              <li>• Channel-specific customer data</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Daily refresh</li>
              <li>• Real-time during operating hours</li>
              <li>• Alert if &lt;-10% vs 30-day average</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Drill-down Options */}
      <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200">
        <h2 className="text-xs font-bold text-purple-900 dark:text-purple-300 mb-2">
          🔍 Available Drill-downs
        </h2>
        <div className="space-y-1">
          <p className="text-xs font-normal text-purple-800 dark:text-purple-300">
            • By location analysis
          </p>
          <p className="text-xs font-normal text-purple-800 dark:text-purple-300">
            • By daypart (breakfast/lunch/dinner)
          </p>
          <p className="text-xs font-normal text-purple-800 dark:text-purple-300">
            • By channel (dine-in/delivery/takeaway)
          </p>
        </div>
      </div>

      {/* Users & Access */}
      <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-lg border border-gray-200">
        <h2 className="text-xs font-bold text-black dark:text-white mb-2">
          👥 Authorized Users
        </h2>
        <p className="text-xs font-normal text-gray-500">
          Manager, Owner
        </p>
      </div>
    </div>
  )
}