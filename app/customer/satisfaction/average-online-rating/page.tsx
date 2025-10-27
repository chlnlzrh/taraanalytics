import { RESTAURANTS } from '@/lib/restaurant-data'

export default function AverageOnlineRatingKPI() {
  const ratingData = [
    {
      restaurant: RESTAURANTS[0],
      platforms: {
        zomato: 4.2,
        swiggy: 4.3,
        google: 4.4,
        facebook: 4.1
      },
      totalReviews: 1847,
      averageRating: 4.25,
      trend: 'improving'
    },
    {
      restaurant: RESTAURANTS[1],
      platforms: {
        zomato: 4.0,
        swiggy: 4.1,
        google: 4.2,
        facebook: 3.9
      },
      totalReviews: 1456,
      averageRating: 4.05,
      trend: 'stable'
    },
    {
      restaurant: RESTAURANTS[2],
      platforms: {
        zomato: 3.8,
        swiggy: 3.9,
        google: 4.0,
        facebook: 3.7
      },
      totalReviews: 1203,
      averageRating: 3.85,
      trend: 'declining'
    }
  ]

  const getStatusColor = (rating: number) => {
    if (rating > 4.5) return 'text-green-600'
    if (rating >= 4.0) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getTrendColor = (trend: string) => {
    if (trend === 'improving') return 'text-green-600'
    if (trend === 'declining') return 'text-red-600'
    return 'text-gray-600'
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Average Online Rating
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            CUS_014 - Customer Acquisition, Experience & Retention
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {ratingData.map((location, index) => (
          <div key={index} className="border rounded-lg p-4">
            <h3 className="text-xs font-bold mb-2">{location.restaurant.name}</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span>Zomato:</span>
                <span>{location.platforms.zomato}/5</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Swiggy:</span>
                <span>{location.platforms.swiggy}/5</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Google:</span>
                <span>{location.platforms.google}/5</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Facebook:</span>
                <span>{location.platforms.facebook}/5</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Total Reviews:</span>
                <span>{location.totalReviews.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Trend:</span>
                <span className={getTrendColor(location.trend)}>{location.trend}</span>
              </div>
              <div className="flex justify-between text-xs font-bold border-t pt-2">
                <span>Average Rating:</span>
                <span className={getStatusColor(location.averageRating)}>{location.averageRating}/5</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}