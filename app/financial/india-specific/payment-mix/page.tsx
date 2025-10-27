import { RESTAURANTS } from '@/lib/restaurant-data'

export default function PaymentMixKPI() {
  const paymentData = [
    {
      restaurant: RESTAURANTS[0],
      totalRevenue: 485000,
      paymentBreakdown: {
        upi: 315250,
        creditCard: 97000,
        debitCard: 48500,
        cash: 24250
      }
    },
    {
      restaurant: RESTAURANTS[1],
      totalRevenue: 395000,
      paymentBreakdown: {
        upi: 253575,
        creditCard: 79000,
        debitCard: 39500,
        cash: 22925
      }
    },
    {
      restaurant: RESTAURANTS[2],
      totalRevenue: 365000,
      paymentBreakdown: {
        upi: 234650,
        creditCard: 73000,
        debitCard: 36500,
        cash: 20850
      }
    }
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Cash vs. Digital Payment Mix %
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            FIN_013 - Financial Performance | India-Specific
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {paymentData.map((location, index) => (
          <div key={index} className="border rounded-lg p-4">
            <h3 className="text-xs font-bold mb-2">{location.restaurant.name}</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span>UPI:</span>
                <span>{Math.round((location.paymentBreakdown.upi / location.totalRevenue) * 100)}%</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Credit Card:</span>
                <span>{Math.round((location.paymentBreakdown.creditCard / location.totalRevenue) * 100)}%</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Debit Card:</span>
                <span>{Math.round((location.paymentBreakdown.debitCard / location.totalRevenue) * 100)}%</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Cash:</span>
                <span>{Math.round((location.paymentBreakdown.cash / location.totalRevenue) * 100)}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}