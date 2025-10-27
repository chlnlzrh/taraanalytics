import { RESTAURANTS } from '@/lib/restaurant-data'

export default function PrimeCostPercentageKPI() {
  // FOD_003 Prime Cost % (Food + Labor) - Exact specifications from restaurant_kpi_metrics_127.txt
  const primeCostData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      totalRevenue: 285000,
      foodCOGS: 55500,
      beverageCOGS: 23750,
      totalLaborCost: 155250, // Including wages, benefits, overtime
      primeCostPercentage: 82.3, // (79250 + 155250) / 285000 * 100
      status: 'critical', // Above 60% threshold
      breakdown: {
        foodCostPercentage: 19.5, // 55500/285000
        beverageCostPercentage: 8.3, // 23750/285000
        laborCostPercentage: 54.5 // 155250/285000
      },
      monthlyTrend: [80.5, 83.2, 81.8, 82.3],
      laborBreakdown: {
        kitchenStaff: 85000, // 54.7% of labor cost
        serviceStaff: 45000, // 29.0% of labor cost
        management: 25250 // 16.3% of labor cost
      },
      benchmarkComparison: {
        industry: 58.0,
        chainTarget: 60.0,
        variance: 22.3
      }
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      totalRevenue: 225000,
      foodCOGS: 46400,
      beverageCOGS: 19500,
      totalLaborCost: 121500,
      primeCostPercentage: 83.3, // (65900 + 121500) / 225000 * 100
      status: 'critical',
      breakdown: {
        foodCostPercentage: 20.6,
        beverageCostPercentage: 8.7,
        laborCostPercentage: 54.0
      },
      monthlyTrend: [82.1, 84.5, 83.8, 83.3],
      laborBreakdown: {
        kitchenStaff: 68000,
        serviceStaff: 35000,
        management: 18500
      },
      benchmarkComparison: {
        industry: 58.0,
        chainTarget: 60.0,
        variance: 23.3
      }
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      totalRevenue: 185000,
      foodCOGS: 41250,
      beverageCOGS: 18850,
      totalLaborCost: 103950,
      primeCostPercentage: 88.6, // (60100 + 103950) / 185000 * 100
      status: 'critical',
      breakdown: {
        foodCostPercentage: 22.3,
        beverageCostPercentage: 10.2,
        laborCostPercentage: 56.2
      },
      monthlyTrend: [87.2, 89.8, 88.1, 88.6],
      laborBreakdown: {
        kitchenStaff: 58000,
        serviceStaff: 32000,
        management: 13950
      },
      benchmarkComparison: {
        industry: 58.0,
        chainTarget: 60.0,
        variance: 28.6
      }
    }
  ]

  const chainTotalRevenue = primeCostData.reduce((sum, item) => sum + item.totalRevenue, 0)
  const chainTotalPrimeCost = primeCostData.reduce((sum, item) => 
    sum + item.foodCOGS + item.beverageCOGS + item.totalLaborCost, 0)
  const chainPrimeCostPercentage = (chainTotalPrimeCost / chainTotalRevenue) * 100

  const getStatusColor = (percentage: number) => {
    if (percentage <= 58) return 'text-green-600'
    if (percentage <= 60) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (percentage: number) => {
    if (percentage <= 58) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (percentage <= 60) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getStatusIcon = (percentage: number) => {
    if (percentage <= 58) return '✅'
    if (percentage <= 60) return '⚠️'
    return '🚨'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Prime Cost % (Food + Labor)
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: FOD_003 | Combined food, beverage, and labor costs as percentage of revenue
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
            <strong>Formula:</strong> (Food COGS + Beverage COGS + Total Labor Cost) ÷ Revenue × 100
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Combined food, beverage, and labor costs as percentage of revenue. Single most important metric.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> Primary indicator of operational efficiency; directly impacts profitability and cash flow.
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
            <div className="text-xs font-normal text-green-600">≤58%</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">58–60%</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&gt;60%</div>
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
            <span className="text-xs font-normal text-gray-500">Chain Prime Cost %</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getStatusColor(chainPrimeCostPercentage)}`}>
                {chainPrimeCostPercentage.toFixed(1)}%
              </span>
              <span>{getStatusIcon(chainPrimeCostPercentage)}</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Total Revenue</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-black dark:text-white">
                ₹{chainTotalRevenue.toLocaleString('en-IN')}
              </span>
              <span>💰</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Total Prime Cost</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-black dark:text-white">
                ₹{chainTotalPrimeCost.toLocaleString('en-IN')}
              </span>
              <span>📊</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">vs Industry Benchmark</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-red-600">
                +{(chainPrimeCostPercentage - 58).toFixed(1)}%
              </span>
              <span>📈</span>
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
          {primeCostData
            .sort((a, b) => a.primeCostPercentage - b.primeCostPercentage)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.primeCostPercentage)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span>{getStatusIcon(location.primeCostPercentage)}</span>
                </div>
                <div className="text-right">
                  <div className={`text-xs font-bold ${getStatusColor(location.primeCostPercentage)}`}>
                    {location.primeCostPercentage.toFixed(1)}%
                  </div>
                  <div className="text-xs font-normal text-red-600">
                    +{location.benchmarkComparison.variance.toFixed(1)}% vs target
                  </div>
                </div>
              </div>
              
              {/* Cost Breakdown */}
              <div className="grid grid-cols-2 gap-4 mt-3">
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-1">Cost Component Breakdown</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Food Cost %:</span>
                      <span className="font-normal text-black dark:text-white">{location.breakdown.foodCostPercentage.toFixed(1)}%</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Beverage Cost %:</span>
                      <span className="font-normal text-black dark:text-white">{location.breakdown.beverageCostPercentage.toFixed(1)}%</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Labor Cost %:</span>
                      <span className="font-normal text-black dark:text-white">{location.breakdown.laborCostPercentage.toFixed(1)}%</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-1">Labor Cost Distribution</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Kitchen Staff:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.laborBreakdown.kitchenStaff.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Service Staff:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.laborBreakdown.serviceStaff.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Management:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.laborBreakdown.management.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Monthly Trend */}
              <div className="mt-3">
                <h4 className="text-xs font-bold text-gray-600 mb-1">4-Week Trend</h4>
                <div className="flex gap-2">
                  {location.monthlyTrend.map((value, idx) => (
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

      {/* Critical Action Required */}
      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200">
        <h2 className="text-xs font-bold text-red-900 dark:text-red-300 mb-2">
          🚨 Critical Action Required
        </h2>
        <div className="space-y-2">
          <p className="text-xs font-normal text-red-800 dark:text-red-300">
            <strong>All locations exceed critical threshold (60%)</strong> - Immediate intervention required
          </p>
          <div className="space-y-1">
            <p className="text-xs font-normal text-red-800 dark:text-red-300">
              • Review labor scheduling and productivity metrics
            </p>
            <p className="text-xs font-normal text-red-800 dark:text-red-300">
              • Analyze food cost drivers and portion control
            </p>
            <p className="text-xs font-normal text-red-800 dark:text-red-300">
              • Consider menu engineering for higher-margin items
            </p>
            <p className="text-xs font-normal text-red-800 dark:text-red-300">
              • Implement strict COGS monitoring and inventory controls
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
              <li>• PetPooja POS (COGS)</li>
              <li>• HRIS (labor cost)</li>
              <li>• Accounting (revenue)</li>
              <li>• Payroll system (wages, benefits)</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Daily (for trending)</li>
              <li>• Weekly (for review)</li>
              <li>• Alert if &gt;60%</li>
              <li>• Monthly deep analysis</li>
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
            • Monitor separately by cuisine; track wage inflation YoY
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Account for statutory benefits (PF, ESI, bonus) in labor cost
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Consider seasonal staffing variations during festivals
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Track impact of minimum wage revisions on prime cost
          </p>
        </div>
      </div>

      {/* Users & Access */}
      <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-lg border border-gray-200">
        <h2 className="text-xs font-bold text-black dark:text-white mb-2">
          👥 Authorized Users
        </h2>
        <p className="text-xs font-normal text-gray-500">
          Manager, Owner, Finance
        </p>
      </div>
    </div>
  )
}