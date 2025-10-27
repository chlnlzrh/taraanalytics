export default function FoodCostMetrics() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xs font-bold text-black dark:text-white">
          Food Cost Metrics
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Food Cost % */}
        <div className="bg-card p-4 rounded-lg border">
          <h2 className="text-xs font-bold text-black dark:text-white mb-4">
            Food Cost %
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Current Food Cost</span>
              <span className="text-xs font-normal text-green-600">29.8%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Target Range</span>
              <span className="text-xs font-normal text-gray-500">28-32%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Last Month</span>
              <span className="text-xs font-normal text-black dark:text-white">31.2%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Variance</span>
              <span className="text-xs font-normal text-green-600">-1.4%</span>
            </div>
          </div>
        </div>

        {/* Beverage Cost % */}
        <div className="bg-card p-4 rounded-lg border">
          <h2 className="text-xs font-bold text-black dark:text-white mb-4">
            Beverage Cost %
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Current Beverage Cost</span>
              <span className="text-xs font-normal text-green-600">22.4%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Target Range</span>
              <span className="text-xs font-normal text-gray-500">18-25%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Alcohol</span>
              <span className="text-xs font-normal text-black dark:text-white">24.8%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Soft Drinks</span>
              <span className="text-xs font-normal text-green-600">10.2%</span>
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
              <span className="text-xs font-normal text-gray-500">Food + Beverage COGS</span>
              <span className="text-xs font-normal text-black dark:text-white">28.6%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Total Labor Cost</span>
              <span className="text-xs font-normal text-black dark:text-white">27.6%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-black dark:text-white">Prime Cost Total</span>
              <span className="text-xs font-bold text-green-600">56.2%</span>
            </div>
            <div className="mt-2 p-2 bg-green-50 dark:bg-green-900/20 rounded border border-green-200">
              <span className="text-xs font-normal text-green-700 dark:text-green-300">
                ✓ Excellent - Well below 60% critical threshold
              </span>
            </div>
          </div>
        </div>

        {/* COGS Analysis */}
        <div className="bg-card p-4 rounded-lg border">
          <h2 className="text-xs font-bold text-black dark:text-white mb-4">
            Cost of Goods Sold (COGS)
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Beginning Inventory</span>
              <span className="text-xs font-normal text-black dark:text-white">₹1,24,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Purchases</span>
              <span className="text-xs font-normal text-black dark:text-white">₹3,68,500</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Ending Inventory</span>
              <span className="text-xs font-normal text-black dark:text-white">₹1,18,200</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-black dark:text-white">Actual COGS</span>
              <span className="text-xs font-bold text-black dark:text-white">₹3,74,300</span>
            </div>
          </div>
        </div>
      </div>

      {/* Theoretical vs Actual Analysis */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          Theoretical vs. Actual COGS Comparison
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-black dark:text-white">Theoretical COGS</h3>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Based on Recipe Costs</span>
              <span className="text-xs font-normal text-black dark:text-white">₹3,62,800</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Theoretical %</span>
              <span className="text-xs font-normal text-black dark:text-white">29.1%</span>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-bold text-black dark:text-white">Variance Analysis</h3>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Actual COGS</span>
              <span className="text-xs font-normal text-black dark:text-white">₹3,74,300</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Variance</span>
              <span className="text-xs font-normal text-yellow-600">+₹11,500 (+3.2%)</span>
            </div>
            <div className="mt-2 p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
              <span className="text-xs font-normal text-yellow-700 dark:text-yellow-300">
                ⚠ Variance &gt;3% - Investigate portion control, waste, or recipe adherence
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Category Breakdown */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          Food Cost by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { category: 'Proteins', cost: '₹1,24,800', percentage: '33.3%', status: 'good' },
            { category: 'Vegetables', cost: '₹87,200', percentage: '23.3%', status: 'good' },
            { category: 'Dairy & Oils', cost: '₹68,500', percentage: '18.3%', status: 'warning' },
            { category: 'Spices & Others', cost: '₹93,800', percentage: '25.1%', status: 'good' }
          ].map((category) => (
            <div key={category.category} className="space-y-2">
              <span className="text-xs font-bold text-black dark:text-white">{category.category}</span>
              <div className="space-y-1">
                <div className="flex justify-between">
                  <span className="text-xs font-normal text-gray-500">Cost</span>
                  <span className="text-xs font-normal text-black dark:text-white">{category.cost}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs font-normal text-gray-500">% of Total</span>
                  <span className={`text-xs font-normal ${category.status === 'good' ? 'text-green-600' : 'text-yellow-600'}`}>
                    {category.percentage}
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