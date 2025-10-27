import { RESTAURANTS } from '@/lib/restaurant-data'

export default function PrimeCostKPI() {
  // FIN_008 Prime Cost % - Exact specifications from restaurant_kpi_metrics_127.txt
  const primeCostData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      cogs: 31.5, // Food/beverage costs %
      laborCost: 24.7, // Labor costs %
      primeCost: 56.2, // Combined COGS + Labor
      revenue: 485000,
      status: 'good' // 55-58% target range
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      cogs: 29.8,
      laborCost: 25.0,
      primeCost: 54.8,
      revenue: 395000,
      status: 'excellent' // Below 55%
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      cogs: 33.2,
      laborCost: 25.2,
      primeCost: 58.4,
      revenue: 365000,
      status: 'warning' // 58-60% warning range
    }
  ]

  const chainAverage = primeCostData.reduce((sum, item) => sum + item.primeCost, 0) / primeCostData.length

  const getStatusColor = (primeCost: number) => {
    if (primeCost <= 55) return 'text-green-600'
    if (primeCost <= 58) return 'text-green-600'
    if (primeCost <= 60) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (primeCost: number) => {
    if (primeCost <= 55) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (primeCost <= 58) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (primeCost <= 60) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getStatusIcon = (primeCost: number) => {
    if (primeCost <= 55) return '🟢'
    if (primeCost <= 58) return '✅'
    if (primeCost <= 60) return '⚠️'
    return '🚨'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Prime Cost % Analysis
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: FIN_008 | The Single Most Important Profitability Metric
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
            <strong>Formula:</strong> (COGS + Total Labor Cost) ÷ Revenue × 100
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Combined food/beverage costs and labor as percentage of revenue.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> High prime cost (&gt;65%) is #1 reason restaurants fail. Every 1% increase reduces net profit by 15–25%.
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
            <div className="text-xs font-normal text-green-600">55–58%</div>
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
        <div className="grid grid-cols-2 gap-6">
          <div>
            <span className="text-xs font-normal text-gray-500">Chain Average Prime Cost</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getStatusColor(chainAverage)}`}>
                {chainAverage.toFixed(1)}%
              </span>
              <span>{getStatusIcon(chainAverage)}</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Performance Status</span>
            <div className="text-xs font-normal text-green-600">
              ✓ Within Target Range (All locations &lt;60%)
            </div>
          </div>
        </div>
      </div>

      {/* Location Ranking & Heatmap */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Ranking by Prime Cost %
        </h2>
        <div className="space-y-3">
          {primeCostData
            .sort((a, b) => a.primeCost - b.primeCost)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.primeCost)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span>{getStatusIcon(location.primeCost)}</span>
                </div>
                <span className={`text-xs font-bold ${getStatusColor(location.primeCost)}`}>
                  {location.primeCost.toFixed(1)}%
                </span>
              </div>
              
              {/* Drill-down breakdown */}
              <div className="grid grid-cols-3 gap-4 text-xs">
                <div>
                  <span className="text-gray-500">Food/Beverage Cost:</span>
                  <div className="font-normal text-black dark:text-white">{location.cogs.toFixed(1)}%</div>
                </div>
                <div>
                  <span className="text-gray-500">Labor Cost:</span>
                  <div className="font-normal text-black dark:text-white">{location.laborCost.toFixed(1)}%</div>
                </div>
                <div>
                  <span className="text-gray-500">Monthly Revenue:</span>
                  <div className="font-normal text-black dark:text-white">₹{location.revenue.toLocaleString('en-IN')}</div>
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
              <li>• PetPooja POS (COGS calculation)</li>
              <li>• HRIS System (Labor costs)</li>
              <li>• Accounting System (Revenue)</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Daily (for trending)</li>
              <li>• Weekly (for review & action)</li>
              <li>• Real-time alerts if &gt;60%</li>
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
            • Monitor separately by cuisine (specialty items = higher COGS)
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Track wage inflation year-over-year impact
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Account for PF/ESI as semi-fixed labor costs
          </p>
        </div>
      </div>

      {/* Users & Access */}
      <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-lg border border-gray-200">
        <h2 className="text-xs font-bold text-black dark:text-white mb-2">
          👥 Authorized Users
        </h2>
        <p className="text-xs font-normal text-gray-500">
          Manager, Owner, Finance Team
        </p>
      </div>
    </div>
  )
}