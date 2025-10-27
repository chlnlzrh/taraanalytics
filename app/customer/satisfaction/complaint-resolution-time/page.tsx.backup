import { RESTAURANTS } from '@/lib/restaurant-data'

export default function ComplaintResolutionTimeKPI() {
  // CUS_013 Complaint Resolution Time - Exact specifications from restaurant_kpi_metrics_127.txt
  const resolutionData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      totalComplaints: 18,
      avgResolutionTimeHours: 3.2,
      status: 'good', // Under 4 hours
      resolutionByTimeframe: {
        under2Hours: 8,
        twoToFourHours: 6,
        fourToEightHours: 3,
        over8Hours: 1
      },
      resolutionByCategory: {
        foodQuality: 2.8,
        service: 3.5,
        cleanliness: 4.1,
        pricing: 2.2
      },
      recoveryRate: 78, // Percentage of customers who returned after complaint resolution
      monthlyTrend: [3.5, 3.1, 2.9, 3.3, 3.0, 3.2],
      escalatedComplaints: 2
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      totalComplaints: 35,
      avgResolutionTimeHours: 4.8,
      status: 'warning', // Between 4-8 hours
      resolutionByTimeframe: {
        under2Hours: 10,
        twoToFourHours: 12,
        fourToEightHours: 9,
        over8Hours: 4
      },
      resolutionByCategory: {
        foodQuality: 5.2,
        service: 4.5,
        cleanliness: 4.8,
        pricing: 3.9
      },
      recoveryRate: 65,
      monthlyTrend: [5.2, 4.9, 4.6, 4.8, 5.1, 4.8],
      escalatedComplaints: 6
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      totalComplaints: 52,
      avgResolutionTimeHours: 6.1,
      status: 'warning', // Between 4-8 hours
      resolutionByTimeframe: {
        under2Hours: 8,
        twoToFourHours: 15,
        fourToEightHours: 18,
        over8Hours: 11
      },
      resolutionByCategory: {
        foodQuality: 6.8,
        service: 5.9,
        cleanliness: 6.2,
        pricing: 4.8
      },
      recoveryRate: 52,
      monthlyTrend: [6.8, 6.5, 6.2, 6.0, 5.9, 6.1],
      escalatedComplaints: 9
    }
  ]

  const chainTotalComplaints = resolutionData.reduce((sum, item) => sum + item.totalComplaints, 0)
  const chainAvgResolutionTime = resolutionData.reduce((sum, item) => sum + (item.avgResolutionTimeHours * item.totalComplaints), 0) / chainTotalComplaints
  const chainRecoveryRate = resolutionData.reduce((sum, item) => sum + (item.recoveryRate * item.totalComplaints), 0) / chainTotalComplaints

  const getStatusColor = (time: number) => {
    if (time < 4) return 'text-green-600'
    if (time <= 8) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (time: number) => {
    if (time < 4) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (time <= 8) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getStatusIcon = (time: number) => {
    if (time < 4) return '⚡'
    if (time <= 8) return '⚠️'
    return '🚨'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Complaint Resolution Time
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: CUS_013 | Average Hours from Complaint Receipt to Resolution
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
            <strong>Formula:</strong> Average hours from complaint receipt to resolution
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Speed of complaint addressing. Target <4 hours; fast resolution recovers 60–80% of at-risk customers.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> Delays amplify dissatisfaction; quick resolution builds loyalty.
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
            <div className="text-xs font-normal text-green-600"><4 hours</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">4–8 hours</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">>8 hours</div>
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
            <span className="text-xs font-normal text-gray-500">Total Complaints</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-black dark:text-white">
                {chainTotalComplaints}
              </span>
              <span>📝</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Avg Resolution Time</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getStatusColor(chainAvgResolutionTime)}`}>
                {chainAvgResolutionTime.toFixed(1)}h
              </span>
              <span>⏱️</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Recovery Rate</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-black dark:text-white">
                {chainRecoveryRate.toFixed(0)}%
              </span>
              <span>🔄</span>
            </div>
          </div>
        </div>
      </div>

      {/* Location Performance */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Performance (Resolution Time Analysis)
        </h2>
        <div className="space-y-3">
          {resolutionData
            .sort((a, b) => a.avgResolutionTimeHours - b.avgResolutionTimeHours)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.avgResolutionTimeHours)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span>{getStatusIcon(location.avgResolutionTimeHours)}</span>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-black dark:text-white">
                    {location.avgResolutionTimeHours.toFixed(1)} hours avg
                  </div>
                  <div className="text-xs font-normal text-gray-500">
                    {location.totalComplaints} complaints | {location.recoveryRate}% recovery
                  </div>
                </div>
              </div>
              
              {/* Resolution timeframe breakdown */}
              <div className="grid grid-cols-4 gap-4 mb-3">
                <div className="text-center">
                  <div className="text-xs font-normal text-gray-500"><2h</div>
                  <div className="text-xs font-bold text-green-600">
                    {location.resolutionByTimeframe.under2Hours}
                  </div>
                  <div className="text-xs font-normal text-green-500">
                    {((location.resolutionByTimeframe.under2Hours / location.totalComplaints) * 100).toFixed(0)}%
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs font-normal text-gray-500">2-4h</div>
                  <div className="text-xs font-bold text-blue-600">
                    {location.resolutionByTimeframe.twoToFourHours}
                  </div>
                  <div className="text-xs font-normal text-blue-500">
                    {((location.resolutionByTimeframe.twoToFourHours / location.totalComplaints) * 100).toFixed(0)}%
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs font-normal text-gray-500">4-8h</div>
                  <div className="text-xs font-bold text-yellow-600">
                    {location.resolutionByTimeframe.fourToEightHours}
                  </div>
                  <div className="text-xs font-normal text-yellow-500">
                    {((location.resolutionByTimeframe.fourToEightHours / location.totalComplaints) * 100).toFixed(0)}%
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs font-normal text-gray-500">>8h</div>
                  <div className="text-xs font-bold text-red-600">
                    {location.resolutionByTimeframe.over8Hours}
                  </div>
                  <div className="text-xs font-normal text-red-500">
                    {((location.resolutionByTimeframe.over8Hours / location.totalComplaints) * 100).toFixed(0)}%
                  </div>
                </div>
              </div>

              {/* Resolution time by category */}
              <div className="mt-3">
                <h4 className="text-xs font-bold text-gray-600 mb-2">Avg Resolution Time by Category</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Food Quality:</span>
                    <span className="font-normal text-red-600">{location.resolutionByCategory.foodQuality}h</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Service:</span>
                    <span className="font-normal text-orange-600">{location.resolutionByCategory.service}h</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Cleanliness:</span>
                    <span className="font-normal text-yellow-600">{location.resolutionByCategory.cleanliness}h</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Pricing:</span>
                    <span className="font-normal text-blue-600">{location.resolutionByCategory.pricing}h</span>
                  </div>
                </div>
              </div>

              {/* Additional metrics */}
              <div className="mt-3 flex justify-between items-center">
                <div className="text-xs">
                  <span className="text-gray-500">Escalated: </span>
                  <span className="font-bold text-purple-600">{location.escalatedComplaints}</span>
                  <span className="text-gray-500"> ({((location.escalatedComplaints / location.totalComplaints) * 100).toFixed(0)}%)</span>
                </div>
                <div className="text-xs">
                  <span className="text-gray-500">Trend: </span>
                  <span className={`font-bold ${location.monthlyTrend[5] < location.monthlyTrend[0] ? 'text-green-600' : 'text-red-600'}`}>
                    {location.monthlyTrend[5] < location.monthlyTrend[0] ? '↓' : '↑'} 
                    {Math.abs(((location.monthlyTrend[5] - location.monthlyTrend[0]) / location.monthlyTrend[0]) * 100).toFixed(0)}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Resolution Time Distribution */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          📊 Chain-wide Resolution Time Distribution
        </h2>
        <div className="grid grid-cols-4 gap-4">
          <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded border border-green-200">
            <div className="text-xs font-bold text-green-700 dark:text-green-300">Under 2 Hours</div>
            <div className="text-xs font-normal text-green-600">
              {resolutionData.reduce((sum, loc) => sum + loc.resolutionByTimeframe.under2Hours, 0)} complaints
            </div>
            <div className="text-xs font-normal text-green-500">
              {((resolutionData.reduce((sum, loc) => sum + loc.resolutionByTimeframe.under2Hours, 0) / chainTotalComplaints) * 100).toFixed(1)}%
            </div>
          </div>
          <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200">
            <div className="text-xs font-bold text-blue-700 dark:text-blue-300">2-4 Hours</div>
            <div className="text-xs font-normal text-blue-600">
              {resolutionData.reduce((sum, loc) => sum + loc.resolutionByTimeframe.twoToFourHours, 0)} complaints
            </div>
            <div className="text-xs font-normal text-blue-500">
              {((resolutionData.reduce((sum, loc) => sum + loc.resolutionByTimeframe.twoToFourHours, 0) / chainTotalComplaints) * 100).toFixed(1)}%
            </div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">4-8 Hours</div>
            <div className="text-xs font-normal text-yellow-600">
              {resolutionData.reduce((sum, loc) => sum + loc.resolutionByTimeframe.fourToEightHours, 0)} complaints
            </div>
            <div className="text-xs font-normal text-yellow-500">
              {((resolutionData.reduce((sum, loc) => sum + loc.resolutionByTimeframe.fourToEightHours, 0) / chainTotalComplaints) * 100).toFixed(1)}%
            </div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">Over 8 Hours</div>
            <div className="text-xs font-normal text-red-600">
              {resolutionData.reduce((sum, loc) => sum + loc.resolutionByTimeframe.over8Hours, 0)} complaints
            </div>
            <div className="text-xs font-normal text-red-500">
              {((resolutionData.reduce((sum, loc) => sum + loc.resolutionByTimeframe.over8Hours, 0) / chainTotalComplaints) * 100).toFixed(1)}%
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
              <li>• Complaint management system</li>
              <li>• Customer service logs</li>
              <li>• Resolution tracking tickets</li>
              <li>• Follow-up survey results</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Real-time resolution tracking</li>
              <li>• Daily performance reports</li>
              <li>• Alert if >8 hours avg</li>
              <li>• Weekly trend analysis</li>
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
            • By complaint category resolution times
          </p>
          <p className="text-xs font-normal text-purple-800 dark:text-purple-300">
            • By staff member performance
          </p>
          <p className="text-xs font-normal text-purple-800 dark:text-purple-300">
            • Customer recovery rate correlation
          </p>
          <p className="text-xs font-normal text-purple-800 dark:text-purple-300">
            • Escalation pattern analysis
          </p>
        </div>
      </div>

      {/* Users & Access */}
      <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-lg border border-gray-200">
        <h2 className="text-xs font-bold text-black dark:text-white mb-2">
          👥 Authorized Users
        </h2>
        <p className="text-xs font-normal text-gray-500">
          Manager, Customer Service Manager, Operations Manager
        </p>
      </div>
    </div>
  )
}