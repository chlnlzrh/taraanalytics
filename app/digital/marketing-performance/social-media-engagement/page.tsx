import { RESTAURANTS } from '@/lib/restaurant-data'

export default function SocialMediaEngagementKPI() {
  // DIG_015 Social Media Engagement Rate % - Exact specifications from restaurant_kpi_metrics_127.txt
  const socialMediaData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      platforms: {
        instagram: { followers: 12500, likes: 4200, comments: 380, shares: 220, engagementRate: 3.84, posts: 28 },
        facebook: { followers: 8900, likes: 2100, comments: 190, shares: 95, engagementRate: 2.68, posts: 25 },
        total: { followers: 21400, totalEngagements: 7185, engagementRate: 3.36 }
      },
      status: 'excellent', // >2% target
      bestContent: [
        { type: 'Food Photo', engagement: 4.2, reach: 8500 },
        { type: 'Behind the Scenes', engagement: 3.8, reach: 6200 },
        { type: 'Promotion', engagement: 2.9, reach: 7800 }
      ]
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      platforms: {
        instagram: { followers: 9800, likes: 2940, comments: 245, shares: 147, engagementRate: 3.40, posts: 24 },
        facebook: { followers: 6500, likes: 1300, comments: 98, shares: 52, engagementRate: 2.23, posts: 20 },
        total: { followers: 16300, totalEngagements: 4782, engagementRate: 2.93 }
      },
      status: 'good',
      bestContent: [
        { type: 'Food Photo', engagement: 3.9, reach: 6800 },
        { type: 'Customer Review', engagement: 3.2, reach: 5200 },
        { type: 'Event', engagement: 2.7, reach: 4500 }
      ]
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      platforms: {
        instagram: { followers: 7200, likes: 1080, comments: 86, shares: 36, engagementRate: 1.67, posts: 18 },
        facebook: { followers: 4800, likes: 480, comments: 38, shares: 14, engagementRate: 1.11, posts: 15 },
        total: { followers: 12000, totalEngagements: 1734, engagementRate: 1.45 }
      },
      status: 'warning', // 1-2% range
      bestContent: [
        { type: 'Food Photo', engagement: 2.1, reach: 3200 },
        { type: 'Promotion', engagement: 1.8, reach: 2800 },
        { type: 'Behind the Scenes', engagement: 1.2, reach: 1900 }
      ]
    }
  ]

  const chainAvgEngagement = socialMediaData.reduce((sum, item) => sum + item.platforms.total.engagementRate, 0) / socialMediaData.length
  const chainTotalFollowers = socialMediaData.reduce((sum, item) => sum + item.platforms.total.followers, 0)

  const getStatusColor = (rate: number) => {
    if (rate >= 2) return 'text-green-600'
    if (rate >= 1) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (rate: number) => {
    if (rate >= 2) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (rate >= 1) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getStatusIcon = (rate: number) => {
    if (rate >= 2) return '🚀'
    if (rate >= 1) return '⚠️'
    return '📉'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Social Media Engagement Rate %
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: DIG_015 | Social Content Performance Analytics
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
            <strong>Formula:</strong> (Likes + Comments + Shares ÷ Followers) × 100; monthly trend
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Percentage engagement on social posts. Typical benchmark &gt;2%.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> Indicates content quality and audience interest; engagement &gt;2% = strong content-market fit.
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
            <div className="text-xs font-normal text-green-600">&gt;2% engagement rate</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">1–2%</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&lt;1%</div>
          </div>
        </div>
      </div>

      {/* Chain Summary */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          📈 Chain Social Media Performance
        </h2>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <span className="text-xs font-normal text-gray-500">Average Engagement Rate</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getStatusColor(chainAvgEngagement)}`}>
                {chainAvgEngagement.toFixed(2)}%
              </span>
              <span>{getStatusIcon(chainAvgEngagement)}</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Total Followers</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-black dark:text-white">
                {chainTotalFollowers.toLocaleString('en-IN')}
              </span>
              <span>👥</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Content Strategy</span>
            <div className={`text-xs font-normal ${getStatusColor(chainAvgEngagement)}`}>
              {chainAvgEngagement >= 2 ? 'Strong Content-Market Fit' : 'Needs Optimization'}
            </div>
          </div>
        </div>
      </div>

      {/* Location Performance */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Social Media Performance
        </h2>
        <div className="space-y-3">
          {socialMediaData
            .sort((a, b) => b.platforms.total.engagementRate - a.platforms.total.engagementRate)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.platforms.total.engagementRate)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span>{getStatusIcon(location.platforms.total.engagementRate)}</span>
                </div>
                <div className="text-right">
                  <div className={`text-xs font-bold ${getStatusColor(location.platforms.total.engagementRate)}`}>
                    {location.platforms.total.engagementRate.toFixed(2)}% engagement
                  </div>
                  <div className="text-xs font-normal text-gray-500">
                    {location.platforms.total.followers.toLocaleString('en-IN')} total followers
                  </div>
                </div>
              </div>
              
              {/* Platform Breakdown */}
              <div className="grid grid-cols-2 gap-4 mt-3">
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-1">Platform Performance</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Instagram:</span>
                      <span className={`font-normal ${getStatusColor(location.platforms.instagram.engagementRate)}`}>
                        {location.platforms.instagram.engagementRate.toFixed(2)}% | {location.platforms.instagram.followers.toLocaleString('en-IN')} followers
                      </span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Facebook:</span>
                      <span className={`font-normal ${getStatusColor(location.platforms.facebook.engagementRate)}`}>
                        {location.platforms.facebook.engagementRate.toFixed(2)}% | {location.platforms.facebook.followers.toLocaleString('en-IN')} followers
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-600 mb-1">Best Content Types</h4>
                  <div className="space-y-1">
                    {location.bestContent.slice(0, 3).map((content, idx) => (
                      <div key={idx} className="flex justify-between text-xs">
                        <span className="text-gray-500">{content.type}:</span>
                        <span className={`font-normal ${getStatusColor(content.engagement)}`}>
                          {content.engagement.toFixed(1)}% | {content.reach.toLocaleString('en-IN')} reach
                        </span>
                      </div>
                    ))}
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
              <li>• Instagram Business Analytics</li>
              <li>• Facebook Page Insights</li>
              <li>• Social media management platform</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Weekly tracking</li>
              <li>• Red alert if &lt;1%</li>
              <li>• Monthly content strategy review</li>
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
            • Instagram/Facebook dominant; Instagram Stories/Reels higher engagement than feed posts
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Regional language content may perform better in specific locations
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Festival and cultural content drives higher engagement
          </p>
        </div>
      </div>

      {/* Users & Access */}
      <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-lg border border-gray-200">
        <h2 className="text-xs font-bold text-black dark:text-white mb-2">
          👥 Authorized Users
        </h2>
        <p className="text-xs font-normal text-gray-500">
          Marketing
        </p>
      </div>
    </div>
  )
}