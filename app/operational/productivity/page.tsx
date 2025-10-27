export default function LaborProductivity() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xs font-bold text-black dark:text-white">
          Labor Productivity
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card p-4 rounded-lg border">
          <h2 className="text-xs font-bold text-black dark:text-white mb-4">
            Revenue per Labor Hour
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Current Rate</span>
              <span className="text-xs font-normal text-green-600">₹842/hour</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Target</span>
              <span className="text-xs font-normal text-gray-500">₹800/hour</span>
            </div>
          </div>
        </div>

        <div className="bg-card p-4 rounded-lg border">
          <h2 className="text-xs font-bold text-black dark:text-white mb-4">
            Covers per Labor Hour
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Current Rate</span>
              <span className="text-xs font-normal text-green-600">1.8 covers/hour</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Kitchen Staff</span>
              <span className="text-xs font-normal text-black dark:text-white">2.2 covers/hour</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}