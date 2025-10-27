import { RESTAURANTS } from '@/lib/restaurant-data'

export default function InternalQualityAuditKPI() {
  // QUA_002 Internal Quality Audit Score - Exact specifications from restaurant_kpi_metrics_127.txt
  const auditData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      overallScore: 92,
      auditDate: '2024-10-15',
      auditMonth: 'October 2024',
      categories: {
        foodSafety: 95,
        cleanliness: 89,
        presentation: 93,
        taste: 90,
        sopAdherence: 92
      },
      areas: {
        kitchen: 91,
        dining: 94,
        storage: 90
      },
      auditorName: 'Rajesh Verma (Manager)',
      trend: 'improving', // compared to last month (90)
      lastMonthScore: 90,
      status: 'excellent',
      actionItems: [
        'Improve kitchen cleanliness procedures',
        'Staff training on plating standards'
      ]
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram  
      overallScore: 87,
      auditDate: '2024-10-12',
      auditMonth: 'October 2024',
      categories: {
        foodSafety: 88,
        cleanliness: 85,
        presentation: 89,
        taste: 87,
        sopAdherence: 86
      },
      areas: {
        kitchen: 85,
        dining: 88,
        storage: 88
      },
      auditorName: 'Priya Singh (Manager)',
      trend: 'stable', // compared to last month (88)
      lastMonthScore: 88,
      status: 'warning',
      actionItems: [
        'Deep cleaning schedule for kitchen',
        'Review SOP compliance training',
        'Inventory organization improvement'
      ]
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      overallScore: 95,
      auditDate: '2024-10-10',
      auditMonth: 'October 2024',
      categories: {
        foodSafety: 96,
        cleanliness: 94,
        presentation: 95,
        taste: 96,
        sopAdherence: 94
      },
      areas: {
        kitchen: 96,
        dining: 95,
        storage: 94
      },
      auditorName: 'Amit Kumar (Manager)',
      trend: 'improving', // compared to last month (92)
      lastMonthScore: 92,
      status: 'excellent',
      actionItems: [
        'Maintain current standards',
        'Share best practices with other locations'
      ]
    }
  ]

  const chainAverageScore = auditData.reduce((sum, item) => sum + item.overallScore, 0) / auditData.length
  const excellentLocations = auditData.filter(item => item.overallScore >= 90).length
  const improvingLocations = auditData.filter(item => item.trend === 'improving').length
  const totalActionItems = auditData.reduce((sum, item) => sum + item.actionItems.length, 0)

  const getStatusColor = (score: number) => {
    if (score >= 90) return 'text-green-600'
    if (score >= 80) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (score: number) => {
    if (score >= 90) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (score >= 80) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getStatusIcon = (score: number) => {
    if (score >= 90) return '🟢'
    if (score >= 80) return '⚠️'
    return '🚨'
  }

  const getTrendIcon = (trend: string) => {
    if (trend === 'improving') return '📈'
    if (trend === 'declining') return '📉'
    return '➡️'
  }

  const getTrendColor = (trend: string) => {
    if (trend === 'improving') return 'text-green-600'
    if (trend === 'declining') return 'text-red-600'
    return 'text-gray-600'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Internal Quality Audit Score
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: QUA_002 | Early Warning System for Quality Control
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
            <strong>Formula:</strong> Monthly self-assessment across food safety, cleanliness, presentation, taste, SOP adherence (100-point scale)
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Standardized monthly checklist scored 0–100. Track trend; declining scores signal process breakdown.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> Early warning system before regulatory audit; enables proactive corrective action.
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
            <div className="text-xs font-normal text-green-600">&gt;90/100</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">80–90</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&lt;80</div>
          </div>
        </div>
      </div>

      {/* Chain Summary */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          📈 Chain Quality Audit Summary
        </h2>
        <div className="grid grid-cols-4 gap-6">
          <div>
            <span className="text-xs font-normal text-gray-500">Chain Average Score</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getStatusColor(chainAverageScore)}`}>
                {chainAverageScore.toFixed(1)}/100
              </span>
              <span>{getStatusIcon(chainAverageScore)}</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Excellent Locations</span>
            <div className="text-xs font-normal text-green-600">
              {excellentLocations}/3 locations ≥90
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Improving Trend</span>
            <div className="text-xs font-normal text-blue-600">
              {improvingLocations}/3 locations improving
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Action Items</span>
            <div className="text-xs font-normal text-orange-600">
              {totalActionItems} items pending
            </div>
          </div>
        </div>
      </div>

      {/* Location Quality Performance */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Quality Audit Ranking
        </h2>
        <div className="space-y-3">
          {auditData
            .sort((a, b) => b.overallScore - a.overallScore)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.overallScore)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span>{getStatusIcon(location.overallScore)}</span>
                  <span className={`text-xs font-normal ${getTrendColor(location.trend)}`}>
                    {getTrendIcon(location.trend)} {location.trend}
                  </span>
                </div>
                <div className="text-right">
                  <div className={`text-xs font-bold ${getStatusColor(location.overallScore)}`}>
                    {location.overallScore}/100
                  </div>
                  <div className="text-xs font-normal text-gray-500">
                    Overall Score
                  </div>
                </div>
              </div>
              
              {/* Audit categories */}
              <div className="grid grid-cols-5 gap-3 mb-3">
                <div className="text-center">
                  <div className="text-xs text-gray-500">Food Safety</div>
                  <div className={`text-xs font-bold ${getStatusColor(location.categories.foodSafety)}`}>
                    {location.categories.foodSafety}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-gray-500">Cleanliness</div>
                  <div className={`text-xs font-bold ${getStatusColor(location.categories.cleanliness)}`}>
                    {location.categories.cleanliness}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-gray-500">Presentation</div>
                  <div className={`text-xs font-bold ${getStatusColor(location.categories.presentation)}`}>
                    {location.categories.presentation}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-gray-500">Taste</div>
                  <div className={`text-xs font-bold ${getStatusColor(location.categories.taste)}`}>
                    {location.categories.taste}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-gray-500">SOP</div>
                  <div className={`text-xs font-bold ${getStatusColor(location.categories.sopAdherence)}`}>
                    {location.categories.sopAdherence}
                  </div>
                </div>
              </div>

              {/* Area breakdown */}
              <div className="grid grid-cols-3 gap-4 mb-3 text-xs">
                <div className="text-center">
                  <span className="text-gray-500">Kitchen:</span>
                  <div className={`font-bold ${getStatusColor(location.areas.kitchen)}`}>{location.areas.kitchen}</div>
                </div>
                <div className="text-center">
                  <span className="text-gray-500">Dining:</span>
                  <div className={`font-bold ${getStatusColor(location.areas.dining)}`}>{location.areas.dining}</div>
                </div>
                <div className="text-center">
                  <span className="text-gray-500">Storage:</span>
                  <div className={`font-bold ${getStatusColor(location.areas.storage)}`}>{location.areas.storage}</div>
                </div>
              </div>

              {/* Audit details */}
              <div className="grid grid-cols-3 gap-4 mb-3 text-xs">
                <div>
                  <span className="text-gray-500">Audit Date:</span>
                  <div className="font-normal text-black dark:text-white">{location.auditDate}</div>
                </div>
                <div>
                  <span className="text-gray-500">Auditor:</span>
                  <div className="font-normal text-black dark:text-white">{location.auditorName}</div>
                </div>
                <div>
                  <span className="text-gray-500">Last Month:</span>
                  <div className={`font-normal ${location.overallScore > location.lastMonthScore ? 'text-green-600' : location.overallScore < location.lastMonthScore ? 'text-red-600' : 'text-gray-600'}`}>
                    {location.lastMonthScore} ({location.overallScore > location.lastMonthScore ? '+' : ''}{location.overallScore - location.lastMonthScore})
                  </div>
                </div>
              </div>

              {/* Action items */}
              {location.actionItems.length > 0 && (
                <div className="mt-3 pt-2 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="text-xs font-bold text-gray-600 mb-1">Action Items</h4>
                  <ul className="space-y-1">
                    {location.actionItems.map((item, idx) => (
                      <li key={idx} className="text-xs text-gray-600">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Category Performance Analysis */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          📊 Category Performance Analysis
        </h2>
        <div className="space-y-3">
          {['foodSafety', 'cleanliness', 'presentation', 'taste', 'sopAdherence'].map((category) => {
            const categoryName = category.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())
            const chainAvg = auditData.reduce((sum, location) => sum + location.categories[category as keyof typeof location.categories], 0) / auditData.length
            const lowestScore = Math.min(...auditData.map(location => location.categories[category as keyof typeof location.categories]))
            const highestScore = Math.max(...auditData.map(location => location.categories[category as keyof typeof location.categories]))
            
            return (
              <div key={category} className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-black dark:text-white">{categoryName}</span>
                  <span className={`text-xs font-bold ${getStatusColor(chainAvg)}`}>
                    Chain Avg: {chainAvg.toFixed(1)}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4 text-xs">
                  <div>
                    <span className="text-gray-500">Highest:</span>
                    <span className="ml-1 font-normal text-green-600">{highestScore}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Lowest:</span>
                    <span className={`ml-1 font-normal ${getStatusColor(lowestScore)}`}>{lowestScore}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Range:</span>
                    <span className="ml-1 font-normal text-black dark:text-white">{highestScore - lowestScore} points</span>
                  </div>
                </div>
              </div>
            )
          })}
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
              <li>• Internal audit checklist (standardized form)</li>
              <li>• Manager sign-off and verification</li>
              <li>• Photo documentation of audit areas</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Monthly audit cycle</li>
              <li>• Alert: Red if &lt;80 or declining trend</li>
              <li>• Drill down: by audit category, by location, by area</li>
            </ul>
          </div>
        </div>
      </div>

      {/* India-Specific Considerations */}
      <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200">
        <h2 className="text-xs font-bold text-orange-900 dark:text-orange-300 mb-2">
          🇮🇳 India-Specific Quality Focus
        </h2>
        <div className="space-y-1">
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Focus on local taste preferences and spice handling procedures
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Climate-specific food storage and temperature control measures
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Seasonal ingredient quality and supply chain variations
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Local health department standards and cultural expectations
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