import { RESTAURANTS } from '@/lib/restaurant-data'

export default function StockOutIncidentsKPI() {
  // OPR_014 Stock-out Incidents - Exact specifications from restaurant_kpi_metrics_127.txt
  const stockOutData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      weeklyIncidents: 1, // Good performance - below 2 incidents/week
      status: 'good',
      variance: -50.0,
      incidentDetails: [
        { item: 'Paneer Butter Masala', category: 'Main Course', duration: '2.5 hours', lostSales: 8, revenue: 1600 }
      ],
      categoryBreakdown: {
        appetizers: { incidents: 0, avgDuration: 0, lostSales: 0 },
        mainCourse: { incidents: 1, avgDuration: 2.5, lostSales: 8 },
        beverages: { incidents: 0, avgDuration: 0, lostSales: 0 },
        desserts: { incidents: 0, avgDuration: 0, lostSales: 0 }
      },
      rootCauses: {
        supplierDelay: 0,
        demandSpike: 1,
        inventoryMiscount: 0,
        qualityReject: 0
      },
      monthlyTrend: [0, 1, 1, 2, 1, 1], // Last 6 weeks
      totalLostRevenue: 1600,
      customerImpact: {
        substitutions: 6,
        walkAways: 2,
        complaints: 1
      }
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      weeklyIncidents: 3, // Warning range
      status: 'warning',
      variance: 50.0,
      incidentDetails: [
        { item: 'Chicken Tikka', category: 'Appetizer', duration: '1.5 hours', lostSales: 12, revenue: 1800 },
        { item: 'Masala Dosa', category: 'Main Course', duration: '3 hours', lostSales: 15, revenue: 1875 },
        { item: 'Mango Lassi', category: 'Beverage', duration: '4 hours', lostSales: 20, revenue: 1400 }
      ],
      categoryBreakdown: {
        appetizers: { incidents: 1, avgDuration: 1.5, lostSales: 12 },
        mainCourse: { incidents: 1, avgDuration: 3.0, lostSales: 15 },
        beverages: { incidents: 1, avgDuration: 4.0, lostSales: 20 },
        desserts: { incidents: 0, avgDuration: 0, lostSales: 0 }
      },
      rootCauses: {
        supplierDelay: 1,
        demandSpike: 1,
        inventoryMiscount: 1,
        qualityReject: 0
      },
      monthlyTrend: [2, 3, 3, 4, 3, 3], // Last 6 weeks
      totalLostRevenue: 5075,
      customerImpact: {
        substitutions: 30,
        walkAways: 17,
        complaints: 8
      }
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      weeklyIncidents: 7, // Critical - above 5 incidents/week
      status: 'critical',
      variance: 250.0,
      incidentDetails: [
        { item: 'Aloo Gobi', category: 'Main Course', duration: '5 hours', lostSales: 25, revenue: 2500 },
        { item: 'Samosa', category: 'Appetizer', duration: '3 hours', lostSales: 30, revenue: 1500 },
        { item: 'Biryani', category: 'Main Course', duration: '2 hours', lostSales: 18, revenue: 3240 },
        { item: 'Chai', category: 'Beverage', duration: '6 hours', lostSales: 45, revenue: 1350 },
        { item: 'Raita', category: 'Side', duration: '4 hours', lostSales: 35, revenue: 1050 },
        { item: 'Naan', category: 'Bread', duration: '3.5 hours', lostSales: 40, revenue: 1600 },
        { item: 'Gulab Jamun', category: 'Dessert', duration: '2.5 hours', lostSales: 15, revenue: 1125 }
      ],
      categoryBreakdown: {
        appetizers: { incidents: 1, avgDuration: 3.0, lostSales: 30 },
        mainCourse: { incidents: 2, avgDuration: 3.5, lostSales: 43 },
        beverages: { incidents: 1, avgDuration: 6.0, lostSales: 45 },
        desserts: { incidents: 1, avgDuration: 2.5, lostSales: 15 },
        sides: { incidents: 1, avgDuration: 4.0, lostSales: 35 },
        breads: { incidents: 1, avgDuration: 3.5, lostSales: 40 }
      },
      rootCauses: {
        supplierDelay: 3,
        demandSpike: 1,
        inventoryMiscount: 2,
        qualityReject: 1
      },
      monthlyTrend: [5, 6, 7, 8, 7, 7], // Last 6 weeks
      totalLostRevenue: 12365,
      customerImpact: {
        substitutions: 95,
        walkAways: 113,
        complaints: 28
      }
    }
  ]

  const chainAverage = stockOutData.reduce((sum, item) => sum + item.weeklyIncidents, 0) / stockOutData.length

  const getStatusColor = (incidents: number) => {
    if (incidents <= 2) return 'text-green-600'
    if (incidents <= 5) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (incidents: number) => {
    if (incidents <= 2) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (incidents <= 5) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xs font-bold text-black dark:text-white">
          Stock-out Incidents
        </h1>
        <p className="text-xs font-normal text-gray-500 mt-1">
          KPI ID: OPR_014 | Inventory Management & Revenue Protection
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200">
        <h2 className="text-xs font-bold text-blue-900 dark:text-blue-300 mb-2">
          📊 Definition & Formula
        </h2>
        <div className="space-y-2">
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Formula:</strong> Number of times menu items are unavailable per week
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Frequency of 'out of stock' for menu items. Affects revenue and customer experience.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> Each stock-out loses a transaction; correlates with inventory turnover and supplier reliability.
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
            <div className="text-xs font-normal text-green-600">0–2 incidents/week</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">2–5 incidents/week</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&gt;5 incidents/week</div>
          </div>
        </div>
      </div>

      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          📈 Chain Summary & Revenue Impact
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-gray-50 dark:bg-gray-900/20 rounded border">
            <div className="text-xs font-bold text-gray-700 dark:text-gray-300">Chain Average</div>
            <div className="text-xs font-normal text-black dark:text-white">{chainAverage.toFixed(1)} incidents/week</div>
          </div>
          <div className="text-center p-3 bg-gray-50 dark:bg-gray-900/20 rounded border">
            <div className="text-xs font-bold text-gray-700 dark:text-gray-300">Total Lost Revenue</div>
            <div className="text-xs font-normal text-black dark:text-white">
              ₹{stockOutData.reduce((sum, item) => sum + item.totalLostRevenue, 0).toLocaleString()}/week
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Performance (Best = Fewest Incidents)
        </h2>
        <div className="space-y-3">
          {stockOutData
            .sort((a, b) => a.weeklyIncidents - b.weeklyIncidents)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.weeklyIncidents)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-black dark:text-white">
                    {location.weeklyIncidents} incidents/week
                  </div>
                  <div className={`text-xs font-normal ${location.variance < 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {location.variance > 0 ? '+' : ''}{location.variance.toFixed(1)}% vs target (2)
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-3">
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-1">Root Cause Analysis</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Supplier Delay:</span>
                      <span className="font-normal text-black dark:text-white">{location.rootCauses.supplierDelay}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Demand Spike:</span>
                      <span className="font-normal text-black dark:text-white">{location.rootCauses.demandSpike}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Inventory Miscount:</span>
                      <span className="font-normal text-black dark:text-white">{location.rootCauses.inventoryMiscount}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Quality Reject:</span>
                      <span className="font-normal text-black dark:text-white">{location.rootCauses.qualityReject}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-1">Business Impact</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Lost Revenue:</span>
                      <span className="font-normal text-black dark:text-white">₹{location.totalLostRevenue.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Substitutions:</span>
                      <span className="font-normal text-black dark:text-white">{location.customerImpact.substitutions}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Walk-aways:</span>
                      <span className="font-normal text-black dark:text-white">{location.customerImpact.walkAways}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Complaints:</span>
                      <span className="font-normal text-black dark:text-white">{location.customerImpact.complaints}</span>
                    </div>
                  </div>
                </div>
              </div>

              {location.incidentDetails.length > 0 && (
                <div className="mt-3">
                  <h4 className="text-xs font-bold text-gray-600 mb-2">This Week's Incidents</h4>
                  <div className="space-y-1">
                    {location.incidentDetails.slice(0, 3).map((incident, idx) => (
                      <div key={idx} className="flex justify-between text-xs p-2 bg-gray-50 dark:bg-gray-900/20 rounded">
                        <span className="text-gray-500">{incident.item} ({incident.category}):</span>
                        <span className="font-normal text-black dark:text-white">
                          {incident.duration}, {incident.lostSales} sales, ₹{incident.revenue}
                        </span>
                      </div>
                    ))}
                    {location.incidentDetails.length > 3 && (
                      <div className="text-xs text-gray-500 text-center">
                        +{location.incidentDetails.length - 3} more incidents...
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200">
        <h2 className="text-xs font-bold text-orange-900 dark:text-orange-300 mb-2">
          🇮🇳 India-Specific Monitoring
        </h2>
        <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
          • Supplier reliability in India variable; monsoon/holidays may increase frequency
        </p>
      </div>
    </div>
  )
}