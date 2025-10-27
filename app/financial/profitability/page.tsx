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
            {[
              { name: 'The Potbelly (Chanakyapuri)', breakeven: '₹3,85,000', revenue: '₹4,85,000', margin: '+26.0%' },
              { name: 'The Potbelly Divine (Gurugram)', breakeven: '₹3,15,000', revenue: '₹3,95,000', margin: '+25.4%' },
              { name: 'The Potbelly Rooftop (Shahpur Jat)', breakeven: '₹3,05,000', revenue: '₹3,65,000', margin: '+19.7%' }
            ].map((location) => (
              <div key={location.name} className="space-y-2">
                <span className="text-xs font-normal text-gray-500">{location.name}</span>
                <div className="flex justify-between">
                  <span className="text-xs font-normal text-gray-500">Monthly Breakeven</span>
                  <span className="text-xs font-normal text-black dark:text-white">{location.breakeven}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs font-normal text-gray-500">Current Revenue</span>
                  <span className="text-xs font-normal text-green-600">{location.revenue}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs font-normal text-gray-500">Safety Margin</span>
                  <span className="text-xs font-normal text-green-600">{location.margin}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}