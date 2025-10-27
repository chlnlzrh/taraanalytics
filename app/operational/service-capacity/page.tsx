export default function ServiceCapacityPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xs font-bold text-black dark:text-white">
          Service & Capacity Efficiency
        </h1>
        <p className="text-xs font-normal text-gray-500 mt-1">
          Monitor table turnover, seat utilization, and service timing metrics
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-card p-4 rounded-lg border">
          <h3 className="text-xs font-bold text-black dark:text-white mb-2">
            OPR_001: Table Turnover Rate
          </h3>
          <p className="text-xs font-normal text-gray-500">
            Average times a table is occupied per service period
          </p>
        </div>

        <div className="bg-card p-4 rounded-lg border">
          <h3 className="text-xs font-bold text-black dark:text-white mb-2">
            OPR_002: Seat Occupancy %
          </h3>
          <p className="text-xs font-normal text-gray-500">
            Percentage of available seats filled during service hours
          </p>
        </div>

        <div className="bg-card p-4 rounded-lg border">
          <h3 className="text-xs font-bold text-black dark:text-white mb-2">
            OPR_003: Average Service Time
          </h3>
          <p className="text-xs font-normal text-gray-500">
            Total time from seating to leaving
          </p>
        </div>

        <div className="bg-card p-4 rounded-lg border">
          <h3 className="text-xs font-bold text-black dark:text-white mb-2">
            OPR_004: Kitchen Ticket Time
          </h3>
          <p className="text-xs font-normal text-gray-500">
            Time from order entry to food ready
          </p>
        </div>

        <div className="bg-card p-4 rounded-lg border">
          <h3 className="text-xs font-bold text-black dark:text-white mb-2">
            OPR_005: Peak vs Off-Peak Ratio
          </h3>
          <p className="text-xs font-normal text-gray-500">
            Revenue ratio between rush hours and off-peak
          </p>
        </div>
      </div>
    </div>
  )
}