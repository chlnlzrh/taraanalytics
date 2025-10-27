import { RESTAURANTS } from '@/lib/restaurant-data'

export default function EBITDAMarginLocationKPI() {
  // CMP_006 EBITDA Margin by Location - Exact specifications from restaurant_kpi_metrics_127.txt
  const ebitdaMarginData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri - Highest performer
      monthlyRevenue: 485000,
      operatingExpenses: {
        laborCost: 155550, // 32.1%
        cogs: 145500, // 30.0%
        utilities: 19400, // 4.0%
        otherOpex: 24250, // 5.0%
        total: 344700
      },
      ebitda: 140300, // Revenue - Operating Expenses
      ebitdaMargin: 28.9, // (EBITDA / Revenue) * 100
      chainAverage: 22.4, // Average of all 3 locations
      variance: 6.5, // +6.5% above chain average
      status: 'good', // Above 12-15% target range
      rankPosition: 1,
      performanceCategory: 'High Performer',
      profitabilityTier: 'Margin-Enhancing',
      gapAnalysis: {
        ebitdaGap: 87800, // ₹87,800 above average EBITDA
        marginPoints: 6.5,
        strengthAreas: [
          'Premium pricing power in diplomatic area',
          'High-value corporate catering contracts',
          'Efficient space utilization despite higher labor costs'
        ],
        replicationOpportunities: [
          'Corporate client acquisition strategy',
          'Premium menu positioning',
          'Value-added service offerings'
        ]
      },
      expenseBreakdown: {
        laborPercent: 32.1,
        cogsPercent: 30.0,
        utilitiesPercent: 4.0,
        otherPercent: 5.0
      },
      monthlyTrend: [
        { month: 'Aug', ebitdaMargin: 27.5, variance: 5.1 },
        { month: 'Sep', ebitdaMargin: 28.2, variance: 5.8 },
        { month: 'Oct', ebitdaMargin: 28.9, variance: 6.5 }
      ]
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram - Average performer
      monthlyRevenue: 395000,
      operatingExpenses: {
        laborCost: 110600, // 28.0%
        cogs: 126400, // 32.0%
        utilities: 15800, // 4.0%
        otherOpex: 19750, // 5.0%
        total: 272550
      },
      ebitda: 122450,
      ebitdaMargin: 31.0,
      chainAverage: 22.4,
      variance: 8.6, // +8.6% above chain average
      status: 'good', // Above 12-15% target range
      rankPosition: 2,
      performanceCategory: 'High Performer',
      profitabilityTier: 'Margin-Enhancing',
      gapAnalysis: {
        ebitdaGap: 56200, // ₹56,200 above average EBITDA
        marginPoints: 8.6,
        strengthAreas: [
          'Most efficient labor cost management',
          'Optimized operational processes',
          'Strong cost control across all categories'
        ],
        replicationOpportunities: [
          'Labor scheduling optimization model',
          'Vendor negotiation strategies',
          'Process standardization methods'
        ]
      },
      expenseBreakdown: {
        laborPercent: 28.0,
        cogsPercent: 32.0,
        utilitiesPercent: 4.0,
        otherPercent: 5.0
      },
      monthlyTrend: [
        { month: 'Aug', ebitdaMargin: 29.8, variance: 7.4 },
        { month: 'Sep', ebitdaMargin: 30.4, variance: 8.0 },
        { month: 'Oct', ebitdaMargin: 31.0, variance: 8.6 }
      ]
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat - Needs intervention
      monthlyRevenue: 365000,
      operatingExpenses: {
        laborCost: 106950, // 29.3%
        cogs: 131400, // 36.0%
        utilities: 18250, // 5.0%
        otherOpex: 21900, // 6.0%
        total: 278500
      },
      ebitda: 86500,
      ebitdaMargin: 23.7,
      chainAverage: 22.4,
      variance: 1.3, // +1.3% above chain average but still below target
      status: 'warning', // Below 12-15% target range, needs attention
      rankPosition: 3,
      performanceCategory: 'Below Target',
      profitabilityTier: 'Requires Intervention',
      gapAnalysis: {
        ebitdaGap: -35950, // ₹35,950 below high performer average
        marginPoints: -5.2, // 5.2% below best performer
        weaknessAreas: [
          'Highest COGS percentage (36%)',
          'Weather-dependent operations affecting efficiency',
          'Limited seating capacity constraining revenue'
        ],
        interventionPriorities: [
          'COGS optimization and supplier renegotiation',
          'Capacity utilization improvement',
          'Weather mitigation strategies'
        ]
      },
      expenseBreakdown: {
        laborPercent: 29.3,
        cogsPercent: 36.0,
        utilitiesPercent: 5.0,
        otherPercent: 6.0
      },
      monthlyTrend: [
        { month: 'Aug', ebitdaMargin: 22.1, variance: -0.3 },
        { month: 'Sep', ebitdaMargin: 22.9, variance: 0.5 },
        { month: 'Oct', ebitdaMargin: 23.7, variance: 1.3 }
      ]
    }
  ]

  const chainTotalRevenue = ebitdaMarginData.reduce((sum, item) => sum + item.monthlyRevenue, 0)
  const chainTotalEBITDA = ebitdaMarginData.reduce((sum, item) => sum + item.ebitda, 0)
  const chainAverageMargin = (chainTotalEBITDA / chainTotalRevenue) * 100
  const marginSpread = Math.max(...ebitdaMarginData.map(d => d.ebitdaMargin)) - Math.min(...ebitdaMarginData.map(d => d.ebitdaMargin))

  const getStatusColor = (margin: number) => {
    if (margin >= 15) return 'text-green-600'
    if (margin >= 12) return 'text-yellow-600'
    if (margin >= 8) return 'text-orange-600'
    return 'text-red-600'
  }

  const getStatusBg = (margin: number) => {
    if (margin >= 15) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (margin >= 12) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    if (margin >= 8) return 'bg-orange-50 dark:bg-orange-900/20 border-orange-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getPerformanceIcon = (category: string) => {
    if (category === 'High Performer') return '🏆'
    if (category === 'Below Target') return '🎯'
    return '⚖️'
  }

  const getRankIcon = (position: number) => {
    if (position === 1) return '🥇'
    if (position === 2) return '🥈'
    return '🥉'
  }

  const getTierIcon = (tier: string) => {
    if (tier === 'Margin-Enhancing') return '💰'
    if (tier === 'Requires Intervention') return '🔧'
    return '📊'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            EBITDA Margin by Location
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: CMP_006 | Comparative Analysis of Location Profitability Performance
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
            <strong>Formula:</strong> Calculate and rank EBITDA Margin % for all 3 locations
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Reveals which locations are truly profitable vs. which are margin-dilutive to chain average.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> High performers worth replicating; low performers require urgent intervention.
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
            <div className="text-xs font-normal text-green-600">12–15% EBITDA margin</div>
            <div className="text-xs font-normal text-green-500">(Healthy profitability)</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">8–12% margin</div>
            <div className="text-xs font-normal text-yellow-500">(Below target)</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&lt;8% margin</div>
            <div className="text-xs font-normal text-red-500">(Concerning)</div>
          </div>
        </div>
      </div>

      {/* Chain Summary */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          📈 Chain EBITDA Performance Summary
        </h2>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <span className="text-xs font-normal text-gray-500">Chain Average EBITDA Margin</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-black dark:text-white">
                {chainAverageMargin.toFixed(1)}%
              </span>
              <span>📊</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Margin Performance Spread</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-black dark:text-white">
                {marginSpread.toFixed(1)}%
              </span>
              <span>📏</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">High Performers</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-green-600">
                {ebitdaMarginData.filter(d => d.ebitdaMargin >= 15).length} of {ebitdaMarginData.length}
              </span>
              <span>🏆</span>
            </div>
          </div>
        </div>
      </div>

      {/* EBITDA Margin Ranking */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 EBITDA Margin Ranking (Highest to Lowest Profitability)
        </h2>
        <div className="space-y-3">
          {ebitdaMarginData
            .sort((a, b) => b.ebitdaMargin - a.ebitdaMargin)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.ebitdaMargin)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-gray-600">{getRankIcon(index + 1)} #{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span>{getPerformanceIcon(location.performanceCategory)}</span>
                  <span className="text-xs font-normal text-gray-500">
                    {location.performanceCategory}
                  </span>
                  <span>{getTierIcon(location.profitabilityTier)}</span>
                  <span className="text-xs font-normal text-gray-400">
                    {location.profitabilityTier}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-black dark:text-white">
                    {location.ebitdaMargin.toFixed(1)}% EBITDA Margin
                  </div>
                  <div className="text-xs font-normal text-gray-500">
                    ₹{location.ebitda.toLocaleString('en-IN')} EBITDA
                  </div>
                </div>
              </div>
              
              {/* Revenue & Expense Waterfall */}
              <div className="grid grid-cols-5 gap-2 mb-3 p-2 bg-white dark:bg-gray-800 rounded border">
                <div className="text-center">
                  <div className="text-xs font-normal text-gray-500">Revenue</div>
                  <div className="text-xs font-bold text-green-600">
                    ₹{(location.monthlyRevenue / 1000).toFixed(0)}K
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs font-normal text-gray-500">Labor</div>
                  <div className="text-xs font-bold text-red-500">
                    -{location.expenseBreakdown.laborPercent.toFixed(1)}%
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs font-normal text-gray-500">COGS</div>
                  <div className="text-xs font-bold text-red-500">
                    -{location.expenseBreakdown.cogsPercent.toFixed(1)}%
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs font-normal text-gray-500">Other</div>
                  <div className="text-xs font-bold text-red-500">
                    -{(location.expenseBreakdown.utilitiesPercent + location.expenseBreakdown.otherPercent).toFixed(1)}%
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs font-normal text-gray-500">EBITDA</div>
                  <div className={`text-xs font-bold ${getStatusColor(location.ebitdaMargin)}`}>
                    {location.ebitdaMargin.toFixed(1)}%
                  </div>
                </div>
              </div>

              {/* Performance Analysis */}
              <div className="mt-3 p-2 bg-white dark:bg-gray-800 rounded border">
                <h4 className="text-xs font-bold text-gray-600 mb-2">
                  🔍 Profitability Analysis & {location.performanceCategory === 'High Performer' ? 'Replication Opportunities' : 'Intervention Priorities'}
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-500">EBITDA Gap:</span>
                      <span className={`font-bold ${location.gapAnalysis.ebitdaGap > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {location.gapAnalysis.ebitdaGap > 0 ? '+' : ''}₹{Math.abs(location.gapAnalysis.ebitdaGap).toLocaleString('en-IN')}
                      </span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Margin Points:</span>
                      <span className={`font-bold ${getStatusColor(location.ebitdaMargin)}`}>
                        {location.gapAnalysis.marginPoints > 0 ? '+' : ''}{location.gapAnalysis.marginPoints.toFixed(1)}%
                      </span>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-gray-600 mb-1">
                      {location.performanceCategory === 'High Performer' ? 'Strength Areas:' : 'Key Issues:'}
                    </h5>
                    <ul className="text-xs text-gray-500 space-y-0.5">
                      {(location.gapAnalysis.strengthAreas || location.gapAnalysis.weaknessAreas || []).map((area: string, idx: number) => (
                        <li key={idx}>• {area}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Items */}
              <div className="mt-3 p-2 bg-gray-50 dark:bg-gray-800 rounded">
                <h4 className="text-xs font-bold text-gray-600 mb-2">
                  📋 {location.performanceCategory === 'High Performer' ? 'Replication Opportunities' : 'Intervention Priorities'}
                </h4>
                <ul className="text-xs text-gray-500 space-y-0.5">
                  {(location.gapAnalysis.replicationOpportunities || location.gapAnalysis.interventionPriorities || []).map((action: string, idx: number) => (
                    <li key={idx}>• {action}</li>
                  ))}
                </ul>
              </div>

              {/* Monthly Trend */}
              <div className="mt-3 p-2 bg-gray-50 dark:bg-gray-800 rounded">
                <h4 className="text-xs font-bold text-gray-600 mb-2">📈 3-Month EBITDA Margin Trend</h4>
                <div className="flex justify-between">
                  {location.monthlyTrend.map((month, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-xs font-bold text-gray-600">{month.month}</div>
                      <div className={`text-xs font-bold ${getStatusColor(month.ebitdaMargin)}`}>
                        {month.ebitdaMargin.toFixed(1)}%
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
              <li>• Monthly financials (revenue, operating expenses) by location</li>
              <li>• Labor cost, COGS, utilities, and other OpEx breakdown</li>
              <li>• EBITDA calculation and margin analysis</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Monthly (1st of each month)</li>
              <li>• Automated profitability ranking</li>
              <li>• Alert if margin &lt;8%</li>
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
            • Exclude rent if significantly variable; focus on controllable operating expenses
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Consider GST impact on margin calculations and supplier pricing
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Account for location-specific cost structures and market conditions
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