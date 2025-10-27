export default function IndiaSpecificFinancial() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xs font-bold text-black dark:text-white">
          India-Specific Financial Metrics
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* GST Collection & Reconciliation */}
        <div className="bg-card p-4 rounded-lg border">
          <h2 className="text-xs font-bold text-black dark:text-white mb-4">
            GST Collection & Reconciliation
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">GST Collected</span>
              <span className="text-xs font-normal text-black dark:text-white">₹2,24,400</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">GST Liability</span>
              <span className="text-xs font-normal text-black dark:text-white">₹2,24,400</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Reconciliation Rate</span>
              <span className="text-xs font-normal text-green-600">100%</span>
            </div>
            <div className="mt-2 p-2 bg-green-50 dark:bg-green-900/20 rounded border border-green-200">
              <span className="text-xs font-normal text-green-700 dark:text-green-300">
                ✓ All filings up-to-date, no penalties
              </span>
            </div>
          </div>
        </div>

        {/* Aggregator Revenue Dependency */}
        <div className="bg-card p-4 rounded-lg border">
          <h2 className="text-xs font-bold text-black dark:text-white mb-4">
            Aggregator Revenue Dependency
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Zomato Revenue %</span>
              <span className="text-xs font-normal text-black dark:text-white">28.4%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Swiggy Revenue %</span>
              <span className="text-xs font-normal text-black dark:text-white">24.6%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Total Aggregator %</span>
              <span className="text-xs font-normal text-yellow-600">53.0%</span>
            </div>
            <div className="mt-2 p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
              <span className="text-xs font-normal text-yellow-700 dark:text-yellow-300">
                ⚠ High dependency (&gt;40%) - Risk from commission increases
              </span>
            </div>
          </div>
        </div>

        {/* Discount & Promotion Cost */}
        <div className="bg-card p-4 rounded-lg border">
          <h2 className="text-xs font-bold text-black dark:text-white mb-4">
            Discount & Promotion Cost %
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Total Discounts</span>
              <span className="text-xs font-normal text-black dark:text-white">₹87,200</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Discount % of Revenue</span>
              <span className="text-xs font-normal text-green-600">7.2%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Threshold</span>
              <span className="text-xs font-normal text-gray-500">&lt;10%</span>
            </div>
          </div>
        </div>

        {/* Payment Method Mix */}
        <div className="bg-card p-4 rounded-lg border">
          <h2 className="text-xs font-bold text-black dark:text-white mb-4">
            Payment Method Mix
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">UPI Payments</span>
              <span className="text-xs font-normal text-black dark:text-white">64.2%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Card Payments</span>
              <span className="text-xs font-normal text-black dark:text-white">22.8%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Cash Payments</span>
              <span className="text-xs font-normal text-black dark:text-white">10.4%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Wallets</span>
              <span className="text-xs font-normal text-black dark:text-white">2.6%</span>
            </div>
          </div>
        </div>

        {/* Utility Cost Analysis */}
        <div className="bg-card p-4 rounded-lg border col-span-full">
          <h2 className="text-xs font-bold text-black dark:text-white mb-4">
            Utility Cost per Revenue Rupee (India-Specific)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <span className="text-xs font-normal text-gray-500">Electricity</span>
              <div className="flex justify-between">
                <span className="text-xs font-normal text-gray-500">Cost</span>
                <span className="text-xs font-normal text-black dark:text-white">₹42,800</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs font-normal text-gray-500">% of Revenue</span>
                <span className="text-xs font-normal text-green-600">3.5%</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <span className="text-xs font-normal text-gray-500">Gas</span>
              <div className="flex justify-between">
                <span className="text-xs font-normal text-gray-500">Cost</span>
                <span className="text-xs font-normal text-black dark:text-white">₹18,200</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs font-normal text-gray-500">% of Revenue</span>
                <span className="text-xs font-normal text-green-600">1.5%</span>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-normal text-gray-500">Water</span>
              <div className="flex justify-between">
                <span className="text-xs font-normal text-gray-500">Cost</span>
                <span className="text-xs font-normal text-black dark:text-white">₹8,400</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs font-normal text-gray-500">% of Revenue</span>
                <span className="text-xs font-normal text-green-600">0.7%</span>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-normal text-gray-500">Generator/Backup</span>
              <div className="flex justify-between">
                <span className="text-xs font-normal text-gray-500">Cost</span>
                <span className="text-xs font-normal text-black dark:text-white">₹6,200</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs font-normal text-gray-500">% of Revenue</span>
                <span className="text-xs font-normal text-green-600">0.5%</span>
              </div>
            </div>
          </div>
          
          <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded border border-green-200">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-green-700 dark:text-green-300">Total Utility Cost</span>
              <span className="text-xs font-bold text-green-700 dark:text-green-300">6.2% of Revenue</span>
            </div>
            <span className="text-xs font-normal text-green-700 dark:text-green-300">
              ✓ Within target range of 3-5% for metros (including backup power)
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}