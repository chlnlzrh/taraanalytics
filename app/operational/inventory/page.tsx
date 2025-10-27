export default function InventoryAndAssets() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xs font-bold text-black dark:text-white">
          Inventory & Asset Management
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card p-4 rounded-lg border">
          <h2 className="text-xs font-bold text-black dark:text-white mb-4">
            Inventory Turnover Ratio
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Current Ratio</span>
              <span className="text-xs font-normal text-green-600">6.2x annually</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Target Range</span>
              <span className="text-xs font-normal text-gray-500">4-8x</span>
            </div>
          </div>
        </div>

        <div className="bg-card p-4 rounded-lg border">
          <h2 className="text-xs font-bold text-black dark:text-white mb-4">
            Days of Inventory on Hand
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Current Days</span>
              <span className="text-xs font-normal text-green-600">5.8 days</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Target Range</span>
              <span className="text-xs font-normal text-gray-500">3-7 days</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}