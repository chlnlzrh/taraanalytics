import { RESTAURANTS } from '@/lib/restaurant-data'

export default function EquipmentDowntimeKPI() {
  // OPR_012 Equipment Downtime Hours - Exact specifications from restaurant_kpi_metrics_127.txt
  const downtimeData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      totalDowntimeHours: 2.5, // Good performance - below 3 hours
      status: 'good',
      variance: -50.0,
      equipmentBreakdown: {
        kitchen: { equipment: 'Fryer', hours: 1.5, reason: 'Preventive maintenance', impact: 'Low' },
        pos: { equipment: 'POS Terminal', hours: 0.5, reason: 'Software update', impact: 'Medium' },
        hvac: { equipment: 'AC Unit', hours: 0.5, reason: 'Filter replacement', impact: 'Low' }
      },
      maintenanceType: {
        preventive: 2.0, // 80% preventive
        reactive: 0.5   // 20% reactive
      },
      serviceImpact: {
        ordersAffected: 15,
        revenueImpact: 7500,
        customerComplaints: 2
      },
      monthlyTrend: [1.5, 2.0, 2.5, 3.2, 2.8, 2.5], // Last 6 months
      powerOutages: 0 // Separate from equipment failure
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      totalDowntimeHours: 4.2, // Warning range
      status: 'warning',
      variance: 40.0,
      equipmentBreakdown: {
        kitchen: { equipment: 'Grill', hours: 2.0, reason: 'Heating element failure', impact: 'High' },
        refrigeration: { equipment: 'Walk-in Cooler', hours: 1.5, reason: 'Compressor issue', impact: 'Critical' },
        pos: { equipment: 'Payment Terminal', hours: 0.7, reason: 'Network connectivity', impact: 'High' }
      },
      maintenanceType: {
        preventive: 1.5, // 36% preventive
        reactive: 2.7   // 64% reactive - concerning
      },
      serviceImpact: {
        ordersAffected: 45,
        revenueImpact: 22500,
        customerComplaints: 8
      },
      monthlyTrend: [3.1, 3.8, 4.2, 5.1, 4.8, 4.2], // Last 6 months
      powerOutages: 2.5 // Additional impact from power cuts
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      totalDowntimeHours: 7.8, // Critical - above 5 hours threshold
      status: 'critical',
      variance: 156.0,
      equipmentBreakdown: {
        kitchen: { equipment: 'Oven', hours: 3.5, reason: 'Temperature sensor failure', impact: 'Critical' },
        refrigeration: { equipment: 'Reach-in Freezer', hours: 2.0, reason: 'Door seal replacement', impact: 'High' },
        pos: { equipment: 'Kitchen Display', hours: 1.5, reason: 'Screen malfunction', impact: 'High' },
        hvac: { equipment: 'Exhaust System', hours: 0.8, reason: 'Motor replacement', impact: 'Medium' }
      },
      maintenanceType: {
        preventive: 1.0, // 13% preventive - very poor
        reactive: 6.8   // 87% reactive - critical issue
      },
      serviceImpact: {
        ordersAffected: 95,
        revenueImpact: 47500,
        customerComplaints: 18
      },
      monthlyTrend: [6.2, 7.1, 7.8, 8.9, 8.5, 7.8], // Last 6 months
      powerOutages: 4.0 // High power cut impact
    }
  ]

  const chainAverage = downtimeData.reduce((sum, item) => sum + item.totalDowntimeHours, 0) / downtimeData.length

  const getStatusColor = (hours: number) => {
    if (hours <= 3) return 'text-green-600'
    if (hours <= 5) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (hours: number) => {
    if (hours <= 3) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (hours <= 5) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getImpactColor = (impact: string) => {
    if (impact === 'Critical') return 'text-red-600'
    if (impact === 'High') return 'text-orange-600'
    if (impact === 'Medium') return 'text-yellow-600'
    return 'text-green-600'
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xs font-bold text-black dark:text-white">
          Equipment Downtime Hours
        </h1>
        <p className="text-xs font-normal text-gray-500 mt-1">
          KPI ID: OPR_012 | Asset Management & Operational Continuity
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200">
        <h2 className="text-xs font-bold text-blue-900 dark:text-blue-300 mb-2">
          📊 Definition & Formula
        </h2>
        <div className="space-y-2">
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Formula:</strong> Total hours per month equipment is non-operational (maintenance + repair)
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Monthly hours lost to equipment failure. Tracks effectiveness of preventive vs. reactive maintenance.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> &gt;5 hours/month per location warrants investigation; impacts service and drives stress.
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
            <div className="text-xs font-normal text-green-600">&lt;3 hours/month</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">3–5 hours/month</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&gt;5 hours/month</div>
          </div>
        </div>
      </div>

      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          📈 Chain Summary & Business Impact
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-gray-50 dark:bg-gray-900/20 rounded border">
            <div className="text-xs font-bold text-gray-700 dark:text-gray-300">Chain Average</div>
            <div className="text-xs font-normal text-black dark:text-white">{chainAverage.toFixed(1)} hours/month</div>
          </div>
          <div className="text-center p-3 bg-gray-50 dark:bg-gray-900/20 rounded border">
            <div className="text-xs font-bold text-gray-700 dark:text-gray-300">Total Revenue Impact</div>
            <div className="text-xs font-normal text-black dark:text-white">
              ₹{downtimeData.reduce((sum, item) => sum + item.serviceImpact.revenueImpact, 0).toLocaleString()}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Performance (Best = Least Downtime)
        </h2>
        <div className="space-y-3">
          {downtimeData
            .sort((a, b) => a.totalDowntimeHours - b.totalDowntimeHours)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.totalDowntimeHours)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-black dark:text-white">
                    {location.totalDowntimeHours.toFixed(1)} hours/month
                  </div>
                  <div className={`text-xs font-normal ${location.variance < 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {location.variance > 0 ? '+' : ''}{location.variance.toFixed(1)}% vs target (3h)
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-3">
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-1">Equipment Breakdown</h4>
                  <div className="space-y-1">
                    {Object.entries(location.equipmentBreakdown).map(([category, data]: [string, any]) => (
                      <div key={category} className="flex justify-between text-xs">
                        <span className="text-gray-500">{data.equipment}:</span>
                        <span className={`font-normal ${getImpactColor(data.impact)}`}>
                          {data.hours}h ({data.impact})
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-1">Service Impact</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Orders Affected:</span>
                      <span className="font-normal text-black dark:text-white">{location.serviceImpact.ordersAffected}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Revenue Lost:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.serviceImpact.revenueImpact.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Complaints:</span>
                      <span className="font-normal text-black dark:text-white">{location.serviceImpact.customerComplaints}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Power Outages:</span>
                      <span className="font-normal text-black dark:text-white">{location.powerOutages}h (separate)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-3 p-2 bg-gray-50 dark:bg-gray-900/20 rounded">
                <div className="flex justify-between text-xs">
                  <div>
                    <span className="text-gray-600 font-bold">Maintenance Mix:</span>
                    <span className="text-green-600 ml-2">Preventive: {location.maintenanceType.preventive}h</span>
                  </div>
                  <div>
                    <span className="text-red-600">Reactive: {location.maintenanceType.reactive}h</span>
                    <span className="text-gray-500 ml-2">
                      ({((location.maintenanceType.reactive / location.totalDowntimeHours) * 100).toFixed(0)}% reactive)
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
          • Power cuts in India inflate downtime; differentiate between equipment failure and power outages
        </p>
      </div>
    </div>
  )
}