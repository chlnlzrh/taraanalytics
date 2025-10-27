import { RESTAURANTS } from '@/lib/restaurant-data'

export default function WaitTimeWalkInsKPI() {
  // CUS_015 Wait Time for Walk-ins - Exact specifications from restaurant_kpi_metrics_127.txt
  const waitTimeData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      avgWaitTimeMinutes: 8.5,
      totalWalkIns: 245,
      walkAwayRate: 5.3, // Percentage who left without being seated
      status: 'good', // Under 10 minutes
      waitTimeByPeriod: {
        breakfast: 6.2,
        lunch: 12.1,
        teatime: 7.8,
        dinner: 14.5
      },
      waitTimeDistribution: {
        under5min: 125, // 51%
        fiveTo10min: 85, // 35%
        tenTo15min: 25, // 10%
        over15min: 10 // 4%
      },
      peakHours: {
        lunchPeak: { start: "12:30", end: "14:00", avgWait: 12.1 },
        dinnerPeak: { start: "19:30", end: "21:30", avgWait: 14.5 }
      },
      monthlyTrend: [9.2, 8.8, 8.1, 8.5, 8.0, 8.5],
      seatingEfficiency: 92, // Percentage of available tables utilized
      queueManagement: true
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      avgWaitTimeMinutes: 11.2,
      totalWalkIns: 320,
      walkAwayRate: 8.1,
      status: 'warning', // Between 10-15 minutes
      waitTimeByPeriod: {
        breakfast: 7.5,
        lunch: 15.8,
        teatime: 9.2,
        dinner: 18.3
      },
      waitTimeDistribution: {
        under5min: 95, // 30%
        fiveTo10min: 128, // 40%
        tenTo15min: 72, // 22%
        over15min: 25 // 8%
      },
      peakHours: {
        lunchPeak: { start: "12:00", end: "14:30", avgWait: 15.8 },
        dinnerPeak: { start: "19:00", end: "22:00", avgWait: 18.3 }
      },
      monthlyTrend: [12.5, 11.8, 11.0, 11.5, 11.0, 11.2],
      seatingEfficiency: 88,
      queueManagement: true
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      avgWaitTimeMinutes: 16.8,
      totalWalkIns: 180,
      walkAwayRate: 18.9,
      status: 'critical', // Over 15 minutes
      waitTimeByPeriod: {
        breakfast: 12.5,
        lunch: 22.1,
        teatime: 14.8,
        dinner: 25.6
      },
      waitTimeDistribution: {
        under5min: 25, // 14%
        fiveTo10min: 45, // 25%
        tenTo15min: 54, // 30%
        over15min: 56 // 31%
      },
      peakHours: {
        lunchPeak: { start: "12:00", end: "15:00", avgWait: 22.1 },
        dinnerPeak: { start: "19:00", end: "22:30", avgWait: 25.6 }
      },
      monthlyTrend: [18.2, 17.5, 16.9, 17.2, 17.0, 16.8],
      seatingEfficiency: 76,
      queueManagement: false
    }
  ]

  const chainTotalWalkIns = waitTimeData.reduce((sum, item) => sum + item.totalWalkIns, 0)
  const chainAvgWaitTime = waitTimeData.reduce((sum, item) => sum + (item.avgWaitTimeMinutes * item.totalWalkIns), 0) / chainTotalWalkIns
  const chainWalkAwayRate = waitTimeData.reduce((sum, item) => sum + (item.walkAwayRate * item.totalWalkIns), 0) / chainTotalWalkIns

  const getStatusColor = (time: number) => {
    if (time < 10) return 'text-green-600'
    if (time <= 15) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (time: number) => {
    if (time < 10) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (time <= 15) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getStatusIcon = (time: number) => {
    if (time < 10) return '🚀'
    if (time <= 15) return '⚠️'
    return '🚨'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Wait Time for Walk-ins
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: CUS_015 | Average Minutes from Customer Arrival to Seating
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
            <strong>Formula:</strong> Average minutes from customer arrival to seating
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Time before customer is seated. >15 minutes increases walk-away risk; <10 minutes optimizes throughput.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> Long waits reduce walk-in conversions; visible wait affects perception.
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
            <div className="text-xs font-normal text-green-600"><10 minutes</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">10–15 minutes</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">>15 minutes</div>
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
            <span className="text-xs font-normal text-gray-500">Total Walk-ins</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-black dark:text-white">
                {chainTotalWalkIns.toLocaleString('en-IN')}
              </span>
              <span>🚶</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Avg Wait Time</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getStatusColor(chainAvgWaitTime)}`}>
                {chainAvgWaitTime.toFixed(1)} min
              </span>
              <span>⏰</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Walk-away Rate</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-red-600">
                {chainWalkAwayRate.toFixed(1)}%
              </span>
              <span>🚪</span>
            </div>
          </div>
        </div>
      </div>

      {/* Location Performance */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Performance (Wait Time Analysis)
        </h2>
        <div className="space-y-3">
          {waitTimeData
            .sort((a, b) => a.avgWaitTimeMinutes - b.avgWaitTimeMinutes)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.avgWaitTimeMinutes)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span>{getStatusIcon(location.avgWaitTimeMinutes)}</span>
                  {location.queueManagement && <span className="text-xs bg-blue-100 text-blue-800 px-1 rounded">Queue System</span>}
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-black dark:text-white">
                    {location.avgWaitTimeMinutes.toFixed(1)} min avg wait
                  </div>
                  <div className="text-xs font-normal text-gray-500">
                    {location.totalWalkIns} walk-ins | {location.walkAwayRate}% walk-away | {location.seatingEfficiency}% efficiency
                  </div>
                </div>
              </div>
              
              {/* Wait time by period */}
              <div className="grid grid-cols-4 gap-4 mb-3">
                <div className="text-center">
                  <div className="text-xs font-normal text-gray-500">Breakfast</div>
                  <div className="text-xs font-bold text-green-600">
                    {location.waitTimeByPeriod.breakfast} min
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs font-normal text-gray-500">Lunch</div>
                  <div className="text-xs font-bold text-orange-600">
                    {location.waitTimeByPeriod.lunch} min
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs font-normal text-gray-500">Tea Time</div>
                  <div className="text-xs font-bold text-blue-600">
                    {location.waitTimeByPeriod.teatime} min
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs font-normal text-gray-500">Dinner</div>
                  <div className="text-xs font-bold text-red-600">
                    {location.waitTimeByPeriod.dinner} min
                  </div>
                </div>
              </div>

              {/* Wait time distribution */}
              <div className="mt-3">
                <h4 className="text-xs font-bold text-gray-600 mb-2">Wait Time Distribution</h4>
                <div className="grid grid-cols-4 gap-3">
                  <div className="text-center">
                    <div className="text-xs font-normal text-gray-500"><5 min</div>
                    <div className="text-xs font-bold text-green-600">{location.waitTimeDistribution.under5min}</div>
                    <div className="text-xs font-normal text-green-500">
                      {((location.waitTimeDistribution.under5min / location.totalWalkIns) * 100).toFixed(0)}%
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-normal text-gray-500">5-10 min</div>
                    <div className="text-xs font-bold text-blue-600">{location.waitTimeDistribution.fiveTo10min}</div>
                    <div className="text-xs font-normal text-blue-500">
                      {((location.waitTimeDistribution.fiveTo10min / location.totalWalkIns) * 100).toFixed(0)}%
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-normal text-gray-500">10-15 min</div>
                    <div className="text-xs font-bold text-yellow-600">{location.waitTimeDistribution.tenTo15min}</div>
                    <div className="text-xs font-normal text-yellow-500">
                      {((location.waitTimeDistribution.tenTo15min / location.totalWalkIns) * 100).toFixed(0)}%
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-normal text-gray-500">>15 min</div>
                    <div className="text-xs font-bold text-red-600">{location.waitTimeDistribution.over15min}</div>
                    <div className="text-xs font-normal text-red-500">
                      {((location.waitTimeDistribution.over15min / location.totalWalkIns) * 100).toFixed(0)}%
                    </div>
                  </div>
                </div>
              </div>

              {/* Peak hours info */}
              <div className="mt-3">
                <h4 className="text-xs font-bold text-gray-600 mb-2">Peak Hours Analysis</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Lunch Peak ({location.peakHours.lunchPeak.start}-{location.peakHours.lunchPeak.end}):</span>
                    <span className="font-normal text-orange-600">{location.peakHours.lunchPeak.avgWait} min</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Dinner Peak ({location.peakHours.dinnerPeak.start}-{location.peakHours.dinnerPeak.end}):</span>
                    <span className="font-normal text-red-600">{location.peakHours.dinnerPeak.avgWait} min</span>
                  </div>
                </div>
              </div>

              {/* 6-month trend */}
              <div className="mt-3">
                <h4 className="text-xs font-bold text-gray-600 mb-2">6-Month Trend</h4>
                <div className="flex gap-2">
                  {location.monthlyTrend.map((time, idx) => (
                    <div key={idx} className="flex-1 text-center">
                      <div className="text-xs font-normal text-gray-400">M{idx+1}</div>
                      <div className={`text-xs font-bold ${getStatusColor(time)}`}>
                        {time.toFixed(1)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Wait Time Impact Analysis */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          📊 Chain-wide Wait Time Impact
        </h2>
        <div className="grid grid-cols-4 gap-4">
          <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded border border-green-200">
            <div className="text-xs font-bold text-green-700 dark:text-green-300">Fast Service</div>
            <div className="text-xs font-normal text-green-600">
              {waitTimeData.reduce((sum, loc) => sum + loc.waitTimeDistribution.under5min, 0)} customers
            </div>
            <div className="text-xs font-normal text-green-500">
              <5 min wait
            </div>
          </div>
          <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200">
            <div className="text-xs font-bold text-blue-700 dark:text-blue-300">Acceptable</div>
            <div className="text-xs font-normal text-blue-600">
              {waitTimeData.reduce((sum, loc) => sum + loc.waitTimeDistribution.fiveTo10min, 0)} customers
            </div>
            <div className="text-xs font-normal text-blue-500">
              5-10 min wait
            </div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">Risky</div>
            <div className="text-xs font-normal text-yellow-600">
              {waitTimeData.reduce((sum, loc) => sum + loc.waitTimeDistribution.tenTo15min, 0)} customers
            </div>
            <div className="text-xs font-normal text-yellow-500">
              10-15 min wait
            </div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">Lost Business</div>
            <div className="text-xs font-normal text-red-600">
              {waitTimeData.reduce((sum, loc) => sum + loc.waitTimeDistribution.over15min, 0)} customers
            </div>
            <div className="text-xs font-normal text-red-500">
              >15 min wait
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
              <li>• Table management system</li>
              <li>• Host/hostess logs</li>
              <li>• Queue management software</li>
              <li>• Customer tracking system</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Real-time wait tracking</li>
              <li>• Hourly peak analysis</li>
              <li>• Alert if >15 min avg</li>
              <li>• Daily efficiency review</li>
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
            • By time period analysis (breakfast/lunch/dinner)
          </p>
          <p className="text-xs font-normal text-purple-800 dark:text-purple-300">
            • By table size correlation
          </p>
          <p className="text-xs font-normal text-purple-800 dark:text-purple-300">
            • Queue management system effectiveness
          </p>
          <p className="text-xs font-normal text-purple-800 dark:text-purple-300">
            • Walk-away vs wait time correlation
          </p>
        </div>
      </div>

      {/* Users & Access */}
      <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-lg border border-gray-200">
        <h2 className="text-xs font-bold text-black dark:text-white mb-2">
          👥 Authorized Users
        </h2>
        <p className="text-xs font-normal text-gray-500">
          Manager, Host Manager, Operations Manager
        </p>
      </div>
    </div>
  )
}