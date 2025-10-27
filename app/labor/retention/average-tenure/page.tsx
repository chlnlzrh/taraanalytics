import { RESTAURANTS } from '@/lib/restaurant-data'

export default function AverageTenureKPI() {
  // LAB_005 Average Tenure - Exact specifications from restaurant_kpi_metrics_127.txt
  const tenureData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      totalEmployees: 22,
      averageTenureMonths: 24.5, // Good retention
      tenureRanges: {
        under6Months: 3, // New hires
        sixTo12Months: 4,
        twelveToTwentyFour: 8,
        overTwentyFour: 7 // Experienced staff
      },
      longestTenure: 58, // 4.8 years
      status: 'excellent' // >18 months target
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      totalEmployees: 20,
      averageTenureMonths: 15.2,
      tenureRanges: {
        under6Months: 5,
        sixTo12Months: 6,
        twelveToTwentyFour: 5,
        overTwentyFour: 4
      },
      longestTenure: 42,
      status: 'warning' // 12-18 months warning
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      totalEmployees: 24,
      averageTenureMonths: 19.8,
      tenureRanges: {
        under6Months: 4,
        sixTo12Months: 5,
        twelveToTwentyFour: 9,
        overTwentyFour: 6
      },
      longestTenure: 48,
      status: 'excellent'
    }
  ]

  const chainAverage = tenureData.reduce((sum, item) => sum + item.averageTenureMonths, 0) / tenureData.length

  const getStatusColor = (tenure: number) => {
    if (tenure >= 18) return 'text-green-600'
    if (tenure >= 12) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (tenure: number) => {
    if (tenure >= 18) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (tenure >= 12) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getStatusIcon = (tenure: number) => {
    if (tenure >= 18) return '✅'
    if (tenure >= 12) return '⚠️'
    return '🚨'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Average Tenure Analysis
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: LAB_005 | Longer Tenure = Experienced Staff = Better Service and Lower Training Cost
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
            <strong>Formula:</strong> Average months of service across all employees
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Indicator of workforce stability. Low tenure (&lt;12 months) correlates with high turnover and service issues.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> Longer tenure = experienced staff = better service and lower training cost.
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
            <div className="text-xs font-normal text-green-600">&gt;18 months</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">12–18 months</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&lt;12 months</div>
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
            <span className="text-xs font-normal text-gray-500">Chain Average Tenure</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getStatusColor(chainAverage)}`}>
                {chainAverage.toFixed(1)} months
              </span>
              <span>{getStatusIcon(chainAverage)}</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Performance Status</span>
            <div className="text-xs font-normal text-green-600">
              ✓ All locations above 12 months; two above target
            </div>
          </div>
        </div>
      </div>

      {/* Location Ranking & Heatmap */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Ranking by Average Tenure
        </h2>
        <div className="space-y-3">
          {tenureData
            .sort((a, b) => b.averageTenureMonths - a.averageTenureMonths)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.averageTenureMonths)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span>{getStatusIcon(location.averageTenureMonths)}</span>
                </div>
                <span className={`text-xs font-bold ${getStatusColor(location.averageTenureMonths)}`}>
                  {location.averageTenureMonths.toFixed(1)} months
                </span>
              </div>
              
              {/* Tenure Distribution Breakdown */}
              <div className="grid grid-cols-5 gap-4 text-xs">
                <div>
                  <span className="text-gray-500">&lt;6 months:</span>
                  <div className="font-normal text-black dark:text-white">{location.tenureRanges.under6Months} staff</div>
                </div>
                <div>
                  <span className="text-gray-500">6-12 months:</span>
                  <div className="font-normal text-black dark:text-white">{location.tenureRanges.sixTo12Months} staff</div>
                </div>
                <div>
                  <span className="text-gray-500">1-2 years:</span>
                  <div className="font-normal text-black dark:text-white">{location.tenureRanges.twelveToTwentyFour} staff</div>
                </div>
                <div>
                  <span className="text-gray-500">&gt;2 years:</span>
                  <div className="font-normal text-black dark:text-white">{location.tenureRanges.overTwentyFour} staff</div>
                </div>
                <div>
                  <span className="text-gray-500">Longest Tenure:</span>
                  <div className="font-normal text-black dark:text-white">{location.longestTenure} months</div>
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
              <li>• HRIS (hire dates, current staff)</li>
              <li>• Employee records system</li>
              <li>• Payroll system</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Monthly refresh</li>
              <li>• Red alert if &lt;12 months</li>
              <li>• Drill down by location, role, hire cohort</li>
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
            • Hospitality typically short tenure; focus on retaining 3+ year staff
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Consider career progression opportunities to improve tenure
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Track regional differences in tenure expectations
          </p>
        </div>
      </div>

      {/* Users & Access */}
      <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-lg border border-gray-200">
        <h2 className="text-xs font-bold text-black dark:text-white mb-2">
          👥 Authorized Users
        </h2>
        <p className="text-xs font-normal text-gray-500">
          Manager, HR
        </p>
      </div>
    </div>
  )
}