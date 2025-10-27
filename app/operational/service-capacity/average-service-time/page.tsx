import { RESTAURANTS } from '@/lib/restaurant-data'

export default function AverageServiceTimeKPI() {
  // OPR_003 Average Service Time - Exact specifications from restaurant_kpi_metrics_127.txt
  const serviceTimeData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      averageServiceTime: 38, // minutes - within target <40 min
      status: 'good',
      variance: -5.2, // 5.2% faster than 30-day average
      orderBreakdown: {
        dineIn: { avgTime: 42, orders: 290 },
        takeaway: { avgTime: 18, orders: 135 },
        delivery: { avgTime: 22, orders: 60 } // excludes driver time
      },
      daypartBreakdown: {
        breakfast: { avgTime: 25, orders: 85 },
        lunch: { avgTime: 35, orders: 220 },
        dinner: { avgTime: 45, orders: 180 }
      },
      complexityBreakdown: {
        simple: { avgTime: 28, orders: 245 }, // salads, sandwiches
        medium: { avgTime: 38, orders: 185 }, // pasta, grilled items
        complex: { avgTime: 52, orders: 55 } // specialty dishes
      }
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      averageServiceTime: 35, // Good performance
      status: 'good',
      variance: -8.1,
      orderBreakdown: {
        dineIn: { avgTime: 39, orders: 255 },
        takeaway: { avgTime: 16, orders: 115 },
        delivery: { avgTime: 20, orders: 55 }
      },
      daypartBreakdown: {
        breakfast: { avgTime: 22, orders: 65 },
        lunch: { avgTime: 32, orders: 200 },
        dinner: { avgTime: 42, orders: 160 }
      },
      complexityBreakdown: {
        simple: { avgTime: 25, orders: 215 },
        medium: { avgTime: 35, orders: 160 },
        complex: { avgTime: 48, orders: 50 }
      }
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      averageServiceTime: 52, // Critical - exceeds 50 min threshold
      status: 'critical',
      variance: 18.2, // 18.2% slower - significant concern
      orderBreakdown: {
        dineIn: { avgTime: 58, orders: 325 },
        takeaway: { avgTime: 28, orders: 145 },
        delivery: { avgTime: 32, orders: 75 }
      },
      daypartBreakdown: {
        breakfast: { avgTime: 35, orders: 125 },
        lunch: { avgTime: 48, orders: 245 },
        dinner: { avgTime: 65, orders: 175 } // Major bottleneck
      },
      complexityBreakdown: {
        simple: { avgTime: 42, orders: 275 },
        medium: { avgTime: 55, orders: 195 },
        complex: { avgTime: 72, orders: 75 }
      }
    }
  ]

  const chainAverage = serviceTimeData.reduce((sum, item) => sum + item.averageServiceTime, 0) / serviceTimeData.length
  const chainVariance = serviceTimeData.reduce((sum, item) => sum + item.variance, 0) / serviceTimeData.length

  const getStatusColor = (time: number) => {
    if (time <= 40) return 'text-green-600'
    if (time <= 50) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (time: number) => {
    if (time <= 40) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (time <= 50) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getStatusIcon = (time: number) => {
    if (time <= 35) return '🎯'
    if (time <= 40) return '✅'
    if (time <= 50) return '⚠️'
    return '🚨'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Average Service Time
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: OPR_003 | Service Efficiency & Customer Experience
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
            <strong>Formula:</strong> Minutes from order placement to bill payment (includes kitchen time + delivery + payment)
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Total time a customer spends from seating to leaving. Indicates service efficiency.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> Longer times reduce table turns and increase walk-away risk; >15 min hurts throughput.
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
            <div className="text-xs font-normal text-green-600">&lt;40 minutes</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">40–50 minutes</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&gt;50 minutes</div>
          </div>
        </div>
      </div>

      {/* Chain Summary */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          📈 Chain Performance Summary
        </h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <span className="text-xs font-normal text-gray-500">Chain Average Service Time</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getStatusColor(chainAverage)}`}>
                {chainAverage.toFixed(0)} min
              </span>
              <span>{getStatusIcon(chainAverage)}</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Average Trend vs 30-day</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${chainVariance > 0 ? 'text-red-600' : 'text-green-600'}`}>
                {chainVariance > 0 ? '+' : ''}{chainVariance.toFixed(1)}%
              </span>
              <span>{chainVariance > 0 ? '📈' : '📉'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Location Performance */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Performance (Ranked by Service Time)
        </h2>
        <div className="space-y-3">
          {serviceTimeData
            .sort((a, b) => a.averageServiceTime - b.averageServiceTime)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.averageServiceTime)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span>{getStatusIcon(location.averageServiceTime)}</span>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-black dark:text-white">
                    {location.averageServiceTime} min
                  </div>
                  <div className={`text-xs font-normal ${location.variance > 0 ? 'text-red-600' : 'text-green-600'}`}>
                    {location.variance > 0 ? '+' : ''}{location.variance.toFixed(1)}% vs avg
                  </div>
                </div>
              </div>
              
              {/* Drill-down breakdown */}
              <div className="grid grid-cols-2 gap-4 mt-3">
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-1">Order Type Breakdown</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Dine-in:</span>
                      <span className="font-normal text-black dark:text-white">{location.orderBreakdown.dineIn.avgTime} min</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Takeaway:</span>
                      <span className="font-normal text-black dark:text-white">{location.orderBreakdown.takeaway.avgTime} min</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Delivery:</span>
                      <span className="font-normal text-black dark:text-white">{location.orderBreakdown.delivery.avgTime} min</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-1">Daypart Breakdown</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Breakfast:</span>
                      <span className="font-normal text-black dark:text-white">{location.daypartBreakdown.breakfast.avgTime} min</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Lunch:</span>
                      <span className="font-normal text-black dark:text-white">{location.daypartBreakdown.lunch.avgTime} min</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Dinner:</span>
                      <span className="font-normal text-black dark:text-white">{location.daypartBreakdown.dinner.avgTime} min</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dish complexity analysis */}
              <div className="mt-3 pt-2 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-xs font-bold text-gray-600 mb-1">Dish Complexity Impact</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-xs text-gray-500">Simple Items</div>
                    <div className="text-xs font-bold text-green-600">{location.complexityBreakdown.simple.avgTime} min</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-500">Medium Items</div>
                    <div className="text-xs font-bold text-yellow-600">{location.complexityBreakdown.medium.avgTime} min</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-500">Complex Items</div>
                    <div className="text-xs font-bold text-red-600">{location.complexityBreakdown.complex.avgTime} min</div>
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
              <li>• PetPooja POS /orders (timestamps: order entry, ready, payment)</li>
              <li>• Order type and complexity classification</li>
              <li>• Daypart segmentation</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Daily</li>
              <li>• Alert: Red if &gt;50 min consistently</li>
              <li>• Drill down: daypart, order type, cuisine/dish complexity</li>
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
            • Dine-in service time typically 30–50 min; aggregator delivery 15–25 min (excl. driver time)
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Peak hours may see longer service times due to kitchen capacity
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Consider cultural dining patterns - leisurely vs quick service expectations
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