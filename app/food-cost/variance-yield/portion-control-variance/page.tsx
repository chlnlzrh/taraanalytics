import { RESTAURANTS } from '@/lib/restaurant-data'

export default function PortionControlVarianceKPI() {
  // FOD_006 Portion Control Variance - Exact specifications from restaurant_kpi_metrics_127.txt
  const portionData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      overallVariance: 8.5, // Average weight variance from recipe standard
      status: 'warning', // 5-10% variance needs attention
      spotChecksCompleted: 24,
      spotChecksTotal: 25,
      complianceRate: 96.0,
      dishAnalysis: [
        { name: 'Butter Chicken', recipeWeight: 300, actualWeight: 335, variance: 11.7, checks: 6, compliance: 83.3 },
        { name: 'Dal Makhani', recipeWeight: 250, actualWeight: 265, variance: 6.0, checks: 5, compliance: 100.0 },
        { name: 'Chicken Biryani', recipeWeight: 400, actualWeight: 425, variance: 6.3, checks: 8, compliance: 87.5 },
        { name: 'Paneer Tikka', recipeWeight: 200, actualWeight: 215, variance: 7.5, checks: 5, compliance: 80.0 }
      ],
      staffCompliance: [
        { chef: 'Raj Kumar', variance: 12.5, dishes: 8, training: 'Required' },
        { chef: 'Amit Singh', variance: 6.2, dishes: 10, training: 'Current' },
        { chef: 'Priya Sharma', variance: 4.8, dishes: 6, training: 'Current' }
      ],
      weeklyTrend: [7.2, 8.8, 8.1, 8.5],
      costImpact: 1850 // Weekly cost impact due to portion creep
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      overallVariance: 6.2,
      status: 'warning',
      spotChecksCompleted: 22,
      spotChecksTotal: 25,
      complianceRate: 88.0,
      dishAnalysis: [
        { name: 'Chicken Curry', recipeWeight: 280, actualWeight: 295, variance: 5.4, checks: 5, compliance: 100.0 },
        { name: 'Vegetable Biryani', recipeWeight: 350, actualWeight: 375, variance: 7.1, checks: 6, compliance: 83.3 },
        { name: 'Fish Curry', recipeWeight: 220, actualWeight: 235, variance: 6.8, checks: 6, compliance: 83.3 },
        { name: 'Mutton Curry', recipeWeight: 250, actualWeight: 260, variance: 4.0, checks: 5, compliance: 100.0 }
      ],
      staffCompliance: [
        { chef: 'Suresh Kumar', variance: 8.1, dishes: 9, training: 'Scheduled' },
        { chef: 'Deepak Yadav', variance: 5.2, dishes: 8, training: 'Current' },
        { chef: 'Neha Gupta', variance: 5.0, dishes: 5, training: 'Current' }
      ],
      weeklyTrend: [5.8, 6.5, 6.0, 6.2],
      costImpact: 1420
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      overallVariance: 12.8, // Critical - portion creep is significant
      status: 'critical',
      spotChecksCompleted: 18,
      spotChecksTotal: 25,
      complianceRate: 72.0,
      dishAnalysis: [
        { name: 'Gourmet Pizza', recipeWeight: 450, actualWeight: 520, variance: 15.6, checks: 4, compliance: 50.0 },
        { name: 'Artisan Pasta', recipeWeight: 300, actualWeight: 345, variance: 15.0, checks: 5, compliance: 60.0 },
        { name: 'Specialty Salad', recipeWeight: 180, actualWeight: 195, variance: 8.3, checks: 5, compliance: 80.0 },
        { name: 'Craft Burger', recipeWeight: 350, actualWeight: 385, variance: 10.0, checks: 4, compliance: 75.0 }
      ],
      staffCompliance: [
        { chef: 'Marco Silva', variance: 16.2, dishes: 6, training: 'Required' },
        { chef: 'Anjali Mehta', variance: 11.5, dishes: 7, training: 'Required' },
        { chef: 'Rohit Kapoor', variance: 10.8, dishes: 5, training: 'Required' }
      ],
      weeklyTrend: [11.2, 14.1, 12.5, 12.8],
      costImpact: 2750
    }
  ]

  const chainAverage = portionData.reduce((sum, item) => sum + item.overallVariance, 0) / portionData.length
  const chainCostImpact = portionData.reduce((sum, item) => sum + item.costImpact, 0)
  const totalSpotChecks = portionData.reduce((sum, item) => sum + item.spotChecksCompleted, 0)
  const totalPlannedChecks = portionData.reduce((sum, item) => sum + item.spotChecksTotal, 0)

  const getStatusColor = (variance: number) => {
    if (variance <= 5) return 'text-green-600'
    if (variance <= 10) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (variance: number) => {
    if (variance <= 5) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (variance <= 10) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getStatusIcon = (variance: number) => {
    if (variance <= 5) return '✅'
    if (variance <= 10) return '⚠️'
    return '🚨'
  }

  const getComplianceColor = (rate: number) => {
    if (rate >= 95) return 'text-green-600'
    if (rate >= 85) return 'text-yellow-600'
    return 'text-red-600'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Portion Control Variance
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: FOD_006 | Average weight of served portion vs. recipe standard
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
            <strong>Formula:</strong> Average weight of served portion vs. recipe standard ÷ Recipe standard weight
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Spot-checked weekly; portion creep of 5–10% easily missed but directly reduces profit.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> Small portion increases compound significantly; 10% creep can eliminate profit margins.
          </p>
        </div>
      </div>

      {/* Alert Thresholds */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🎯 Portion Control Thresholds
        </h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded border border-green-200">
            <div className="text-xs font-bold text-green-700 dark:text-green-300">EXCELLENT</div>
            <div className="text-xs font-normal text-green-600">≤5%</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">NEEDS ATTENTION</div>
            <div className="text-xs font-normal text-yellow-600">5–10%</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&gt;10%</div>
          </div>
        </div>
      </div>

      {/* Chain Summary */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          📈 Chain Performance Summary
        </h2>
        <div className="grid grid-cols-4 gap-6">
          <div>
            <span className="text-xs font-normal text-gray-500">Average Variance</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getStatusColor(chainAverage)}`}>
                +{chainAverage.toFixed(1)}%
              </span>
              <span>{getStatusIcon(chainAverage)}</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Weekly Cost Impact</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-red-600">
                ₹{chainCostImpact.toLocaleString('en-IN')}
              </span>
              <span>💸</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Spot Check Completion</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-black dark:text-white">
                {((totalSpotChecks / totalPlannedChecks) * 100).toFixed(1)}%
              </span>
              <span>📋</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Monthly Projected Loss</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-red-600">
                ₹{(chainCostImpact * 4.33).toLocaleString('en-IN')}
              </span>
              <span>📊</span>
            </div>
          </div>
        </div>
      </div>

      {/* Location Performance */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Performance Analysis
        </h2>
        <div className="space-y-3">
          {portionData
            .sort((a, b) => a.overallVariance - b.overallVariance)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.overallVariance)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span>{getStatusIcon(location.overallVariance)}</span>
                </div>
                <div className="text-right">
                  <div className={`text-xs font-bold ${getStatusColor(location.overallVariance)}`}>
                    +{location.overallVariance.toFixed(1)}%
                  </div>
                  <div className="text-xs font-normal text-red-600">
                    ₹{location.costImpact.toLocaleString('en-IN')} weekly loss
                  </div>
                </div>
              </div>
              
              {/* Spot Check Summary */}
              <div className="grid grid-cols-2 gap-4 mt-3">
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-1">Spot Check Summary</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Checks Completed:</span>
                      <span className="font-normal text-black dark:text-white">{location.spotChecksCompleted}/{location.spotChecksTotal}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Compliance Rate:</span>
                      <span className={`font-normal ${getComplianceColor(location.complianceRate)}`}>{location.complianceRate.toFixed(1)}%</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-1">Top Variance Dishes</h4>
                  <div className="space-y-1">
                    {location.dishAnalysis.slice(0, 2).map((dish, idx) => (
                      <div key={idx} className="flex justify-between text-xs">
                        <span className="text-gray-500">{dish.name}:</span>
                        <span className={`font-normal ${getStatusColor(dish.variance)}`}>+{dish.variance.toFixed(1)}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Staff Performance */}
              <div className="mt-3">
                <h4 className="text-xs font-bold text-gray-600 mb-1">Staff Performance</h4>
                <div className="grid grid-cols-3 gap-2">
                  {location.staffCompliance.map((staff, idx) => (
                    <div key={idx} className="text-xs">
                      <div className="flex justify-between">
                        <span className="text-gray-500">{staff.chef.split(' ')[0]}:</span>
                        <span className={`font-normal ${getStatusColor(staff.variance)}`}>
                          +{staff.variance.toFixed(1)}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Weekly Trend */}
              <div className="mt-3">
                <h4 className="text-xs font-bold text-gray-600 mb-1">4-Week Trend</h4>
                <div className="flex gap-2">
                  {location.weeklyTrend.map((value, idx) => (
                    <div key={idx} className="text-xs">
                      <span className="text-gray-500">W{idx + 1}:</span>
                      <span className={`font-normal ml-1 ${getStatusColor(value)}`}>
                        +{value}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Training Requirements */}
      <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200">
        <h2 className="text-xs font-bold text-yellow-900 dark:text-yellow-300 mb-2">
          🎓 Training & Corrective Actions Required
        </h2>
        <div className="space-y-2">
          <p className="text-xs font-normal text-yellow-800 dark:text-yellow-300">
            <strong>Immediate Actions:</strong> Shahpur Jat requires urgent portion control training
          </p>
          <div className="space-y-1">
            <p className="text-xs font-normal text-yellow-800 dark:text-yellow-300">
              • Retrain all kitchen staff on standard portion sizes
            </p>
            <p className="text-xs font-normal text-yellow-800 dark:text-yellow-300">
              • Implement digital portion scales for consistency
            </p>
            <p className="text-xs font-normal text-yellow-800 dark:text-yellow-300">
              • Increase spot check frequency to daily for 2 weeks
            </p>
            <p className="text-xs font-normal text-yellow-800 dark:text-yellow-300">
              • Review and update portion control standard operating procedures
            </p>
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
              <li>• Kitchen spot checks (manual weighing)</li>
              <li>• Recipe management system (standard portions)</li>
              <li>• Staff training records</li>
              <li>• Digital scale readings (where available)</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Weekly spot checks (minimum 25 per location)</li>
              <li>• Daily monitoring for critical locations</li>
              <li>• Alert if variance &gt;5%</li>
              <li>• Monthly staff performance review</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Users & Access */}
      <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-lg border border-gray-200">
        <h2 className="text-xs font-bold text-black dark:text-white mb-2">
          👥 Authorized Users
        </h2>
        <p className="text-xs font-normal text-gray-500">
          Manager, Kitchen Manager, Head Chef, Training Manager
        </p>
      </div>
    </div>
  )
}