import { RESTAURANTS } from '@/lib/restaurant-data'

export default function LaborLawComplianceKPI() {
  // QUA_010 Labor Law Compliance - Exact specifications from restaurant_kpi_metrics_127.txt
  const laborComplianceData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      overallCompliance: 98,
      lastAuditDate: '2024-10-15',
      month: 'October 2024',
      auditType: 'Monthly Internal',
      complianceElements: {
        pfContributions: {
          status: 'compliant',
          percentage: 13.67,
          lastSubmission: '2024-10-05',
          nextDue: '2024-11-05',
          employeesCovered: 31,
          amountSubmitted: 125400,
          complianceScore: 100
        },
        esiContributions: {
          status: 'compliant',
          percentage: 3.25, // Varies by state - Delhi rate
          lastSubmission: '2024-10-05',
          nextDue: '2024-11-05',
          employeesCovered: 28, // ESI threshold applicable
          amountSubmitted: 18200,
          complianceScore: 100
        },
        wageSlips: {
          status: 'compliant',
          issuedOnTime: 31,
          totalEmployees: 31,
          format: 'Digital & Physical',
          language: 'Hindi & English',
          lastIssuanceDate: '2024-09-30',
          complianceScore: 100
        },
        attendanceRecording: {
          status: 'compliant',
          system: 'Biometric + Manual Log',
          accuracyRate: 99.8,
          discrepancies: 0,
          lastAudit: '2024-10-10',
          complianceScore: 100
        },
        leaveManagement: {
          status: 'minor_issue',
          totalLeaveRequests: 24,
          processedOnTime: 23,
          pendingRequests: 1,
          averageProcessingDays: 2.1,
          policyCompliance: 96,
          complianceScore: 95
        }
      },
      violations: [
        {
          element: 'leave_management',
          description: 'One leave request pending beyond 3-day policy',
          severity: 'minor',
          dateIdentified: '2024-10-12',
          correctionDeadline: '2024-10-20',
          status: 'pending',
          employee: 'Kitchen Staff'
        }
      ],
      hrmsStatus: 'Integrated with Payroll',
      laborDeptContact: 'Delhi Labour Department - Chanakyapuri Office',
      lastInspection: '2024-08-15',
      nextInspectionDue: '2024-11-15',
      complianceOfficer: 'Ms. Priya Sharma (HR Manager)',
      penalties: {
        ytd: 0,
        lastPenalty: 'None in 2024',
        riskLevel: 'low'
      },
      training: {
        hrStaffTrained: 3,
        managementTrained: 5,
        lastTrainingDate: '2024-09-20',
        nextTrainingDue: '2024-12-20'
      }
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      overallCompliance: 92,
      lastAuditDate: '2024-10-12',
      month: 'October 2024',
      auditType: 'Monthly Internal',
      complianceElements: {
        pfContributions: {
          status: 'compliant',
          percentage: 13.67,
          lastSubmission: '2024-10-07',
          nextDue: '2024-11-07',
          employeesCovered: 27,
          amountSubmitted: 108900,
          complianceScore: 100
        },
        esiContributions: {
          status: 'delayed',
          percentage: 3.25, // Haryana rate
          lastSubmission: '2024-10-08', // 3 days late
          nextDue: '2024-11-05',
          employeesCovered: 24,
          amountSubmitted: 15600,
          complianceScore: 85
        },
        wageSlips: {
          status: 'minor_issue',
          issuedOnTime: 25,
          totalEmployees: 27,
          format: 'Digital Only',
          language: 'Hindi & English',
          lastIssuanceDate: '2024-10-02', // 2 days late
          complianceScore: 93
        },
        attendanceRecording: {
          status: 'compliant',
          system: 'Biometric Only',
          accuracyRate: 98.5,
          discrepancies: 2,
          lastAudit: '2024-10-08',
          complianceScore: 98
        },
        leaveManagement: {
          status: 'needs_improvement',
          totalLeaveRequests: 19,
          processedOnTime: 16,
          pendingRequests: 3,
          averageProcessingDays: 4.2,
          policyCompliance: 84,
          complianceScore: 84
        }
      },
      violations: [
        {
          element: 'esi_contributions',
          description: 'ESI submission delayed by 3 days',
          severity: 'medium',
          dateIdentified: '2024-10-08',
          correctionDeadline: '2024-10-15',
          status: 'corrected',
          employee: 'All ESI-covered staff'
        },
        {
          element: 'wage_slips',
          description: '2 employees did not receive wage slips on time',
          severity: 'minor',
          dateIdentified: '2024-10-03',
          correctionDeadline: '2024-10-10',
          status: 'corrected',
          employee: 'Service Staff'
        },
        {
          element: 'leave_management',
          description: '3 leave requests pending beyond policy timeline',
          severity: 'medium',
          dateIdentified: '2024-10-05',
          correctionDeadline: '2024-10-18',
          status: 'in_progress',
          employee: 'Kitchen & Service Staff'
        }
      ],
      hrmsStatus: 'Partial Integration - Manual Reconciliation Required',
      laborDeptContact: 'Haryana Labour Department - Gurugram Sector 14',
      lastInspection: '2024-07-22',
      nextInspectionDue: '2024-10-22',
      complianceOfficer: 'Mr. Rajesh Kumar (Assistant Manager)',
      penalties: {
        ytd: 5000,
        lastPenalty: 'August 2024 - Late ESI submission',
        riskLevel: 'medium'
      },
      training: {
        hrStaffTrained: 2,
        managementTrained: 3,
        lastTrainingDate: '2024-07-15',
        nextTrainingDue: '2024-10-15'
      }
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      overallCompliance: 100,
      lastAuditDate: '2024-10-18',
      month: 'October 2024',
      auditType: 'Monthly Internal',
      complianceElements: {
        pfContributions: {
          status: 'compliant',
          percentage: 13.67,
          lastSubmission: '2024-10-03',
          nextDue: '2024-11-03',
          employeesCovered: 26,
          amountSubmitted: 104000,
          complianceScore: 100
        },
        esiContributions: {
          status: 'compliant',
          percentage: 3.25, // Delhi rate
          lastSubmission: '2024-10-03',
          nextDue: '2024-11-03',
          employeesCovered: 23,
          amountSubmitted: 14950,
          complianceScore: 100
        },
        wageSlips: {
          status: 'compliant',
          issuedOnTime: 26,
          totalEmployees: 26,
          format: 'Digital & Physical',
          language: 'Hindi & English',
          lastIssuanceDate: '2024-09-28', // 2 days early
          complianceScore: 100
        },
        attendanceRecording: {
          status: 'compliant',
          system: 'Biometric + Manual Backup',
          accuracyRate: 100,
          discrepancies: 0,
          lastAudit: '2024-10-15',
          complianceScore: 100
        },
        leaveManagement: {
          status: 'compliant',
          totalLeaveRequests: 18,
          processedOnTime: 18,
          pendingRequests: 0,
          averageProcessingDays: 1.2,
          policyCompliance: 100,
          complianceScore: 100
        }
      },
      violations: [],
      hrmsStatus: 'Fully Integrated - Automated Compliance',
      laborDeptContact: 'Delhi Labour Department - Hauz Khas Office',
      lastInspection: '2024-09-10',
      nextInspectionDue: '2024-12-10',
      complianceOfficer: 'Ms. Kavita Singh (Senior HR Executive)',
      penalties: {
        ytd: 0,
        lastPenalty: 'None in past 2 years',
        riskLevel: 'low'
      },
      training: {
        hrStaffTrained: 4,
        managementTrained: 6,
        lastTrainingDate: '2024-10-05',
        nextTrainingDue: '2025-01-05'
      }
    }
  ]

  const chainAverage = laborComplianceData.reduce((sum, item) => sum + item.overallCompliance, 0) / laborComplianceData.length
  const fullCompliantLocations = laborComplianceData.filter(item => item.overallCompliance === 100).length
  const locationsWithViolations = laborComplianceData.filter(item => item.violations.length > 0).length
  const totalPenalties = laborComplianceData.reduce((sum, item) => sum + item.penalties.ytd, 0)
  const highRiskLocations = laborComplianceData.filter(item => item.penalties.riskLevel === 'high').length
  const mediumRiskLocations = laborComplianceData.filter(item => item.penalties.riskLevel === 'medium').length

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

  const getElementStatusColor = (status: string) => {
    if (status === 'compliant') return 'text-green-600'
    if (status === 'minor_issue' || status === 'delayed') return 'text-yellow-600'
    return 'text-red-600'
  }

  const getViolationSeverityColor = (severity: string) => {
    if (severity === 'minor') return 'text-blue-600'
    if (severity === 'medium') return 'text-yellow-600'
    return 'text-red-600'
  }

  const getRiskLevelColor = (risk: string) => {
    if (risk === 'low') return 'text-green-600'
    if (risk === 'medium') return 'text-yellow-600'
    return 'text-red-600'
  }

  const getViolationStatusColor = (status: string) => {
    if (status === 'corrected') return 'text-green-600'
    if (status === 'in_progress') return 'text-yellow-600'
    return 'text-red-600'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Labor Law Compliance
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: QUA_010 | PF/ESI Contributions, Wage Slips, Attendance & Leave Management
          </p>
        </div>
      </div>

      {/* KPI Definition */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 rounded-lg p-4">
        <h2 className="text-xs font-bold text-black dark:text-white mb-2">KPI Definition</h2>
        <p className="text-xs font-normal text-gray-700 dark:text-gray-300 mb-2">
          <strong>Formula:</strong> % compliance: timely PF/ESI contributions, wage slip issuance, attendance recording, leave management
        </p>
        <p className="text-xs font-normal text-gray-700 dark:text-gray-300 mb-2">
          <strong>Definition:</strong> Adherence to Indian labor laws: PF/ESI submissions, wage slips, attendance, leave policies.
        </p>
        <p className="text-xs font-normal text-gray-700 dark:text-gray-300 mb-2">
          <strong>Why it matters:</strong> High audit risk area; India's labor department very active; fines significant.
        </p>
        <p className="text-xs font-normal text-gray-700 dark:text-gray-300 mb-2">
          <strong>Target:</strong> 100% | <strong>Warning:</strong> 95–100% | <strong>Critical:</strong> &lt;95%
        </p>
        <p className="text-xs font-normal text-gray-700 dark:text-gray-300">
          <strong>India-specific:</strong> PF contribution 13.67%; ESI varies by state; wage slips required by law; document all
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
          <h3 className="text-xs font-normal text-gray-500 mb-1">YTD Penalties</h3>
          <p className="text-xs font-bold text-red-600">
            ₹{totalPenalties.toLocaleString()}
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 border rounded-lg p-4">
          <h3 className="text-xs font-normal text-gray-500 mb-1">Risk Assessment</h3>
          <p className="text-xs font-normal">
            <span className="text-red-600">{highRiskLocations} High</span> | 
            <span className="text-yellow-600 ml-1">{mediumRiskLocations} Medium</span>
          </p>
        </div>
      </div>

      {/* Location Analysis */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {laborComplianceData.map((location, index) => (
          <div key={index} className={`border rounded-lg p-4 ${getStatusBg(location.overallCompliance)}`}>
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
                  <span className="text-sm">{getStatusIcon(location.overallCompliance)}</span>
                  <span className={`text-xs font-bold ${getStatusColor(location.overallCompliance)}`}>
                    {location.overallCompliance}%
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {/* Compliance Elements Breakdown */}
              <div>
                <h4 className="text-xs font-bold text-black dark:text-white mb-2">Compliance Elements</h4>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span className="text-xs text-gray-600">PF Contributions:</span>
                    <span className={`text-xs font-bold ${getElementStatusColor(location.complianceElements.pfContributions.status)}`}>
                      {location.complianceElements.pfContributions.complianceScore}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs text-gray-600">ESI Contributions:</span>
                    <span className={`text-xs font-bold ${getElementStatusColor(location.complianceElements.esiContributions.status)}`}>
                      {location.complianceElements.esiContributions.complianceScore}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs text-gray-600">Wage Slips:</span>
                    <span className={`text-xs font-bold ${getElementStatusColor(location.complianceElements.wageSlips.status)}`}>
                      {location.complianceElements.wageSlips.complianceScore}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs text-gray-600">Attendance:</span>
                    <span className={`text-xs font-bold ${getElementStatusColor(location.complianceElements.attendanceRecording.status)}`}>
                      {location.complianceElements.attendanceRecording.complianceScore}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs text-gray-600">Leave Management:</span>
                    <span className={`text-xs font-bold ${getElementStatusColor(location.complianceElements.leaveManagement.status)}`}>
                      {location.complianceElements.leaveManagement.complianceScore}%
                    </span>
                  </div>
                </div>
              </div>

              {/* PF & ESI Details */}
              <div>
                <h4 className="text-xs font-bold text-black dark:text-white mb-2">PF & ESI Status</h4>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-600">PF Employees:</span>
                    <span className="font-normal">{location.complianceElements.pfContributions.employeesCovered}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">ESI Employees:</span>
                    <span className="font-normal">{location.complianceElements.esiContributions.employeesCovered}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Last Submission:</span>
                    <span className="font-normal">{location.complianceElements.pfContributions.lastSubmission}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Next Due:</span>
                    <span className="font-bold text-blue-600">{location.complianceElements.pfContributions.nextDue}</span>
                  </div>
                </div>
              </div>

              {/* Violations */}
              <div>
                <h4 className="text-xs font-bold text-black dark:text-white mb-2">Current Issues</h4>
                {location.violations.length > 0 ? (
                  <div className="space-y-1">
                    {location.violations.map((violation, vIndex) => (
                      <div key={vIndex} className="text-xs">
                        <div className="flex justify-between">
                          <span className="text-gray-600 capitalize">{violation.element.replace('_', ' ')}:</span>
                          <span className={`font-bold capitalize ${getViolationSeverityColor(violation.severity)}`}>
                            {violation.severity}
                          </span>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">{violation.description}</p>
                        <div className="flex justify-between">
                          <span className="text-blue-600">Due: {violation.correctionDeadline}</span>
                          <span className={`capitalize ${getViolationStatusColor(violation.status)}`}>
                            {violation.status.replace('_', ' ')}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-green-600">🎉 No violations!</p>
                )}
              </div>

              {/* HRMS & Risk Level */}
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-xs text-gray-500">Risk Level:</span>
                  <p className={`text-xs font-bold capitalize ${getRiskLevelColor(location.penalties.riskLevel)}`}>
                    {location.penalties.riskLevel}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-gray-500">YTD Penalties:</span>
                  <p className="text-xs font-bold text-red-600">₹{location.penalties.ytd.toLocaleString()}</p>
                </div>
              </div>

              {/* HRMS Status */}
              <div>
                <span className="text-xs text-gray-500">HRMS Status:</span>
                <p className="text-xs font-normal text-gray-700 dark:text-gray-300">
                  {location.hrmsStatus}
                </p>
              </div>

              {/* Compliance Officer */}
              <div>
                <span className="text-xs text-gray-500">Compliance Officer:</span>
                <p className="text-xs font-normal text-gray-700 dark:text-gray-300">
                  {location.complianceOfficer}
                </p>
              </div>

              {/* Next Inspection */}
              <div>
                <span className="text-xs text-gray-500">Next Inspection:</span>
                <p className="text-xs font-bold text-blue-600">{location.nextInspectionDue}</p>
              </div>

              {/* Training Status */}
              <div>
                <span className="text-xs text-gray-500">Training Status:</span>
                <p className="text-xs font-normal text-gray-700 dark:text-gray-300">
                  HR: {location.training.hrStaffTrained} | Mgmt: {location.training.managementTrained}
                </p>
                <p className="text-xs text-gray-500">Next due: {location.training.nextTrainingDue}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Compliance Element Performance */}
      <div className="bg-white dark:bg-gray-800 border rounded-lg p-4">
        <h3 className="text-xs font-bold text-black dark:text-white mb-3">
          Compliance Element Performance Across Chain
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-xs">
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">PF Contributions</h4>
            {laborComplianceData.map((location, index) => (
              <div key={index} className="flex justify-between">
                <span className="text-gray-600">{location.restaurant.name.split(' ')[0]}:</span>
                <span className={`font-bold ${getStatusColor(location.complianceElements.pfContributions.complianceScore)}`}>
                  {location.complianceElements.pfContributions.complianceScore}%
                </span>
              </div>
            ))}
          </div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">ESI Contributions</h4>
            {laborComplianceData.map((location, index) => (
              <div key={index} className="flex justify-between">
                <span className="text-gray-600">{location.restaurant.name.split(' ')[0]}:</span>
                <span className={`font-bold ${getStatusColor(location.complianceElements.esiContributions.complianceScore)}`}>
                  {location.complianceElements.esiContributions.complianceScore}%
                </span>
              </div>
            ))}
          </div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Wage Slips</h4>
            {laborComplianceData.map((location, index) => (
              <div key={index} className="flex justify-between">
                <span className="text-gray-600">{location.restaurant.name.split(' ')[0]}:</span>
                <span className={`font-bold ${getStatusColor(location.complianceElements.wageSlips.complianceScore)}`}>
                  {location.complianceElements.wageSlips.complianceScore}%
                </span>
              </div>
            ))}
          </div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Attendance</h4>
            {laborComplianceData.map((location, index) => (
              <div key={index} className="flex justify-between">
                <span className="text-gray-600">{location.restaurant.name.split(' ')[0]}:</span>
                <span className={`font-bold ${getStatusColor(location.complianceElements.attendanceRecording.complianceScore)}`}>
                  {location.complianceElements.attendanceRecording.complianceScore}%
                </span>
              </div>
            ))}
          </div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Leave Management</h4>
            {laborComplianceData.map((location, index) => (
              <div key={index} className="flex justify-between">
                <span className="text-gray-600">{location.restaurant.name.split(' ')[0]}:</span>
                <span className={`font-bold ${getStatusColor(location.complianceElements.leaveManagement.complianceScore)}`}>
                  {location.complianceElements.leaveManagement.complianceScore}%
                </span>
              </div>
            ))}
          </div>
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
              <li>• Shahpur Jat: 100% compliance achieved across all elements</li>
              <li>• PF contributions consistently on time across all locations</li>
              <li>• Strong attendance recording systems in place</li>
              <li>• Regular training programs for HR and management staff</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-amber-800 dark:text-amber-300 mb-2">Action Items</h4>
            <ul className="text-gray-700 dark:text-gray-300 space-y-1">
              <li>• Gurugram: Automate ESI submission process to avoid delays</li>
              <li>• Gurugram: Implement HRMS integration for wage slip automation</li>
              <li>• All locations: Standardize leave management processes</li>
              <li>• Chanakyapuri: Process pending leave request immediately</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}