import { RESTAURANTS } from '@/lib/restaurant-data'

export default function TheoreticalActualVarianceKPI() {
  // FOD_005 Theoretical vs. Actual Cost Variance - Exact specifications from restaurant_kpi_metrics_127.txt
  const varianceData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      actualCOGS: 79250,
      theoreticalCOGS: 76800, // Based on recipes and sales mix
      variance: 3.2, // (79250 - 76800) / 76800 * 100
      status: 'warning', // >3% indicates process failure
      costLeakage: 2450, // Actual variance amount
      weeklyTrend: [2.8, 3.5, 3.1, 3.2],
      rootCauseAnalysis: {
        portionCreep: 1200, // 49% of variance
        ingredientSubstitutions: 650, // 27%
        theft: 300, // 12%
        administrativeErrors: 300 // 12%
      },
      dishLevelVariance: [
        { name: 'Butter Chicken', theoretical: 145, actual: 162, variance: 11.7, volume: 45 },
        { name: 'Dal Makhani', theoretical: 85, actual: 92, variance: 8.2, volume: 38 },
        { name: 'Chicken Biryani', theoretical: 185, actual: 195, variance: 5.4, volume: 52 },
        { name: 'Paneer Tikka', theoretical: 125, actual: 130, variance: 4.0, volume: 32 }
      ]
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      actualCOGS: 65900,
      theoreticalCOGS: 64200,
      variance: 2.6, // Within acceptable range
      status: 'good',
      costLeakage: 1700,
      weeklyTrend: [2.2, 2.8, 2.4, 2.6],
      rootCauseAnalysis: {
        portionCreep: 850, // 50%
        ingredientSubstitutions: 510, // 30%
        theft: 170, // 10%
        administrativeErrors: 170 // 10%
      },
      dishLevelVariance: [
        { name: 'Chicken Curry', theoretical: 135, actual: 142, variance: 5.2, volume: 42 },
        { name: 'Vegetable Biryani', theoretical: 95, actual: 98, variance: 3.2, volume: 35 },
        { name: 'Fish Curry', theoretical: 165, actual: 168, variance: 1.8, volume: 28 },
        { name: 'Mutton Curry', theoretical: 225, actual: 228, variance: 1.3, volume: 18 }
      ]
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      actualCOGS: 60100,
      theoreticalCOGS: 56800,
      variance: 5.8, // High variance - needs investigation
      status: 'critical',
      costLeakage: 3300,
      weeklyTrend: [5.2, 6.8, 5.9, 5.8],
      rootCauseAnalysis: {
        portionCreep: 1650, // 50%
        ingredientSubstitutions: 990, // 30%
        theft: 330, // 10%
        administrativeErrors: 330 // 10%
      },
      dishLevelVariance: [
        { name: 'Gourmet Pizza', theoretical: 285, actual: 325, variance: 14.0, volume: 22 },
        { name: 'Artisan Pasta', theoretical: 175, actual: 195, variance: 11.4, volume: 28 },
        { name: 'Specialty Salad', theoretical: 145, actual: 158, variance: 9.0, volume: 35 },
        { name: 'Craft Burger', theoretical: 195, actual: 210, variance: 7.7, volume: 25 }
      ]
    }
  ]

  const chainTotalActual = varianceData.reduce((sum, item) => sum + item.actualCOGS, 0)
  const chainTotalTheoretical = varianceData.reduce((sum, item) => sum + item.theoreticalCOGS, 0)
  const chainVariance = ((chainTotalActual - chainTotalTheoretical) / chainTotalTheoretical) * 100
  const chainCostLeakage = varianceData.reduce((sum, item) => sum + item.costLeakage, 0)

  const getStatusColor = (variance: number) => {
    if (variance <= 3) return 'text-green-600'
    if (variance <= 5) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (variance: number) => {
    if (variance <= 3) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (variance <= 5) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getStatusIcon = (variance: number) => {
    if (variance <= 3) return '✅'
    if (variance <= 5) return '⚠️'
    return '🚨'
  }

  const getDishVarianceColor = (variance: number) => {
    if (variance <= 5) return 'text-green-600'
    if (variance <= 10) return 'text-yellow-600'
    return 'text-red-600'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Theoretical vs. Actual Cost Variance
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: FOD_005 | Difference between expected COGS and actual COGS
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
            <strong>Formula:</strong> (Actual COGS - Theoretical COGS based on recipes and sales mix) ÷ Theoretical COGS × 100
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Difference between expected COGS (by recipe) and actual COGS. Variance >3% indicates process failure.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> Identifies operational inefficiencies, theft, portion control issues, and recipe adherence problems.
          </p>
        </div>
      </div>

      {/* Alert Thresholds */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🎯 Variance Thresholds & Investigation Triggers
        </h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded border border-green-200">
            <div className="text-xs font-bold text-green-700 dark:text-green-300">ACCEPTABLE</div>
            <div className="text-xs font-normal text-green-600">≤3%</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">INVESTIGATE</div>
            <div className="text-xs font-normal text-yellow-600">3–5%</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&gt;5%</div>
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
            <span className="text-xs font-normal text-gray-500">Chain Variance</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getStatusColor(chainVariance)}`}>
                +{chainVariance.toFixed(1)}%
              </span>
              <span>{getStatusIcon(chainVariance)}</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Total Cost Leakage</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-red-600">
                ₹{chainCostLeakage.toLocaleString('en-IN')}
              </span>
              <span>💸</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Monthly Projected Loss</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-red-600">
                ₹{(chainCostLeakage * 4.33).toLocaleString('en-IN')}
              </span>
              <span>📊</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Profit Impact</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-red-600">
                -{chainVariance.toFixed(1)}% margin
              </span>
              <span>📉</span>
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
          {varianceData
            .sort((a, b) => a.variance - b.variance)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.variance)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span>{getStatusIcon(location.variance)}</span>
                </div>
                <div className="text-right">
                  <div className={`text-xs font-bold ${getStatusColor(location.variance)}`}>
                    +{location.variance.toFixed(1)}%
                  </div>
                  <div className="text-xs font-normal text-red-600">
                    ₹{location.costLeakage.toLocaleString('en-IN')} weekly loss
                  </div>
                </div>
              </div>
              
              {/* Variance Breakdown */}
              <div className="grid grid-cols-2 gap-4 mt-3">
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-1">Root Cause Analysis</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Portion Creep:</span>
                      <span className="font-normal text-red-600">₹{location.rootCauseAnalysis.portionCreep.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Ingredient Changes:</span>
                      <span className="font-normal text-yellow-600">₹{location.rootCauseAnalysis.ingredientSubstitutions.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Theft/Shrinkage:</span>
                      <span className="font-normal text-red-600">₹{location.rootCauseAnalysis.theft.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Admin Errors:</span>
                      <span className="font-normal text-gray-600">₹{location.rootCauseAnalysis.administrativeErrors.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-1">COGS Comparison</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Theoretical COGS:</span>
                      <span className="font-normal text-green-600">₹{location.theoreticalCOGS.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Actual COGS:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.actualCOGS.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between text-xs border-t pt-1">
                      <span className="text-gray-500 font-bold">Variance Amount:</span>
                      <span className={`font-bold ${getStatusColor(location.variance)}`}>₹{location.costLeakage.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dish-Level Analysis */}
              <div className="mt-3">
                <h4 className="text-xs font-bold text-gray-600 mb-1">Top Variance Dishes</h4>
                <div className="grid grid-cols-2 gap-2">
                  {location.dishLevelVariance.slice(0, 4).map((dish, idx) => (
                    <div key={idx} className="text-xs">
                      <div className="flex justify-between">
                        <span className="text-gray-500">{dish.name}:</span>
                        <span className={`font-normal ${getDishVarianceColor(dish.variance)}`}>
                          +{dish.variance.toFixed(1)}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Weekly Trend */}
              <div className="mt-3">
                <h4 className="text-xs font-bold text-gray-600 mb-1">4-Week Variance Trend</h4>
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

      {/* Action Required */}
      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200">
        <h2 className="text-xs font-bold text-red-900 dark:text-red-300 mb-2">
          🚨 Immediate Action Required
        </h2>
        <div className="space-y-2">
          <p className="text-xs font-normal text-red-800 dark:text-red-300">
            <strong>Shahpur Jat (5.8% variance)</strong> - Critical investigation needed
          </p>
          <div className="space-y-1">
            <p className="text-xs font-normal text-red-800 dark:text-red-300">
              • Audit portion control procedures for Gourmet Pizza (14% variance)
            </p>
            <p className="text-xs font-normal text-red-800 dark:text-red-300">
              • Review recipe adherence and ingredient substitutions
            </p>
            <p className="text-xs font-normal text-red-800 dark:text-red-300">
              • Implement daily variance tracking for high-risk dishes
            </p>
            <p className="text-xs font-normal text-red-800 dark:text-red-300">
              • Conduct inventory audit to identify potential theft/shrinkage
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
              <li>• Recipe costing module (theoretical COGS)</li>
              <li>• Inventory management (actual COGS)</li>
              <li>• PetPooja POS (sales mix and volumes)</li>
              <li>• Purchase order system (ingredient costs)</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Daily variance calculation</li>
              <li>• Weekly detailed analysis</li>
              <li>• Alert if variance &gt;3%</li>
              <li>• Monthly root cause review</li>
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
            • Account for ingredient substitutions due to seasonal availability
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Monitor price fluctuations affecting theoretical cost calculations
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Track local supplier quality variations impacting yields
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Include wastage factors for regional cooking methods
          </p>
        </div>
      </div>

      {/* Users & Access */}
      <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-lg border border-gray-200">
        <h2 className="text-xs font-bold text-black dark:text-white mb-2">
          👥 Authorized Users
        </h2>
        <p className="text-xs font-normal text-gray-500">
          Manager, Owner, Finance, Kitchen Manager, Head Chef
        </p>
      </div>
    </div>
  )
}