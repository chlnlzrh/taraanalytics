import { RESTAURANTS } from '@/lib/restaurant-data'

export default function CustomerSatisfactionSpreadKPI() {
  // CMP_008 Customer Satisfaction Spread - Exact specifications from restaurant_kpi_metrics_127.txt
  const satisfactionData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri - Highest rated
      googleRating: 4.6,
      zomatoRating: 4.5,
      swiggyRating: 4.4,
      averageRating: 4.5, // Average of all platforms
      npsScore: 72, // Net Promoter Score
      chainAverageRating: 4.2, // Average of all 3 locations
      chainAverageNPS: 58, // Average NPS across locations
      ratingSpread: 0.3, // Difference from lowest rated location
      npsSpread: 22, // Difference from lowest NPS location
      spreadStatus: 'good', // Within 0.3 star target
      rankPosition: 1,
      performanceCategory: 'Excellence Leader',
      satisfactionTier: 'Brand Ambassador',
      analysisInsights: {
        ratingGap: 0.3, // 0.3 stars above chain average
        npsGap: 14, // 14 points above chain average
        strengthAreas: [
          'Consistently high ratings across all delivery platforms',
          'Premium service quality matching location prestige',
          'Strong customer loyalty with high return rates'
        ],
        serviceExcellence: [
          'Staff training program exceeding chain standards',
          'Quality control processes ensuring consistency',
          'Customer feedback loop with rapid issue resolution'
        ]
      },
      platformBreakdown: {
        google: { rating: 4.6, reviews: 1247, trend: '+0.1' },
        zomato: { rating: 4.5, reviews: 892, trend: '+0.1' },
        swiggy: { rating: 4.4, reviews: 2156, trend: 'stable' }
      },
      complaintAnalysis: {
        totalComplaints: 12, // Last 30 days
        resolvedComplaints: 11,
        resolutionRate: 91.7,
        commonIssues: [
          'Delivery timing during peak hours (3 complaints)',
          'Parking availability (2 complaints)',
          'Premium pricing perception (1 complaint)'
        ]
      },
      monthlyTrend: [
        { month: 'Aug', rating: 4.3, nps: 69, spread: 0.2 },
        { month: 'Sep', rating: 4.4, nps: 71, spread: 0.3 },
        { month: 'Oct', rating: 4.5, nps: 72, spread: 0.3 }
      ]
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram - Good performance
      googleRating: 4.3,
      zomatoRating: 4.2,
      swiggyRating: 4.1,
      averageRating: 4.2,
      npsScore: 58,
      chainAverageRating: 4.2,
      chainAverageNPS: 58,
      ratingSpread: 0.0, // Same as chain average
      npsSpread: 8, // 8 points above lowest
      spreadStatus: 'good', // Within target range
      rankPosition: 2,
      performanceCategory: 'Solid Performer',
      satisfactionTier: 'Chain Standard',
      analysisInsights: {
        ratingGap: 0.0, // Exactly at chain average
        npsGap: 0, // At chain average
        strengthAreas: [
          'Consistent service delivery meeting chain standards',
          'Balanced performance across all rating platforms',
          'Efficient operations with minimal customer issues'
        ],
        improvementOpportunities: [
          'Service excellence training from best performer',
          'Customer experience enhancement initiatives',
          'Loyalty program engagement optimization'
        ]
      },
      platformBreakdown: {
        google: { rating: 4.3, reviews: 987, trend: 'stable' },
        zomato: { rating: 4.2, reviews: 734, trend: '+0.1' },
        swiggy: { rating: 4.1, reviews: 1823, trend: 'stable' }
      },
      complaintAnalysis: {
        totalComplaints: 18,
        resolvedComplaints: 16,
        resolutionRate: 88.9,
        commonIssues: [
          'Order accuracy during busy periods (5 complaints)',
          'Wait time during peak hours (4 complaints)',
          'Food temperature maintenance (3 complaints)'
        ]
      },
      monthlyTrend: [
        { month: 'Aug', rating: 4.1, nps: 55, spread: -0.1 },
        { month: 'Sep', rating: 4.1, nps: 56, spread: 0.0 },
        { month: 'Oct', rating: 4.2, nps: 58, spread: 0.0 }
      ]
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat - Needs improvement
      googleRating: 4.0,
      zomatoRating: 4.1,
      swiggyRating: 4.2,
      averageRating: 4.1,
      npsScore: 50,
      chainAverageRating: 4.2,
      chainAverageNPS: 58,
      ratingSpread: -0.4, // 0.4 stars below highest
      npsSpread: -8, // 8 points below chain average
      spreadStatus: 'warning', // Above 0.3 star spread threshold
      rankPosition: 3,
      performanceCategory: 'Needs Attention',
      satisfactionTier: 'Improvement Required',
      analysisInsights: {
        ratingGap: -0.1, // 0.1 stars below chain average
        npsGap: -8, // 8 points below chain average
        challengeAreas: [
          'Inconsistent service quality during weather disruptions',
          'Limited seating capacity affecting customer experience',
          'Operational challenges during monsoon season'
        ],
        interventionPriorities: [
          'Service consistency training and standardization',
          'Weather mitigation strategies for outdoor seating',
          'Customer experience improvement initiatives'
        ]
      },
      platformBreakdown: {
        google: { rating: 4.0, reviews: 678, trend: '-0.1' },
        zomato: { rating: 4.1, reviews: 456, trend: 'stable' },
        swiggy: { rating: 4.2, reviews: 1234, trend: '+0.1' }
      },
      complaintAnalysis: {
        totalComplaints: 24,
        resolvedComplaints: 20,
        resolutionRate: 83.3,
        commonIssues: [
          'Weather-related service disruptions (8 complaints)',
          'Seating availability during peak times (6 complaints)',
          'Order delays during rain (4 complaints)'
        ]
      },
      monthlyTrend: [
        { month: 'Aug', rating: 4.0, nps: 47, spread: -0.3 },
        { month: 'Sep', rating: 4.0, nps: 48, spread: -0.4 },
        { month: 'Oct', rating: 4.1, nps: 50, spread: -0.4 }
      ]
    }
  ]

  const chainHighestRating = Math.max(...satisfactionData.map(d => d.averageRating))
  const chainLowestRating = Math.min(...satisfactionData.map(d => d.averageRating))
  const overallRatingSpread = chainHighestRating - chainLowestRating
  const chainHighestNPS = Math.max(...satisfactionData.map(d => d.npsScore))
  const chainLowestNPS = Math.min(...satisfactionData.map(d => d.npsScore))
  const overallNPSSpread = chainHighestNPS - chainLowestNPS
  const chainAverageRating = satisfactionData.reduce((sum, item) => sum + item.averageRating, 0) / satisfactionData.length
  const chainAverageNPS = satisfactionData.reduce((sum, item) => sum + item.npsScore, 0) / satisfactionData.length

  const getSpreadStatusColor = (spread: number) => {
    if (spread <= 0.3) return 'text-green-600'
    if (spread <= 0.5) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getSpreadStatusBg = (spread: number) => {
    if (spread <= 0.3) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (spread <= 0.5) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getRatingColor = (rating: number) => {
    if (rating >= 4.5) return 'text-green-600'
    if (rating >= 4.2) return 'text-blue-600'
    if (rating >= 4.0) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getNPSColor = (nps: number) => {
    if (nps >= 70) return 'text-green-600'
    if (nps >= 50) return 'text-blue-600'
    if (nps >= 30) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getPerformanceIcon = (category: string) => {
    if (category === 'Excellence Leader') return '🏆'
    if (category === 'Solid Performer') return '👍'
    if (category === 'Needs Attention') return '🎯'
    return '📊'
  }

  const getRankIcon = (position: number) => {
    if (position === 1) return '🥇'
    if (position === 2) return '🥈'
    return '🥉'
  }

  const getTierIcon = (tier: string) => {
    if (tier === 'Brand Ambassador') return '⭐'
    if (tier === 'Chain Standard') return '📋'
    if (tier === 'Improvement Required') return '🔧'
    return '📊'
  }

  const getPlatformIcon = (platform: string) => {
    if (platform === 'google') return '🟦'
    if (platform === 'zomato') return '🔴'
    if (platform === 'swiggy') return '🟠'
    return '📱'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Customer Satisfaction Spread
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: CMP_008 | Rating Variance Analysis Between Highest and Lowest-Rated Locations
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
            <strong>Formula:</strong> Difference between highest and lowest-rated locations (NPS/online ratings)
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Spread &gt;0.5 stars on ratings or &gt;15 points on NPS indicates service quality or consistency issues.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> High-performing location offers service model to replicate; low-performing requires training intervention.
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
            <div className="text-xs font-normal text-green-600">&lt;0.3 star spread</div>
            <div className="text-xs font-normal text-green-500">(Tight clustering on ratings)</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">0.3–0.5 star spread</div>
            <div className="text-xs font-normal text-yellow-500">(Needs attention)</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&gt;0.5 star spread</div>
            <div className="text-xs font-normal text-red-500">(Brand risk)</div>
          </div>
        </div>
      </div>

      {/* Chain Summary */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          📈 Chain Customer Satisfaction Summary
        </h2>
        <div className="grid grid-cols-4 gap-6">
          <div>
            <span className="text-xs font-normal text-gray-500">Chain Average Rating</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getRatingColor(chainAverageRating)}`}>
                {chainAverageRating.toFixed(1)} ⭐
              </span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Rating Spread</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getSpreadStatusColor(overallRatingSpread)}`}>
                {overallRatingSpread.toFixed(1)} stars
              </span>
              <span>{overallRatingSpread <= 0.3 ? '✅' : overallRatingSpread <= 0.5 ? '⚠️' : '🚨'}</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Chain Average NPS</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getNPSColor(chainAverageNPS)}`}>
                {chainAverageNPS.toFixed(0)}
              </span>
              <span>📊</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">NPS Spread</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${overallNPSSpread <= 15 ? 'text-green-600' : overallNPSSpread <= 25 ? 'text-yellow-600' : 'text-red-600'}`}>
                {overallNPSSpread} points
              </span>
              <span>📏</span>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Satisfaction Ranking */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          ⭐ Customer Satisfaction Ranking (Highest to Lowest Rated)
        </h2>
        <div className="space-y-3">
          {satisfactionData
            .sort((a, b) => b.averageRating - a.averageRating)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getSpreadStatusBg(Math.abs(location.ratingSpread))}`}>
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
                  <span>{getTierIcon(location.satisfactionTier)}</span>
                  <span className="text-xs font-normal text-gray-400">
                    {location.satisfactionTier}
                  </span>
                </div>
                <div className="text-right">
                  <div className={`text-xs font-bold ${getRatingColor(location.averageRating)}`}>
                    {location.averageRating.toFixed(1)} ⭐ Average Rating
                  </div>
                  <div className={`text-xs font-normal ${getNPSColor(location.npsScore)}`}>
                    NPS: {location.npsScore} | Spread: {Math.abs(location.ratingSpread).toFixed(1)} stars
                  </div>
                </div>
              </div>
              
              {/* Platform Rating Breakdown */}
              <div className="grid grid-cols-3 gap-2 mb-3 p-2 bg-white dark:bg-gray-800 rounded border">
                {Object.entries(location.platformBreakdown).map(([platform, data]) => (
                  <div key={platform} className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <span>{getPlatformIcon(platform)}</span>
                      <div className="text-xs font-normal text-gray-500 capitalize">{platform}</div>
                    </div>
                    <div className={`text-xs font-bold ${getRatingColor(data.rating)}`}>
                      {data.rating.toFixed(1)} ⭐
                    </div>
                    <div className="text-xs font-normal text-gray-400">
                      {data.reviews} reviews | {data.trend}
                    </div>
                  </div>
                ))}
              </div>

              {/* NPS and Complaints Analysis */}
              <div className="grid grid-cols-2 gap-4 mb-3 p-2 bg-white dark:bg-gray-800 rounded border">
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-2">📊 NPS Analysis</h4>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-500">NPS Score:</span>
                    <span className={`font-bold ${getNPSColor(location.npsScore)}`}>
                      {location.npsScore}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">vs Chain Avg:</span>
                    <span className={`font-bold ${location.analysisInsights.npsGap >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {location.analysisInsights.npsGap > 0 ? '+' : ''}{location.analysisInsights.npsGap}
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-2">🔧 Complaints (30 days)</h4>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-500">Total:</span>
                    <span className="font-bold text-gray-600">{location.complaintAnalysis.totalComplaints}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Resolution Rate:</span>
                    <span className={`font-bold ${location.complaintAnalysis.resolutionRate >= 90 ? 'text-green-600' : location.complaintAnalysis.resolutionRate >= 80 ? 'text-yellow-600' : 'text-red-600'}`}>
                      {location.complaintAnalysis.resolutionRate.toFixed(1)}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Performance Analysis */}
              <div className="mt-3 p-2 bg-white dark:bg-gray-800 rounded border">
                <h4 className="text-xs font-bold text-gray-600 mb-2">
                  🔍 Satisfaction Analysis & {location.performanceCategory === 'Excellence Leader' ? 'Service Excellence Factors' : location.performanceCategory === 'Solid Performer' ? 'Improvement Opportunities' : 'Challenge Areas'}
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-500">Rating Gap:</span>
                      <span className={`font-bold ${location.analysisInsights.ratingGap >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {location.analysisInsights.ratingGap > 0 ? '+' : ''}{location.analysisInsights.ratingGap.toFixed(1)} ⭐
                      </span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Spread Status:</span>
                      <span className={`font-bold ${getSpreadStatusColor(Math.abs(location.ratingSpread))}`}>
                        {Math.abs(location.ratingSpread).toFixed(1)} stars
                      </span>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-gray-600 mb-1">
                      {location.performanceCategory === 'Excellence Leader' ? 'Strength Areas:' : location.performanceCategory === 'Solid Performer' ? 'Strength Areas:' : 'Challenge Areas:'}
                    </h5>
                    <ul className="text-xs text-gray-500 space-y-0.5">
                      {(location.analysisInsights.strengthAreas || location.analysisInsights.challengeAreas || []).map((area: string, idx: number) => (
                        <li key={idx}>• {area}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Common Issues */}
              <div className="mt-3 p-2 bg-gray-50 dark:bg-gray-800 rounded">
                <h4 className="text-xs font-bold text-gray-600 mb-2">
                  🚩 Most Common Customer Issues (Last 30 Days)
                </h4>
                <ul className="text-xs text-gray-500 space-y-0.5">
                  {location.complaintAnalysis.commonIssues.map((issue: string, idx: number) => (
                    <li key={idx}>• {issue}</li>
                  ))}
                </ul>
              </div>

              {/* Action Items */}
              <div className="mt-3 p-2 bg-gray-50 dark:bg-gray-800 rounded">
                <h4 className="text-xs font-bold text-gray-600 mb-2">
                  📋 {location.performanceCategory === 'Excellence Leader' ? 'Service Excellence Practices' : location.performanceCategory === 'Solid Performer' ? 'Improvement Opportunities' : 'Intervention Priorities'}
                </h4>
                <ul className="text-xs text-gray-500 space-y-0.5">
                  {(location.analysisInsights.serviceExcellence || location.analysisInsights.improvementOpportunities || location.analysisInsights.interventionPriorities || []).map((action: string, idx: number) => (
                    <li key={idx}>• {action}</li>
                  ))}
                </ul>
              </div>

              {/* Monthly Trend */}
              <div className="mt-3 p-2 bg-gray-50 dark:bg-gray-800 rounded">
                <h4 className="text-xs font-bold text-gray-600 mb-2">📈 3-Month Satisfaction Trend</h4>
                <div className="flex justify-between">
                  {location.monthlyTrend.map((month, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-xs font-bold text-gray-600">{month.month}</div>
                      <div className={`text-xs font-bold ${getRatingColor(month.rating)}`}>
                        {month.rating.toFixed(1)} ⭐
                      </div>
                      <div className={`text-xs font-bold ${getNPSColor(month.nps)}`}>
                        NPS: {month.nps}
                      </div>
                      <div className="text-xs font-normal text-gray-500">
                        Spread: {Math.abs(month.spread).toFixed(1)}
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
              <li>• Online ratings by location (Google/Zomato/Swiggy)</li>
              <li>• NPS by location from customer surveys</li>
              <li>• Customer complaint tracking and resolution data</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Monthly (1st of each month)</li>
              <li>• Alert if &gt;0.5 star spread</li>
              <li>• Complaint theme analysis</li>
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
            • Online ratings very public in India; low-rated locations risk brand damage chain-wide
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Platform-specific rating strategies (Google for dine-in, Zomato/Swiggy for delivery)
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Cultural sensitivity in service delivery and complaint resolution
          </p>
        </div>
      </div>

      {/* Users & Access */}
      <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-lg border border-gray-200">
        <h2 className="text-xs font-bold text-black dark:text-white mb-2">
          👥 Authorized Users
        </h2>
        <p className="text-xs font-normal text-gray-500">
          Manager, Owner
        </p>
      </div>
    </div>
  )
}