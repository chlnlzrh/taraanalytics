import { RESTAURANTS } from '@/lib/restaurant-data'

export default function CostOfGoodsSoldKPI() {
  // FOD_004 Cost of Goods Sold (COGS) - Exact specifications from restaurant_kpi_metrics_127.txt
  const cogsData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      beginningInventory: 125000,
      purchases: 89500,
      endingInventory: 135250,
      actualCOGS: 79250, // 125000 + 89500 - 135250
      theoreticalCOGS: 76800, // Based on recipes and sales mix
      variance: 3.2, // (79250 - 76800) / 76800 * 100
      status: 'warning', // >3% variance indicates process failure
      weeklyTrend: [76500, 78200, 77800, 79250],
      categoryBreakdown: {
        vegetables: 22500, // 28.4% of COGS
        proteins: 35800, // 45.2%
        dairy: 12600, // 15.9%
        spices: 4200, // 5.3%
        others: 4150 // 5.2%
      },
      monthlyComparison: {
        thisMonth: 316000, // Weekly COGS * 4
        lastMonth: 298500,
        changePercentage: 5.9
      }
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      beginningInventory: 95000,
      purchases: 71800,
      endingInventory: 100900,
      actualCOGS: 65900, // 95000 + 71800 - 100900
      theoreticalCOGS: 64200,
      variance: 2.6, // Within acceptable range
      status: 'good',
      weeklyTrend: [63500, 66800, 65200, 65900],
      categoryBreakdown: {
        vegetables: 19200, // 29.1%
        proteins: 28600, // 43.4%
        dairy: 10500, // 15.9%
        spices: 3800, // 5.8%
        others: 3800 // 5.8%
      },
      monthlyComparison: {
        thisMonth: 261400,
        lastMonth: 248900,
        changePercentage: 5.0
      }
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      beginningInventory: 85000,
      purchases: 65200,
      endingInventory: 90100,
      actualCOGS: 60100, // 85000 + 65200 - 90100
      theoreticalCOGS: 56800,
      variance: 5.8, // High variance - needs investigation
      status: 'critical',
      weeklyTrend: [58200, 61500, 59800, 60100],
      categoryBreakdown: {
        vegetables: 18600, // 31.0%
        proteins: 24800, // 41.3%
        dairy: 9600, // 16.0%
        spices: 3500, // 5.8%
        others: 3600 // 6.0%
      },
      monthlyComparison: {
        thisMonth: 238600,
        lastMonth: 226400,
        changePercentage: 5.4
      }
    }
  ]

  const chainTotalActualCOGS = cogsData.reduce((sum, item) => sum + item.actualCOGS, 0)
  const chainTotalTheoreticalCOGS = cogsData.reduce((sum, item) => sum + item.theoreticalCOGS, 0)
  const chainVariance = ((chainTotalActualCOGS - chainTotalTheoreticalCOGS) / chainTotalTheoreticalCOGS) * 100

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

  const getAmountColor = (changePercentage: number) => {
    if (changePercentage <= 3) return 'text-green-600'
    if (changePercentage <= 6) return 'text-yellow-600'
    return 'text-red-600'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Cost of Goods Sold (COGS)
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: FOD_004 | Total cost of food/beverage sold in a period
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
            <strong>Formula:</strong> Beginning Inventory + Purchases - Ending Inventory
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Total cost of food/beverage sold in a period. Calculated weekly; compare theoretical vs. actual for variances.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> Foundation for food cost percentage; variances indicate theft, waste, or inventory management issues.
          </p>
        </div>
      </div>

      {/* Alert Thresholds */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🎯 Variance Thresholds (Actual vs Theoretical)
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
            <span className="text-xs font-normal text-gray-500">Total Actual COGS</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-black dark:text-white">
                ₹{chainTotalActualCOGS.toLocaleString('en-IN')}
              </span>
              <span>📦</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Theoretical COGS</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-black dark:text-white">
                ₹{chainTotalTheoreticalCOGS.toLocaleString('en-IN')}
              </span>
              <span>📋</span>
            </div>
          </div>
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
            <span className="text-xs font-normal text-gray-500">Cost Leakage</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-red-600">
                ₹{(chainTotalActualCOGS - chainTotalTheoreticalCOGS).toLocaleString('en-IN')}
              </span>
              <span>💸</span>
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
          {cogsData
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
                  <div className="text-xs font-bold text-black dark:text-white">
                    ₹{location.actualCOGS.toLocaleString('en-IN')}
                  </div>
                  <div className={`text-xs font-normal ${getStatusColor(location.variance)}`}>
                    +{location.variance.toFixed(1)}% variance
                  </div>
                </div>
              </div>
              
              {/* COGS Calculation */}
              <div className="grid grid-cols-2 gap-4 mt-3">
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-1">COGS Calculation</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Beginning Inventory:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.beginningInventory.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">+ Purchases:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.purchases.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">- Ending Inventory:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.endingInventory.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between text-xs border-t pt-1">
                      <span className="text-gray-500 font-bold">Actual COGS:</span>
                      <span className="font-bold text-black dark:text-white">₹{location.actualCOGS.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-1">Category Breakdown</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Proteins:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.categoryBreakdown.proteins.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Vegetables:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.categoryBreakdown.vegetables.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Dairy:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.categoryBreakdown.dairy.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Others:</span>
                      <span className="font-normal text-black dark:text-white">₹{(location.categoryBreakdown.spices + location.categoryBreakdown.others).toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Variance Analysis */}
              <div className="mt-3 p-2 bg-gray-50 dark:bg-gray-900/50 rounded">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-xs font-normal text-gray-500">Theoretical vs Actual:</span>
                    <div className="text-xs">
                      <span className="text-gray-600">₹{location.theoreticalCOGS.toLocaleString('en-IN')} vs </span>
                      <span className="font-bold text-black dark:text-white">₹{location.actualCOGS.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-normal text-gray-500">Cost Leakage:</div>
                    <div className={`text-xs font-bold ${getStatusColor(location.variance)}`}>
                      ₹{(location.actualCOGS - location.theoreticalCOGS).toLocaleString('en-IN')}
                    </div>
                  </div>
                </div>
              </div>

              {/* Monthly Comparison */}
              <div className="mt-3">
                <h4 className="text-xs font-bold text-gray-600 mb-1">Monthly Comparison</h4>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">This Month vs Last:</span>
                  <span className={`font-normal ${getAmountColor(location.monthlyComparison.changePercentage)}`}>
                    ₹{location.monthlyComparison.thisMonth.toLocaleString('en-IN')} 
                    ({location.monthlyComparison.changePercentage > 0 ? '+' : ''}{location.monthlyComparison.changePercentage.toFixed(1)}%)
                  </span>
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
              <li>• Inventory management system (stock levels)</li>
              <li>• Purchase order system (procurement)</li>
              <li>• Recipe costing module (theoretical COGS)</li>
              <li>• Physical inventory counts (verification)</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Weekly COGS calculation</li>
              <li>• Daily variance monitoring</li>
              <li>• Alert if variance &gt;3%</li>
              <li>• Monthly reconciliation</li>
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
            • Account for price volatility in vegetables during monsoon season
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Track GST impact on purchase costs vs theoretical calculations
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Monitor transportation costs affecting purchase prices
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Include wastage factors for perishable items in theoretical COGS
          </p>
        </div>
      </div>

      {/* Users & Access */}
      <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-lg border border-gray-200">
        <h2 className="text-xs font-bold text-black dark:text-white mb-2">
          👥 Authorized Users
        </h2>
        <p className="text-xs font-normal text-gray-500">
          Manager, Owner, Finance, Kitchen Manager, Inventory Manager
        </p>
      </div>
    </div>
  )
}