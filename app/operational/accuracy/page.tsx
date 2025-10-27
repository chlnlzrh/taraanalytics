export default function OrderAccuracyAndWaste() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xs font-bold text-black dark:text-white">
          Order Accuracy & Waste Management
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card p-4 rounded-lg border">
          <h2 className="text-xs font-bold text-black dark:text-white mb-4">
            Order Accuracy Rate %
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Current Rate</span>
              <span className="text-xs font-normal text-green-600">97.8%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Target</span>
              <span className="text-xs font-normal text-gray-500">&gt;97%</span>
            </div>
          </div>
        </div>

        <div className="bg-card p-4 rounded-lg border">
          <h2 className="text-xs font-bold text-black dark:text-white mb-4">
            Waste & Spoilage %
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Current Waste</span>
              <span className="text-xs font-normal text-green-600">4.2%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Target</span>
              <span className="text-xs font-normal text-gray-500">&lt;5%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}