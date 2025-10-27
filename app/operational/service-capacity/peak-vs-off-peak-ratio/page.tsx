import { RESTAURANTS } from '@/lib/restaurant-data'

export default function PeakVsOffPeakRatioKPI() {
  // OPR_005 Peak vs Off-Peak Ratio - Traffic distribution analysis
  const peakRatioData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      peakHours: {
        start: '12:00',
        end: '14:00',
        totalRevenue: 145500,
        customerCount: 85,
        avgCheck: 1712
      },
      offPeakHours: {
        totalRevenue: 339500,
        customerCount: 165,
        avgCheck: 2058
      },
      peakRatio: 1.43, // Peak revenue per hour vs off-peak revenue per hour
      status: 'optimal', // 1.2-1.8 is optimal
      variance: 8.5 // vs target
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      peakHours: {
        start: '12:30',
        end: '14:30',
        totalRevenue: 118500,
        customerCount: 70,
        avgCheck: 1693
      },
      offPeakHours: {
        totalRevenue: 276500,
        customerCount: 140,
        avgCheck: 1975
      },
      peakRatio: 1.52,
      status: 'optimal',
      variance: 12.3
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      peakHours: {
        start: '13:00',
        end: '15:00',
        totalRevenue: 109500,
        customerCount: 75,
        avgCheck: 1460
      },
      offPeakHours: {
        totalRevenue: 255500,
        customerCount: 155,
        avgCheck: 1648
      },
      peakRatio: 1.64,
      status: 'optimal',
      variance: 5.2
    }
  ]

  const chainAverage = peakRatioData.reduce((sum, item) => sum + item.peakRatio, 0) / peakRatioData.length
  const optimalLocations = peakRatioData.filter(item => item.peakRatio >= 1.2 && item.peakRatio <= 1.8).length

  const getStatusColor = (ratio: number) => {
    if (ratio >= 1.2 && ratio <= 1.8) return 'text-green-600'
    if (ratio >= 1.0 && ratio < 1.2) return 'text-yellow-600'
    if (ratio > 1.8) return 'text-orange-600'
    return 'text-red-600'
  }

  const getStatusBg = (ratio: number) => {
    if (ratio >= 1.2 && ratio <= 1.8) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (ratio >= 1.0 && ratio < 1.2) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    if (ratio > 1.8) return 'bg-orange-50 dark:bg-orange-900/20 border-orange-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getStatusIcon = (ratio: number) => {
    if (ratio >= 1.2 && ratio <= 1.8) return '✅'
    if (ratio >= 1.0 && ratio < 1.2) return '⚠️'
    if (ratio > 1.8) return '🔥'
    return '🚨'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Peak vs Off-Peak Revenue Ratio
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: OPR_005 | Revenue Distribution Analysis
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
            <strong>Formula:</strong> (Peak Hour Revenue ÷ Peak Hour Duration) ÷ (Off-Peak Revenue ÷ Off-Peak Duration)
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Revenue concentration during peak vs off-peak hours
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> Optimal ratio 1.2-1.8 indicates balanced capacity utilization
          </p>
        </div>
      </div>

      {/* Alert Thresholds */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🎯 Target Ranges & Alert Thresholds
        </h2>
        <div className="grid grid-cols-4 gap-3">
          <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded border border-green-200">
            <div className="text-xs font-bold text-green-700 dark:text-green-300">OPTIMAL</div>
            <div className="text-xs font-normal text-green-600">1.2-1.8</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">LOW</div>
            <div className="text-xs font-normal text-yellow-600">1.0-1.2</div>
          </div>
          <div className="text-center p-3 bg-orange-50 dark:bg-orange-900/20 rounded border border-orange-200">
            <div className="text-xs font-bold text-orange-700 dark:text-orange-300">HIGH</div>
            <div className="text-xs font-normal text-orange-600">&gt;1.8</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&lt;1.0</div>
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
            <span className="text-xs font-normal text-gray-500">Chain Average Ratio</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getStatusColor(chainAverage)}`}>
                {chainAverage.toFixed(2)}
              </span>
              <span>{getStatusIcon(chainAverage)}</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Optimal Locations</span>
            <div className="text-xs font-normal text-green-600">
              {optimalLocations}/3 locations in optimal range
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Peak Period</span>
            <div className="text-xs font-normal text-black dark:text-white">
              12:00-15:00 (lunch rush)
            </div>
          </div>
        </div>
      </div>

      {/* Location Analysis */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Peak Performance Analysis
        </h2>
        <div className="space-y-3">
          {peakRatioData
            .sort((a, b) => b.peakRatio - a.peakRatio)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.peakRatio)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span>{getStatusIcon(location.peakRatio)}</span>
                </div>
                <div className="text-right">
                  <div className={`text-xs font-bold ${getStatusColor(location.peakRatio)}`}>
                    {location.peakRatio.toFixed(2)}
                  </div>
                  <div className={`text-xs font-normal ${location.variance > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {location.variance > 0 ? '+' : ''}{location.variance.toFixed(1)}% vs target
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-1">Peak Hours ({location.peakHours.start}-{location.peakHours.end})</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Revenue:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.peakHours.totalRevenue.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Customers:</span>
                      <span className="font-normal text-black dark:text-white">{location.peakHours.customerCount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Avg Check:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.peakHours.avgCheck}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-1">Off-Peak Hours</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Revenue:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.offPeakHours.totalRevenue.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Customers:</span>
                      <span className="font-normal text-black dark:text-white">{location.offPeakHours.customerCount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Avg Check:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.offPeakHours.avgCheck}</span>
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
              <li>• PetPooja POS (hourly revenue)</li>
              <li>• Transaction timestamps</li>
              <li>• Customer count data</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Daily</li>
              <li>• Alert: Orange if ratio >1.8</li>
              <li>• Drill down: hourly revenue breakdown</li>
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
            • Monitor lunch rush patterns (12:00-15:00) and dinner service (19:00-22:00)
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Account for local business district lunch timings
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Consider weekend vs weekday traffic variations
          </p>
        </div>
      </div>

      {/* Users & Access */}
      <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-lg border border-gray-200">
        <h2 className="text-xs font-bold text-black dark:text-white mb-2">
          👥 Authorized Users
        </h2>
        <p className="text-xs font-normal text-gray-500">
          Operations Manager, Store Manager, Regional Manager
        </p>
      </div>
    </div>
  )
}