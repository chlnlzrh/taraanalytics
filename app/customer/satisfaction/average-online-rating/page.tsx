import { RESTAURANTS } from '@/lib/restaurant-data'

export default function AverageOnlineRatingKPI() {
  // CUS_011 Average Online Rating - Exact specifications from restaurant_kpi_metrics_127.txt
  const onlineRatingData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      consolidatedRating: 4.6,
      totalReviews: 842,
      status: 'good', // Above target 4.5
      platformBreakdown: {
        google: { rating: 4.7, reviews: 312, recentTrend: 'stable' },
        zomato: { rating: 4.5, reviews: 298, recentTrend: 'improving' },
        swiggy: { rating: 4.6, reviews: 232, recentTrend: 'stable' }
      },
      recentReviews: {
        positive: 245, // last 30 days
        negative: 18,
        responseRate: 85
      }
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      consolidatedRating: 4.3,
      totalReviews: 687,
      status: 'warning', // Warning range 4.0-4.5
      platformBreakdown: {
        google: { rating: 4.4, reviews: 256, recentTrend: 'declining' },
        zomato: { rating: 4.2, reviews: 234, recentTrend: 'stable' },
        swiggy: { rating: 4.3, reviews: 197, recentTrend: 'stable' }
      },
      recentReviews: {
        positive: 178,
        negative: 34,
        responseRate: 72
      }
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      consolidatedRating: 3.9,
      totalReviews: 523,
      status: 'critical', // Below critical threshold 4.0
      platformBreakdown: {
        google: { rating: 4.0, reviews: 198, recentTrend: 'declining' },
        zomato: { rating: 3.8, reviews: 187, recentTrend: 'declining' },
        swiggy: { rating: 3.9, reviews: 138, recentTrend: 'stable' }
      },
      recentReviews: {
        positive: 112,
        negative: 48,
        responseRate: 58
      }
    }
  ]

  const chainTotalReviews = onlineRatingData.reduce((sum, item) => sum + item.totalReviews, 0)
  const chainWeightedRating = onlineRatingData.reduce((sum, item) => sum + (item.consolidatedRating * item.totalReviews), 0) / chainTotalReviews
  const chainAverageResponseRate = onlineRatingData.reduce((sum, item) => sum + item.recentReviews.responseRate, 0) / onlineRatingData.length

  const getStatusColor = (rating: number) => {
    if (rating > 4.5) return 'text-green-600'
    if (rating >= 4.0) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (rating: number) => {
    if (rating > 4.5) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (rating >= 4.0) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getStatusIcon = (rating: number) => {
    if (rating > 4.5) return '⭐'
    if (rating >= 4.0) return '⚠️'
    return '🚨'
  }

  const getTrendIcon = (trend: string) => {
    if (trend === 'improving') return '📈'
    if (trend === 'declining') return '📉'
    return '➡️'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Average Online Rating
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: CUS_011 | Consolidated Rating Across Google, Zomato, and Swiggy
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
            <strong>Formula:</strong> Consolidated average of Google Maps, Zomato, and Swiggy ratings
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Critical in India; >4.5 drives new footfall, <3.8 becomes liability. Monitor daily by location.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> Online reputation directly impacts booking and delivery order volume; single bad review cascades.
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
            <div className="text-xs font-normal text-green-600">>4.5/5</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">4.0–4.5</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600"><4.0</div>
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
            <span className="text-xs font-normal text-gray-500">Total Online Reviews</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-black dark:text-white">
                {chainTotalReviews.toLocaleString('en-IN')}
              </span>
              <span>📝</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Chain Weighted Rating</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getStatusColor(chainWeightedRating)}`}>
                {chainWeightedRating.toFixed(2)}/5
              </span>
              <span>{getStatusIcon(chainWeightedRating)}</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Avg Response Rate</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-black dark:text-white">
                {chainAverageResponseRate.toFixed(0)}%
              </span>
              <span>💬</span>
            </div>
          </div>
        </div>
      </div>

      {/* Location Performance */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Performance (Online Reputation Analysis)
        </h2>
        <div className="space-y-3">
          {onlineRatingData
            .sort((a, b) => b.consolidatedRating - a.consolidatedRating)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.consolidatedRating)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span>{getStatusIcon(location.consolidatedRating)}</span>
                </div>
                <div className="text-right">
                  <div className={`text-xs font-bold ${getStatusColor(location.consolidatedRating)}`}>
                    {location.consolidatedRating.toFixed(1)}/5
                  </div>
                  <div className="text-xs font-normal text-gray-500">
                    {location.totalReviews} total reviews
                  </div>
                </div>
              </div>
              
              {/* Platform breakdown */}
              <div className="grid grid-cols-3 gap-4 mb-3">
                {Object.entries(location.platformBreakdown).map(([platform, data]) => (
                  <div key={platform} className="text-center">
                    <div className="text-xs font-normal text-gray-500 capitalize mb-1">{platform}</div>
                    <div className={`text-xs font-bold ${getStatusColor(data.rating)}`}>
                      {data.rating.toFixed(1)}/5
                    </div>
                    <div className="text-xs text-gray-400">
                      {data.reviews} reviews {getTrendIcon(data.recentTrend)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Recent review sentiment */}
              <div className="mt-3">
                <h4 className="text-xs font-bold text-gray-600 mb-2">Recent Reviews (30 days)</h4>
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center">
                    <div className="text-xs font-normal text-gray-500">Positive</div>
                    <div className="text-xs font-bold text-green-600">
                      {location.recentReviews.positive}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-normal text-gray-500">Negative</div>
                    <div className="text-xs font-bold text-red-600">
                      {location.recentReviews.negative}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-normal text-gray-500">Response Rate</div>
                    <div className="text-xs font-bold text-blue-600">
                      {location.recentReviews.responseRate}%
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
              <li>• Aggregator APIs (Zomato, Swiggy)</li>
              <li>• Google Reviews API</li>
              <li>• Manual aggregation</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Daily refresh</li>
              <li>• Real-time review monitoring</li>
              <li>• Alert if rating <4.0</li>
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
            • Platform-specific reputation management (Zomato Gold, Swiggy One)
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Festival season review patterns and response strategies
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Regional language review sentiment analysis
          </p>
        </div>
      </div>

      {/* Drill-down Options */}
      <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200">
        <h2 className="text-xs font-bold text-purple-900 dark:text-purple-300 mb-2">
          🔍 Available Drill-downs
        </h2>
        <div className="space-y-1">
          <p className="text-xs font-normal text-purple-800 dark:text-purple-300">
            • By platform (Google/Zomato/Swiggy)
          </p>
          <p className="text-xs font-normal text-purple-800 dark:text-purple-300">
            • By location comparison
          </p>
          <p className="text-xs font-normal text-purple-800 dark:text-purple-300">
            • By recent vs. all-time ratings
          </p>
          <p className="text-xs font-normal text-purple-800 dark:text-purple-300">
            • Review sentiment and theme analysis
          </p>
        </div>
      </div>

      {/* Users & Access */}
      <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-lg border border-gray-200">
        <h2 className="text-xs font-bold text-black dark:text-white mb-2">
          👥 Authorized Users
        </h2>
        <p className="text-xs font-normal text-gray-500">
          Manager, Owner, Marketing
        </p>
      </div>
    </div>
  )
}