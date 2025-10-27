import { RESTAURANTS } from '@/lib/restaurant-data'

export default function RevenueVarianceKPI() {
  // CMP_001 Revenue Variance by Location - Exact specifications from restaurant_kpi_metrics_127.txt
  const revenueVarianceData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      monthlyRevenue: 485000,
      chainAverage: 415000, // Average of all 3 locations
      variance: 16.9, // +16.9% above chain average
      status: 'warning', // 10-20% variance warning range
      rankPosition: 1,
      performanceCategory: 'High Performer',
      gapAnalysis: {
        revenueGap: 70000, // ₹70,000 above average
        percentagePoints: 16.9,
        rootCauses: [
          'Premium location in diplomatic area',
          'Higher average check size',
          'Corporate catering contracts'
        ]
      },
      monthlyTrend: [
        { month: 'Aug', revenue: 465000, variance: 12.0 },
        { month: 'Sep', revenue: 475000, variance: 14.5 },
        { month: 'Oct', revenue: 485000, variance: 16.9 }
      ]
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      monthlyRevenue: 395000,
      chainAverage: 415000,
      variance: -4.8, // -4.8% below chain average
      status: 'good', // <10% variance good range
      rankPosition: 2,
      performanceCategory: 'Average Performer',
      gapAnalysis: {
        revenueGap: -20000, // ₹20,000 below average
        percentagePoints: -4.8,
        rootCauses: [
          'Suburban location with lower footfall',
          'Competitive market with 3 similar cafes nearby',
          'Newer location still building customer base'
        ]
      },
      monthlyTrend: [
        { month: 'Aug', revenue: 385000, variance: -7.2 },
        { month: 'Sep', revenue: 390000, variance: -6.0 },
        { month: 'Oct', revenue: 395000, variance: -4.8 }
      ]
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      monthlyRevenue: 365000,
      chainAverage: 415000,
      variance: -12.0, // -12.0% below chain average
      status: 'warning', // 10-20% variance warning range
      rankPosition: 3,
      performanceCategory: 'Low Performer',
      gapAnalysis: {
        revenueGap: -50000, // ₹50,000 below average
        percentagePoints: -12.0,
        rootCauses: [
          'Limited seating capacity (rooftop constraints)',
          'Weather-dependent operations',
          'Lower spend per table due to cafe positioning'
        ]
      },
      monthlyTrend: [
        { month: 'Aug', revenue: 355000, variance: -14.5 },
        { month: 'Sep', revenue: 360000, variance: -13.3 },
        { month: 'Oct', revenue: 365000, variance: -12.0 }
      ]
    }
  ]

  const chainTotal = revenueVarianceData.reduce((sum, item) => sum + item.monthlyRevenue, 0)
  const chainAverage = chainTotal / revenueVarianceData.length
  const varianceSpread = Math.max(...revenueVarianceData.map(d => d.variance)) - Math.min(...revenueVarianceData.map(d => d.variance))

  const getStatusColor = (variance: number) => {
    if (Math.abs(variance) < 10) return 'text-green-600'
    if (Math.abs(variance) < 20) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (variance: number) => {
    if (Math.abs(variance) < 10) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (Math.abs(variance) < 20) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getStatusIcon = (variance: number) => {
    if (variance > 10) return '📈'
    if (variance < -10) return '📉'
    return '⚖️'
  }

  const getPerformanceIcon = (category: string) => {
    if (category === 'High Performer') return '🏆'
    if (category === 'Low Performer') return '🔄'
    return '⚖️'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Revenue Variance by Location
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: CMP_001 | Comparative Analysis of Location Revenue Performance
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
            <strong>Formula:</strong> (Location Revenue - Chain Average Revenue) ÷ Chain Average Revenue × 100
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Percentage variance of each location's revenue vs. chain average. High variance (&gt;20%) warrants investigation.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> Identifies high and low performers; reveals process or management gaps between locations.
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
            <div className="text-xs font-normal text-green-600">Variance &lt;10%</div>
            <div className="text-xs font-normal text-green-500">(Tight clustering)</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">10–20% variance</div>
            <div className="text-xs font-normal text-yellow-500">(Requires investigation)</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&gt;20% variance</div>
            <div className="text-xs font-normal text-red-500">(Immediate action needed)</div>
          </div>
        </div>
      </div>

      {/* Chain Summary */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          📈 Chain Variance Analysis Summary
        </h2>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <span className="text-xs font-normal text-gray-500">Chain Average Revenue</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-black dark:text-white">
                ₹{chainAverage.toLocaleString('en-IN')}
              </span>
              <span>📊</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Total Variance Spread</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-black dark:text-white">
                {varianceSpread.toFixed(1)}%
              </span>
              <span>📏</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Locations Needing Action</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-red-600">
                {revenueVarianceData.filter(d => Math.abs(d.variance) >= 10).length} of {revenueVarianceData.length}
              </span>
              <span>⚠️</span>
            </div>
          </div>
        </div>
      </div>

      {/* Location Performance Ranking */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Performance Ranking (by Revenue vs Chain Average)
        </h2>
        <div className="space-y-3">
          {revenueVarianceData
            .sort((a, b) => b.monthlyRevenue - a.monthlyRevenue)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.variance)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-gray-600">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span>{getPerformanceIcon(location.performanceCategory)}</span>
                  <span className="text-xs font-normal text-gray-500">
                    {location.performanceCategory}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-black dark:text-white">
                    ₹{location.monthlyRevenue.toLocaleString('en-IN')}
                  </div>
                  <div className={`text-xs font-bold ${getStatusColor(location.variance)}`}>
                    {location.variance > 0 ? '+' : ''}{location.variance.toFixed(1)}% vs avg
                  </div>
                </div>
              </div>
              
              {/* Gap Analysis */}
              <div className="mt-3 p-2 bg-white dark:bg-gray-800 rounded border">
                <h4 className="text-xs font-bold text-gray-600 mb-2">🔍 Gap Analysis & Root Causes</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-500">Revenue Gap:</span>
                      <span className={`font-bold ${location.gapAnalysis.revenueGap > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {location.gapAnalysis.revenueGap > 0 ? '+' : ''}₹{Math.abs(location.gapAnalysis.revenueGap).toLocaleString('en-IN')}
                      </span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Variance:</span>
                      <span className={`font-bold ${getStatusColor(location.variance)}`}>
                        {location.variance > 0 ? '+' : ''}{location.variance.toFixed(1)}%
                      </span>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-gray-600 mb-1">Root Causes:</h5>
                    <ul className="text-xs text-gray-500 space-y-0.5">
                      {location.gapAnalysis.rootCauses.map((cause, idx) => (
                        <li key={idx}>• {cause}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Monthly Trend */}
              <div className="mt-3 p-2 bg-gray-50 dark:bg-gray-800 rounded">
                <h4 className="text-xs font-bold text-gray-600 mb-2">📈 3-Month Variance Trend</h4>
                <div className="flex justify-between">
                  {location.monthlyTrend.map((month, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-xs font-bold text-gray-600">{month.month}</div>
                      <div className="text-xs font-normal text-black dark:text-white">
                        ₹{(month.revenue / 1000).toFixed(0)}K
                      </div>
                      <div className={`text-xs font-bold ${getStatusColor(month.variance)}`}>
                        {month.variance > 0 ? '+' : ''}{month.variance.toFixed(1)}%
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
              <li>• PetPooja POS (revenue by location)</li>
              <li>• Monthly consolidation reports</li>
              <li>• Cross-location performance data</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Monthly (1st of each month)</li>
              <li>• Automated variance calculation</li>
              <li>• Alert if variance &gt;20%</li>
            </ul>
          </div>
        </div>
      </div>

      {/* India-Specific Considerations */}
      <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200">
        <h2 className="text-xs font-bold text-orange-900 dark:text-orange-300 mb-2">
          🇮🇳 India-Specific Considerations
        </h2>
        <div className="space-y-1">
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Account for location-specific costs (rent, staff wages vary by area)
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Consider local market conditions and competition density
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Factor in seasonal and festival impacts on different locations
          </p>
        </div>
      </div>

      {/* Users & Access */}
      <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-lg border border-gray-200">
        <h2 className="text-xs font-bold text-black dark:text-white mb-2">
          👥 Authorized Users
        </h2>
        <p className="text-xs font-normal text-gray-500">
          Owner, CFO, Regional Manager
        </p>
      </div>
    </div>
  )
}