import { RESTAURANTS } from '@/lib/restaurant-data'

export default function AbsenteeismRateKPI() {
  // LAB_006 Absenteeism Rate % - Exact specifications from restaurant_kpi_metrics_127.txt
  const absenteeismData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      totalScheduledDays: 660, // Total scheduled shifts for month
      absentDays: 18,
      absenteeismRate: 2.7, // (18/660) × 100
      sickLeave: 8, // Planned sick leave
      personalLeave: 4,
      noShows: 6, // Unplanned absences
      monsoonImpact: 1.2, // Additional 1.2% during monsoon
      status: 'warning' // 2-5% warning range
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      totalScheduledDays: 600,
      absentDays: 9,
      absenteeismRate: 1.5,
      sickLeave: 5,
      personalLeave: 3,
      noShows: 1,
      monsoonImpact: 0.8,
      status: 'excellent' // <2% target
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      totalScheduledDays: 720,
      absentDays: 43,
      absenteeismRate: 6.0,
      sickLeave: 15,
      personalLeave: 12,
      noShows: 16,
      monsoonImpact: 2.1,
      status: 'critical' // >5% critical
    }
  ]

  const chainAverage = absenteeismData.reduce((sum, item) => sum + item.absenteeismRate, 0) / absenteeismData.length

  const getStatusColor = (absenteeismRate: number) => {
    if (absenteeismRate < 2) return 'text-green-600'
    if (absenteeismRate <= 5) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (absenteeismRate: number) => {
    if (absenteeismRate < 2) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (absenteeismRate <= 5) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getStatusIcon = (absenteeismRate: number) => {
    if (absenteeismRate < 2) return '✅'
    if (absenteeismRate <= 5) return '⚠️'
    return '🚨'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Absenteeism Rate % Analysis
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: LAB_006 | Disrupts Service, Increases Team Stress, Signals Deeper Problems
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
            <strong>Formula:</strong> (Absent Days ÷ Scheduled Days) × 100
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Percentage of scheduled shifts missed. High absenteeism (&gt;5%) indicates morale, management, or external issues.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> Disrupts service, increases stress on team, signals deeper problems.
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
            <div className="text-xs font-normal text-green-600">&lt;2%</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">2–5%</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&gt;5%</div>
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
            <span className="text-xs font-normal text-gray-500">Chain Average Absenteeism</span>
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
              🚨 One location exceeding critical threshold (5%)
            </div>
          </div>
        </div>
      </div>

      {/* Location Ranking & Heatmap */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Ranking by Absenteeism Rate
        </h2>
        <div className="space-y-3">
          {absenteeismData
            .sort((a, b) => a.absenteeismRate - b.absenteeismRate)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.absenteeismRate)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span>{getStatusIcon(location.absenteeismRate)}</span>
                </div>
                <span className={`text-xs font-bold ${getStatusColor(location.absenteeismRate)}`}>
                  {location.absenteeismRate.toFixed(1)}%
                </span>
              </div>
              
              {/* Drill-down breakdown */}
              <div className="grid grid-cols-5 gap-4 text-xs">
                <div>
                  <span className="text-gray-500">Sick Leave:</span>
                  <div className="font-normal text-black dark:text-white">{location.sickLeave} days</div>
                </div>
                <div>
                  <span className="text-gray-500">Personal Leave:</span>
                  <div className="font-normal text-black dark:text-white">{location.personalLeave} days</div>
                </div>
                <div>
                  <span className="text-gray-500">No Shows:</span>
                  <div className="font-normal text-black dark:text-white">{location.noShows} days</div>
                </div>
                <div>
                  <span className="text-gray-500">Total Absent:</span>
                  <div className="font-normal text-black dark:text-white">{location.absentDays} days</div>
                </div>
                <div>
                  <span className="text-gray-500">Monsoon Impact:</span>
                  <div className="font-normal text-black dark:text-white">+{location.monsoonImpact}%</div>
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
              <li>• HRIS/Attendance system</li>
              <li>• Timeclock records</li>
              <li>• Leave management system</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Weekly refresh</li>
              <li>• Red alert if &gt;5%</li>
              <li>• Drill down by employee, location, reason</li>
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
            • Monsoon weather impacts; wage delays increase absenteeism
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Plan for festival season absences (Diwali, Eid, regional festivals)
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Track transportation disruptions during extreme weather
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