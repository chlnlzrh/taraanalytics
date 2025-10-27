import { RESTAURANTS } from '@/lib/restaurant-data'

export default function DiscountPromotionCostKPI() {
  // FIN_012 Discount & Promotion Cost % - Exact specifications from restaurant_kpi_metrics_127.txt
  const discountData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      grossRevenue: 510000,
      discounts: {
        happyHour: 12000,
        loyaltyProgram: 8500,
        comboOffers: 6500,
        appDiscounts: 15000,
        deliveryPlatform: 9500
      },
      totalDiscounts: 51500,
      promotionSpend: {
        marketing: 7500,
        influencer: 3000,
        eventSponsorship: 2000
      },
      totalPromotionSpend: 12500,
      totalDiscountPromotion: 64000,
      netRevenue: 485000,
      discountPercentage: 12.5, // Warning range
      status: 'warning',
      channelBreakdown: {
        dineIn: 18500, // 36% of total discounts
        delivery: 28000, // 55% - highest discounts
        takeaway: 4500 // 9%
      }
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      grossRevenue: 415000,
      discounts: {
        happyHour: 8000,
        loyaltyProgram: 6000,
        comboOffers: 5000,
        appDiscounts: 10500,
        deliveryPlatform: 7500
      },
      totalDiscounts: 37000,
      promotionSpend: {
        marketing: 5500,
        influencer: 2000,
        eventSponsorship: 1500
      },
      totalPromotionSpend: 9000,
      totalDiscountPromotion: 46000,
      netRevenue: 395000,
      discountPercentage: 11.1, // Warning range
      status: 'warning',
      channelBreakdown: {
        dineIn: 14000,
        delivery: 20000,
        takeaway: 3000
      }
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      grossRevenue: 390000,
      discounts: {
        happyHour: 10000,
        loyaltyProgram: 7500,
        comboOffers: 6500,
        appDiscounts: 13000,
        deliveryPlatform: 8500
      },
      totalDiscounts: 45500,
      promotionSpend: {
        marketing: 6000,
        influencer: 2500,
        eventSponsorship: 1000
      },
      totalPromotionSpend: 9500,
      totalDiscountPromotion: 55000,
      netRevenue: 365000,
      discountPercentage: 14.1, // Warning range - close to critical
      status: 'warning',
      channelBreakdown: {
        dineIn: 16000,
        delivery: 25000,
        takeaway: 4500
      }
    }
  ]

  const chainGrossRevenue = discountData.reduce((sum, item) => sum + item.grossRevenue, 0)
  const chainTotalDiscounts = discountData.reduce((sum, item) => sum + item.totalDiscountPromotion, 0)
  const chainDiscountPercentage = (chainTotalDiscounts / chainGrossRevenue) * 100
  const atRiskLocations = discountData.filter(item => item.discountPercentage > 12).length

  const getStatusColor = (percentage: number) => {
    if (percentage < 8) return 'text-green-600'
    if (percentage < 12) return 'text-yellow-600'
    if (percentage < 15) return 'text-orange-600'
    return 'text-red-600'
  }

  const getStatusBg = (percentage: number) => {
    if (percentage < 8) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (percentage < 12) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    if (percentage < 15) return 'bg-orange-50 dark:bg-orange-900/20 border-orange-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getStatusIcon = (percentage: number) => {
    if (percentage < 8) return '✅'
    if (percentage < 12) return '⚠️'
    if (percentage < 15) return '🟠'
    return '🚨'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Discount & Promotion Cost %
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: FIN_012 | Indicator of Margin Erosion from Discounting
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
            <strong>Formula:</strong> (Total Discounts + Promotion Costs ÷ Gross Revenue) × 100
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Percentage of revenue given away as discounts or promotional spend. Indicator of margin erosion.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> In India's price-sensitive market, discounts easily drift >10%; >15% signals serious margin erosion.
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
            <div className="text-xs font-normal text-green-600">&lt;8%</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">8–12%</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&gt;15%</div>
          </div>
        </div>
      </div>

      {/* Chain Summary */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          📈 Chain Discount & Promotion Summary
        </h2>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <span className="text-xs font-normal text-gray-500">Chain Discount %</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getStatusColor(chainDiscountPercentage)}`}>
                {chainDiscountPercentage.toFixed(1)}%
              </span>
              <span>{getStatusIcon(chainDiscountPercentage)}</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Total Monthly Impact</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-red-600">
                ₹{chainTotalDiscounts.toLocaleString('en-IN')}
              </span>
              <span>💸</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Locations Above 12%</span>
            <div className="text-xs font-normal text-orange-600">
              {atRiskLocations}/3 locations need attention
            </div>
          </div>
        </div>
      </div>

      {/* Location Discount Analysis */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Discount Analysis (Ranked by Efficiency)
        </h2>
        <div className="space-y-3">
          {discountData
            .sort((a, b) => a.discountPercentage - b.discountPercentage)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.discountPercentage)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span>{getStatusIcon(location.discountPercentage)}</span>
                </div>
                <div className="text-right">
                  <div className={`text-xs font-bold ${getStatusColor(location.discountPercentage)}`}>
                    {location.discountPercentage.toFixed(1)}%
                  </div>
                  <div className="text-xs font-normal text-gray-500">
                    Total discount impact
                  </div>
                </div>
              </div>
              
              {/* Revenue impact */}
              <div className="grid grid-cols-4 gap-4 mb-3 text-xs">
                <div>
                  <span className="text-gray-500">Gross Revenue:</span>
                  <div className="font-bold text-black dark:text-white">₹{location.grossRevenue.toLocaleString('en-IN')}</div>
                </div>
                <div>
                  <span className="text-gray-500">Total Discounts:</span>
                  <div className="font-bold text-red-600">₹{location.totalDiscounts.toLocaleString('en-IN')}</div>
                </div>
                <div>
                  <span className="text-gray-500">Promotion Spend:</span>
                  <div className="font-bold text-orange-600">₹{location.totalPromotionSpend.toLocaleString('en-IN')}</div>
                </div>
                <div>
                  <span className="text-gray-500">Net Revenue:</span>
                  <div className="font-bold text-green-600">₹{location.netRevenue.toLocaleString('en-IN')}</div>
                </div>
              </div>

              {/* Discount type breakdown */}
              <div className="grid grid-cols-2 gap-4 mt-3">
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-2">Discount Type Breakdown</h4>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Happy Hour:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.discounts.happyHour.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Loyalty Program:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.discounts.loyaltyProgram.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Combo Offers:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.discounts.comboOffers.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">App Discounts:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.discounts.appDiscounts.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Platform Discounts:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.discounts.deliveryPlatform.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-2">Channel Discount Distribution</h4>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Dine-in:</span>
                      <span className="font-normal text-black dark:text-white">
                        ₹{location.channelBreakdown.dineIn.toLocaleString('en-IN')} 
                        ({((location.channelBreakdown.dineIn / location.totalDiscounts) * 100).toFixed(1)}%)
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Delivery:</span>
                      <span className="font-normal text-black dark:text-white">
                        ₹{location.channelBreakdown.delivery.toLocaleString('en-IN')} 
                        ({((location.channelBreakdown.delivery / location.totalDiscounts) * 100).toFixed(1)}%)
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Takeaway:</span>
                      <span className="font-normal text-black dark:text-white">
                        ₹{location.channelBreakdown.takeaway.toLocaleString('en-IN')} 
                        ({((location.channelBreakdown.takeaway / location.totalDiscounts) * 100).toFixed(1)}%)
                      </span>
                    </div>
                  </div>
                  
                  <h4 className="text-xs font-bold text-gray-600 mb-1 mt-3">Promotion Spend</h4>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Marketing:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.promotionSpend.marketing.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Influencer:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.promotionSpend.influencer.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Weekly Trend Analysis */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          📊 Weekly Discount Trend (Chain Average %)
        </h2>
        <div className="grid grid-cols-7 gap-2 text-xs text-center">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, idx) => {
            const discountPerc = [8.5, 9.2, 10.1, 11.8, 13.2, 15.5, 12.8][idx]
            return (
              <div key={day} className={`p-2 rounded ${discountPerc > 12 ? 'bg-red-100 text-red-600' : discountPerc > 8 ? 'bg-yellow-100 text-yellow-600' : 'bg-green-100 text-green-600'}`}>
                <div className="font-bold">{day}</div>
                <div>{discountPerc}%</div>
              </div>
            )
          })}
        </div>
        <div className="mt-2 text-xs text-gray-500">
          Note: Weekend discounts typically higher due to increased competition
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
              <li>• PetPooja POS /orders (discount field)</li>
              <li>• Marketing system (promo spend)</li>
              <li>• Platform commission reports</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Daily</li>
              <li>• Alert: Yellow if 8–12%; Red if >15%</li>
              <li>• Drill down: by discount type, by channel, by location</li>
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
            • High price sensitivity in metros; track separately: app discounts vs. dine-in vs. delivery platform discounts
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Festival season discounting can temporarily spike above thresholds
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Monitor competitor discount strategies in local markets
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