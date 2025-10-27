export default function RetentionAndLoyalty() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xs font-bold text-black dark:text-white">
          Customer Retention & Loyalty
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card p-4 rounded-lg border">
          <h2 className="text-xs font-bold text-black dark:text-white mb-4">
            Customer Retention Rate
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">30-day Retention</span>
              <span className="text-xs font-normal text-green-600">36.4%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">60-day Retention</span>
              <span className="text-xs font-normal text-black dark:text-white">28.2%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Target Range</span>
              <span className="text-xs font-normal text-gray-500">30-40%</span>
            </div>
          </div>
        </div>

        <div className="bg-card p-4 rounded-lg border">
          <h2 className="text-xs font-bold text-black dark:text-white mb-4">
            Customer Lifetime Value (CLV)
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Average CLV</span>
              <span className="text-xs font-normal text-black dark:text-white">₹2,840</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Avg Visits/Customer</span>
              <span className="text-xs font-normal text-black dark:text-white">5.8</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}