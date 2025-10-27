import { RESTAURANTS } from '@/lib/restaurant-data'

export default function HygieneAuditScoreKPI() {
  // QUA_005 Hygiene Audit Score (requested as QUA_003 Kitchen Hygiene Score) - Exact specifications from restaurant_kpi_metrics_127.txt
  const hygieneData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      overallScore: 92,
      auditDate: '2024-09-20',
      auditQuarter: 'Q3 2024',
      auditType: 'Third-party',
      auditorCompany: 'SafeFood India Pvt Ltd',
      auditorName: 'Dr. Meera Jain',
      certificationNumber: 'SFI-DEL-2024-089',
      areas: {
        kitchen: 91,
        storage: 93,
        dining: 93,
        restrooms: 90
      },
      violations: [
        {
          area: 'kitchen',
          type: 'minor',
          description: 'Floor cleaning checklist missed for 1 day',
          severity: 'low',
          correctionDate: '2024-09-22'
        }
      ],
      criticalViolations: 0,
      minorViolations: 1,
      status: 'excellent',
      nextAuditDue: '2024-12-20',
      trend: 'improving', // compared to last quarter (89)
      lastQuarterScore: 89,
      improvementActions: [
        'Implemented daily floor cleaning verification',
        'Updated restroom cleaning schedule'
      ],
      fssaiCredibility: 'High - recognized by FSSAI',
      cost: 8500
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      overallScore: 87,
      auditDate: '2024-09-15',
      auditQuarter: 'Q3 2024',
      auditType: 'Third-party',
      auditorCompany: 'HygienePro Audits',
      auditorName: 'Mr. Ashok Sharma',
      certificationNumber: 'HPA-GUR-2024-067',
      areas: {
        kitchen: 85,
        storage: 88,
        dining: 89,
        restrooms: 86
      },
      violations: [
        {
          area: 'kitchen',
          type: 'minor',
          description: 'Exhaust fan cleaning overdue by 3 days',
          severity: 'medium',
          correctionDate: '2024-09-18'
        },
        {
          area: 'storage',
          type: 'minor',
          description: 'Pest control log incomplete',
          severity: 'low',
          correctionDate: '2024-09-17'
        }
      ],
      criticalViolations: 0,
      minorViolations: 2,
      status: 'warning',
      nextAuditDue: '2024-12-15',
      trend: 'stable', // compared to last quarter (86)
      lastQuarterScore: 86,
      improvementActions: [
        'Enhanced kitchen exhaust maintenance schedule',
        'Daily pest control verification system',
        'Staff training on hygiene protocols'
      ],
      fssaiCredibility: 'Medium - building reputation',
      cost: 7800
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      overallScore: 95,
      auditDate: '2024-09-25',
      auditQuarter: 'Q3 2024',
      auditType: 'Third-party',
      auditorCompany: 'EliteHygiene Consulting',
      auditorName: 'Dr. Kavita Singh',
      certificationNumber: 'EHC-DEL-2024-121',
      areas: {
        kitchen: 96,
        storage: 95,
        dining: 95,
        restrooms: 94
      },
      violations: [],
      criticalViolations: 0,
      minorViolations: 0,
      status: 'excellent',
      nextAuditDue: '2024-12-25',
      trend: 'improving', // compared to last quarter (91)
      lastQuarterScore: 91,
      improvementActions: [
        'Achieved zero violations target',
        'Best practices shared with other locations',
        'Became model location for hygiene standards'
      ],
      fssaiCredibility: 'Excellent - FSSAI showcase location',
      cost: 9200
    }
  ]

  const chainAverageScore = hygieneData.reduce((sum, item) => sum + item.overallScore, 0) / hygieneData.length
  const excellentLocations = hygieneData.filter(item => item.overallScore >= 90).length
  const improvingLocations = hygieneData.filter(item => item.trend === 'improving').length
  const totalViolations = hygieneData.reduce((sum, item) => sum + item.minorViolations + item.criticalViolations, 0)
  const zeroViolationLocations = hygieneData.filter(item => item.criticalViolations === 0 && item.minorViolations === 0).length
  const totalAuditCost = hygieneData.reduce((sum, item) => sum + item.cost, 0)

  const getStatusColor = (score: number) => {
    if (score >= 90) return 'text-green-600'
    if (score >= 80) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (score: number) => {
    if (score >= 90) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (score >= 80) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getStatusIcon = (score: number) => {
    if (score >= 90) return '🟢'
    if (score >= 80) return '⚠️'
    return '🚨'
  }

  const getTrendIcon = (trend: string) => {
    if (trend === 'improving') return '📈'
    if (trend === 'declining') return '📉'
    return '➡️'
  }

  const getCredibilityColor = (credibility: string) => {
    if (credibility.includes('Excellent')) return 'text-green-600'
    if (credibility.includes('High')) return 'text-blue-600'
    if (credibility.includes('Medium')) return 'text-yellow-600'
    return 'text-gray-600'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Kitchen Hygiene Score (Hygiene Audit Score)
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: QUA_005 | Third-party Professional Hygiene Assessment
          </p>
        </div>
      </div>

      {/* KPI Definition */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 rounded-lg p-4">
        <h2 className="text-xs font-bold text-black dark:text-white mb-2">KPI Definition</h2>
        <p className="text-xs font-normal text-gray-700 dark:text-gray-300 mb-2">
          <strong>Formula:</strong> Third-party or internal audit across kitchen, storage, and dining areas (100-point scale)
        </p>
        <p className="text-xs font-normal text-gray-700 dark:text-gray-300 mb-2">
          <strong>Definition:</strong> Comprehensive hygiene assessment scored 0–100. Target >90/100 consistently.
        </p>
        <p className="text-xs font-normal text-gray-700 dark:text-gray-300 mb-2">
          <strong>Why it matters:</strong> Professional assessment more objective than internal; identifies blind spots.
        </p>
        <p className="text-xs font-normal text-gray-700 dark:text-gray-300 mb-2">
          <strong>Target:</strong> >90/100 | <strong>Warning:</strong> 80–90 | <strong>Critical:</strong> <80
        </p>
        <p className="text-xs font-normal text-gray-700 dark:text-gray-300">
          <strong>India-specific:</strong> Third-party audits build credibility with FSSAI; quarterly cadence recommended
        </p>
      </div>

      {/* Chain Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 border rounded-lg p-4">
          <h3 className="text-xs font-normal text-gray-500 mb-1">Chain Average Score</h3>
          <p className={`text-xs font-bold ${getStatusColor(chainAverageScore)}`}>
            {chainAverageScore.toFixed(1)}/100
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 border rounded-lg p-4">
          <h3 className="text-xs font-normal text-gray-500 mb-1">Excellent Locations</h3>
          <p className="text-xs font-bold text-green-600">
            {excellentLocations}/3 (≥90)
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 border rounded-lg p-4">
          <h3 className="text-xs font-normal text-gray-500 mb-1">Zero Violations</h3>
          <p className="text-xs font-bold text-blue-600">
            {zeroViolationLocations}/3 locations
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 border rounded-lg p-4">
          <h3 className="text-xs font-normal text-gray-500 mb-1">Total Audit Cost</h3>
          <p className="text-xs font-bold text-gray-900 dark:text-gray-100">
            ₹{totalAuditCost.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Location Analysis */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {hygieneData.map((location, index) => (
          <div key={index} className={`border rounded-lg p-4 ${getStatusBg(location.overallScore)}`}>
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="text-xs font-bold text-black dark:text-white">
                  {location.restaurant.name}
                </h3>
                <p className="text-xs font-normal text-gray-500">
                  {location.restaurant.location}
                </p>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-1">
                  <span className="text-sm">{getStatusIcon(location.overallScore)}</span>
                  <span className={`text-xs font-bold ${getStatusColor(location.overallScore)}`}>
                    {location.overallScore}/100
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {/* Audit Details */}
              <div>
                <h4 className="text-xs font-bold text-black dark:text-white mb-2">Audit Details</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-gray-500">Date:</span>
                    <p className="font-normal">{location.auditDate}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Type:</span>
                    <p className="font-normal">{location.auditType}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Company:</span>
                    <p className="font-normal">{location.auditorCompany}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Auditor:</span>
                    <p className="font-normal">{location.auditorName}</p>
                  </div>
                </div>
              </div>

              {/* Area Breakdown */}
              <div>
                <h4 className="text-xs font-bold text-black dark:text-white mb-2">Area Scores</h4>
                <div className="space-y-1">
                  {Object.entries(location.areas).map(([area, score]) => (
                    <div key={area} className="flex justify-between">
                      <span className="text-xs text-gray-600 capitalize">{area}:</span>
                      <span className={`text-xs font-bold ${getStatusColor(score)}`}>
                        {score}/100
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Violations */}
              <div>
                <h4 className="text-xs font-bold text-black dark:text-white mb-2">Violations</h4>
                {location.violations.length > 0 ? (
                  <div className="space-y-1">
                    {location.violations.map((violation, vIndex) => (
                      <div key={vIndex} className="text-xs">
                        <div className="flex justify-between">
                          <span className="text-gray-600">{violation.area}:</span>
                          <span className="text-yellow-600 capitalize">{violation.type}</span>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">{violation.description}</p>
                        <p className="text-green-600">Fixed: {violation.correctionDate}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-green-600">🎉 Zero violations!</p>
                )}
              </div>

              {/* Trend and FSSAI Credibility */}
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-xs text-gray-500">Trend:</span>
                  <div className="flex items-center space-x-1">
                    <span className="text-sm">{getTrendIcon(location.trend)}</span>
                    <span className="text-xs font-normal capitalize">{location.trend}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-gray-500">Cost:</span>
                  <p className="text-xs font-bold">₹{location.cost.toLocaleString()}</p>
                </div>
              </div>

              {/* FSSAI Credibility */}
              <div>
                <span className="text-xs text-gray-500">FSSAI Credibility:</span>
                <p className={`text-xs font-normal ${getCredibilityColor(location.fssaiCredibility)}`}>
                  {location.fssaiCredibility}
                </p>
              </div>

              {/* Next Audit */}
              <div>
                <span className="text-xs text-gray-500">Next Audit Due:</span>
                <p className="text-xs font-bold text-blue-600">{location.nextAuditDue}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Improvement Actions Summary */}
      <div className="bg-white dark:bg-gray-800 border rounded-lg p-4">
        <h3 className="text-xs font-bold text-black dark:text-white mb-3">
          Improvement Actions Taken This Quarter
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {hygieneData.map((location, index) => (
            <div key={index}>
              <h4 className="text-xs font-bold text-gray-900 dark:text-gray-100 mb-2">
                {location.restaurant.name}
              </h4>
              <ul className="text-xs text-gray-700 dark:text-gray-300 space-y-1">
                {location.improvementActions.map((action, aIndex) => (
                  <li key={aIndex} className="flex items-start">
                    <span className="text-green-500 mr-1">•</span>
                    {action}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Key Insights & Recommendations */}
      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 rounded-lg p-4">
        <h3 className="text-xs font-bold text-black dark:text-white mb-3">
          Key Insights & Recommendations
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div>
            <h4 className="font-bold text-amber-800 dark:text-amber-300 mb-2">Strengths</h4>
            <ul className="text-gray-700 dark:text-gray-300 space-y-1">
              <li>• Shahpur Jat achieving zero violations (model location)</li>
              <li>• All locations meeting 80+ threshold (no critical status)</li>
              <li>• Strong third-party auditor relationships established</li>
              <li>• Consistent quarterly audit schedule maintained</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-amber-800 dark:text-amber-300 mb-2">Action Items</h4>
            <ul className="text-gray-700 dark:text-gray-300 space-y-1">
              <li>• Gurugram: Focus on kitchen exhaust maintenance</li>
              <li>• Share Shahpur Jat best practices across chain</li>
              <li>• Consider cost-effective auditor consolidation</li>
              <li>• Prepare for upcoming Q4 audits (December 2024)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}