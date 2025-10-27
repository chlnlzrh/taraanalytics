export default function InventoryAssetPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xs font-bold text-black dark:text-white">
          Inventory & Asset Management
        </h1>
        <p className="text-xs font-normal text-gray-500 mt-1">
          Monitor inventory turnover, working capital, and equipment efficiency
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-card p-4 rounded-lg border">
          <h3 className="text-xs font-bold text-black dark:text-white mb-2">
            OPR_010: Inventory Turnover Ratio
          </h3>
          <p className="text-xs font-normal text-gray-500">
            How many times inventory is fully replaced in a period
          </p>
        </div>

        <div className="bg-card p-4 rounded-lg border">
          <h3 className="text-xs font-bold text-black dark:text-white mb-2">
            OPR_011: Days of Inventory on Hand
          </h3>
          <p className="text-xs font-normal text-gray-500">
            Average number of days inventory is held before sale
          </p>
        </div>

        <div className="bg-card p-4 rounded-lg border">
          <h3 className="text-xs font-bold text-black dark:text-white mb-2">
            OPR_012: Equipment Downtime Hours
          </h3>
          <p className="text-xs font-normal text-gray-500">
            Monthly hours lost to equipment failure
          </p>
        </div>
      </div>
    </div>
  )
}