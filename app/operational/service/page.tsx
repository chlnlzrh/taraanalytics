export default function ServiceAndCapacity() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xs font-bold text-black dark:text-white">
          Service & Capacity Metrics
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Table Turnover Rate */}
        <div className="bg-card p-4 rounded-lg border">
          <h2 className="text-xs font-bold text-black dark:text-white mb-4">
            Table Turnover Rate
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Current Rate</span>
              <span className="text-xs font-normal text-green-600">2.1x</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Industry Average</span>
              <span className="text-xs font-normal text-gray-500">1.8-2.5x</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Lunch Period</span>
              <span className="text-xs font-normal text-black dark:text-white">2.4x</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Dinner Period</span>
              <span className="text-xs font-normal text-black dark:text-white">1.8x</span>
            </div>
          </div>
        </div>

        {/* Seat Occupancy */}
        <div className="bg-card p-4 rounded-lg border">
          <h2 className="text-xs font-bold text-black dark:text-white mb-4">
            Seat Occupancy %
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Current Occupancy</span>
              <span className="text-xs font-normal text-green-600">78.2%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Target Range</span>
              <span className="text-xs font-normal text-gray-500">70-85%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Peak Hours</span>
              <span className="text-xs font-normal text-black dark:text-white">92%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Off-Peak</span>
              <span className="text-xs font-normal text-black dark:text-white">45%</span>
            </div>
          </div>
        </div>

        {/* Average Service Time */}
        <div className="bg-card p-4 rounded-lg border">
          <h2 className="text-xs font-bold text-black dark:text-white mb-4">
            Average Service Time
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Order to Bill</span>
              <span className="text-xs font-normal text-green-600">42 mins</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Target Time</span>
              <span className="text-xs font-normal text-gray-500">&lt;45 mins</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Kitchen Time</span>
              <span className="text-xs font-normal text-black dark:text-white">18 mins</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Service Time</span>
              <span className="text-xs font-normal text-black dark:text-white">24 mins</span>
            </div>
          </div>
        </div>

        {/* Kitchen Ticket Time */}
        <div className="bg-card p-4 rounded-lg border">
          <h2 className="text-xs font-bold text-black dark:text-white mb-4">
            Kitchen Ticket Time (KOT)
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Average KOT Time</span>
              <span className="text-xs font-normal text-green-600">16 mins</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Target Range</span>
              <span className="text-xs font-normal text-gray-500">12-20 mins</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Appetizers</span>
              <span className="text-xs font-normal text-black dark:text-white">8 mins</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Main Course</span>
              <span className="text-xs font-normal text-black dark:text-white">22 mins</span>
            </div>
          </div>
        </div>
      </div>

      {/* Peak vs Off-Peak Analysis */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          Peak vs. Off-Peak Revenue Analysis
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <span className="text-xs font-normal text-gray-500">Lunch Rush (12-2 PM)</span>
            <div className="flex justify-between">
              <span className="text-xs font-normal text-gray-500">Revenue</span>
              <span className="text-xs font-normal text-black dark:text-white">₹18,400</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs font-normal text-gray-500">% of Daily</span>
              <span className="text-xs font-normal text-black dark:text-white">44.6%</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <span className="text-xs font-normal text-gray-500">Dinner Rush (7-10 PM)</span>
            <div className="flex justify-between">
              <span className="text-xs font-normal text-gray-500">Revenue</span>
              <span className="text-xs font-normal text-black dark:text-white">₹16,200</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs font-normal text-gray-500">% of Daily</span>
              <span className="text-xs font-normal text-black dark:text-white">39.3%</span>
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-normal text-gray-500">Off-Peak Hours</span>
            <div className="flex justify-between">
              <span className="text-xs font-normal text-gray-500">Revenue</span>
              <span className="text-xs font-normal text-black dark:text-white">₹6,600</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs font-normal text-gray-500">% of Daily</span>
              <span className="text-xs font-normal text-black dark:text-white">16.1%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}