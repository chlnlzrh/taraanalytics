export default function RevenueAndSales() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xs font-bold text-black dark:text-white">
          Revenue & Sales Analysis
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Daily/Monthly Revenue */}
        <div className="bg-card p-4 rounded-lg border">
          <h2 className="text-xs font-bold text-black dark:text-white mb-4">
            Daily/Monthly Revenue Tracking
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Today&apos;s Revenue</span>
              <span className="text-xs font-normal text-black dark:text-white">₹41,200</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Monthly Target</span>
              <span className="text-xs font-normal text-black dark:text-white">₹12,50,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Month-to-Date</span>
              <span className="text-xs font-normal text-black dark:text-white">₹8,76,400</span>
            </div>
          </div>
        </div>

        {/* Same-Store Sales Growth */}
        <div className="bg-card p-4 rounded-lg border">
          <h2 className="text-xs font-bold text-black dark:text-white mb-4">
            Same-Store Sales Growth (SSSG)
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">YoY Growth</span>
              <span className="text-xs font-normal text-green-600">+6.8%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Last Quarter</span>
              <span className="text-xs font-normal text-green-600">+4.2%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Industry Benchmark</span>
              <span className="text-xs font-normal text-gray-500">3-8%</span>
            </div>
          </div>
        </div>

        {/* RevPASH */}
        <div className="bg-card p-4 rounded-lg border">
          <h2 className="text-xs font-bold text-black dark:text-white mb-4">
            Revenue per Available Seat Hour (RevPASH)
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Current RevPASH</span>
              <span className="text-xs font-normal text-black dark:text-white">₹842/hour</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Peak Hours</span>
              <span className="text-xs font-normal text-black dark:text-white">₹1,240/hour</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Off-Peak</span>
              <span className="text-xs font-normal text-black dark:text-white">₹320/hour</span>
            </div>
          </div>
        </div>

        {/* Average Check Size */}
        <div className="bg-card p-4 rounded-lg border">
          <h2 className="text-xs font-bold text-black dark:text-white mb-4">
            Average Check Size (ACS)
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Current ACS</span>
              <span className="text-xs font-normal text-black dark:text-white">₹485</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Last Month</span>
              <span className="text-xs font-normal text-black dark:text-white">₹467</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Growth</span>
              <span className="text-xs font-normal text-green-600">+3.9%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}