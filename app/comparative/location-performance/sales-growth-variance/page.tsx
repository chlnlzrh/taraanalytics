import { RESTAURANTS } from '@/lib/restaurant-data'

export default function SalesGrowthVarianceKPI() {
  // CMP_002 Same-Store Sales Growth Variance - Exact specifications from restaurant_kpi_metrics_127.txt
  const salesGrowthData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      currentPeriodRevenue: 485000, // October 2024
      previousPeriodRevenue: 445000, // October 2023
      sameStoreGrowth: 9.0, // +9.0% YoY growth
      status: 'good', // >2% target met
      rankPosition: 1,
      growthCategory: 'Fast Growing',
      playbook: {
        successFactors: [
          'Enhanced corporate catering program',
          'Premium menu item introduction',
          'Location-specific marketing campaigns'
        ],
        replicationOpportunities: [
          'Corporate tie-ups strategy',
          'Premium positioning approach',
          'Targeted local marketing'
        ]
      },
      quarterlyTrend: [
        { quarter: 'Q1 2024', growth: 7.2, revenue: 468000 },
        { quarter: 'Q2 2024', growth: 8.1, revenue: 472000 },
        { quarter: 'Q3 2024', growth: 8.8, revenue: 478000 },
        { quarter: 'Q4 2024', growth: 9.0, revenue: 485000 }
      ],
      interventionStatus: 'none', // No intervention needed
      maturityMonths: 28 // 28 months of operation
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      currentPeriodRevenue: 395000, // October 2024
      previousPeriodRevenue: 378000, // October 2023
      sameStoreGrowth: 4.5, // +4.5% YoY growth
      status: 'good', // >2% target met
      rankPosition: 2,
      growthCategory: 'Steady Growth',
      playbook: {
        successFactors: [
          'Consistent service quality improvements',
          'Local community engagement',
          'Delivery channel optimization'
        ],
        replicationOpportunities: [
          'Community engagement model',
          'Delivery efficiency practices',
          'Service quality protocols'
        ]
      },
      quarterlyTrend: [
        { quarter: 'Q1 2024', growth: 3.8, revenue: 385000 },
        { quarter: 'Q2 2024', growth: 4.1, revenue: 388000 },
        { quarter: 'Q3 2024', growth: 4.3, revenue: 392000 },
        { quarter: 'Q4 2024', growth: 4.5, revenue: 395000 }
      ],
      interventionStatus: 'none',
      maturityMonths: 24 // 24 months of operation
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      currentPeriodRevenue: 365000, // October 2024
      previousPeriodRevenue: 372000, // October 2023
      sameStoreGrowth: -1.9, // -1.9% YoY growth (declining)
      status: 'critical', // <0% declining
      rankPosition: 3,
      growthCategory: 'Declining',
      playbook: {
        successFactors: [],
        replicationOpportunities: [],
        interventionRequired: [
          'Menu optimization for weather-independent items',
          'Indoor seating expansion feasibility study',
          'Alternative revenue streams (events, private dining)'
        ]
      },
      quarterlyTrend: [
        { quarter: 'Q1 2024', growth: -0.5, revenue: 370000 },
        { quarter: 'Q2 2024', growth: -1.1, revenue: 368000 },
        { quarter: 'Q3 2024', growth: -1.6, revenue: 366000 },
        { quarter: 'Q4 2024', growth: -1.9, revenue: 365000 }
      ],
      interventionStatus: 'urgent', // Requires immediate intervention
      maturityMonths: 30 // 30 months of operation
    }
  ]

  const chainAverageGrowth = salesGrowthData.reduce((sum, item) => sum + item.sameStoreGrowth, 0) / salesGrowthData.length
  const locationsAboveTarget = salesGrowthData.filter(d => d.sameStoreGrowth > 2).length
  const locationsDecline = salesGrowthData.filter(d => d.sameStoreGrowth < 0).length

  const getGrowthStatusColor = (growth: number) => {
    if (growth > 2) return 'text-green-600'
    if (growth >= 0) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getGrowthStatusBg = (growth: number) => {
    if (growth > 2) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (growth >= 0) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getGrowthIcon = (growth: number) => {
    if (growth > 2) return '🚀'
    if (growth >= 0) return '📈'
    return '📉'
  }

  const getCategoryIcon = (category: string) => {
    if (category === 'Fast Growing') return '🚀'
    if (category === 'Steady Growth') return '📈'
    if (category === 'Declining') return '📉'
    return '⚖️'
  }

  const getInterventionIcon = (status: string) => {
    if (status === 'urgent') return '🚨'
    if (status === 'recommended') return '⚠️'
    return '✅'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Same-Store Sales Growth Variance
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: CMP_002 | YoY Growth Variance Analysis Across Locations
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
            <strong>Formula:</strong> SSSG % by location; identify fastest and slowest growing units
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> YoY growth variance across locations. Fast-growing locations offer replication playbook; stagnant require intervention.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> Reveals which units are gaining traction; informs scaling strategy and identifies intervention needs.
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
            <div className="text-xs font-normal text-green-600">All locations &gt;2% YoY</div>
            <div className="text-xs font-normal text-green-500">(Healthy growth)</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">0–2% growth</div>
            <div className="text-xs font-normal text-yellow-500">(Stagnation)</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&lt;0% (declining)</div>
            <div className="text-xs font-normal text-red-500">(Immediate intervention)</div>
          </div>
        </div>
      </div>

      {/* Chain Growth Summary */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          📈 Chain Growth Performance Summary
        </h2>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <span className="text-xs font-normal text-gray-500">Chain Average Growth</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getGrowthStatusColor(chainAverageGrowth)}`}>
                {chainAverageGrowth > 0 ? '+' : ''}{chainAverageGrowth.toFixed(1)}%
              </span>
              <span>{getGrowthIcon(chainAverageGrowth)}</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Locations Above Target</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-green-600">
                {locationsAboveTarget} of {salesGrowthData.length}
              </span>
              <span>🎯</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Declining Locations</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-red-600">
                {locationsDecline} locations
              </span>
              <span>🚨</span>
            </div>
          </div>
        </div>
      </div>

      {/* Growth Performance Ranking */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Growth Performance Ranking (YoY Same-Store Sales Growth)
        </h2>
        <div className="space-y-3">
          {salesGrowthData
            .sort((a, b) => b.sameStoreGrowth - a.sameStoreGrowth)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getGrowthStatusBg(location.sameStoreGrowth)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-gray-600">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span>{getCategoryIcon(location.growthCategory)}</span>
                  <span className="text-xs font-normal text-gray-500">
                    {location.growthCategory}
                  </span>
                  <span>{getInterventionIcon(location.interventionStatus)}</span>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-black dark:text-white">
                    ₹{location.currentPeriodRevenue.toLocaleString('en-IN')}
                  </div>
                  <div className={`text-xs font-bold ${getGrowthStatusColor(location.sameStoreGrowth)}`}>
                    {location.sameStoreGrowth > 0 ? '+' : ''}{location.sameStoreGrowth.toFixed(1)}% YoY
                  </div>
                </div>
              </div>
              
              {/* Success Playbook or Intervention Plan */}
              <div className="mt-3 p-2 bg-white dark:bg-gray-800 rounded border">
                {location.sameStoreGrowth > 0 ? (
                  <div>
                    <h4 className="text-xs font-bold text-green-600 mb-2">🎯 Success Playbook for Replication</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h5 className="text-xs font-bold text-gray-600 mb-1">Success Factors:</h5>
                        <ul className="text-xs text-gray-500 space-y-0.5">
                          {location.playbook.successFactors.map((factor, idx) => (
                            <li key={idx}>• {factor}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-xs font-bold text-gray-600 mb-1">Replication Opportunities:</h5>
                        <ul className="text-xs text-gray-500 space-y-0.5">
                          {location.playbook.replicationOpportunities.map((opportunity, idx) => (
                            <li key={idx}>• {opportunity}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <h4 className="text-xs font-bold text-red-600 mb-2">🚨 Intervention Plan Required</h4>
                    <div>
                      <h5 className="text-xs font-bold text-gray-600 mb-1">Required Actions:</h5>
                      <ul className="text-xs text-gray-500 space-y-0.5">
                        {location.playbook.interventionRequired?.map((action, idx) => (
                          <li key={idx}>• {action}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {/* Quarterly Growth Trend */}
              <div className="mt-3 p-2 bg-gray-50 dark:bg-gray-800 rounded">
                <h4 className="text-xs font-bold text-gray-600 mb-2">📈 Quarterly Growth Trend</h4>
                <div className="flex justify-between">
                  {location.quarterlyTrend.map((quarter, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-xs font-bold text-gray-600">{quarter.quarter}</div>
                      <div className="text-xs font-normal text-black dark:text-white">
                        ₹{(quarter.revenue / 1000).toFixed(0)}K
                      </div>
                      <div className={`text-xs font-bold ${getGrowthStatusColor(quarter.growth)}`}>
                        {quarter.growth > 0 ? '+' : ''}{quarter.growth.toFixed(1)}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Store Maturity & Context */}
              <div className="mt-3 p-2 bg-blue-50 dark:bg-blue-900/20 rounded">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-xs font-bold text-blue-600">Store Maturity:</span>
                    <span className="text-xs font-normal text-blue-500 ml-1">
                      {location.maturityMonths} months
                    </span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-blue-600">Intervention Status:</span>
                    <span className={`text-xs font-normal ml-1 ${
                      location.interventionStatus === 'urgent' ? 'text-red-600' :
                      location.interventionStatus === 'recommended' ? 'text-yellow-600' :
                      'text-green-600'
                    }`}>
                      {location.interventionStatus === 'none' ? 'Not Required' : 
                       location.interventionStatus === 'urgent' ? 'Urgent' : 'Recommended'}
                    </span>
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
              <li>• PetPooja POS (historical revenue by location)</li>
              <li>• YoY comparison calculations</li>
              <li>• Same-store sales methodology</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Monthly (with prior year comparison)</li>
              <li>• Alert if location &lt;0% growth</li>
              <li>• Quarterly trend analysis</li>
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
            • Account for new locations (&lt;12 months); compare mature locations only for fair SSSG
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Factor in local market inflation and economic conditions
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Consider seasonal festivals and local events impact on growth
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