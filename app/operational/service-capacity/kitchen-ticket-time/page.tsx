import { RESTAURANTS } from '@/lib/restaurant-data'

export default function KitchenTicketTimeKPI() {
  // OPR_004 Kitchen Ticket Time (KOT) - Exact specifications from restaurant_kpi_metrics_127.txt
  const kotData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      averageKitchenTime: 18, // minutes - within target 12-20 min
      status: 'good',
      variance: 3.2,
      dishBreakdown: {
        appetizers: { avgTime: 12, volume: 95 },
        mains: { avgTime: 22, volume: 285 },
        desserts: { avgTime: 8, volume: 105 }
      },
      daypartBreakdown: {
        breakfast: { avgTime: 14, volume: 85 },
        lunch: { avgTime: 16, volume: 220 },
        dinner: { avgTime: 22, volume: 180 }
      }
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      averageKitchenTime: 16, // Excellent performance
      status: 'good',
      variance: -8.5,
      dishBreakdown: {
        appetizers: { avgTime: 10, volume: 85 },
        mains: { avgTime: 19, volume: 255 },
        desserts: { avgTime: 7, volume: 85 }
      },
      daypartBreakdown: {
        breakfast: { avgTime: 12, volume: 65 },
        lunch: { avgTime: 14, volume: 200 },
        dinner: { avgTime: 20, volume: 160 }
      }
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      averageKitchenTime: 28, // Critical - exceeds 25 min threshold
      status: 'critical',
      variance: 24.1,
      dishBreakdown: {
        appetizers: { avgTime: 18, volume: 125 },
        mains: { avgTime: 35, volume: 325 },
        desserts: { avgTime: 15, volume: 95 }
      },
      daypartBreakdown: {
        breakfast: { avgTime: 22, volume: 125 },
        lunch: { avgTime: 26, volume: 245 },
        dinner: { avgTime: 32, volume: 175 }
      }
    }
  ]

  const chainAverage = kotData.reduce((sum, item) => sum + item.averageKitchenTime, 0) / kotData.length

  const getStatusColor = (time: number) => {
    if (time <= 20) return 'text-green-600'
    if (time <= 25) return 'text-yellow-600'
    return 'text-red-600'
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xs font-bold text-black dark:text-white">
          Kitchen Ticket Time (KOT)
        </h1>
        <p className="text-xs font-normal text-gray-500 mt-1">
          KPI ID: OPR_004 | Kitchen Efficiency & Bottleneck Analysis
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200">
        <h2 className="text-xs font-bold text-blue-900 dark:text-blue-300 mb-2">
          📊 Definition & Formula
        </h2>
        <div className="space-y-2">
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Formula:</strong> Minutes from order entry (KOT sent) to food ready for pickup
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Average time kitchen takes to prepare and ready food. Identifies kitchen bottlenecks.
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
            <div className="text-xs font-normal text-green-600">12–20 minutes</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">20–25 minutes</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&gt;25 minutes</div>
          </div>
        </div>
      </div>

      {/* Location Performance */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Performance
        </h2>
        <div className="space-y-3">
          {kotData.map((location) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${
              location.averageKitchenTime <= 20 ? 'bg-green-50 dark:bg-green-900/20 border-green-200' :
              location.averageKitchenTime <= 25 ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200' :
              'bg-red-50 dark:bg-red-900/20 border-red-200'
            }`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-black dark:text-white">
                  {location.restaurant.fullName}
                </span>
                <div className="text-right">
                  <div className="text-xs font-bold text-black dark:text-white">
                    {location.averageKitchenTime} min
                  </div>
                  <div className={`text-xs font-normal ${getStatusColor(location.averageKitchenTime)}`}>
                    {location.status.toUpperCase()}
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
          • Peak hours (12–1 PM, 7–8 PM) may see 20–25 min; off-peak 10–15 min; specialty items longer
        </p>
      </div>
    </div>
  )
}