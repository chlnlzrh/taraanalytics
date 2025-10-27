import { RESTAURANTS } from '@/lib/restaurant-data'

export default function CustomerLifetimeValueKPI() {
  const clvData = [
    {
      restaurant: RESTAURANTS[0],
      totalCustomers: 1250,
      avgOrderValue: 850,
      visitFrequency: 2.3,
      retentionMonths: 18,
      clv: 4785
    },
    {
      restaurant: RESTAURANTS[1], 
      totalCustomers: 980,
      avgOrderValue: 720,
      visitFrequency: 2.1,
      retentionMonths: 16,
      clv: 3920
    },
    {
      restaurant: RESTAURANTS[2],
      totalCustomers: 890,
      avgOrderValue: 680,
      visitFrequency: 1.9,
      retentionMonths: 14,
      clv: 3156
    }
  ]

  const getStatusColor = (clv: number) => {
    if (clv >= 5000) return 'text-green-600'
    if (clv >= 2000) return 'text-yellow-600'
    return 'text-red-600'
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Customer Lifetime Value (CLV)
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            CUS_009 - Customer Acquisition, Experience & Retention
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {clvData.map((location, index) => (
          <div key={index} className="border rounded-lg p-4">
            <h3 className="text-xs font-bold mb-2">{location.restaurant.name}</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span>Total Customers:</span>
                <span>{location.totalCustomers.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Avg Order Value:</span>
                <span>₹{location.avgOrderValue}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Visit Frequency:</span>
                <span>{location.visitFrequency}x/month</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Retention:</span>
                <span>{location.retentionMonths} months</span>
              </div>
              <div className="flex justify-between text-xs font-bold border-t pt-2">
                <span>CLV:</span>
                <span className={getStatusColor(location.clv)}>₹{location.clv.toLocaleString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}