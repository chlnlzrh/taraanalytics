import { RESTAURANTS } from '@/lib/restaurant-data'

export default function NetProfitMarginKPI() {
  // FIN_007 Net Profit Margin % - Exact specifications from restaurant_kpi_metrics_127.txt
  const netProfitData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      revenue: 485000,
      totalExpenses: 436500, // Including rent, utilities, interest, taxes
      netProfit: 48500,
      netProfitMargin: 10.0, // Excellent - top of healthy range
      status: 'excellent', // 5-10% target range
      expenseBreakdown: {
        cogs: 155200,
        labor: 119750,
        rent: 60000,
        utilities: 19400,
        interest: 12000,
        taxes: 15000,
        other: 55150
      },
      variance: 15.5 // vs budget
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      revenue: 395000,
      totalExpenses: 370250,
      netProfit: 24750,
      netProfitMargin: 6.3, // Good - within target range
      status: 'good',
      expenseBreakdown: {
        cogs: 118500,
        labor: 98750,
        rent: 55000,
        utilities: 15800,
        interest: 10000,
        taxes: 12000,
        other: 60200
      },
      variance: 8.2
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      revenue: 365000,
      totalExpenses: 355700,
      netProfit: 9300,
      netProfitMargin: 2.5, // Warning range - needs attention
      status: 'warning', // 2-5% warning range
      expenseBreakdown: {
        cogs: 146000,
        labor: 91250,
        rent: 50000,
        utilities: 18250,
        interest: 8000,
        taxes: 11000,
        other: 31200
      },
      variance: -18.5 // Below budget
    }
  ]

  const chainTotalRevenue = netProfitData.reduce((sum, item) => sum + item.revenue, 0)
  const chainTotalProfit = netProfitData.reduce((sum, item) => sum + item.netProfit, 0)
  const chainOverallMargin = (chainTotalProfit / chainTotalRevenue) * 100
  const chainAverage = netProfitData.reduce((sum, item) => sum + item.netProfitMargin, 0) / netProfitData.length
  const profitableLocations = netProfitData.filter(item => item.netProfitMargin >= 5).length

  const getStatusColor = (margin: number) => {
    if (margin >= 10) return 'text-green-600'
    if (margin >= 5) return 'text-green-600'
    if (margin >= 2) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (margin: number) => {
    if (margin >= 10) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (margin >= 5) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (margin >= 2) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getStatusIcon = (margin: number) => {
    if (margin >= 10) return '🟢'
    if (margin >= 5) return '✅'
    if (margin >= 2) return '⚠️'
    if (margin < 0) return '💀'
    return '🚨'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Net Profit Margin %
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: FIN_007 | Bottom-Line Profitability After All Costs
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
            <strong>Formula:</strong> (Total Revenue - All Expenses including rent, utilities, interest, taxes) ÷ Revenue × 100
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Bottom-line profit after all costs. Absolute profitability of each location.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> 5–10% considered healthy. Reveals which locations are truly profitable vs. margin-dilutive.
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
            <div className="text-xs font-normal text-green-600">5–10%</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">2–5%</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&lt;2% or negative</div>
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
            <span className="text-xs font-normal text-gray-500">Chain Net Profit Margin</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getStatusColor(chainOverallMargin)}`}>
                {chainOverallMargin.toFixed(1)}%
              </span>
              <span>{getStatusIcon(chainOverallMargin)}</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Total Net Profit</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-black dark:text-white">
                ₹{chainTotalProfit.toLocaleString('en-IN')}
              </span>
              <span>💰</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Profitable Locations</span>
            <div className="text-xs font-normal text-green-600">
              {profitableLocations}/3 locations above 5%
            </div>
          </div>
        </div>
      </div>

      {/* Location Ranking */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Profitability Ranking
        </h2>
        <div className="space-y-3">
          {netProfitData
            .sort((a, b) => b.netProfitMargin - a.netProfitMargin)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.netProfitMargin)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span>{getStatusIcon(location.netProfitMargin)}</span>
                </div>
                <div className="text-right">
                  <div className={`text-xs font-bold ${getStatusColor(location.netProfitMargin)}`}>
                    {location.netProfitMargin.toFixed(1)}%
                  </div>
                  <div className="text-xs font-normal text-gray-500">
                    ₹{location.netProfit.toLocaleString('en-IN')} profit
                  </div>
                  <div className={`text-xs font-normal ${location.variance > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {location.variance > 0 ? '+' : ''}{location.variance.toFixed(1)}% vs budget
                  </div>
                </div>
              </div>
              
              {/* Financial breakdown */}
              <div className="grid grid-cols-3 gap-4 mb-3 text-xs">
                <div>
                  <span className="text-gray-500">Revenue:</span>
                  <div className="font-normal text-black dark:text-white">₹{location.revenue.toLocaleString('en-IN')}</div>
                </div>
                <div>
                  <span className="text-gray-500">Total Expenses:</span>
                  <div className="font-normal text-black dark:text-white">₹{location.totalExpenses.toLocaleString('en-IN')}</div>
                </div>
                <div>
                  <span className="text-gray-500">Net Profit:</span>
                  <div className={`font-normal ${location.netProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    ₹{location.netProfit.toLocaleString('en-IN')}
                  </div>
                </div>
              </div>

              {/* Expense breakdown */}
              <div className="mt-3">
                <h4 className="text-xs font-bold text-gray-600 mb-2">Major Expense Categories</h4>
                <div className="grid grid-cols-3 gap-4 text-xs">
                  <div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">COGS:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.expenseBreakdown.cogs.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Labor:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.expenseBreakdown.labor.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Rent:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.expenseBreakdown.rent.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Utilities:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.expenseBreakdown.utilities.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Interest:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.expenseBreakdown.interest.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Taxes:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.expenseBreakdown.taxes.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Other OpEx:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.expenseBreakdown.other.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="pt-2 border-t border-gray-200">
                      <div className="flex justify-between font-bold">
                        <span className="text-gray-700">Total:</span>
                        <span className="text-black dark:text-white">₹{location.totalExpenses.toLocaleString('en-IN')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Variance Analysis */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          📊 Variance Analysis (vs Budget)
        </h2>
        <div className="space-y-2">
          {netProfitData.map((location) => (
            <div key={location.restaurant.id} className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
              <span className="text-xs font-normal text-black dark:text-white">{location.restaurant.fullName}</span>
              <div className="flex items-center gap-2">
                <span className={`text-xs font-bold ${location.variance > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {location.variance > 0 ? '+' : ''}{location.variance.toFixed(1)}%
                </span>
                <span>{location.variance > 0 ? '📈' : '📉'}</span>
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
              <li>• Accounting system (full P&L)</li>
              <li>• PetPooja POS (revenue)</li>
              <li>• All expense categories</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Monthly</li>
              <li>• Alert: Red if >20% variance</li>
              <li>• Drill down: by location pair comparison</li>
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
            • Investigate location differences: local competition, operational quality, staffing
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Consider rent variations across metro locations
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Account for local tax variations and compliance costs
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