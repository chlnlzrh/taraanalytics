import { RESTAURANTS } from '@/lib/restaurant-data'

export default function CustomerAcquisitionCostKPI() {
  // CUS_002 Customer Acquisition Cost (CAC) - Exact specifications from restaurant_kpi_metrics_127.txt
  const cacData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      overallCAC: 285,
      monthlyMarketingSpend: 45000,
      newCustomersAcquired: 158,
      status: 'good', // Within target range
      channelBreakdown: {
        zomato: { spend: 15000, newCustomers: 45, cac: 333 },
        instagram: { spend: 12000, newCustomers: 60, cac: 200 },
        google: { spend: 8000, newCustomers: 32, cac: 250 },
        referral: { spend: 5000, newCustomers: 21, cac: 238 },
        other: { spend: 5000, newCustomers: 0, cac: 0 }
      }
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      overallCAC: 225,
      monthlyMarketingSpend: 38000,
      newCustomersAcquired: 169,
      status: 'good',
      channelBreakdown: {
        zomato: { spend: 12000, newCustomers: 42, cac: 286 },
        instagram: { spend: 10000, newCustomers: 55, cac: 182 },
        google: { spend: 8000, newCustomers: 38, cac: 211 },
        referral: { spend: 4000, newCustomers: 22, cac: 182 },
        other: { spend: 4000, newCustomers: 12, cac: 333 }
      }
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      overallCAC: 425,
      monthlyMarketingSpend: 42000,
      newCustomersAcquired: 99,
      status: 'critical', // Above critical threshold
      channelBreakdown: {
        zomato: { spend: 18000, newCustomers: 35, cac: 514 },
        instagram: { spend: 8000, newCustomers: 25, cac: 320 },
        google: { spend: 6000, newCustomers: 18, cac: 333 },
        referral: { spend: 5000, newCustomers: 12, cac: 417 },
        other: { spend: 5000, newCustomers: 9, cac: 556 }
      }
    }
  ]

  const chainTotalSpend = cacData.reduce((sum, item) => sum + item.monthlyMarketingSpend, 0)
  const chainTotalNewCustomers = cacData.reduce((sum, item) => sum + item.newCustomersAcquired, 0)
  const chainAverageCAC = chainTotalSpend / chainTotalNewCustomers

  const getStatusColor = (cac: number) => {
    if (cac <= 300) return 'text-green-600'
    if (cac <= 400) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (cac: number) => {
    if (cac <= 300) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (cac <= 400) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getStatusIcon = (cac: number) => {
    if (cac <= 300) return '💰'
    if (cac <= 400) return '⚠️'
    return '🚨'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Customer Acquisition Cost (CAC)
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: CUS_002 | Average Cost to Acquire One New Customer
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
            <strong>Formula:</strong> Total Marketing Spend ÷ New Customers Acquired
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Average cost to acquire one new customer. Compare across channels (Zomato ads, Instagram, traditional, word-of-mouth).
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> Typical CAC: ₹100–₹400 per new customer depending on platform; informs marketing budget allocation.
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
            <div className="text-xs font-normal text-green-600">₹100–₹300 depending on channel</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">₹300–₹400</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&gt;₹400 or rising</div>
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
            <span className="text-xs font-normal text-gray-500">Total Marketing Spend</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-black dark:text-white">
                ₹{chainTotalSpend.toLocaleString('en-IN')}
              </span>
              <span>💸</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">New Customers Acquired</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-black dark:text-white">
                {chainTotalNewCustomers.toLocaleString('en-IN')}
              </span>
              <span>👥</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Average Chain CAC</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getStatusColor(chainAverageCAC)}`}>
                ₹{Math.round(chainAverageCAC).toLocaleString('en-IN')}
              </span>
              <span>{getStatusIcon(chainAverageCAC)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Location Performance */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Performance (CAC Analysis)
        </h2>
        <div className="space-y-3">
          {cacData
            .sort((a, b) => a.overallCAC - b.overallCAC)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.overallCAC)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span>{getStatusIcon(location.overallCAC)}</span>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-black dark:text-white">
                    ₹{location.overallCAC.toLocaleString('en-IN')} CAC
                  </div>
                  <div className="text-xs font-normal text-gray-500">
                    {location.newCustomersAcquired} new customers
                  </div>
                </div>
              </div>
              
              {/* Channel breakdown */}
              <div className="mt-3">
                <h4 className="text-xs font-bold text-gray-600 mb-2">Channel Performance</h4>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(location.channelBreakdown).map(([channel, data]) => (
                    <div key={channel} className="flex justify-between text-xs">
                      <span className="text-gray-500 capitalize">{channel}:</span>
                      <span className={`font-normal ${getStatusColor(data.cac)}`}>
                        ₹{data.cac > 0 ? data.cac.toLocaleString('en-IN') : '0'} 
                        ({data.newCustomers} customers)
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
              <li>• Marketing system (spend by channel)</li>
              <li>• CRM (new customer source tracking)</li>
              <li>• Platform analytics (Zomato, Instagram, Google)</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Weekly refresh</li>
              <li>• Campaign-level tracking</li>
              <li>• Alert if CAC &gt;₹400</li>
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
            • By channel (Zomato ads, Instagram, Google, referral)
          </p>
          <p className="text-xs font-normal text-purple-800 dark:text-purple-300">
            • By location comparison
          </p>
          <p className="text-xs font-normal text-purple-800 dark:text-purple-300">
            • By campaign effectiveness
          </p>
        </div>
      </div>

      {/* Users & Access */}
      <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-lg border border-gray-200">
        <h2 className="text-xs font-bold text-black dark:text-white mb-2">
          👥 Authorized Users
        </h2>
        <p className="text-xs font-normal text-gray-500">
          Marketing, Owner
        </p>
      </div>
    </div>
  )
}