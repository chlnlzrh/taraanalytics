import { RESTAURANTS } from '@/lib/restaurant-data'

export default function CustomerSatisfactionScoreKPI() {
  // CUS_010 Customer Satisfaction Score (CSS) - Exact specifications from restaurant_kpi_metrics_127.txt
  const cssData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      totalResponses: 485,
      averageRating: 4.3,
      status: 'good', // Above 4.2/5
      ratingDistribution: {
        fiveStars: 195, // 40.2%
        fourStars: 155, // 32.0%
        threeStars: 85, // 17.5%
        twoStars: 35, // 7.2%
        oneStar: 15 // 3.1%
      },
      satisfactionByChannel: {
        dineIn: 4.4,
        delivery: 4.1,
        takeaway: 4.3
      },
      satisfactionByMeal: {
        breakfast: 4.5,
        lunch: 4.2,
        dinner: 4.3,
        snacks: 4.2
      },
      monthlyTrend: [4.1, 4.2, 4.3, 4.2, 4.4, 4.3],
      responseRate: 68, // Percentage of customers who provided feedback
      detractorRate: 10.3 // 1-2 star ratings
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      totalResponses: 620,
      averageRating: 4.4,
      status: 'good', // Above 4.2/5
      ratingDistribution: {
        fiveStars: 280, // 45.2%
        fourStars: 205, // 33.1%
        threeStars: 95, // 15.3%
        twoStars: 30, // 4.8%
        oneStar: 10 // 1.6%
      },
      satisfactionByChannel: {
        dineIn: 4.5,
        delivery: 4.2,
        takeaway: 4.4
      },
      satisfactionByMeal: {
        breakfast: 4.6,
        lunch: 4.3,
        dinner: 4.4,
        snacks: 4.3
      },
      monthlyTrend: [4.2, 4.3, 4.4, 4.3, 4.5, 4.4],
      responseRate: 72,
      detractorRate: 6.4
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      totalResponses: 320,
      averageRating: 3.9,
      status: 'warning', // Below 4.2/5
      ratingDistribution: {
        fiveStars: 96, // 30.0%
        fourStars: 110, // 34.4%
        threeStars: 75, // 23.4%
        twoStars: 28, // 8.8%
        oneStar: 11 // 3.4%
      },
      satisfactionByChannel: {
        dineIn: 4.0,
        delivery: 3.8,
        takeaway: 3.9
      },
      satisfactionByMeal: {
        breakfast: 4.1,
        lunch: 3.8,
        dinner: 3.9,
        snacks: 3.8
      },
      monthlyTrend: [3.7, 3.8, 3.9, 3.8, 4.0, 3.9],
      responseRate: 55,
      detractorRate: 12.2
    }
  ]

  const chainTotalResponses = cssData.reduce((sum, item) => sum + item.totalResponses, 0)
  const chainWeightedAvgRating = cssData.reduce((sum, item) => sum + (item.averageRating * item.totalResponses), 0) / chainTotalResponses
  const chainAvgResponseRate = cssData.reduce((sum, item) => sum + (item.responseRate * item.totalResponses), 0) / chainTotalResponses

  const getStatusColor = (rating: number) => {
    if (rating > 4.2) return 'text-green-600'
    if (rating >= 3.8) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (rating: number) => {
    if (rating > 4.2) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (rating >= 3.8) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getStatusIcon = (rating: number) => {
    if (rating > 4.2) return '😊'
    if (rating >= 3.8) return '😐'
    return '😟'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Customer Satisfaction Score (CSS)
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: CUS_010 | Average Rating from Post-Bill Feedback
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
            <strong>Formula:</strong> Average rating on 1–5 scale (or thumbs up/down) from post-bill feedback
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Real-time proxy for NPS; easier to collect at scale. Target >4.2/5.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> Immediate feedback loop; used to train staff and adjust operations daily.
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
            <div className="text-xs font-normal text-green-600">>4.2/5</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">3.8–4.2</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600"><3.8/5</div>
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
            <span className="text-xs font-normal text-gray-500">Total Responses</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-black dark:text-white">
                {chainTotalResponses.toLocaleString('en-IN')}
              </span>
              <span>📝</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Average CSS</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getStatusColor(chainWeightedAvgRating)}`}>
                {chainWeightedAvgRating.toFixed(2)}/5
              </span>
              <span>{getStatusIcon(chainWeightedAvgRating)}</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Response Rate</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-black dark:text-white">
                {chainAvgResponseRate.toFixed(0)}%
              </span>
              <span>💬</span>
            </div>
          </div>
        </div>
      </div>

      {/* Location Performance */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Performance (CSS Analysis)
        </h2>
        <div className="space-y-3">
          {cssData
            .sort((a, b) => b.averageRating - a.averageRating)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.averageRating)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span>{getStatusIcon(location.averageRating)}</span>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-black dark:text-white">
                    {location.averageRating.toFixed(2)}/5 CSS
                  </div>
                  <div className="text-xs font-normal text-gray-500">
                    {location.totalResponses} responses | {location.responseRate}% rate | {location.detractorRate}% detractors
                  </div>
                </div>
              </div>
              
              {/* Rating distribution */}
              <div className="grid grid-cols-5 gap-2 mb-3">
                <div className="text-center">
                  <div className="text-xs font-normal text-gray-500">5⭐</div>
                  <div className="text-xs font-bold text-green-600">
                    {location.ratingDistribution.fiveStars}
                  </div>
                  <div className="text-xs font-normal text-green-500">
                    {((location.ratingDistribution.fiveStars / location.totalResponses) * 100).toFixed(0)}%
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs font-normal text-gray-500">4⭐</div>
                  <div className="text-xs font-bold text-blue-600">
                    {location.ratingDistribution.fourStars}
                  </div>
                  <div className="text-xs font-normal text-blue-500">
                    {((location.ratingDistribution.fourStars / location.totalResponses) * 100).toFixed(0)}%
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs font-normal text-gray-500">3⭐</div>
                  <div className="text-xs font-bold text-yellow-600">
                    {location.ratingDistribution.threeStars}
                  </div>
                  <div className="text-xs font-normal text-yellow-500">
                    {((location.ratingDistribution.threeStars / location.totalResponses) * 100).toFixed(0)}%
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs font-normal text-gray-500">2⭐</div>
                  <div className="text-xs font-bold text-orange-600">
                    {location.ratingDistribution.twoStars}
                  </div>
                  <div className="text-xs font-normal text-orange-500">
                    {((location.ratingDistribution.twoStars / location.totalResponses) * 100).toFixed(0)}%
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs font-normal text-gray-500">1⭐</div>
                  <div className="text-xs font-bold text-red-600">
                    {location.ratingDistribution.oneStar}
                  </div>
                  <div className="text-xs font-normal text-red-500">
                    {((location.ratingDistribution.oneStar / location.totalResponses) * 100).toFixed(0)}%
                  </div>
                </div>
              </div>

              {/* Satisfaction by channel */}
              <div className="mt-3">
                <h4 className="text-xs font-bold text-gray-600 mb-2">CSS by Service Channel</h4>
                <div className="grid grid-cols-3 gap-3">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Dine-in:</span>
                    <span className={`font-normal ${getStatusColor(location.satisfactionByChannel.dineIn)}`}>
                      {location.satisfactionByChannel.dineIn.toFixed(1)}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Delivery:</span>
                    <span className={`font-normal ${getStatusColor(location.satisfactionByChannel.delivery)}`}>
                      {location.satisfactionByChannel.delivery.toFixed(1)}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Takeaway:</span>
                    <span className={`font-normal ${getStatusColor(location.satisfactionByChannel.takeaway)}`}>
                      {location.satisfactionByChannel.takeaway.toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Satisfaction by meal */}
              <div className="mt-3">
                <h4 className="text-xs font-bold text-gray-600 mb-2">CSS by Meal Period</h4>
                <div className="grid grid-cols-4 gap-3">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Breakfast:</span>
                    <span className={`font-normal ${getStatusColor(location.satisfactionByMeal.breakfast)}`}>
                      {location.satisfactionByMeal.breakfast.toFixed(1)}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Lunch:</span>
                    <span className={`font-normal ${getStatusColor(location.satisfactionByMeal.lunch)}`}>
                      {location.satisfactionByMeal.lunch.toFixed(1)}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Dinner:</span>
                    <span className={`font-normal ${getStatusColor(location.satisfactionByMeal.dinner)}`}>
                      {location.satisfactionByMeal.dinner.toFixed(1)}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Snacks:</span>
                    <span className={`font-normal ${getStatusColor(location.satisfactionByMeal.snacks)}`}>
                      {location.satisfactionByMeal.snacks.toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>

              {/* 6-month trend */}
              <div className="mt-3">
                <h4 className="text-xs font-bold text-gray-600 mb-2">6-Month Trend</h4>
                <div className="flex gap-2">
                  {location.monthlyTrend.map((rating, idx) => (
                    <div key={idx} className="flex-1 text-center">
                      <div className="text-xs font-normal text-gray-400">M{idx+1}</div>
                      <div className={`text-xs font-bold ${getStatusColor(rating)}`}>
                        {rating.toFixed(1)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chain Rating Distribution */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          📊 Chain-wide Rating Distribution
        </h2>
        <div className="grid grid-cols-5 gap-4">
          <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded border border-green-200">
            <div className="text-xs font-bold text-green-700 dark:text-green-300">5 Stars</div>
            <div className="text-xs font-normal text-green-600">
              {cssData.reduce((sum, loc) => sum + loc.ratingDistribution.fiveStars, 0)} responses
            </div>
            <div className="text-xs font-normal text-green-500">
              {((cssData.reduce((sum, loc) => sum + loc.ratingDistribution.fiveStars, 0) / chainTotalResponses) * 100).toFixed(1)}%
            </div>
          </div>
          <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200">
            <div className="text-xs font-bold text-blue-700 dark:text-blue-300">4 Stars</div>
            <div className="text-xs font-normal text-blue-600">
              {cssData.reduce((sum, loc) => sum + loc.ratingDistribution.fourStars, 0)} responses
            </div>
            <div className="text-xs font-normal text-blue-500">
              {((cssData.reduce((sum, loc) => sum + loc.ratingDistribution.fourStars, 0) / chainTotalResponses) * 100).toFixed(1)}%
            </div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">3 Stars</div>
            <div className="text-xs font-normal text-yellow-600">
              {cssData.reduce((sum, loc) => sum + loc.ratingDistribution.threeStars, 0)} responses
            </div>
            <div className="text-xs font-normal text-yellow-500">
              {((cssData.reduce((sum, loc) => sum + loc.ratingDistribution.threeStars, 0) / chainTotalResponses) * 100).toFixed(1)}%
            </div>
          </div>
          <div className="text-center p-3 bg-orange-50 dark:bg-orange-900/20 rounded border border-orange-200">
            <div className="text-xs font-bold text-orange-700 dark:text-orange-300">2 Stars</div>
            <div className="text-xs font-normal text-orange-600">
              {cssData.reduce((sum, loc) => sum + loc.ratingDistribution.twoStars, 0)} responses
            </div>
            <div className="text-xs font-normal text-orange-500">
              {((cssData.reduce((sum, loc) => sum + loc.ratingDistribution.twoStars, 0) / chainTotalResponses) * 100).toFixed(1)}%
            </div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">1 Star</div>
            <div className="text-xs font-normal text-red-600">
              {cssData.reduce((sum, loc) => sum + loc.ratingDistribution.oneStar, 0)} responses
            </div>
            <div className="text-xs font-normal text-red-500">
              {((cssData.reduce((sum, loc) => sum + loc.ratingDistribution.oneStar, 0) / chainTotalResponses) * 100).toFixed(1)}%
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
              <li>• Post-bill feedback forms</li>
              <li>• Digital receipt surveys</li>
              <li>• Table QR code ratings</li>
              <li>• Staff-collected feedback</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Real-time feedback collection</li>
              <li>• Daily CSS calculation</li>
              <li>• Alert if <3.8 rating</li>
              <li>• Weekly trend analysis</li>
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
            • By service channel (dine-in vs delivery vs takeaway)
          </p>
          <p className="text-xs font-normal text-purple-800 dark:text-purple-300">
            • By meal period and time of day
          </p>
          <p className="text-xs font-normal text-purple-800 dark:text-purple-300">
            • By staff member and shift
          </p>
          <p className="text-xs font-normal text-purple-800 dark:text-purple-300">
            • CSS correlation with wait times and order accuracy</p>
        </div>
      </div>

      {/* Users & Access */}
      <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-lg border border-gray-200">
        <h2 className="text-xs font-bold text-black dark:text-white mb-2">
          👥 Authorized Users
        </h2>
        <p className="text-xs font-normal text-gray-500">
          Manager, Operations Manager, Training Manager
        </p>
      </div>
    </div>
  )
}