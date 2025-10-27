import { RESTAURANTS } from '@/lib/restaurant-data'

export default function CustomerSatisfactionScoreKPI() {
  const satisfactionData = [
    {
      restaurant: RESTAURANTS[0],
      totalSurveys: 245,
      satisfactionScore: 4.3,
      categoryScores: {
        food: 4.4,
        service: 4.2,
        ambiance: 4.3,
        value: 4.2
      },
      distribution: {
        veryHappy: 125,
        happy: 89,
        neutral: 23,
        unhappy: 6,
        veryUnhappy: 2
      }
    },
    {
      restaurant: RESTAURANTS[1],
      totalSurveys: 198,
      satisfactionScore: 4.1,
      categoryScores: {
        food: 4.2,
        service: 4.0,
        ambiance: 4.1,
        value: 4.0
      },
      distribution: {
        veryHappy: 89,
        happy: 78,
        neutral: 24,
        unhappy: 5,
        veryUnhappy: 2
      }
    },
    {
      restaurant: RESTAURANTS[2],
      totalSurveys: 167,
      satisfactionScore: 3.9,
      categoryScores: {
        food: 4.0,
        service: 3.8,
        ambiance: 3.9,
        value: 3.8
      },
      distribution: {
        veryHappy: 67,
        happy: 71,
        neutral: 21,
        unhappy: 6,
        veryUnhappy: 2
      }
    }
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Customer Satisfaction Score (CSAT)
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            CUS_015 - Customer Acquisition, Experience & Retention
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {satisfactionData.map((location, index) => (
          <div key={index} className="border rounded-lg p-4">
            <h3 className="text-xs font-bold mb-2">{location.restaurant.name}</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span>Total Surveys:</span>
                <span>{location.totalSurveys}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Food Score:</span>
                <span>{location.categoryScores.food}/5</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Service Score:</span>
                <span>{location.categoryScores.service}/5</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Ambiance Score:</span>
                <span>{location.categoryScores.ambiance}/5</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Value Score:</span>
                <span>{location.categoryScores.value}/5</span>
              </div>
              <div className="flex justify-between text-xs font-bold border-t pt-2">
                <span>Overall CSAT:</span>
                <span>{location.satisfactionScore}/5</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}