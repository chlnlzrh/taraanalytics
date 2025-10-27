import { RESTAURANTS } from '@/lib/restaurant-data'

export default function LaborCostPercentKPI() {
  // LAB_001 Labor Cost % - Exact specifications from restaurant_kpi_metrics_127.txt
  const laborCostData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      totalLaborCost: 135400, // Total labor including PF, ESI
      revenue: 485000,
      laborCostPercent: 27.9,
      wages: 118500,
      pfEsi: 16900, // PF (13.67% of eligible wages) + ESI
      status: 'excellent' // 28-32% target range
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      totalLaborCost: 122800,
      revenue: 395000,
      laborCostPercent: 31.1,
      wages: 107500,
      pfEsi: 15300,
      status: 'good' // Within target range
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      totalLaborCost: 128700,
      revenue: 365000,
      laborCostPercent: 35.3,
      wages: 112800,
      pfEsi: 15900,
      status: 'critical' // >35% critical range
    }
  ]

  const chainAverage = laborCostData.reduce((sum, item) => sum + item.laborCostPercent, 0) / laborCostData.length

  const getStatusColor = (laborCost: number) => {
    if (laborCost <= 32) return 'text-green-600'
    if (laborCost <= 35) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (laborCost: number) => {
    if (laborCost <= 32) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (laborCost <= 35) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getStatusIcon = (laborCost: number) => {
    if (laborCost <= 32) return '✅'
    if (laborCost <= 35) return '⚠️'
    return '🚨'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Labor Cost % Analysis
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: LAB_001 | Second Largest Operating Expense After COGS
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
            <strong>Formula:</strong> (Total Labor Cost including wages, PF, ESI ÷ Revenue) × 100
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Labor costs (all payroll components) as percentage of revenue. Target 25–35% depending on service level.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> Rising labor % signals wage inflation, overstaffing, or low revenue productivity. Second-largest expense.
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
            <div className="text-xs font-normal text-green-600">28–32%</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">32–35%</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&gt;35%</div>
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
            <span className="text-xs font-normal text-gray-500">Chain Average Labor Cost</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getStatusColor(chainAverage)}`}>
                {chainAverage.toFixed(1)}%
              </span>
              <span>{getStatusIcon(chainAverage)}</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Performance Status</span>
            <div className="text-xs font-normal text-yellow-600">
              ⚠️ One location exceeding critical threshold (35%)
            </div>
          </div>
        </div>
      </div>

      {/* Location Ranking & Heatmap */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Ranking by Labor Cost %
        </h2>
        <div className="space-y-3">
          {laborCostData
            .sort((a, b) => a.laborCostPercent - b.laborCostPercent)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.laborCostPercent)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span>{getStatusIcon(location.laborCostPercent)}</span>
                </div>
                <span className={`text-xs font-bold ${getStatusColor(location.laborCostPercent)}`}>
                  {location.laborCostPercent.toFixed(1)}%
                </span>
              </div>
              
              {/* Drill-down breakdown */}
              <div className="grid grid-cols-4 gap-4 text-xs">
                <div>
                  <span className="text-gray-500">Base Wages:</span>
                  <div className="font-normal text-black dark:text-white">₹{location.wages.toLocaleString('en-IN')}</div>
                </div>
                <div>
                  <span className="text-gray-500">PF + ESI:</span>
                  <div className="font-normal text-black dark:text-white">₹{location.pfEsi.toLocaleString('en-IN')}</div>
                </div>
                <div>
                  <span className="text-gray-500">Total Labor Cost:</span>
                  <div className="font-normal text-black dark:text-white">₹{location.totalLaborCost.toLocaleString('en-IN')}</div>
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
              <li>• HRIS/Payroll system (total labor cost)</li>
              <li>• PetPooja POS (revenue)</li>
              <li>• Payroll system (PF/ESI calculations)</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Monthly refresh</li>
              <li>• Red alert if &gt;35%</li>
              <li>• Drill down by location, role, shift</li>
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
            • Include PF (13.67% of eligible wages) and ESI in calculations
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Monitor annual wage inflation (8–12% impact on labor costs)
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Consider minimum wage compliance across all locations
          </p>
        </div>
      </div>

      {/* Users & Access */}
      <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-lg border border-gray-200">
        <h2 className="text-xs font-bold text-black dark:text-white mb-2">
          👥 Authorized Users
        </h2>
        <p className="text-xs font-normal text-gray-500">
          Manager, Finance Team
        </p>
      </div>
    </div>
  )
}