import { RESTAURANTS } from '@/lib/restaurant-data'

export default function CoversPerLaborHourKPI() {
  // LAB_003 Covers per Labor Hour - Exact specifications from restaurant_kpi_metrics_127.txt
  const coversPerLaborHourData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      totalCovers: 4850, // Number of customers served
      totalLaborHours: 544,
      coversPerHour: 8.9,
      lunchCoversPerHour: 12.5, // Lunch higher
      dinnerCoversPerHour: 8.2, // Dinner lower
      status: 'good' // 8-15 covers/hour target
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      totalCovers: 3950,
      totalLaborHours: 432,
      coversPerHour: 9.1,
      lunchCoversPerHour: 13.2,
      dinnerCoversPerHour: 8.5,
      status: 'good'
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      totalCovers: 3650,
      totalLaborHours: 616,
      coversPerHour: 5.9,
      lunchCoversPerHour: 8.4,
      dinnerCoversPerHour: 5.2,
      status: 'warning' // 5-8 covers/hour warning
    }
  ]

  const chainAverage = coversPerLaborHourData.reduce((sum, item) => sum + item.coversPerHour, 0) / coversPerLaborHourData.length

  const getStatusColor = (coversPerHour: number) => {
    if (coversPerHour >= 8) return 'text-green-600'
    if (coversPerHour >= 5) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (coversPerHour: number) => {
    if (coversPerHour >= 8) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (coversPerHour >= 5) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getStatusIcon = (coversPerHour: number) => {
    if (coversPerHour >= 8) return '✅'
    if (coversPerHour >= 5) return '⚠️'
    return '🚨'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Covers per Labor Hour Analysis
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: LAB_003 | Separates Demand Issues from Productivity Issues
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
            <strong>Formula:</strong> Number of Customers Served ÷ Total Labor Hours Worked
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Volume of customers served per labor hour. Separates demand from productivity.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> Helps diagnose: low covers/hr = demand issue; low ACS = pricing/upsell issue.
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
            <div className="text-xs font-normal text-green-600">8–15 covers/hour</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">5–8 covers/hour</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&lt;5 covers/hour</div>
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
            <span className="text-xs font-normal text-gray-500">Chain Average Covers/Hour</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getStatusColor(chainAverage)}`}>
                {chainAverage.toFixed(1)} covers
              </span>
              <span>{getStatusIcon(chainAverage)}</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Performance Status</span>
            <div className="text-xs font-normal text-yellow-600">
              ⚠️ One location in warning range (5-8 covers/hour)
            </div>
          </div>
        </div>
      </div>

      {/* Location Ranking & Heatmap */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Ranking by Covers per Labor Hour
        </h2>
        <div className="space-y-3">
          {coversPerLaborHourData
            .sort((a, b) => b.coversPerHour - a.coversPerHour)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.coversPerHour)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span>{getStatusIcon(location.coversPerHour)}</span>
                </div>
                <span className={`text-xs font-bold ${getStatusColor(location.coversPerHour)}`}>
                  {location.coversPerHour.toFixed(1)}
                </span>
              </div>
              
              {/* Drill-down breakdown */}
              <div className="grid grid-cols-4 gap-4 text-xs">
                <div>
                  <span className="text-gray-500">Total Covers:</span>
                  <div className="font-normal text-black dark:text-white">{location.totalCovers.toLocaleString('en-IN')}</div>
                </div>
                <div>
                  <span className="text-gray-500">Labor Hours:</span>
                  <div className="font-normal text-black dark:text-white">{location.totalLaborHours}h</div>
                </div>
                <div>
                  <span className="text-gray-500">Lunch Covers/Hr:</span>
                  <div className="font-normal text-black dark:text-white">{location.lunchCoversPerHour}</div>
                </div>
                <div>
                  <span className="text-gray-500">Dinner Covers/Hr:</span>
                  <div className="font-normal text-black dark:text-white">{location.dinnerCoversPerHour}</div>
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
              <li>• PetPooja POS (cover count)</li>
              <li>• HRIS (labor hours)</li>
              <li>• Table management system</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Daily refresh</li>
              <li>• Red alert if &lt;5 covers/hour</li>
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
            • Lunch higher (12–15/hour); dinner lower (8–10/hour)
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Account for group dining patterns and family meal times
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Festival seasons may show different patterns
          </p>
        </div>
      </div>

      {/* Users & Access */}
      <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-lg border border-gray-200">
        <h2 className="text-xs font-bold text-black dark:text-white mb-2">
          👥 Authorized Users
        </h2>
        <p className="text-xs font-normal text-gray-500">
          Manager
        </p>
      </div>
    </div>
  )
}