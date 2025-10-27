import { RESTAURANTS } from '@/lib/restaurant-data'

export default function RevenuePASHKPI() {
  // FIN_003 Revenue per Available Seat Hour (RevPASH) - Exact specifications from restaurant_kpi_metrics_127.txt
  const revpashData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      totalRevenue: 285000, // Today's revenue
      availableSeats: 48,
      operatingHours: 12, // 10 AM to 10 PM
      revpash: 494, // ₹494/hour
      status: 'good', // Within ₹400-500 range
      daypartBreakdown: {
        breakfast: { hours: 2, revenue: 28500, revpash: 297 }, // 10-12 PM
        lunch: { hours: 4, revenue: 171000, revpash: 891 }, // 12-4 PM
        dinner: { hours: 6, revenue: 85500, revpash: 297 } // 4-10 PM
      },
      weeklyTrend: [445, 467, 489, 512, 494, 523, 478], // Last 7 days
      seatingUtilization: 72 // 72% average utilization
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      totalRevenue: 225000,
      availableSeats: 36,
      operatingHours: 12,
      revpash: 521, // ₹521/hour
      status: 'good',
      daypartBreakdown: {
        breakfast: { hours: 2, revenue: 22500, revpash: 313 },
        lunch: { hours: 4, revenue: 135000, revpash: 938 },
        dinner: { hours: 6, revenue: 67500, revpash: 313 }
      },
      weeklyTrend: [489, 501, 534, 545, 521, 556, 498],
      seatingUtilization: 78
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      totalRevenue: 185000,
      availableSeats: 42,
      operatingHours: 12,
      revpash: 367, // ₹367/hour
      status: 'critical', // Below ₹400/hour threshold
      daypartBreakdown: {
        breakfast: { hours: 2, revenue: 18500, revpash: 220 },
        lunch: { hours: 4, revenue: 111000, revpash: 661 },
        dinner: { hours: 6, revenue: 55500, revpash: 220 }
      },
      weeklyTrend: [345, 356, 378, 389, 367, 398, 334],
      seatingUtilization: 65
    }
  ]

  const chainAverageRevPASH = revpashData.reduce((sum, item) => sum + item.revpash, 0) / revpashData.length

  const getStatusColor = (revpash: number) => {
    if (revpash >= 1200) return 'text-green-600'
    if (revpash >= 500) return 'text-green-600'
    if (revpash >= 400) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (revpash: number) => {
    if (revpash >= 1200) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (revpash >= 500) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (revpash >= 400) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getStatusIcon = (revpash: number) => {
    if (revpash >= 1200) return '🏆'
    if (revpash >= 500) return '✅'
    if (revpash >= 400) return '⚠️'
    return '🚨'
  }

  const getStatusLabel = (revpash: number) => {
    if (revpash >= 1200) return 'Excellent'
    if (revpash >= 500) return 'Target'
    if (revpash >= 400) return 'Warning'
    return 'Critical'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Revenue per Available Seat Hour (RevPASH)
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: FIN_003 | Asset Utilization Efficiency Measure
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
            <strong>Formula:</strong> Total Revenue ÷ (Available Seats × Operating Hours)
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Revenue generated per available seat per hour. Measures asset utilization efficiency.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> Reveals which dayparts and locations optimize physical asset profitability. Guides pricing and capacity decisions.
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
            <div className="text-xs font-normal text-green-600">₹500–₹1,200/hour</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">₹400–₹500/hour</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&lt;₹400/hour</div>
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
            <span className="text-xs font-normal text-gray-500">Chain Average RevPASH</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getStatusColor(chainAverageRevPASH)}`}>
                ₹{chainAverageRevPASH.toFixed(0)}/hour
              </span>
              <span>{getStatusIcon(chainAverageRevPASH)}</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Performance Status</span>
            <div className={`text-xs font-normal ${getStatusColor(chainAverageRevPASH)}`}>
              {getStatusLabel(chainAverageRevPASH)}
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Locations Above Target</span>
            <div className="text-xs font-normal text-black dark:text-white">
              {revpashData.filter(loc => loc.revpash >= 500).length} of {revpashData.length}
            </div>
          </div>
        </div>
      </div>

      {/* Location Performance Ranking */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location RevPASH Performance
        </h2>
        <div className="space-y-3">
          {revpashData
            .sort((a, b) => b.revpash - a.revpash)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.revpash)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span>{getStatusIcon(location.revpash)}</span>
                </div>
                <div className="text-right">
                  <div className={`text-xs font-bold ${getStatusColor(location.revpash)}`}>
                    ₹{location.revpash}/hour
                  </div>
                  <div className="text-xs font-normal text-gray-500">
                    {getStatusLabel(location.revpash)}
                  </div>
                </div>
              </div>
              
              {/* Capacity Details */}
              <div className="mb-3 grid grid-cols-3 gap-4">
                <div className="text-xs">
                  <span className="text-gray-500">Seats:</span>
                  <div className="font-normal text-black dark:text-white">{location.availableSeats}</div>
                </div>
                <div className="text-xs">
                  <span className="text-gray-500">Operating Hours:</span>
                  <div className="font-normal text-black dark:text-white">{location.operatingHours}h</div>
                </div>
                <div className="text-xs">
                  <span className="text-gray-500">Utilization:</span>
                  <div className="font-normal text-black dark:text-white">{location.seatingUtilization}%</div>
                </div>
              </div>

              {/* Daypart Performance */}
              <div className="mt-3">
                <h4 className="text-xs font-bold text-gray-600 mb-2">Daypart RevPASH Performance</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-xs">
                    <span className="text-gray-500">Breakfast (2h):</span>
                    <div className={`font-normal ${getStatusColor(location.daypartBreakdown.breakfast.revpash)}`}>
                      ₹{location.daypartBreakdown.breakfast.revpash}/hour
                    </div>
                  </div>
                  <div className="text-xs">
                    <span className="text-gray-500">Lunch (4h):</span>
                    <div className={`font-normal ${getStatusColor(location.daypartBreakdown.lunch.revpash)}`}>
                      ₹{location.daypartBreakdown.lunch.revpash}/hour
                    </div>
                  </div>
                  <div className="text-xs">
                    <span className="text-gray-500">Dinner (6h):</span>
                    <div className={`font-normal ${getStatusColor(location.daypartBreakdown.dinner.revpash)}`}>
                      ₹{location.daypartBreakdown.dinner.revpash}/hour
                    </div>
                  </div>
                </div>
              </div>

              {/* 7-Day Trend */}
              <div className="mt-3">
                <h4 className="text-xs font-bold text-gray-600 mb-2">7-Day RevPASH Trend</h4>
                <div className="flex gap-2">
                  {location.weeklyTrend.map((value, i) => (
                    <div key={i} className="text-xs text-center">
                      <div className={`font-normal ${getStatusColor(value)}`}>
                        ₹{value}
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
              <li>• PetPooja POS (revenue)</li>
              <li>• Restaurant config (seats, hours)</li>
              <li>• Real-time seat tracking</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Daily calculation</li>
              <li>• Real-time during operations</li>
              <li>• Red alert if &lt;₹400/hour consistently</li>
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
            • Factor in seasonal demand (monsoon vs. festive periods)
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Metro benchmarks higher than Tier-2 cities
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Consider local competition and foot traffic patterns
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