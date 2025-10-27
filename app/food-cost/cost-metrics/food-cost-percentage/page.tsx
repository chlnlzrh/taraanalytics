import { RESTAURANTS } from '@/lib/restaurant-data'

export default function FoodCostPercentageKPI() {
  // FOD_001 Food Cost % - Exact specifications from restaurant_kpi_metrics_127.txt
  const foodCostData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      foodRevenue: 185000,
      foodCOGS: 55500,
      foodCostPercentage: 30.0,
      status: 'good', // Within 28-32% target
      monthlyTrend: [29.5, 30.2, 29.8, 30.0],
      categoryBreakdown: {
        vegetables: 12.5, // % of total food cost
        proteins: 45.2,
        dairy: 15.8,
        spices: 8.3,
        others: 18.2
      },
      supplierBreakdown: {
        localVendors: 35.0,
        wholesaleMarkets: 42.0,
        directSuppliers: 23.0
      }
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      foodRevenue: 145000,
      foodCOGS: 46400,
      foodCostPercentage: 32.0,
      status: 'good', // At upper limit of target
      monthlyTrend: [31.2, 32.5, 31.8, 32.0],
      categoryBreakdown: {
        vegetables: 15.2,
        proteins: 42.8,
        dairy: 16.5,
        spices: 9.1,
        others: 16.4
      },
      supplierBreakdown: {
        localVendors: 38.0,
        wholesaleMarkets: 40.0,
        directSuppliers: 22.0
      }
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      foodRevenue: 125000,
      foodCOGS: 41250,
      foodCostPercentage: 33.0,
      status: 'warning', // Above 32% target - needs investigation
      monthlyTrend: [32.1, 33.2, 32.8, 33.0],
      categoryBreakdown: {
        vegetables: 18.5, // Higher vegetable costs
        proteins: 40.2,
        dairy: 17.2,
        spices: 8.8,
        others: 15.3
      },
      supplierBreakdown: {
        localVendors: 45.0, // Higher dependency on expensive local vendors
        wholesaleMarkets: 35.0,
        directSuppliers: 20.0
      }
    }
  ]

  const chainAverage = foodCostData.reduce((sum, item) => sum + item.foodCostPercentage, 0) / foodCostData.length
  const totalRevenue = foodCostData.reduce((sum, item) => sum + item.foodRevenue, 0)
  const totalCOGS = foodCostData.reduce((sum, item) => sum + item.foodCOGS, 0)
  const chainFoodCostPercentage = (totalCOGS / totalRevenue) * 100

  const getStatusColor = (percentage: number) => {
    if (percentage >= 28 && percentage <= 32) return 'text-green-600'
    if (percentage > 32 && percentage <= 35) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (percentage: number) => {
    if (percentage >= 28 && percentage <= 32) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (percentage > 32 && percentage <= 35) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getStatusIcon = (percentage: number) => {
    if (percentage >= 28 && percentage <= 32) return '✅'
    if (percentage > 32 && percentage <= 35) return '⚠️'
    return '🚨'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Food Cost %
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: FOD_001 | Food costs as percentage of food revenue
          </p>
        </div>
      </div>

      {/* Definition & Formula Card */}
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200">
        <h2 className="text-xs font-bold text-blue-900 dark:text-blue-300 mb-2">
          📊 Definition & Formula
        </h2>
        <div className="space-y-2">
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Formula:</strong> (Food COGS ÷ Food Revenue) × 100
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Food costs as percentage of food revenue. Target 28–32% for Indian casual dining.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> Any variance >1.5% warrants investigation; indicates portion creep, supplier changes, theft, or menu mix shift.
          </p>
        </div>
      </div>

      {/* Alert Thresholds */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🎯 Target Ranges & Alert Thresholds
        </h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded border border-green-200">
            <div className="text-xs font-bold text-green-700 dark:text-green-300">TARGET</div>
            <div className="text-xs font-normal text-green-600">28–32%</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">32–35%</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&gt;35%</div>
          </div>
        </div>
      </div>

      {/* Chain Summary */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          📈 Chain Performance Summary
        </h2>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <span className="text-xs font-normal text-gray-500">Chain Food Cost %</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getStatusColor(chainFoodCostPercentage)}`}>
                {chainFoodCostPercentage.toFixed(1)}%
              </span>
              <span>{getStatusIcon(chainFoodCostPercentage)}</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Total Food Revenue</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-black dark:text-white">
                ₹{totalRevenue.toLocaleString('en-IN')}
              </span>
              <span>💰</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Total Food COGS</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-black dark:text-white">
                ₹{totalCOGS.toLocaleString('en-IN')}
              </span>
              <span>📦</span>
            </div>
          </div>
        </div>
      </div>

      {/* Location Performance */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Performance Analysis
        </h2>
        <div className="space-y-3">
          {foodCostData
            .sort((a, b) => a.foodCostPercentage - b.foodCostPercentage)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.foodCostPercentage)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span>{getStatusIcon(location.foodCostPercentage)}</span>
                </div>
                <div className="text-right">
                  <div className={`text-xs font-bold ${getStatusColor(location.foodCostPercentage)}`}>
                    {location.foodCostPercentage.toFixed(1)}%
                  </div>
                  <div className="text-xs font-normal text-gray-500">
                    ₹{location.foodCOGS.toLocaleString('en-IN')} / ₹{location.foodRevenue.toLocaleString('en-IN')}
                  </div>
                </div>
              </div>
              
              {/* Drill-down breakdown */}
              <div className="grid grid-cols-2 gap-4 mt-3">
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-1">Category Breakdown</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Proteins:</span>
                      <span className="font-normal text-black dark:text-white">{location.categoryBreakdown.proteins}%</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Vegetables:</span>
                      <span className="font-normal text-black dark:text-white">{location.categoryBreakdown.vegetables}%</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Dairy:</span>
                      <span className="font-normal text-black dark:text-white">{location.categoryBreakdown.dairy}%</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Others:</span>
                      <span className="font-normal text-black dark:text-white">{(location.categoryBreakdown.spices + location.categoryBreakdown.others).toFixed(1)}%</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-1">Supplier Mix</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Wholesale Markets:</span>
                      <span className="font-normal text-black dark:text-white">{location.supplierBreakdown.wholesaleMarkets}%</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Local Vendors:</span>
                      <span className="font-normal text-black dark:text-white">{location.supplierBreakdown.localVendors}%</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Direct Suppliers:</span>
                      <span className="font-normal text-black dark:text-white">{location.supplierBreakdown.directSuppliers}%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Monthly Trend */}
              <div className="mt-3">
                <h4 className="text-xs font-bold text-gray-600 mb-1">4-Week Trend</h4>
                <div className="flex gap-2">
                  {location.monthlyTrend.map((value, idx) => (
                    <div key={idx} className="text-xs">
                      <span className="text-gray-500">W{idx + 1}:</span>
                      <span className={`font-normal ml-1 ${getStatusColor(value)}`}>
                        {value}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Data Sources & Refresh */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🔄 Data Sources & Refresh Schedule
        </h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Data Sources:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• PetPooja POS (food revenue by category)</li>
              <li>• Inventory management system (COGS calculation)</li>
              <li>• Purchase orders and invoices</li>
              <li>• Recipe costing module</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Daily (updated by 10 AM)</li>
              <li>• Weekly summary every Monday</li>
              <li>• Alert if variance &gt;1.5% from target</li>
              <li>• Monthly deep-dive analysis</li>
            </ul>
          </div>
        </div>
      </div>

      {/* India-Specific Considerations */}
      <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200">
        <h2 className="text-xs font-bold text-orange-900 dark:text-orange-300 mb-2">
          🇮🇳 India-Specific Monitoring
        </h2>
        <div className="space-y-1">
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Monitor separately by cuisine (specialty items = higher COGS)
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Track seasonal vegetable price fluctuations (monsoon impact)
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Account for regional supplier cost variations
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Monitor local vs. imported ingredient cost ratios
          </p>
        </div>
      </div>

      {/* Users & Access */}
      <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-lg border border-gray-200">
        <h2 className="text-xs font-bold text-black dark:text-white mb-2">
          👥 Authorized Users
        </h2>
        <p className="text-xs font-normal text-gray-500">
          Manager, Owner, Finance, Kitchen Manager
        </p>
      </div>
    </div>
  )
}