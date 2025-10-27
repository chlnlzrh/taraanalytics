import { RESTAURANTS } from '@/lib/restaurant-data'

export default function TemperatureLogComplianceKPI() {
  const tempData = [
    {
      restaurant: RESTAURANTS[0],
      complianceRate: 96,
      totalLogs: 1440,
      compliantLogs: 1382,
      violations: 58,
      equipment: {
        fridges: { monitored: 8, compliant: 7 },
        freezers: { monitored: 4, compliant: 4 },
        hotHolding: { monitored: 6, compliant: 6 },
        coldHolding: { monitored: 5, compliant: 5 }
      },
      lastAudit: '2024-10-20'
    },
    {
      restaurant: RESTAURANTS[1],
      complianceRate: 93,
      totalLogs: 1440,
      compliantLogs: 1339,
      violations: 101,
      equipment: {
        fridges: { monitored: 6, compliant: 5 },
        freezers: { monitored: 3, compliant: 3 },
        hotHolding: { monitored: 5, compliant: 5 },
        coldHolding: { monitored: 4, compliant: 4 }
      },
      lastAudit: '2024-10-18'
    },
    {
      restaurant: RESTAURANTS[2],
      complianceRate: 89,
      totalLogs: 1440,
      compliantLogs: 1282,
      violations: 158,
      equipment: {
        fridges: { monitored: 5, compliant: 4 },
        freezers: { monitored: 2, compliant: 2 },
        hotHolding: { monitored: 4, compliant: 3 },
        coldHolding: { monitored: 3, compliant: 3 }
      },
      lastAudit: '2024-10-16'
    }
  ]

  const getComplianceColor = (rate: number) => {
    if (rate >= 95) return 'text-green-600'
    if (rate >= 90) return 'text-yellow-600'
    return 'text-red-600'
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Temperature Log Compliance %
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            QUA_004 - Quality & Food Safety | Food Safety & Hygiene
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tempData.map((location, index) => (
          <div key={index} className="border rounded-lg p-4">
            <h3 className="text-xs font-bold mb-2">{location.restaurant.name}</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span>Total Logs:</span>
                <span>{location.totalLogs.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Compliant Logs:</span>
                <span>{location.compliantLogs.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Violations:</span>
                <span>{location.violations}</span>
              </div>
              <div className="text-xs font-medium mt-2 mb-1">Equipment Compliance:</div>
              <div className="flex justify-between text-xs">
                <span>Fridges:</span>
                <span>{location.equipment.fridges.compliant}/{location.equipment.fridges.monitored}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Freezers:</span>
                <span>{location.equipment.freezers.compliant}/{location.equipment.freezers.monitored}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Hot Holding:</span>
                <span>{location.equipment.hotHolding.compliant}/{location.equipment.hotHolding.monitored}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Cold Holding:</span>
                <span>{location.equipment.coldHolding.compliant}/{location.equipment.coldHolding.monitored}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Last Audit:</span>
                <span>{location.lastAudit}</span>
              </div>
              <div className="flex justify-between text-xs font-bold border-t pt-2">
                <span>Compliance Rate:</span>
                <span className={getComplianceColor(location.complianceRate)}>{location.complianceRate}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}