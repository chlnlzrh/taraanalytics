import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, BarChart3, TrendingUp, TrendingDown, Target, Award, Users, Megaphone } from "lucide-react"

export default function InfluencerCampaignReachPage() {
  // Synthetic data based on DIG_017 specifications
  const campaignData = [
    {
      campaign: "Food Blogger Collaboration",
      influencer: "Chef Priya",
      platform: "Instagram",
      reach: 125000,
      impressions: 285000,
      engagement: 8.5,
      clicks: 1250,
      conversions: 85,
      status: "High Performer",
      trend: "up",
      cost: 45000,
      roi: 189.2,
      lastMonth: {
        reach: 110000,
        impressions: 250000,
        engagement: 7.8,
        clicks: 1100,
        conversions: 72
      },
      improvement: {
        reach: "+13.6%",
        impressions: "+14.0%",
        engagement: "+9.0%",
        clicks: "+13.6%",
        conversions: "+18.1%"
      }
    },
    {
      campaign: "YouTube Recipe Video",
      influencer: "Cooking with Raj",
      platform: "YouTube",
      reach: 85000,
      impressions: 195000,
      engagement: 6.2,
      clicks: 890,
      conversions: 45,
      status: "Good Performer",
      trend: "stable",
      cost: 35000,
      roi: 128.6,
      lastMonth: {
        reach: 82000,
        impressions: 188000,
        engagement: 6.0,
        clicks: 850,
        conversions: 42
      },
      improvement: {
        reach: "+3.7%",
        impressions: "+3.7%",
        engagement: "+3.3%",
        clicks: "+4.7%",
        conversions: "+7.1%"
      }
    },
    {
      campaign: "TikTok Food Challenge",
      influencer: "Foodie Vibes",
      platform: "TikTok",
      reach: 45000,
      impressions: 120000,
      engagement: 12.8,
      clicks: 650,
      conversions: 28,
      status: "High Performer",
      trend: "up",
      cost: 25000,
      roi: 112.0,
      lastMonth: {
        reach: 38000,
        impressions: 95000,
        engagement: 10.5,
        clicks: 520,
        conversions: 22
      },
      improvement: {
        reach: "+18.4%",
        impressions: "+26.3%",
        engagement: "+21.9%",
        clicks: "+25.0%",
        conversions: "+27.3%"
      }
    },
    {
      campaign: "Facebook Live Cooking",
      influencer: "Home Chef Meera",
      platform: "Facebook",
      reach: 32000,
      impressions: 85000,
      engagement: 4.5,
      clicks: 380,
      conversions: 18,
      status: "Low Performer",
      trend: "down",
      cost: 20000,
      roi: 90.0,
      lastMonth: {
        reach: 35000,
        impressions: 92000,
        engagement: 5.2,
        clicks: 420,
        conversions: 21
      },
      improvement: {
        reach: "-8.6%",
        impressions: "-7.6%",
        engagement: "-13.5%",
        clicks: "-9.5%",
        conversions: "-14.3%"
      }
    }
  ]

  const campaignAnalysis = {
    totalReach: 287000,
    totalImpressions: 685000,
    avgEngagement: 8.0,
    totalClicks: 3170,
    totalConversions: 176,
    totalCost: 125000,
    avgROI: 130.0,
    topPerformingPlatform: "Instagram"
  }

  const getROIColor = (roi: number) => {
    if (roi >= 150) return "text-green-600"
    if (roi >= 100) return "text-yellow-600"
    return "text-red-600"
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "High Performer": return "default"
      case "Good Performer": return "secondary"
      case "Low Performer": return "destructive"
      default: return "outline"
    }
  }

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up": return <TrendingUp className="h-4 w-4 text-green-500" />
      case "down": return <TrendingDown className="h-4 w-4 text-red-500" />
      default: return <BarChart3 className="h-4 w-4 text-gray-500" />
    }
  }

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold">Influencer Campaign Reach</h1>
          <p className="text-xs text-gray-500">DIG_017 - Digital Marketing</p>
        </div>
        <Badge variant="outline" className="text-xs">
          Campaign Analysis
        </Badge>
      </div>

      {/* Campaign Performance */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xs font-bold flex items-center gap-2">
            <Megaphone className="h-4 w-4" />
            Influencer Campaign Performance
          </CardTitle>
          <CardDescription className="text-xs">
            Reach and engagement metrics for influencer campaigns
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {campaignData.map((campaign, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-xs font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <div className="text-xs font-bold">{campaign.campaign}</div>
                      <div className="text-xs text-gray-500">{campaign.influencer} - {campaign.platform}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {getTrendIcon(campaign.trend)}
                    <Badge variant={getStatusBadge(campaign.status)} className="text-xs">
                      {campaign.status}
                    </Badge>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <div className="text-xs font-bold">Reach</div>
                    <div className="text-xs text-gray-600">{campaign.reach.toLocaleString()}</div>
                    <div className={`text-xs ${campaign.improvement.reach.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {campaign.improvement.reach}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold">Impressions</div>
                    <div className="text-xs text-gray-600">{campaign.impressions.toLocaleString()}</div>
                    <div className={`text-xs ${campaign.improvement.impressions.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {campaign.improvement.impressions}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold">Engagement</div>
                    <div className="text-xs text-gray-600">{campaign.engagement}%</div>
                    <div className={`text-xs ${campaign.improvement.engagement.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {campaign.improvement.engagement}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold">Conversions</div>
                    <div className="text-xs text-gray-600">{campaign.conversions}</div>
                    <div className={`text-xs ${campaign.improvement.conversions.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {campaign.improvement.conversions}
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs font-bold">Cost</div>
                    <div className="text-xs text-gray-600">₹{campaign.cost.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold">ROI</div>
                    <div className={`text-xs font-bold ${getROIColor(campaign.roi)}`}>
                      {campaign.roi}%
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Campaign Analysis Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xs font-bold flex items-center gap-2">
            <Target className="h-4 w-4" />
            Campaign Analysis Summary
          </CardTitle>
          <CardDescription className="text-xs">
            Overall influencer campaign performance and ROI
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <div className="text-xs font-bold">Total Reach</div>
              <div className="text-xs text-gray-600">{campaignAnalysis.totalReach.toLocaleString()}</div>
            </div>
            <div>
              <div className="text-xs font-bold">Total Impressions</div>
              <div className="text-xs text-gray-600">{campaignAnalysis.totalImpressions.toLocaleString()}</div>
            </div>
            <div>
              <div className="text-xs font-bold">Avg Engagement</div>
              <div className="text-xs text-gray-600">{campaignAnalysis.avgEngagement}%</div>
            </div>
            <div>
              <div className="text-xs font-bold">Total Conversions</div>
              <div className="text-xs text-gray-600">{campaignAnalysis.totalConversions}</div>
            </div>
            <div>
              <div className="text-xs font-bold">Total Cost</div>
              <div className="text-xs text-gray-600">₹{campaignAnalysis.totalCost.toLocaleString()}</div>
            </div>
            <div>
              <div className="text-xs font-bold">Avg ROI</div>
              <div className="text-xs text-gray-600">{campaignAnalysis.avgROI}%</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Performance Insights */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xs font-bold">Performance Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="text-xs font-bold mb-2">Top Performer</div>
                <div className="text-xs text-gray-600">
                  <strong>Food Blogger Collaboration</strong> - 189.2% ROI
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Instagram campaigns show highest ROI
                </div>
              </div>
              <div>
                <div className="text-xs font-bold mb-2">Focus Area</div>
                <div className="text-xs text-gray-600">
                  <strong>Facebook Live Cooking</strong> - Declining performance
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Need strategy review and optimization
                </div>
              </div>
            </div>
            
            <div className="text-xs text-gray-600 space-y-1">
              <p><strong>Key Insights:</strong></p>
              <p>• Instagram and TikTok show highest engagement rates</p>
              <p>• Video content performs better than static posts</p>
              <p>• Micro-influencers often provide better ROI</p>
              <p>• Long-term partnerships show better results</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Plan */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xs font-bold">Action Plan</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="text-xs text-gray-600 space-y-2">
              <p><strong>Immediate Actions (Next 30 Days):</strong></p>
              <p>• Increase Instagram and TikTok campaign budget</p>
              <p>• Pause Facebook Live campaigns for strategy review</p>
              <p>• Focus on video content for better engagement</p>
              <p>• Establish long-term partnerships with top performers</p>
            </div>
            
            <div className="text-xs text-gray-600 space-y-2">
              <p><strong>Medium-term Goals (Next 90 Days):</strong></p>
              <p>• Achieve 150%+ ROI on all campaigns</p>
              <p>• Expand influencer network by 50%</p>
              <p>• Implement performance-based payment models</p>
              <p>• Launch user-generated content campaigns</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* India-Specific Insights */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xs font-bold">India-Specific Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-gray-600 space-y-2">
            <p>• Regional language influencers show higher engagement</p>
            <p>• Festival and cultural content performs exceptionally well</p>
            <p>• Food bloggers with family content resonate strongly</p>
            <p>• WhatsApp sharing drives significant reach</p>
            <p>• Local food trends create viral opportunities</p>
          </div>
        </CardContent>
      </Card>

      {/* Data Source & Refresh Info */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xs font-bold">Data Source & Refresh</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-gray-600 space-y-1">
            <p><strong>Data Source:</strong> Influencer platforms, social media analytics, campaign tracking</p>
            <p><strong>Refresh:</strong> Daily calculation</p>
            <p><strong>Drill Down:</strong> By influencer, by platform, by campaign, by time period</p>
            <p><strong>Users:</strong> Marketing Manager, Influencer Relations, Owner</p>
            <p><strong>Purpose:</strong> Optimize influencer marketing ROI and brand reach</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

