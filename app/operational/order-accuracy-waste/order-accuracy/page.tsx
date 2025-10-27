import { RESTAURANTS } from '@/lib/restaurant-data'

export default function OrderAccuracyKPI() {
  // OPR_013 Order Accuracy Rate % - Exact specifications from restaurant_kpi_metrics_127.txt
  const accuracyData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      totalOrders: 1420,
      correctOrders: 1391,
      accuracyRate: 98.0, // Good performance - above 97%
      status: 'good',
      variance: 1.0,
      errorBreakdown: {
        wrongItem: 12, // Most common error
        missingItem: 8,
        wrongQuantity: 5,
        specialInstructions: 4
      },
      channelAccuracy: {
        dineIn: { orders: 852, correct: 843, rate: 98.9 },
        takeout: { orders: 284, correct: 278, rate: 97.9 },
        delivery: { orders: 284, correct: 270, rate: 95.1 }
      },
      timeOfDayAccuracy: {
        breakfast: { orders: 284, correct: 280, rate: 98.6 },
        lunch: { orders: 568, correct: 557, rate: 98.1 },
        dinner: { orders: 568, correct: 554, rate: 97.5 }
      },
      remakeCost: 14500, // Cost of remakes and comps
      customerImpact: {
        complaints: 15,
        reviewImpact: -0.1 // Minor impact on ratings
      }
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      totalOrders: 1350,
      correctOrders: 1296,
      accuracyRate: 96.0, // Warning range
      status: 'warning',
      variance: -1.0,
      errorBreakdown: {
        wrongItem: 22,
        missingItem: 15,
        wrongQuantity: 10,
        specialInstructions: 7
      },
      channelAccuracy: {
        dineIn: { orders: 675, correct: 662, rate: 98.1 },
        takeout: { orders: 338, correct: 325, rate: 96.2 },
        delivery: { orders: 337, correct: 309, rate: 91.7 }
      },
      timeOfDayAccuracy: {
        breakfast: { orders: 270, correct: 262, rate: 97.0 },
        lunch: { orders: 540, correct: 518, rate: 95.9 },
        dinner: { orders: 540, correct: 516, rate: 95.6 }
      },
      remakeCost: 27000,
      customerImpact: {
        complaints: 28,
        reviewImpact: -0.3
      }
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      totalOrders: 2880,
      correctOrders: 2649,
      accuracyRate: 92.0, // Critical - below 93%
      status: 'critical',
      variance: -5.2,
      errorBreakdown: {
        wrongItem: 92, // High error count
        missingItem: 69,
        wrongQuantity: 46,
        specialInstructions: 24
      },
      channelAccuracy: {
        dineIn: { orders: 1152, correct: 1094, rate: 95.0 },
        takeout: { orders: 864, correct: 789, rate: 91.3 },
        delivery: { orders: 864, correct: 766, rate: 88.7 }
      },
      timeOfDayAccuracy: {
        breakfast: { orders: 576, correct: 534, rate: 92.7 },
        lunch: { orders: 1152, correct: 1059, rate: 91.9 },
        dinner: { orders: 1152, correct: 1056, rate: 91.7 }
      },
      remakeCost: 115500, // High remake cost
      customerImpact: {
        complaints: 89,
        reviewImpact: -0.8
      }
    }
  ]

  const chainAverage = accuracyData.reduce((sum, item) => sum + item.accuracyRate, 0) / accuracyData.length

  const getStatusColor = (rate: number) => {
    if (rate >= 97) return 'text-green-600'
    if (rate >= 93) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (rate: number) => {
    if (rate >= 97) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (rate >= 93) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xs font-bold text-black dark:text-white">
          Order Accuracy Rate %
        </h1>
        <p className="text-xs font-normal text-gray-500 mt-1">
          KPI ID: OPR_013 | Service Quality & Customer Satisfaction
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200">
        <h2 className="text-xs font-bold text-blue-900 dark:text-blue-300 mb-2">
          📊 Definition & Formula
        </h2>
        <div className="space-y-2">
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Formula:</strong> (Correct Orders ÷ Total Orders) × 100
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Percentage of orders fulfilled correctly. Target &gt;97%. Low accuracy drives complaints and remakes.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> Each error wastes food, labor, and damages customer satisfaction; compounds across locations.
          </p>
        </div>
      </div>

      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🎯 Target Ranges & Alert Thresholds
        </h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded border border-green-200">
            <div className="text-xs font-bold text-green-700 dark:text-green-300">TARGET</div>
            <div className="text-xs font-normal text-green-600">&gt;97%</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">93–97%</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&lt;93%</div>
          </div>
        </div>
      </div>

      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          📈 Chain Summary & Cost Impact
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-gray-50 dark:bg-gray-900/20 rounded border">
            <div className="text-xs font-bold text-gray-700 dark:text-gray-300">Chain Average</div>
            <div className="text-xs font-normal text-black dark:text-white">{chainAverage.toFixed(1)}% accuracy</div>
          </div>
          <div className="text-center p-3 bg-gray-50 dark:bg-gray-900/20 rounded border">
            <div className="text-xs font-bold text-gray-700 dark:text-gray-300">Total Remake Cost</div>
            <div className="text-xs font-normal text-black dark:text-white">
              ₹{accuracyData.reduce((sum, item) => sum + item.remakeCost, 0).toLocaleString()}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Performance (Best = Highest Accuracy)
        </h2>
        <div className="space-y-3">
          {accuracyData
            .sort((a, b) => b.accuracyRate - a.accuracyRate)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.accuracyRate)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-black dark:text-white">
                    {location.accuracyRate.toFixed(1)}% accuracy
                  </div>
                  <div className={`text-xs font-normal ${location.variance > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {location.variance > 0 ? '+' : ''}{location.variance.toFixed(1)}% vs target (97%)
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-3">
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-1">Error Analysis</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Wrong Item:</span>
                      <span className="font-normal text-black dark:text-white">{location.errorBreakdown.wrongItem}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Missing Item:</span>
                      <span className="font-normal text-black dark:text-white">{location.errorBreakdown.missingItem}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Wrong Quantity:</span>
                      <span className="font-normal text-black dark:text-white">{location.errorBreakdown.wrongQuantity}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Special Instructions:</span>
                      <span className="font-normal text-black dark:text-white">{location.errorBreakdown.specialInstructions}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-1">Channel Performance</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Dine-in:</span>
                      <span className="font-normal text-black dark:text-white">{location.channelAccuracy.dineIn.rate.toFixed(1)}%</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Takeout:</span>
                      <span className="font-normal text-black dark:text-white">{location.channelAccuracy.takeout.rate.toFixed(1)}%</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Delivery:</span>
                      <span className="font-normal text-black dark:text-white">{location.channelAccuracy.delivery.rate.toFixed(1)}%</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Remake Cost:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.remakeCost.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-3 p-2 bg-gray-50 dark:bg-gray-900/20 rounded">
                <div className="flex justify-between text-xs">
                  <div>
                    <span className="text-gray-600 font-bold">Customer Impact:</span>
                    <span className="text-red-600 ml-2">{location.customerImpact.complaints} complaints</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Review Impact:</span>
                    <span className={`ml-2 ${location.customerImpact.reviewImpact < -0.5 ? 'text-red-600' : location.customerImpact.reviewImpact < 0 ? 'text-yellow-600' : 'text-green-600'}`}>
                      {location.customerImpact.reviewImpact > 0 ? '+' : ''}{location.customerImpact.reviewImpact.toFixed(1)} stars
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200">
        <h2 className="text-xs font-bold text-orange-900 dark:text-orange-300 mb-2">
          🇮🇳 India-Specific Monitoring
        </h2>
        <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
          • Delivery orders (aggregator) may have lower accuracy due to packing/external factors
        </p>
      </div>
    </div>
  )
}