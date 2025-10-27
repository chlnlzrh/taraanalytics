import { RESTAURANTS } from '@/lib/restaurant-data'

export default function ProfitMarginVarianceKPI() {
  // CMP_007 Profit Margin Variance - Exact specifications from restaurant_kpi_metrics_127.txt
  const profitMarginData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri - Highest absolute profit
      monthlyRevenue: 485000,
      totalExpenses: 355400, // All operating expenses including rent
      netProfit: 129600, // Revenue - Total Expenses
      profitMargin: 26.7, // (Net Profit / Revenue) * 100
      chainAverage: 21.8, // Average of all 3 locations
      absoluteProfit: 129600,
      varianceFromAverage: 4.9, // +4.9% above chain average
      varianceCategory: 'Above Average',
      rankPosition: 1,
      performanceStatus: 'high', // Within ±20% variance target
      profitabilityTier: 'Top Performer',
      analysisInsights: {
        profitGap: 41400, // ₹41,400 above average profit
        marginPoints: 4.9,
        strengthFactors: [
          'Premium location commanding higher pricing power',
          'High-value diplomatic and corporate clientele',
          'Efficient operational scale with strong revenue base'
        ],
        replicationStrategies: [
          'Corporate client acquisition and retention strategies',
          'Premium menu positioning and pricing optimization',
          'Service quality standards for high-value customers'
        ]
      },
      expenseBreakdown: {
        labor: 155550, // 32.1%
        cogs: 145500, // 30.0%
        rent: 48500, // 10.0%
        utilities: 19400, // 4.0%
        other: 36850 // 7.6%
      },
      monthlyTrend: [
        { month: 'Aug', netProfit: 121200, profitMargin: 25.8, variance: 4.0 },
        { month: 'Sep', netProfit: 125400, profitMargin: 26.2, variance: 4.4 },
        { month: 'Oct', netProfit: 129600, profitMargin: 26.7, variance: 4.9 }
      ]
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram - Strong performer
      monthlyRevenue: 395000,
      totalExpenses: 316000,
      netProfit: 79000,
      profitMargin: 20.0,
      chainAverage: 21.8,
      absoluteProfit: 79000,
      varianceFromAverage: -1.8, // -1.8% below chain average but acceptable
      varianceCategory: 'Near Average',
      rankPosition: 2,
      performanceStatus: 'good', // Within ±20% variance target
      profitabilityTier: 'Solid Performer',
      analysisInsights: {
        profitGap: -9200, // ₹9,200 below highest performer
        marginPoints: -1.8,
        strengthFactors: [
          'Excellent cost control across all expense categories',
          'Balanced revenue-to-expense ratio',
          'Consistent operational efficiency'
        ],
        improvementOpportunities: [
          'Revenue enhancement through extended hours',
          'Menu optimization for higher-margin items',
          'Customer retention and frequency programs'
        ]
      },
      expenseBreakdown: {
        labor: 110600, // 28.0%
        cogs: 126400, // 32.0%
        rent: 39500, // 10.0%
        utilities: 15800, // 4.0%
        other: 23700 // 6.0%
      },
      monthlyTrend: [
        { month: 'Aug', netProfit: 75200, profitMargin: 19.2, variance: -2.6 },
        { month: 'Sep', netProfit: 77100, profitMargin: 19.6, variance: -2.2 },
        { month: 'Oct', netProfit: 79000, profitMargin: 20.0, variance: -1.8 }
      ]
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat - Needs attention
      monthlyRevenue: 365000,
      totalExpenses: 291600,
      netProfit: 73400,
      profitMargin: 20.1,
      chainAverage: 21.8,
      absoluteProfit: 73400,
      varianceFromAverage: -1.7, // -1.7% below chain average
      varianceCategory: 'Below Average',
      rankPosition: 3,
      performanceStatus: 'warning', // Within variance but trending concerning
      profitabilityTier: 'Needs Improvement',
      analysisInsights: {
        profitGap: -56200, // ₹56,200 below highest performer
        marginPoints: -6.6, // 6.6% below best performer
        challengeAreas: [
          'Lowest absolute profit despite decent margin percentage',
          'Limited revenue capacity constraining total profit',
          'Weather-dependent operations affecting consistency'
        ],
        interventionPriorities: [
          'Revenue growth initiatives and capacity optimization',
          'Weather mitigation strategies for consistent operations',
          'Cost optimization while maintaining service quality'
        ]
      },
      expenseBreakdown: {
        labor: 106950, // 29.3%
        cogs: 131400, // 36.0%
        rent: 36500, // 10.0%
        utilities: 18250, // 5.0%
        other: 18500 // 5.1%
      },
      monthlyTrend: [
        { month: 'Aug', netProfit: 68300, profitMargin: 18.9, variance: -2.9 },
        { month: 'Sep', netProfit: 70850, profitMargin: 19.5, variance: -2.3 },
        { month: 'Oct', netProfit: 73400, profitMargin: 20.1, variance: -1.7 }
      ]
    }
  ]

  const chainTotalRevenue = profitMarginData.reduce((sum, item) => sum + item.monthlyRevenue, 0)
  const chainTotalProfit = profitMarginData.reduce((sum, item) => sum + item.netProfit, 0)
  const chainAverageMargin = (chainTotalProfit / chainTotalRevenue) * 100
  const profitSpread = Math.max(...profitMarginData.map(d => d.profitMargin)) - Math.min(...profitMarginData.map(d => d.profitMargin))
  const absoluteProfitSpread = Math.max(...profitMarginData.map(d => d.absoluteProfit)) - Math.min(...profitMarginData.map(d => d.absoluteProfit))
  const variancePercentage = (profitSpread / chainAverageMargin) * 100

  const getStatusColor = (variance: number) => {
    if (Math.abs(variance) <= 20) return 'text-green-600'
    if (Math.abs(variance) <= 30) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (variance: number) => {
    if (Math.abs(variance) <= 20) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (Math.abs(variance) <= 30) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getPerformanceIcon = (tier: string) => {
    if (tier === 'Top Performer') return '🏆'
    if (tier === 'Solid Performer') return '📈'
    if (tier === 'Needs Improvement') return '🎯'
    return '📊'
  }

  const getRankIcon = (position: number) => {
    if (position === 1) return '🥇'
    if (position === 2) return '🥈'
    return '🥉'
  }

  const getVarianceIcon = (category: string) => {
    if (category === 'Above Average') return '⬆️'
    if (category === 'Near Average') return '➡️'
    return '⬇️'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Profit Margin Variance
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: CMP_007 | Absolute Profit Analysis Across All Locations
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
            <strong>Formula:</strong> Absolute profit dollars across all 3 locations; rank and compare
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Shows which locations generate most absolute profit vs. which are margin-dilutive.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> Absolute margin % less useful than comparative variance; informs resource allocation.
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
            <div className="text-xs font-normal text-green-600">±20% variance</div>
            <div className="text-xs font-normal text-green-500">(Healthy performance spread)</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">20–30% variance</div>
            <div className="text-xs font-normal text-yellow-500">(Needs attention)</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&gt;30% variance</div>
            <div className="text-xs font-normal text-red-500">(Urgent intervention)</div>
          </div>
        </div>
      </div>

      {/* Chain Summary */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          📈 Chain Profit Performance Summary
        </h2>
        <div className="grid grid-cols-4 gap-6">
          <div>
            <span className="text-xs font-normal text-gray-500">Chain Average Profit Margin</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-black dark:text-white">
                {chainAverageMargin.toFixed(1)}%
              </span>
              <span>📊</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Profit Margin Spread</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-black dark:text-white">
                {profitSpread.toFixed(1)}%
              </span>
              <span>📏</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Absolute Profit Spread</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-black dark:text-white">
                ₹{absoluteProfitSpread.toLocaleString('en-IN')}
              </span>
              <span>💰</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Variance Status</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getStatusColor(variancePercentage)}`}>
                {variancePercentage.toFixed(1)}% variance
              </span>
              <span>{variancePercentage <= 20 ? '✅' : variancePercentage <= 30 ? '⚠️' : '🚨'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Profit Margin Ranking */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          💰 Absolute Profit Ranking (Highest to Lowest Profitability)
        </h2>
        <div className="space-y-3">
          {profitMarginData
            .sort((a, b) => b.absoluteProfit - a.absoluteProfit)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(Math.abs(location.varianceFromAverage))}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-gray-600">{getRankIcon(index + 1)} #{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span>{getPerformanceIcon(location.profitabilityTier)}</span>
                  <span className="text-xs font-normal text-gray-500">
                    {location.profitabilityTier}
                  </span>
                  <span>{getVarianceIcon(location.varianceCategory)}</span>
                  <span className="text-xs font-normal text-gray-400">
                    {location.varianceCategory}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-black dark:text-white">
                    ₹{location.absoluteProfit.toLocaleString('en-IN')} / month
                  </div>
                  <div className="text-xs font-normal text-gray-500">
                    {location.profitMargin.toFixed(1)}% margin | {location.varianceFromAverage > 0 ? '+' : ''}{location.varianceFromAverage.toFixed(1)}% vs avg
                  </div>
                </div>
              </div>
              
              {/* Revenue to Profit Waterfall */}
              <div className="grid grid-cols-6 gap-2 mb-3 p-2 bg-white dark:bg-gray-800 rounded border">
                <div className="text-center">
                  <div className="text-xs font-normal text-gray-500">Revenue</div>
                  <div className="text-xs font-bold text-green-600">
                    ₹{(location.monthlyRevenue / 1000).toFixed(0)}K
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs font-normal text-gray-500">Labor</div>
                  <div className="text-xs font-bold text-red-500">
                    -₹{(location.expenseBreakdown.labor / 1000).toFixed(0)}K
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs font-normal text-gray-500">COGS</div>
                  <div className="text-xs font-bold text-red-500">
                    -₹{(location.expenseBreakdown.cogs / 1000).toFixed(0)}K
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs font-normal text-gray-500">Rent</div>
                  <div className="text-xs font-bold text-red-500">
                    -₹{(location.expenseBreakdown.rent / 1000).toFixed(0)}K
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs font-normal text-gray-500">Other</div>
                  <div className="text-xs font-bold text-red-500">
                    -₹{((location.expenseBreakdown.utilities + location.expenseBreakdown.other) / 1000).toFixed(0)}K
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs font-normal text-gray-500">Net Profit</div>
                  <div className={`text-xs font-bold ${getStatusColor(Math.abs(location.varianceFromAverage))}`}>
                    ₹{(location.netProfit / 1000).toFixed(0)}K
                  </div>
                </div>
              </div>

              {/* Performance Analysis */}
              <div className="mt-3 p-2 bg-white dark:bg-gray-800 rounded border">
                <h4 className="text-xs font-bold text-gray-600 mb-2">
                  🔍 Profit Analysis & {location.profitabilityTier === 'Top Performer' ? 'Replication Strategies' : location.profitabilityTier === 'Solid Performer' ? 'Improvement Opportunities' : 'Intervention Priorities'}
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-500">Profit Gap:</span>
                      <span className={`font-bold ${location.analysisInsights.profitGap > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {location.analysisInsights.profitGap > 0 ? '+' : ''}₹{Math.abs(location.analysisInsights.profitGap).toLocaleString('en-IN')}
                      </span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Margin Variance:</span>
                      <span className={`font-bold ${getStatusColor(Math.abs(location.varianceFromAverage))}`}>
                        {location.varianceFromAverage > 0 ? '+' : ''}{location.varianceFromAverage.toFixed(1)}%
                      </span>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-gray-600 mb-1">
                      {location.profitabilityTier === 'Top Performer' ? 'Strength Factors:' : location.profitabilityTier === 'Solid Performer' ? 'Strength Factors:' : 'Challenge Areas:'}
                    </h5>
                    <ul className="text-xs text-gray-500 space-y-0.5">
                      {(location.analysisInsights.strengthFactors || location.analysisInsights.challengeAreas || []).map((factor: string, idx: number) => (
                        <li key={idx}>• {factor}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Items */}
              <div className="mt-3 p-2 bg-gray-50 dark:bg-gray-800 rounded">
                <h4 className="text-xs font-bold text-gray-600 mb-2">
                  📋 {location.profitabilityTier === 'Top Performer' ? 'Replication Strategies' : location.profitabilityTier === 'Solid Performer' ? 'Improvement Opportunities' : 'Intervention Priorities'}
                </h4>
                <ul className="text-xs text-gray-500 space-y-0.5">
                  {(location.analysisInsights.replicationStrategies || location.analysisInsights.improvementOpportunities || location.analysisInsights.interventionPriorities || []).map((action: string, idx: number) => (
                    <li key={idx}>• {action}</li>
                  ))}
                </ul>
              </div>

              {/* Monthly Trend */}
              <div className="mt-3 p-2 bg-gray-50 dark:bg-gray-800 rounded">
                <h4 className="text-xs font-bold text-gray-600 mb-2">📈 3-Month Profit Trend</h4>
                <div className="flex justify-between">
                  {location.monthlyTrend.map((month, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-xs font-bold text-gray-600">{month.month}</div>
                      <div className="text-xs font-bold text-black dark:text-white">
                        ₹{(month.netProfit / 1000).toFixed(0)}K
                      </div>
                      <div className={`text-xs font-bold ${getStatusColor(Math.abs(month.variance))}`}>
                        {month.profitMargin.toFixed(1)}%
                      </div>
                      <div className="text-xs font-normal text-gray-500">
                        {month.variance > 0 ? '+' : ''}{month.variance.toFixed(1)}% vs avg
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
              <li>• Monthly net profit by location</li>
              <li>• Revenue and total expense breakdown</li>
              <li>• Location-wise profitability ranking</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Monthly (1st of each month)</li>
              <li>• Alert if &gt;30% variance</li>
              <li>• Resource allocation analysis</li>
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
            • Account for location age/maturity; new locations may have lower profit initially
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Consider market positioning and local competition impact on profitability
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Factor in seasonal variations and local economic conditions
          </p>
        </div>
      </div>

      {/* Users & Access */}
      <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-lg border border-gray-200">
        <h2 className="text-xs font-bold text-black dark:text-white mb-2">
          👥 Authorized Users
        </h2>
        <p className="text-xs font-normal text-gray-500">
          Owner, CFO
        </p>
      </div>
    </div>
  )
}