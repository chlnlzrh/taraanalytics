export default function CustomerAcquisition() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xs font-bold text-black dark:text-white">
          Customer Acquisition & Traffic
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Daily Footfall */}
        <div className="bg-card p-4 rounded-lg border">
          <h2 className="text-xs font-bold text-black dark:text-white mb-4">
            Daily Footfall / Covers
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Today&apos;s Covers</span>
              <span className="text-xs font-normal text-black dark:text-white">142</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Yesterday</span>
              <span className="text-xs font-normal text-black dark:text-white">138</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Weekly Average</span>
              <span className="text-xs font-normal text-black dark:text-white">145</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Growth</span>
              <span className="text-xs font-normal text-green-600">+2.9%</span>
            </div>
          </div>
        </div>

        {/* Customer Acquisition Cost */}
        <div className="bg-card p-4 rounded-lg border">
          <h2 className="text-xs font-bold text-black dark:text-white mb-4">
            Customer Acquisition Cost (CAC)
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Average CAC</span>
              <span className="text-xs font-normal text-black dark:text-white">₹285</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Target Range</span>
              <span className="text-xs font-normal text-gray-500">₹100-400</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Zomato Ads</span>
              <span className="text-xs font-normal text-black dark:text-white">₹420</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Instagram</span>
              <span className="text-xs font-normal text-green-600">₹180</span>
            </div>
          </div>
        </div>

        {/* CAC Payback Period */}
        <div className="bg-card p-4 rounded-lg border">
          <h2 className="text-xs font-bold text-black dark:text-white mb-4">
            CAC Payback Period
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Payback Period</span>
              <span className="text-xs font-normal text-green-600">0.6 visits</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Average Check</span>
              <span className="text-xs font-normal text-black dark:text-white">₹485</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Customer CAC</span>
              <span className="text-xs font-normal text-black dark:text-white">₹285</span>
            </div>
            <div className="mt-2 p-2 bg-green-50 dark:bg-green-900/20 rounded border border-green-200">
              <span className="text-xs font-normal text-green-700 dark:text-green-300">
                ✓ Healthy payback - Customer profitable from first visit
              </span>
            </div>
          </div>
        </div>

        {/* New vs Repeat Customers */}
        <div className="bg-card p-4 rounded-lg border">
          <h2 className="text-xs font-bold text-black dark:text-white mb-4">
            New vs. Repeat Customer Ratio
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">New Customers</span>
              <span className="text-xs font-normal text-black dark:text-white">38%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Repeat Customers</span>
              <span className="text-xs font-normal text-green-600">62%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Target Ratio</span>
              <span className="text-xs font-normal text-gray-500">40% / 60%</span>
            </div>
            <div className="mt-2 p-2 bg-green-50 dark:bg-green-900/20 rounded border border-green-200">
              <span className="text-xs font-normal text-green-700 dark:text-green-300">
                ✓ Optimal ratio - Strong retention performance
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Channel Performance */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          Acquisition Channel Performance
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { channel: 'Word of Mouth', customers: 45, cac: '₹0', quality: 'High' },
            { channel: 'Instagram Ads', customers: 32, cac: '₹180', quality: 'Medium' },
            { channel: 'Zomato Ads', customers: 28, cac: '₹420', quality: 'Medium' },
            { channel: 'Walk-ins', customers: 37, cac: '₹0', quality: 'High' }
          ].map((channel) => (
            <div key={channel.channel} className="space-y-2">
              <span className="text-xs font-bold text-black dark:text-white">{channel.channel}</span>
              <div className="space-y-1">
                <div className="flex justify-between">
                  <span className="text-xs font-normal text-gray-500">New Customers</span>
                  <span className="text-xs font-normal text-black dark:text-white">{channel.customers}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs font-normal text-gray-500">CAC</span>
                  <span className="text-xs font-normal text-black dark:text-white">{channel.cac}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs font-normal text-gray-500">Quality</span>
                  <span className={`text-xs font-normal ${channel.quality === 'High' ? 'text-green-600' : 'text-yellow-600'}`}>
                    {channel.quality}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}