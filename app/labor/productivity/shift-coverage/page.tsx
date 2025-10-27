import { RESTAURANTS } from '@/lib/restaurant-data'

export default function ShiftCoverageKPI() {
  // LAB_007 Shift Coverage % - Exact specifications from restaurant_kpi_metrics_127.txt
  const shiftCoverageData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      totalShiftsScheduled: 220, // Total shifts planned for month
      shiftsFilled: 208,
      coverageRate: 94.5, // (208/220) × 100
      morningShiftCoverage: 98.0, // Better morning coverage
      eveningShiftCoverage: 92.5,
      weekendCoverage: 89.0, // Lower weekend coverage
      callouts: 8, // Last-minute absences
      noShows: 4,
      status: 'warning' // 90-95% warning range
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      totalShiftsScheduled: 200,
      shiftsFilled: 195,
      coverageRate: 97.5,
      morningShiftCoverage: 100.0,
      eveningShiftCoverage: 96.0,
      weekendCoverage: 94.0,
      callouts: 3,
      noShows: 2,
      status: 'excellent' // >95% target
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      totalShiftsScheduled: 240,
      shiftsFilled: 210,
      coverageRate: 87.5,
      morningShiftCoverage: 91.0,
      eveningShiftCoverage: 85.0,
      weekendCoverage: 82.0,
      callouts: 18,
      noShows: 12,
      status: 'critical' // <90% critical
    }
  ]

  const chainAverage = shiftCoverageData.reduce((sum, item) => sum + item.coverageRate, 0) / shiftCoverageData.length

  const getStatusColor = (coverageRate: number) => {
    if (coverageRate >= 95) return 'text-green-600'
    if (coverageRate >= 90) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (coverageRate: number) => {
    if (coverageRate >= 95) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (coverageRate >= 90) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getStatusIcon = (coverageRate: number) => {
    if (coverageRate >= 95) return '✅'
    if (coverageRate >= 90) return '⚠️'
    return '🚨'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Shift Coverage % Analysis
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: LAB_007 | Below 90% Requires Scheduling Buffer or Additional Hiring
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
            <strong>Formula:</strong> (Scheduled shifts filled ÷ Total shifts scheduled) × 100
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Percentage of scheduled shifts actually filled (not unfilled due to callouts, no-shows).
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> Target &gt;95%; &lt;90% requires scheduling buffer or additional hiring.
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
            <div className="text-xs font-normal text-green-600">&gt;95% filled</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">90–95%</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&lt;90%</div>
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
            <span className="text-xs font-normal text-gray-500">Chain Average Coverage</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getStatusColor(chainAverage)}`}>
                {chainAverage.toFixed(1)}%
              </span>
              <span>{getStatusIcon(chainAverage)}</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Performance Status</span>
            <div className="text-xs font-normal text-red-600">
              🚨 One location below critical threshold (90%)
            </div>
          </div>
        </div>
      </div>

      {/* Location Ranking & Heatmap */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Ranking by Shift Coverage
        </h2>
        <div className="space-y-3">
          {shiftCoverageData
            .sort((a, b) => b.coverageRate - a.coverageRate)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.coverageRate)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span>{getStatusIcon(location.coverageRate)}</span>
                </div>
                <span className={`text-xs font-bold ${getStatusColor(location.coverageRate)}`}>
                  {location.coverageRate.toFixed(1)}%
                </span>
              </div>
              
              {/* Drill-down breakdown */}
              <div className="grid grid-cols-5 gap-4 text-xs">
                <div>
                  <span className="text-gray-500">Morning Coverage:</span>
                  <div className="font-normal text-black dark:text-white">{location.morningShiftCoverage.toFixed(1)}%</div>
                </div>
                <div>
                  <span className="text-gray-500">Evening Coverage:</span>
                  <div className="font-normal text-black dark:text-white">{location.eveningShiftCoverage.toFixed(1)}%</div>
                </div>
                <div>
                  <span className="text-gray-500">Weekend Coverage:</span>
                  <div className="font-normal text-black dark:text-white">{location.weekendCoverage.toFixed(1)}%</div>
                </div>
                <div>
                  <span className="text-gray-500">Callouts:</span>
                  <div className="font-normal text-black dark:text-white">{location.callouts}</div>
                </div>
                <div>
                  <span className="text-gray-500">No Shows:</span>
                  <div className="font-normal text-black dark:text-white">{location.noShows}</div>
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
              <li>• HRIS/Scheduling system</li>
              <li>• Timeclock (actual clocks in)</li>
              <li>• Staff scheduling app</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Weekly refresh</li>
              <li>• Red alert if &lt;90%</li>
              <li>• Drill down by location, shift type, role</li>
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
            • Monsoon/holidays spike absences; plan staffing buffer
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Festival seasons require advance scheduling adjustments
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Transportation strikes can impact shift coverage
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