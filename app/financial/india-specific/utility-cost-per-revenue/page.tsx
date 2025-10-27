import { RESTAURANTS } from '@/lib/restaurant-data'

export default function UtilityCostPerRevenueKPI() {
  // FIN_014 Utility Cost per Revenue Rupee - Exact specifications from restaurant_kpi_metrics_127.txt
  const utilityData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      revenue: 485000,
      utilityCosts: {
        electricity: 15000, // AC usage high in Delhi
        water: 2500,
        gas: 3500,
        genset: 1200, // Power cuts backup
        internetTelecom: 800
      },
      totalUtilities: 23000,
      utilityCostRatio: 0.047, // 4.7% of revenue
      status: 'good', // Within 3-5% target
      seasonalFactors: {
        currentMonth: 'October',
        acUsage: 'High', // Still warm
        gensetUsage: 'Medium',
        waterUsage: 'Normal'
      },
      monthlyTrend: [4.2, 4.8, 5.1, 5.3, 4.9, 4.7], // Last 6 months
      efficiencyMetrics: {
        kwh: 2400,
        costPerKWH: 6.25,
        revenuePerKWH: 202
      }
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      revenue: 395000,
      utilityCosts: {
        electricity: 11000,
        water: 2000,
        gas: 2800,
        genset: 800,
        internetTelecom: 700
      },
      totalUtilities: 17300,
      utilityCostRatio: 0.044, // 4.4% of revenue
      status: 'good',
      seasonalFactors: {
        currentMonth: 'October',
        acUsage: 'High',
        gensetUsage: 'Low', // Better power situation
        waterUsage: 'Normal'
      },
      monthlyTrend: [3.8, 4.2, 4.6, 4.8, 4.5, 4.4],
      efficiencyMetrics: {
        kwh: 1760,
        costPerKWH: 6.25,
        revenuePerKWH: 224
      }
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      revenue: 365000,
      utilityCosts: {
        electricity: 16000, // Higher due to older equipment
        water: 3000,
        gas: 4000,
        genset: 2500, // Frequent power cuts
        internetTelecom: 900
      },
      totalUtilities: 26400,
      utilityCostRatio: 0.072, // 7.2% of revenue - above critical threshold
      status: 'critical', // >7% needs immediate attention
      seasonalFactors: {
        currentMonth: 'October',
        acUsage: 'Very High', // Older AC units
        gensetUsage: 'High', // Power issues
        waterUsage: 'High'
      },
      monthlyTrend: [6.8, 7.0, 7.3, 7.5, 7.1, 7.2],
      efficiencyMetrics: {
        kwh: 2560,
        costPerKWH: 6.25,
        revenuePerKWH: 143 // Poor efficiency
      }
    }
  ]

  const chainTotalRevenue = utilityData.reduce((sum, item) => sum + item.revenue, 0)
  const chainTotalUtilities = utilityData.reduce((sum, item) => sum + item.totalUtilities, 0)
  const chainUtilityRatio = chainTotalUtilities / chainTotalRevenue
  const chainAverage = utilityData.reduce((sum, item) => sum + item.utilityCostRatio, 0) / utilityData.length
  const locationsAboveThreshold = utilityData.filter(item => item.utilityCostRatio > 0.07).length

  const getStatusColor = (ratio: number) => {
    if (ratio <= 0.05) return 'text-green-600'
    if (ratio <= 0.07) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (ratio: number) => {
    if (ratio <= 0.05) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (ratio <= 0.07) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getStatusIcon = (ratio: number) => {
    if (ratio <= 0.03) return '🟢'
    if (ratio <= 0.05) return '✅'
    if (ratio <= 0.07) return '⚠️'
    return '🚨'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Utility Cost per Revenue Rupee
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: FIN_014 | Operational Efficiency Independent of Revenue Volume
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
            <strong>Formula:</strong> (Electricity + Water + Gas + Genset) ÷ Revenue
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Utility expenses as a fraction of revenue. Tracks operational efficiency independent of revenue volume.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> India-specific due to power outages and backup generators; 3–5% of revenue is typical in metros.
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
            <div className="text-xs font-normal text-green-600">0.03–0.05 (3–5% of revenue)</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">0.05–0.07 (5–7%)</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">>0.07 (>7%)</div>
          </div>
        </div>
      </div>

      {/* Chain Summary */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          📈 Chain Utility Efficiency Summary
        </h2>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <span className="text-xs font-normal text-gray-500">Chain Utility Ratio</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getStatusColor(chainUtilityRatio)}`}>
                {(chainUtilityRatio * 100).toFixed(1)}%
              </span>
              <span>{getStatusIcon(chainUtilityRatio)}</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Total Monthly Utility Cost</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-black dark:text-white">
                ₹{chainTotalUtilities.toLocaleString('en-IN')}
              </span>
              <span>⚡</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Locations Above Threshold</span>
            <div className="text-xs font-normal text-red-600">
              {locationsAboveThreshold}/3 locations >7%
            </div>
          </div>
        </div>
      </div>

      {/* Location Utility Analysis */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏭 Location Utility Efficiency Ranking
        </h2>
        <div className="space-y-3">
          {utilityData
            .sort((a, b) => a.utilityCostRatio - b.utilityCostRatio)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.utilityCostRatio)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span>{getStatusIcon(location.utilityCostRatio)}</span>
                </div>
                <div className="text-right">
                  <div className={`text-xs font-bold ${getStatusColor(location.utilityCostRatio)}`}>
                    {(location.utilityCostRatio * 100).toFixed(1)}%
                  </div>
                  <div className="text-xs font-normal text-gray-500">
                    of revenue
                  </div>
                </div>
              </div>
              
              {/* Revenue and cost breakdown */}
              <div className="grid grid-cols-3 gap-4 mb-3 text-xs">
                <div>
                  <span className="text-gray-500">Revenue:</span>
                  <div className="font-bold text-black dark:text-white">₹{location.revenue.toLocaleString('en-IN')}</div>
                </div>
                <div>
                  <span className="text-gray-500">Total Utilities:</span>
                  <div className="font-bold text-orange-600">₹{location.totalUtilities.toLocaleString('en-IN')}</div>
                </div>
                <div>
                  <span className="text-gray-500">Revenue per kWh:</span>
                  <div className="font-bold text-green-600">₹{location.efficiencyMetrics.revenuePerKWH}</div>
                </div>
              </div>

              {/* Utility breakdown */}
              <div className="grid grid-cols-2 gap-4 mt-3">
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-2">Utility Cost Breakdown</h4>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Electricity:</span>
                      <span className="font-normal text-black dark:text-white">
                        ₹{location.utilityCosts.electricity.toLocaleString('en-IN')} 
                        ({((location.utilityCosts.electricity / location.totalUtilities) * 100).toFixed(1)}%)
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Water:</span>
                      <span className="font-normal text-black dark:text-white">
                        ₹{location.utilityCosts.water.toLocaleString('en-IN')} 
                        ({((location.utilityCosts.water / location.totalUtilities) * 100).toFixed(1)}%)
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Gas:</span>
                      <span className="font-normal text-black dark:text-white">
                        ₹{location.utilityCosts.gas.toLocaleString('en-IN')} 
                        ({((location.utilityCosts.gas / location.totalUtilities) * 100).toFixed(1)}%)
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Genset/Backup:</span>
                      <span className="font-normal text-black dark:text-white">
                        ₹{location.utilityCosts.genset.toLocaleString('en-IN')} 
                        ({((location.utilityCosts.genset / location.totalUtilities) * 100).toFixed(1)}%)
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Internet/Telecom:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.utilityCosts.internetTelecom.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-2">Seasonal & Efficiency Factors</h4>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-500">AC Usage:</span>
                      <span className={`font-normal ${location.seasonalFactors.acUsage === 'Very High' ? 'text-red-600' : location.seasonalFactors.acUsage === 'High' ? 'text-orange-600' : 'text-green-600'}`}>
                        {location.seasonalFactors.acUsage}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Genset Usage:</span>
                      <span className={`font-normal ${location.seasonalFactors.gensetUsage === 'High' ? 'text-red-600' : location.seasonalFactors.gensetUsage === 'Medium' ? 'text-orange-600' : 'text-green-600'}`}>
                        {location.seasonalFactors.gensetUsage}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">kWh Consumed:</span>
                      <span className="font-normal text-black dark:text-white">{location.efficiencyMetrics.kwh.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Cost per kWh:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.efficiencyMetrics.costPerKWH}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 6-month trend */}
              <div className="mt-3 pt-2 border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-500">6-Month Trend (%):</span>
                  <div className="flex gap-1">
                    {location.monthlyTrend.map((value, idx) => (
                      <span key={idx} className={`px-1 rounded text-xs ${value > 6 ? 'bg-red-100 text-red-600' : value > 4.5 ? 'bg-yellow-100 text-yellow-600' : 'bg-green-100 text-green-600'}`}>
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

      {/* Seasonal Impact Analysis */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🌡️ Seasonal Utility Impact Analysis
        </h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-xs font-bold text-black dark:text-white mb-2">Summer vs Winter Impact</h3>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between p-2 bg-orange-50 dark:bg-orange-900/20 rounded">
                <span className="text-orange-700">Summer (Apr-Jun):</span>
                <span className="font-bold text-orange-600">6.2% avg</span>
              </div>
              <div className="flex justify-between p-2 bg-blue-50 dark:bg-blue-900/20 rounded">
                <span className="text-blue-700">Monsoon (Jul-Sep):</span>
                <span className="font-bold text-blue-600">5.8% avg</span>
              </div>
              <div className="flex justify-between p-2 bg-green-50 dark:bg-green-900/20 rounded">
                <span className="text-green-700">Winter (Oct-Mar):</span>
                <span className="font-bold text-green-600">4.2% avg</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xs font-bold text-black dark:text-white mb-2">Power Situation by Location</h3>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between p-2 bg-green-50 dark:bg-green-900/20 rounded">
                <span className="text-green-700">Gurugram:</span>
                <span className="font-bold text-green-600">Good power, low genset</span>
              </div>
              <div className="flex justify-between p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded">
                <span className="text-yellow-700">Chanakyapuri:</span>
                <span className="font-bold text-yellow-600">Moderate outages</span>
              </div>
              <div className="flex justify-between p-2 bg-red-50 dark:bg-red-900/20 rounded">
                <span className="text-red-700">Shahpur Jat:</span>
                <span className="font-bold text-red-600">Frequent cuts, high backup</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Efficiency Opportunities */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          💡 Cost Optimization Opportunities
        </h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded border border-green-200">
            <h3 className="text-xs font-bold text-green-700 dark:text-green-300 mb-2">Energy Saving</h3>
            <ul className="text-xs text-green-600 space-y-1">
              <li>• LED lighting conversion</li>
              <li>• Smart AC thermostats</li>
              <li>• Equipment maintenance</li>
              <li>• Solar water heating</li>
            </ul>
          </div>
          <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200">
            <h3 className="text-xs font-bold text-blue-700 dark:text-blue-300 mb-2">Power Management</h3>
            <ul className="text-xs text-blue-600 space-y-1">
              <li>• Generator efficiency check</li>
              <li>• UPS optimization</li>
              <li>• Load balancing</li>
              <li>• Peak hour management</li>
            </ul>
          </div>
          <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded border border-orange-200">
            <h3 className="text-xs font-bold text-orange-700 dark:text-orange-300 mb-2">Infrastructure</h3>
            <ul className="text-xs text-orange-600 space-y-1">
              <li>• Water flow optimization</li>
              <li>• Gas leak prevention</li>
              <li>• Insulation improvements</li>
              <li>• Equipment upgrades</li>
            </ul>
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
              <li>• Accounting system (utility bills)</li>
              <li>• PetPooja POS (revenue)</li>
              <li>• Electricity meter readings</li>
              <li>• Vendor invoices</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Monthly</li>
              <li>• Alert: Red if >0.07</li>
              <li>• Drill down: by utility type, by location, by season</li>
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
            • Monsoon/summer may spike due to A/C use; genset cost varies by location
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Monitor power cuts and backup fuel costs - major operational expense
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Track utility rate changes and government subsidy impacts
          </p>
        </div>
      </div>

      {/* Users & Access */}
      <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-lg border border-gray-200">
        <h2 className="text-xs font-bold text-black dark:text-white mb-2">
          👥 Authorized Users
        </h2>
        <p className="text-xs font-normal text-gray-500">
          Owner, Finance
        </p>
      </div>
    </div>
  )
}