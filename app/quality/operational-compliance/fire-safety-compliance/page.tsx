import { RESTAURANTS } from '@/lib/restaurant-data'

export default function FireSafetyComplianceKPI() {
  // QUA_009 Fire Safety Compliance - Exact specifications from restaurant_kpi_metrics_127.txt
  const fireSafetyData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      complianceScore: 100,
      lastUpdated: '2024-10-15',
      quarter: 'Q4 2024',
      drills: {
        completed: 4,
        required: 4,
        lastDrillDate: '2024-10-05',
        completionRate: 100,
        drillSchedule: [
          { quarter: 'Q1', date: '2024-01-15', status: 'completed', participants: 28, duration: '12 minutes' },
          { quarter: 'Q2', date: '2024-04-12', status: 'completed', participants: 30, duration: '10 minutes' },
          { quarter: 'Q3', date: '2024-07-20', status: 'completed', participants: 29, duration: '11 minutes' },
          { quarter: 'Q4', date: '2024-10-05', status: 'completed', participants: 31, duration: '9 minutes' }
        ]
      },
      equipment: {
        fireExtinguishers: {
          total: 6,
          maintained: 6,
          lastInspection: '2024-09-15',
          nextInspection: '2024-12-15',
          status: 'compliant'
        },
        smokeDetectors: {
          total: 8,
          functioning: 8,
          lastTesting: '2024-10-01',
          nextTesting: '2024-11-01',
          status: 'compliant'
        },
        emergencyLights: {
          total: 12,
          functioning: 12,
          lastTesting: '2024-09-28',
          nextTesting: '2024-10-28',
          status: 'compliant'
        },
        exitSigns: {
          total: 4,
          visible: 4,
          lastInspection: '2024-09-20',
          status: 'compliant'
        }
      },
      evacuationPlan: {
        posted: true,
        lastUpdated: '2024-01-10',
        language: 'Hindi & English',
        staffTrained: 31,
        totalStaff: 31
      },
      certifications: {
        noC: {
          number: 'NOC-DEL-2024-089',
          validUntil: '2025-03-31',
          issuedBy: 'Delhi Fire Services',
          status: 'valid'
        },
        fireSafetyCertificate: {
          number: 'FSC-DEL-2024-156',
          validUntil: '2025-12-31',
          issuedBy: 'Delhi Fire Department',
          status: 'valid'
        }
      },
      violations: [],
      status: 'excellent',
      riskLevel: 'low',
      nextAudit: '2024-12-15',
      localFireDept: 'Delhi Fire Services - Chanakyapuri Station',
      insuranceCompliance: 'Full compliance - premium discount eligible'
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      complianceScore: 75,
      lastUpdated: '2024-10-10',
      quarter: 'Q4 2024',
      drills: {
        completed: 3,
        required: 4,
        lastDrillDate: '2024-07-15',
        completionRate: 75,
        drillSchedule: [
          { quarter: 'Q1', date: '2024-01-18', status: 'completed', participants: 25, duration: '15 minutes' },
          { quarter: 'Q2', date: '2024-04-22', status: 'completed', participants: 27, duration: '13 minutes' },
          { quarter: 'Q3', date: '2024-07-15', status: 'completed', participants: 26, duration: '14 minutes' },
          { quarter: 'Q4', date: null, status: 'pending', participants: null, duration: null }
        ]
      },
      equipment: {
        fireExtinguishers: {
          total: 5,
          maintained: 4,
          lastInspection: '2024-08-20',
          nextInspection: '2024-11-20',
          status: 'needs_attention'
        },
        smokeDetectors: {
          total: 7,
          functioning: 7,
          lastTesting: '2024-09-15',
          nextTesting: '2024-10-15',
          status: 'compliant'
        },
        emergencyLights: {
          total: 10,
          functioning: 9,
          lastTesting: '2024-09-10',
          nextTesting: '2024-10-10',
          status: 'needs_attention'
        },
        exitSigns: {
          total: 3,
          visible: 3,
          lastInspection: '2024-08-25',
          status: 'compliant'
        }
      },
      evacuationPlan: {
        posted: true,
        lastUpdated: '2024-02-05',
        language: 'Hindi & English',
        staffTrained: 24,
        totalStaff: 27
      },
      certifications: {
        noC: {
          number: 'NOC-GUR-2024-067',
          validUntil: '2025-01-31',
          issuedBy: 'Haryana Fire Services',
          status: 'valid'
        },
        fireSafetyCertificate: {
          number: 'FSC-GUR-2024-123',
          validUntil: '2025-08-31',
          issuedBy: 'Gurugram Fire Department',
          status: 'valid'
        }
      },
      violations: [
        {
          type: 'equipment',
          description: 'One fire extinguisher expired',
          severity: 'medium',
          dateIdentified: '2024-10-05',
          correctionDeadline: '2024-10-20',
          status: 'pending'
        },
        {
          type: 'drill',
          description: 'Q4 fire drill not yet conducted',
          severity: 'medium',
          dateIdentified: '2024-10-01',
          correctionDeadline: '2024-10-31',
          status: 'pending'
        }
      ],
      status: 'warning',
      riskLevel: 'medium',
      nextAudit: '2024-11-15',
      localFireDept: 'Haryana Fire Services - Sector 14 Station',
      insuranceCompliance: 'Minor issues noted - may affect renewal'
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      complianceScore: 100,
      lastUpdated: '2024-10-20',
      quarter: 'Q4 2024',
      drills: {
        completed: 4,
        required: 4,
        lastDrillDate: '2024-10-10',
        completionRate: 100,
        drillSchedule: [
          { quarter: 'Q1', date: '2024-02-10', status: 'completed', participants: 22, duration: '8 minutes' },
          { quarter: 'Q2', date: '2024-05-05', status: 'completed', participants: 24, duration: '7 minutes' },
          { quarter: 'Q3', date: '2024-08-08', status: 'completed', participants: 25, duration: '8 minutes' },
          { quarter: 'Q4', date: '2024-10-10', status: 'completed', participants: 26, duration: '6 minutes' }
        ]
      },
      equipment: {
        fireExtinguishers: {
          total: 5,
          maintained: 5,
          lastInspection: '2024-10-01',
          nextInspection: '2025-01-01',
          status: 'compliant'
        },
        smokeDetectors: {
          total: 6,
          functioning: 6,
          lastTesting: '2024-10-05',
          nextTesting: '2024-11-05',
          status: 'compliant'
        },
        emergencyLights: {
          total: 8,
          functioning: 8,
          lastTesting: '2024-10-03',
          nextTesting: '2024-11-03',
          status: 'compliant'
        },
        exitSigns: {
          total: 3,
          visible: 3,
          lastInspection: '2024-10-01',
          status: 'compliant'
        }
      },
      evacuationPlan: {
        posted: true,
        lastUpdated: '2024-03-15',
        language: 'Hindi & English',
        staffTrained: 26,
        totalStaff: 26
      },
      certifications: {
        noC: {
          number: 'NOC-DEL-2024-234',
          validUntil: '2025-06-30',
          issuedBy: 'Delhi Fire Services',
          status: 'valid'
        },
        fireSafetyCertificate: {
          number: 'FSC-DEL-2024-289',
          validUntil: '2025-11-30',
          issuedBy: 'Delhi Fire Department',
          status: 'valid'
        }
      },
      violations: [],
      status: 'excellent',
      riskLevel: 'low',
      nextAudit: '2025-01-15',
      localFireDept: 'Delhi Fire Services - Hauz Khas Station',
      insuranceCompliance: 'Exemplary compliance - maximum premium discount'
    }
  ]

  const chainAverage = fireSafetyData.reduce((sum, item) => sum + item.complianceScore, 0) / fireSafetyData.length
  const fullCompliantLocations = fireSafetyData.filter(item => item.complianceScore === 100).length
  const totalDrillsCompleted = fireSafetyData.reduce((sum, item) => sum + item.drills.completed, 0)
  const totalDrillsRequired = fireSafetyData.reduce((sum, item) => sum + item.drills.required, 0)
  const overallDrillCompliance = (totalDrillsCompleted / totalDrillsRequired) * 100
  const locationsWithViolations = fireSafetyData.filter(item => item.violations.length > 0).length

  const getStatusColor = (score: number) => {
    if (score === 100) return 'text-green-600'
    if (score >= 95) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (score: number) => {
    if (score === 100) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (score >= 95) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getStatusIcon = (score: number) => {
    if (score === 100) return '🟢'
    if (score >= 95) return '⚠️'
    return '🚨'
  }

  const getEquipmentStatusColor = (status: string) => {
    if (status === 'compliant') return 'text-green-600'
    if (status === 'needs_attention') return 'text-yellow-600'
    return 'text-red-600'
  }

  const getViolationSeverityColor = (severity: string) => {
    if (severity === 'low') return 'text-blue-600'
    if (severity === 'medium') return 'text-yellow-600'
    return 'text-red-600'
  }

  const getRiskLevelColor = (risk: string) => {
    if (risk === 'low') return 'text-green-600'
    if (risk === 'medium') return 'text-yellow-600'
    return 'text-red-600'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Fire Safety Compliance
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: QUA_009 | Quarterly Fire Safety Drills & Equipment Maintenance
          </p>
        </div>
      </div>

      {/* KPI Definition */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 rounded-lg p-4">
        <h2 className="text-xs font-bold text-black dark:text-white mb-2">KPI Definition</h2>
        <p className="text-xs font-normal text-gray-700 dark:text-gray-300 mb-2">
          <strong>Formula:</strong> % of fire safety drills completed (quarterly requirement) + equipment maintenance up-to-date
        </p>
        <p className="text-xs font-normal text-gray-700 dark:text-gray-300 mb-2">
          <strong>Definition:</strong> Completion of quarterly fire safety drills and maintenance of fire extinguishers, alarms, etc.
        </p>
        <p className="text-xs font-normal text-gray-700 dark:text-gray-300 mb-2">
          <strong>Why it matters:</strong> Regulatory requirement; lifesaving; insurance requirement.
        </p>
        <p className="text-xs font-normal text-gray-700 dark:text-gray-300 mb-2">
          <strong>Target:</strong> 100% drills completed, 100% equipment maintained | <strong>Warning:</strong> At least 3 of 4 quarterly drills completed | <strong>Critical:</strong> &lt;2 drills or lapsed equipment maintenance
        </p>
        <p className="text-xs font-normal text-gray-700 dark:text-gray-300">
          <strong>India-specific:</strong> Local fire department varies; ensure alignment with local regulations; post evacuation plan
        </p>
      </div>

      {/* Chain Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 border rounded-lg p-4">
          <h3 className="text-xs font-normal text-gray-500 mb-1">Chain Average Score</h3>
          <p className={`text-xs font-bold ${getStatusColor(chainAverage)}`}>
            {chainAverage.toFixed(1)}%
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 border rounded-lg p-4">
          <h3 className="text-xs font-normal text-gray-500 mb-1">Full Compliance</h3>
          <p className="text-xs font-bold text-green-600">
            {fullCompliantLocations}/3 locations
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 border rounded-lg p-4">
          <h3 className="text-xs font-normal text-gray-500 mb-1">Drill Compliance</h3>
          <p className={`text-xs font-bold ${getStatusColor(overallDrillCompliance)}`}>
            {overallDrillCompliance.toFixed(1)}%
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 border rounded-lg p-4">
          <h3 className="text-xs font-normal text-gray-500 mb-1">Locations with Issues</h3>
          <p className="text-xs font-bold text-red-600">
            {locationsWithViolations}/3 locations
          </p>
        </div>
      </div>

      {/* Location Analysis */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {fireSafetyData.map((location, index) => (
          <div key={index} className={`border rounded-lg p-4 ${getStatusBg(location.complianceScore)}`}>
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
                  <span className="text-sm">{getStatusIcon(location.complianceScore)}</span>
                  <span className={`text-xs font-bold ${getStatusColor(location.complianceScore)}`}>
                    {location.complianceScore}%
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {/* Fire Drills */}
              <div>
                <h4 className="text-xs font-bold text-black dark:text-white mb-2">Fire Drills (2024)</h4>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span className="text-xs text-gray-600">Completed:</span>
                    <span className={`text-xs font-bold ${getStatusColor((location.drills.completed / location.drills.required) * 100)}`}>
                      {location.drills.completed}/{location.drills.required}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs text-gray-600">Last Drill:</span>
                    <span className="text-xs font-normal">
                      {location.drills.lastDrillDate || 'Not yet conducted'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Equipment Status */}
              <div>
                <h4 className="text-xs font-bold text-black dark:text-white mb-2">Equipment Status</h4>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span className="text-xs text-gray-600">Fire Extinguishers:</span>
                    <span className={`text-xs font-bold ${getEquipmentStatusColor(location.equipment.fireExtinguishers.status)}`}>
                      {location.equipment.fireExtinguishers.maintained}/{location.equipment.fireExtinguishers.total}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs text-gray-600">Smoke Detectors:</span>
                    <span className={`text-xs font-bold ${getEquipmentStatusColor(location.equipment.smokeDetectors.status)}`}>
                      {location.equipment.smokeDetectors.functioning}/{location.equipment.smokeDetectors.total}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs text-gray-600">Emergency Lights:</span>
                    <span className={`text-xs font-bold ${getEquipmentStatusColor(location.equipment.emergencyLights.status)}`}>
                      {location.equipment.emergencyLights.functioning}/{location.equipment.emergencyLights.total}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs text-gray-600">Exit Signs:</span>
                    <span className={`text-xs font-bold ${getEquipmentStatusColor(location.equipment.exitSigns.status)}`}>
                      {location.equipment.exitSigns.visible}/{location.equipment.exitSigns.total}
                    </span>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h4 className="text-xs font-bold text-black dark:text-white mb-2">Certifications</h4>
                <div className="space-y-1">
                  <div>
                    <div className="flex justify-between">
                      <span className="text-xs text-gray-600">NOC:</span>
                      <span className="text-xs font-normal text-green-600">Valid</span>
                    </div>
                    <p className="text-xs text-gray-500">Until {location.certifications.noC.validUntil}</p>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <span className="text-xs text-gray-600">Fire Safety:</span>
                      <span className="text-xs font-normal text-green-600">Valid</span>
                    </div>
                    <p className="text-xs text-gray-500">Until {location.certifications.fireSafetyCertificate.validUntil}</p>
                  </div>
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
                          <span className="text-gray-600">{violation.type}:</span>
                          <span className={`font-bold capitalize ${getViolationSeverityColor(violation.severity)}`}>
                            {violation.severity}
                          </span>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">{violation.description}</p>
                        <p className="text-red-600">Due: {violation.correctionDeadline}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-green-600">🎉 No violations!</p>
                )}
              </div>

              {/* Risk Level and Next Audit */}
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-xs text-gray-500">Risk Level:</span>
                  <p className={`text-xs font-bold capitalize ${getRiskLevelColor(location.riskLevel)}`}>
                    {location.riskLevel}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-gray-500">Next Audit:</span>
                  <p className="text-xs font-bold text-blue-600">{location.nextAudit}</p>
                </div>
              </div>

              {/* Local Fire Department */}
              <div>
                <span className="text-xs text-gray-500">Local Fire Dept:</span>
                <p className="text-xs font-normal text-gray-700 dark:text-gray-300">
                  {location.localFireDept}
                </p>
              </div>

              {/* Insurance Compliance */}
              <div>
                <span className="text-xs text-gray-500">Insurance:</span>
                <p className="text-xs font-normal text-gray-700 dark:text-gray-300">
                  {location.insuranceCompliance}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Drill Schedule Overview */}
      <div className="bg-white dark:bg-gray-800 border rounded-lg p-4">
        <h3 className="text-xs font-bold text-black dark:text-white mb-3">
          2024 Fire Drill Schedule Overview
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {fireSafetyData.map((location, index) => (
            <div key={index}>
              <h4 className="text-xs font-bold text-gray-900 dark:text-gray-100 mb-2">
                {location.restaurant.name}
              </h4>
              <div className="space-y-1">
                {location.drills.drillSchedule.map((drill, dIndex) => (
                  <div key={dIndex} className="flex justify-between items-center text-xs">
                    <span className="text-gray-600">{drill.quarter}:</span>
                    <div className="text-right">
                      {drill.status === 'completed' ? (
                        <div>
                          <span className="text-green-600">✓ {drill.date}</span>
                          <p className="text-gray-500">{drill.participants} staff, {drill.duration}</p>
                        </div>
                      ) : (
                        <span className="text-red-600">⏳ Pending</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
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
              <li>• Chanakyapuri & Shahpur Jat: 100% compliance achieved</li>
              <li>• All locations have valid NOC and fire safety certificates</li>
              <li>• Strong relationship with local fire departments</li>
              <li>• Evacuation plans posted in Hindi & English</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-amber-800 dark:text-amber-300 mb-2">Action Items</h4>
            <ul className="text-gray-700 dark:text-gray-300 space-y-1">
              <li>• Gurugram: Complete Q4 fire drill by Oct 31, 2024</li>
              <li>• Gurugram: Replace expired fire extinguisher immediately</li>
              <li>• Gurugram: Repair/replace malfunctioning emergency light</li>
              <li>• All locations: Schedule Q1 2025 drills in advance</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}