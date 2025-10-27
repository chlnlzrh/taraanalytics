import { RESTAURANTS } from '@/lib/restaurant-data'

export default function BreakevenPointKPI() {
  // FIN_009 Breakeven Point - Exact specifications from restaurant_kpi_metrics_127.txt
  const breakevenData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      currentMonthlyRevenue: 485000,
      fixedCosts: {
        rent: 60000,
        salaries: 85000, // Management salaries
        insurance: 8000,
        utilities: 15000, // Fixed portion
        other: 12000
      },
      totalFixedCosts: 180000,
      variableCosts: {
        cogs: 155200,
        hourlyLabor: 34750,
        utilities: 4400, // Variable portion
        supplies: 15000,
        delivery: 8000
      },
      totalVariableCosts: 217350,
      variableCostRatio: 0.448, // 44.8% of sales
      contributionMargin: 0.552, // 55.2%
      breakevenRevenue: 326087, // Fixed costs ÷ contribution margin
      currentVsBreakeven: 148.7, // Current revenue as % of breakeven
      status: 'excellent', // Well above breakeven
      daysToBreakeven: 20, // Days needed to reach breakeven each month
      safetyMargin: 158913 // Revenue above breakeven
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      currentMonthlyRevenue: 395000,
      fixedCosts: {
        rent: 55000,
        salaries: 75000,
        insurance: 7000,
        utilities: 12000,
        other: 10000
      },
      totalFixedCosts: 159000,
      variableCosts: {
        cogs: 118500,
        hourlyLabor: 23750,
        utilities: 3800,
        supplies: 12000,
        delivery: 6500
      },
      totalVariableCosts: 164550,
      variableCostRatio: 0.417, // 41.7% of sales
      contributionMargin: 0.583, // 58.3%
      breakevenRevenue: 272726, // Fixed costs ÷ contribution margin
      currentVsBreakeven: 144.8, // Current revenue as % of breakeven
      status: 'excellent',
      daysToBreakeven: 21,
      safetyMargin: 122274
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      currentMonthlyRevenue: 365000,
      fixedCosts: {
        rent: 50000,
        salaries: 65000,
        insurance: 6000,
        utilities: 10000,
        other: 9000
      },
      totalFixedCosts: 140000,
      variableCosts: {
        cogs: 146000,
        hourlyLabor: 26250,
        utilities: 8250,
        supplies: 14000,
        delivery: 7500
      },
      totalVariableCosts: 202000,
      variableCostRatio: 0.553, // 55.3% of sales
      contributionMargin: 0.447, // 44.7%
      breakevenRevenue: 313198, // Fixed costs ÷ contribution margin
      currentVsBreakeven: 116.5, // Close to breakeven - needs attention
      status: 'warning', // Within 20% of breakeven
      daysToBreakeven: 26,
      safetyMargin: 51802
    }
  ]

  const chainAverageBreakeven = breakevenData.reduce((sum, item) => sum + item.breakevenRevenue, 0) / breakevenData.length
  const chainTotalRevenue = breakevenData.reduce((sum, item) => sum + item.currentMonthlyRevenue, 0)
  const chainTotalFixedCosts = breakevenData.reduce((sum, item) => sum + item.totalFixedCosts, 0)
  const profitableLocations = breakevenData.filter(item => item.currentVsBreakeven > 120).length

  const getStatusColor = (ratio: number) => {
    if (ratio >= 130) return 'text-green-600'
    if (ratio >= 110) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (ratio: number) => {
    if (ratio >= 130) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (ratio >= 110) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getStatusIcon = (ratio: number) => {
    if (ratio >= 150) return '🟢'
    if (ratio >= 130) return '✅'
    if (ratio >= 110) return '⚠️'
    if (ratio < 100) return '💀'
    return '🚨'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Breakeven Point (Monthly Revenue)
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: FIN_009 | Revenue Required to Cover All Fixed & Variable Costs
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
            <strong>Formula:</strong> Total Fixed Costs ÷ (1 - (Total Variable Costs ÷ Total Sales))
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Monthly revenue required to cover all fixed and variable costs per location. Threshold for profitability.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> Guides staffing, promotional strategy, and viability assessment. Knowing breakeven informs daily management.
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
            <div className="text-xs font-normal text-green-600">Current revenue 130%+ of breakeven</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">Within 110-130% of breakeven</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">Current revenue &lt; breakeven</div>
          </div>
        </div>
      </div>

      {/* Chain Summary */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          📈 Chain Breakeven Analysis
        </h2>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <span className="text-xs font-normal text-gray-500">Average Breakeven Point</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-black dark:text-white">
                ₹{chainAverageBreakeven.toLocaleString('en-IN')}
              </span>
              <span>🎯</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Chain Revenue vs Breakeven</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getStatusColor((chainTotalRevenue / (chainAverageBreakeven * 3)) * 100)}`}>
                {((chainTotalRevenue / (chainAverageBreakeven * 3)) * 100).toFixed(1)}%
              </span>
              <span>📊</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Healthy Locations</span>
            <div className="text-xs font-normal text-green-600">
              {profitableLocations}/3 above 120% of breakeven
            </div>
          </div>
        </div>
      </div>

      {/* Location Breakeven Analysis */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Breakeven Performance
        </h2>
        <div className="space-y-3">
          {breakevenData
            .sort((a, b) => b.currentVsBreakeven - a.currentVsBreakeven)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.currentVsBreakeven)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span>{getStatusIcon(location.currentVsBreakeven)}</span>
                </div>
                <div className="text-right">
                  <div className={`text-xs font-bold ${getStatusColor(location.currentVsBreakeven)}`}>
                    {location.currentVsBreakeven.toFixed(1)}%
                  </div>
                  <div className="text-xs font-normal text-gray-500">
                    of breakeven point
                  </div>
                </div>
              </div>
              
              {/* Revenue vs Breakeven */}
              <div className="grid grid-cols-3 gap-4 mb-3 text-xs">
                <div>
                  <span className="text-gray-500">Current Revenue:</span>
                  <div className="font-bold text-black dark:text-white">₹{location.currentMonthlyRevenue.toLocaleString('en-IN')}</div>
                </div>
                <div>
                  <span className="text-gray-500">Breakeven Revenue:</span>
                  <div className="font-bold text-orange-600">₹{location.breakevenRevenue.toLocaleString('en-IN')}</div>
                </div>
                <div>
                  <span className="text-gray-500">Safety Margin:</span>
                  <div className={`font-bold ${location.safetyMargin > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    ₹{location.safetyMargin.toLocaleString('en-IN')}
                  </div>
                </div>
              </div>

              {/* Fixed vs Variable Cost Breakdown */}
              <div className="grid grid-cols-2 gap-4 mt-3">
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-2">Fixed Costs (₹{location.totalFixedCosts.toLocaleString('en-IN')})</h4>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Rent:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.fixedCosts.rent.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Salaries:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.fixedCosts.salaries.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Insurance:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.fixedCosts.insurance.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Other:</span>
                      <span className="font-normal text-black dark:text-white">₹{(location.fixedCosts.utilities + location.fixedCosts.other).toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-2">Variable Costs ({(location.variableCostRatio * 100).toFixed(1)}% of sales)</h4>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-500">COGS:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.variableCosts.cogs.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Hourly Labor:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.variableCosts.hourlyLabor.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Supplies:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.variableCosts.supplies.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Other:</span>
                      <span className="font-normal text-black dark:text-white">₹{(location.variableCosts.utilities + location.variableCosts.delivery).toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key metrics */}
              <div className="mt-3 pt-2 border-t border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-3 gap-4 text-xs">
                  <div className="text-center">
                    <div className="text-gray-500">Contribution Margin</div>
                    <div className="font-bold text-green-600">{(location.contributionMargin * 100).toFixed(1)}%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-500">Days to Breakeven</div>
                    <div className="font-bold text-orange-600">{location.daysToBreakeven} days</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-500">Status</div>
                    <div className={`font-bold ${getStatusColor(location.currentVsBreakeven)}`}>
                      {location.status.toUpperCase()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Breakeven Waterfall Chart */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          💧 Breakeven Calculation Waterfall (Example: {breakevenData[0].restaurant.fullName})
        </h2>
        <div className="space-y-3">
          <div className="flex justify-between items-center p-2 bg-orange-50 dark:bg-orange-900/20 rounded">
            <span className="text-xs font-normal text-orange-800 dark:text-orange-300">Fixed Costs (Must Cover)</span>
            <span className="text-xs font-bold text-orange-900 dark:text-orange-300">₹{breakevenData[0].totalFixedCosts.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between items-center p-2 bg-blue-50 dark:bg-blue-900/20 rounded">
            <span className="text-xs font-normal text-blue-800 dark:text-blue-300">Contribution Margin %</span>
            <span className="text-xs font-bold text-blue-900 dark:text-blue-300">{(breakevenData[0].contributionMargin * 100).toFixed(1)}%</span>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700 pt-2">
            <div className="flex justify-between items-center p-2 bg-green-50 dark:bg-green-900/20 rounded">
              <span className="text-xs font-bold text-green-800 dark:text-green-300">Breakeven Revenue Required</span>
              <span className="text-xs font-bold text-green-900 dark:text-green-300">
                ₹{breakevenData[0].breakevenRevenue.toLocaleString('en-IN')}
              </span>
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
              <li>• Accounting system (fixed costs)</li>
              <li>• PetPooja POS (variable costs, sales)</li>
              <li>• HRIS (salary vs hourly breakdown)</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Monthly (after cost review)</li>
              <li>• Alert: Red if current revenue &lt; breakeven</li>
              <li>• Drill down: by fixed/variable cost category</li>
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
            • Account for PF/ESI as semi-fixed labor costs
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Adjust seasonally for monsoon/festive revenue variations
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Consider rent escalation clauses in fixed cost projections
          </p>
        </div>
      </div>

      {/* Users & Access */}
      <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-lg border border-gray-200">
        <h2 className="text-xs font-bold text-black dark:text-white mb-2">
          👥 Authorized Users
        </h2>
        <p className="text-xs font-normal text-gray-500">
          Owner, CFO
        </p>
      </div>
    </div>
  )
}