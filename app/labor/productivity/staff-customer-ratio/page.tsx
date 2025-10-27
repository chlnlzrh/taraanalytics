import { RESTAURANTS } from '@/lib/restaurant-data'

export default function StaffCustomerRatioKPI() {
  // LAB_008 Staff-to-Customer Ratio (Peak Hours) - Exact specifications from restaurant_kpi_metrics_127.txt
  const staffCustomerRatioData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      serviceStaff: 8, // Service staff during peak
      peakHourCovers: 45, // Customers during peak hour
      staffToCustomerRatio: '1:5.6', // 8/45
      ratioNumeric: 5.6,
      lunchRatio: '1:5.2', // Better lunch coverage
      dinnerRatio: '1:6.1', // Slightly leaner dinner
      waitTime: 8, // Average wait time in minutes
      status: 'good' // 1:4 to 1:6 target
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      serviceStaff: 6,
      peakHourCovers: 38,
      staffToCustomerRatio: '1:6.3',
      ratioNumeric: 6.3,
      lunchRatio: '1:5.8',
      dinnerRatio: '1:6.9',
      waitTime: 12,
      status: 'warning' // 1:6 to 1:8 warning
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      serviceStaff: 5,
      peakHourCovers: 42,
      staffToCustomerRatio: '1:8.4',
      ratioNumeric: 8.4,
      lunchRatio: '1:7.8',
      dinnerRatio: '1:9.2',
      waitTime: 18,
      status: 'critical' // >1:8 critical
    }
  ]

  const chainAverage = staffCustomerRatioData.reduce((sum, item) => sum + item.ratioNumeric, 0) / staffCustomerRatioData.length

  const getStatusColor = (ratio: number) => {
    if (ratio <= 6) return 'text-green-600'
    if (ratio <= 8) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (ratio: number) => {
    if (ratio <= 6) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (ratio <= 8) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getStatusIcon = (ratio: number) => {
    if (ratio <= 6) return '✅'
    if (ratio <= 8) return '⚠️'
    return '🚨'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Staff-to-Customer Ratio (Peak Hours) Analysis
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: LAB_008 | Too Lean = Poor Service; Too Heavy = Labor Cost Waste
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
            <strong>Formula:</strong> Number of service staff ÷ Covers during peak hour
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Indicator of service quality and wait time. Typical ratios: 1:4–1:6 for casual dining.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> Too lean = poor service; too heavy = labor cost waste.
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
            <div className="text-xs font-normal text-green-600">1:4 to 1:6</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">1:6 to 1:8</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&gt;1:8</div>
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
            <span className="text-xs font-normal text-gray-500">Chain Average Ratio</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getStatusColor(chainAverage)}`}>
                1:{chainAverage.toFixed(1)}
              </span>
              <span>{getStatusIcon(chainAverage)}</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Performance Status</span>
            <div className="text-xs font-normal text-red-600">
              🚨 One location understaffed, service will suffer
            </div>
          </div>
        </div>
      </div>

      {/* Location Ranking & Heatmap */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Ranking by Staff-to-Customer Ratio
        </h2>
        <div className="space-y-3">
          {staffCustomerRatioData
            .sort((a, b) => a.ratioNumeric - b.ratioNumeric)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.ratioNumeric)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span>{getStatusIcon(location.ratioNumeric)}</span>
                </div>
                <span className={`text-xs font-bold ${getStatusColor(location.ratioNumeric)}`}>
                  {location.staffToCustomerRatio}
                </span>
              </div>
              
              {/* Drill-down breakdown */}
              <div className="grid grid-cols-5 gap-4 text-xs">
                <div>
                  <span className="text-gray-500">Service Staff:</span>
                  <div className="font-normal text-black dark:text-white">{location.serviceStaff}</div>
                </div>
                <div>
                  <span className="text-gray-500">Peak Covers:</span>
                  <div className="font-normal text-black dark:text-white">{location.peakHourCovers}</div>
                </div>
                <div>
                  <span className="text-gray-500">Lunch Ratio:</span>
                  <div className="font-normal text-black dark:text-white">{location.lunchRatio}</div>
                </div>
                <div>
                  <span className="text-gray-500">Dinner Ratio:</span>
                  <div className="font-normal text-black dark:text-white">{location.dinnerRatio}</div>
                </div>
                <div>
                  <span className="text-gray-500">Avg Wait Time:</span>
                  <div className="font-normal text-black dark:text-white">{location.waitTime} min</div>
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
              <li>• PetPooja POS (peak hour covers)</li>
              <li>• HRIS (staff schedule during peak)</li>
              <li>• Table management system</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Daily (peak hours)</li>
              <li>• Red alert if &gt;1:8</li>
              <li>• Drill down by location, daypart, service area</li>
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
            • Indian service expectations high; lean ratios may backfire
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Consider family dining patterns requiring more attention per table
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Account for language barriers requiring additional service time
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