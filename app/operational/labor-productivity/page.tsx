export default function LaborProductivityPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xs font-bold text-black dark:text-white">
          Labor Productivity
        </h1>
        <p className="text-xs font-normal text-gray-500 mt-1">
          Monitor labor efficiency, revenue per hour, and staffing optimization metrics
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-card p-4 rounded-lg border">
          <h3 className="text-xs font-bold text-black dark:text-white mb-2">
            OPR_006: Revenue per Labor Hour
          </h3>
          <p className="text-xs font-normal text-gray-500">
            Revenue generated per labor hour worked
          </p>
        </div>

        <div className="bg-card p-4 rounded-lg border">
          <h3 className="text-xs font-bold text-black dark:text-white mb-2">
            OPR_007: Covers per Labor Hour
          </h3>
          <p className="text-xs font-normal text-gray-500">
            Number of customers served per labor hour
          </p>
        </div>

        <div className="bg-card p-4 rounded-lg border">
          <h3 className="text-xs font-bold text-black dark:text-white mb-2">
            OPR_008: Labor Hours per ₹1000 Revenue
          </h3>
          <p className="text-xs font-normal text-gray-500">
            Labor hours required to generate ₹1000 revenue
          </p>
        </div>

        <div className="bg-card p-4 rounded-lg border">
          <h3 className="text-xs font-bold text-black dark:text-white mb-2">
            OPR_009: Overtime Hours %
          </h3>
          <p className="text-xs font-normal text-gray-500">
            Percentage of hours worked beyond standard shift
          </p>
        </div>
      </div>
    </div>
  )
}