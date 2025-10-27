import { RESTAURANTS } from '@/lib/restaurant-data'

export default function RepeatCustomerRateKPI() {
  const repeatData = [
    {
      restaurant: RESTAURANTS[0],
      totalCustomers: 1250,
      repeatCustomers: 287,
      repeatRate: 23.0,
      monthlyGrowth: 2.1
    },
    {
      restaurant: RESTAURANTS[1],
      totalCustomers: 980,
      repeatCustomers: 176,
      repeatRate: 18.0,
      monthlyGrowth: 1.5
    },
    {
      restaurant: RESTAURANTS[2],
      totalCustomers: 890,
      repeatCustomers: 138,
      repeatRate: 15.5,
      monthlyGrowth: 0.8
    }
  ]

  const getStatusColor = (rate: number) => {
    if (rate > 20) return 'text-green-600'
    if (rate >= 15) return 'text-yellow-600'
    return 'text-red-600'
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Repeat Customer Rate %
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            CUS_011 - Customer Acquisition, Experience & Retention
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {repeatData.map((location, index) => (
          <div key={index} className="border rounded-lg p-4">
            <h3 className="text-xs font-bold mb-2">{location.restaurant.name}</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span>Total Customers:</span>
                <span>{location.totalCustomers.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Repeat Customers:</span>
                <span>{location.repeatCustomers}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Monthly Growth:</span>
                <span>+{location.monthlyGrowth}%</span>
              </div>
              <div className="flex justify-between text-xs font-bold border-t pt-2">
                <span>Repeat Rate:</span>
                <span className={getStatusColor(location.repeatRate)}>{location.repeatRate}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}