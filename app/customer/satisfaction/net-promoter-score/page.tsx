import { RESTAURANTS } from '@/lib/restaurant-data'

export default function NetPromoterScoreKPI() {
  const npsData = [
    {
      restaurant: RESTAURANTS[0],
      totalResponses: 312,
      promoters: 189,
      passives: 98,
      detractors: 25,
      npsScore: 53
    },
    {
      restaurant: RESTAURANTS[1],
      totalResponses: 256,
      promoters: 138,
      passives: 87,
      detractors: 31,
      npsScore: 42
    },
    {
      restaurant: RESTAURANTS[2],
      totalResponses: 198,
      promoters: 89,
      passives: 76,
      detractors: 33,
      npsScore: 28
    }
  ]

  const getNPSColor = (score: number) => {
    if (score >= 50) return 'text-green-600'
    if (score >= 0) return 'text-yellow-600'
    return 'text-red-600'
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Net Promoter Score (NPS)
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            CUS_010 - Customer Acquisition, Experience & Retention
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {npsData.map((location, index) => (
          <div key={index} className="border rounded-lg p-4">
            <h3 className="text-xs font-bold mb-2">{location.restaurant.name}</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span>Total Responses:</span>
                <span>{location.totalResponses}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Promoters (9-10):</span>
                <span>{location.promoters}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Passives (7-8):</span>
                <span>{location.passives}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Detractors (0-6):</span>
                <span>{location.detractors}</span>
              </div>
              <div className="flex justify-between text-xs font-bold border-t pt-2">
                <span>NPS Score:</span>
                <span className={getNPSColor(location.npsScore)}>{location.npsScore}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}