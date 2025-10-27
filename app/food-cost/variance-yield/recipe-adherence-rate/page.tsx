import { RESTAURANTS } from '@/lib/restaurant-data'

export default function RecipeAdherenceRateKPI() {
  // FOD_007 Recipe Adherence Rate % - Exact specifications from restaurant_kpi_metrics_127.txt
  const adherenceData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      overallAdherence: 96.2,
      status: 'good', // >95% target met
      totalDishesObserved: 142,
      compliantDishes: 137,
      observationPeriod: 'Week 43',
      categoryBreakdown: {
        appetizers: { observed: 28, compliant: 27, rate: 96.4 },
        mains: { observed: 65, compliant: 62, rate: 95.4 },
        desserts: { observed: 18, compliant: 18, rate: 100.0 },
        beverages: { observed: 31, compliant: 30, rate: 96.8 }
      },
      nonComplianceReasons: [
        { reason: 'Missing garnish', instances: 3, percentage: 60.0 },
        { reason: 'Wrong portion size', instances: 1, percentage: 20.0 },
        { reason: 'Ingredient substitution', instances: 1, percentage: 20.0 }
      ],
      shiftPerformance: {
        morning: 97.5,
        evening: 94.8,
        night: 96.0
      },
      weeklyTrend: [95.8, 96.5, 95.9, 96.2]
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      overallAdherence: 94.1,
      status: 'warning', // Below 95% target
      totalDishesObserved: 128,
      compliantDishes: 120,
      observationPeriod: 'Week 43',
      categoryBreakdown: {
        appetizers: { observed: 25, compliant: 23, rate: 92.0 },
        mains: { observed: 58, compliant: 55, rate: 94.8 },
        desserts: { observed: 15, compliant: 15, rate: 100.0 },
        beverages: { observed: 30, compliant: 27, rate: 90.0 }
      },
      nonComplianceReasons: [
        { reason: 'Missing garnish', instances: 4, percentage: 50.0 },
        { reason: 'Wrong plating style', instances: 2, percentage: 25.0 },
        { reason: 'Temperature issues', instances: 2, percentage: 25.0 }
      ],
      shiftPerformance: {
        morning: 96.2,
        evening: 92.5,
        night: 93.8
      },
      weeklyTrend: [93.2, 94.8, 93.5, 94.1]
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      overallAdherence: 91.3,
      status: 'critical', // Significantly below 95% target
      totalDishesObserved: 115,
      compliantDishes: 105,
      observationPeriod: 'Week 43',
      categoryBreakdown: {
        appetizers: { observed: 22, compliant: 19, rate: 86.4 },
        mains: { observed: 52, compliant: 47, rate: 90.4 },
        desserts: { observed: 18, compliant: 17, rate: 94.4 },
        beverages: { observed: 23, compliant: 22, rate: 95.7 }
      },
      nonComplianceReasons: [
        { reason: 'Creative presentation deviation', instances: 5, percentage: 50.0 },
        { reason: 'Ingredient quality substitution', instances: 3, percentage: 30.0 },
        { reason: 'Portion size variation', instances: 2, percentage: 20.0 }
      ],
      shiftPerformance: {
        morning: 93.8,
        evening: 88.2,
        night: 91.9
      },
      weeklyTrend: [89.5, 92.1, 90.8, 91.3]
    }
  ]

  const chainTotalObserved = adherenceData.reduce((sum, item) => sum + item.totalDishesObserved, 0)
  const chainTotalCompliant = adherenceData.reduce((sum, item) => sum + item.compliantDishes, 0)
  const chainAdherence = (chainTotalCompliant / chainTotalObserved) * 100

  const getStatusColor = (rate: number) => {
    if (rate >= 95) return 'text-green-600'
    if (rate >= 90) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (rate: number) => {
    if (rate >= 95) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (rate >= 90) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getStatusIcon = (rate: number) => {
    if (rate >= 95) return '✅'
    if (rate >= 90) return '⚠️'
    return '🚨'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Recipe Adherence Rate %
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: FOD_007 | Percentage of dishes meeting ingredient and portion standards
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
            <strong>Formula:</strong> (Dishes meeting ingredient & portion standards ÷ Total dishes observed) × 100
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Percentage of dishes meeting ingredient and portion standards (spot-checks during service). Target >95%.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> Recipe consistency ensures food cost control, quality standards, and customer satisfaction.
          </p>
        </div>
      </div>

      {/* Alert Thresholds */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🎯 Recipe Adherence Thresholds
        </h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded border border-green-200">
            <div className="text-xs font-bold text-green-700 dark:text-green-300">TARGET</div>
            <div className="text-xs font-normal text-green-600">≥95%</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">NEEDS TRAINING</div>
            <div className="text-xs font-normal text-yellow-600">90–95%</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&lt;90%</div>
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
            <span className="text-xs font-normal text-gray-500">Chain Adherence Rate</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getStatusColor(chainAdherence)}`}>
                {chainAdherence.toFixed(1)}%
              </span>
              <span>{getStatusIcon(chainAdherence)}</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Total Dishes Observed</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-black dark:text-white">
                {chainTotalObserved}
              </span>
              <span>👁️</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Compliant Dishes</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-green-600">
                {chainTotalCompliant}
              </span>
              <span>✅</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Non-Compliant Dishes</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-red-600">
                {chainTotalObserved - chainTotalCompliant}
              </span>
              <span>❌</span>
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
          {adherenceData
            .sort((a, b) => b.overallAdherence - a.overallAdherence)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.overallAdherence)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span>{getStatusIcon(location.overallAdherence)}</span>
                </div>
                <div className="text-right">
                  <div className={`text-xs font-bold ${getStatusColor(location.overallAdherence)}`}>
                    {location.overallAdherence.toFixed(1)}%
                  </div>
                  <div className="text-xs font-normal text-gray-500">
                    {location.compliantDishes}/{location.totalDishesObserved} dishes
                  </div>
                </div>
              </div>
              
              {/* Category Breakdown */}
              <div className="grid grid-cols-2 gap-4 mt-3">
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-1">Category Performance</h4>
                  <div className="space-y-1">
                    {Object.entries(location.categoryBreakdown).map(([category, data]) => (
                      <div key={category} className="flex justify-between text-xs">
                        <span className="text-gray-500 capitalize">{category}:</span>
                        <span className={`font-normal ${getStatusColor(data.rate)}`}>
                          {data.rate.toFixed(1)}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-1">Non-Compliance Reasons</h4>
                  <div className="space-y-1">
                    {location.nonComplianceReasons.slice(0, 3).map((reason, idx) => (
                      <div key={idx} className="flex justify-between text-xs">
                        <span className="text-gray-500">{reason.reason}:</span>
                        <span className="font-normal text-red-600">{reason.instances}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Shift Performance */}
              <div className="mt-3">
                <h4 className="text-xs font-bold text-gray-600 mb-1">Shift Performance</h4>
                <div className="grid grid-cols-3 gap-2">
                  {Object.entries(location.shiftPerformance).map(([shift, rate]) => (
                    <div key={shift} className="text-xs">
                      <div className="flex justify-between">
                        <span className="text-gray-500 capitalize">{shift}:</span>
                        <span className={`font-normal ${getStatusColor(rate)}`}>
                          {rate.toFixed(1)}%
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
                        {value}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Plan */}
      <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200">
        <h2 className="text-xs font-bold text-yellow-900 dark:text-yellow-300 mb-2">
          📋 Action Plan for Improvement
        </h2>
        <div className="space-y-2">
          <p className="text-xs font-normal text-yellow-800 dark:text-yellow-300">
            <strong>Shahpur Jat (91.3%)</strong> - Immediate recipe training required
          </p>
          <div className="space-y-1">
            <p className="text-xs font-normal text-yellow-800 dark:text-yellow-300">
              • Focus on appetizer consistency (86.4% compliance)
            </p>
            <p className="text-xs font-normal text-yellow-800 dark:text-yellow-300">
              • Address creative presentation deviations through standardization
            </p>
            <p className="text-xs font-normal text-yellow-800 dark:text-yellow-300">
              • Increase evening shift supervision (88.2% compliance)
            </p>
            <p className="text-xs font-normal text-yellow-800 dark:text-yellow-300">
              • Review and update recipe cards with visual guides
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
              <li>• Kitchen observation logs</li>
              <li>• Recipe management system</li>
              <li>• Quality control checklists</li>
              <li>• Staff training records</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Daily observations during service</li>
              <li>• Weekly compliance summary</li>
              <li>• Alert if rate drops below 95%</li>
              <li>• Monthly recipe standardization review</li>
            </ul>
          </div>
        </div>
      </div>

      {/* India-Specific Considerations */}
      <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200">
        <h2 className="text-xs font-bold text-orange-900 dark:text-orange-300 mb-2">
          🇮🇳 India-Specific Considerations
        </h2>
        <div className="space-y-1">
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Account for regional taste preferences and acceptable variations
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Monitor spice level consistency across different customer preferences
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Include seasonal ingredient substitutions in recipe standards
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Consider cultural presentation styles while maintaining brand standards
          </p>
        </div>
      </div>

      {/* Users & Access */}
      <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-lg border border-gray-200">
        <h2 className="text-xs font-bold text-black dark:text-white mb-2">
          👥 Authorized Users
        </h2>
        <p className="text-xs font-normal text-gray-500">
          Manager, Kitchen Manager, Head Chef, Quality Manager
        </p>
      </div>
    </div>
  )
}