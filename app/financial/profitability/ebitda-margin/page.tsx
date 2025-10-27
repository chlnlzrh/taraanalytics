import { RESTAURANTS } from '@/lib/restaurant-data'

export default function EBITDAMarginKPI() {
  // FIN_006 EBITDA Margin % - Exact specifications from restaurant_kpi_metrics_127.txt
  const ebitdaData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      revenue: 485000,
      cogs: 155200,
      laborCost: 119750, // 24.7%
      utilities: 19400, // 4%
      otherOpex: 14550, // 3% (marketing, supplies, etc.)
      totalOpex: 308900,
      ebitda: 176100,
      ebitdaMargin: 36.3, // Excellent performance
      status: 'excellent', // Above 18%
      expenseBreakdown: {
        cogs: 32.0,
        labor: 24.7,
        utilities: 4.0,
        marketing: 1.5,
        supplies: 1.0,
        maintenance: 0.5
      }
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      revenue: 395000,
      cogs: 118500,
      laborCost: 98750, // 25%
      utilities: 15800, // 4%
      otherOpex: 11850, // 3%
      totalOpex: 244900,
      ebitda: 150100,
      ebitdaMargin: 38.0, // Excellent performance
      status: 'excellent',
      expenseBreakdown: {
        cogs: 30.0,
        labor: 25.0,
        utilities: 4.0,
        marketing: 1.8,
        supplies: 0.8,
        maintenance: 0.4
      }
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      revenue: 365000,
      cogs: 146000,
      laborCost: 91250, // 25%
      utilities: 18250, // 5%
      otherOpex: 14600, // 4%
      totalOpex: 270100,
      ebitda: 94900,
      ebitdaMargin: 26.0, // Good performance
      status: 'good', // 12-18% target range
      expenseBreakdown: {
        cogs: 40.0,
        labor: 25.0,
        utilities: 5.0,
        marketing: 2.0,
        supplies: 1.5,
        maintenance: 0.5
      }
    }
  ]

  const chainTotalRevenue = ebitdaData.reduce((sum, item) => sum + item.revenue, 0)
  const chainTotalEbitda = ebitdaData.reduce((sum, item) => sum + item.ebitda, 0)
  const chainOverallMargin = (chainTotalEbitda / chainTotalRevenue) * 100
  const chainAverage = ebitdaData.reduce((sum, item) => sum + item.ebitdaMargin, 0) / ebitdaData.length

  const getStatusColor = (margin: number) => {
    if (margin >= 18) return 'text-green-600'
    if (margin >= 12) return 'text-green-600'
    if (margin >= 8) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (margin: number) => {
    if (margin >= 18) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (margin >= 12) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (margin >= 8) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getStatusIcon = (margin: number) => {
    if (margin >= 18) return '🟢'
    if (margin >= 12) return '✅'
    if (margin >= 8) return '⚠️'
    return '🚨'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            EBITDA Margin %
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: FIN_006 | True Operational Profit Margin - Best Indicator of Efficiency
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
            <strong>Formula:</strong> (Revenue - Operating Expenses including Labor, COGS, utilities) ÷ Revenue × 100
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Earnings before interest, taxes, depreciation, and amortization. True operational profit margin.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> Best indicator of operational efficiency; target 12–20% for well-managed chains in competitive markets.
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
            <div className="text-xs font-normal text-green-600">12–18%</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">8–12%</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&lt;8%</div>
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
            <span className="text-xs font-normal text-gray-500">Chain Average EBITDA</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getStatusColor(chainAverage)}`}>
                {chainAverage.toFixed(1)}%
              </span>
              <span>{getStatusIcon(chainAverage)}</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Total Chain EBITDA</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-black dark:text-white">
                ₹{chainTotalEbitda.toLocaleString('en-IN')}
              </span>
              <span>💰</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Performance Status</span>
            <div className="text-xs font-normal text-green-600">
              🎯 Exceptional (All locations above target)
            </div>
          </div>
        </div>
      </div>

      {/* Location Ranking & Heatmap */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Ranking by EBITDA Margin %
        </h2>
        <div className="space-y-3">
          {ebitdaData
            .sort((a, b) => b.ebitdaMargin - a.ebitdaMargin)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.ebitdaMargin)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span>{getStatusIcon(location.ebitdaMargin)}</span>
                </div>
                <div className="text-right">
                  <div className={`text-xs font-bold ${getStatusColor(location.ebitdaMargin)}`}>
                    {location.ebitdaMargin.toFixed(1)}%
                  </div>
                  <div className="text-xs font-normal text-gray-500">
                    ₹{location.ebitda.toLocaleString('en-IN')} EBITDA
                  </div>
                </div>
              </div>
              
              {/* Operating metrics */}
              <div className="grid grid-cols-4 gap-4 mb-3 text-xs">
                <div>
                  <span className="text-gray-500">Revenue:</span>
                  <div className="font-normal text-black dark:text-white">₹{location.revenue.toLocaleString('en-IN')}</div>
                </div>
                <div>
                  <span className="text-gray-500">Total OpEx:</span>
                  <div className="font-normal text-black dark:text-white">₹{location.totalOpex.toLocaleString('en-IN')}</div>
                </div>
                <div>
                  <span className="text-gray-500">OpEx %:</span>
                  <div className="font-normal text-black dark:text-white">{((location.totalOpex / location.revenue) * 100).toFixed(1)}%</div>
                </div>
                <div>
                  <span className="text-gray-500">EBITDA:</span>
                  <div className="font-normal text-black dark:text-white">₹{location.ebitda.toLocaleString('en-IN')}</div>
                </div>
              </div>

              {/* Expense category breakdown */}
              <div className="mt-3">
                <h4 className="text-xs font-bold text-gray-600 mb-2">Expense Category Breakdown (% of Revenue)</h4>
                <div className="grid grid-cols-3 gap-4 text-xs">
                  <div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">COGS:</span>
                      <span className="font-normal text-black dark:text-white">{location.expenseBreakdown.cogs.toFixed(1)}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Labor:</span>
                      <span className="font-normal text-black dark:text-white">{location.expenseBreakdown.labor.toFixed(1)}%</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Utilities:</span>
                      <span className="font-normal text-black dark:text-white">{location.expenseBreakdown.utilities.toFixed(1)}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Marketing:</span>
                      <span className="font-normal text-black dark:text-white">{location.expenseBreakdown.marketing.toFixed(1)}%</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Supplies:</span>
                      <span className="font-normal text-black dark:text-white">{location.expenseBreakdown.supplies.toFixed(1)}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Maintenance:</span>
                      <span className="font-normal text-black dark:text-white">{location.expenseBreakdown.maintenance.toFixed(1)}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 12-Month Trend Line Simulation */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          📈 12-Month EBITDA Trend (Chain Average)
        </h2>
        <div className="space-y-2">
          <div className="grid grid-cols-6 gap-2 text-xs">
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((month, idx) => (
              <div key={month} className="text-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
                <div className="text-gray-500">{month}</div>
                <div className="font-bold text-black dark:text-white">{(30 + idx * 1.2).toFixed(1)}%</div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-6 gap-2 text-xs">
            {['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, idx) => (
              <div key={month} className="text-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
                <div className="text-gray-500">{month}</div>
                <div className="font-bold text-black dark:text-white">{(35 + idx * 0.5).toFixed(1)}%</div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-2 text-xs text-gray-500">
          Trend: ↗️ Improving operational efficiency year-over-year
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
              <li>• PetPooja POS (revenue)</li>
              <li>• Accounting system (operating expenses)</li>
              <li>• HRIS (labor costs)</li>
              <li>• Utility bills & vendor invoices</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Monthly (after close)</li>
              <li>• Alert: Red if &lt;8%</li>
              <li>• Drill down: by location, by expense category</li>
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
            • Exclude rent if variable by location; focus on controllable operating expenses
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Account for seasonal variations in utility costs (monsoon, summer AC usage)
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Monitor inflation impact on all operating expense categories
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