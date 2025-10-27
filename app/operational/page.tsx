export default function OperationalPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xs font-bold text-black dark:text-white">
          Operational Efficiency & Resource Utilization
        </h1>
        <p className="text-xs font-normal text-gray-500 mt-1">
          Monitor service efficiency, labor productivity, inventory management, and quality metrics
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Service & Capacity */}
        <div className="bg-card p-4 rounded-lg border">
          <h3 className="text-xs font-bold text-black dark:text-white mb-3">
            Service & Capacity (OPR_001-005)
          </h3>
          <div className="space-y-2">
            <div className="text-xs font-normal text-gray-500">• Table Turnover Rate</div>
            <div className="text-xs font-normal text-gray-500">• Seat Occupancy %</div>
            <div className="text-xs font-normal text-gray-500">• Average Service Time</div>
            <div className="text-xs font-normal text-gray-500">• Kitchen Ticket Time (KOT)</div>
            <div className="text-xs font-normal text-gray-500">• Peak vs Off-Peak Revenue Ratio</div>
          </div>
        </div>

        {/* Labor Productivity */}
        <div className="bg-card p-4 rounded-lg border">
          <h3 className="text-xs font-bold text-black dark:text-white mb-3">
            Labor Productivity (OPR_006-009)
          </h3>
          <div className="space-y-2">
            <div className="text-xs font-normal text-gray-500">• Revenue per Labor Hour</div>
            <div className="text-xs font-normal text-gray-500">• Covers per Labor Hour</div>
            <div className="text-xs font-normal text-gray-500">• Labor Hours per ₹1000 Revenue</div>
            <div className="text-xs font-normal text-gray-500">• Overtime Hours %</div>
          </div>
        </div>

        {/* Inventory & Asset Management */}
        <div className="bg-card p-4 rounded-lg border">
          <h3 className="text-xs font-bold text-black dark:text-white mb-3">
            Inventory & Asset (OPR_010-012)
          </h3>
          <div className="space-y-2">
            <div className="text-xs font-normal text-gray-500">• Inventory Turnover Ratio</div>
            <div className="text-xs font-normal text-gray-500">• Days of Inventory on Hand</div>
            <div className="text-xs font-normal text-gray-500">• Equipment Downtime Hours</div>
          </div>
        </div>

        {/* Order Accuracy & Waste */}
        <div className="bg-card p-4 rounded-lg border">
          <h3 className="text-xs font-bold text-black dark:text-white mb-3">
            Order Accuracy & Waste (OPR_013-015)
          </h3>
          <div className="space-y-2">
            <div className="text-xs font-normal text-gray-500">• Order Accuracy Rate %</div>
            <div className="text-xs font-normal text-gray-500">• Stock-out Incidents</div>
            <div className="text-xs font-normal text-gray-500">• Waste & Spoilage %</div>
          </div>
        </div>
      </div>

      {/* Quick Performance Overview */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          📊 Chain-wide Operational Performance Summary
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded border border-green-200">
            <div className="text-xs font-bold text-green-700 dark:text-green-300">Service Efficiency</div>
            <div className="text-xs font-normal text-green-600">Good ✅</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">Labor Productivity</div>
            <div className="text-xs font-normal text-yellow-600">Monitor ⚠️</div>
          </div>
          <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded border border-green-200">
            <div className="text-xs font-bold text-green-700 dark:text-green-300">Inventory Management</div>
            <div className="text-xs font-normal text-green-600">Good ✅</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">Quality & Accuracy</div>
            <div className="text-xs font-normal text-red-600">Critical 🚨</div>
          </div>
        </div>
      </div>
    </div>
  )
}