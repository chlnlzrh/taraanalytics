import { RESTAURANTS } from '@/lib/restaurant-data'

export default function FoodSafetyIncidentsKPI() {
  // QUA_004 Food Safety Incidents - Exact specifications from restaurant_kpi_metrics_127.txt
  const incidentsData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      monthlyIncidents: 0,
      ytdIncidents: 0,
      lastIncidentDate: null,
      investigationStatus: 'N/A',
      incidents: [],
      riskLevel: 'low',
      preventiveMeasures: [
        'Daily temperature monitoring',
        'Regular staff hygiene training',
        'HACCP compliance checks'
      ]
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      monthlyIncidents: 1,
      ytdIncidents: 2,
      lastIncidentDate: '2024-09-15',
      investigationStatus: 'Closed - Root cause identified',
      incidents: [
        {
          date: '2024-09-15',
          type: 'Customer illness complaint',
          description: 'Customer reported mild food poisoning after consuming chicken burger',
          rootCause: 'Temperature holding violation during peak hours',
          actionTaken: 'Retrained staff on hot holding procedures',
          status: 'Resolved',
          reportedBy: 'Customer hotline',
          investigator: 'Manager - Rajesh Kumar'
        },
        {
          date: '2024-07-22',
          type: 'Internal food contamination',
          description: 'Foreign object found in salad preparation',
          rootCause: 'Improper vegetable washing procedure',
          actionTaken: 'Enhanced washing SOP, additional training',
          status: 'Resolved',
          reportedBy: 'Kitchen staff',
          investigator: 'Area Manager - Priya Sharma'
        }
      ],
      riskLevel: 'medium',
      preventiveMeasures: [
        'Enhanced temperature monitoring',
        'Additional HACCP training',
        'Monthly safety refresher sessions'
      ]
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      monthlyIncidents: 0,
      ytdIncidents: 1,
      lastIncidentDate: '2024-06-10',
      investigationStatus: 'Closed - Preventive measures implemented',
      incidents: [
        {
          date: '2024-06-10',
          type: 'Near miss - temperature violation',
          description: 'Refrigerator temperature recorded above safe limits',
          rootCause: 'Equipment malfunction during power fluctuation',
          actionTaken: 'Refrigerator serviced, backup temperature alarms installed',
          status: 'Resolved',
          reportedBy: 'Automatic monitoring system',
          investigator: 'Facility Manager - Sunita Verma'
        }
      ],
      riskLevel: 'low',
      preventiveMeasures: [
        'Automated temperature monitoring',
        'Preventive maintenance schedule',
        'Power backup systems'
      ]
    }
  ]

  const totalIncidentsThisMonth = incidentsData.reduce((sum, item) => sum + item.monthlyIncidents, 0)
  const totalIncidentsYTD = incidentsData.reduce((sum, item) => sum + item.ytdIncidents, 0)
  const locationsWithIncidents = incidentsData.filter(item => item.monthlyIncidents > 0).length
  const zeroIncidentLocations = incidentsData.filter(item => item.monthlyIncidents === 0).length

  const getRiskColor = (riskLevel: string) => {
    switch (riskLevel) {
      case 'low': return 'text-green-600'
      case 'medium': return 'text-yellow-600'
      case 'high': return 'text-red-600'
      default: return 'text-gray-600'
    }
  }

  const getRiskBg = (riskLevel: string) => {
    switch (riskLevel) {
      case 'low': return 'bg-green-50 dark:bg-green-900/20 border-green-200'
      case 'medium': return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
      case 'high': return 'bg-red-50 dark:bg-red-900/20 border-red-200'
      default: return 'bg-gray-50 dark:bg-gray-900/20 border-gray-200'
    }
  }

  const getIncidentStatusColor = (incidents: number) => {
    if (incidents === 0) return 'text-green-600'
    if (incidents === 1) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getIncidentStatusIcon = (incidents: number) => {
    if (incidents === 0) return '✅'
    if (incidents === 1) return '⚠️'
    return '🚨'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Food Safety Incidents
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: QUA_004 | Zero-Tolerance Food Safety Incident Tracking
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
            <strong>Formula:</strong> Number of foodborne illness complaints or incidents per month
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Foodborne illness complaints, customer illness reports, or food contamination discoveries.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> Zero-tolerance policy. Single incident must trigger investigation, root cause analysis, and corrective action.
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
            <div className="text-xs font-normal text-green-600">0 incidents</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">1 incident</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&gt;1 incident</div>
          </div>
        </div>
      </div>

      {/* Chain Summary */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          📈 Chain Food Safety Incidents Summary
        </h2>
        <div className="grid grid-cols-4 gap-6">
          <div>
            <span className="text-xs font-normal text-gray-500">Current Month Total</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getIncidentStatusColor(totalIncidentsThisMonth)}`}>
                {totalIncidentsThisMonth} incidents
              </span>
              <span>{getIncidentStatusIcon(totalIncidentsThisMonth)}</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">YTD Total</span>
            <div className="text-xs font-normal text-orange-600">
              {totalIncidentsYTD} incidents
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Zero-Incident Locations</span>
            <div className="text-xs font-normal text-green-600">
              {zeroIncidentLocations}/3 locations
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Locations at Risk</span>
            <div className="text-xs font-normal text-red-600">
              {locationsWithIncidents}/3 locations
            </div>
          </div>
        </div>
      </div>

      {/* Location Food Safety Performance */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Food Safety Incident Status
        </h2>
        <div className="space-y-3">
          {incidentsData
            .sort((a, b) => a.monthlyIncidents - b.monthlyIncidents)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getRiskBg(location.riskLevel)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span>{getIncidentStatusIcon(location.monthlyIncidents)}</span>
                </div>
                <div className="text-right">
                  <div className={`text-xs font-bold ${getIncidentStatusColor(location.monthlyIncidents)}`}>
                    {location.monthlyIncidents} incidents
                  </div>
                  <div className="text-xs font-normal text-gray-500">
                    This Month
                  </div>
                </div>
              </div>
              
              {/* Incident stats */}
              <div className="grid grid-cols-3 gap-4 mb-3">
                <div>
                  <span className="text-xs text-gray-500">YTD Incidents:</span>
                  <div className="text-xs font-normal text-black dark:text-white">{location.ytdIncidents}</div>
                </div>
                <div>
                  <span className="text-xs text-gray-500">Risk Level:</span>
                  <div className={`text-xs font-normal ${getRiskColor(location.riskLevel)}`}>
                    {location.riskLevel.toUpperCase()}
                  </div>
                </div>
                <div>
                  <span className="text-xs text-gray-500">Last Incident:</span>
                  <div className="text-xs font-normal text-black dark:text-white">
                    {location.lastIncidentDate || 'None'}
                  </div>
                </div>
              </div>

              {/* Investigation status */}
              {location.lastIncidentDate && (
                <div className="mb-3">
                  <span className="text-xs text-gray-500">Investigation Status:</span>
                  <div className="text-xs font-normal text-black dark:text-white">{location.investigationStatus}</div>
                </div>
              )}

              {/* Preventive measures */}
              <div className="mb-3">
                <h4 className="text-xs font-bold text-gray-600 mb-2">Preventive Measures</h4>
                <div className="space-y-1">
                  {location.preventiveMeasures.map((measure, idx) => (
                    <div key={idx} className="text-xs text-gray-600">• {measure}</div>
                  ))}
                </div>
              </div>

              {/* Incident details if any */}
              {location.incidents.length > 0 && (
                <div className="mt-3 pt-2 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="text-xs font-bold text-gray-600 mb-2">Recent Incidents</h4>
                  <div className="space-y-2">
                    {location.incidents.slice(0, 2).map((incident, idx) => (
                      <div key={idx} className="bg-white dark:bg-gray-800 p-2 rounded border">
                        <div className="flex justify-between items-start mb-1">
                          <span className="text-xs font-bold text-red-600">{incident.date}</span>
                          <span className={`text-xs px-1 py-0.5 rounded ${incident.status === 'Resolved' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                            {incident.status}
                          </span>
                        </div>
                        <div className="text-xs text-gray-600 mb-1">
                          <strong>Type:</strong> {incident.type}
                        </div>
                        <div className="text-xs text-gray-600 mb-1">
                          <strong>Description:</strong> {incident.description}
                        </div>
                        <div className="text-xs text-gray-600 mb-1">
                          <strong>Root Cause:</strong> {incident.rootCause}
                        </div>
                        <div className="text-xs text-green-600">
                          <strong>Action Taken:</strong> {incident.actionTaken}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Incident Investigation Tracker */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🔍 Incident Investigation Tracker
        </h2>
        <div className="space-y-2">
          <div className="grid grid-cols-6 gap-4 text-xs font-bold bg-gray-100 dark:bg-gray-800 p-2 rounded">
            <div>Date</div>
            <div>Location</div>
            <div>Type</div>
            <div>Status</div>
            <div>Investigator</div>
            <div>Days Open</div>
          </div>
          {incidentsData.flatMap(location => 
            location.incidents.map(incident => ({
              ...incident,
              locationName: location.restaurant.shortName,
              daysOpen: incident.status === 'Resolved' ? 0 : Math.ceil((new Date().getTime() - new Date(incident.date).getTime()) / (1000 * 60 * 60 * 24))
            }))
          ).map((incident, idx) => (
            <div key={idx} className="grid grid-cols-6 gap-4 text-xs p-2 bg-gray-50 dark:bg-gray-800/50 rounded">
              <div className="font-normal text-black dark:text-white">{incident.date}</div>
              <div className="font-normal text-black dark:text-white">{incident.locationName}</div>
              <div className="font-normal text-black dark:text-white">{incident.type}</div>
              <div className={`font-normal ${incident.status === 'Resolved' ? 'text-green-600' : 'text-yellow-600'}`}>
                {incident.status}
              </div>
              <div className="font-normal text-black dark:text-white">{incident.investigator}</div>
              <div className={`font-normal ${incident.daysOpen === 0 ? 'text-green-600' : incident.daysOpen > 7 ? 'text-red-600' : 'text-yellow-600'}`}>
                {incident.daysOpen === 0 ? 'Closed' : `${incident.daysOpen} days`}
              </div>
            </div>
          ))}
          {incidentsData.every(location => location.incidents.length === 0) && (
            <div className="text-center text-xs text-green-600 py-4">
              ✅ No incidents recorded - Excellent food safety performance!
            </div>
          )}
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
              <li>• Complaint log, customer feedback</li>
              <li>• Health department notification</li>
              <li>• Internal incident reporting system</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Daily (monitor continuously)</li>
              <li>• Drill down: by incident type, by location, by dish/ingredient, by root cause</li>
              <li>• Immediate escalation for any incidents</li>
            </ul>
          </div>
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