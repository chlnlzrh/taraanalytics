import { RESTAURANTS } from '@/lib/restaurant-data'

export default function TableTurnoverRateKPI() {
  // OPR_001 Table Turnover Rate - Exact specifications from restaurant_kpi_metrics_127.txt
  const turnoverData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      totalTables: 24,
      partiesSeated: 52,
      turnoverRate: 2.17, // 52/24 = 2.17x per service period
      status: 'good', // Within target 1.8-2.5x
      variance: 8.5, // +8.5% vs 30-day average
      daypartBreakdown: {
        breakfast: { parties: 8, tables: 24, rate: 0.33 },
        lunch: { parties: 22, tables: 24, rate: 0.92 },
        dinner: { parties: 22, tables: 24, rate: 0.92 }
      },
      sectionBreakdown: {
        mainDining: { parties: 35, tables: 16, rate: 2.19 },
        privateRoom: { parties: 12, tables: 6, rate: 2.0 },
        terrace: { parties: 5, tables: 2, rate: 2.5 }
      }
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      totalTables: 18,
      partiesSeated: 43,
      turnoverRate: 2.39, // 43/18 = 2.39x
      status: 'good',
      variance: 12.2,
      daypartBreakdown: {
        breakfast: { parties: 6, tables: 18, rate: 0.33 },
        lunch: { parties: 20, tables: 18, rate: 1.11 },
        dinner: { parties: 17, tables: 18, rate: 0.94 }
      },
      sectionBreakdown: {
        mainDining: { parties: 30, tables: 12, rate: 2.5 },
        counter: { parties: 8, tables: 4, rate: 2.0 },
        outdoor: { parties: 5, tables: 2, rate: 2.5 }
      }
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      totalTables: 16,
      partiesSeated: 22,
      turnoverRate: 1.38, // 22/16 = 1.38x - Critical threshold
      status: 'critical', // Below 1.5x threshold
      variance: -18.5, // -18.5% decline
      daypartBreakdown: {
        breakfast: { parties: 4, tables: 16, rate: 0.25 },
        lunch: { parties: 10, tables: 16, rate: 0.63 },
        dinner: { parties: 8, tables: 16, rate: 0.5 }
      },
      sectionBreakdown: {
        mainDining: { parties: 15, tables: 10, rate: 1.5 },
        alcove: { parties: 4, tables: 4, rate: 1.0 },
        patio: { parties: 3, tables: 2, rate: 1.5 }
      }
    }
  ]

  const chainAverage = turnoverData.reduce((sum, item) => sum + item.turnoverRate, 0) / turnoverData.length
  const chainVariance = turnoverData.reduce((sum, item) => sum + item.variance, 0) / turnoverData.length

  const getStatusColor = (rate: number) => {
    if (rate >= 1.8) return 'text-green-600'
    if (rate >= 1.5) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (rate: number) => {
    if (rate >= 1.8) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (rate >= 1.5) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getStatusIcon = (rate: number) => {
    if (rate >= 2.0) return '🎯'
    if (rate >= 1.8) return '✅'
    if (rate >= 1.5) return '⚠️'
    return '🚨'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Table Turnover Rate
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: OPR_001 | Service Speed & Kitchen Efficiency Indicator
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
            <strong>Formula:</strong> Number of parties seated ÷ Total tables
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Average times a table is occupied per service period (or across day). Indicator of service speed and kitchen efficiency.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> Low rate (e.g., 1.2 vs. 2.0 for industry average) signals slow kitchen, inattentive service, or customer lingering.
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
            <div className="text-xs font-normal text-green-600">1.8–2.5x per period</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">1.5–1.8x</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&lt;1.5x</div>
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
            <span className="text-xs font-normal text-gray-500">Chain Average Turnover Rate</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getStatusColor(chainAverage)}`}>
                {chainAverage.toFixed(2)}x
              </span>
              <span>{getStatusIcon(chainAverage)}</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Average Trend vs 30-day</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${chainVariance > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {chainVariance > 0 ? '+' : ''}{chainVariance.toFixed(1)}%
              </span>
              <span>{chainVariance > 0 ? '📈' : '📉'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Location Performance */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Performance (Ranked by Turnover Rate)
        </h2>
        <div className="space-y-3">
          {turnoverData
            .sort((a, b) => b.turnoverRate - a.turnoverRate)
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
                <div className="text-right">
                  <div className="text-xs font-bold text-black dark:text-white">
                    {location.turnoverRate.toFixed(2)}x
                  </div>
                  <div className={`text-xs font-normal ${location.variance > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {location.variance > 0 ? '+' : ''}{location.variance.toFixed(1)}% vs avg
                  </div>
                </div>
              </div>
              
              {/* Drill-down breakdown */}
              <div className="grid grid-cols-2 gap-4 mt-3">
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-1">Daypart Breakdown</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Breakfast:</span>
                      <span className="font-normal text-black dark:text-white">{location.daypartBreakdown.breakfast.rate.toFixed(2)}x</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Lunch:</span>
                      <span className="font-normal text-black dark:text-white">{location.daypartBreakdown.lunch.rate.toFixed(2)}x</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Dinner:</span>
                      <span className="font-normal text-black dark:text-white">{location.daypartBreakdown.dinner.rate.toFixed(2)}x</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-1">Section Breakdown</h4>
                  <div className="space-y-1">
                    {Object.entries(location.sectionBreakdown).map(([section, data]) => (
                      <div key={section} className="flex justify-between text-xs">
                        <span className="text-gray-500 capitalize">{section.replace(/([A-Z])/g, ' $1').trim()}:</span>
                        <span className="font-normal text-black dark:text-white">{data.rate.toFixed(2)}x</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Additional metrics */}
              <div className="mt-3 pt-2 border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">Total Tables:</span>
                  <span className="font-normal text-black dark:text-white">{location.totalTables}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">Parties Seated Today:</span>
                  <span className="font-normal text-black dark:text-white">{location.partiesSeated}</span>
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
              <li>• PetPooja POS /orders (table assignments, duration)</li>
              <li>• Reservation system</li>
              <li>• Table configuration data</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Daily (by daypart)</li>
              <li>• Alert: Red if &lt;1.5x</li>
              <li>• Drill down: meal period, table section, day of week</li>
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
            • Lunch typically faster (1.8–2.2x); dinner slower (1.5–2.0x)
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Festive seasons may drop due to celebration lingering
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Weekend patterns differ significantly from weekdays
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