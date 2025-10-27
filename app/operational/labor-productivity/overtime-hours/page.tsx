import { RESTAURANTS } from '@/lib/restaurant-data'

export default function OvertimeHoursKPI() {
  // OPR_009 Overtime Hours % - Exact specifications from restaurant_kpi_metrics_127.txt
  const overtimeData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      totalHours: 240,
      overtimeHours: 8,
      overtimePercentage: 3.33, // Target range - good performance
      status: 'good',
      variance: -33.4,
      departmentBreakdown: {
        kitchen: { total: 120, overtime: 5, percentage: 4.17 },
        service: { total: 80, overtime: 2, percentage: 2.5 },
        management: { total: 40, overtime: 1, percentage: 2.5 }
      },
      monthlyTrend: [2.1, 2.8, 3.3, 4.2, 3.8, 3.3], // Last 6 months
      costImpact: {
        basePayroll: 96000,
        overtimeCost: 4800,
        totalCost: 100800,
        overtimePremium: 1.5
      }
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      totalHours: 195,
      overtimeHours: 15,
      overtimePercentage: 7.69, // Warning range
      status: 'warning',
      variance: 53.8,
      departmentBreakdown: {
        kitchen: { total: 98, overtime: 8, percentage: 8.16 },
        service: { total: 65, overtime: 5, percentage: 7.69 },
        management: { total: 32, overtime: 2, percentage: 6.25 }
      },
      monthlyTrend: [5.2, 6.8, 7.1, 8.5, 9.2, 7.7], // Last 6 months
      costImpact: {
        basePayroll: 78000,
        overtimeCost: 9000,
        totalCost: 87000,
        overtimePremium: 1.5
      }
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      totalHours: 320,
      overtimeHours: 38,
      overtimePercentage: 11.88, // Critical - above 10% threshold
      status: 'critical',
      variance: 137.5,
      departmentBreakdown: {
        kitchen: { total: 160, overtime: 22, percentage: 13.75 },
        service: { total: 110, overtime: 12, percentage: 10.91 },
        management: { total: 50, overtime: 4, percentage: 8.0 }
      },
      monthlyTrend: [8.9, 10.2, 11.5, 12.8, 13.1, 11.9], // Last 6 months
      costImpact: {
        basePayroll: 128000,
        overtimeCost: 22800,
        totalCost: 150800,
        overtimePremium: 1.5
      }
    }
  ]

  const chainAverage = overtimeData.reduce((sum, item) => sum + item.overtimePercentage, 0) / overtimeData.length

  const getStatusColor = (percentage: number) => {
    if (percentage <= 5) return 'text-green-600'
    if (percentage <= 10) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (percentage: number) => {
    if (percentage <= 5) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (percentage <= 10) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xs font-bold text-black dark:text-white">
          Overtime Hours %
        </h1>
        <p className="text-xs font-normal text-gray-500 mt-1">
          KPI ID: OPR_009 | Labor Management & Scheduling Efficiency
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200">
        <h2 className="text-xs font-bold text-blue-900 dark:text-blue-300 mb-2">
          📊 Definition & Formula
        </h2>
        <div className="space-y-2">
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Formula:</strong> (Overtime Hours ÷ Total Hours) × 100
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Percentage of hours worked beyond standard shift. Indicator of understaffing or operational issues.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> High overtime (&gt;10%) signals understaffing, poor scheduling, or demand spikes; increases fatigue and turnover.
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
            <div className="text-xs font-normal text-green-600">&lt;5%</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">5–10%</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&gt;10%</div>
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
            <div className="text-xs font-normal text-black dark:text-white">{chainAverage.toFixed(1)}% overtime</div>
          </div>
          <div className="text-center p-3 bg-gray-50 dark:bg-gray-900/20 rounded border">
            <div className="text-xs font-bold text-gray-700 dark:text-gray-300">Monthly Excess Cost</div>
            <div className="text-xs font-normal text-black dark:text-white">
              ₹{overtimeData.reduce((sum, item) => sum + item.costImpact.overtimeCost, 0).toLocaleString()}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Performance (Best = Lowest %)
        </h2>
        <div className="space-y-3">
          {overtimeData
            .sort((a, b) => a.overtimePercentage - b.overtimePercentage)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.overtimePercentage)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-black dark:text-white">
                    {location.overtimePercentage.toFixed(1)}% overtime
                  </div>
                  <div className={`text-xs font-normal ${location.variance < 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {location.variance > 0 ? '+' : ''}{location.variance.toFixed(1)}% vs target (5%)
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-3">
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-1">Department Breakdown</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Kitchen:</span>
                      <span className="font-normal text-black dark:text-white">{location.departmentBreakdown.kitchen.percentage.toFixed(1)}%</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Service:</span>
                      <span className="font-normal text-black dark:text-white">{location.departmentBreakdown.service.percentage.toFixed(1)}%</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Management:</span>
                      <span className="font-normal text-black dark:text-white">{location.departmentBreakdown.management.percentage.toFixed(1)}%</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-1">Cost Impact</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Base Payroll:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.costImpact.basePayroll.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">OT Premium:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.costImpact.overtimeCost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">OT Hours:</span>
                      <span className="font-normal text-black dark:text-white">{location.overtimeHours}h</span>
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
          • Overtime regulations: must follow state labor laws; track for compliance and cost control
        </p>
      </div>
    </div>
  )
}