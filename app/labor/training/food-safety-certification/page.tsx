import { RESTAURANTS } from '@/lib/restaurant-data'

export default function FoodSafetyCertificationKPI() {
  // LAB_012 Food Safety Certification Rate - Exact specifications from restaurant_kpi_metrics_127.txt
  const certificationData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      totalKitchenStaff: 12, // Kitchen staff only
      certifiedStaff: 12, // All certified
      certificationRate: 100.0, // (12/12) × 100
      fssaiCertified: 12,
      basicFoodSafety: 12,
      advancedCertification: 8, // Some have advanced
      expiringIn30Days: 2, // Need renewal soon
      expiringIn90Days: 4,
      averageCertificateAge: 8, // months
      status: 'excellent' // 100% target
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      totalKitchenStaff: 10,
      certifiedStaff: 9,
      certificationRate: 90.0,
      fssaiCertified: 9,
      basicFoodSafety: 9,
      advancedCertification: 5,
      expiringIn30Days: 1,
      expiringIn90Days: 3,
      averageCertificateAge: 11,
      status: 'warning' // 90-100% warning
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      totalKitchenStaff: 14,
      certifiedStaff: 11,
      certificationRate: 78.6, // Below compliance
      fssaiCertified: 11,
      basicFoodSafety: 11,
      advancedCertification: 4,
      expiringIn30Days: 3,
      expiringIn90Days: 5,
      averageCertificateAge: 14, // Old certificates
      status: 'critical' // <90% critical
    }
  ]

  const chainAverage = certificationData.reduce((sum, item) => sum + item.certificationRate, 0) / certificationData.length

  const getStatusColor = (certificationRate: number) => {
    if (certificationRate === 100) return 'text-green-600'
    if (certificationRate >= 90) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (certificationRate: number) => {
    if (certificationRate === 100) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (certificationRate >= 90) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getStatusIcon = (certificationRate: number) => {
    if (certificationRate === 100) return '✅'
    if (certificationRate >= 90) return '⚠️'
    return '🚨'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Food Safety Certification Rate Analysis
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: LAB_012 | FSSAI Requirement; 100% Target for All Kitchen Staff
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
            <strong>Formula:</strong> (Kitchen staff with FSSAI or equivalent certification ÷ Total kitchen staff) × 100
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Percentage of kitchen staff with food safety certification. India-specific compliance metric.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> FSSAI requirement; 100% target for all kitchen staff.
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
            <div className="text-xs font-normal text-yellow-600">90–100%</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&lt;90%</div>
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
            <span className="text-xs font-normal text-gray-500">Chain Average Certification</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getStatusColor(chainAverage)}`}>
                {chainAverage.toFixed(1)}%
              </span>
              <span>{getStatusIcon(chainAverage)}</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Compliance Status</span>
            <div className="text-xs font-normal text-red-600">
              🚨 One location non-compliant; regulatory risk
            </div>
          </div>
        </div>
      </div>

      {/* Location Ranking & Heatmap */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Ranking by Food Safety Certification Rate
        </h2>
        <div className="space-y-3">
          {certificationData
            .sort((a, b) => b.certificationRate - a.certificationRate)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.certificationRate)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span>{getStatusIcon(location.certificationRate)}</span>
                </div>
                <span className={`text-xs font-bold ${getStatusColor(location.certificationRate)}`}>
                  {location.certificationRate.toFixed(1)}%
                </span>
              </div>
              
              {/* Certification Details */}
              <div className="grid grid-cols-5 gap-4 text-xs mb-2">
                <div>
                  <span className="text-gray-500">FSSAI Certified:</span>
                  <div className="font-normal text-black dark:text-white">{location.fssaiCertified}/{location.totalKitchenStaff}</div>
                </div>
                <div>
                  <span className="text-gray-500">Basic Safety:</span>
                  <div className="font-normal text-black dark:text-white">{location.basicFoodSafety}</div>
                </div>
                <div>
                  <span className="text-gray-500">Advanced Cert:</span>
                  <div className="font-normal text-black dark:text-white">{location.advancedCertification}</div>
                </div>
                <div>
                  <span className="text-gray-500">Expiring 30d:</span>
                  <div className={`font-normal ${location.expiringIn30Days > 0 ? 'text-red-600' : 'text-black dark:text-white'}`}>
                    {location.expiringIn30Days}
                  </div>
                </div>
                <div>
                  <span className="text-gray-500">Avg Age:</span>
                  <div className="font-normal text-black dark:text-white">{location.averageCertificateAge}m</div>
                </div>
              </div>

              {/* Expiry Alert */}
              {location.expiringIn30Days > 0 && (
                <div className="mt-2 p-2 bg-red-100 dark:bg-red-900/30 rounded border border-red-300">
                  <div className="text-xs font-normal text-red-800 dark:text-red-300">
                    🚨 {location.expiringIn30Days} certification(s) expiring within 30 days - renewal required
                  </div>
                </div>
              )}
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
              <li>• HRIS (certification tracking)</li>
              <li>• FSSAI registration database</li>
              <li>• Compliance management system</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Monthly refresh</li>
              <li>• Red alert if &lt;90%</li>
              <li>• Drill down by location, staff, certification type</li>
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
            • Mandatory for food handling; track expiry dates; renew quarterly or annually
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • State-specific requirements may vary; ensure local compliance
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • FSSAI inspector visits may require immediate certification proof
          </p>
        </div>
      </div>

      {/* Users & Access */}
      <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-lg border border-gray-200">
        <h2 className="text-xs font-bold text-black dark:text-white mb-2">
          👥 Authorized Users
        </h2>
        <p className="text-xs font-normal text-gray-500">
          Manager, HR, Compliance
        </p>
      </div>
    </div>
  )
}