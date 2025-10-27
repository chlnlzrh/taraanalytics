import { RESTAURANTS } from '@/lib/restaurant-data'

export default function AggregatorRevenueKPI() {
  // FIN_011 Aggregator Revenue % - Exact specifications from restaurant_kpi_metrics_127.txt
  const aggregatorData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      totalRevenue: 485000,
      zomatoRevenue: 126100, // 26%
      swiggyRevenue: 116400, // 24%
      directRevenue: 242500, // 50% (dine-in + direct takeaway)
      totalAggregatorRevenue: 242500, // 50%
      aggregatorPercentage: 50.0,
      status: 'good', // 35-50% target range
      commissionPaid: {
        zomato: 18915, // 15% commission
        swiggy: 17460 // 15% commission
      },
      totalCommission: 36375,
      netAggregatorRevenue: 206125,
      monthlyTrend: [45, 47, 49, 50, 52, 50] // Last 6 months
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      totalRevenue: 395000,
      zomatoRevenue: 138250, // 35%
      swiggyRevenue: 99875, // 25.3%
      directRevenue: 156875, // 39.7%
      totalAggregatorRevenue: 238125, // 60.3%
      aggregatorPercentage: 60.3,
      status: 'warning', // Above 60% - high risk
      commissionPaid: {
        zomato: 20737.5,
        swiggy: 14981.25
      },
      totalCommission: 35718.75,
      netAggregatorRevenue: 202406.25,
      monthlyTrend: [52, 55, 58, 60, 62, 60.3]
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      totalRevenue: 365000,
      zomatoRevenue: 109500, // 30%
      swiggyRevenue: 102200, // 28%
      directRevenue: 153300, // 42%
      totalAggregatorRevenue: 211700, // 58%
      aggregatorPercentage: 58.0,
      status: 'warning', // Close to critical 60%
      commissionPaid: {
        zomato: 16425,
        swiggy: 15330
      },
      totalCommission: 31755,
      netAggregatorRevenue: 179945,
      monthlyTrend: [50, 52, 55, 57, 58, 58]
    }
  ]

  const chainTotalRevenue = aggregatorData.reduce((sum, item) => sum + item.totalRevenue, 0)
  const chainTotalAggregator = aggregatorData.reduce((sum, item) => sum + item.totalAggregatorRevenue, 0)
  const chainAggregatorPercentage = (chainTotalAggregator / chainTotalRevenue) * 100
  const chainTotalCommission = aggregatorData.reduce((sum, item) => sum + item.totalCommission, 0)
  const atRiskLocations = aggregatorData.filter(item => item.aggregatorPercentage > 60).length

  const getStatusColor = (percentage: number) => {
    if (percentage <= 50) return 'text-green-600'
    if (percentage <= 60) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (percentage: number) => {
    if (percentage <= 50) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (percentage <= 60) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getStatusIcon = (percentage: number) => {
    if (percentage <= 35) return '🟢'
    if (percentage <= 50) return '✅'
    if (percentage <= 60) return '⚠️'
    return '🚨'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Aggregator Revenue % (Zomato + Swiggy)
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: FIN_011 | Channel Dependency Risk Indicator
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
            <strong>Formula:</strong> (Aggregator Orders Revenue ÷ Total Revenue) × 100
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Percentage of revenue from delivery platforms (Zomato, Swiggy). Indicator of channel dependency risk.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> High dependency (>60%) creates vulnerability to commission increases and algorithm de-prioritization.
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
            <div className="text-xs font-normal text-green-600">35–50% (diversified)</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">50–60% (moderately dependent)</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">>60% (high risk)</div>
          </div>
        </div>
      </div>

      {/* Chain Summary */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          📈 Chain Channel Mix Summary
        </h2>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <span className="text-xs font-normal text-gray-500">Chain Aggregator %</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getStatusColor(chainAggregatorPercentage)}`}>
                {chainAggregatorPercentage.toFixed(1)}%
              </span>
              <span>{getStatusIcon(chainAggregatorPercentage)}</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Monthly Commission Cost</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-red-600">
                ₹{chainTotalCommission.toLocaleString('en-IN')}
              </span>
              <span>💸</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">At-Risk Locations</span>
            <div className="text-xs font-normal text-red-600">
              {atRiskLocations}/3 locations >60%
            </div>
          </div>
        </div>
      </div>

      {/* Channel Mix Breakdown */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🥧 Channel Revenue Mix by Location
        </h2>
        <div className="space-y-3">
          {aggregatorData
            .sort((a, b) => a.aggregatorPercentage - b.aggregatorPercentage)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.aggregatorPercentage)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span>{getStatusIcon(location.aggregatorPercentage)}</span>
                </div>
                <div className="text-right">
                  <div className={`text-xs font-bold ${getStatusColor(location.aggregatorPercentage)}`}>
                    {location.aggregatorPercentage.toFixed(1)}%
                  </div>
                  <div className="text-xs font-normal text-gray-500">
                    Aggregator dependency
                  </div>
                </div>
              </div>
              
              {/* Revenue breakdown */}
              <div className="grid grid-cols-3 gap-4 mb-3 text-xs">
                <div>
                  <span className="text-gray-500">Total Revenue:</span>
                  <div className="font-bold text-black dark:text-white">₹{location.totalRevenue.toLocaleString('en-IN')}</div>
                </div>
                <div>
                  <span className="text-gray-500">Aggregator Revenue:</span>
                  <div className="font-bold text-orange-600">₹{location.totalAggregatorRevenue.toLocaleString('en-IN')}</div>
                </div>
                <div>
                  <span className="text-gray-500">Direct Revenue:</span>
                  <div className="font-bold text-green-600">₹{location.directRevenue.toLocaleString('en-IN')}</div>
                </div>
              </div>

              {/* Platform breakdown */}
              <div className="grid grid-cols-2 gap-4 mt-3">
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-2">Platform Revenue Breakdown</h4>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Zomato:</span>\n                      <span className="font-normal text-black dark:text-white">₹{location.zomatoRevenue.toLocaleString('en-IN')} ({((location.zomatoRevenue / location.totalRevenue) * 100).toFixed(1)}%)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Swiggy:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.swiggyRevenue.toLocaleString('en-IN')} ({((location.swiggyRevenue / location.totalRevenue) * 100).toFixed(1)}%)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Direct:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.directRevenue.toLocaleString('en-IN')} ({((location.directRevenue / location.totalRevenue) * 100).toFixed(1)}%)</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-2">Commission Impact</h4>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Zomato Commission:</span>
                      <span className="font-normal text-red-600">₹{location.commissionPaid.zomato.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Swiggy Commission:</span>
                      <span className="font-normal text-red-600">₹{location.commissionPaid.swiggy.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between font-bold">
                      <span className="text-gray-700">Total Commission:</span>
                      <span className="text-red-600">₹{location.totalCommission.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between font-bold">
                      <span className="text-gray-700">Net Revenue:</span>
                      <span className="text-green-600">₹{location.netAggregatorRevenue.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trend indicator */}
              <div className="mt-3 pt-2 border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-500">6-Month Trend:</span>
                  <div className="flex gap-1">
                    {location.monthlyTrend.map((value, idx) => (
                      <span key={idx} className={`px-1 rounded text-xs ${value > 55 ? 'bg-red-100 text-red-600' : value > 45 ? 'bg-yellow-100 text-yellow-600' : 'bg-green-100 text-green-600'}`}>
                        {value}%
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Risk Analysis */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          ⚠️ Channel Dependency Risk Analysis
        </h2>
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
              <h3 className="text-xs font-bold text-red-700 dark:text-red-300 mb-2">High Risk Locations</h3>
              {aggregatorData.filter(loc => loc.aggregatorPercentage > 60).map(loc => (
                <div key={loc.restaurant.id} className="text-xs">
                  <span className="font-normal text-red-600">{loc.restaurant.shortName}: {loc.aggregatorPercentage.toFixed(1)}%</span>
                </div>
              ))}
              {aggregatorData.filter(loc => loc.aggregatorPercentage > 60).length === 0 && (
                <div className="text-xs text-green-600">No high-risk locations</div>
              )}
            </div>
            <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded border border-green-200">
              <h3 className="text-xs font-bold text-green-700 dark:text-green-300 mb-2">Well-Diversified Locations</h3>
              {aggregatorData.filter(loc => loc.aggregatorPercentage <= 50).map(loc => (
                <div key={loc.restaurant.id} className="text-xs">
                  <span className="font-normal text-green-600">{loc.restaurant.shortName}: {loc.aggregatorPercentage.toFixed(1)}%</span>
                </div>
              ))}
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
              <li>• PetPooja POS /orders endpoint</li>
              <li>• Channel field (Zomato/Swiggy/Direct)</li>
              <li>• Commission tracking system</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Daily</li>
              <li>• Alert: Yellow if >50%; Red if >60%</li>
              <li>• Drill down: by platform, by location, by daypart</li>
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
            • India-specific metric; aggregators drive 40–60% of revenue for many chains
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Monitor commission changes quarterly - platforms frequently adjust rates
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Track algorithm changes that may impact visibility and order volume
          </p>
        </div>
      </div>

      {/* Users & Access */}
      <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-lg border border-gray-200">
        <h2 className="text-xs font-bold text-black dark:text-white mb-2">
          👥 Authorized Users
        </h2>
        <p className="text-xs font-normal text-gray-500">
          Manager, Owner
        </p>
      </div>
    </div>
  )
}