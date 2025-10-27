import { RESTAURANTS } from '@/lib/restaurant-data'

export default function FSSAIComplianceKPI() {
  // QUA_001 FSSAI Compliance Score - Exact specifications from restaurant_kpi_metrics_127.txt
  const fssaiData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      fssaiScore: 97,
      inspectionDate: '2024-09-15',
      licenseNumber: 'DL121FS2021048567',
      licenseExpiry: '2025-08-31',
      violations: [],
      criticalViolations: 0,
      minorViolations: 1,
      status: 'excellent',
      nextInspection: '2025-09-15',
      auditorName: 'Dr. Priya Sharma',
      inspectorId: 'FSSAI_DEL_1205'
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      fssaiScore: 94,
      inspectionDate: '2024-08-20',
      licenseNumber: 'HR033FS2021056789',
      licenseExpiry: '2025-07-31',
      violations: [
        {
          type: 'minor',
          description: 'Temperature log incomplete for 2 days',
          correctionDate: '2024-08-25'
        }
      ],
      criticalViolations: 0,
      minorViolations: 2,
      status: 'warning',
      nextInspection: '2025-08-20',
      auditorName: 'Mr. Rajesh Kumar',
      inspectorId: 'FSSAI_GUR_0892'
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      fssaiScore: 96,
      inspectionDate: '2024-10-05',
      licenseNumber: 'DL122FS2021067890',
      licenseExpiry: '2025-09-30',
      violations: [],
      criticalViolations: 0,
      minorViolations: 1,
      status: 'excellent',
      nextInspection: '2025-10-05',
      auditorName: 'Dr. Sunita Verma',
      inspectorId: 'FSSAI_DEL_1034'
    }
  ]

  const chainAverageScore = fssaiData.reduce((sum, item) => sum + item.fssaiScore, 0) / fssaiData.length
  const compliantLocations = fssaiData.filter(item => item.fssaiScore >= 95).length
  const totalViolations = fssaiData.reduce((sum, item) => sum + item.minorViolations + item.criticalViolations, 0)
  const activeLicenses = fssaiData.filter(item => new Date(item.licenseExpiry) > new Date()).length

  const getStatusColor = (score: number) => {
    if (score >= 95) return 'text-green-600'
    if (score >= 90) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (score: number) => {
    if (score >= 95) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (score >= 90) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getStatusIcon = (score: number) => {
    if (score >= 95) return '🟢'
    if (score >= 90) return '⚠️'
    return '🚨'
  }

  const getDaysUntilExpiry = (expiryDate: string) => {
    const expiry = new Date(expiryDate)
    const today = new Date()
    const diffTime = expiry.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            FSSAI Compliance Score
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: QUA_001 | Critical Food Safety Regulatory Compliance
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
            <strong>Formula:</strong> Latest FSSAI inspection score (0–100 scale)
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Official regulatory food safety inspection score. Target &gt;95/100.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> One critical violation damages brand irreparably; mandatory compliance for operations.
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
            <div className="text-xs font-normal text-green-600">&gt;95/100</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">90–95</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&lt;90 or critical violations</div>
          </div>
        </div>
      </div>

      {/* Chain Summary */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          📈 Chain FSSAI Compliance Summary
        </h2>
        <div className="grid grid-cols-4 gap-6">
          <div>
            <span className="text-xs font-normal text-gray-500">Chain Average Score</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getStatusColor(chainAverageScore)}`}>
                {chainAverageScore.toFixed(1)}/100
              </span>
              <span>{getStatusIcon(chainAverageScore)}</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Compliant Locations</span>
            <div className="text-xs font-normal text-green-600">
              {compliantLocations}/3 locations ≥95
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Active Licenses</span>
            <div className="text-xs font-normal text-blue-600">
              {activeLicenses}/3 valid licenses
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Total Violations</span>
            <div className="text-xs font-normal text-orange-600">
              {totalViolations} violations (YTD)
            </div>
          </div>
        </div>
      </div>

      {/* Location FSSAI Performance */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location FSSAI Compliance Ranking
        </h2>
        <div className="space-y-3">
          {fssaiData
            .sort((a, b) => b.fssaiScore - a.fssaiScore)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.fssaiScore)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span>{getStatusIcon(location.fssaiScore)}</span>
                </div>
                <div className="text-right">
                  <div className={`text-xs font-bold ${getStatusColor(location.fssaiScore)}`}>
                    {location.fssaiScore}/100
                  </div>
                  <div className="text-xs font-normal text-gray-500">
                    FSSAI Score
                  </div>
                </div>
              </div>
              
              {/* License details */}
              <div className="grid grid-cols-2 gap-4 mb-3">
                <div>
                  <span className="text-xs text-gray-500">License Number:</span>
                  <div className="text-xs font-normal text-black dark:text-white">{location.licenseNumber}</div>
                </div>
                <div>
                  <span className="text-xs text-gray-500">License Expiry:</span>
                  <div className={`text-xs font-normal ${getDaysUntilExpiry(location.licenseExpiry) > 90 ? 'text-green-600' : getDaysUntilExpiry(location.licenseExpiry) > 30 ? 'text-yellow-600' : 'text-red-600'}`}>
                    {location.licenseExpiry} ({getDaysUntilExpiry(location.licenseExpiry)} days)
                  </div>
                </div>
              </div>

              {/* Inspection details */}
              <div className="grid grid-cols-3 gap-4 mb-3 text-xs">
                <div>
                  <span className="text-gray-500">Last Inspection:</span>
                  <div className="font-normal text-black dark:text-white">{location.inspectionDate}</div>
                </div>
                <div>
                  <span className="text-gray-500">Inspector:</span>
                  <div className="font-normal text-black dark:text-white">{location.auditorName}</div>
                </div>
                <div>
                  <span className="text-gray-500">Next Inspection:</span>
                  <div className="font-normal text-black dark:text-white">{location.nextInspection}</div>
                </div>
              </div>

              {/* Violations breakdown */}
              <div className="grid grid-cols-2 gap-4 mt-3">
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-2">Violations Summary</h4>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Critical:</span>
                      <span className={`font-normal ${location.criticalViolations === 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {location.criticalViolations}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Minor:</span>
                      <span className={`font-normal ${location.minorViolations <= 1 ? 'text-yellow-600' : 'text-red-600'}`}>
                        {location.minorViolations}
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-2">Inspector Details</h4>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-500">ID:</span>
                      <span className="font-normal text-black dark:text-white">{location.inspectorId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Status:</span>
                      <span className={`font-normal ${location.status === 'excellent' ? 'text-green-600' : 'text-yellow-600'}`}>
                        {location.status.charAt(0).toUpperCase() + location.status.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Violations list if any */}
              {location.violations.length > 0 && (
                <div className="mt-3 pt-2 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="text-xs font-bold text-gray-600 mb-1">Outstanding Violations</h4>
                  <div className="space-y-1">
                    {location.violations.map((violation, idx) => (
                      <div key={idx} className="text-xs">
                        <span className={`inline-block w-16 ${violation.type === 'critical' ? 'text-red-600' : 'text-yellow-600'}`}>
                          {violation.type.toUpperCase()}:
                        </span>
                        <span className="text-gray-600">{violation.description}</span>
                        {violation.correctionDate && (
                          <span className="text-green-600 ml-2">(Corrected: {violation.correctionDate})</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* License Expiry Alert */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          📋 FSSAI License Tracking
        </h2>
        <div className="space-y-2">
          <div className="grid grid-cols-4 gap-4 text-xs font-bold bg-gray-100 dark:bg-gray-800 p-2 rounded">
            <div>Location</div>
            <div>License Number</div>
            <div>Expiry Date</div>
            <div>Days Until Expiry</div>
          </div>
          {fssaiData.map((location) => {
            const daysLeft = getDaysUntilExpiry(location.licenseExpiry)
            return (
              <div key={location.restaurant.id} className="grid grid-cols-4 gap-4 text-xs p-2 bg-gray-50 dark:bg-gray-800/50 rounded">
                <div className="font-normal text-black dark:text-white">{location.restaurant.shortName}</div>
                <div className="font-normal text-black dark:text-white">{location.licenseNumber}</div>
                <div className="font-normal text-black dark:text-white">{location.licenseExpiry}</div>
                <div className={`font-normal ${daysLeft > 90 ? 'text-green-600' : daysLeft > 30 ? 'text-yellow-600' : 'text-red-600'}`}>
                  {daysLeft} days
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
              <li>• FSSAI inspection report (local food board)</li>
              <li>• License tracking system</li>
              <li>• Compliance management system</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Post-inspection (typically annual; varies by state)</li>
              <li>• Alert: Red if &lt;90 or critical violations</li>
              <li>• Drill down: by violation category, by location, by action items status</li>
            </ul>
          </div>
        </div>
      </div>

      {/* India-Specific Considerations */}
      <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200">
        <h2 className="text-xs font-bold text-orange-900 dark:text-orange-300 mb-2">
          🇮🇳 India-Specific Compliance
        </h2>
        <div className="space-y-1">
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • FSSAI license mandatory for all food business operations in India
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Annual renewal required; fines and penalties for non-compliance
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • State-wise variations in inspection frequency and requirements
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Critical violations can lead to license suspension or business closure
          </p>
        </div>
      </div>

      {/* Users & Access */}
      <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-lg border border-gray-200">
        <h2 className="text-xs font-bold text-black dark:text-white mb-2">
          👥 Authorized Users
        </h2>
        <p className="text-xs font-normal text-gray-500">
          Manager, Owner, Compliance
        </p>
      </div>
    </div>
  )
}