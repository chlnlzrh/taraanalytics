import { RESTAURANTS } from '@/lib/restaurant-data'

export default function LiquorLicenseComplianceKPI() {
  // QUA_011 Liquor License Compliance - Exact specifications from restaurant_kpi_metrics_127.txt
  const liquorComplianceData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      overallCompliance: 100,
      lastAuditDate: '2024-10-10',
      auditType: 'Monthly Internal + Quarterly External',
      hasLiquorLicense: true,
      licenseDetails: {
        licenseNumber: 'LIC-DEL-2024-089',
        licenseType: 'FL-3 (Beer & Wine)',
        issuedBy: 'Delhi Excise Department',
        issuedDate: '2024-01-15',
        validUntil: '2025-01-14',
        status: 'active',
        renewalNoticeDate: '2024-10-15', // 3 months notice
        renewalStatus: 'in_progress',
        annualFee: 125000
      },
      storage: {
        authorizedArea: 'Dedicated climate-controlled room',
        storageCapacity: '500 bottles',
        currentStock: 387,
        temperatureControlled: true,
        securitySystem: 'CCTV + Biometric Access',
        lastInspection: '2024-09-25',
        complianceScore: 100
      },
      ageVerification: {
        system: 'Digital ID Scanner + Manual Check',
        staffTrained: 31,
        totalStaff: 31,
        lastTrainingDate: '2024-09-15',
        verificationLogs: {
          totalChecks: 2456,
          rejections: 23,
          rejectionRate: 0.94,
          logsMaintained: true,
          lastLogAudit: '2024-10-05'
        },
        complianceScore: 100
      },
      documentation: {
        purchaseRecords: 'Complete',
        salesRecords: 'Complete',
        stockRegister: 'Up to date',
        exciseDutyPaid: 'Current',
        lastDocumentationAudit: '2024-10-01',
        complianceScore: 100
      },
      violations: [],
      inspections: {
        lastExciseInspection: '2024-08-20',
        nextExciseInspection: '2024-11-20',
        lastPoliceInspection: '2024-09-10',
        inspectionHistory: [
          { date: '2024-08-20', type: 'Excise', result: 'No issues found', officer: 'Mr. R.K. Sharma' },
          { date: '2024-09-10', type: 'Police', result: 'Compliant', officer: 'Inspector A. Singh' }
        ]
      },
      exciseDepartment: 'Delhi Excise Department - Chanakyapuri Zone',
      complianceOfficer: 'Mr. Vikram Agarwal (F&B Manager)',
      riskLevel: 'low',
      operatingHours: {
        permitted: '11:00 AM - 11:00 PM',
        actual: '11:00 AM - 10:30 PM',
        compliant: true
      }
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      overallCompliance: 85,
      lastAuditDate: '2024-10-08',
      auditType: 'Monthly Internal',
      hasLiquorLicense: true,
      licenseDetails: {
        licenseNumber: 'LIC-HAR-2024-156',
        licenseType: 'FL-2A (Beer Only)',
        issuedBy: 'Haryana Excise & Taxation Department',
        issuedDate: '2024-03-01',
        validUntil: '2025-02-28',
        status: 'active',
        renewalNoticeDate: '2024-11-28', // 3 months notice
        renewalStatus: 'pending',
        annualFee: 85000
      },
      storage: {
        authorizedArea: 'Designated storage room',
        storageCapacity: '300 bottles',
        currentStock: 245,
        temperatureControlled: false,
        securitySystem: 'Basic lock + CCTV',
        lastInspection: '2024-09-15',
        complianceScore: 85
      },
      ageVerification: {
        system: 'Manual ID Check Only',
        staffTrained: 22,
        totalStaff: 27,
        lastTrainingDate: '2024-07-20',
        verificationLogs: {
          totalChecks: 1789,
          rejections: 31,
          rejectionRate: 1.73,
          logsMaintained: true,
          lastLogAudit: '2024-09-20'
        },
        complianceScore: 81
      },
      documentation: {
        purchaseRecords: 'Complete',
        salesRecords: '2 days pending',
        stockRegister: 'Up to date',
        exciseDutyPaid: 'Current',
        lastDocumentationAudit: '2024-09-25',
        complianceScore: 90
      },
      violations: [
        {
          type: 'age_verification',
          description: '5 staff members need age verification training renewal',
          severity: 'medium',
          dateIdentified: '2024-10-05',
          correctionDeadline: '2024-10-20',
          status: 'in_progress',
          riskLevel: 'medium'
        },
        {
          type: 'storage',
          description: 'Temperature monitoring system needs upgrade',
          severity: 'minor',
          dateIdentified: '2024-09-15',
          correctionDeadline: '2024-11-15',
          status: 'pending',
          riskLevel: 'low'
        },
        {
          type: 'documentation',
          description: 'Sales records entry delayed by 2 days',
          severity: 'minor',
          dateIdentified: '2024-10-07',
          correctionDeadline: '2024-10-12',
          status: 'pending',
          riskLevel: 'low'
        }
      ],
      inspections: {
        lastExciseInspection: '2024-07-15',
        nextExciseInspection: '2024-10-15',
        lastPoliceInspection: '2024-08-25',
        inspectionHistory: [
          { date: '2024-07-15', type: 'Excise', result: 'Minor storage issues noted', officer: 'Mr. P.K. Verma' },
          { date: '2024-08-25', type: 'Police', result: 'Training gaps identified', officer: 'SI B. Kumar' }
        ]
      },
      exciseDepartment: 'Haryana Excise & Taxation - Gurugram Sector 14',
      complianceOfficer: 'Ms. Neha Gupta (Assistant Manager)',
      riskLevel: 'medium',
      operatingHours: {
        permitted: '12:00 PM - 10:00 PM',
        actual: '12:00 PM - 9:45 PM',
        compliant: true
      }
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      overallCompliance: 95,
      lastAuditDate: '2024-10-15',
      auditType: 'Monthly Internal + Quarterly External',
      hasLiquorLicense: true,
      licenseDetails: {
        licenseNumber: 'LIC-DEL-2024-234',
        licenseType: 'FL-3 (Beer & Wine)',
        issuedBy: 'Delhi Excise Department',
        issuedDate: '2024-02-20',
        validUntil: '2025-02-19',
        status: 'active',
        renewalNoticeDate: '2024-11-19', // 3 months notice
        renewalStatus: 'pending',
        annualFee: 125000
      },
      storage: {
        authorizedArea: 'Climate-controlled storage room',
        storageCapacity: '400 bottles',
        currentStock: 312,
        temperatureControlled: true,
        securitySystem: 'Advanced CCTV + Access Control',
        lastInspection: '2024-10-01',
        complianceScore: 100
      },
      ageVerification: {
        system: 'Digital ID Scanner + Manual Backup',
        staffTrained: 26,
        totalStaff: 26,
        lastTrainingDate: '2024-10-01',
        verificationLogs: {
          totalChecks: 1923,
          rejections: 15,
          rejectionRate: 0.78,
          logsMaintained: true,
          lastLogAudit: '2024-10-10'
        },
        complianceScore: 100
      },
      documentation: {
        purchaseRecords: 'Complete',
        salesRecords: 'Complete',
        stockRegister: 'Up to date',
        exciseDutyPaid: 'Current',
        lastDocumentationAudit: '2024-10-10',
        complianceScore: 100
      },
      violations: [
        {
          type: 'license_renewal',
          description: 'Renewal application needs to be submitted within 2 weeks',
          severity: 'medium',
          dateIdentified: '2024-10-15',
          correctionDeadline: '2024-10-30',
          status: 'in_progress',
          riskLevel: 'medium'
        }
      ],
      inspections: {
        lastExciseInspection: '2024-09-05',
        nextExciseInspection: '2024-12-05',
        lastPoliceInspection: '2024-09-20',
        inspectionHistory: [
          { date: '2024-09-05', type: 'Excise', result: 'Excellent compliance', officer: 'Mr. S.K. Jain' },
          { date: '2024-09-20', type: 'Police', result: 'No issues found', officer: 'Inspector R. Sharma' }
        ]
      },
      exciseDepartment: 'Delhi Excise Department - Hauz Khas Zone',
      complianceOfficer: 'Mr. Arjun Malhotra (Operations Manager)',
      riskLevel: 'low',
      operatingHours: {
        permitted: '11:00 AM - 11:00 PM',
        actual: '11:00 AM - 10:30 PM',
        compliant: true
      }
    }
  ]

  const chainAverage = liquorComplianceData.reduce((sum, item) => sum + item.overallCompliance, 0) / liquorComplianceData.length
  const locationsWithLicense = liquorComplianceData.filter(item => item.hasLiquorLicense).length
  const locationsWithViolations = liquorComplianceData.filter(item => item.violations.length > 0).length
  const licensesNearExpiry = liquorComplianceData.filter(item => {
    const expiryDate = new Date(item.licenseDetails.validUntil)
    const today = new Date()
    const daysToExpiry = Math.ceil((expiryDate.getTime() - today.getTime()) / (1000 * 3600 * 24))
    return daysToExpiry <= 90 // 3 months
  }).length
  const totalAnnualFees = liquorComplianceData.reduce((sum, item) => sum + item.licenseDetails.annualFee, 0)
  const highRiskLocations = liquorComplianceData.filter(item => item.riskLevel === 'high').length
  const mediumRiskLocations = liquorComplianceData.filter(item => item.riskLevel === 'medium').length

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

  const getLicenseStatusColor = (status: string) => {
    if (status === 'active') return 'text-green-600'
    if (status === 'expiring_soon') return 'text-yellow-600'
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

  const getRenewalStatusColor = (status: string) => {
    if (status === 'completed') return 'text-green-600'
    if (status === 'in_progress') return 'text-yellow-600'
    return 'text-red-600'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Liquor License Compliance
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: QUA_011 | License Renewal, Storage, Age Verification & Documentation
          </p>
        </div>
      </div>

      {/* KPI Definition */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 rounded-lg p-4">
        <h2 className="text-xs font-bold text-black dark:text-white mb-2">KPI Definition</h2>
        <p className="text-xs font-normal text-gray-700 dark:text-gray-300 mb-2">
          <strong>Formula:</strong> % compliance: timely license renewal, authorized alcohol storage, age verification logs, regulatory documentation
        </p>
        <p className="text-xs font-normal text-gray-700 dark:text-gray-300 mb-2">
          <strong>Definition:</strong> Adherence to alcohol licensing and sales regulations.
        </p>
        <p className="text-xs font-normal text-gray-700 dark:text-gray-300 mb-2">
          <strong>Why it matters:</strong> 100% adherence required; violation risks license suspension or closure.
        </p>
        <p className="text-xs font-normal text-gray-700 dark:text-gray-300 mb-2">
          <strong>Target:</strong> 100% | <strong>Warning:</strong> At least 3 months notice before renewal | <strong>Critical:</strong> License expired or age verification gaps found
        </p>
        <p className="text-xs font-normal text-gray-700 dark:text-gray-300">
          <strong>India-specific:</strong> Alcohol licenses state-specific; vary by location; maintain secure storage; check age at point of sale
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
          <h3 className="text-xs font-normal text-gray-500 mb-1">Licensed Locations</h3>
          <p className="text-xs font-bold text-green-600">
            {locationsWithLicense}/3 locations
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 border rounded-lg p-4">
          <h3 className="text-xs font-normal text-gray-500 mb-1">Renewals Due</h3>
          <p className="text-xs font-bold text-yellow-600">
            {licensesNearExpiry} within 3 months
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 border rounded-lg p-4">
          <h3 className="text-xs font-normal text-gray-500 mb-1">Annual License Fees</h3>
          <p className="text-xs font-bold text-gray-900 dark:text-gray-100">
            ₹{totalAnnualFees.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Location Analysis */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {liquorComplianceData.map((location, index) => (
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
              {/* License Details */}
              <div>
                <h4 className="text-xs font-bold text-black dark:text-white mb-2">License Details</h4>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Number:</span>
                    <span className="font-normal">{location.licenseDetails.licenseNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Type:</span>
                    <span className="font-normal">{location.licenseDetails.licenseType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Valid Until:</span>
                    <span className="font-bold text-blue-600">{location.licenseDetails.validUntil}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <span className={`font-bold capitalize ${getLicenseStatusColor(location.licenseDetails.status)}`}>
                      {location.licenseDetails.status}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Renewal:</span>
                    <span className={`font-bold capitalize ${getRenewalStatusColor(location.licenseDetails.renewalStatus)}`}>
                      {location.licenseDetails.renewalStatus.replace('_', ' ')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Storage Compliance */}
              <div>
                <h4 className="text-xs font-bold text-black dark:text-white mb-2">Storage Compliance</h4>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Capacity:</span>
                    <span className="font-normal">{location.storage.storageCapacity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Current Stock:</span>
                    <span className="font-normal">{location.storage.currentStock} bottles</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Temperature Control:</span>
                    <span className={`font-normal ${location.storage.temperatureControlled ? 'text-green-600' : 'text-red-600'}`}>
                      {location.storage.temperatureControlled ? 'Yes' : 'No'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Security:</span>
                    <span className="font-normal">{location.storage.securitySystem}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Score:</span>
                    <span className={`font-bold ${getStatusColor(location.storage.complianceScore)}`}>
                      {location.storage.complianceScore}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Age Verification */}
              <div>
                <h4 className="text-xs font-bold text-black dark:text-white mb-2">Age Verification</h4>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-600">System:</span>
                    <span className="font-normal">{location.ageVerification.system}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Staff Trained:</span>
                    <span className="font-normal">{location.ageVerification.staffTrained}/{location.ageVerification.totalStaff}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rejection Rate:</span>
                    <span className="font-normal">{location.ageVerification.verificationLogs.rejectionRate}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Score:</span>
                    <span className={`font-bold ${getStatusColor(location.ageVerification.complianceScore)}`}>
                      {location.ageVerification.complianceScore}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Documentation */}
              <div>
                <h4 className="text-xs font-bold text-black dark:text-white mb-2">Documentation</h4>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Purchase Records:</span>
                    <span className={`font-normal ${location.documentation.purchaseRecords === 'Complete' ? 'text-green-600' : 'text-red-600'}`}>
                      {location.documentation.purchaseRecords}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sales Records:</span>
                    <span className={`font-normal ${location.documentation.salesRecords === 'Complete' ? 'text-green-600' : 'text-yellow-600'}`}>
                      {location.documentation.salesRecords}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Stock Register:</span>
                    <span className={`font-normal ${location.documentation.stockRegister === 'Up to date' ? 'text-green-600' : 'text-red-600'}`}>
                      {location.documentation.stockRegister}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Score:</span>
                    <span className={`font-bold ${getStatusColor(location.documentation.complianceScore)}`}>
                      {location.documentation.complianceScore}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Current Issues */}
              <div>
                <h4 className="text-xs font-bold text-black dark:text-white mb-2">Current Issues</h4>
                {location.violations.length > 0 ? (
                  <div className="space-y-1">
                    {location.violations.map((violation, vIndex) => (
                      <div key={vIndex} className="text-xs">
                        <div className="flex justify-between">
                          <span className="text-gray-600 capitalize">{violation.type.replace('_', ' ')}:</span>
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

              {/* Risk Level and Operating Hours */}
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-xs text-gray-500">Risk Level:</span>
                  <p className={`text-xs font-bold capitalize ${getRiskLevelColor(location.riskLevel)}`}>
                    {location.riskLevel}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-gray-500">Operating Hours:</span>
                  <p className={`text-xs font-bold ${location.operatingHours.compliant ? 'text-green-600' : 'text-red-600'}`}>
                    {location.operatingHours.compliant ? 'Compliant' : 'Non-compliant'}
                  </p>
                </div>
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
                <span className="text-xs text-gray-500">Next Excise Inspection:</span>
                <p className="text-xs font-bold text-blue-600">{location.inspections.nextExciseInspection}</p>
              </div>

              {/* Annual Fee */}
              <div>
                <span className="text-xs text-gray-500">Annual License Fee:</span>
                <p className="text-xs font-bold text-gray-900 dark:text-gray-100">
                  ₹{location.licenseDetails.annualFee.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* License Renewal Timeline */}
      <div className="bg-white dark:bg-gray-800 border rounded-lg p-4">
        <h3 className="text-xs font-bold text-black dark:text-white mb-3">
          License Renewal Timeline
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {liquorComplianceData.map((location, index) => (
            <div key={index}>
              <h4 className="text-xs font-bold text-gray-900 dark:text-gray-100 mb-2">
                {location.restaurant.name}
              </h4>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-600">Current Expiry:</span>
                  <span className="font-bold text-blue-600">{location.licenseDetails.validUntil}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Renewal Notice:</span>
                  <span className="font-normal">{location.licenseDetails.renewalNoticeDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span className={`font-bold capitalize ${getRenewalStatusColor(location.licenseDetails.renewalStatus)}`}>
                    {location.licenseDetails.renewalStatus.replace('_', ' ')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Department:</span>
                  <span className="font-normal text-gray-700 dark:text-gray-300">
                    {location.licenseDetails.issuedBy.split(' ')[0]}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Inspection History */}
      <div className="bg-white dark:bg-gray-800 border rounded-lg p-4">
        <h3 className="text-xs font-bold text-black dark:text-white mb-3">
          Recent Inspection History
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {liquorComplianceData.map((location, index) => (
            <div key={index}>
              <h4 className="text-xs font-bold text-gray-900 dark:text-gray-100 mb-2">
                {location.restaurant.name}
              </h4>
              <div className="space-y-2">
                {location.inspections.inspectionHistory.map((inspection, iIndex) => (
                  <div key={iIndex} className="text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-600">{inspection.date}:</span>
                      <span className="font-normal">{inspection.type}</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{inspection.result}</p>
                    <p className="text-gray-500">Officer: {inspection.officer}</p>
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
              <li>• All locations have valid active licenses</li>
              <li>• Chanakyapuri: 100% compliance across all areas</li>
              <li>• Strong age verification processes in place</li>
              <li>• Regular training programs for staff</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-amber-800 dark:text-amber-300 mb-2">Action Items</h4>
            <ul className="text-gray-700 dark:text-gray-300 space-y-1">
              <li>• All locations: Submit renewal applications before deadlines</li>
              <li>• Gurugram: Complete staff age verification training</li>
              <li>• Gurugram: Upgrade temperature monitoring system</li>
              <li>• Shahpur Jat: Submit renewal application by Oct 30</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}