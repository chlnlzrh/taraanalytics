import { RESTAURANTS } from '@/lib/restaurant-data'

export default function HygieneAuditScoreKPI() {
  const auditData = [
    {
      restaurant: RESTAURANTS[0],
      overallScore: 92,
      auditDate: '2024-10-15',
      categories: {
        kitchenCleanliness: 94,
        foodStorage: 91,
        personalHygiene: 93,
        wasteManagement: 89,
        pestControl: 95
      },
      inspector: 'FSSAI Inspector',
      violations: 2,
      correctionsDue: '2024-10-22'
    },
    {
      restaurant: RESTAURANTS[1],
      overallScore: 88,
      auditDate: '2024-10-12',
      categories: {
        kitchenCleanliness: 87,
        foodStorage: 89,
        personalHygiene: 91,
        wasteManagement: 85,
        pestControl: 88
      },
      inspector: 'FSSAI Inspector',
      violations: 4,
      correctionsDue: '2024-10-19'
    },
    {
      restaurant: RESTAURANTS[2],
      overallScore: 84,
      auditDate: '2024-10-10',
      categories: {
        kitchenCleanliness: 82,
        foodStorage: 86,
        personalHygiene: 87,
        wasteManagement: 81,
        pestControl: 84
      },
      inspector: 'FSSAI Inspector',
      violations: 6,
      correctionsDue: '2024-10-17'
    }
  ]

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600'
    if (score >= 80) return 'text-yellow-600'
    return 'text-red-600'
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Hygiene Audit Score %
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            QUA_003 - Quality & Food Safety | Food Safety & Hygiene
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {auditData.map((location, index) => (
          <div key={index} className="border rounded-lg p-4">
            <h3 className="text-xs font-bold mb-2">{location.restaurant.name}</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span>Audit Date:</span>
                <span>{location.auditDate}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Kitchen Cleanliness:</span>
                <span>{location.categories.kitchenCleanliness}%</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Food Storage:</span>
                <span>{location.categories.foodStorage}%</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Personal Hygiene:</span>
                <span>{location.categories.personalHygiene}%</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Waste Management:</span>
                <span>{location.categories.wasteManagement}%</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Pest Control:</span>
                <span>{location.categories.pestControl}%</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Violations:</span>
                <span>{location.violations}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Corrections Due:</span>
                <span>{location.correctionsDue}</span>
              </div>
              <div className="flex justify-between text-xs font-bold border-t pt-2">
                <span>Overall Score:</span>
                <span className={getScoreColor(location.overallScore)}>{location.overallScore}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}