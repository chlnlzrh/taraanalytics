import { RESTAURANTS } from '@/lib/restaurant-data'

export default function CustomerRetentionRateKPI() {
  // CUS_005 Customer Retention Rate (30/60/90-day) - Exact specifications from restaurant_kpi_metrics_127.txt
  const retentionData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      retention30Day: 32,
      retention60Day: 45,
      retention90Day: 55,
      baseCustomers: 500,
      status: 'good', // Within target range
      cohortAnalysis: {
        jan2024: { retention30: 30, retention60: 42, retention90: 52 },
        feb2024: { retention30: 33, retention60: 46, retention90: 56 },
        mar2024: { retention30: 35, retention60: 48, retention90: 58 }
      }
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      retention30Day: 28,
      retention60Day: 42,
      retention90Day: 52,
      baseCustomers: 450,
      status: 'good',
      cohortAnalysis: {
        jan2024: { retention30: 26, retention60: 40, retention90: 49 },
        feb2024: { retention30: 29, retention60: 43, retention90: 53 },
        mar2024: { retention30: 30, retention60: 44, retention90: 54 }
      }
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      retention30Day: 18,
      retention60Day: 28,
      retention90Day: 38,
      baseCustomers: 400,
      status: 'critical', // Below critical threshold
      cohortAnalysis: {
        jan2024: { retention30: 20, retention60: 30, retention90: 40 },
        feb2024: { retention30: 17, retention60: 27, retention90: 37 },
        mar2024: { retention30: 17, retention60: 27, retention90: 37 }
      }
    }
  ]

  const chainAverage30 = retentionData.reduce((sum, item) => sum + item.retention30Day, 0) / retentionData.length
  const chainAverage60 = retentionData.reduce((sum, item) => sum + item.retention60Day, 0) / retentionData.length
  const chainAverage90 = retentionData.reduce((sum, item) => sum + item.retention90Day, 0) / retentionData.length

  const getStatusColor = (retention30: number) => {
    if (retention30 >= 25) return 'text-green-600'
    if (retention30 >= 20) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (retention30: number) => {
    if (retention30 >= 25) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (retention30 >= 20) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getStatusIcon = (retention30: number) => {
    if (retention30 >= 25) return '🔄'
    if (retention30 >= 20) return '⚠️'
    return '🚨'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Customer Retention Rate (30/60/90-day)
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: CUS_005 | Percentage of Customers Who Return Within Time Period
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
            <strong>Formula:</strong> (Customers who returned within X days ÷ Unique customers at start of period) × 100
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Percentage of customers who return within 30, 60, or 90 days. Indicator of satisfaction and loyalty.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> Typical retention 30–40% for casual dining in India; improving by 5–10% dramatically improves unit economics.
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
            <div className="text-xs font-normal text-green-600">30d: 25–35% | 60d: 40–50% | 90d: 50–60%</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">30-day: 20–25%</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">30-day: &lt;20%</div>
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
            <span className="text-xs font-normal text-gray-500">Average 30-day Retention</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getStatusColor(chainAverage30)}`}>
                {chainAverage30.toFixed(1)}%
              </span>
              <span>📅</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Average 60-day Retention</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-black dark:text-white">
                {chainAverage60.toFixed(1)}%
              </span>
              <span>📊</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Average 90-day Retention</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-black dark:text-white">
                {chainAverage90.toFixed(1)}%
              </span>
              <span>🎯</span>
            </div>
          </div>
        </div>
      </div>

      {/* Location Performance */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Performance (Retention Analysis)
        </h2>
        <div className="space-y-3">
          {retentionData
            .sort((a, b) => b.retention30Day - a.retention30Day)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.retention30Day)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span>{getStatusIcon(location.retention30Day)}</span>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-black dark:text-white">
                    {location.baseCustomers} base customers
                  </div>
                  <div className={`text-xs font-normal ${getStatusColor(location.retention30Day)}`}>
                    30d: {location.retention30Day}%
                  </div>
                </div>
              </div>
              
              {/* Retention metrics */}
              <div className="grid grid-cols-3 gap-4 mb-3">
                <div className="text-center">
                  <div className="text-xs font-normal text-gray-500">30-day</div>
                  <div className={`text-xs font-bold ${getStatusColor(location.retention30Day)}`}>
                    {location.retention30Day}%
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs font-normal text-gray-500">60-day</div>
                  <div className="text-xs font-bold text-black dark:text-white">
                    {location.retention60Day}%
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs font-normal text-gray-500">90-day</div>
                  <div className="text-xs font-bold text-black dark:text-white">
                    {location.retention90Day}%
                  </div>
                </div>
              </div>

              {/* Cohort trends */}
              <div className="mt-3">
                <h4 className="text-xs font-bold text-gray-600 mb-2">Recent Cohort Trends</h4>
                <div className="grid grid-cols-3 gap-3">
                  {Object.entries(location.cohortAnalysis).map(([period, data]) => (
                    <div key={period} className="text-center">
                      <div className="text-xs font-normal text-gray-500 mb-1">{period}</div>
                      <div className="text-xs">
                        <span className="text-green-600">{data.retention30}%</span>
                        <span className="text-gray-400"> / </span>
                        <span className="text-blue-600">{data.retention60}%</span>
                        <span className="text-gray-400"> / </span>
                        <span className="text-purple-600">{data.retention90}%</span>
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
              <li>• CRM (transaction history)</li>
              <li>• Loyalty program tracking</li>
              <li>• PetPooja POS (phone/email tracking)</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Monthly refresh</li>
              <li>• Cohort analysis tracking</li>
              <li>• Alert if 30-day &lt;20%</li>
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
            • By location comparison
          </p>
          <p className="text-xs font-normal text-purple-800 dark:text-purple-300">
            • By customer cohort analysis
          </p>
          <p className="text-xs font-normal text-purple-800 dark:text-purple-300">
            • By time bucket (1st month, 2nd month, etc.)
          </p>
        </div>
      </div>

      {/* Users & Access */}
      <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-lg border border-gray-200">
        <h2 className="text-xs font-bold text-black dark:text-white mb-2">
          👥 Authorized Users
        </h2>
        <p className="text-xs font-normal text-gray-500">
          Manager, Marketing, Owner
        </p>
      </div>
    </div>
  )
}