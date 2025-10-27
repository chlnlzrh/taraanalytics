import { RESTAURANTS } from '@/lib/restaurant-data'

export default function CACPaybackPeriodKPI() {
  // CUS_003 CAC Payback Period - Exact specifications from restaurant_kpi_metrics_127.txt
  const paybackData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      averageCheckSize: 1000,
      cac: 285,
      paybackPeriod: 0.29, // transactions
      paybackDays: 15, // estimated days to payback
      status: 'good', // Within target range
      channelBreakdown: {
        zomato: { cac: 333, acs: 950, payback: 0.35 },
        instagram: { cac: 200, acs: 1050, payback: 0.19 },
        google: { cac: 250, acs: 1000, payback: 0.25 },
        referral: { cac: 238, acs: 1100, payback: 0.22 }
      }
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      averageCheckSize: 850,
      cac: 225,
      paybackPeriod: 0.26, // transactions
      paybackDays: 14, // estimated days to payback
      status: 'good',
      channelBreakdown: {
        zomato: { cac: 286, acs: 800, payback: 0.36 },
        instagram: { cac: 182, acs: 900, payback: 0.20 },
        google: { cac: 211, acs: 850, payback: 0.25 },
        referral: { cac: 182, acs: 950, payback: 0.19 }
      }
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      averageCheckSize: 750,
      cac: 425,
      paybackPeriod: 0.57, // transactions
      paybackDays: 45, // estimated days to payback (warning range)
      status: 'warning',
      channelBreakdown: {
        zomato: { cac: 514, acs: 700, payback: 0.73 },
        instagram: { cac: 320, acs: 800, payback: 0.40 },
        google: { cac: 333, acs: 750, payback: 0.44 },
        referral: { cac: 417, acs: 850, payback: 0.49 }
      }
    }
  ]

  const chainAveragePayback = paybackData.reduce((sum, item) => sum + item.paybackPeriod, 0) / paybackData.length
  const chainAverageACS = paybackData.reduce((sum, item) => sum + item.averageCheckSize, 0) / paybackData.length
  const chainAverageCAC = paybackData.reduce((sum, item) => sum + item.cac, 0) / paybackData.length

  const getStatusColor = (payback: number) => {
    if (payback < 1) return 'text-green-600'
    if (payback <= 2) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (payback: number) => {
    if (payback < 1) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (payback <= 2) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getStatusIcon = (payback: number) => {
    if (payback < 1) return '⚡'
    if (payback <= 2) return '⚠️'
    return '🚨'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            CAC Payback Period
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: CUS_003 | Number of Transactions Needed to Recover CAC
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
            <strong>Formula:</strong> Average Check Size ÷ CAC
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Number of transactions needed to recover CAC. If CAC=₹200 and ACS=₹400, payback in 0.5 transactions (one-time purchase).
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> Indicates acquisition efficiency; acceptable if customer repeats within 2 visits.
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
            <div className="text-xs font-normal text-green-600">&lt;1 transaction</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">1–2 transactions</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&gt;2 transactions</div>
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
            <span className="text-xs font-normal text-gray-500">Average Chain ACS</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-black dark:text-white">
                ₹{Math.round(chainAverageACS).toLocaleString('en-IN')}
              </span>
              <span>💰</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Average Chain CAC</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-black dark:text-white">
                ₹{Math.round(chainAverageCAC).toLocaleString('en-IN')}
              </span>
              <span>📊</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Average Payback Period</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getStatusColor(chainAveragePayback)}`}>
                {chainAveragePayback.toFixed(2)} transactions
              </span>
              <span>{getStatusIcon(chainAveragePayback)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Location Performance */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Performance (Payback Analysis)
        </h2>
        <div className="space-y-3">
          {paybackData
            .sort((a, b) => a.paybackPeriod - b.paybackPeriod)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.paybackPeriod)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span>{getStatusIcon(location.paybackPeriod)}</span>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-black dark:text-white">
                    {location.paybackPeriod.toFixed(2)} transactions
                  </div>
                  <div className="text-xs font-normal text-gray-500">
                    ~{location.paybackDays} days payback
                  </div>
                </div>
              </div>
              
              {/* Key metrics */}
              <div className="grid grid-cols-2 gap-4 mb-3">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">Average Check Size:</span>
                  <span className="font-normal text-black dark:text-white">₹{location.averageCheckSize.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">CAC:</span>
                  <span className="font-normal text-black dark:text-white">₹{location.cac.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Channel breakdown */}
              <div className="mt-3">
                <h4 className="text-xs font-bold text-gray-600 mb-2">Channel Payback Analysis</h4>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(location.channelBreakdown).map(([channel, data]) => (
                    <div key={channel} className="flex justify-between text-xs">
                      <span className="text-gray-500 capitalize">{channel}:</span>
                      <span className={`font-normal ${getStatusColor(data.payback)}`}>
                        {data.payback.toFixed(2)} transactions
                      </span>
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
              <li>• Marketing data (CAC)</li>
              <li>• PetPooja POS (ACS)</li>
              <li>• Customer frequency analysis</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Weekly refresh</li>
              <li>• Channel-level tracking</li>
              <li>• Alert if &gt;2 transactions payback</li>
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
            • By channel payback efficiency
          </p>
          <p className="text-xs font-normal text-purple-800 dark:text-purple-300">
            • By customer segment analysis
          </p>
          <p className="text-xs font-normal text-purple-800 dark:text-purple-300">
            • Time-to-payback trending
          </p>
        </div>
      </div>

      {/* Users & Access */}
      <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-lg border border-gray-200">
        <h2 className="text-xs font-bold text-black dark:text-white mb-2">
          👥 Authorized Users
        </h2>
        <p className="text-xs font-normal text-gray-500">
          Marketing, Finance
        </p>
      </div>
    </div>
  )
}