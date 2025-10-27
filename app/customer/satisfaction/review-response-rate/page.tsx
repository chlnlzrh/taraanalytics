import { RESTAURANTS } from '@/lib/restaurant-data'

export default function ReviewResponseRateKPI() {
  // CUS_014 Review Response Rate % - Exact specifications from restaurant_kpi_metrics_127.txt
  const responseData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      totalReviews: 85,
      reviewsRespondedWithin48h: 72,
      responseRate: 84.7,
      status: 'good', // Above 80%
      reviewsByPlatform: {
        google: { total: 35, responded: 32, rate: 91.4 },
        zomato: { total: 28, responded: 23, rate: 82.1 },
        swiggy: { total: 22, responded: 17, rate: 77.3 }
      },
      responseByRating: {
        fiveStars: { total: 45, responded: 42, rate: 93.3 },
        fourStars: { total: 20, responded: 18, rate: 90.0 },
        threeStars: { total: 12, responded: 8, rate: 66.7 },
        twoStars: { total: 5, responded: 3, rate: 60.0 },
        oneStar: { total: 3, responded: 1, rate: 33.3 }
      },
      avgResponseTime: 18, // hours
      monthlyTrend: [78, 82, 85, 83, 86, 84.7],
      ratingImprovement: 0.3 // rating increase after systematic responses
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      totalReviews: 120,
      reviewsRespondedWithin48h: 102,
      responseRate: 85.0,
      status: 'good', // Above 80%
      reviewsByPlatform: {
        google: { total: 48, responded: 44, rate: 91.7 },
        zomato: { total: 42, responded: 35, rate: 83.3 },
        swiggy: { total: 30, responded: 23, rate: 76.7 }
      },
      responseByRating: {
        fiveStars: { total: 65, responded: 62, rate: 95.4 },
        fourStars: { total: 28, responded: 26, rate: 92.9 },
        threeStars: { total: 18, responded: 12, rate: 66.7 },
        twoStars: { total: 6, responded: 2, rate: 33.3 },
        oneStar: { total: 3, responded: 0, rate: 0.0 }
      },
      avgResponseTime: 16, // hours
      monthlyTrend: [80, 83, 87, 85, 88, 85.0],
      ratingImprovement: 0.4
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      totalReviews: 95,
      reviewsRespondedWithin48h: 62,
      responseRate: 65.3,
      status: 'warning', // Between 60-80%
      reviewsByPlatform: {
        google: { total: 38, responded: 28, rate: 73.7 },
        zomato: { total: 32, responded: 19, rate: 59.4 },
        swiggy: { total: 25, responded: 15, rate: 60.0 }
      },
      responseByRating: {
        fiveStars: { total: 42, responded: 35, rate: 83.3 },
        fourStars: { total: 25, responded: 18, rate: 72.0 },
        threeStars: { total: 18, responded: 7, rate: 38.9 },
        twoStars: { total: 7, responded: 2, rate: 28.6 },
        oneStar: { total: 3, responded: 0, rate: 0.0 }
      },
      avgResponseTime: 28, // hours
      monthlyTrend: [58, 62, 68, 66, 64, 65.3],
      ratingImprovement: 0.1
    }
  ]

  const chainTotalReviews = responseData.reduce((sum, item) => sum + item.totalReviews, 0)
  const chainTotalResponded = responseData.reduce((sum, item) => sum + item.reviewsRespondedWithin48h, 0)
  const chainResponseRate = (chainTotalResponded / chainTotalReviews) * 100
  const chainAvgResponseTime = responseData.reduce((sum, item) => sum + (item.avgResponseTime * item.totalReviews), 0) / chainTotalReviews

  const getStatusColor = (rate: number) => {
    if (rate > 80) return 'text-green-600'
    if (rate >= 60) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (rate: number) => {
    if (rate > 80) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (rate >= 60) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getStatusIcon = (rate: number) => {
    if (rate > 80) return '✅'
    if (rate >= 60) return '⚠️'
    return '🚨'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Review Response Rate %
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: CUS_014 | Reviews Responded Within 48 Hours
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
            <strong>Formula:</strong> (Reviews responded within 48 hours ÷ Total reviews) × 100
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Percentage of online reviews (positive and negative) responded to within 48 hours. Demonstrates attentiveness.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> Directly correlates with improved ratings over time; signals to potential customers restaurant cares.
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
            <div className="text-xs font-normal text-green-600">>80%</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">60–80%</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600"><60%</div>
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
            <span className="text-xs font-normal text-gray-500">Total Reviews</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-black dark:text-white">
                {chainTotalReviews}
              </span>
              <span>⭐</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Response Rate</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getStatusColor(chainResponseRate)}`}>
                {chainResponseRate.toFixed(1)}%
              </span>
              <span>💬</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Avg Response Time</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-black dark:text-white">
                {chainAvgResponseTime.toFixed(1)}h
              </span>
              <span>⏱️</span>
            </div>
          </div>
        </div>
      </div>

      {/* Location Performance */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Performance (Review Response Analysis)
        </h2>
        <div className="space-y-3">
          {responseData
            .sort((a, b) => b.responseRate - a.responseRate)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.responseRate)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span>{getStatusIcon(location.responseRate)}</span>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-black dark:text-white">
                    {location.responseRate.toFixed(1)}% response rate
                  </div>
                  <div className="text-xs font-normal text-gray-500">
                    {location.reviewsRespondedWithin48h} / {location.totalReviews} reviews | {location.avgResponseTime}h avg time
                  </div>
                </div>
              </div>
              
              {/* Platform breakdown */}
              <div className="grid grid-cols-3 gap-4 mb-3">
                <div className="text-center">
                  <div className="text-xs font-normal text-gray-500">Google</div>
                  <div className="text-xs font-bold text-blue-600">
                    {location.reviewsByPlatform.google.rate.toFixed(1)}%
                  </div>
                  <div className="text-xs font-normal text-blue-500">
                    {location.reviewsByPlatform.google.responded}/{location.reviewsByPlatform.google.total}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs font-normal text-gray-500">Zomato</div>
                  <div className="text-xs font-bold text-red-600">
                    {location.reviewsByPlatform.zomato.rate.toFixed(1)}%
                  </div>
                  <div className="text-xs font-normal text-red-500">
                    {location.reviewsByPlatform.zomato.responded}/{location.reviewsByPlatform.zomato.total}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs font-normal text-gray-500">Swiggy</div>
                  <div className="text-xs font-bold text-orange-600">
                    {location.reviewsByPlatform.swiggy.rate.toFixed(1)}%
                  </div>
                  <div className="text-xs font-normal text-orange-500">
                    {location.reviewsByPlatform.swiggy.responded}/{location.reviewsByPlatform.swiggy.total}
                  </div>
                </div>
              </div>

              {/* Response by rating */}
              <div className="mt-3">
                <h4 className="text-xs font-bold text-gray-600 mb-2">Response Rate by Rating</h4>
                <div className="grid grid-cols-5 gap-2">
                  <div className="text-center">
                    <div className="text-xs font-normal text-gray-500">5⭐</div>
                    <div className="text-xs font-bold text-green-600">
                      {location.responseByRating.fiveStars.rate.toFixed(0)}%
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-normal text-gray-500">4⭐</div>
                    <div className="text-xs font-bold text-blue-600">
                      {location.responseByRating.fourStars.rate.toFixed(0)}%
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-normal text-gray-500">3⭐</div>
                    <div className="text-xs font-bold text-yellow-600">
                      {location.responseByRating.threeStars.rate.toFixed(0)}%
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-normal text-gray-500">2⭐</div>
                    <div className="text-xs font-bold text-orange-600">
                      {location.responseByRating.twoStars.rate.toFixed(0)}%
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-normal text-gray-500">1⭐</div>
                    <div className="text-xs font-bold text-red-600">
                      {location.responseByRating.oneStar.rate.toFixed(0)}%
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance metrics */}
              <div className="mt-3 flex justify-between items-center">
                <div className="text-xs">
                  <span className="text-gray-500">Rating Improvement: </span>
                  <span className="font-bold text-green-600">+{location.ratingImprovement}</span>
                </div>
                <div className="text-xs">
                  <span className="text-gray-500">6M Trend: </span>
                  <span className={`font-bold ${location.responseRate > location.monthlyTrend[0] ? 'text-green-600' : 'text-red-600'}`}>
                    {location.responseRate > location.monthlyTrend[0] ? '↗' : '↘'} 
                    {Math.abs(((location.responseRate - location.monthlyTrend[0]) / location.monthlyTrend[0]) * 100).toFixed(0)}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Platform Performance Analysis */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          📊 Chain-wide Platform Performance
        </h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200">
            <div className="text-xs font-bold text-blue-700 dark:text-blue-300">Google Reviews</div>
            <div className="text-xs font-normal text-blue-600">
              {responseData.reduce((sum, loc) => sum + loc.reviewsByPlatform.google.responded, 0)} / {responseData.reduce((sum, loc) => sum + loc.reviewsByPlatform.google.total, 0)}
            </div>
            <div className="text-xs font-normal text-blue-500">
              {((responseData.reduce((sum, loc) => sum + loc.reviewsByPlatform.google.responded, 0) / responseData.reduce((sum, loc) => sum + loc.reviewsByPlatform.google.total, 0)) * 100).toFixed(1)}%
            </div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">Zomato Reviews</div>
            <div className="text-xs font-normal text-red-600">
              {responseData.reduce((sum, loc) => sum + loc.reviewsByPlatform.zomato.responded, 0)} / {responseData.reduce((sum, loc) => sum + loc.reviewsByPlatform.zomato.total, 0)}
            </div>
            <div className="text-xs font-normal text-red-500">
              {((responseData.reduce((sum, loc) => sum + loc.reviewsByPlatform.zomato.responded, 0) / responseData.reduce((sum, loc) => sum + loc.reviewsByPlatform.zomato.total, 0)) * 100).toFixed(1)}%
            </div>
          </div>
          <div className="text-center p-3 bg-orange-50 dark:bg-orange-900/20 rounded border border-orange-200">
            <div className="text-xs font-bold text-orange-700 dark:text-orange-300">Swiggy Reviews</div>
            <div className="text-xs font-normal text-orange-600">
              {responseData.reduce((sum, loc) => sum + loc.reviewsByPlatform.swiggy.responded, 0)} / {responseData.reduce((sum, loc) => sum + loc.reviewsByPlatform.swiggy.total, 0)}
            </div>
            <div className="text-xs font-normal text-orange-500">
              {((responseData.reduce((sum, loc) => sum + loc.reviewsByPlatform.swiggy.responded, 0) / responseData.reduce((sum, loc) => sum + loc.reviewsByPlatform.swiggy.total, 0)) * 100).toFixed(1)}%
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
              <li>• Google My Business API</li>
              <li>• Zomato Business Dashboard</li>
              <li>• Swiggy Partner Portal</li>
              <li>• Social media monitoring</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Daily review monitoring</li>
              <li>• 48-hour response tracking</li>
              <li>• Alert if <60% response rate</li>
              <li>• Weekly platform analysis</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Drill-down Options */}
      <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200">
        <h2 className="text-xs font-bold text-purple-900 dark:text-purple-300 mb-2">
          🔍 Available Drill-downs
        </h2>
        <div className="space-y-1">
          <p className="text-xs font-normal text-purple-800 dark:text-purple-300">
            • By platform response performance
          </p>
          <p className="text-xs font-normal text-purple-800 dark:text-purple-300">
            • By review rating response patterns
          </p>
          <p className="text-xs font-normal text-purple-800 dark:text-purple-300">
            • Response time vs rating improvement correlation
          </p>
          <p className="text-xs font-normal text-purple-800 dark:text-purple-300">
            • Staff response quality analysis
          </p>
        </div>
      </div>

      {/* Users & Access */}
      <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-lg border border-gray-200">
        <h2 className="text-xs font-bold text-black dark:text-white mb-2">
          👥 Authorized Users
        </h2>
        <p className="text-xs font-normal text-gray-500">
          Marketing Manager, Customer Service Manager, Social Media Manager
        </p>
      </div>
    </div>
  )
}