import { RESTAURANTS } from '@/lib/restaurant-data'

export default function NetPromoterScoreKPI() {
  // CUS_009 Net Promoter Score (NPS) - Exact specifications from restaurant_kpi_metrics_127.txt
  const npsData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      npsScore: 45,
      totalResponses: 285,
      promoters: 142, // 50% (scores 9-10)
      passives: 114, // 40% (scores 7-8)
      detractors: 29, // 10% (scores 0-6)
      status: 'good', // Above target 40+
      monthlyTrend: {
        jan: 42,
        feb: 44,
        mar: 45
      },
      verbatimThemes: {
        positive: ['Great food quality', 'Excellent service', 'Clean ambiance'],
        negative: ['Slow service during peak', 'Limited parking']
      }
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      npsScore: 38,
      totalResponses: 225,
      promoters: 90, // 40%
      passives: 99, // 44%
      detractors: 36, // 16%
      status: 'warning', // Warning range 30-40
      monthlyTrend: {
        jan: 35,
        feb: 37,
        mar: 38
      },
      verbatimThemes: {
        positive: ['Good taste', 'Friendly staff'],
        negative: ['Long wait times', 'Inconsistent food quality']
      }
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      npsScore: 25,
      totalResponses: 185,
      promoters: 56, // 30%
      passives: 74, // 40%
      detractors: 55, // 30%
      status: 'critical', // Below critical threshold 30
      monthlyTrend: {
        jan: 28,
        feb: 26,
        mar: 25
      },
      verbatimThemes: {
        positive: ['Good location', 'Affordable prices'],
        negative: ['Poor service', 'Food quality issues', 'Unclean restrooms']
      }
    }
  ]

  const chainTotalResponses = npsData.reduce((sum, item) => sum + item.totalResponses, 0)
  const chainTotalPromoters = npsData.reduce((sum, item) => sum + item.promoters, 0)
  const chainTotalDetractors = npsData.reduce((sum, item) => sum + item.detractors, 0)
  const chainNPS = ((chainTotalPromoters / chainTotalResponses) * 100) - ((chainTotalDetractors / chainTotalResponses) * 100)

  const getStatusColor = (nps: number) => {
    if (nps > 40) return 'text-green-600'
    if (nps >= 30) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (nps: number) => {
    if (nps > 40) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (nps >= 30) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getStatusIcon = (nps: number) => {
    if (nps > 40) return '🎆'
    if (nps >= 30) return '⚠️'
    return '🚨'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Net Promoter Score (NPS)
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: CUS_009 | Industry Standard Customer Satisfaction Metric
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
            <strong>Formula:</strong> % Promoters (9–10) - % Detractors (0–6) on 'likelihood to recommend' question
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Industry standard satisfaction metric. Target NPS 40+ for competitive markets.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> NPS 40+ drives new footfall; changes correlate with service quality, menu changes, or staff turnover.
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
            <div className="text-xs font-normal text-green-600">>40</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">30–40</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600"><30</div>
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
            <span className="text-xs font-normal text-gray-500">Total Survey Responses</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-black dark:text-white">
                {chainTotalResponses.toLocaleString('en-IN')}
              </span>
              <span>📝</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Chain NPS Score</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getStatusColor(chainNPS)}`}>
                {Math.round(chainNPS)}
              </span>
              <span>{getStatusIcon(chainNPS)}</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Promoter Rate</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-green-600">
                {((chainTotalPromoters / chainTotalResponses) * 100).toFixed(1)}%
              </span>
              <span>🎆</span>
            </div>
          </div>
        </div>
      </div>

      {/* Location Performance */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Performance (NPS Analysis)
        </h2>
        <div className="space-y-3">
          {npsData
            .sort((a, b) => b.npsScore - a.npsScore)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.npsScore)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span>{getStatusIcon(location.npsScore)}</span>
                </div>
                <div className="text-right">
                  <div className={`text-xs font-bold ${getStatusColor(location.npsScore)}`}>
                    NPS: {location.npsScore}
                  </div>
                  <div className="text-xs font-normal text-gray-500">
                    {location.totalResponses} responses
                  </div>
                </div>
              </div>
              
              {/* Response breakdown */}
              <div className="grid grid-cols-3 gap-4 mb-3">
                <div className="text-center">
                  <div className="text-xs font-normal text-gray-500">Promoters</div>
                  <div className="text-xs font-bold text-green-600">
                    {location.promoters} ({((location.promoters / location.totalResponses) * 100).toFixed(0)}%)
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs font-normal text-gray-500">Passives</div>
                  <div className="text-xs font-bold text-yellow-600">
                    {location.passives} ({((location.passives / location.totalResponses) * 100).toFixed(0)}%)
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs font-normal text-gray-500">Detractors</div>
                  <div className="text-xs font-bold text-red-600">
                    {location.detractors} ({((location.detractors / location.totalResponses) * 100).toFixed(0)}%)
                  </div>
                </div>
              </div>

              {/* Monthly trend */}
              <div className="mt-3">
                <h4 className="text-xs font-bold text-gray-600 mb-2">3-Month Trend</h4>
                <div className="grid grid-cols-3 gap-3">
                  {Object.entries(location.monthlyTrend).map(([month, score]) => (
                    <div key={month} className="text-center">
                      <div className="text-xs font-normal text-gray-500 capitalize">{month}</div>
                      <div className={`text-xs font-bold ${getStatusColor(score)}`}>
                        {score}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key themes */}
              <div className="mt-3">
                <h4 className="text-xs font-bold text-gray-600 mb-2">Key Feedback Themes</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <div className="text-xs font-normal text-green-600 mb-1">Positive:</div>
                    <ul className="text-xs text-gray-500">
                      {location.verbatimThemes.positive.slice(0, 2).map((theme, i) => (
                        <li key={i}>• {theme}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-xs font-normal text-red-600 mb-1">Areas for Improvement:</div>
                    <ul className="text-xs text-gray-500">
                      {location.verbatimThemes.negative.slice(0, 2).map((theme, i) => (
                        <li key={i}>• {theme}</li>
                      ))}
                    </ul>
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
              <li>• NPS surveys (SMS, email, in-app)</li>
              <li>• Post-meal feedback cards</li>
              <li>• Digital survey platforms</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Monthly refresh (collect continuously)</li>
              <li>• Verbatim analysis weekly</li>
              <li>• Alert if NPS <30</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Drill-down Options */}
      <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200">
        <h2 className="text-xs font-bold text-purple-900 dark:text-purple-300 mb-2">
          🔍 Available Drill-downs
        </h2>
        <div className="space-y-1">
          <p className="text-xs font-normal text-purple-800 dark:text-purple-300">
            • By location comparison
          </p>
          <p className="text-xs font-normal text-purple-800 dark:text-purple-300">
            • By daypart analysis
          </p>
          <p className="text-xs font-normal text-purple-800 dark:text-purple-300">
            • By customer segment
          </p>
          <p className="text-xs font-normal text-purple-800 dark:text-purple-300">
            • By verbatim feedback themes
          </p>
        </div>
      </div>

      {/* Users & Access */}
      <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-lg border border-gray-200">
        <h2 className="text-xs font-bold text-black dark:text-white mb-2">
          👥 Authorized Users
        </h2>
        <p className="text-xs font-normal text-gray-500">
          Manager, Owner
        </p>
      </div>
    </div>
  )
}