import { RESTAURANTS } from '@/lib/restaurant-data'

export default function ReviewResponseRateKPI() {
  const responseData = [
    {
      restaurant: RESTAURANTS[0],
      totalReviews: 1847,
      responsesGiven: 1456,
      responseRate: 78.8,
      avgResponseTime: 4.2,
      platformBreakdown: {
        zomato: { reviews: 654, responses: 523 },
        swiggy: { reviews: 589, responses: 471 },
        google: { reviews: 423, responses: 312 },
        facebook: { reviews: 181, responses: 150 }
      }
    },
    {
      restaurant: RESTAURANTS[1],
      totalReviews: 1456,
      responsesGiven: 1019,
      responseRate: 70.0,
      avgResponseTime: 5.8,
      platformBreakdown: {
        zomato: { reviews: 512, responses: 358 },
        swiggy: { reviews: 445, responses: 311 },
        google: { reviews: 334, responses: 234 },
        facebook: { reviews: 165, responses: 116 }
      }
    },
    {
      restaurant: RESTAURANTS[2],
      totalReviews: 1203,
      responsesGiven: 722,
      responseRate: 60.0,
      avgResponseTime: 7.3,
      platformBreakdown: {
        zomato: { reviews: 423, responses: 254 },
        swiggy: { reviews: 378, responses: 227 },
        google: { reviews: 267, responses: 160 },
        facebook: { reviews: 135, responses: 81 }
      }
    }
  ]

  const getResponseRateColor = (rate: number) => {
    if (rate >= 75) return 'text-green-600'
    if (rate >= 60) return 'text-yellow-600'
    return 'text-red-600'
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Review Response Rate %
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            CUS_016 - Customer Acquisition, Experience & Retention
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {responseData.map((location, index) => (
          <div key={index} className="border rounded-lg p-4">
            <h3 className="text-xs font-bold mb-2">{location.restaurant.name}</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span>Total Reviews:</span>
                <span>{location.totalReviews.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Responses Given:</span>
                <span>{location.responsesGiven.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Avg Response Time:</span>
                <span>{location.avgResponseTime} hours</span>
              </div>
              <div className="text-xs font-medium mt-2 mb-1">Platform Breakdown:</div>
              <div className="flex justify-between text-xs">
                <span>Zomato:</span>
                <span>{Math.round((location.platformBreakdown.zomato.responses / location.platformBreakdown.zomato.reviews) * 100)}%</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Swiggy:</span>
                <span>{Math.round((location.platformBreakdown.swiggy.responses / location.platformBreakdown.swiggy.reviews) * 100)}%</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Google:</span>
                <span>{Math.round((location.platformBreakdown.google.responses / location.platformBreakdown.google.reviews) * 100)}%</span>
              </div>
              <div className="flex justify-between text-xs font-bold border-t pt-2">
                <span>Overall Rate:</span>
                <span className={getResponseRateColor(location.responseRate)}>{location.responseRate}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}