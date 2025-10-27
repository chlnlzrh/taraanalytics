import { RESTAURANTS } from '@/lib/restaurant-data'

export default function Top10RevenueContributionKPI() {
  // CMP_010 Top 10 Item Revenue Contribution % - Exact specifications from restaurant_kpi_metrics_127.txt
  const top10Data = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      top10Items: [
        { name: 'Butter Chicken', revenueContribution: 12.5, margin: 68, rank: 1, category: 'Main Course', monthlyRevenue: 356250 },
        { name: 'Chicken Biryani', revenueContribution: 9.8, margin: 65, rank: 2, category: 'Main Course', monthlyRevenue: 279300 },
        { name: 'Paneer Butter Masala', revenueContribution: 8.2, margin: 72, rank: 3, category: 'Main Course', monthlyRevenue: 233700 },
        { name: 'Dal Makhani', revenueContribution: 6.5, margin: 75, rank: 4, category: 'Main Course', monthlyRevenue: 185250 },
        { name: 'Naan Bread', revenueContribution: 5.8, margin: 78, rank: 5, category: 'Bread', monthlyRevenue: 165300 },
        { name: 'Lassi (Sweet)', revenueContribution: 4.9, margin: 82, rank: 6, category: 'Beverages', monthlyRevenue: 139650 },
        { name: 'Tandoori Chicken', revenueContribution: 4.2, margin: 70, rank: 7, category: 'Starters', monthlyRevenue: 119700 },
        { name: 'Jeera Rice', revenueContribution: 3.8, margin: 85, rank: 8, category: 'Rice', monthlyRevenue: 108300 },
        { name: 'Mixed Veg Curry', revenueContribution: 3.5, margin: 76, rank: 9, category: 'Main Course', monthlyRevenue: 99750 },
        { name: 'Gulab Jamun', revenueContribution: 3.2, margin: 88, rank: 10, category: 'Desserts', monthlyRevenue: 91200 }
      ],
      top10Percentage: 62.4, // Total contribution of top 10 items
      status: 'good', // Within 55-65% target
      totalItems: 85,
      avgMargin: 75.9
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      top10Items: [
        { name: 'Chicken Tikka Masala', revenueContribution: 11.8, margin: 66, rank: 1, category: 'Main Course', monthlyRevenue: 269220 },
        { name: 'Veg Biryani', revenueContribution: 10.2, margin: 70, rank: 2, category: 'Main Course', monthlyRevenue: 232560 },
        { name: 'Palak Paneer', revenueContribution: 8.5, margin: 74, rank: 3, category: 'Main Course', monthlyRevenue: 193800 },
        { name: 'Roti', revenueContribution: 6.8, margin: 80, rank: 4, category: 'Bread', monthlyRevenue: 155040 },
        { name: 'Chicken Curry', revenueContribution: 5.9, margin: 68, rank: 5, category: 'Main Course', monthlyRevenue: 134640 },
        { name: 'Mango Lassi', revenueContribution: 5.2, margin: 85, rank: 6, category: 'Beverages', monthlyRevenue: 118560 },
        { name: 'Aloo Gobi', revenueContribution: 4.6, margin: 72, rank: 7, category: 'Main Course', monthlyRevenue: 104880 },
        { name: 'Basmati Rice', revenueContribution: 4.0, margin: 88, rank: 8, category: 'Rice', monthlyRevenue: 91200 },
        { name: 'Raita', revenueContribution: 3.7, margin: 90, rank: 9, category: 'Sides', monthlyRevenue: 84360 },
        { name: 'Kulfi', revenueContribution: 3.1, margin: 85, rank: 10, category: 'Desserts', monthlyRevenue: 70680 }
      ],
      top10Percentage: 63.8,
      status: 'good',
      totalItems: 80,
      avgMargin: 77.8
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      top10Items: [
        { name: 'Mutton Curry', revenueContribution: 14.2, margin: 62, rank: 1, category: 'Main Course', monthlyRevenue: 247740 },
        { name: 'Chole Bhature', revenueContribution: 9.5, margin: 65, rank: 2, category: 'Main Course', monthlyRevenue: 165750 },
        { name: 'Rajma Rice', revenueContribution: 7.8, margin: 70, rank: 3, category: 'Main Course', monthlyRevenue: 136110 },
        { name: 'Samosa (2 pcs)', revenueContribution: 6.2, margin: 82, rank: 4, category: 'Starters', monthlyRevenue: 108210 },
        { name: 'Masala Chai', revenueContribution: 5.5, margin: 88, rank: 5, category: 'Beverages', monthlyRevenue: 95975 },
        { name: 'Kadhi Chawal', revenueContribution: 4.9, margin: 75, rank: 6, category: 'Main Course', monthlyRevenue: 85525 },
        { name: 'Paratha', revenueContribution: 4.3, margin: 78, rank: 7, category: 'Bread', monthlyRevenue: 75035 },
        { name: 'Dahi Vada', revenueContribution: 3.8, margin: 80, rank: 8, category: 'Snacks', monthlyRevenue: 66310 },
        { name: 'Pickle & Papad', revenueContribution: 3.5, margin: 92, rank: 9, category: 'Sides', monthlyRevenue: 61075 },
        { name: 'Jalebi', revenueContribution: 3.2, margin: 85, rank: 10, category: 'Desserts', monthlyRevenue: 55840 }
      ],
      top10Percentage: 62.9,
      status: 'good',
      totalItems: 78,
      avgMargin: 77.7
    }
  ]

  const chainAvgTop10 = top10Data.reduce((sum, item) => sum + item.top10Percentage, 0) / top10Data.length
  const chainAvgMargin = top10Data.reduce((sum, item) => sum + item.avgMargin, 0) / top10Data.length

  const getStatusColor = (percentage: number) => {
    if (percentage >= 55 && percentage <= 65) return 'text-green-600'
    if (percentage >= 40 && percentage < 55) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (percentage: number) => {
    if (percentage >= 55 && percentage <= 65) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (percentage >= 40 && percentage < 55) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getStatusIcon = (percentage: number) => {
    if (percentage >= 55 && percentage <= 65) return '🎯'
    if (percentage >= 40 && percentage < 55) return '⚠️'
    return '🚨'
  }

  const getStatusLabel = (percentage: number) => {
    if (percentage >= 55 && percentage <= 65) return 'Optimal Concentration'
    if (percentage >= 40 && percentage < 55) return 'Fragmented Menu'
    return 'Very Fragmented'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Top 10 Item Revenue Contribution %
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: CMP_010 | Menu Concentration Analysis
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
            <strong>Formula:</strong> % of total revenue from top 10 highest-selling items
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Typically 50–65% of revenue from 15–20 items. Focus quality and margins on these.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> Top 10 items drive most profit; small improvements cascade significantly.
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
            <div className="text-xs font-normal text-green-600">Top 10 = 55–65% of revenue</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">40–55% (fragmented menu)</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&lt;40% (very fragmented)</div>
          </div>
        </div>
      </div>

      {/* Chain Summary */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          📈 Chain Menu Concentration Summary
        </h2>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <span className="text-xs font-normal text-gray-500">Average Top 10 Contribution</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getStatusColor(chainAvgTop10)}`}>
                {chainAvgTop10.toFixed(1)}%
              </span>
              <span>{getStatusIcon(chainAvgTop10)}</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Average Top 10 Margin</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-green-600">
                {chainAvgMargin.toFixed(1)}%
              </span>
              <span>💰</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Menu Strategy Status</span>
            <div className={`text-xs font-normal ${getStatusColor(chainAvgTop10)}`}>
              {getStatusLabel(chainAvgTop10)}
            </div>
          </div>
        </div>
      </div>

      {/* Location Analysis */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Top 10 Performance Analysis
        </h2>
        <div className="space-y-3">
          {top10Data
            .sort((a, b) => b.top10Percentage - a.top10Percentage)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.top10Percentage)}`}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span>{getStatusIcon(location.top10Percentage)}</span>
                </div>
                <div className="text-right">
                  <div className={`text-xs font-bold ${getStatusColor(location.top10Percentage)}`}>
                    {location.top10Percentage.toFixed(1)}% contribution
                  </div>
                  <div className="text-xs font-normal text-gray-500">
                    {location.avgMargin.toFixed(1)}% avg margin | {location.totalItems} total items
                  </div>
                </div>
              </div>
              
              {/* Top 10 Items Breakdown */}
              <div className="mt-3">
                <h4 className="text-xs font-bold text-gray-600 mb-2">Top 10 Items (Revenue Drivers)</h4>
                <div className="grid grid-cols-1 gap-1">
                  {location.top10Items.slice(0, 5).map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-1 bg-gray-50 dark:bg-gray-700 rounded text-xs">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-gray-600">#{item.rank}</span>
                        <span className="font-normal text-black dark:text-white">{item.name}</span>
                        <span className="text-gray-500">({item.category})</span>
                      </div>
                      <div className="text-right">
                        <span className="font-bold text-green-600">{item.revenueContribution}%</span>
                        <span className="text-gray-500 ml-1">| {item.margin}% margin</span>
                      </div>
                    </div>
                  ))}
                  <div className="text-xs text-gray-500 text-center mt-1">
                    ... and 5 more items contributing {(location.top10Percentage - location.top10Items.slice(0, 5).reduce((sum, item) => sum + item.revenueContribution, 0)).toFixed(1)}%
                  </div>
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
              <li>• PetPooja POS (revenue by item)</li>
              <li>• Cumulative ranking analysis</li>
              <li>• Menu performance tracking</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Monthly analysis</li>
              <li>• Red alert if top 10 &lt;40% revenue</li>
              <li>• Quarterly menu strategy review</li>
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
            • Indian restaurants often offer large menus; consolidate and focus on core strength items
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Regional preferences may affect top items per location
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Balance traditional favorites with profitable innovations
          </p>
        </div>
      </div>

      {/* Users & Access */}
      <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-lg border border-gray-200">
        <h2 className="text-xs font-bold text-black dark:text-white mb-2">
          👥 Authorized Users
        </h2>
        <p className="text-xs font-normal text-gray-500">
          Finance, Manager, Chef
        </p>
      </div>
    </div>
  )
}