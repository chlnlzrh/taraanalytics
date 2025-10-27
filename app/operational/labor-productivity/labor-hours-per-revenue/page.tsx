import { RESTAURANTS } from '@/lib/restaurant-data'

export default function LaborHoursPerRevenueKPI() {
  // OPR_008 Labor Hours per ₹1000 Revenue - Exact specifications from restaurant_kpi_metrics_127.txt
  const laborData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      totalRevenue: 285000,
      totalLaborHours: 240,
      hoursPerThousand: 0.84, // Target range - good performance
      status: 'good',
      variance: -30.0,
      shiftBreakdown: {
        morning: { revenue: 85000, hours: 80, rate: 0.94 },
        evening: { revenue: 125000, hours: 90, rate: 0.72 },
        night: { revenue: 75000, hours: 70, rate: 0.93 }
      },
      roleBreakdown: {
        kitchen: { revenue: 142500, hours: 120, rate: 0.84 },
        service: { revenue: 114000, hours: 80, rate: 0.70 },
        management: { revenue: 28500, hours: 40, rate: 1.40 }
      }
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      totalRevenue: 225000,
      totalLaborHours: 195,
      hoursPerThousand: 0.87, // Target range - good performance
      status: 'good',
      variance: -27.5,
      shiftBreakdown: {
        morning: { revenue: 67500, hours: 65, rate: 0.96 },
        evening: { revenue: 101250, hours: 75, rate: 0.74 },
        night: { revenue: 56250, hours: 55, rate: 0.98 }
      },
      roleBreakdown: {
        kitchen: { revenue: 112500, hours: 98, rate: 0.87 },
        service: { revenue: 90000, hours: 65, rate: 0.72 },
        management: { revenue: 22500, hours: 32, rate: 1.42 }
      }
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      totalRevenue: 185000,
      totalLaborHours: 320,
      hoursPerThousand: 1.73, // Critical - above 1.5 threshold
      status: 'critical',
      variance: 44.2,
      shiftBreakdown: {
        morning: { revenue: 55500, hours: 110, rate: 1.98 },
        evening: { revenue: 83250, hours: 120, rate: 1.44 },
        night: { revenue: 46250, hours: 90, rate: 1.95 }
      },
      roleBreakdown: {
        kitchen: { revenue: 92500, hours: 160, rate: 1.73 },
        service: { revenue: 74000, hours: 110, rate: 1.49 },
        management: { revenue: 18500, hours: 50, rate: 2.70 }
      }
    }
  ]

  const chainAverage = laborData.reduce((sum, item) => sum + item.hoursPerThousand, 0) / laborData.length

  const getStatusColor = (rate: number) => {
    if (rate <= 1.2) return 'text-green-600'
    if (rate <= 1.5) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (rate: number) => {
    if (rate <= 1.2) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (rate <= 1.5) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xs font-bold text-black dark:text-white">
          Labor Hours per ₹1000 Revenue
        </h1>
        <p className="text-xs font-normal text-gray-500 mt-1">
          KPI ID: OPR_008 | Labor Efficiency & Cost Management
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200">
        <h2 className="text-xs font-bold text-blue-900 dark:text-blue-300 mb-2">
          📊 Definition & Formula
        </h2>
        <div className="space-y-2">
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Formula:</strong> Total Labor Hours ÷ (Revenue ÷ 1000)
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Inverse of revenue per labor hour; easier to track in financial systems. Fewer hours per ₹1000 is better.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> Direct proxy for labor efficiency; trend month-over-month for optimization tracking.
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
            <div className="text-xs font-normal text-green-600">0.7–1.2 hours per ₹1000</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">1.2–1.5 hours per ₹1000</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&gt;1.5 hours per ₹1000</div>
          </div>
        </div>
      </div>

      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          📈 Chain Summary
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-gray-50 dark:bg-gray-900/20 rounded border">
            <div className="text-xs font-bold text-gray-700 dark:text-gray-300">Chain Average</div>
            <div className="text-xs font-normal text-black dark:text-white">{chainAverage.toFixed(2)} hours/₹1000</div>
          </div>
          <div className="text-center p-3 bg-gray-50 dark:bg-gray-900/20 rounded border">
            <div className="text-xs font-bold text-gray-700 dark:text-gray-300">Target Benchmark</div>
            <div className="text-xs font-normal text-black dark:text-white">1.2 hours/₹1000</div>
          </div>
        </div>
      </div>

      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Performance (Best = Lowest Hours)
        </h2>
        <div className="space-y-3">
          {laborData
            .sort((a, b) => a.hoursPerThousand - b.hoursPerThousand)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.hoursPerThousand)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-black dark:text-white">
                    {location.hoursPerThousand.toFixed(2)} hrs/₹1000
                  </div>
                  <div className={`text-xs font-normal ${location.variance < 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {location.variance > 0 ? '+' : ''}{location.variance.toFixed(1)}% vs target (1.2)
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-3">
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-1">Shift Performance</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Morning:</span>
                      <span className="font-normal text-black dark:text-white">{location.shiftBreakdown.morning.rate.toFixed(2)} hrs/₹1K</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Evening:</span>
                      <span className="font-normal text-black dark:text-white">{location.shiftBreakdown.evening.rate.toFixed(2)} hrs/₹1K</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Night:</span>
                      <span className="font-normal text-black dark:text-white">{location.shiftBreakdown.night.rate.toFixed(2)} hrs/₹1K</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-1">Role Performance</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Kitchen:</span>
                      <span className="font-normal text-black dark:text-white">{location.roleBreakdown.kitchen.rate.toFixed(2)} hrs/₹1K</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Service:</span>
                      <span className="font-normal text-black dark:text-white">{location.roleBreakdown.service.rate.toFixed(2)} hrs/₹1K</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Management:</span>
                      <span className="font-normal text-black dark:text-white">{location.roleBreakdown.management.rate.toFixed(2)} hrs/₹1K</span>
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
          • Track separately for peak vs. off-peak hours to identify scheduling optimization opportunities
        </p>
      </div>
    </div>
  )
}