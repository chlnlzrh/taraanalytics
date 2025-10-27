export default function ProfitabilityAndMargins() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xs font-bold text-black dark:text-white">
          Profitability & Margins Analysis
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Gross Profit Margin */}
        <div className="bg-card p-4 rounded-lg border">
          <h2 className="text-xs font-bold text-black dark:text-white mb-4">
            Gross Profit Margin %
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Current Margin</span>
              <span className="text-xs font-normal text-green-600">68.4%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Target Range</span>
              <span className="text-xs font-normal text-gray-500">60-72%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Trend</span>
              <span className="text-xs font-normal text-green-600">↗ Improving</span>
            </div>
          </div>
        </div>

        {/* EBITDA Margin */}
        <div className="bg-card p-4 rounded-lg border">
          <h2 className="text-xs font-bold text-black dark:text-white mb-4">
            EBITDA Margin %
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Current EBITDA</span>
              <span className="text-xs font-normal text-green-600">16.8%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Target Range</span>
              <span className="text-xs font-normal text-gray-500">12-20%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Industry Average</span>
              <span className="text-xs font-normal text-gray-500">8-12%</span>
            </div>
          </div>
        </div>

        {/* Net Profit Margin */}
        <div className="bg-card p-4 rounded-lg border">
          <h2 className="text-xs font-bold text-black dark:text-white mb-4">
            Net Profit Margin %
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Current Net Margin</span>
              <span className="text-xs font-normal text-green-600">8.2%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Target Range</span>
              <span className="text-xs font-normal text-gray-500">5-10%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">After All Costs</span>
              <span className="text-xs font-normal text-black dark:text-white">Including Rent</span>
            </div>
          </div>
        </div>

        {/* Prime Cost Analysis */}
        <div className="bg-card p-4 rounded-lg border border-orange-200">
          <h2 className="text-xs font-bold text-black dark:text-white mb-4">
            Prime Cost % Analysis ⭐
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Current Prime Cost</span>
              <span className="text-xs font-normal text-green-600">56.2%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Critical Threshold</span>
              <span className="text-xs font-normal text-red-600">&lt;60%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Target Range</span>
              <span className="text-xs font-normal text-green-600">55-58%</span>
            </div>
          </div>
          <div className="mt-3 p-2 bg-green-50 dark:bg-green-900/20 rounded border border-green-200">
            <span className="text-xs font-normal text-green-700 dark:text-green-300">
              ✓ Within optimal range - Most important metric performing well
            </span>
          </div>
        </div>

        {/* Breakeven Analysis */}
        <div className="bg-card p-4 rounded-lg border col-span-full">
          <h2 className="text-xs font-bold text-black dark:text-white mb-4">
            Breakeven Point Analysis by Location
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {['Gurugram Central', 'Sector 29', 'Cyber City'].map((location) => (
              <div key={location} className="space-y-2">
                <span className="text-xs font-normal text-gray-500">{location}</span>
                <div className="flex justify-between">
                  <span className="text-xs font-normal text-gray-500">Monthly Breakeven</span>
                  <span className="text-xs font-normal text-black dark:text-white">₹1,85,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs font-normal text-gray-500">Current Revenue</span>
                  <span className="text-xs font-normal text-green-600">₹2,08,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs font-normal text-gray-500">Safety Margin</span>
                  <span className="text-xs font-normal text-green-600">+12.4%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}