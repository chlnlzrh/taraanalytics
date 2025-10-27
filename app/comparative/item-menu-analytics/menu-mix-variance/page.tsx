import { RESTAURANTS } from '@/lib/restaurant-data'

export default function MenuMixVarianceKPI() {
  // CMP_011 Menu Mix Variance Across Locations - Exact specifications from restaurant_kpi_metrics_127.txt
  const menuMixData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      categoryMix: {
        appetizers: { percentage: 18.5, chainAvg: 16.8, variance: 1.7, status: 'good' },
        mainCourse: { percentage: 45.2, chainAvg: 47.1, variance: -1.9, status: 'good' },
        rice: { percentage: 12.8, chainAvg: 13.5, variance: -0.7, status: 'good' },
        bread: { percentage: 8.5, chainAvg: 9.2, variance: -0.7, status: 'good' },
        beverages: { percentage: 10.5, chainAvg: 9.8, variance: 0.7, status: 'good' },
        desserts: { percentage: 4.5, chainAvg: 3.6, variance: 0.9, status: 'good' }
      },
      overallVariance: 1.7, // Maximum absolute variance
      status: 'good',
      totalRevenue: 2850000
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      categoryMix: {
        appetizers: { percentage: 15.2, chainAvg: 16.8, variance: -1.6, status: 'good' },
        mainCourse: { percentage: 48.8, chainAvg: 47.1, variance: 1.7, status: 'good' },
        rice: { percentage: 14.1, chainAvg: 13.5, variance: 0.6, status: 'good' },
        bread: { percentage: 9.8, chainAvg: 9.2, variance: 0.6, status: 'good' },
        beverages: { percentage: 8.9, chainAvg: 9.8, variance: -0.9, status: 'good' },
        desserts: { percentage: 3.2, chainAvg: 3.6, variance: -0.4, status: 'good' }
      },
      overallVariance: 1.7,
      status: 'good',
      totalRevenue: 2280000
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      categoryMix: {
        appetizers: { percentage: 16.5, chainAvg: 16.8, variance: -0.3, status: 'good' },
        mainCourse: { percentage: 47.3, chainAvg: 47.1, variance: 0.2, status: 'good' },
        rice: { percentage: 13.7, chainAvg: 13.5, variance: 0.2, status: 'good' },
        bread: { percentage: 9.4, chainAvg: 9.2, variance: 0.2, status: 'good' },
        beverages: { percentage: 10.0, chainAvg: 9.8, variance: 0.2, status: 'good' },
        desserts: { percentage: 3.1, chainAvg: 3.6, variance: -0.5, status: 'good' }
      },
      overallVariance: 0.5,
      status: 'excellent',
      totalRevenue: 1850000
    }
  ]

  const chainMaxVariance = Math.max(...menuMixData.map(d => d.overallVariance))
  const categories = ['appetizers', 'mainCourse', 'rice', 'bread', 'beverages', 'desserts']

  const getStatusColor = (variance: number) => {
    const absVariance = Math.abs(variance)
    if (absVariance <= 5) return 'text-green-600'
    if (absVariance <= 10) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (variance: number) => {
    const absVariance = Math.abs(variance)
    if (absVariance <= 5) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (absVariance <= 10) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getStatusIcon = (variance: number) => {
    const absVariance = Math.abs(variance)
    if (absVariance <= 5) return '✅'
    if (absVariance <= 10) return '⚠️'
    return '🚨'
  }

  const getStatusLabel = (variance: number) => {
    const absVariance = Math.abs(variance)
    if (absVariance <= 5) return 'Consistent'
    if (absVariance <= 10) return 'Variable'
    return 'High Variance'
  }

  const formatCategoryName = (category: string) => {
    const names = {
      appetizers: 'Appetizers',
      mainCourse: 'Main Course',
      rice: 'Rice',
      bread: 'Bread',
      beverages: 'Beverages',
      desserts: 'Desserts'
    }
    return names[category] || category
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Menu Mix Variance Across Locations
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: CMP_011 | Category Performance Consistency Analysis
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
            <strong>Formula:</strong> (Category % of revenue at Location A - Category % at Location B) for each category; identify variance
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Percentage of revenue from each category (appetizers, mains, beverages, etc.) by location.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> Variance indicates local preferences or marketing effectiveness differences.
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
            <div className="text-xs font-normal text-green-600">Each category within ±5% of chain average</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">±5–10% variance by category</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&gt;±10% variance</div>
          </div>
        </div>
      </div>

      {/* Chain Summary */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          📈 Chain Menu Mix Consistency Summary
        </h2>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <span className="text-xs font-normal text-gray-500">Maximum Variance</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getStatusColor(chainMaxVariance)}`}>
                ±{chainMaxVariance.toFixed(1)}%
              </span>
              <span>{getStatusIcon(chainMaxVariance)}</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Consistency Status</span>
            <div className={`text-xs font-normal ${getStatusColor(chainMaxVariance)}`}>
              {getStatusLabel(chainMaxVariance)}
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Locations in Range</span>
            <div className="text-xs font-normal text-black dark:text-white">
              {menuMixData.filter(loc => loc.overallVariance <= 5).length} of {menuMixData.length}
            </div>
          </div>
        </div>
      </div>

      {/* Category Mix Heatmap */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🔥 Category Mix Heatmap (% Revenue by Location)
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2 font-bold text-black dark:text-white">Category</th>
                <th className="text-center p-2 font-bold text-gray-500">Chain Avg</th>
                {menuMixData.map((location) => (
                  <th key={location.restaurant.id} className="text-center p-2 font-bold text-black dark:text-white">
                    {location.restaurant.shortName}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr key={category} className="border-b">
                  <td className="p-2 font-bold text-gray-700 dark:text-gray-300">
                    {formatCategoryName(category)}
                  </td>
                  <td className="text-center p-2 text-gray-500">
                    {menuMixData[0].categoryMix[category].chainAvg.toFixed(1)}%
                  </td>
                  {menuMixData.map((location) => {
                    const categoryData = location.categoryMix[category]
                    return (
                      <td key={location.restaurant.id} className="text-center p-2">
                        <div className={`rounded px-1 ${getStatusBg(categoryData.variance)}`}>
                          <div className="font-bold text-black dark:text-white">
                            {categoryData.percentage.toFixed(1)}%
                          </div>
                          <div className={`text-xs ${getStatusColor(categoryData.variance)}`}>
                            {categoryData.variance > 0 ? '+' : ''}{categoryData.variance.toFixed(1)}%
                          </div>
                        </div>
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Location Analysis */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Menu Mix Analysis
        </h2>
        <div className="space-y-3">
          {menuMixData
            .sort((a, b) => a.overallVariance - b.overallVariance)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.overallVariance)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span>{getStatusIcon(location.overallVariance)}</span>
                </div>
                <div className="text-right">
                  <div className={`text-xs font-bold ${getStatusColor(location.overallVariance)}`}>
                    ±{location.overallVariance.toFixed(1)}% max variance
                  </div>
                  <div className="text-xs font-normal text-gray-500">
                    ₹{location.totalRevenue.toLocaleString('en-IN')} revenue
                  </div>
                </div>
              </div>
              
              {/* Category Breakdown */}
              <div className="mt-3">
                <h4 className="text-xs font-bold text-gray-600 mb-1">Category Mix Breakdown</h4>
                <div className="grid grid-cols-3 gap-2">
                  {categories.map((category) => {
                    const categoryData = location.categoryMix[category]
                    return (
                      <div key={category} className="flex justify-between text-xs">
                        <span className="text-gray-500">{formatCategoryName(category)}:</span>
                        <div className="text-right">
                          <span className="font-normal text-black dark:text-white">
                            {categoryData.percentage.toFixed(1)}%
                          </span>
                          <span className={`ml-1 ${getStatusColor(categoryData.variance)}`}>
                            ({categoryData.variance > 0 ? '+' : ''}{categoryData.variance.toFixed(1)}%)
                          </span>
                        </div>
                      </div>
                    )
                  })}
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
              <li>• PetPooja POS (revenue by category, by location)</li>
              <li>• Menu categorization data</li>
              <li>• Sales analytics platform</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Monthly analysis</li>
              <li>• Red alert if &gt;±10% variance</li>
              <li>• Quarterly marketing effectiveness review</li>
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
            • Accept some variance due to local tastes (North vs South preferences)
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Larger variance may indicate different marketing effectiveness
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Consider regional festivals affecting category preferences
          </p>
        </div>
      </div>

      {/* Users & Access */}
      <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-lg border border-gray-200">
        <h2 className="text-xs font-bold text-black dark:text-white mb-2">
          👥 Authorized Users
        </h2>
        <p className="text-xs font-normal text-gray-500">
          Manager, Finance
        </p>
      </div>
    </div>
  )
}