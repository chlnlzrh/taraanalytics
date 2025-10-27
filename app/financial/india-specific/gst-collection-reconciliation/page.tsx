import { RESTAURANTS } from '@/lib/restaurant-data'

export default function GSTCollectionReconciliationKPI() {
  // FIN_010 GST Collection & Reconciliation Rate % - Exact specifications from restaurant_kpi_metrics_127.txt
  const gstData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      totalSales: 485000,
      gst5Sales: 145500, // 30% - basic food items
      gst18Sales: 339500, // 70% - AC restaurant service
      gstCollected: {
        gst5: 7275, // 5% of gst5Sales
        gst18: 61110 // 18% of gst18Sales
      },
      totalGSTCollected: 68385,
      gstLiability: 68385, // Should match collected
      reconciliationRate: 100.0, // Perfect compliance
      status: 'excellent',
      filingStatus: {
        gstr1: 'Filed',
        gstr3b: 'Filed',
        lastFilingDate: '2024-10-11'
      }
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      totalSales: 395000,
      gst5Sales: 118500, // 30%
      gst18Sales: 276500, // 70%
      gstCollected: {
        gst5: 5925,
        gst18: 49770
      },
      totalGSTCollected: 55695,
      gstLiability: 55695,
      reconciliationRate: 100.0,
      status: 'excellent',
      filingStatus: {
        gstr1: 'Filed',
        gstr3b: 'Filed',
        lastFilingDate: '2024-10-11'
      }
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      totalSales: 365000,
      gst5Sales: 109500, // 30%
      gst18Sales: 255500, // 70%
      gstCollected: {
        gst5: 5475,
        gst18: 45990
      },
      totalGSTCollected: 51465,
      gstLiability: 52465, // ₹1000 shortfall
      reconciliationRate: 98.1, // Warning range
      status: 'warning',
      filingStatus: {
        gstr1: 'Filed',
        gstr3b: 'Pending',
        lastFilingDate: '2024-10-09'
      }
    }
  ]

  const chainTotalSales = gstData.reduce((sum, item) => sum + item.totalSales, 0)
  const chainTotalGSTCollected = gstData.reduce((sum, item) => sum + item.totalGSTCollected, 0)
  const chainTotalGSTLiability = gstData.reduce((sum, item) => sum + item.gstLiability, 0)
  const chainReconciliationRate = (chainTotalGSTCollected / chainTotalGSTLiability) * 100
  const compliantLocations = gstData.filter(item => item.reconciliationRate >= 98).length

  const getStatusColor = (rate: number) => {
    if (rate >= 100) return 'text-green-600'
    if (rate >= 98) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (rate: number) => {
    if (rate >= 100) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (rate >= 98) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getStatusIcon = (rate: number) => {
    if (rate >= 100) return '🟢'
    if (rate >= 98) return '⚠️'
    return '🚨'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            GST Collection & Reconciliation Rate %
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: FIN_010 | Compliance & Audit Readiness Indicator
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
            <strong>Formula:</strong> (GST Collected ÷ GST Liability) × 100
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Percentage of GST collected vs. calculated liability. Compliance and audit readiness indicator.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> 100% compliance required; shortfalls attract penalties and interest. Critical for audit readiness.
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
            <div className="text-xs font-normal text-yellow-600">98–100%</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&lt;98%</div>
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
            <span className="text-xs font-normal text-gray-500">Chain Reconciliation Rate</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getStatusColor(chainReconciliationRate)}`}>
                {chainReconciliationRate.toFixed(1)}%
              </span>
              <span>{getStatusIcon(chainReconciliationRate)}</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Total GST Liability</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-black dark:text-white">
                ₹{chainTotalGSTLiability.toLocaleString('en-IN')}
              </span>
              <span>💼</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Compliant Locations</span>
            <div className="text-xs font-normal text-green-600">
              {compliantLocations}/3 locations ≥98%
            </div>
          </div>
        </div>
      </div>

      {/* Location GST Performance */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location GST Compliance Ranking
        </h2>
        <div className="space-y-3">
          {gstData
            .sort((a, b) => b.reconciliationRate - a.reconciliationRate)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.reconciliationRate)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span>{getStatusIcon(location.reconciliationRate)}</span>
                </div>
                <div className="text-right">
                  <div className={`text-xs font-bold ${getStatusColor(location.reconciliationRate)}`}>
                    {location.reconciliationRate.toFixed(1)}%
                  </div>
                  <div className="text-xs font-normal text-gray-500">
                    Reconciliation Rate
                  </div>
                </div>
              </div>
              
              {/* GST breakdown */}
              <div className="grid grid-cols-3 gap-4 mb-3 text-xs">
                <div>
                  <span className="text-gray-500">Total Sales:</span>
                  <div className="font-normal text-black dark:text-white">₹{location.totalSales.toLocaleString('en-IN')}</div>
                </div>
                <div>
                  <span className="text-gray-500">GST Collected:</span>
                  <div className="font-normal text-black dark:text-white">₹{location.totalGSTCollected.toLocaleString('en-IN')}</div>
                </div>
                <div>
                  <span className="text-gray-500">GST Liability:</span>
                  <div className="font-normal text-black dark:text-white">₹{location.gstLiability.toLocaleString('en-IN')}</div>
                </div>
              </div>

              {/* GST Category breakdown */}
              <div className="grid grid-cols-2 gap-4 mt-3">
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-2">GST 5% Category</h4>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Sales:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.gst5Sales.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">GST Collected:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.gstCollected.gst5.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-2">GST 18% Category</h4>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Sales:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.gst18Sales.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">GST Collected:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.gstCollected.gst18.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Filing status */}
              <div className="mt-3 pt-2 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-xs font-bold text-gray-600 mb-1">Filing Status</h4>
                <div className="grid grid-cols-3 gap-4 text-xs">
                  <div>
                    <span className="text-gray-500">GSTR-1:</span>
                    <span className={`ml-1 font-normal ${location.filingStatus.gstr1 === 'Filed' ? 'text-green-600' : 'text-red-600'}`}>
                      {location.filingStatus.gstr1}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500">GSTR-3B:</span>
                    <span className={`ml-1 font-normal ${location.filingStatus.gstr3b === 'Filed' ? 'text-green-600' : 'text-red-600'}`}>
                      {location.filingStatus.gstr3b}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500">Last Filed:</span>
                    <span className="ml-1 font-normal text-black dark:text-white">{location.filingStatus.lastFilingDate}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* GST Reconciliation Report */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          📋 Chain GST Reconciliation Report
        </h2>
        <div className="space-y-2">
          <div className="grid grid-cols-4 gap-4 text-xs font-bold bg-gray-100 dark:bg-gray-800 p-2 rounded">
            <div>Location</div>
            <div>Collected</div>
            <div>Liability</div>
            <div>Variance</div>
          </div>
          {gstData.map((location) => {
            const variance = location.totalGSTCollected - location.gstLiability
            return (
              <div key={location.restaurant.id} className="grid grid-cols-4 gap-4 text-xs p-2 bg-gray-50 dark:bg-gray-800/50 rounded">
                <div className="font-normal text-black dark:text-white">{location.restaurant.shortName}</div>
                <div className="font-normal text-black dark:text-white">₹{location.totalGSTCollected.toLocaleString('en-IN')}</div>
                <div className="font-normal text-black dark:text-white">₹{location.gstLiability.toLocaleString('en-IN')}</div>
                <div className={`font-normal ${variance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {variance >= 0 ? '+' : ''}₹{variance.toLocaleString('en-IN')}
                </div>
              </div>
            )
          })}
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
              <li>• PetPooja POS (sales by GST category)</li>
              <li>• Accounting system (GST liability calculation)</li>
              <li>• GST portal filing records</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Monthly (before GST filing)</li>
              <li>• Alert: Red if &lt;98%</li>
              <li>• Drill down: by GST category, by location, by month</li>
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
            • Mandatory for GST compliance; file GSTR-1 by 11th of next month
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Reconcile GSTR-2 with vendor invoices for input tax credits
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Monitor for rate changes and category reclassifications
          </p>
        </div>
      </div>

      {/* Users & Access */}
      <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-lg border border-gray-200">
        <h2 className="text-xs font-bold text-black dark:text-white mb-2">
          👥 Authorized Users
        </h2>
        <p className="text-xs font-normal text-gray-500">
          Finance, Owner
        </p>
      </div>
    </div>
  )
}