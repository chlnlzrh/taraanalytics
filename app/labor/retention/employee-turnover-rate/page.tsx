import { RESTAURANTS } from '@/lib/restaurant-data'

export default function EmployeeTurnoverRateKPI() {
  // LAB_004 Employee Turnover Rate % - Exact specifications from restaurant_kpi_metrics_127.txt
  const turnoverData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      employeesLeft: 8, // In last 12 months
      averageHeadcount: 22,
      turnoverRate: 36.4, // (8/22) × 100
      kitchenTurnover: 25.0, // Lower kitchen turnover
      serviceTurnover: 45.0, // Higher service staff turnover
      managementTurnover: 0, // Stable management
      status: 'excellent' // <40% target
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      employeesLeft: 10,
      averageHeadcount: 20,
      turnoverRate: 50.0,
      kitchenTurnover: 40.0,
      serviceTurnover: 60.0,
      managementTurnover: 0,
      status: 'critical' // >50% critical
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      employeesLeft: 9,
      averageHeadcount: 24,
      turnoverRate: 37.5,
      kitchenTurnover: 30.0,
      serviceTurnover: 42.0,
      managementTurnover: 16.7, // 1 manager left
      status: 'excellent'
    }
  ]

  const chainAverage = turnoverData.reduce((sum, item) => sum + item.turnoverRate, 0) / turnoverData.length

  const getStatusColor = (turnoverRate: number) => {
    if (turnoverRate < 40) return 'text-green-600'
    if (turnoverRate <= 50) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (turnoverRate: number) => {
    if (turnoverRate < 40) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (turnoverRate <= 50) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getStatusIcon = (turnoverRate: number) => {
    if (turnoverRate < 40) return '✅'
    if (turnoverRate <= 50) return '⚠️'
    return '🚨'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Employee Turnover Rate % Analysis
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: LAB_004 | High Turnover Extremely Costly - Hiring, Training, Service Degradation
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
            <strong>Formula:</strong> (Employees Who Left ÷ Average Headcount) × 100 per year
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Annual percentage of staff leaving. Industry benchmark 30–50% in Indian hospitality.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> High turnover (&gt;50%) extremely costly: hiring, training, service degradation. Turnover by role reveals problem areas.
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
            <div className="text-xs font-normal text-green-600">&lt;40% annual</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">40–50%</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&gt;50%</div>
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
            <span className="text-xs font-normal text-gray-500">Chain Average Turnover</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getStatusColor(chainAverage)}`}>
                {chainAverage.toFixed(1)}%
              </span>
              <span>{getStatusIcon(chainAverage)}</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Performance Status</span>
            <div className="text-xs font-normal text-yellow-600">
              ⚠️ One location exceeding critical threshold (50%)
            </div>
          </div>
        </div>
      </div>

      {/* Location Ranking & Heatmap */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Ranking by Turnover Rate
        </h2>
        <div className="space-y-3">
          {turnoverData
            .sort((a, b) => a.turnoverRate - b.turnoverRate)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.turnoverRate)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span>{getStatusIcon(location.turnoverRate)}</span>
                </div>
                <span className={`text-xs font-bold ${getStatusColor(location.turnoverRate)}`}>
                  {location.turnoverRate.toFixed(1)}%
                </span>
              </div>
              
              {/* Drill-down breakdown */}
              <div className="grid grid-cols-4 gap-4 text-xs">
                <div>
                  <span className="text-gray-500">Employees Left:</span>
                  <div className="font-normal text-black dark:text-white">{location.employeesLeft}</div>
                </div>
                <div>
                  <span className="text-gray-500">Kitchen Turnover:</span>
                  <div className="font-normal text-black dark:text-white">{location.kitchenTurnover.toFixed(1)}%</div>
                </div>
                <div>
                  <span className="text-gray-500">Service Turnover:</span>
                  <div className="font-normal text-black dark:text-white">{location.serviceTurnover.toFixed(1)}%</div>
                </div>
                <div>
                  <span className="text-gray-500">Management Turnover:</span>
                  <div className="font-normal text-black dark:text-white">{location.managementTurnover.toFixed(1)}%</div>
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
              <li>• HRIS (employee departures, headcount)</li>
              <li>• Exit interview records</li>
              <li>• HR analytics system</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Monthly (rolling 12-month)</li>
              <li>• Red alert if &gt;50%</li>
              <li>• Drill down by location, role, reason</li>
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
            • Hospitality high-turnover industry in India; retention bonus or career path needed to lower
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Track seasonal migration patterns affecting staff retention
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Monitor festival season impacts on turnover rates
          </p>
        </div>
      </div>

      {/* Users & Access */}
      <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-lg border border-gray-200">
        <h2 className="text-xs font-bold text-black dark:text-white mb-2">
          👥 Authorized Users
        </h2>
        <p className="text-xs font-normal text-gray-500">
          Manager, HR, Owner
        </p>
      </div>
    </div>
  )
}