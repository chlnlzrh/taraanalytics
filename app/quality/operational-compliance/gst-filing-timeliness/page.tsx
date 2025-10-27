import { RESTAURANTS } from '@/lib/restaurant-data'

export default function GSTFilingTimelinessKPI() {
  // QUA_008 GST Filing Timeliness - Exact specifications from restaurant_kpi_metrics_127.txt
  const gstFilingData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      currentMonthCompliance: 100, // Target: 100%
      onTimeFilings: 3,
      totalFilings: 3,
      status: 'good',
      filingDetails: {
        gstr1: { dueDate: '2024-11-11', filedDate: '2024-11-09', status: 'on-time', daysDiff: -2 },
        gstr2: { dueDate: '2024-11-15', filedDate: '2024-11-13', status: 'on-time', daysDiff: -2 },
        gstr3b: { dueDate: '2024-11-20', filedDate: '2024-11-18', status: 'on-time', daysDiff: -2 }
      },
      penalties: {
        currentMonth: 0,
        thisQuarter: 0,
        totalYear: 0
      },
      complianceHistory: {
        gstr1: [true, true, true, true, true, true], // Last 6 months
        gstr2: [true, true, true, true, true, true],
        gstr3b: [true, true, true, true, true, true]
      },
      gstin: 'GSTIN1234567890',
      monthlyTrend: [100, 100, 100, 100, 100, 100] // Last 6 months - perfect compliance
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      currentMonthCompliance: 100, // Target maintained
      onTimeFilings: 3,
      totalFilings: 3,
      status: 'good',
      filingDetails: {
        gstr1: { dueDate: '2024-11-11', filedDate: '2024-11-10', status: 'on-time', daysDiff: -1 },
        gstr2: { dueDate: '2024-11-15', filedDate: '2024-11-14', status: 'on-time', daysDiff: -1 },
        gstr3b: { dueDate: '2024-11-20', filedDate: '2024-11-19', status: 'on-time', daysDiff: -1 }
      },
      penalties: {
        currentMonth: 0,
        thisQuarter: 1500, // Late filing penalty from previous quarter
        totalYear: 1500
      },
      complianceHistory: {
        gstr1: [true, true, true, true, false, true], // One late filing 2 months ago
        gstr2: [true, true, true, true, true, true],
        gstr3b: [true, true, true, true, true, true]
      },
      gstin: 'GSTIN2345678901',
      monthlyTrend: [100, 100, 100, 100, 67, 100] // Shows recovery from late filing
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      currentMonthCompliance: 67, // Critical: Any late filing is violation
      onTimeFilings: 2,
      totalFilings: 3,
      status: 'critical',
      filingDetails: {
        gstr1: { dueDate: '2024-11-11', filedDate: '2024-11-09', status: 'on-time', daysDiff: -2 },
        gstr2: { dueDate: '2024-11-15', filedDate: '2024-11-17', status: 'late', daysDiff: 2 },
        gstr3b: { dueDate: '2024-11-20', filedDate: '2024-11-19', status: 'on-time', daysDiff: -1 }
      },
      penalties: {
        currentMonth: 2000, // Late filing fee + interest
        thisQuarter: 4500,
        totalYear: 7200
      },
      complianceHistory: {
        gstr1: [true, true, false, true, true, true],
        gstr2: [true, false, true, false, true, false], // Multiple late filings
        gstr3b: [true, true, true, true, true, true]
      },
      gstin: 'GSTIN3456789012',
      monthlyTrend: [100, 67, 67, 67, 100, 67] // Concerning pattern of late filings
    }
  ]

  const chainTotalFilings = gstFilingData.reduce((sum, item) => sum + item.totalFilings, 0)
  const chainOnTimeFilings = gstFilingData.reduce((sum, item) => sum + item.onTimeFilings, 0)
  const chainComplianceRate = (chainOnTimeFilings / chainTotalFilings) * 100
  const chainTotalPenalties = gstFilingData.reduce((sum, item) => sum + item.penalties.currentMonth, 0)
  const criticalLocations = gstFilingData.filter(item => item.currentMonthCompliance < 100).length

  const getStatusColor = (compliance: number) => {
    if (compliance === 100) return 'text-green-600'
    return 'text-red-600'
  }

  const getStatusBg = (compliance: number) => {
    if (compliance === 100) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getStatusIcon = (compliance: number) => {
    if (compliance === 100) return '✅'
    return '🚨'
  }

  const getFilingStatusColor = (status: string) => {
    return status === 'on-time' ? 'text-green-600' : 'text-red-600'
  }

  const getFilingStatusIcon = (status: string) => {
    return status === 'on-time' ? '✅' : '🚨'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            GST Filing Timeliness
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: QUA_008 | Tax Compliance Indicator
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
            <strong>Formula:</strong> (On-time GST returns filed ÷ Total monthly returns) × 100
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Percentage of GST returns filed on-time each month. 100% compliance required.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> Late filings attract penalties and interest; audit risk.
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
            <div className="text-xs font-normal text-green-600">100%</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">100% (any late filing is violation)</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">Any late filing</div>
          </div>
        </div>
      </div>

      {/* Chain Summary */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          📈 Chain GST Compliance Summary
        </h2>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <span className="text-xs font-normal text-gray-500">Chain Compliance Rate</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getStatusColor(chainComplianceRate)}`}>
                {chainComplianceRate.toFixed(1)}%
              </span>
              <span>{getStatusIcon(chainComplianceRate)}</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Total Penalties (Current Month)</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-red-600">
                ₹{chainTotalPenalties.toLocaleString('en-IN')}
              </span>
              <span>{chainTotalPenalties > 0 ? '💸' : '✅'}</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Non-Compliant Locations</span>
            <div className="text-xs font-normal text-red-600">
              {criticalLocations}/3 locations have late filings
            </div>
          </div>
        </div>
      </div>

      {/* Filing Compliance by Location */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏪 GST Filing Status by Location
        </h2>
        <div className="space-y-3">
          {gstFilingData
            .sort((a, b) => b.currentMonthCompliance - a.currentMonthCompliance)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.currentMonthCompliance)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span>{getStatusIcon(location.currentMonthCompliance)}</span>
                </div>
                <div className="text-right">
                  <div className={`text-xs font-bold ${getStatusColor(location.currentMonthCompliance)}`}>
                    {location.currentMonthCompliance.toFixed(0)}%
                  </div>
                  <div className="text-xs font-normal text-gray-500">
                    Compliance rate
                  </div>
                </div>
              </div>
              
              {/* Filing metrics */}
              <div className="grid grid-cols-3 gap-4 mb-3 text-xs">
                <div>
                  <span className="text-gray-500">GSTIN:</span>
                  <div className="font-bold text-black dark:text-white">{location.gstin}</div>
                </div>
                <div>
                  <span className="text-gray-500">On-time Filings:</span>
                  <div className="font-bold text-green-600">{location.onTimeFilings}/{location.totalFilings}</div>
                </div>
                <div>
                  <span className="text-gray-500">Current Month Penalties:</span>
                  <div className="font-bold text-red-600">₹{location.penalties.currentMonth.toLocaleString('en-IN')}</div>
                </div>
              </div>

              {/* Current month filing details */}
              <div className="mt-3">
                <h4 className="text-xs font-bold text-gray-600 mb-2">Current Month Filing Status</h4>
                <div className="space-y-2">
                  {Object.entries(location.filingDetails).map(([returnType, details]) => (
                    <div key={returnType} className="bg-white dark:bg-gray-800 p-2 rounded border border-gray-200">
                      <div className="grid grid-cols-4 gap-2 text-xs">
                        <div>
                          <span className="text-gray-500">Return:</span>
                          <span className="font-bold text-black dark:text-white ml-1">{returnType.toUpperCase()}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Due:</span>
                          <span className="font-normal text-black dark:text-white ml-1">{details.dueDate}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Filed:</span>
                          <span className="font-normal text-black dark:text-white ml-1">{details.filedDate}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className={`font-bold ${getFilingStatusColor(details.status)}`}>
                            {details.status.toUpperCase()}
                          </span>
                          <span>{getFilingStatusIcon(details.status)}</span>
                          <span className={`text-xs ${details.daysDiff < 0 ? 'text-green-600' : 'text-red-600'}`}>
                            ({details.daysDiff > 0 ? '+' : ''}{details.daysDiff}d)
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Penalty breakdown */}
              <div className="mt-3">
                <h4 className="text-xs font-bold text-gray-600 mb-2">Penalty Summary</h4>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-500">This Quarter:</span>
                    <span className="font-normal text-red-600">₹{location.penalties.thisQuarter.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">This Year:</span>
                    <span className="font-normal text-red-600">₹{location.penalties.totalYear.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Status:</span>
                    <span className={`font-bold ${location.penalties.currentMonth === 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {location.penalties.currentMonth === 0 ? 'CLEAN' : 'PENALTIES'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Trend indicator */}
              <div className="mt-3 pt-2 border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-500">6-Month Compliance Trend:</span>
                  <div className="flex gap-1">
                    {location.monthlyTrend.map((value, idx) => (
                      <span key={idx} className={`px-1 rounded text-xs ${value === 100 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
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

      {/* GST Filing Calendar */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          📅 GST Filing Schedule
        </h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200">
            <div className="text-xs font-bold text-blue-700 dark:text-blue-300">GSTR-1</div>
            <div className="text-xs font-normal text-blue-600">Due: 11th of next month</div>
            <div className="text-xs font-normal text-blue-600">Monthly sales returns</div>
          </div>
          <div className="text-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded border border-purple-200">
            <div className="text-xs font-bold text-purple-700 dark:text-purple-300">GSTR-2</div>
            <div className="text-xs font-normal text-purple-600">Due: 15th of next month</div>
            <div className="text-xs font-normal text-purple-600">Monthly purchase returns</div>
          </div>
          <div className="text-center p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded border border-indigo-200">
            <div className="text-xs font-bold text-indigo-700 dark:text-indigo-300">GSTR-3B</div>
            <div className="text-xs font-normal text-indigo-600">Due: 20th of next month</div>
            <div className="text-xs font-normal text-indigo-600">Monthly tax payment</div>
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
              <li>• GST portal (GSTR-1 submission dates)</li>
              <li>• Accounting system</li>
              <li>• Compliance tracking system</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Monthly (after filing deadline: 11th of next month)</li>
              <li>• Alert: Red if any return late</li>
              <li>• Drill down: by location, by return type (GSTR-1/GSTR-2/GSTR-3B)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* India-Specific Considerations */}
      <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200">
        <h2 className="text-xs font-bold text-orange-900 dark:text-orange-300 mb-2">
          🇮🇳 India-Specific Compliance Requirements
        </h2>
        <div className="space-y-1">
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • GST mandatory; file GSTR-1 by 11th; GSTR-2 by 15th; GSTR-3B by 20th of next month
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Late filing penalties: ₹50 per day for GSTR-1 and GSTR-3B; interest charges apply
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Non-compliance affects Input Tax Credit (ITC) claims and vendor payments
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Regular audits by GST department - maintain complete documentation
          </p>
        </div>
      </div>

      {/* Users & Access */}
      <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-lg border border-gray-200">
        <h2 className="text-xs font-bold text-black dark:text-white mb-2">
          👥 Authorized Users
        </h2>
        <p className="text-xs font-normal text-gray-500">
          Finance, Compliance
        </p>
      </div>
    </div>
  )
}