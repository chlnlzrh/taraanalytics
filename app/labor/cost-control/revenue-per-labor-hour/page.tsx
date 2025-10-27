import { RESTAURANTS } from '@/lib/restaurant-data'

export default function RevenuePerLaborHourKPI() {
  // LAB_002 Revenue per Labor Hour - Exact specifications from restaurant_kpi_metrics_127.txt
  const revenuePerLaborHourData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      totalRevenue: 485000,
      totalLaborHours: 544, // Total labor hours worked across all staff
      revenuePerHour: 892,
      peakHours: 120, // Peak hours in month
      offPeakHours: 424,
      peakRevenuePerHour: 1320,
      offPeakRevenuePerHour: 650,
      status: 'good' // ₹800-₹1,500/hour target
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      totalRevenue: 395000,
      totalLaborHours: 432,
      revenuePerHour: 914,
      peakHours: 108,
      offPeakHours: 324,
      peakRevenuePerHour: 1285,
      offPeakRevenuePerHour: 695,
      status: 'good'
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      totalRevenue: 365000,
      totalLaborHours: 616,
      revenuePerHour: 592,
      peakHours: 144,
      offPeakHours: 472,
      peakRevenuePerHour: 980,
      offPeakRevenuePerHour: 485,
      status: 'critical' // <₹600/hour critical
    }
  ]

  const chainAverage = revenuePerLaborHourData.reduce((sum, item) => sum + item.revenuePerHour, 0) / revenuePerLaborHourData.length

  const getStatusColor = (revenuePerHour: number) => {
    if (revenuePerHour >= 800) return 'text-green-600'
    if (revenuePerHour >= 600) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (revenuePerHour: number) => {
    if (revenuePerHour >= 800) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (revenuePerHour >= 600) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getStatusIcon = (revenuePerHour: number) => {
    if (revenuePerHour >= 800) return '✅'
    if (revenuePerHour >= 600) return '⚠️'
    return '🚨'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Revenue per Labor Hour Analysis
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: LAB_002 | Direct Measure of Labor Productivity
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
            <strong>Formula:</strong> Total Revenue ÷ Total Labor Hours Worked
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Revenue generated per labor hour. Direct measure of labor productivity.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> A 5–10% improvement yields significant margin gains. Benchmark by location and shift.
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
            <div className="text-xs font-normal text-green-600">₹800–₹1,500/hour</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">₹600–₹800/hour</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&lt;₹600/hour</div>
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
            <span className="text-xs font-normal text-gray-500">Chain Average Revenue/Hour</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getStatusColor(chainAverage)}`}>
                ₹{Math.round(chainAverage)}
              </span>
              <span>{getStatusIcon(chainAverage)}</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Performance Status</span>
            <div className="text-xs font-normal text-yellow-600">
              ⚠️ One location below critical threshold (₹600/hour)
            </div>
          </div>
        </div>
      </div>

      {/* Location Ranking & Heatmap */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Ranking by Revenue per Labor Hour
        </h2>
        <div className="space-y-3">
          {revenuePerLaborHourData
            .sort((a, b) => b.revenuePerHour - a.revenuePerHour)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.revenuePerHour)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span>{getStatusIcon(location.revenuePerHour)}</span>
                </div>
                <span className={`text-xs font-bold ${getStatusColor(location.revenuePerHour)}`}>
                  ₹{location.revenuePerHour}
                </span>
              </div>
              
              {/* Drill-down breakdown */}
              <div className="grid grid-cols-4 gap-4 text-xs">
                <div>
                  <span className="text-gray-500">Total Revenue:</span>
                  <div className="font-normal text-black dark:text-white">₹{location.totalRevenue.toLocaleString('en-IN')}</div>
                </div>
                <div>
                  <span className="text-gray-500">Total Labor Hours:</span>
                  <div className="font-normal text-black dark:text-white">{location.totalLaborHours}h</div>
                </div>
                <div>
                  <span className="text-gray-500">Peak Hour Revenue:</span>
                  <div className="font-normal text-black dark:text-white">₹{location.peakRevenuePerHour}/h</div>
                </div>
                <div>
                  <span className="text-gray-500">Off-Peak Revenue:</span>
                  <div className="font-normal text-black dark:text-white">₹{location.offPeakRevenuePerHour}/h</div>
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
              <li>• HRIS/Timeclock (labor hours)</li>
              <li>• Shift management system</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Daily refresh</li>
              <li>• Red alert if &lt;₹600/hour</li>
              <li>• Drill down by location, shift, daypart</li>
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
            • Typically lower during off-peak; use rolling 7-day average
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Lunch periods show higher productivity (12–15 covers/hour)
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Account for seasonal variations and festival impacts
          </p>
        </div>
      </div>

      {/* Users & Access */}
      <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-lg border border-gray-200">
        <h2 className="text-xs font-bold text-black dark:text-white mb-2">
          👥 Authorized Users
        </h2>
        <p className="text-xs font-normal text-gray-500">
          Manager, Finance Team
        </p>
      </div>
    </div>
  )
}