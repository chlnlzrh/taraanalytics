import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, BarChart3, TrendingUp, TrendingDown, Target, Award, Users, Share2 } from "lucide-react"

export default function SocialMediaPerformancePage() {
  // Synthetic data based on DIG_016 specifications
  const platformData = [
    {
      platform: "Instagram",
      followers: 15420,
      engagement: 4.8,
      reach: 28500,
      impressions: 45600,
      status: "High Performer",
      trend: "up",
      lastMonth: {
        followers: 14200,
        engagement: 4.2,
        reach: 25200,
        impressions: 38900
      },
      improvement: {
        followers: "+8.6%",
        engagement: "+14.3%",
        reach: "+13.1%",
        impressions: "+17.2%"
      }
    },
    {
      platform: "Facebook",
      followers: 8750,
      engagement: 3.2,
      reach: 18200,
      impressions: 32400,
      status: "Good Performer",
      trend: "stable",
      lastMonth: {
        followers: 8600,
        engagement: 3.1,
        reach: 17800,
        impressions: 31200
      },
      improvement: {
        followers: "+1.7%",
        engagement: "+3.2%",
        reach: "+2.2%",
        impressions: "+3.8%"
      }
    },
    {
      platform: "Twitter",
      followers: 3200,
      engagement: 2.1,
      reach: 8900,
      impressions: 15600,
      status: "Low Performer",
      trend: "down",
      lastMonth: {
        followers: 3400,
        engagement: 2.4,
        reach: 9200,
        impressions: 16800
      },
      improvement: {
        followers: "-5.9%",
        engagement: "-12.5%",
        reach: "-3.3%",
        impressions: "-7.1%"
      }
    },
    {
      platform: "LinkedIn",
      followers: 2100,
      engagement: 1.8,
      reach: 4200,
      impressions: 8900,
      status: "Low Performer",
      trend: "down",
      lastMonth: {
        followers: 2200,
        engagement: 2.0,
        reach: 4500,
        impressions: 9200
      },
      improvement: {
        followers: "-4.5%",
        engagement: "-10.0%",
        reach: "-6.7%",
        impressions: "-3.3%"
      }
    }
  ]

  const contentAnalysis = {
    totalPosts: 45,
    avgLikes: 285,
    avgComments: 42,
    avgShares: 18,
    topPerformingPost: "Chicken Biryani Recipe Video",
    engagementRate: 3.5,
    reachRate: 2.8
  }

  const getEngagementColor = (engagement: number) => {
    if (engagement >= 4.0) return "text-green-600"
    if (engagement >= 3.0) return "text-yellow-600"
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
          <h1 className="text-xs font-bold">Social Media Performance</h1>
          <p className="text-xs text-gray-500">DIG_016 - Digital Marketing</p>
        </div>
        <Badge variant="outline" className="text-xs">
          Weekly Analysis
        </Badge>
      </div>

      {/* Platform Performance */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xs font-bold flex items-center gap-2">
            <Share2 className="h-4 w-4" />
            Platform Performance Analysis
          </CardTitle>
          <CardDescription className="text-xs">
            Social media metrics across all platforms
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {platformData.map((platform, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-xs font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <div className="text-xs font-bold">{platform.platform}</div>
                      <div className="text-xs text-gray-500">{platform.followers.toLocaleString()} followers</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {getTrendIcon(platform.trend)}
                    <Badge variant={getStatusBadge(platform.status)} className="text-xs">
                      {platform.status}
                    </Badge>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <div className="text-xs font-bold">Engagement Rate</div>
                    <div className={`text-xs font-bold ${getEngagementColor(platform.engagement)}`}>
                      {platform.engagement}%
                    </div>
                    <div className={`text-xs ${platform.improvement.engagement.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {platform.improvement.engagement}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold">Reach</div>
                    <div className="text-xs text-gray-600">{platform.reach.toLocaleString()}</div>
                    <div className={`text-xs ${platform.improvement.reach.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {platform.improvement.reach}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold">Impressions</div>
                    <div className="text-xs text-gray-600">{platform.impressions.toLocaleString()}</div>
                    <div className={`text-xs ${platform.improvement.impressions.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {platform.improvement.impressions}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold">Followers</div>
                    <div className="text-xs text-gray-600">{platform.followers.toLocaleString()}</div>
                    <div className={`text-xs ${platform.improvement.followers.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {platform.improvement.followers}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Content Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xs font-bold flex items-center gap-2">
            <Target className="h-4 w-4" />
            Content Performance Analysis
          </CardTitle>
          <CardDescription className="text-xs">
            Overall content performance and engagement metrics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <div className="text-xs font-bold">Total Posts</div>
              <div className="text-xs text-gray-600">{contentAnalysis.totalPosts}</div>
            </div>
            <div>
              <div className="text-xs font-bold">Avg Likes</div>
              <div className="text-xs text-gray-600">{contentAnalysis.avgLikes}</div>
            </div>
            <div>
              <div className="text-xs font-bold">Avg Comments</div>
              <div className="text-xs text-gray-600">{contentAnalysis.avgComments}</div>
            </div>
            <div>
              <div className="text-xs font-bold">Avg Shares</div>
              <div className="text-xs text-gray-600">{contentAnalysis.avgShares}</div>
            </div>
            <div>
              <div className="text-xs font-bold">Top Post</div>
              <div className="text-xs text-gray-600">{contentAnalysis.topPerformingPost}</div>
            </div>
            <div>
              <div className="text-xs font-bold">Engagement Rate</div>
              <div className="text-xs text-gray-600">{contentAnalysis.engagementRate}%</div>
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
                  <strong>Instagram</strong> - 4.8% engagement
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Strong visual content performance
                </div>
              </div>
              <div>
                <div className="text-xs font-bold mb-2">Focus Area</div>
                <div className="text-xs text-gray-600">
                  <strong>Twitter & LinkedIn</strong> - Declining performance
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Need content strategy review
                </div>
              </div>
            </div>
            
            <div className="text-xs text-gray-600 space-y-1">
              <p><strong>Key Insights:</strong></p>
              <p>• Instagram shows strongest growth and engagement</p>
              <p>• Facebook maintains steady performance</p>
              <p>• Twitter and LinkedIn need strategy overhaul</p>
              <p>• Video content performs best across platforms</p>
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
              <p>• Increase Instagram posting frequency to 2x daily</p>
              <p>• Revamp Twitter content strategy with trending topics</p>
              <p>• Create LinkedIn-specific professional content</p>
              <p>• Launch Instagram Stories campaigns</p>
            </div>
            
            <div className="text-xs text-gray-600 space-y-2">
              <p><strong>Medium-term Goals (Next 90 Days):</strong></p>
              <p>• Achieve 5%+ engagement rate on all platforms</p>
              <p>• Increase follower growth by 20%</p>
              <p>• Implement influencer partnerships</p>
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
            <p>• Instagram Reels perform exceptionally well in Indian market</p>
            <p>• WhatsApp Business integration for customer engagement</p>
            <p>• Regional language content increases engagement</p>
            <p>• Festival and cultural content drives high engagement</p>
            <p>• Mobile-optimized content crucial for Indian users</p>
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
            <p><strong>Data Source:</strong> Social media analytics, platform APIs, content management system</p>
            <p><strong>Refresh:</strong> Daily calculation</p>
            <p><strong>Drill Down:</strong> By platform, by content type, by time period, by campaign</p>
            <p><strong>Users:</strong> Marketing Manager, Social Media Manager, Owner</p>
            <p><strong>Purpose:</strong> Optimize social media strategy and brand awareness</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
