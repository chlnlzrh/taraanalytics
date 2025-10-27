import { RESTAURANTS } from '@/lib/restaurant-data'

export default function DaysOfInventoryKPI() {
  // OPR_011 Days of Inventory on Hand - Exact specifications from restaurant_kpi_metrics_127.txt
  const inventoryData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      inventoryValue: 28500,
      dailyCogs: 4750, // Monthly COGS/30
      daysOnHand: 6.0, // Target range - good performance
      status: 'good',
      variance: -14.3,
      categoryBreakdown: {
        vegetables: { inventory: 7125, dailyCogs: 1425, days: 5.0 },
        meat: { inventory: 4750, dailyCogs: 950, days: 5.0 },
        dry_goods: { inventory: 9500, dailyCogs: 1425, days: 6.7 },
        beverages: { inventory: 7125, dailyCogs: 950, days: 7.5 }
      },
      spoilageRisk: {
        high: ['vegetables', 'meat'], // 2-3 days
        medium: ['beverages'], // 5-7 days
        low: ['dry_goods'] // 15+ days
      },
      workingCapital: 28500,
      turnoverRatio: 60.8 // 365 / days on hand
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      inventoryValue: 18750,
      dailyCogs: 3750,
      daysOnHand: 5.0, // Target range - good performance
      status: 'good',
      variance: -28.6,
      categoryBreakdown: {
        vegetables: { inventory: 5063, dailyCogs: 1125, days: 4.5 },
        meat: { inventory: 3375, dailyCogs: 750, days: 4.5 },
        dry_goods: { inventory: 6750, dailyCogs: 1125, days: 6.0 },
        beverages: { inventory: 3563, dailyCogs: 750, days: 4.8 }
      },
      spoilageRisk: {
        high: ['vegetables', 'meat'],
        medium: ['beverages'],
        low: ['dry_goods']
      },
      workingCapital: 18750,
      turnoverRatio: 73.0
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      inventoryValue: 61667,
      dailyCogs: 3083, // Lower daily COGS but much higher inventory
      daysOnHand: 20.0, // Critical - above 10 days threshold
      status: 'critical',
      variance: 185.7,
      categoryBreakdown: {
        vegetables: { inventory: 18500, dailyCogs: 925, days: 20.0 },
        meat: { inventory: 15417, dailyCogs: 617, days: 25.0 },
        dry_goods: { inventory: 18500, dailyCogs: 925, days: 20.0 },
        beverages: { inventory: 9250, dailyCogs: 617, days: 15.0 }
      },
      spoilageRisk: {
        high: ['vegetables', 'meat'],
        medium: ['beverages'],
        low: ['dry_goods']
      },
      workingCapital: 61667,
      turnoverRatio: 18.3
    }
  ]

  const chainAverage = inventoryData.reduce((sum, item) => sum + item.daysOnHand, 0) / inventoryData.length

  const getStatusColor = (days: number) => {
    if (days <= 7) return 'text-green-600'
    if (days <= 10) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (days: number) => {
    if (days <= 7) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (days <= 10) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getSpoilageRiskColor = (category: string, risks: any) => {
    if (risks.high.includes(category)) return 'text-red-600'
    if (risks.medium.includes(category)) return 'text-yellow-600'
    return 'text-green-600'
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xs font-bold text-black dark:text-white">
          Days of Inventory on Hand
        </h1>
        <p className="text-xs font-normal text-gray-500 mt-1">
          KPI ID: OPR_011 | Working Capital & Spoilage Risk Management
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200">
        <h2 className="text-xs font-bold text-blue-900 dark:text-blue-300 mb-2">
          📊 Definition & Formula
        </h2>
        <div className="space-y-2">
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Formula:</strong> (Inventory Value ÷ Daily COGS) or (365 ÷ Turnover Ratio)
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Average number of days inventory is held before sale. Indicator of working capital and spoilage risk.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> Target 3–7 days; helps with working capital planning and supplier lead-time management.
          </p>
        </div>
      </div>

      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🎯 Target Ranges & Alert Thresholds
        </h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded border border-green-200">
            <div className="text-xs font-bold text-green-700 dark:text-green-300">TARGET</div>
            <div className="text-xs font-normal text-green-600">3–7 days</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">7–10 days</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&gt;10 days</div>
          </div>
        </div>
      </div>

      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          📈 Chain Summary & Working Capital Impact
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-gray-50 dark:bg-gray-900/20 rounded border">
            <div className="text-xs font-bold text-gray-700 dark:text-gray-300">Chain Average</div>
            <div className="text-xs font-normal text-black dark:text-white">{chainAverage.toFixed(1)} days</div>
          </div>
          <div className="text-center p-3 bg-gray-50 dark:bg-gray-900/20 rounded border">
            <div className="text-xs font-bold text-gray-700 dark:text-gray-300">Total Working Capital</div>
            <div className="text-xs font-normal text-black dark:text-white">
              ₹{inventoryData.reduce((sum, item) => sum + item.workingCapital, 0).toLocaleString()}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Performance (Best = Fewest Days)
        </h2>
        <div className="space-y-3">
          {inventoryData
            .sort((a, b) => a.daysOnHand - b.daysOnHand)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.daysOnHand)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-black dark:text-white">
                    {location.daysOnHand.toFixed(1)} days
                  </div>
                  <div className={`text-xs font-normal ${location.variance < 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {location.variance > 0 ? '+' : ''}{location.variance.toFixed(1)}% vs target (7 days)
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-3">
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-1">Category Analysis</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className={`${getSpoilageRiskColor('vegetables', location.spoilageRisk)}`}>Vegetables:</span>
                      <span className="font-normal text-black dark:text-white">{location.categoryBreakdown.vegetables.days.toFixed(1)} days</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className={`${getSpoilageRiskColor('meat', location.spoilageRisk)}`}>Meat:</span>
                      <span className="font-normal text-black dark:text-white">{location.categoryBreakdown.meat.days.toFixed(1)} days</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className={`${getSpoilageRiskColor('dry_goods', location.spoilageRisk)}`}>Dry Goods:</span>
                      <span className="font-normal text-black dark:text-white">{location.categoryBreakdown.dry_goods.days.toFixed(1)} days</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className={`${getSpoilageRiskColor('beverages', location.spoilageRisk)}`}>Beverages:</span>
                      <span className="font-normal text-black dark:text-white">{location.categoryBreakdown.beverages.days.toFixed(1)} days</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-1">Financial Metrics</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Total Inventory:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.inventoryValue.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Daily COGS:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.dailyCogs.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Turnover (Annual):</span>
                      <span className="font-normal text-black dark:text-white">{location.turnoverRatio.toFixed(1)}x</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Working Capital:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.workingCapital.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-3 p-2 bg-gray-50 dark:bg-gray-900/20 rounded">
                <h5 className="text-xs font-bold text-gray-600 mb-1">Spoilage Risk Legend</h5>
                <div className="flex gap-4 text-xs">
                  <span className="text-red-600">● High Risk (2-3 days)</span>
                  <span className="text-yellow-600">● Medium Risk (5-7 days)</span>
                  <span className="text-green-600">● Low Risk (15+ days)</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200">
        <h2 className="text-xs font-bold text-orange-900 dark:text-orange-300 mb-2">
          🇮🇳 India-Specific Monitoring
        </h2>
        <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
          • Shorter for high-spoilage items (produce); longer for dry goods; monsoon may increase spoilage risk
        </p>
      </div>
    </div>
  )
}