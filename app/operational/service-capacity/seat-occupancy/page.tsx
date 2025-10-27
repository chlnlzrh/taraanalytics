import { RESTAURANTS } from '@/lib/restaurant-data'

export default function SeatOccupancyKPI() {
  // OPR_002 Seat Occupancy % - Exact specifications from restaurant_kpi_metrics_127.txt
  const occupancyData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      totalSeats: 96, // 24 tables × 4 seats average
      coversServed: 485,
      occupancyPercentage: 78.4, // Within target 70-85%
      status: 'good',
      variance: 5.8, // +5.8% vs 30-day average
      daypartBreakdown: {
        breakfast: { covers: 85, capacity: 96, occupancy: 22.9 },
        lunch: { covers: 220, capacity: 96, occupancy: 68.8 },
        dinner: { covers: 180, capacity: 96, occupancy: 56.3 }
      },
      sectionBreakdown: {
        mainDining: { seats: 64, covers: 320, occupancy: 75.0 },
        privateRoom: { seats: 24, covers: 120, occupancy: 75.0 },
        terrace: { seats: 8, covers: 45, occupancy: 84.4 }
      },
      hourlyPeaks: {
        peak12pm: 91.7, // 12-1 PM lunch peak
        peak8pm: 87.5, // 8-9 PM dinner peak
        valley3pm: 15.6 // 3-4 PM valley
      }
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      totalSeats: 72, // 18 tables × 4 seats average
      coversServed: 425,
      occupancyPercentage: 82.6, // Good performance
      status: 'good',
      variance: 8.2,
      daypartBreakdown: {
        breakfast: { covers: 65, capacity: 72, occupancy: 22.6 },
        lunch: { covers: 200, capacity: 72, occupancy: 69.4 },
        dinner: { covers: 160, capacity: 72, occupancy: 55.6 }
      },
      sectionBreakdown: {
        mainDining: { seats: 48, covers: 300, occupancy: 93.8 },
        counter: { seats: 16, covers: 80, occupancy: 75.0 },
        outdoor: { seats: 8, covers: 45, occupancy: 84.4 }
      },
      hourlyPeaks: {
        peak12pm: 95.8, // Near capacity
        peak8pm: 90.3,
        valley3pm: 18.1
      }
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      totalSeats: 64, // 16 tables × 4 seats average
      coversServed: 545,
      occupancyPercentage: 56.8, // Warning range - demand issues
      status: 'warning',
      variance: -12.3, // -12.3% decline
      daypartBreakdown: {
        breakfast: { covers: 125, capacity: 64, occupancy: 48.8 },
        lunch: { covers: 245, capacity: 64, occupancy: 57.0 },
        dinner: { covers: 175, capacity: 64, occupancy: 40.6 }
      },
      sectionBreakdown: {
        mainDining: { seats: 40, covers: 325, occupancy: 60.9 },
        alcove: { seats: 16, covers: 140, occupancy: 65.6 },
        patio: { seats: 8, covers: 80, occupancy: 75.0 }
      },
      hourlyPeaks: {
        peak12pm: 73.4,
        peak8pm: 64.1,
        valley3pm: 12.5
      }
    }
  ]

  const chainAverage = occupancyData.reduce((sum, item) => sum + item.occupancyPercentage, 0) / occupancyData.length
  const chainVariance = occupancyData.reduce((sum, item) => sum + item.variance, 0) / occupancyData.length

  const getStatusColor = (occupancy: number) => {
    if (occupancy >= 70) return 'text-green-600'
    if (occupancy >= 60) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (occupancy: number) => {
    if (occupancy >= 70) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (occupancy >= 60) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getStatusIcon = (occupancy: number) => {
    if (occupancy >= 80) return '🎯'
    if (occupancy >= 70) return '✅'
    if (occupancy >= 60) return '⚠️'
    return '🚨'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Seat Occupancy %
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: OPR_002 | Capacity Utilization & Demand Analysis
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
            <strong>Formula:</strong> (Covers Served ÷ Total Seat Capacity) × 100
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Percentage of available seats filled during service hours. Reveals capacity utilization.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> 70–85% during service hours is target; &lt;60% suggests demand issues or poor scheduling.
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
            <div className="text-xs font-normal text-green-600">70–85%</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">60–70%</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&lt;60%</div>
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
            <span className="text-xs font-normal text-gray-500">Chain Average Occupancy</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getStatusColor(chainAverage)}`}>
                {chainAverage.toFixed(1)}%
              </span>
              <span>{getStatusIcon(chainAverage)}</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Average Trend vs 30-day</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${chainVariance > 0 ? 'text-green-600' : 'text-red-600'}`}>
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
          🏆 Location Performance (Ranked by Occupancy %)
        </h2>
        <div className="space-y-3">
          {occupancyData
            .sort((a, b) => b.occupancyPercentage - a.occupancyPercentage)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.occupancyPercentage)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span>{getStatusIcon(location.occupancyPercentage)}</span>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-black dark:text-white">
                    {location.occupancyPercentage.toFixed(1)}%
                  </div>
                  <div className={`text-xs font-normal ${location.variance > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {location.variance > 0 ? '+' : ''}{location.variance.toFixed(1)}% vs avg
                  </div>
                </div>
              </div>
              
              {/* Drill-down breakdown */}
              <div className="grid grid-cols-2 gap-4 mt-3">
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-1">Daypart Occupancy</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Breakfast:</span>
                      <span className="font-normal text-black dark:text-white">{location.daypartBreakdown.breakfast.occupancy.toFixed(1)}%</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Lunch:</span>
                      <span className="font-normal text-black dark:text-white">{location.daypartBreakdown.lunch.occupancy.toFixed(1)}%</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Dinner:</span>
                      <span className="font-normal text-black dark:text-white">{location.daypartBreakdown.dinner.occupancy.toFixed(1)}%</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-1">Section Occupancy</h4>
                  <div className="space-y-1">
                    {Object.entries(location.sectionBreakdown).map(([section, data]) => (
                      <div key={section} className="flex justify-between text-xs">
                        <span className="text-gray-500 capitalize">{section.replace(/([A-Z])/g, ' $1').trim()}:</span>
                        <span className="font-normal text-black dark:text-white">{data.occupancy.toFixed(1)}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Peak analysis */}
              <div className="mt-3 pt-2 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-xs font-bold text-gray-600 mb-1">Peak vs Valley Hours</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-xs text-gray-500">Lunch Peak (12-1pm)</div>
                    <div className="text-xs font-bold text-green-600">{location.hourlyPeaks.peak12pm.toFixed(1)}%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-500">Dinner Peak (8-9pm)</div>
                    <div className="text-xs font-bold text-green-600">{location.hourlyPeaks.peak8pm.toFixed(1)}%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-500">Valley (3-4pm)</div>
                    <div className="text-xs font-bold text-gray-500">{location.hourlyPeaks.valley3pm.toFixed(1)}%</div>
                  </div>
                </div>
              </div>

              {/* Additional metrics */}
              <div className="mt-3 pt-2 border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">Total Seat Capacity:</span>
                  <span className="font-normal text-black dark:text-white">{location.totalSeats} seats</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">Covers Served Today:</span>
                  <span className="font-normal text-black dark:text-white">{location.coversServed}</span>
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
              <li>• PetPooja POS (covers)</li>
              <li>• Restaurant config (seat count)</li>
              <li>• Hourly breakdown data</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Daily (by daypart)</li>
              <li>• Alert: Red if &lt;60%</li>
              <li>• Drill down: meal period, location, day of week, section</li>
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
            • Weekday lunch typically lower occupancy; weekends higher
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Festive seasons may exceed 100% with queues
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Consider seasonal variations in demand patterns
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