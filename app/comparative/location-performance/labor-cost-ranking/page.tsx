import { RESTAURANTS } from '@/lib/restaurant-data'

export default function LaborCostRankingKPI() {
  // CMP_005 Labor Cost % Ranking - Exact specifications from restaurant_kpi_metrics_127.txt
  const laborCostData = [
    {
      restaurant: RESTAURANTS[1], // Gurugram - Most efficient
      monthlyRevenue: 395000,
      monthlylaborCost: 110600, // 28% of revenue
      laborCostPercentage: 28.0,
      chainAverage: 29.3, // Average of all 3 locations
      variance: -1.3, // 1.3% below chain average (most efficient)
      status: 'good', // <2% variance target range
      rankPosition: 1,
      efficiencyCategory: 'Most Efficient',
      revenuePerLaborHour: 485, // Revenue per labor hour
      schedulingModel: 'Optimized shift patterns',
      gapAnalysis: {
        varianceFromAverage: -1.3,
        absoluteDifference: 5200, // ₹5,200 less labor cost than average
        rootCauses: [
          'Optimized scheduling with part-time staff',
          'Cross-trained employees for flexibility',
          'Suburban location with lower wage rates'
        ],
        bestPractices: [
          'Split shifts during peak hours',
          'Multi-skilled staff covering multiple roles',
          'Performance-based scheduling'
        ]
      },
      monthlyTrend: [
        { month: 'Aug', laborCost: 28.5, variance: -0.8 },
        { month: 'Sep', laborCost: 28.2, variance: -1.1 },
        { month: 'Oct', laborCost: 28.0, variance: -1.3 }
      ]
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat - Average
      monthlyRevenue: 365000,
      monthlylaborCost: 106950, // 29.3% of revenue
      laborCostPercentage: 29.3,
      chainAverage: 29.3,
      variance: 0.0, // Exactly at chain average
      status: 'good', // <2% variance target range
      rankPosition: 2,
      efficiencyCategory: 'Average Efficiency',
      revenuePerLaborHour: 425,
      schedulingModel: 'Standard shift patterns',
      gapAnalysis: {
        varianceFromAverage: 0.0,
        absoluteDifference: 0,
        rootCauses: [
          'Standard scheduling practices',
          'Rooftop location requires consistent staffing',
          'Weather-dependent operations affect efficiency'
        ],
        bestPractices: [
          'Baseline scheduling model',
          'Weather contingency planning',
          'Cross-training in progress'
        ]
      },
      monthlyTrend: [
        { month: 'Aug', laborCost: 29.8, variance: 0.5 },
        { month: 'Sep', laborCost: 29.5, variance: 0.2 },
        { month: 'Oct', laborCost: 29.3, variance: 0.0 }
      ]
    },
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri - Least efficient
      monthlyRevenue: 485000,
      monthlylaborCost: 155550, // 32.1% of revenue
      laborCostPercentage: 32.1,
      chainAverage: 29.3,
      variance: 2.8, // 2.8% above chain average (least efficient)
      status: 'warning', // 2-3% variance warning range
      rankPosition: 3,
      efficiencyCategory: 'Least Efficient',
      revenuePerLaborHour: 380,
      schedulingModel: 'Premium service model',
      gapAnalysis: {
        varianceFromAverage: 2.8,
        absoluteDifference: 13600, // ₹13,600 more labor cost than average
        rootCauses: [
          'Premium location requires higher service levels',
          'Higher wage rates in diplomatic area',
          'Overstaffing during peak corporate hours'
        ],
        improvementOpportunities: [
          'Optimize peak hour scheduling',
          'Review service level requirements',
          'Implement flexible staffing model'
        ]
      },
      monthlyTrend: [
        { month: 'Aug', laborCost: 33.2, variance: 3.9 },
        { month: 'Sep', laborCost: 32.8, variance: 3.5 },
        { month: 'Oct', laborCost: 32.1, variance: 2.8 }
      ]
    }
  ]

  const chainTotal = laborCostData.reduce((sum, item) => sum + item.monthlylaborCost, 0)
  const chainRevenueTotal = laborCostData.reduce((sum, item) => sum + item.monthlyRevenue, 0)
  const chainAverageLaborCost = (chainTotal / chainRevenueTotal) * 100
  const varianceSpread = Math.max(...laborCostData.map(d => d.variance)) - Math.min(...laborCostData.map(d => d.variance))

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

  const getEfficiencyIcon = (category: string) => {
    if (category === 'Most Efficient') return '🏆'
    if (category === 'Least Efficient') return '🔧'
    return '⚖️'
  }

  const getRankIcon = (position: number) => {
    if (position === 1) return '🥇'
    if (position === 2) return '🥈'
    return '🥉'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Labor Cost % Ranking
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: CMP_005 | Comparative Analysis of Labor Efficiency by Location
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
            <strong>Formula:</strong> Rank all 3 locations by Labor Cost %; identify most and least efficient labor management
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Reveals staffing, scheduling, or wage structure differences. High variance signals process gaps.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> Tight clustering (all within 2%) indicates standardized schedules; variance shows optimization opportunities.
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
            <div className="text-xs font-normal text-green-500">(Standardized processes)</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">2–3% variance</div>
            <div className="text-xs font-normal text-yellow-500">(Process gaps)</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&gt;3% variance</div>
            <div className="text-xs font-normal text-red-500">(Immediate action needed)</div>
          </div>
        </div>
      </div>

      {/* Chain Summary */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          📈 Chain Labor Efficiency Analysis Summary
        </h2>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <span className="text-xs font-normal text-gray-500">Chain Average Labor Cost %</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-black dark:text-white">
                {chainAverageLaborCost.toFixed(1)}%
              </span>
              <span>📊</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Efficiency Variance Spread</span>
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
                {laborCostData.filter(d => Math.abs(d.variance) >= 2).length} of {laborCostData.length}
              </span>
              <span>⚠️</span>
            </div>
          </div>
        </div>
      </div>

      {/* Labor Efficiency Ranking */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Labor Efficiency Ranking (Most to Least Efficient)
        </h2>
        <div className="space-y-3">
          {laborCostData
            .sort((a, b) => a.laborCostPercentage - b.laborCostPercentage)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.variance)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-gray-600">{getRankIcon(index + 1)} #{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span>{getEfficiencyIcon(location.efficiencyCategory)}</span>
                  <span className="text-xs font-normal text-gray-500">
                    {location.efficiencyCategory}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-black dark:text-white">
                    {location.laborCostPercentage.toFixed(1)}% of Revenue
                  </div>
                  <div className={`text-xs font-bold ${getStatusColor(location.variance)}`}>
                    {location.variance > 0 ? '+' : ''}{location.variance.toFixed(1)}% vs avg
                  </div>
                </div>
              </div>
              
              {/* Efficiency Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-3 p-2 bg-white dark:bg-gray-800 rounded border">
                <div className="text-center">
                  <div className="text-xs font-normal text-gray-500">Labor Cost</div>
                  <div className="text-xs font-bold text-black dark:text-white">
                    ₹{location.monthlylaborCost.toLocaleString('en-IN')}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs font-normal text-gray-500">Revenue/Labor Hour</div>
                  <div className="text-xs font-bold text-black dark:text-white">
                    ₹{location.revenuePerLaborHour}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs font-normal text-gray-500">Scheduling Model</div>
                  <div className="text-xs font-bold text-black dark:text-white">
                    {location.schedulingModel}
                  </div>
                </div>
              </div>

              {/* Gap Analysis */}
              <div className="mt-3 p-2 bg-white dark:bg-gray-800 rounded border">
                <h4 className="text-xs font-bold text-gray-600 mb-2">🔍 Efficiency Analysis & Root Causes</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-500">Cost Difference:</span>
                      <span className={`font-bold ${location.gapAnalysis.absoluteDifference < 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {location.gapAnalysis.absoluteDifference > 0 ? '+' : ''}₹{Math.abs(location.gapAnalysis.absoluteDifference).toLocaleString('en-IN')}
                      </span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Efficiency Variance:</span>
                      <span className={`font-bold ${getStatusColor(location.variance)}`}>
                        {location.variance > 0 ? '+' : ''}{location.variance.toFixed(1)}%
                      </span>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-gray-600 mb-1">
                      {location.efficiencyCategory === 'Most Efficient' ? 'Best Practices:' : 
                       location.efficiencyCategory === 'Least Efficient' ? 'Improvement Areas:' : 'Root Causes:'}
                    </h5>
                    <ul className="text-xs text-gray-500 space-y-0.5">
                      {(location.gapAnalysis.bestPractices || location.gapAnalysis.improvementOpportunities || location.gapAnalysis.rootCauses).map((item: string, idx: number) => (
                        <li key={idx}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Monthly Trend */}
              <div className="mt-3 p-2 bg-gray-50 dark:bg-gray-800 rounded">
                <h4 className="text-xs font-bold text-gray-600 mb-2">📈 3-Month Labor Cost % Trend</h4>
                <div className="flex justify-between">
                  {location.monthlyTrend.map((month, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-xs font-bold text-gray-600">{month.month}</div>
                      <div className="text-xs font-normal text-black dark:text-white">
                        {month.laborCost.toFixed(1)}%
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
              <li>• Labor Cost % by location (monthly from HRIS + revenue)</li>
              <li>• Scheduling and wage rate data</li>
              <li>• Revenue per labor hour calculations</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Monthly (1st of each month)</li>
              <li>• Automated efficiency ranking</li>
              <li>• Alert if variance &gt;3%</li>
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
            • Verify wage rates align; if different, document justification (location premium, experience levels)
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Consider local labor regulations and minimum wage variations
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Account for festival bonuses and statutory benefits in calculations
          </p>
        </div>
      </div>

      {/* Users & Access */}
      <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-lg border border-gray-200">
        <h2 className="text-xs font-bold text-black dark:text-white mb-2">
          👥 Authorized Users
        </h2>
        <p className="text-xs font-normal text-gray-500">
          Finance, Manager, HR
        </p>
      </div>
    </div>
  )
}