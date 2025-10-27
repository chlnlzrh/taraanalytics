import { RESTAURANTS } from '@/lib/restaurant-data'

export default function PrimeCostRankingKPI() {
  // CMP_003 Prime Cost % Ranking - Exact specifications from restaurant_kpi_metrics_127.txt
  const primeCostRankingData = [
    {
      restaurant: RESTAURANTS[1], // Gurugram - Best performer
      primeCostPercent: 54.8,
      chainAverage: 56.5, // Average of all 3 locations
      variance: -3.0, // -3.0% below chain average (better)
      status: 'good', // <2% variance target, but close to warning
      rankPosition: 1,
      performanceCategory: 'Cost Leader',
      costBreakdown: {
        foodCost: 29.8,
        laborCost: 25.0,
        totalPrimeCost: 54.8
      },
      gapAnalysis: {
        costAdvantage: -1.7, // ₹1.7% better than average
        percentagePoints: -3.0,
        rootCauses: [
          'Efficient kitchen operations and layout',
          'Better supplier relationships and bulk purchasing',
          'Optimized staff scheduling and productivity'
        ]
      },
      monthlyTrend: [
        { month: 'Aug', primeCost: 55.2, variance: -2.3 },
        { month: 'Sep', primeCost: 55.0, variance: -2.7 },
        { month: 'Oct', primeCost: 54.8, variance: -3.0 }
      ]
    },
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri - Average performer
      primeCostPercent: 56.2,
      chainAverage: 56.5,
      variance: -0.5, // -0.5% below chain average (slightly better)
      status: 'good', // <2% variance target
      rankPosition: 2,
      performanceCategory: 'Average Performer',
      costBreakdown: {
        foodCost: 31.5,
        laborCost: 24.7,
        totalPrimeCost: 56.2
      },
      gapAnalysis: {
        costAdvantage: -0.3, // ₹0.3% better than average
        percentagePoints: -0.5,
        rootCauses: [
          'Premium location with higher ingredient costs',
          'Balanced operations with room for optimization',
          'Higher staff wages due to location premium'
        ]
      },
      monthlyTrend: [
        { month: 'Aug', primeCost: 56.8, variance: 0.5 },
        { month: 'Sep', primeCost: 56.5, variance: 0.0 },
        { month: 'Oct', primeCost: 56.2, variance: -0.5 }
      ]
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat - Worst performer
      primeCostPercent: 58.4,
      chainAverage: 56.5,
      variance: 3.4, // +3.4% above chain average (worse)
      status: 'critical', // >3% variance critical
      rankPosition: 3,
      performanceCategory: 'High Cost Unit',
      costBreakdown: {
        foodCost: 33.2,
        laborCost: 25.2,
        totalPrimeCost: 58.4
      },
      gapAnalysis: {
        costAdvantage: 1.9, // ₹1.9% worse than average
        percentagePoints: 3.4,
        rootCauses: [
          'Higher food waste due to rooftop weather exposure',
          'Inefficient small-batch operations',
          'Limited storage space increasing frequent purchasing'
        ]
      },
      monthlyTrend: [
        { month: 'Aug', primeCost: 59.1, variance: 4.6 },
        { month: 'Sep', primeCost: 58.8, variance: 4.1 },
        { month: 'Oct', primeCost: 58.4, variance: 3.4 }
      ]
    }
  ]

  const chainTotal = primeCostRankingData.reduce((sum, item) => sum + item.primeCostPercent, 0)
  const chainAverage = chainTotal / primeCostRankingData.length
  const varianceSpread = Math.max(...primeCostRankingData.map(d => d.variance)) - Math.min(...primeCostRankingData.map(d => d.variance))

  const getStatusColor = (variance: number) => {
    if (Math.abs(variance) < 2) return 'text-green-600'
    if (Math.abs(variance) < 3) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (variance: number) => {
    if (Math.abs(variance) < 2) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (Math.abs(variance) < 3) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getStatusIcon = (variance: number) => {
    if (variance < -2) return '🏆' // Much better than average
    if (variance > 3) return '🚨' // Much worse than average
    return '⚖️'
  }

  const getPerformanceIcon = (category: string) => {
    if (category === 'Cost Leader') return '🏆'
    if (category === 'High Cost Unit') return '🔴'
    return '⚖️'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Prime Cost % Ranking
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: CMP_003 | Location Performance Variance - Prime Cost Efficiency Ranking
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
            <strong>Formula:</strong> Rank all 3 locations by Prime Cost %; identify lowest and highest cost units
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Lowest cost location is operational benchmark; highest cost requires investigation.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> 2–3% variance between best and worst is target; >5% indicates serious gaps.
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
            <div className="text-xs font-normal text-green-600">All locations 55–58%</div>
            <div className="text-xs font-normal text-green-500">Variance &lt;2%</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">Variance 2–3%</div>
            <div className="text-xs font-normal text-yellow-500">(Process investigation)</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">Variance &gt;3%</div>
            <div className="text-xs font-normal text-red-500">Any location &gt;60%</div>
          </div>
        </div>
      </div>

      {/* Chain Summary */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          📈 Chain Prime Cost Analysis Summary
        </h2>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <span className="text-xs font-normal text-gray-500">Chain Average Prime Cost</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-black dark:text-white">
                {chainAverage.toFixed(1)}%
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
                {primeCostRankingData.filter(d => Math.abs(d.variance) >= 2).length} of {primeCostRankingData.length}
              </span>
              <span>⚠️</span>
            </div>
          </div>
        </div>
      </div>

      {/* Location Prime Cost Ranking */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Prime Cost Efficiency Ranking (Lower = Better)
        </h2>
        <div className="space-y-3">
          {primeCostRankingData
            .sort((a, b) => a.primeCostPercent - b.primeCostPercent)
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
                    {location.primeCostPercent.toFixed(1)}%
                  </div>
                  <div className={`text-xs font-bold ${getStatusColor(location.variance)}`}>
                    {location.variance > 0 ? '+' : ''}{location.variance.toFixed(1)}% vs avg
                  </div>
                </div>
              </div>
              
              {/* Cost Breakdown */}
              <div className="mt-3 p-2 bg-white dark:bg-gray-800 rounded border">
                <h4 className="text-xs font-bold text-gray-600 mb-2">🔍 Prime Cost Breakdown Analysis</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-500">Food Cost:</span>
                        <span className="font-bold text-orange-600">{location.costBreakdown.foodCost.toFixed(1)}%</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-500">Labor Cost:</span>
                        <span className="font-bold text-blue-600">{location.costBreakdown.laborCost.toFixed(1)}%</span>
                      </div>
                      <div className="flex justify-between text-xs border-t pt-1">
                        <span className="text-gray-500">Total Prime Cost:</span>
                        <span className={`font-bold ${getStatusColor(location.variance)}`}>
                          {location.costBreakdown.totalPrimeCost.toFixed(1)}%
                        </span>
                      </div>
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
                <h4 className="text-xs font-bold text-gray-600 mb-2">📈 3-Month Prime Cost Trend</h4>
                <div className="flex justify-between">
                  {location.monthlyTrend.map((month, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-xs font-bold text-gray-600">{month.month}</div>
                      <div className="text-xs font-normal text-black dark:text-white">
                        {month.primeCost.toFixed(1)}%
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

      {/* Best vs Worst Analysis */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🎯 Best vs Worst Performer Analysis
        </h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded border border-green-200">
            <h3 className="text-xs font-bold text-green-700 dark:text-green-300 mb-2">
              🏆 Best Performer: {primeCostRankingData[0].restaurant.fullName}
            </h3>
            <div className="space-y-1">
              <div className="text-xs text-green-600">
                Prime Cost: <span className="font-bold">{primeCostRankingData[0].primeCostPercent.toFixed(1)}%</span>
              </div>
              <div className="text-xs text-green-600">
                Advantage: <span className="font-bold">{Math.abs(primeCostRankingData[0].variance).toFixed(1)}% below average</span>
              </div>
              <div className="text-xs text-green-500 mt-2">
                <strong>Key Success Factors:</strong>
                <ul className="mt-1 space-y-0.5">
                  {primeCostRankingData[0].gapAnalysis.rootCauses.map((cause, idx) => (
                    <li key={idx}>• {cause}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <h3 className="text-xs font-bold text-red-700 dark:text-red-300 mb-2">
              🔴 Worst Performer: {primeCostRankingData[2].restaurant.fullName}
            </h3>
            <div className="space-y-1">
              <div className="text-xs text-red-600">
                Prime Cost: <span className="font-bold">{primeCostRankingData[2].primeCostPercent.toFixed(1)}%</span>
              </div>
              <div className="text-xs text-red-600">
                Gap: <span className="font-bold">{primeCostRankingData[2].variance.toFixed(1)}% above average</span>
              </div>
              <div className="text-xs text-red-500 mt-2">
                <strong>Areas for Improvement:</strong>
                <ul className="mt-1 space-y-0.5">
                  {primeCostRankingData[2].gapAnalysis.rootCauses.map((cause, idx) => (
                    <li key={idx}>• {cause}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
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
              <li>• Prime Cost % by location (monthly calculation)</li>
              <li>• Food cost from inventory systems</li>
              <li>• Labor cost from payroll systems</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Monthly (1st of each month)</li>
              <li>• Automated variance calculation</li>
              <li>• Alert if variance &gt;3%</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Drill Down Actions */}
      <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200">
        <h2 className="text-xs font-bold text-orange-900 dark:text-orange-300 mb-2">
          🔍 Drill Down Analysis
        </h2>
        <div className="space-y-1">
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            <strong>Best Performer:</strong> Analyze food cost breakdown, labor productivity benchmarks
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            <strong>Worst Performer:</strong> Conduct root cause analysis on cost drivers and operational efficiency
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            <strong>Chain Level:</strong> Identify replicable best practices and standardization opportunities
          </p>
        </div>
      </div>

      {/* Users & Access */}
      <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-lg border border-gray-200">
        <h2 className="text-xs font-bold text-black dark:text-white mb-2">
          👥 Authorized Users
        </h2>
        <p className="text-xs font-normal text-gray-500">
          Owner, CFO, Manager
        </p>
      </div>
    </div>
  )
}