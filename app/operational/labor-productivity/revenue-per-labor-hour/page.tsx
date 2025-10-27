import { RESTAURANTS } from '@/lib/restaurant-data'

export default function RevenuePerLaborHourKPI() {
  // OPR_006 Revenue per Labor Hour - Exact specifications from restaurant_kpi_metrics_127.txt
  const laborData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      totalRevenue: 285000,
      totalLaborHours: 240,
      revenuePerHour: 1188, // ₹1,188/hour - good performance
      status: 'good',
      variance: 8.5,
      shiftBreakdown: {
        morning: { revenue: 85000, hours: 80, rate: 1063 },
        evening: { revenue: 125000, hours: 90, rate: 1389 },
        night: { revenue: 75000, hours: 70, rate: 1071 }
      },
      roleBreakdown: {
        kitchen: { revenue: 142500, hours: 120, rate: 1188 },
        service: { revenue: 114000, hours: 80, rate: 1425 },
        management: { revenue: 28500, hours: 40, rate: 713 }
      }
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      totalRevenue: 225000,
      totalLaborHours: 195,
      revenuePerHour: 1154, // Good performance
      status: 'good',
      variance: 12.3,
      shiftBreakdown: {
        morning: { revenue: 67500, hours: 65, rate: 1038 },
        evening: { revenue: 101250, hours: 75, rate: 1350 },
        night: { revenue: 56250, hours: 55, rate: 1023 }
      },
      roleBreakdown: {
        kitchen: { revenue: 112500, hours: 98, rate: 1148 },
        service: { revenue: 90000, hours: 65, rate: 1385 },
        management: { revenue: 22500, hours: 32, rate: 703 }
      }
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      totalRevenue: 185000,
      totalLaborHours: 320,
      revenuePerHour: 578, // Critical - below ₹600/hour threshold
      status: 'critical',
      variance: -22.5,
      shiftBreakdown: {
        morning: { revenue: 55500, hours: 110, rate: 505 },
        evening: { revenue: 83250, hours: 120, rate: 694 },
        night: { revenue: 46250, hours: 90, rate: 514 }
      },
      roleBreakdown: {
        kitchen: { revenue: 92500, hours: 160, rate: 578 },
        service: { revenue: 74000, hours: 110, rate: 673 },
        management: { revenue: 18500, hours: 50, rate: 370 }
      }
    }
  ]

  const chainAverage = laborData.reduce((sum, item) => sum + item.revenuePerHour, 0) / laborData.length

  const getStatusColor = (rate: number) => {
    if (rate >= 800) return 'text-green-600'
    if (rate >= 600) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (rate: number) => {
    if (rate >= 800) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (rate >= 600) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xs font-bold text-black dark:text-white">
          Revenue per Labor Hour
        </h1>
        <p className="text-xs font-normal text-gray-500 mt-1">
          KPI ID: OPR_006 | Labor Productivity & Cost Efficiency
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200">
        <h2 className="text-xs font-bold text-blue-900 dark:text-blue-300 mb-2">
          📊 Definition & Formula
        </h2>
        <div className="space-y-2">
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Formula:</strong> Total Revenue ÷ Total Labor Hours Worked
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Revenue generated per labor hour. Direct measure of labor productivity and cost efficiency.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> A 5–10% improvement through scheduling/training yields significant margin gains.
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
            <div className="text-xs font-normal text-green-600">₹800–₹1,500/hour</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">₹600–₹800/hour</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&lt;₹600/hour</div>
          </div>
        </div>
      </div>

      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Performance
        </h2>
        <div className="space-y-3">
          {laborData
            .sort((a, b) => b.revenuePerHour - a.revenuePerHour)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.revenuePerHour)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-black dark:text-white">
                    ₹{location.revenuePerHour}/hour
                  </div>
                  <div className={`text-xs font-normal ${location.variance > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {location.variance > 0 ? '+' : ''}{location.variance.toFixed(1)}% vs avg
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-3">
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-1">Shift Performance</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Morning:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.shiftBreakdown.morning.rate}/hr</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Evening:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.shiftBreakdown.evening.rate}/hr</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Night:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.shiftBreakdown.night.rate}/hr</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-1">Role Performance</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Kitchen:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.roleBreakdown.kitchen.rate}/hr</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Service:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.roleBreakdown.service.rate}/hr</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Management:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.roleBreakdown.management.rate}/hr</span>
                    </div>
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
          • Typically lower during off-peak; use rolling 7-day average to smooth daily variance
        </p>
      </div>
    </div>
  )
}