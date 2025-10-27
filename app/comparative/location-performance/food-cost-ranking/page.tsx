import { RESTAURANTS } from '@/lib/restaurant-data'

export default function FoodCostRankingKPI() {
  // CMP_004 Food Cost % Ranking - Exact specifications from restaurant_kpi_metrics_127.txt
  const foodCostRankingData = [
    {
      restaurant: RESTAURANTS[1], // Gurugram - Best performer
      foodCostPercent: 29.8,
      chainAverage: 31.5, // Average of all 3 locations
      variance: -5.4, // -5.4% below chain average (better)
      status: 'critical', // >3% variance critical (but good direction)
      rankPosition: 1,
      performanceCategory: 'Food Cost Leader',
      costBreakdown: {
        ingredients: 24.2,
        beverages: 3.8,
        packaging: 1.8,
        totalFoodCost: 29.8
      },
      gapAnalysis: {
        costAdvantage: -1.7, // ₹1.7% better than average
        percentagePoints: -5.4,
        rootCauses: [
          'Bulk purchasing agreements with local suppliers',
          'Efficient inventory management reducing waste',
          'Standardized portion control and recipes'
        ]
      },
      weeklyTrend: [
        { week: 'W1', foodCost: 30.2, variance: -4.1 },
        { week: 'W2', foodCost: 29.8, variance: -5.4 },
        { week: 'W3', foodCost: 29.5, variance: -6.3 },
        { week: 'W4', foodCost: 29.8, variance: -5.4 }
      ],
      supplierPerformance: {
        primarySupplier: 'Metro Cash & Carry',
        reliabilityScore: 4.8,
        costEfficiency: 4.9
      }
    },
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri - Average performer
      foodCostPercent: 31.5,
      chainAverage: 31.5,
      variance: 0.0, // Exactly at chain average
      status: 'good', // <2% variance target
      rankPosition: 2,
      performanceCategory: 'Average Performer',
      costBreakdown: {
        ingredients: 25.8,
        beverages: 4.1,
        packaging: 1.6,
        totalFoodCost: 31.5
      },
      gapAnalysis: {
        costAdvantage: 0.0, // Exactly at average
        percentagePoints: 0.0,
        rootCauses: [
          'Premium ingredients due to diplomatic clientele',
          'Higher quality standards for corporate catering',
          'Balanced operations with standard procurement'
        ]
      },
      weeklyTrend: [
        { week: 'W1', foodCost: 31.8, variance: 1.0 },
        { week: 'W2', foodCost: 31.5, variance: 0.0 },
        { week: 'W3', foodCost: 31.2, variance: -1.0 },
        { week: 'W4', foodCost: 31.5, variance: 0.0 }
      ],
      supplierPerformance: {
        primarySupplier: 'ITC Foods & Spencer\'s',
        reliabilityScore: 4.6,
        costEfficiency: 4.2
      }
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat - Worst performer
      foodCostPercent: 33.2,
      chainAverage: 31.5,
      variance: 5.4, // +5.4% above chain average (worse)
      status: 'critical', // >3% variance critical
      rankPosition: 3,
      performanceCategory: 'High Food Cost Unit',
      costBreakdown: {
        ingredients: 27.1,
        beverages: 4.5,
        packaging: 1.6,
        totalFoodCost: 33.2
      },
      gapAnalysis: {
        costAdvantage: 1.7, // ₹1.7% worse than average
        percentagePoints: 5.4,
        rootCauses: [
          'Weather exposure increasing spoilage on rooftop',
          'Small batch purchasing reducing negotiation power',
          'Limited cold storage space forcing frequent orders'
        ]
      },
      weeklyTrend: [
        { week: 'W1', foodCost: 33.8, variance: 7.3 },
        { week: 'W2', foodCost: 33.2, variance: 5.4 },
        { week: 'W3', foodCost: 32.9, variance: 4.4 },
        { week: 'W4', foodCost: 33.2, variance: 5.4 }
      ],
      supplierPerformance: {
        primarySupplier: 'Local Vendors & Big Bazaar',
        reliabilityScore: 3.8,
        costEfficiency: 3.5
      }
    }
  ]

  const chainTotal = foodCostRankingData.reduce((sum, item) => sum + item.foodCostPercent, 0)
  const chainAverage = chainTotal / foodCostRankingData.length
  const varianceSpread = Math.max(...foodCostRankingData.map(d => d.variance)) - Math.min(...foodCostRankingData.map(d => d.variance))

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
    if (variance < -3) return '🏆' // Much better than average
    if (variance > 3) return '🚨' // Much worse than average
    return '⚖️'
  }

  const getPerformanceIcon = (category: string) => {
    if (category === 'Food Cost Leader') return '🏆'
    if (category === 'High Food Cost Unit') return '🔴'
    return '⚖️'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Food Cost % Ranking
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: CMP_004 | Location Performance Variance - Food Cost Efficiency Ranking
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
            <strong>Formula:</strong> Rank all 3 locations by Food Cost %; &lt;2% variance ideal, &gt;3% indicates process gaps
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Identifies highest and lowest cost locations. Variance reveals purchasing, portion, or theft issues.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> Tight clustering (all within 2%) indicates standardized processes; high variance signals inconsistency.
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
            <div className="text-xs font-normal text-green-600">&lt;2% variance</div>
            <div className="text-xs font-normal text-green-500">Between lowest and highest</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">2–3% variance</div>
            <div className="text-xs font-normal text-yellow-500">(Process review needed)</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&gt;3% variance</div>
            <div className="text-xs font-normal text-red-500">(Immediate investigation)</div>
          </div>
        </div>
      </div>

      {/* Chain Summary */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          📈 Chain Food Cost Analysis Summary
        </h2>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <span className="text-xs font-normal text-gray-500">Chain Average Food Cost</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-black dark:text-white">
                {chainAverage.toFixed(1)}%
              </span>
              <span>🍽️</span>
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
                {foodCostRankingData.filter(d => Math.abs(d.variance) >= 2).length} of {foodCostRankingData.length}
              </span>
              <span>⚠️</span>
            </div>
          </div>
        </div>
      </div>

      {/* Location Food Cost Ranking */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Food Cost Efficiency Ranking (Lower = Better)
        </h2>
        <div className="space-y-3">
          {foodCostRankingData
            .sort((a, b) => a.foodCostPercent - b.foodCostPercent)
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
                    {location.foodCostPercent.toFixed(1)}%
                  </div>
                  <div className={`text-xs font-bold ${getStatusColor(location.variance)}`}>
                    {location.variance > 0 ? '+' : ''}{location.variance.toFixed(1)}% vs avg
                  </div>
                </div>
              </div>
              
              {/* Food Cost Breakdown */}
              <div className="mt-3 p-2 bg-white dark:bg-gray-800 rounded border">
                <h4 className="text-xs font-bold text-gray-600 mb-2">🔍 Food Cost Breakdown Analysis</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-500">Ingredients:</span>
                        <span className="font-bold text-orange-600">{location.costBreakdown.ingredients.toFixed(1)}%</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-500">Beverages:</span>
                        <span className="font-bold text-blue-600">{location.costBreakdown.beverages.toFixed(1)}%</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-500">Packaging:</span>
                        <span className="font-bold text-green-600">{location.costBreakdown.packaging.toFixed(1)}%</span>
                      </div>
                      <div className="flex justify-between text-xs border-t pt-1">
                        <span className="text-gray-500">Total Food Cost:</span>
                        <span className={`font-bold ${getStatusColor(location.variance)}`}>
                          {location.costBreakdown.totalFoodCost.toFixed(1)}%
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

              {/* Supplier Performance */}
              <div className="mt-3 p-2 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200">
                <h4 className="text-xs font-bold text-blue-700 dark:text-blue-300 mb-2">🏪 Supplier Performance</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-xs text-blue-600">
                      <span className="text-gray-500">Primary:</span>
                      <div className="font-bold">{location.supplierPerformance.primarySupplier}</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-blue-600">
                      <span className="text-gray-500">Reliability:</span>
                      <div className="font-bold">{location.supplierPerformance.reliabilityScore.toFixed(1)}/5.0</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-blue-600">
                      <span className="text-gray-500">Cost Efficiency:</span>
                      <div className="font-bold">{location.supplierPerformance.costEfficiency.toFixed(1)}/5.0</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Weekly Trend */}
              <div className="mt-3 p-2 bg-gray-50 dark:bg-gray-800 rounded">
                <h4 className="text-xs font-bold text-gray-600 mb-2">📈 4-Week Food Cost Trend</h4>
                <div className="grid grid-cols-4 gap-2">
                  {location.weeklyTrend.map((week, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-xs font-bold text-gray-600">{week.week}</div>
                      <div className="text-xs font-normal text-black dark:text-white">
                        {week.foodCost.toFixed(1)}%
                      </div>
                      <div className={`text-xs font-bold ${getStatusColor(week.variance)}`}>
                        {week.variance > 0 ? '+' : ''}{week.variance.toFixed(1)}%
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
              🏆 Best Performer: {foodCostRankingData[0].restaurant.fullName}
            </h3>
            <div className="space-y-1">
              <div className="text-xs text-green-600">
                Food Cost: <span className="font-bold">{foodCostRankingData[0].foodCostPercent.toFixed(1)}%</span>
              </div>
              <div className="text-xs text-green-600">
                Advantage: <span className="font-bold">{Math.abs(foodCostRankingData[0].variance).toFixed(1)}% below average</span>
              </div>
              <div className="text-xs text-green-500 mt-2">
                <strong>Best Practices:</strong>
                <ul className="mt-1 space-y-0.5">
                  {foodCostRankingData[0].gapAnalysis.rootCauses.map((cause, idx) => (
                    <li key={idx}>• {cause}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <h3 className="text-xs font-bold text-red-700 dark:text-red-300 mb-2">
              🔴 Worst Performer: {foodCostRankingData[2].restaurant.fullName}
            </h3>
            <div className="space-y-1">
              <div className="text-xs text-red-600">
                Food Cost: <span className="font-bold">{foodCostRankingData[2].foodCostPercent.toFixed(1)}%</span>
              </div>
              <div className="text-xs text-red-600">
                Gap: <span className="font-bold">{foodCostRankingData[2].variance.toFixed(1)}% above average</span>
              </div>
              <div className="text-xs text-red-500 mt-2">
                <strong>Critical Issues:</strong>
                <ul className="mt-1 space-y-0.5">
                  {foodCostRankingData[2].gapAnalysis.rootCauses.map((cause, idx) => (
                    <li key={idx}>• {cause}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Gaps Analysis */}
      <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200">
        <h2 className="text-xs font-bold text-yellow-900 dark:text-yellow-300 mb-2">
          🔍 Process Gaps & Standardization Opportunities
        </h2>
        <div className="space-y-1">
          <p className="text-xs font-normal text-yellow-800 dark:text-yellow-300">
            <strong>Purchasing:</strong> Variance indicates non-standardized procurement processes and supplier agreements
          </p>
          <p className="text-xs font-normal text-yellow-800 dark:text-yellow-300">
            <strong>Portion Control:</strong> High variance suggests inconsistent recipe adherence and portion standards
          </p>
          <p className="text-xs font-normal text-yellow-800 dark:text-yellow-300">
            <strong>Inventory Management:</strong> Spoilage and waste patterns differ significantly between locations
          </p>
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
              <li>• Food Cost % by location (weekly from inventory)</li>
              <li>• Supplier performance data</li>
              <li>• Inventory management systems</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Weekly (every Monday)</li>
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
            <strong>By Location:</strong> Individual restaurant food cost breakdown and trend analysis
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            <strong>By Menu Category:</strong> Cost variance analysis across appetizers, mains, beverages, and desserts
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            <strong>By Supplier Performance:</strong> Delivery reliability, cost efficiency, and quality metrics
          </p>
        </div>
      </div>

      {/* Users & Access */}
      <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-lg border border-gray-200">
        <h2 className="text-xs font-bold text-black dark:text-white mb-2">
          👥 Authorized Users
        </h2>
        <p className="text-xs font-normal text-gray-500">
          Finance, Manager
        </p>
      </div>
    </div>
  )
}