import { RESTAURANTS } from '@/lib/restaurant-data'

export default function TableTurnoverVarianceKPI() {
  // CMP_013 Table Turnover Variance - Exact specifications from restaurant_kpi_metrics_127.txt
  const turnoverData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      turnoverRate: 1.8, // turns per meal period
      chainAverage: 2.0,
      variance: -10.0, // -10% below chain average
      status: 'warning', // Below target 1.8-2.5x
      daypartBreakdown: {
        lunch: 2.0,
        dinner: 1.6,
        average: 1.8
      },
      factors: {
        avgServiceTime: 45, // minutes
        customerLingering: 'High',
        seatingEfficiency: 75 // %
      }
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      turnoverRate: 2.2,
      chainAverage: 2.0,
      variance: 10.0, // +10% above chain average
      status: 'good',
      daypartBreakdown: {
        lunch: 2.4,
        dinner: 2.0,
        average: 2.2
      },
      factors: {
        avgServiceTime: 38,
        customerLingering: 'Medium',
        seatingEfficiency: 85
      }
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      turnoverRate: 2.0,
      chainAverage: 2.0,
      variance: 0.0, // On target
      status: 'good',
      daypartBreakdown: {
        lunch: 2.1,
        dinner: 1.9,
        average: 2.0
      },
      factors: {
        avgServiceTime: 40,
        customerLingering: 'Medium',
        seatingEfficiency: 80
      }
    }
  ]

  const chainVariance = Math.max(...turnoverData.map(d => Math.abs(d.variance)))

  const getStatusColor = (variance: number) => {
    if (Math.abs(variance) <= 5) return 'text-green-600'
    if (Math.abs(variance) <= 15) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (variance: number) => {
    if (Math.abs(variance) <= 5) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (Math.abs(variance) <= 15) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getStatusIcon = (variance: number) => {
    if (Math.abs(variance) <= 5) return '✅'
    if (Math.abs(variance) <= 15) return '⚠️'
    return '🚨'
  }

  const getStatusLabel = (variance: number) => {
    if (Math.abs(variance) <= 5) return 'Consistent'
    if (Math.abs(variance) <= 15) return 'Variable'
    return 'High Variance'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Table Turnover Variance
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: CMP_013 | Operational Consistency Analysis
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
            <strong>Formula:</strong> Compare table turnover rates across all locations; identify variance patterns
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Variance in table turnover efficiency between locations reveals operational consistency gaps.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> High variance (&gt;15%) indicates inconsistent service processes requiring standardization.
          </p>
        </div>
      </div>

      {/* Alert Thresholds */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🎯 Variance Thresholds
        </h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded border border-green-200">
            <div className="text-xs font-bold text-green-700 dark:text-green-300">CONSISTENT</div>
            <div className="text-xs font-normal text-green-600">≤5% variance</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">VARIABLE</div>
            <div className="text-xs font-normal text-yellow-600">5-15% variance</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">HIGH VARIANCE</div>
            <div className="text-xs font-normal text-red-600">&gt;15% variance</div>
          </div>
        </div>
      </div>

      {/* Chain Summary */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          📈 Chain Variance Analysis
        </h2>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <span className="text-xs font-normal text-gray-500">Maximum Variance</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getStatusColor(chainVariance)}`}>
                {chainVariance.toFixed(1)}%
              </span>
              <span>{getStatusIcon(chainVariance)}</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Consistency Status</span>
            <div className={`text-xs font-normal ${getStatusColor(chainVariance)}`}>
              {getStatusLabel(chainVariance)}
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Locations in Range</span>
            <div className="text-xs font-normal text-black dark:text-white">
              {turnoverData.filter(loc => Math.abs(loc.variance) <= 5).length} of {turnoverData.length}
            </div>
          </div>
        </div>
      </div>

      {/* Location Performance Analysis */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Turnover Variance Analysis
        </h2>
        <div className="space-y-3">
          {turnoverData
            .sort((a, b) => Math.abs(b.variance) - Math.abs(a.variance))
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.variance)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span>{getStatusIcon(location.variance)}</span>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-black dark:text-white">
                    {location.turnoverRate.toFixed(1)}x/period
                  </div>
                  <div className={`text-xs font-normal ${getStatusColor(location.variance)}`}>
                    {location.variance > 0 ? '+' : ''}{location.variance.toFixed(1)}% vs chain avg
                  </div>
                </div>
              </div>
              
              {/* Performance Breakdown */}
              <div className="grid grid-cols-2 gap-4 mt-3">
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-1">Daypart Performance</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Lunch:</span>
                      <span className="font-normal text-black dark:text-white">{location.daypartBreakdown.lunch.toFixed(1)}x</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Dinner:</span>
                      <span className="font-normal text-black dark:text-white">{location.daypartBreakdown.dinner.toFixed(1)}x</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-1">Contributing Factors</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Service Time:</span>
                      <span className="font-normal text-black dark:text-white">{location.factors.avgServiceTime} min</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Lingering:</span>
                      <span className="font-normal text-black dark:text-white">{location.factors.customerLingering}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Efficiency:</span>
                      <span className="font-normal text-black dark:text-white">{location.factors.seatingEfficiency}%</span>
                    </div>
                  </div>
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
              <li>• PetPooja POS (table occupancy times)</li>
              <li>• Reservation system (seating/checkout times)</li>
              <li>• Service timing logs</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Daily calculation</li>
              <li>• Weekly variance analysis</li>
              <li>• Red alert if &gt;15% variance</li>
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
            • Account for cultural dining patterns (longer family meals)
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Weekend vs weekday variance (family dining vs office crowds)
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Location-specific factors (mall vs street-side timing differences)
          </p>
        </div>
      </div>

      {/* Users & Access */}
      <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-lg border border-gray-200">
        <h2 className="text-xs font-bold text-black dark:text-white mb-2">
          👥 Authorized Users
        </h2>
        <p className="text-xs font-normal text-gray-500">
          Manager, Owner, Operations Team
        </p>
      </div>
    </div>
  )
}