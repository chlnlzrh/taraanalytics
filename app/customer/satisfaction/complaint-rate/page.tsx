import { RESTAURANTS } from '@/lib/restaurant-data'

export default function ComplaintRateKPI() {
  const complaintData = [
    {
      restaurant: RESTAURANTS[0],
      totalOrders: 2450,
      complaints: 18,
      complaintRate: 0.73,
      categories: {
        food: 8,
        service: 6,
        delivery: 3,
        billing: 1
      },
      resolved: 16,
      resolutionTime: 2.3
    },
    {
      restaurant: RESTAURANTS[1],
      totalOrders: 1980,
      complaints: 28,
      complaintRate: 1.41,
      categories: {
        food: 12,
        service: 9,
        delivery: 5,
        billing: 2
      },
      resolved: 25,
      resolutionTime: 3.1
    },
    {
      restaurant: RESTAURANTS[2],
      totalOrders: 1720,
      complaints: 35,
      complaintRate: 2.03,
      categories: {
        food: 15,
        service: 11,
        delivery: 7,
        billing: 2
      },
      resolved: 29,
      resolutionTime: 4.2
    }
  ]

  const getStatusColor = (rate: number) => {
    if (rate < 1) return 'text-green-600'
    if (rate <= 2) return 'text-yellow-600'
    return 'text-red-600'
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Complaint Rate %
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            CUS_012 - Customer Acquisition, Experience & Retention
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {complaintData.map((location, index) => (
          <div key={index} className="border rounded-lg p-4">
            <h3 className="text-xs font-bold mb-2">{location.restaurant.name}</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span>Total Orders:</span>
                <span>{location.totalOrders.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Total Complaints:</span>
                <span>{location.complaints}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Food Issues:</span>
                <span>{location.categories.food}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Service Issues:</span>
                <span>{location.categories.service}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Delivery Issues:</span>
                <span>{location.categories.delivery}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Resolved:</span>
                <span>{location.resolved}/{location.complaints}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Avg Resolution:</span>
                <span>{location.resolutionTime} hours</span>
              </div>
              <div className="flex justify-between text-xs font-bold border-t pt-2">
                <span>Complaint Rate:</span>
                <span className={getStatusColor(location.complaintRate)}>{location.complaintRate}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}