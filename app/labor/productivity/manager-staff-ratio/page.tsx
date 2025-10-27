import { RESTAURANTS } from '@/lib/restaurant-data'

export default function ManagerStaffRatioKPI() {
  // LAB_009 Manager-to-Staff Ratio - Exact specifications from restaurant_kpi_metrics_127.txt
  const managerStaffRatioData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      managers: 3, // General Manager + 2 Shift Managers
      frontLineStaff: 19, // Kitchen + Service staff
      managerToStaffRatio: '1:6.3', // 3/19
      ratioNumeric: 6.3,
      kitchenManagerRatio: '1:8', // Kitchen manager to kitchen staff
      serviceManagerRatio: '1:5', // Service manager to service staff
      organizationBalance: 'Optimal',
      status: 'excellent' // 1:5 to 1:8 target
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      managers: 2,
      frontLineStaff: 18,
      managerToStaffRatio: '1:9.0',
      ratioNumeric: 9.0,
      kitchenManagerRatio: '1:10',
      serviceManagerRatio: '1:8',
      organizationBalance: 'Stretched Management',
      status: 'warning' // 1:8 to 1:12 warning
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      managers: 4, // Over-managed
      frontLineStaff: 20,
      managerToStaffRatio: '1:5.0',
      ratioNumeric: 5.0,
      kitchenManagerRatio: '1:4',
      serviceManagerRatio: '1:6',
      organizationBalance: 'Top-Heavy Structure',
      status: 'good' // Within acceptable range but at edge
    }
  ]

  const chainAverage = managerStaffRatioData.reduce((sum, item) => sum + item.ratioNumeric, 0) / managerStaffRatioData.length

  const getStatusColor = (ratio: number) => {
    if (ratio >= 5 && ratio <= 8) return 'text-green-600'
    if ((ratio >= 3 && ratio < 5) || (ratio > 8 && ratio <= 12)) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (ratio: number) => {
    if (ratio >= 5 && ratio <= 8) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if ((ratio >= 3 && ratio < 5) || (ratio > 8 && ratio <= 12)) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getStatusIcon = (ratio: number) => {
    if (ratio >= 5 && ratio <= 8) return '✅'
    if ((ratio >= 3 && ratio < 5) || (ratio > 8 && ratio <= 12)) return '⚠️'
    return '🚨'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Manager-to-Staff Ratio Analysis
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: LAB_009 | Too High Dilutes Accountability; Too Low Stretches Management
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
            <strong>Formula:</strong> Managers ÷ Front-line Staff
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Ratio of supervisory to operational staff. Too high dilutes accountability; too low stretches management.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> Typical 1:5–1:8; out-of-range ratios indicate organizational design issues.
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
            <div className="text-xs font-normal text-green-600">1:5 to 1:8</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">1:3-1:5 or 1:8-1:12</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&lt;1:3 or &gt;1:12</div>
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
            <div className="text-xs font-normal text-green-600">
              ✓ All locations within acceptable range; optimization opportunities exist
            </div>
          </div>
        </div>
      </div>

      {/* Location Ranking & Heatmap */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Ranking by Manager-to-Staff Ratio
        </h2>
        <div className="space-y-3">
          {managerStaffRatioData
            .sort((a, b) => b.ratioNumeric - a.ratioNumeric)
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
                  {location.managerToStaffRatio}
                </span>
              </div>
              
              {/* Drill-down breakdown */}
              <div className="grid grid-cols-5 gap-4 text-xs">
                <div>
                  <span className="text-gray-500">Total Managers:</span>
                  <div className="font-normal text-black dark:text-white">{location.managers}</div>
                </div>
                <div>
                  <span className="text-gray-500">Front-line Staff:</span>
                  <div className="font-normal text-black dark:text-white">{location.frontLineStaff}</div>
                </div>
                <div>
                  <span className="text-gray-500">Kitchen Ratio:</span>
                  <div className="font-normal text-black dark:text-white">{location.kitchenManagerRatio}</div>
                </div>
                <div>
                  <span className="text-gray-500">Service Ratio:</span>
                  <div className="font-normal text-black dark:text-white">{location.serviceManagerRatio}</div>
                </div>
                <div>
                  <span className="text-gray-500">Org Balance:</span>
                  <div className="font-normal text-black dark:text-white">{location.organizationBalance}</div>
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
              <li>• HRIS (org structure)</li>
              <li>• Employee classification system</li>
              <li>• Organizational charts</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Monthly (when staffing changes)</li>
              <li>• Red alert if ratio extreme</li>
              <li>• Drill down by location, department</li>
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
            • Family-run restaurants often have tight ratios; standardize for growth
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Consider hierarchical management styles prevalent in Indian workplace culture
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Account for language and regional supervision requirements
          </p>
        </div>
      </div>

      {/* Users & Access */}
      <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-lg border border-gray-200">
        <h2 className="text-xs font-bold text-black dark:text-white mb-2">
          👥 Authorized Users
        </h2>
        <p className="text-xs font-normal text-gray-500">
          Owner, Manager
        </p>
      </div>
    </div>
  )
}