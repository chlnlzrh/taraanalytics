import { RESTAURANTS } from '@/lib/restaurant-data'

export default function PlateWasteKPI() {
  // QUA_006 Plate Waste % - Exact specifications from restaurant_kpi_metrics_127.txt
  const plateWasteData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      overallWastePercentage: 2.1,
      totalPlatedItems: 1250,
      totalWastedItems: 26,
      dishBreakdown: [
        { dish: 'Chicken Burger', plated: 280, wasted: 8, wastePercentage: 2.9, reason: 'Over-portioning' },
        { dish: 'Veggie Wrap', plated: 200, wasted: 3, wastePercentage: 1.5, reason: 'Good acceptance' },
        { dish: 'BBQ Sandwich', plated: 180, wasted: 5, wastePercentage: 2.8, reason: 'Temperature issue' },
        { dish: 'Caesar Salad', plated: 150, wasted: 2, wastePercentage: 1.3, reason: 'Fresh preparation' },
        { dish: 'Fish Fillet', plated: 120, wasted: 4, wastePercentage: 3.3, reason: 'Preparation quality' },
        { dish: 'Pasta Combo', plated: 160, wasted: 2, wastePercentage: 1.3, reason: 'Popular item' },
        { dish: 'Grilled Chicken', plated: 160, wasted: 2, wastePercentage: 1.3, reason: 'Quality consistent' }
      ],
      daypartBreakdown: [
        { daypart: 'Breakfast', plated: 300, wasted: 4, wastePercentage: 1.3 },
        { daypart: 'Lunch', plated: 600, wasted: 14, wastePercentage: 2.3 },
        { daypart: 'Dinner', plated: 350, wasted: 8, wastePercentage: 2.3 }
      ],
      monthlyTrend: [
        { month: 'Aug 2024', wastePercentage: 2.8 },
        { month: 'Sep 2024', wastePercentage: 2.4 },
        { month: 'Oct 2024', wastePercentage: 2.1 }
      ]
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      overallWastePercentage: 3.8,
      totalPlatedItems: 1100,
      totalWastedItems: 42,
      dishBreakdown: [
        { dish: 'Chicken Burger', plated: 240, wasted: 14, wastePercentage: 5.8, reason: 'Portion too large' },
        { dish: 'Veggie Wrap', plated: 180, wasted: 5, wastePercentage: 2.8, reason: 'Temperature variation' },
        { dish: 'BBQ Sandwich', plated: 160, wasted: 8, wastePercentage: 5.0, reason: 'Sauce preference' },
        { dish: 'Caesar Salad', plated: 140, wasted: 3, wastePercentage: 2.1, reason: 'Dressing quantity' },
        { dish: 'Fish Fillet', plated: 100, wasted: 6, wastePercentage: 6.0, reason: 'Cooking consistency' },
        { dish: 'Pasta Combo', plated: 140, wasted: 3, wastePercentage: 2.1, reason: 'Good acceptance' },
        { dish: 'Grilled Chicken', plated: 140, wasted: 3, wastePercentage: 2.1, reason: 'Popular choice' }
      ],
      daypartBreakdown: [
        { daypart: 'Breakfast', plated: 250, wasted: 7, wastePercentage: 2.8 },
        { daypart: 'Lunch', plated: 550, wasted: 23, wastePercentage: 4.2 },
        { daypart: 'Dinner', plated: 300, wasted: 12, wastePercentage: 4.0 }
      ],
      monthlyTrend: [
        { month: 'Aug 2024', wastePercentage: 4.5 },
        { month: 'Sep 2024', wastePercentage: 4.1 },
        { month: 'Oct 2024', wastePercentage: 3.8 }
      ]
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      overallWastePercentage: 2.7,
      totalPlatedItems: 980,
      totalWastedItems: 26,
      dishBreakdown: [
        { dish: 'Chicken Burger', plated: 220, wasted: 6, wastePercentage: 2.7, reason: 'Standard portion' },
        { dish: 'Veggie Wrap', plated: 160, wasted: 4, wastePercentage: 2.5, reason: 'Good preparation' },
        { dish: 'BBQ Sandwich', plated: 140, wasted: 5, wastePercentage: 3.6, reason: 'Spice level issue' },
        { dish: 'Caesar Salad', plated: 120, wasted: 2, wastePercentage: 1.7, reason: 'Fresh ingredients' },
        { dish: 'Fish Fillet', plated: 90, wasted: 4, wastePercentage: 4.4, reason: 'Texture preference' },
        { dish: 'Pasta Combo', plated: 130, wasted: 3, wastePercentage: 2.3, reason: 'Good quality' },
        { dish: 'Grilled Chicken', plated: 120, wasted: 2, wastePercentage: 1.7, reason: 'Consistent quality' }
      ],
      daypartBreakdown: [
        { daypart: 'Breakfast', plated: 220, wasted: 4, wastePercentage: 1.8 },
        { daypart: 'Lunch', plated: 480, wasted: 14, wastePercentage: 2.9 },
        { daypart: 'Dinner', plated: 280, wasted: 8, wastePercentage: 2.9 }
      ],
      monthlyTrend: [
        { month: 'Aug 2024', wastePercentage: 3.2 },
        { month: 'Sep 2024', wastePercentage: 2.9 },
        { month: 'Oct 2024', wastePercentage: 2.7 }
      ]
    }
  ]

  const chainAverageWaste = plateWasteData.reduce((sum, item) => sum + item.overallWastePercentage, 0) / plateWasteData.length
  const totalPlatedChain = plateWasteData.reduce((sum, item) => sum + item.totalPlatedItems, 0)
  const totalWastedChain = plateWasteData.reduce((sum, item) => sum + item.totalWastedItems, 0)
  const locationsUnderTarget = plateWasteData.filter(item => item.overallWastePercentage < 3).length

  const getWasteStatusColor = (percentage: number) => {
    if (percentage < 3) return 'text-green-600'
    if (percentage <= 5) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getWasteStatusBg = (percentage: number) => {
    if (percentage < 3) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (percentage <= 5) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getWasteStatusIcon = (percentage: number) => {
    if (percentage < 3) return '✅'
    if (percentage <= 5) return '⚠️'
    return '🚨'
  }

  const getDishStatusColor = (percentage: number) => {
    if (percentage < 3) return 'text-green-600'
    if (percentage <= 5) return 'text-yellow-600'
    return 'text-red-600'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Plate Waste %
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: QUA_006 | Food Quality & Customer Satisfaction Indicator
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
            <strong>Formula:</strong> (Food returned uneaten ÷ Total plated items) × 100
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Percentage of food returned uneaten. Indicates customer dissatisfaction, over-portioning, or quality issues.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Important:</strong> Compare by dish and location; &gt;5% per item warrants menu review or training.
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
            <div className="text-xs font-normal text-green-600">&lt;3% overall</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">3–5%</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&gt;5%</div>
          </div>
        </div>
      </div>

      {/* Chain Summary */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          📈 Chain Plate Waste Summary
        </h2>
        <div className="grid grid-cols-4 gap-6">
          <div>
            <span className="text-xs font-normal text-gray-500">Chain Average Waste</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getWasteStatusColor(chainAverageWaste)}`}>
                {chainAverageWaste.toFixed(1)}%
              </span>
              <span>{getWasteStatusIcon(chainAverageWaste)}</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Total Items Served</span>
            <div className="text-xs font-normal text-blue-600">
              {totalPlatedChain.toLocaleString()} items
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Total Waste</span>
            <div className="text-xs font-normal text-orange-600">
              {totalWastedChain} items
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Locations Under Target</span>
            <div className="text-xs font-normal text-green-600">
              {locationsUnderTarget}/3 locations &lt;3%
            </div>
          </div>
        </div>
      </div>

      {/* Location Waste Performance */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Plate Waste Performance
        </h2>
        <div className="space-y-3">
          {plateWasteData
            .sort((a, b) => a.overallWastePercentage - b.overallWastePercentage)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getWasteStatusBg(location.overallWastePercentage)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span>{getWasteStatusIcon(location.overallWastePercentage)}</span>
                </div>
                <div className="text-right">
                  <div className={`text-xs font-bold ${getWasteStatusColor(location.overallWastePercentage)}`}>
                    {location.overallWastePercentage}%
                  </div>
                  <div className="text-xs font-normal text-gray-500">
                    Waste Rate
                  </div>
                </div>
              </div>
              
              {/* Volume stats */}
              <div className="grid grid-cols-3 gap-4 mb-3">
                <div>
                  <span className="text-xs text-gray-500">Items Served:</span>
                  <div className="text-xs font-normal text-black dark:text-white">{location.totalPlatedItems.toLocaleString()}</div>
                </div>
                <div>
                  <span className="text-xs text-gray-500">Items Wasted:</span>
                  <div className="text-xs font-normal text-black dark:text-white">{location.totalWastedItems}</div>
                </div>
                <div>
                  <span className="text-xs text-gray-500">Trend (3 months):</span>
                  <div className={`text-xs font-normal ${location.monthlyTrend[2].wastePercentage < location.monthlyTrend[0].wastePercentage ? 'text-green-600' : 'text-red-600'}`}>
                    {location.monthlyTrend[2].wastePercentage < location.monthlyTrend[0].wastePercentage ? '↓ Improving' : '↑ Worsening'}
                  </div>
                </div>
              </div>

              {/* Daypart breakdown */}
              <div className="mb-3">
                <h4 className="text-xs font-bold text-gray-600 mb-2">Waste by Time Period</h4>
                <div className="grid grid-cols-3 gap-2">
                  {location.daypartBreakdown.map((period, idx) => (
                    <div key={idx} className="bg-white dark:bg-gray-800 p-2 rounded border">
                      <div className="text-xs font-bold text-black dark:text-white">{period.daypart}</div>
                      <div className={`text-xs ${getDishStatusColor(period.wastePercentage)}`}>
                        {period.wastePercentage}% waste
                      </div>
                      <div className="text-xs text-gray-500">{period.plated} served</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top waste items */}
              <div className="mt-3 pt-2 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-xs font-bold text-gray-600 mb-2">Top Waste Items (Need Attention)</h4>
                <div className="space-y-1">
                  {location.dishBreakdown
                    .filter(dish => dish.wastePercentage > 3)
                    .sort((a, b) => b.wastePercentage - a.wastePercentage)
                    .slice(0, 3)
                    .map((dish, idx) => (
                      <div key={idx} className="flex justify-between items-center text-xs">
                        <span className="text-gray-600">{dish.dish}</span>
                        <div className="text-right">
                          <span className={`font-bold ${getDishStatusColor(dish.wastePercentage)}`}>
                            {dish.wastePercentage}%
                          </span>
                          <span className="text-gray-500 ml-2">({dish.reason})</span>
                        </div>
                      </div>
                    ))}
                  {location.dishBreakdown.filter(dish => dish.wastePercentage > 3).length === 0 && (
                    <div className="text-xs text-green-600">✅ All items under 3% waste threshold</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dish-wise Waste Analysis */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🍽️ Dish-wise Waste Analysis
        </h2>
        <div className="space-y-4">
          {['Chicken Burger', 'BBQ Sandwich', 'Fish Fillet'].map(dishName => {
            const dishData = plateWasteData.map(location => 
              location.dishBreakdown.find(dish => dish.dish === dishName)
            ).filter(Boolean)
            const avgWaste = dishData.reduce((sum, dish) => sum + dish!.wastePercentage, 0) / dishData.length
            
            return (
              <div key={dishName} className={`p-3 rounded border ${getWasteStatusBg(avgWaste)}`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-black dark:text-white">{dishName}</span>
                  <span className={`text-xs font-bold ${getWasteStatusColor(avgWaste)}`}>
                    {avgWaste.toFixed(1)}% avg waste
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {dishData.map((dish, idx) => (
                    <div key={idx} className="text-xs">
                      <div className="font-normal text-black dark:text-white">{plateWasteData[idx].restaurant.shortName}</div>
                      <div className={`${getDishStatusColor(dish!.wastePercentage)}`}>{dish!.wastePercentage}%</div>
                      <div className="text-gray-500">{dish!.reason}</div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Monthly Trend Analysis */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          📊 Monthly Waste Trend Analysis
        </h2>
        <div className="space-y-2">
          <div className="grid grid-cols-4 gap-4 text-xs font-bold bg-gray-100 dark:bg-gray-800 p-2 rounded">
            <div>Location</div>
            <div>Aug 2024</div>
            <div>Sep 2024</div>
            <div>Oct 2024</div>
          </div>
          {plateWasteData.map((location) => (
            <div key={location.restaurant.id} className="grid grid-cols-4 gap-4 text-xs p-2 bg-gray-50 dark:bg-gray-800/50 rounded">
              <div className="font-normal text-black dark:text-white">{location.restaurant.shortName}</div>
              {location.monthlyTrend.map((month, idx) => (
                <div key={idx} className={`font-normal ${getWasteStatusColor(month.wastePercentage)}`}>
                  {month.wastePercentage}%
                </div>
              ))}
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
              <li>• Plate return log (manual tracking by server)</li>
              <li>• POS notes on returns</li>
              <li>• Kitchen waste tracking system</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Daily tracking and reporting</li>
              <li>• Drill down: by dish, by location, by daypart, by reason (taste/temperature/portion/freshness)</li>
              <li>• Weekly trend analysis</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Users & Access */}
      <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-lg border border-gray-200">
        <h2 className="text-xs font-bold text-black dark:text-white mb-2">
          👥 Authorized Users
        </h2>
        <p className="text-xs font-normal text-gray-500">
          Manager, Chef
        </p>
      </div>
    </div>
  )
}