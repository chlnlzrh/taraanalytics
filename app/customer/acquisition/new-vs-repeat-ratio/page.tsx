import { RESTAURANTS } from '@/lib/restaurant-data'

export default function NewVsRepeatCustomerRatioKPI() {
  // CUS_004 New vs. Repeat Customer Ratio - Exact specifications from restaurant_kpi_metrics_127.txt
  const customerRatioData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      totalCustomers: 285,
      newCustomers: 114, // 40%
      repeatCustomers: 171, // 60%
      newCustomerPercent: 40,
      repeatCustomerPercent: 60,
      status: 'good', // Target 60% repeat / 40% new
      cohortBreakdown: {
        thisMonth: { new: 42, repeat: 63 },
        lastMonth: { new: 38, repeat: 57 },
        twoMonthsAgo: { new: 34, repeat: 51 }
      }
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      repeatCustomers: 140, // 62%
      newCustomers: 85, // 38%
      totalCustomers: 225,
      newCustomerPercent: 38,
      repeatCustomerPercent: 62,
      status: 'good',
      cohortBreakdown: {
        thisMonth: { new: 32, repeat: 48 },
        lastMonth: { new: 28, repeat: 42 },
        twoMonthsAgo: { new: 25, repeat: 50 }
      }
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      repeatCustomers: 93, // 50%
      newCustomers: 92, // 50%
      totalCustomers: 185,
      newCustomerPercent: 50,
      repeatCustomerPercent: 50,
      status: 'warning', // Warning: 50% repeat / 50% new (declining retention)
      cohortBreakdown: {
        thisMonth: { new: 35, repeat: 35 },
        lastMonth: { new: 32, repeat: 31 },
        twoMonthsAgo: { new: 25, repeat: 27 }
      }
    }
  ]

  const chainTotalCustomers = customerRatioData.reduce((sum, item) => sum + item.totalCustomers, 0)
  const chainTotalNew = customerRatioData.reduce((sum, item) => sum + item.newCustomers, 0)
  const chainTotalRepeat = customerRatioData.reduce((sum, item) => sum + item.repeatCustomers, 0)
  const chainNewPercent = (chainTotalNew / chainTotalCustomers) * 100
  const chainRepeatPercent = (chainTotalRepeat / chainTotalCustomers) * 100

  const getStatusColor = (repeatPercent: number) => {
    if (repeatPercent >= 60) return 'text-green-600'
    if (repeatPercent >= 50) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (repeatPercent: number) => {
    if (repeatPercent >= 60) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (repeatPercent >= 50) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getStatusIcon = (repeatPercent: number) => {
    if (repeatPercent >= 60) return '🎯'
    if (repeatPercent >= 50) return '⚠️'
    return '🚨'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            New vs. Repeat Customer Ratio
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: CUS_004 | Percentage of New vs. Returning Customers
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
            <strong>Formula:</strong> (New Customers ÷ Total Customers) × 100; (Repeat Customers ÷ Total Customers) × 100
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Percentage of new vs. returning customers. Tracked via loyalty program, phone number, or reservation system.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> Target 60% repeat / 40% new for mature units; heavy new customer reliance suggests retention issues.
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
            <div className="text-xs font-normal text-green-600">60% repeat / 40% new</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">50% repeat / 50% new</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&lt;40% repeat</div>
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
            <span className="text-xs font-normal text-gray-500">Total Chain Customers</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-black dark:text-white">
                {chainTotalCustomers.toLocaleString('en-IN')}
              </span>
              <span>👥</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Repeat Customer %</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getStatusColor(chainRepeatPercent)}`}>
                {chainRepeatPercent.toFixed(1)}%
              </span>
              <span>🔄</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">New Customer %</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-black dark:text-white">
                {chainNewPercent.toFixed(1)}%
              </span>
              <span>✨</span>
            </div>
          </div>
        </div>
      </div>

      {/* Location Performance */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Performance (Customer Mix Analysis)
        </h2>
        <div className="space-y-3">
          {customerRatioData
            .sort((a, b) => b.repeatCustomerPercent - a.repeatCustomerPercent)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.repeatCustomerPercent)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span>{getStatusIcon(location.repeatCustomerPercent)}</span>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-black dark:text-white">
                    {location.totalCustomers} total customers
                  </div>
                  <div className={`text-xs font-normal ${getStatusColor(location.repeatCustomerPercent)}`}>
                    {location.repeatCustomerPercent}% repeat / {location.newCustomerPercent}% new
                  </div>
                </div>
              </div>
              
              {/* Customer breakdown */}
              <div className="grid grid-cols-2 gap-4 mb-3">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">Repeat Customers:</span>
                  <span className="font-normal text-green-600">{location.repeatCustomers} ({location.repeatCustomerPercent}%)</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">New Customers:</span>
                  <span className="font-normal text-blue-600">{location.newCustomers} ({location.newCustomerPercent}%)</span>
                </div>
              </div>

              {/* Cohort breakdown */}
              <div className="mt-3">
                <h4 className="text-xs font-bold text-gray-600 mb-2">Customer Cohort Trends</h4>
                <div className="grid grid-cols-3 gap-3">
                  {Object.entries(location.cohortBreakdown).map(([period, data]) => (
                    <div key={period} className="text-center">
                      <div className="text-xs font-normal text-gray-500 capitalize mb-1">{period.replace('Ago', ' Ago')}</div>
                      <div className="text-xs">
                        <span className="text-green-600">{data.repeat}R</span>
                        <span className="text-gray-400"> / </span>
                        <span className="text-blue-600">{data.new}N</span>
                      </div>
                    </div>
                  ))}
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
              <li>• CRM (customer history)</li>
              <li>• Loyalty program (enrollment)</li>
              <li>• PetPooja POS (phone tracking)</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Weekly refresh</li>
              <li>• Customer classification tracking</li>
              <li>• Alert if &lt;40% repeat customers</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Drill-down Options */}
      <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200">
        <h2 className="text-xs font-bold text-purple-900 dark:text-purple-300 mb-2">
          🔍 Available Drill-downs
        </h2>
        <div className="space-y-1">
          <p className="text-xs font-normal text-purple-800 dark:text-purple-300">
            • By location comparison
          </p>
          <p className="text-xs font-normal text-purple-800 dark:text-purple-300">
            • By customer cohort (acquisition month)
          </p>
          <p className="text-xs font-normal text-purple-800 dark:text-purple-300">
            • Temporal trends and seasonality
          </p>
        </div>
      </div>

      {/* Users & Access */}
      <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-lg border border-gray-200">
        <h2 className="text-xs font-bold text-black dark:text-white mb-2">
          👥 Authorized Users
        </h2>
        <p className="text-xs font-normal text-gray-500">
          Manager, Marketing
        </p>
      </div>
    </div>
  )
}