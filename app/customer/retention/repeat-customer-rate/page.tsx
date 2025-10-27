import { RESTAURANTS } from '@/lib/restaurant-data'

export default function RepeatCustomerRateKPI() {
  // CUS_006 Repeat Customer Rate - Exact specifications from restaurant_kpi_metrics_127.txt
  const repeatCustomerData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      totalUniqueCustomers: 500,
      customersWithThreePlusVisits: 115,
      repeatCustomerRate: 23,
      status: 'good', // Above target 20%
      visitDistribution: {
        oneVisit: 285, // 57%
        twoVisits: 100, // 20%
        threePlusVisits: 115 // 23%
      },
      highValueRepeaters: {
        threeFiveVisits: 85,
        sixPlusVisits: 30
      }
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      totalUniqueCustomers: 450,
      customersWithThreePlusVisits: 99,
      repeatCustomerRate: 22,
      status: 'good',
      visitDistribution: {
        oneVisit: 261, // 58%
        twoVisits: 90, // 20%
        threePlusVisits: 99 // 22%
      },
      highValueRepeaters: {
        threeFiveVisits: 72,
        sixPlusVisits: 27
      }
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      totalUniqueCustomers: 400,
      customersWithThreePlusVisits: 60,
      repeatCustomerRate: 15,
      status: 'warning', // Below warning threshold
      visitDistribution: {
        oneVisit: 260, // 65%
        twoVisits: 80, // 20%
        threePlusVisits: 60 // 15%
      },
      highValueRepeaters: {
        threeFiveVisits: 45,
        sixPlusVisits: 15
      }
    }
  ]

  const chainTotalCustomers = repeatCustomerData.reduce((sum, item) => sum + item.totalUniqueCustomers, 0)
  const chainTotalRepeaters = repeatCustomerData.reduce((sum, item) => sum + item.customersWithThreePlusVisits, 0)
  const chainAverageRate = (chainTotalRepeaters / chainTotalCustomers) * 100

  const getStatusColor = (rate: number) => {
    if (rate > 20) return 'text-green-600'
    if (rate >= 15) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (rate: number) => {
    if (rate > 20) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (rate >= 15) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getStatusIcon = (rate: number) => {
    if (rate > 20) return '🎯'
    if (rate >= 15) return '⚠️'
    return '🚨'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Repeat Customer Rate
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: CUS_006 | Customers with 3+ Visits in Defined Period
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
            <strong>Formula:</strong> Customers with 3+ visits in defined period ÷ Total unique customers
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Subset of retention; high indicator of true loyalty. Target >20% of customer base.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> Customers visiting 3+ times are core brand advocates; driving repeat purchase significantly improves margins.
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
            <div className="text-xs font-normal text-green-600">>20% of base (3+ visits/year)</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">15–20%</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600"><15%</div>
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
            <span className="text-xs font-normal text-gray-500">Total Unique Customers</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-black dark:text-white">
                {chainTotalCustomers.toLocaleString('en-IN')}
              </span>
              <span>👥</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Repeat Customers (3+)</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-black dark:text-white">
                {chainTotalRepeaters.toLocaleString('en-IN')}
              </span>
              <span>🔄</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Chain Repeat Rate</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getStatusColor(chainAverageRate)}`}>
                {chainAverageRate.toFixed(1)}%
              </span>
              <span>{getStatusIcon(chainAverageRate)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Location Performance */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Performance (Repeat Customer Analysis)
        </h2>
        <div className="space-y-3">
          {repeatCustomerData
            .sort((a, b) => b.repeatCustomerRate - a.repeatCustomerRate)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.repeatCustomerRate)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span>{getStatusIcon(location.repeatCustomerRate)}</span>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-black dark:text-white">
                    {location.repeatCustomerRate}% repeat rate
                  </div>
                  <div className="text-xs font-normal text-gray-500">
                    {location.customersWithThreePlusVisits} / {location.totalUniqueCustomers} customers
                  </div>
                </div>
              </div>
              
              {/* Visit distribution */}
              <div className="grid grid-cols-3 gap-4 mb-3">
                <div className="text-center">
                  <div className="text-xs font-normal text-gray-500">1 Visit</div>
                  <div className="text-xs font-bold text-black dark:text-white">
                    {location.visitDistribution.oneVisit}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs font-normal text-gray-500">2 Visits</div>
                  <div className="text-xs font-bold text-black dark:text-white">
                    {location.visitDistribution.twoVisits}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs font-normal text-gray-500">3+ Visits</div>
                  <div className="text-xs font-bold text-green-600">
                    {location.visitDistribution.threePlusVisits}
                  </div>
                </div>
              </div>

              {/* High value breakdown */}
              <div className="mt-3">
                <h4 className="text-xs font-bold text-gray-600 mb-2">High-Value Repeaters</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">3-5 visits:</span>
                    <span className="font-normal text-blue-600">{location.highValueRepeaters.threeFiveVisits}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">6+ visits:</span>
                    <span className="font-normal text-purple-600">{location.highValueRepeaters.sixPlusVisits}</span>
                  </div>
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
              <li>• CRM (visit frequency)</li>
              <li>• Loyalty program data</li>
              <li>• Customer transaction history</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Monthly refresh</li>
              <li>• Visit frequency tracking</li>
              <li>• Alert if <15% repeat rate</li>
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
            • By location analysis
          </p>
          <p className="text-xs font-normal text-purple-800 dark:text-purple-300">
            • By purchase frequency (3-5 visits vs. 6+ visits)
          </p>
          <p className="text-xs font-normal text-purple-800 dark:text-purple-300">
            • Customer value segmentation
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