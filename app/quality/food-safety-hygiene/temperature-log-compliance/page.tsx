import { RESTAURANTS } from '@/lib/restaurant-data'

export default function TemperatureLogComplianceKPI() {
  // QUA_003 Temperature Log Compliance % - Exact specifications from restaurant_kpi_metrics_127.txt
  const temperatureData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      compliancePercentage: 98.5,
      reportDate: '2024-10-27',
      reportWeek: 'Week 43, 2024',
      requiredChecks: 168, // 24 checks/day × 7 days
      completedChecks: 165,
      missedChecks: 3,
      checkTypes: {
        fridgeWalk: { required: 28, completed: 28, compliance: 100 },
        fridgeReach: { required: 28, completed: 28, compliance: 100 },
        freezer: { required: 28, completed: 28, compliance: 100 },
        hotHold: { required: 28, completed: 27, compliance: 96.4 },
        cookedItems: { required: 28, completed: 26, compliance: 92.9 },
        deliveryReceiving: { required: 28, completed: 28, compliance: 100 }
      },
      violations: [
        {
          date: '2024-10-24',
          time: '14:30',
          equipment: 'Hot hold station',
          temperatureFound: '58°C',
          requiredRange: '63-74°C',
          action: 'Food reheated to 72°C, staff retrained',
          severity: 'medium'
        }
      ],
      equipmentIssues: 1,
      powerOutages: 0,
      staffTrainingRequired: 2,
      status: 'excellent',
      managerSignoff: 'Rajesh Verma',
      nextReview: '2024-11-03',
      monsoonRisk: 'Low - backup generator functional'
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      compliancePercentage: 94.0,
      reportDate: '2024-10-27',
      reportWeek: 'Week 43, 2024',
      requiredChecks: 168,
      completedChecks: 158,
      missedChecks: 10,
      checkTypes: {
        fridgeWalk: { required: 28, completed: 26, compliance: 92.9 },
        fridgeReach: { required: 28, completed: 27, compliance: 96.4 },
        freezer: { required: 28, completed: 28, compliance: 100 },
        hotHold: { required: 28, completed: 25, compliance: 89.3 },
        cookedItems: { required: 28, completed: 24, compliance: 85.7 },
        deliveryReceiving: { required: 28, completed: 28, compliance: 100 }
      },
      violations: [
        {
          date: '2024-10-23',
          time: '11:15',
          equipment: 'Walk-in fridge',
          temperatureFound: '7°C',
          requiredRange: '0-4°C',
          action: 'Technician called, items moved to backup fridge',
          severity: 'high'
        },
        {
          date: '2024-10-25',
          time: '16:45',
          equipment: 'Cooked chicken',
          temperatureFound: '55°C',
          requiredRange: '>63°C',
          action: 'Item discarded, fresh batch prepared',
          severity: 'high'
        }
      ],
      equipmentIssues: 2,
      powerOutages: 1, // Brief outage on 23rd
      staffTrainingRequired: 4,
      status: 'warning',
      managerSignoff: 'Priya Singh',
      nextReview: '2024-11-03',
      monsoonRisk: 'Medium - generator needs service'
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      compliancePercentage: 99.4,
      reportDate: '2024-10-27',
      reportWeek: 'Week 43, 2024',
      requiredChecks: 168,
      completedChecks: 167,
      missedChecks: 1,
      checkTypes: {
        fridgeWalk: { required: 28, completed: 28, compliance: 100 },
        fridgeReach: { required: 28, completed: 28, compliance: 100 },
        freezer: { required: 28, completed: 28, compliance: 100 },
        hotHold: { required: 28, completed: 28, compliance: 100 },
        cookedItems: { required: 28, completed: 27, compliance: 96.4 },
        deliveryReceiving: { required: 28, completed: 28, compliance: 100 }
      },
      violations: [],
      equipmentIssues: 0,
      powerOutages: 0,
      staffTrainingRequired: 0,
      status: 'excellent',
      managerSignoff: 'Amit Kumar',
      nextReview: '2024-11-03',
      monsoonRisk: 'Very Low - excellent infrastructure'
    }
  ]

  const chainAverageCompliance = temperatureData.reduce((sum, item) => sum + item.compliancePercentage, 0) / temperatureData.length
  const compliantLocations = temperatureData.filter(item => item.compliancePercentage >= 95).length
  const totalViolations = temperatureData.reduce((sum, item) => sum + item.violations.length, 0)
  const totalMissedChecks = temperatureData.reduce((sum, item) => sum + item.missedChecks, 0)
  const locationsWithIssues = temperatureData.filter(item => item.equipmentIssues > 0 || item.powerOutages > 0).length

  const getComplianceColor = (percentage: number) => {
    if (percentage >= 98) return 'text-green-600'
    if (percentage >= 95) return 'text-blue-600' 
    if (percentage >= 90) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getComplianceBg = (percentage: number) => {
    if (percentage >= 98) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (percentage >= 95) return 'bg-blue-50 dark:bg-blue-900/20 border-blue-200'
    if (percentage >= 90) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getComplianceIcon = (percentage: number) => {
    if (percentage >= 98) return '🟢'
    if (percentage >= 95) return '🔵'
    if (percentage >= 90) return '⚠️'
    return '🚨'
  }

  const getSeverityColor = (severity: string) => {
    if (severity === 'high') return 'text-red-600'
    if (severity === 'medium') return 'text-yellow-600'
    return 'text-blue-600'
  }

  const getRiskColor = (risk: string) => {
    if (risk.includes('Very Low')) return 'text-green-600'
    if (risk.includes('Low')) return 'text-blue-600'
    if (risk.includes('Medium')) return 'text-yellow-600'
    return 'text-red-600'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Temperature Log Compliance %
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: QUA_003 | Critical Food Safety Temperature Monitoring
          </p>
        </div>
      </div>

      {/* KPI Definition */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 rounded-lg p-4">
        <h2 className="text-xs font-bold text-black dark:text-white mb-2">KPI Definition</h2>
        <p className="text-xs font-normal text-gray-700 dark:text-gray-300 mb-2">
          <strong>Formula:</strong> (Required food temperature checks completed & documented ÷ Required checks) × 100
        </p>
        <p className="text-xs font-normal text-gray-700 dark:text-gray-300 mb-2">
          <strong>Definition:</strong> Percentage of required food temperature checks (fridges, hot holds, cooked items) completed on time. FSSAI/food safety requirement.
        </p>
        <p className="text-xs font-normal text-gray-700 dark:text-gray-300 mb-2">
          <strong>Why it matters:</strong> Target 100%; any gap is audit risk and food safety liability.
        </p>
        <p className="text-xs font-normal text-gray-700 dark:text-gray-300 mb-2">
          <strong>Target:</strong> 100% | <strong>Warning:</strong> 95–100% | <strong>Critical:</strong> <95%
        </p>
        <p className="text-xs font-normal text-gray-700 dark:text-gray-300">
          <strong>India-specific:</strong> Monsoon power cuts may spike unsafe temps; ensure backup genset for fridges
        </p>
      </div>

      {/* Chain Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="bg-white dark:bg-gray-800 border rounded-lg p-4">
          <h3 className="text-xs font-normal text-gray-500 mb-1">Chain Avg Compliance</h3>
          <p className={`text-xs font-bold ${getComplianceColor(chainAverageCompliance)}`}>
            {chainAverageCompliance.toFixed(1)}%
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 border rounded-lg p-4">
          <h3 className="text-xs font-normal text-gray-500 mb-1">Compliant Locations</h3>
          <p className="text-xs font-bold text-green-600">
            {compliantLocations}/3 (≥95%)
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 border rounded-lg p-4">
          <h3 className="text-xs font-normal text-gray-500 mb-1">Total Missed Checks</h3>
          <p className="text-xs font-bold text-red-600">
            {totalMissedChecks}
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 border rounded-lg p-4">
          <h3 className="text-xs font-normal text-gray-500 mb-1">Total Violations</h3>
          <p className="text-xs font-bold text-yellow-600">
            {totalViolations}
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 border rounded-lg p-4">
          <h3 className="text-xs font-normal text-gray-500 mb-1">Locations w/ Issues</h3>
          <p className="text-xs font-bold text-blue-600">
            {locationsWithIssues}/3
          </p>
        </div>
      </div>

      {/* Location Analysis */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {temperatureData.map((location, index) => (
          <div key={index} className={`border rounded-lg p-4 ${getComplianceBg(location.compliancePercentage)}`}>
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
                  <span className="text-sm">{getComplianceIcon(location.compliancePercentage)}</span>
                  <span className={`text-xs font-bold ${getComplianceColor(location.compliancePercentage)}`}>
                    {location.compliancePercentage}%
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {/* Checks Summary */}
              <div>
                <h4 className="text-xs font-bold text-black dark:text-white mb-2">Weekly Checks Summary</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-gray-500">Required:</span>
                    <p className="font-bold">{location.requiredChecks}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Completed:</span>
                    <p className="font-bold text-green-600">{location.completedChecks}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Missed:</span>
                    <p className="font-bold text-red-600">{location.missedChecks}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Manager:</span>
                    <p className="font-normal">{location.managerSignoff}</p>
                  </div>
                </div>
              </div>

              {/* Check Type Breakdown */}
              <div>
                <h4 className="text-xs font-bold text-black dark:text-white mb-2">Check Type Breakdown</h4>
                <div className="space-y-1">
                  {Object.entries(location.checkTypes).map(([type, data]) => (
                    <div key={type} className="flex justify-between">
                      <span className="text-xs text-gray-600 capitalize">
                        {type.replace(/([A-Z])/g, ' $1').toLowerCase()}:
                      </span>
                      <span className={`text-xs font-bold ${getComplianceColor(data.compliance)}`}>
                        {data.completed}/{data.required} ({data.compliance}%)
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Violations */}
              <div>
                <h4 className="text-xs font-bold text-black dark:text-white mb-2">Temperature Violations</h4>
                {location.violations.length > 0 ? (
                  <div className="space-y-2">
                    {location.violations.map((violation, vIndex) => (
                      <div key={vIndex} className="text-xs border-l-2 border-red-300 pl-2">
                        <div className="flex justify-between">
                          <span className="font-bold">{violation.date} {violation.time}</span>
                          <span className={`capitalize font-bold ${getSeverityColor(violation.severity)}`}>
                            {violation.severity}
                          </span>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 mb-1">
                          <strong>{violation.equipment}:</strong> {violation.temperatureFound} 
                          (req: {violation.requiredRange})
                        </p>
                        <p className="text-green-600 text-xs">
                          <strong>Action:</strong> {violation.action}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-green-600">🎉 No violations this week!</p>
                )}
              </div>

              {/* Equipment & Infrastructure */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-gray-500">Equipment Issues:</span>
                  <p className={`font-bold ${location.equipmentIssues > 0 ? 'text-red-600' : 'text-green-600'}`}>
                    {location.equipmentIssues}
                  </p>
                </div>
                <div>
                  <span className="text-gray-500">Power Outages:</span>
                  <p className={`font-bold ${location.powerOutages > 0 ? 'text-red-600' : 'text-green-600'}`}>
                    {location.powerOutages}
                  </p>
                </div>
              </div>

              {/* Monsoon Risk Assessment */}
              <div>
                <span className="text-xs text-gray-500">Monsoon Risk:</span>
                <p className={`text-xs font-bold ${getRiskColor(location.monsoonRisk)}`}>
                  {location.monsoonRisk}
                </p>
              </div>

              {/* Training Requirements */}
              {location.staffTrainingRequired > 0 && (
                <div className="bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-300 rounded p-2">
                  <span className="text-xs font-bold text-yellow-800 dark:text-yellow-300">
                    Training Required: {location.staffTrainingRequired} staff members
                  </span>
                </div>
              )}

              {/* Next Review */}
              <div>
                <span className="text-xs text-gray-500">Next Review:</span>
                <p className="text-xs font-bold text-blue-600">{location.nextReview}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Critical Alert Summary */}
      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 rounded-lg p-4">
        <h3 className="text-xs font-bold text-black dark:text-white mb-3">
          🚨 Critical Alerts & Actions Required
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div>
            <h4 className="font-bold text-red-800 dark:text-red-300 mb-2">Immediate Actions</h4>
            <ul className="text-gray-700 dark:text-gray-300 space-y-1">
              <li>• Gurugram: Walk-in fridge maintenance scheduled for 28th Oct</li>
              <li>• Gurugram: Generator service appointment booked</li>
              <li>• 6 staff members require temperature logging refresher training</li>
              <li>• Hot hold procedures review needed at all locations</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-red-800 dark:text-red-300 mb-2">Preventive Measures</h4>
            <ul className="text-gray-700 dark:text-gray-300 space-y-1">
              <li>• Implement digital temperature monitoring system</li>
              <li>• Create backup power contingency plans</li>
              <li>• Schedule quarterly equipment maintenance</li>
              <li>• Develop real-time alert system for violations</li>
            </ul>
          </div>
        </div>
      </div>

      {/* FSSAI Compliance Notes */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 rounded-lg p-4">
        <h3 className="text-xs font-bold text-black dark:text-white mb-3">
          📋 FSSAI Compliance Requirements
        </h3>
        <div className="text-xs text-gray-700 dark:text-gray-300 space-y-2">
          <p><strong>Mandatory Temperature Ranges:</strong></p>
          <ul className="ml-4 space-y-1">
            <li>• Refrigerated items: 0-4°C (32-39°F)</li>
            <li>• Frozen items: -18°C (0°F) or below</li>
            <li>• Hot holding: 63-74°C (145-165°F)</li>
            <li>• Cooked food service: >63°C (145°F)</li>
          </ul>
          <p><strong>Documentation Requirements:</strong> All temperature checks must be recorded with date, time, temperature, and staff signature. Records must be maintained for 1 year minimum.</p>
          <p><strong>Violation Response:</strong> Any temperature violation must be immediately corrected with documented corrective action. Food outside safe temperature range must be discarded.</p>
        </div>
      </div>
    </div>
  )
}