import { RESTAURANTS } from '@/lib/restaurant-data'

export default function CoversPerLaborHourKPI() {
  // OPR_007 Covers per Labor Hour - Exact specifications from restaurant_kpi_metrics_127.txt
  const laborData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      totalCovers: 1420,
      totalLaborHours: 240,
      coversPerHour: 5.92, // Critical - below 5 covers/hour threshold
      status: 'critical',
      variance: -34.2,
      shiftBreakdown: {
        morning: { covers: 568, hours: 80, rate: 7.1 },
        evening: { covers: 639, hours: 90, rate: 7.1 },
        night: { covers: 213, hours: 70, rate: 3.04 }
      },
      roleBreakdown: {
        kitchen: { covers: 710, hours: 120, rate: 5.92 },
        service: { covers: 568, hours: 80, rate: 7.1 },
        management: { covers: 142, hours: 40, rate: 3.55 }
      }
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      totalCovers: 1350,
      totalLaborHours: 195,
      coversPerHour: 6.92, // Warning range
      status: 'warning',
      variance: -23.0,
      shiftBreakdown: {
        morning: { covers: 405, hours: 65, rate: 6.23 },
        evening: { covers: 675, hours: 75, rate: 9.0 },
        night: { covers: 270, hours: 55, rate: 4.91 }
      },
      roleBreakdown: {
        kitchen: { covers: 675, hours: 98, rate: 6.89 },
        service: { covers: 540, hours: 65, rate: 8.31 },
        management: { covers: 135, hours: 32, rate: 4.22 }
      }
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      totalCovers: 2880,
      totalLaborHours: 320,
      coversPerHour: 9.0, // Target range - good performance
      status: 'good',
      variance: 0,
      shiftBreakdown: {
        morning: { covers: 1152, hours: 110, rate: 10.47 },
        evening: { covers: 1440, hours: 120, rate: 12.0 },
        night: { covers: 288, hours: 90, rate: 3.2 }
      },
      roleBreakdown: {
        kitchen: { covers: 1440, hours: 160, rate: 9.0 },
        service: { covers: 1152, hours: 110, rate: 10.47 },
        management: { covers: 288, hours: 50, rate: 5.76 }
      }
    }
  ]

  const chainAverage = laborData.reduce((sum, item) => sum + item.coversPerHour, 0) / laborData.length

  const getStatusColor = (rate: number) => {
    if (rate >= 8) return 'text-green-600'
    if (rate >= 5) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (rate: number) => {
    if (rate >= 8) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (rate >= 5) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xs font-bold text-black dark:text-white">
          Covers per Labor Hour
        </h1>
        <p className="text-xs font-normal text-gray-500 mt-1">
          KPI ID: OPR_007 | Labor Productivity & Volume Efficiency
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200">
        <h2 className="text-xs font-bold text-blue-900 dark:text-blue-300 mb-2">
          📊 Definition & Formula
        </h2>
        <div className="space-y-2">
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Formula:</strong> Number of Customers Served ÷ Total Labor Hours Worked
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Volume of customers served per labor hour. Indicates whether low revenue is from few covers or low spend.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> Helps diagnose productivity issues: low covers per hour = demand problem; low ACS = pricing/upsell problem.
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
            <div className="text-xs font-normal text-green-600">8–15 covers/hour</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">5–8 covers/hour</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&lt;5 covers/hour</div>
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
            <div className="text-xs font-normal text-black dark:text-white">{chainAverage.toFixed(1)} covers/hour</div>
          </div>
          <div className="text-center p-3 bg-gray-50 dark:bg-gray-900/20 rounded border">
            <div className="text-xs font-bold text-gray-700 dark:text-gray-300">Performance Gap</div>
            <div className="text-xs font-normal text-black dark:text-white">Need +{(9 - chainAverage).toFixed(1)} covers/hour</div>
          </div>
        </div>
      </div>

      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Performance
        </h2>
        <div className="space-y-3">
          {laborData
            .sort((a, b) => b.coversPerHour - a.coversPerHour)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.coversPerHour)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-black dark:text-white">
                    {location.coversPerHour.toFixed(1)} covers/hour
                  </div>
                  <div className={`text-xs font-normal ${location.variance > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {location.variance > 0 ? '+' : ''}{location.variance.toFixed(1)}% vs target
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-3">
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-1">Shift Performance</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Morning:</span>
                      <span className="font-normal text-black dark:text-white">{location.shiftBreakdown.morning.rate.toFixed(1)}/hr</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Evening:</span>
                      <span className="font-normal text-black dark:text-white">{location.shiftBreakdown.evening.rate.toFixed(1)}/hr</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Night:</span>
                      <span className="font-normal text-black dark:text-white">{location.shiftBreakdown.night.rate.toFixed(1)}/hr</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-1">Role Performance</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Kitchen:</span>
                      <span className="font-normal text-black dark:text-white">{location.roleBreakdown.kitchen.rate.toFixed(1)}/hr</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Service:</span>
                      <span className="font-normal text-black dark:text-white">{location.roleBreakdown.service.rate.toFixed(1)}/hr</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Management:</span>
                      <span className="font-normal text-black dark:text-white">{location.roleBreakdown.management.rate.toFixed(1)}/hr</span>
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
          • Lunch typically higher (12–15/hour); dinner lower (8–10/hour) due to longer service time
        </p>
      </div>
    </div>
  )
}