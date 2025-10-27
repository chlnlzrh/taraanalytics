import { RESTAURANTS } from '@/lib/restaurant-data'

export default function WasteSpoilageKPI() {
  // OPR_015 Waste & Spoilage % - Exact specifications from restaurant_kpi_metrics_127.txt
  const wasteData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      totalPurchases: 142500,
      wasteValue: 5700, // 4% - good performance
      wastePercentage: 4.0,
      status: 'good',
      variance: -20.0,
      wasteBreakdown: {
        spoilage: { value: 2280, percentage: 1.6, category: 'Vegetables & Meat' },
        prepWaste: { value: 1710, percentage: 1.2, category: 'Kitchen Prep' },
        customerReturns: { value: 855, percentage: 0.6, category: 'Order Errors' },
        complimentary: { value: 855, percentage: 0.6, category: 'Service Recovery' }
      },
      categoryAnalysis: {
        vegetables: { purchases: 42750, waste: 2138, percentage: 5.0 },
        meat: { purchases: 28500, waste: 1425, percentage: 5.0 },
        dryGoods: { purchases: 42750, waste: 1283, percentage: 3.0 },
        beverages: { purchases: 28500, waste: 855, percentage: 3.0 }
      },
      monthlyTrend: [3.2, 3.8, 4.0, 4.5, 4.2, 4.0], // Last 6 months
      costImpact: {
        monthlyLoss: 5700,
        annualProjection: 68400,
        preventablePortion: 3420 // 60% preventable
      },
      improvements: {
        betterForecasting: 1140, // Potential savings
        staffTraining: 855,
        equipmentMaintenance: 570,
        portionControl: 855
      }
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      totalPurchases: 112500,
      wasteValue: 7875, // 7% - warning range
      wastePercentage: 7.0,
      status: 'warning',
      variance: 40.0,
      wasteBreakdown: {
        spoilage: { value: 3938, percentage: 3.5, category: 'Vegetables & Meat' },
        prepWaste: { value: 2250, percentage: 2.0, category: 'Kitchen Prep' },
        customerReturns: { value: 1125, percentage: 1.0, category: 'Order Errors' },
        complimentary: { value: 563, percentage: 0.5, category: 'Service Recovery' }
      },
      categoryAnalysis: {
        vegetables: { purchases: 33750, waste: 2700, percentage: 8.0 },
        meat: { purchases: 22500, waste: 1800, percentage: 8.0 },
        dryGoods: { purchases: 33750, waste: 2025, percentage: 6.0 },
        beverages: { purchases: 22500, waste: 1350, percentage: 6.0 }
      },
      monthlyTrend: [5.5, 6.2, 7.0, 7.8, 7.5, 7.0], // Last 6 months
      costImpact: {
        monthlyLoss: 7875,
        annualProjection: 94500,
        preventablePortion: 5513 // 70% preventable
      },
      improvements: {
        betterForecasting: 1575,
        staffTraining: 1575,
        equipmentMaintenance: 788,
        portionControl: 1575
      }
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      totalPurchases: 92500,
      wasteValue: 9250, // 10% - critical level
      wastePercentage: 10.0,
      status: 'critical',
      variance: 100.0,
      wasteBreakdown: {
        spoilage: { value: 5550, percentage: 6.0, category: 'Vegetables & Meat' },
        prepWaste: { value: 1850, percentage: 2.0, category: 'Kitchen Prep' },
        customerReturns: { value: 1388, percentage: 1.5, category: 'Order Errors' },
        complimentary: { value: 463, percentage: 0.5, category: 'Service Recovery' }
      },
      categoryAnalysis: {
        vegetables: { purchases: 27750, waste: 3608, percentage: 13.0 },
        meat: { purchases: 18500, waste: 2590, percentage: 14.0 },
        dryGoods: { purchases: 27750, waste: 1665, percentage: 6.0 },
        beverages: { purchases: 18500, waste: 1388, percentage: 7.5 }
      },
      monthlyTrend: [8.2, 9.1, 10.0, 11.2, 10.8, 10.0], // Last 6 months
      costImpact: {
        monthlyLoss: 9250,
        annualProjection: 111000,
        preventablePortion: 7770 // 84% preventable - urgent action needed
      },
      improvements: {
        betterForecasting: 2313,
        staffTraining: 2313,
        equipmentMaintenance: 925,
        portionControl: 2219
      }
    }
  ]

  const chainAverage = wasteData.reduce((sum, item) => sum + item.wastePercentage, 0) / wasteData.length

  const getStatusColor = (percentage: number) => {
    if (percentage <= 5) return 'text-green-600'
    if (percentage <= 8) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (percentage: number) => {
    if (percentage <= 5) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (percentage <= 8) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getWasteTypeColor = (type: string) => {
    if (type.includes('spoilage')) return 'text-red-600'
    if (type.includes('prepWaste')) return 'text-orange-600'
    if (type.includes('customerReturns')) return 'text-yellow-600'
    return 'text-blue-600'
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xs font-bold text-black dark:text-white">
          Waste & Spoilage %
        </h1>
        <p className="text-xs font-normal text-gray-500 mt-1">
          KPI ID: OPR_015 | Cost Control & Profitability Protection
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200">
        <h2 className="text-xs font-bold text-blue-900 dark:text-blue-300 mb-2">
          📊 Definition & Formula
        </h2>
        <div className="space-y-2">
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Formula:</strong> (Waste Value ÷ Total Purchases) × 100
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Percentage of food purchases wasted (spoilage, prep waste, returns, complimentary). In high-cost operations, waste = profit destruction.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> Target &lt;5%; &gt;8% indicates purchasing, prep, or kitchen process problems. Each 1% waste = significant profit loss.
          </p>
        </div>
      </div>

      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🎯 Target Ranges & Alert Thresholds
        </h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded border border-green-200">
            <div className="text-xs font-bold text-green-700 dark:text-green-300">TARGET</div>
            <div className="text-xs font-normal text-green-600">&lt;5%</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">5–8%</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&gt;8%</div>
          </div>
        </div>
      </div>

      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          📈 Chain Summary & Financial Impact
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-gray-50 dark:bg-gray-900/20 rounded border">
            <div className="text-xs font-bold text-gray-700 dark:text-gray-300">Chain Average</div>
            <div className="text-xs font-normal text-black dark:text-white">{chainAverage.toFixed(1)}% waste</div>
          </div>
          <div className="text-center p-3 bg-gray-50 dark:bg-gray-900/20 rounded border">
            <div className="text-xs font-bold text-gray-700 dark:text-gray-300">Annual Chain Loss</div>
            <div className="text-xs font-normal text-black dark:text-white">
              ₹{wasteData.reduce((sum, item) => sum + item.costImpact.annualProjection, 0).toLocaleString()}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Performance (Best = Lowest Waste %)
        </h2>
        <div className="space-y-3">
          {wasteData
            .sort((a, b) => a.wastePercentage - b.wastePercentage)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.wastePercentage)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-black dark:text-white">
                    {location.wastePercentage.toFixed(1)}% waste
                  </div>
                  <div className={`text-xs font-normal ${location.variance < 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {location.variance > 0 ? '+' : ''}{location.variance.toFixed(1)}% vs target (5%)
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-3">
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-1">Waste Category Breakdown</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-red-600">Spoilage:</span>
                      <span className="font-normal text-black dark:text-white">{location.wasteBreakdown.spoilage.percentage.toFixed(1)}%</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-orange-600">Prep Waste:</span>
                      <span className="font-normal text-black dark:text-white">{location.wasteBreakdown.prepWaste.percentage.toFixed(1)}%</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-yellow-600">Returns:</span>
                      <span className="font-normal text-black dark:text-white">{location.wasteBreakdown.customerReturns.percentage.toFixed(1)}%</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-blue-600">Comps:</span>
                      <span className="font-normal text-black dark:text-white">{location.wasteBreakdown.complimentary.percentage.toFixed(1)}%</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-1">Cost Impact</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Monthly Loss:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.costImpact.monthlyLoss.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Annual Projection:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.costImpact.annualProjection.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Preventable:</span>
                      <span className="font-normal text-green-600">₹{location.costImpact.preventablePortion.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Preventable %:</span>
                      <span className="font-normal text-green-600">
                        {((location.costImpact.preventablePortion / location.costImpact.monthlyLoss) * 100).toFixed(0)}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <h4 className="text-xs font-bold text-gray-600 mb-1">High-Risk Categories</h4>
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(location.categoryAnalysis)
                    .filter(([_, data]: [string, any]) => data.percentage > 7)
                    .map(([category, data]: [string, any]) => (
                    <div key={category} className="p-2 bg-red-50 dark:bg-red-900/20 rounded text-xs">
                      <span className="text-red-600 font-bold capitalize">{category}:</span>
                      <span className="text-black dark:text-white ml-1">{data.percentage.toFixed(1)}%</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-3 p-2 bg-green-50 dark:bg-green-900/20 rounded">
                <h5 className="text-xs font-bold text-green-700 dark:text-green-300 mb-1">Improvement Opportunities</h5>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-green-600">Better Forecasting:</span>
                    <span className="text-black dark:text-white">₹{location.improvements.betterForecasting.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-600">Staff Training:</span>
                    <span className="text-black dark:text-white">₹{location.improvements.staffTraining.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-600">Equipment Maintenance:</span>
                    <span className="text-black dark:text-white">₹{location.improvements.equipmentMaintenance.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-600">Portion Control:</span>
                    <span className="text-black dark:text-white">₹{location.improvements.portionControl.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200">
        <h2 className="text-xs font-bold text-orange-900 dark:text-orange-300 mb-2">
          🇮🇳 India-Specific Monitoring
        </h2>
        <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
          • Climate impact: Higher spoilage risk in monsoon and summer; power cuts affect refrigeration; track waste by season
        </p>
      </div>
    </div>
  )
}