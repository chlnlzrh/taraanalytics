import { RESTAURANTS } from '@/lib/restaurant-data'

export default function ItemContributionMarginKPI() {
  // CMP_012 Item Contribution Margin % - Exact specifications from restaurant_kpi_metrics_127.txt
  const itemMarginData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      itemAnalysis: [
        { name: 'Butter Chicken', volume: 450, margin: 68, quadrant: 'star', category: 'Main Course', revenue: 356250, cogs: 114000 },
        { name: 'Dal Makhani', volume: 320, margin: 75, quadrant: 'star', category: 'Main Course', revenue: 185250, cogs: 46312 },
        { name: 'Naan Bread', volume: 580, margin: 78, quadrant: 'star', category: 'Bread', revenue: 165300, cogs: 36366 },
        { name: 'Paneer Special', volume: 120, margin: 82, quadrant: 'puzzle', category: 'Main Course', revenue: 75000, cogs: 13500 },
        { name: 'Chicken Biryani', volume: 380, margin: 65, quadrant: 'plow', category: 'Main Course', revenue: 279300, cogs: 97755 },
        { name: 'Basic Roti', volume: 200, margin: 45, quadrant: 'dog', category: 'Bread', revenue: 45000, cogs: 24750 }
      ],
      avgMargin: 72.5,
      starsCount: 3,
      dogsCount: 1,
      totalItems: 85
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      itemAnalysis: [
        { name: 'Chicken Tikka Masala', volume: 420, margin: 66, quadrant: 'star', category: 'Main Course', revenue: 269220, cogs: 91554 },
        { name: 'Veg Biryani', volume: 350, margin: 70, quadrant: 'star', category: 'Main Course', revenue: 232560, cogs: 69768 },
        { name: 'Mango Lassi', volume: 180, margin: 85, quadrant: 'puzzle', category: 'Beverages', revenue: 118560, cogs: 17784 },
        { name: 'Palak Paneer', volume: 280, margin: 74, quadrant: 'star', category: 'Main Course', revenue: 193800, cogs: 50388 },
        { name: 'Plain Rice', volume: 250, margin: 88, quadrant: 'plow', category: 'Rice', revenue: 91200, cogs: 10944 },
        { name: 'Filter Coffee', volume: 80, margin: 42, quadrant: 'dog', category: 'Beverages', revenue: 28000, cogs: 16240 }
      ],
      avgMargin: 70.8,
      starsCount: 3,
      dogsCount: 1,
      totalItems: 80
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      itemAnalysis: [
        { name: 'Mutton Curry', volume: 280, margin: 62, quadrant: 'plow', category: 'Main Course', revenue: 247740, cogs: 94141 },
        { name: 'Chole Bhature', volume: 320, margin: 65, quadrant: 'star', category: 'Main Course', revenue: 165750, cogs: 58012 },
        { name: 'Masala Chai', volume: 480, margin: 88, quadrant: 'star', category: 'Beverages', revenue: 95975, cogs: 11517 },
        { name: 'Special Thali', volume: 150, margin: 78, quadrant: 'puzzle', category: 'Combo', revenue: 142500, cogs: 31350 },
        { name: 'Samosa', volume: 380, margin: 82, quadrant: 'star', category: 'Starters', revenue: 108210, cogs: 19478 },
        { name: 'Cold Drink', volume: 120, margin: 35, quadrant: 'dog', category: 'Beverages', revenue: 18000, cogs: 11700 }
      ],
      avgMargin: 68.3,
      starsCount: 3,
      dogsCount: 1,
      totalItems: 78
    }
  ]

  const chainAvgMargin = itemMarginData.reduce((sum, item) => sum + item.avgMargin, 0) / itemMarginData.length
  const chainStarsCount = itemMarginData.reduce((sum, item) => sum + item.starsCount, 0)
  const chainDogsCount = itemMarginData.reduce((sum, item) => sum + item.dogsCount, 0)

  const getQuadrantColor = (quadrant: string) => {
    switch (quadrant) {
      case 'star': return 'text-green-600'
      case 'plow': return 'text-blue-600'
      case 'puzzle': return 'text-yellow-600'
      case 'dog': return 'text-red-600'
      default: return 'text-gray-600'
    }
  }

  const getQuadrantBg = (quadrant: string) => {
    switch (quadrant) {
      case 'star': return 'bg-green-50 dark:bg-green-900/20 border-green-200'
      case 'plow': return 'bg-blue-50 dark:bg-blue-900/20 border-blue-200'
      case 'puzzle': return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
      case 'dog': return 'bg-red-50 dark:bg-red-900/20 border-red-200'
      default: return 'bg-gray-50 dark:bg-gray-900/20 border-gray-200'
    }
  }

  const getQuadrantIcon = (quadrant: string) => {
    switch (quadrant) {
      case 'star': return '⭐'
      case 'plow': return '🐎'
      case 'puzzle': return '🧩'
      case 'dog': return '🐕'
      default: return '❓'
    }
  }

  const getQuadrantLabel = (quadrant: string) => {
    switch (quadrant) {
      case 'star': return 'Star (High Vol, High Margin)'
      case 'plow': return 'Plow Horse (High Vol, Low Margin)'
      case 'puzzle': return 'Puzzle (Low Vol, High Margin)'
      case 'dog': return 'Dog (Low Vol, Low Margin)'
      default: return 'Unknown'
    }
  }

  const getMarginColor = (margin: number) => {
    if (margin >= 70) return 'text-green-600'
    if (margin >= 50) return 'text-yellow-600'
    return 'text-red-600'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Item Contribution Margin %
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: CMP_012 | Menu Engineering Framework Analysis
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
            <strong>Formula:</strong> (Item Revenue - Item COGS) ÷ Item Revenue × 100; rank by margin
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Profit margin on each item. Identify stars (high volume, high margin), plowhorses (high volume, low margin), puzzles (low volume, high margin), dogs (low volume, low margin).
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> Menu engineering framework helps optimize portfolio.
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
            <div className="text-xs font-normal text-green-600">Average item margin &gt;70%</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">50–70% (check volume)</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&lt;50% (loss-leader)</div>
          </div>
        </div>
      </div>

      {/* Menu Engineering Legend */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🎭 Menu Engineering Quadrants
        </h2>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2 p-2 bg-green-50 dark:bg-green-900/20 rounded border border-green-200">
            <span>⭐</span>
            <span className="text-xs font-bold text-green-700 dark:text-green-300">STARS</span>
            <span className="text-xs text-green-600">High Volume + High Margin</span>
          </div>
          <div className="flex items-center gap-2 p-2 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200">
            <span>🐎</span>
            <span className="text-xs font-bold text-blue-700 dark:text-blue-300">PLOW HORSES</span>
            <span className="text-xs text-blue-600">High Volume + Low Margin</span>
          </div>
          <div className="flex items-center gap-2 p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <span>🧩</span>
            <span className="text-xs font-bold text-yellow-700 dark:text-yellow-300">PUZZLES</span>
            <span className="text-xs text-yellow-600">Low Volume + High Margin</span>
          </div>
          <div className="flex items-center gap-2 p-2 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <span>🐕</span>
            <span className="text-xs font-bold text-red-700 dark:text-red-300">DOGS</span>
            <span className="text-xs text-red-600">Low Volume + Low Margin</span>
          </div>
        </div>
      </div>

      {/* Chain Summary */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          📈 Chain Menu Engineering Summary
        </h2>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <span className="text-xs font-normal text-gray-500">Average Item Margin</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getMarginColor(chainAvgMargin)}`}>
                {chainAvgMargin.toFixed(1)}%
              </span>
              <span>💰</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Total Stars</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-green-600">
                {chainStarsCount} items
              </span>
              <span>⭐</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Total Dogs</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-red-600">
                {chainDogsCount} items
              </span>
              <span>🐕</span>
            </div>
          </div>
        </div>
      </div>

      {/* Location Analysis */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Menu Engineering Analysis
        </h2>
        <div className="space-y-3">
          {itemMarginData
            .sort((a, b) => b.avgMargin - a.avgMargin)
            .map((location, index) => (
            <div key={location.restaurant.id} className="p-3 rounded border bg-white dark:bg-gray-800">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span className="text-xs font-normal text-green-600">
                    {location.starsCount} ⭐ | {location.dogsCount} 🐕
                  </span>
                </div>
                <div className="text-right">
                  <div className={`text-xs font-bold ${getMarginColor(location.avgMargin)}`}>
                    {location.avgMargin.toFixed(1)}% avg margin
                  </div>
                  <div className="text-xs font-normal text-gray-500">
                    {location.totalItems} total items
                  </div>
                </div>
              </div>
              
              {/* Sample Items by Quadrant */}
              <div className="mt-3">
                <h4 className="text-xs font-bold text-gray-600 mb-2">Sample Items by Quadrant</h4>
                <div className="space-y-1">
                  {location.itemAnalysis.map((item, idx) => (
                    <div key={idx} className={`p-2 rounded border ${getQuadrantBg(item.quadrant)}`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span>{getQuadrantIcon(item.quadrant)}</span>
                          <span className="text-xs font-bold text-black dark:text-white">
                            {item.name}
                          </span>
                          <span className="text-xs font-normal text-gray-500">
                            ({item.category})
                          </span>
                        </div>
                        <div className="text-right">
                          <div className={`text-xs font-bold ${getMarginColor(item.margin)}`}>
                            {item.margin}% margin
                          </div>
                          <div className="text-xs font-normal text-gray-500">
                            {item.volume} units/month
                          </div>
                        </div>
                      </div>
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
              <li>• PetPooja POS (revenue by item)</li>
              <li>• Recipe cost database (COGS by item)</li>
              <li>• Volume tracking analytics</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Weekly analysis</li>
              <li>• Red alert if item &lt;50% margin</li>
              <li>• Quarterly menu engineering review</li>
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
            • Some signature items intentionally lower margin for brand; balance strategically
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Consider cultural importance vs profitability (traditional items)
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Regional ingredient cost variations affect COGS calculations
          </p>
        </div>
      </div>

      {/* Users & Access */}
      <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-lg border border-gray-200">
        <h2 className="text-xs font-bold text-black dark:text-white mb-2">
          👥 Authorized Users
        </h2>
        <p className="text-xs font-normal text-gray-500">
          Finance, Chef
        </p>
      </div>
    </div>
  )
}