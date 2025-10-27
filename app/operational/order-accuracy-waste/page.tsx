export default function OrderAccuracyWastePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xs font-bold text-black dark:text-white">
          Order Accuracy & Waste Management
        </h1>
        <p className="text-xs font-normal text-gray-500 mt-1">
          Monitor order accuracy, stock availability, and waste reduction metrics
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-card p-4 rounded-lg border">
          <h3 className="text-xs font-bold text-black dark:text-white mb-2">
            OPR_013: Order Accuracy Rate %
          </h3>
          <p className="text-xs font-normal text-gray-500">
            Percentage of orders fulfilled correctly
          </p>
        </div>

        <div className="bg-card p-4 rounded-lg border">
          <h3 className="text-xs font-bold text-black dark:text-white mb-2">
            OPR_014: Stock-out Incidents
          </h3>
          <p className="text-xs font-normal text-gray-500">
            Number of times menu items are unavailable per week
          </p>
        </div>

        <div className="bg-card p-4 rounded-lg border">
          <h3 className="text-xs font-bold text-black dark:text-white mb-2">
            OPR_015: Waste & Spoilage %
          </h3>
          <p className="text-xs font-normal text-gray-500">
            Percentage of food purchases wasted
          </p>
        </div>
      </div>
    </div>
  )
}