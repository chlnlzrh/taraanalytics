import { RESTAURANTS } from '@/lib/restaurant-data'

export default function ExpiryDateViolationsKPI() {
  // QUA_007 Expiry Date Violations - Exact specifications from restaurant_kpi_metrics_127.txt
  const expiryViolationsData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      currentMonthViolations: 0, // Target: 0 violations
      lastMonthViolations: 1,
      violationsThisQuarter: 2,
      status: 'good', // 0 violations - meets target
      violationDetails: [
        {
          date: '2024-09-15',
          item: 'Milk packets',
          daysExpired: 2,
          storageArea: 'Walk-in cooler',
          quantity: '3 packets',
          rootCause: 'FEFO not followed during busy lunch rush',
          actionTaken: 'Staff retraining on FEFO protocol'
        }
      ],
      preventiveMeasures: [
        'Daily temperature checks implemented',
        'FEFO training completed for all staff',
        'Digital inventory tracking with expiry alerts'
      ],
      storageAreaCheck: {
        dryCourt: { violations: 0, lastCheck: '2024-10-26' },
        walkInCooler: { violations: 0, lastCheck: '2024-10-26' },
        freezer: { violations: 0, lastCheck: '2024-10-26' },
        pantry: { violations: 0, lastCheck: '2024-10-26' }
      },
      monthlyTrend: [3, 2, 1, 1, 0, 0] // Last 6 months showing improvement
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      currentMonthViolations: 2, // Warning range: 1-2 violations
      lastMonthViolations: 1,
      violationsThisQuarter: 4,
      status: 'warning',
      violationDetails: [
        {
          date: '2024-10-20',
          item: 'Cheese blocks',
          daysExpired: 1,
          storageArea: 'Walk-in cooler',
          quantity: '2 blocks',
          rootCause: 'Power outage affected temperature monitoring',
          actionTaken: 'Backup power system checked, temperature logs reviewed'
        },
        {
          date: '2024-10-18',
          item: 'Yogurt cups',
          daysExpired: 3,
          storageArea: 'Refrigerator',
          quantity: '5 cups',
          rootCause: 'Stock rotation not followed during weekend shift',
          actionTaken: 'Weekend staff additional training scheduled'
        }
      ],
      preventiveMeasures: [
        'Enhanced backup power monitoring',
        'Weekend shift supervision increased',
        'Additional temperature alarms installed'
      ],
      storageAreaCheck: {
        dryCourt: { violations: 0, lastCheck: '2024-10-26' },
        walkInCooler: { violations: 1, lastCheck: '2024-10-26' },
        freezer: { violations: 0, lastCheck: '2024-10-26' },
        pantry: { violations: 1, lastCheck: '2024-10-26' }
      },
      monthlyTrend: [4, 3, 2, 1, 1, 2]
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      currentMonthViolations: 3, // Critical: >2 violations/month
      lastMonthViolations: 2,
      violationsThisQuarter: 8,
      status: 'critical',
      violationDetails: [
        {
          date: '2024-10-25',
          item: 'Fresh vegetables',
          daysExpired: 1,
          storageArea: 'Dry court',
          quantity: '2kg onions',
          rootCause: 'Delivery inspection missed expired items',
          actionTaken: 'Vendor delivery inspection protocol revised'
        },
        {
          date: '2024-10-22',
          item: 'Bread rolls',
          daysExpired: 2,
          storageArea: 'Pantry',
          quantity: '20 pieces',
          rootCause: 'FEFO not maintained during prep',
          actionTaken: 'Kitchen staff FEFO refresher training mandatory'
        },
        {
          date: '2024-10-19',
          item: 'Cream sauce',
          daysExpired: 1,
          storageArea: 'Walk-in cooler',
          quantity: '1 container',
          rootCause: 'Monsoon humidity affected storage conditions',
          actionTaken: 'Dehumidifier installed, storage protocol updated'
        }
      ],
      preventiveMeasures: [
        'Daily manager-led inventory checks',
        'Vendor delivery inspection enhanced',
        'Monsoon-specific storage protocols',
        'Digital expiry tracking system implemented'
      ],
      storageAreaCheck: {
        dryCourt: { violations: 1, lastCheck: '2024-10-26' },
        walkInCooler: { violations: 1, lastCheck: '2024-10-26' },
        freezer: { violations: 0, lastCheck: '2024-10-26' },
        pantry: { violations: 1, lastCheck: '2024-10-26' }
      },
      monthlyTrend: [5, 4, 3, 2, 2, 3] // Concerning upward trend
    }
  ]

  const chainTotalViolations = expiryViolationsData.reduce((sum, item) => sum + item.currentMonthViolations, 0)
  const criticalLocations = expiryViolationsData.filter(item => item.currentMonthViolations > 2).length
  const warningLocations = expiryViolationsData.filter(item => item.currentMonthViolations >= 1 && item.currentMonthViolations <= 2).length

  const getStatusColor = (violations: number) => {
    if (violations === 0) return 'text-green-600'
    if (violations <= 2) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (violations: number) => {
    if (violations === 0) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (violations <= 2) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getStatusIcon = (violations: number) => {
    if (violations === 0) return '✅'
    if (violations <= 2) return '⚠️'
    return '🚨'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Expiry Date Violations
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: QUA_007 | Food Safety Process Indicator
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
            <strong>Formula:</strong> Number of expired items found during inventory checks or audits
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Discovery of expired food during routine checks. Should be zero.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> Any instances indicate receiving, storage, or FEFO process failure.
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
            <div className="text-xs font-normal text-green-600">0 violations</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">1–2 violations/month</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">>2 violations/month</div>
          </div>
        </div>
      </div>

      {/* Chain Summary */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          📈 Chain Food Safety Summary
        </h2>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <span className="text-xs font-normal text-gray-500">Total Chain Violations</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getStatusColor(chainTotalViolations)}`}>
                {chainTotalViolations} violations
              </span>
              <span>{getStatusIcon(chainTotalViolations)}</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Critical Locations</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-red-600">
                {criticalLocations}/3 locations
              </span>
              <span>{criticalLocations > 0 ? '🚨' : '✅'}</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Warning Locations</span>
            <div className="text-xs font-normal text-yellow-600">
              {warningLocations}/3 locations need attention
            </div>
          </div>
        </div>
      </div>

      {/* Location Analysis */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏪 Location Violation Analysis
        </h2>
        <div className="space-y-3">
          {expiryViolationsData
            .sort((a, b) => a.currentMonthViolations - b.currentMonthViolations)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.currentMonthViolations)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span>{getStatusIcon(location.currentMonthViolations)}</span>
                </div>
                <div className="text-right">
                  <div className={`text-xs font-bold ${getStatusColor(location.currentMonthViolations)}`}>
                    {location.currentMonthViolations} violations
                  </div>
                  <div className="text-xs font-normal text-gray-500">
                    Current month
                  </div>
                </div>
              </div>
              
              {/* Violation metrics */}
              <div className="grid grid-cols-3 gap-4 mb-3 text-xs">
                <div>
                  <span className="text-gray-500">Last Month:</span>
                  <div className="font-bold text-black dark:text-white">{location.lastMonthViolations} violations</div>
                </div>
                <div>
                  <span className="text-gray-500">This Quarter:</span>
                  <div className="font-bold text-orange-600">{location.violationsThisQuarter} violations</div>
                </div>
                <div>
                  <span className="text-gray-500">Status:</span>
                  <div className={`font-bold ${getStatusColor(location.currentMonthViolations)}`}>
                    {location.status.toUpperCase()}
                  </div>
                </div>
              </div>

              {/* Recent violations */}
              {location.violationDetails.length > 0 && (
                <div className="mt-3">
                  <h4 className="text-xs font-bold text-gray-600 mb-2">Recent Violations</h4>
                  <div className="space-y-2">
                    {location.violationDetails.slice(0, 2).map((violation, idx) => (
                      <div key={idx} className="bg-white dark:bg-gray-800 p-2 rounded border border-gray-200">
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div>
                            <span className="text-gray-500">Date:</span>
                            <span className="font-normal text-black dark:text-white ml-1">{violation.date}</span>
                          </div>
                          <div>
                            <span className="text-gray-500">Item:</span>
                            <span className="font-normal text-black dark:text-white ml-1">{violation.item}</span>
                          </div>
                          <div>
                            <span className="text-gray-500">Days Expired:</span>
                            <span className="font-normal text-red-600 ml-1">{violation.daysExpired} days</span>
                          </div>
                          <div>
                            <span className="text-gray-500">Location:</span>
                            <span className="font-normal text-black dark:text-white ml-1">{violation.storageArea}</span>
                          </div>
                        </div>
                        <div className="mt-1 text-xs">
                          <span className="text-gray-500">Root Cause:</span>
                          <span className="font-normal text-orange-600 ml-1">{violation.rootCause}</span>
                        </div>
                        <div className="mt-1 text-xs">
                          <span className="text-gray-500">Action:</span>
                          <span className="font-normal text-green-600 ml-1">{violation.actionTaken}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Storage area breakdown */}
              <div className="mt-3">
                <h4 className="text-xs font-bold text-gray-600 mb-2">Storage Area Status</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {Object.entries(location.storageAreaCheck).map(([area, status]) => (
                    <div key={area} className="flex justify-between">
                      <span className="text-gray-500 capitalize">{area.replace(/([A-Z])/g, ' $1').trim()}:</span>
                      <span className={`font-normal ${status.violations === 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {status.violations} violations
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trend indicator */}
              <div className="mt-3 pt-2 border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-500">6-Month Trend:</span>
                  <div className="flex gap-1">
                    {location.monthlyTrend.map((value, idx) => (
                      <span key={idx} className={`px-1 rounded text-xs ${value > 2 ? 'bg-red-100 text-red-600' : value > 0 ? 'bg-yellow-100 text-yellow-600' : 'bg-green-100 text-green-600'}`}>
                        {value}
                      </span>
                    ))}
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
              <li>• Inventory check notes</li>
              <li>• FEFO log</li>
              <li>• Audit reports</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Daily/weekly during counts</li>
              <li>• Alert: Red if >2 violations/month</li>
              <li>• Drill down: by item, by storage area, by days expired</li>
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
            • Critical in monsoon when spoilage risk high; check cold storage daily
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • High temperature and humidity accelerate expiry - enhanced FEFO discipline required
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Power outages common - backup temperature monitoring essential
          </p>
        </div>
      </div>

      {/* Users & Access */}
      <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-lg border border-gray-200">
        <h2 className="text-xs font-bold text-black dark:text-white mb-2">
          👥 Authorized Users
        </h2>
        <p className="text-xs font-normal text-gray-500">
          Manager
        </p>
      </div>
    </div>
  )
}