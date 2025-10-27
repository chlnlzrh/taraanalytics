import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, BarChart3, TrendingUp, TrendingDown, Target, Award, Users, Activity } from "lucide-react"

export default function LoyaltyProgramActiveRatePage() {
  // Synthetic data based on DIG_012 specifications
  const activeRateData = [
    {
      location: "The Potbelly Divine (Gurugram)",
      totalMembers: 875,
      activeMembers: 700,
      activeRate: 80.0,
      status: "High Performer",
      trend: "up",
      lastMonth: {
        totalMembers: 850,
        activeMembers: 680,
        activeRate: 80.0
      },
      improvement: "0%",
      avgPointsEarned: 1250,
      avgPointsRedeemed: 850,
      engagementScore: 85.2
    },
    {
      location: "The Potbelly (Chanakyapuri)",
      totalMembers: 588,
      activeMembers: 441,
      activeRate: 75.0,
      status: "Good Performer",
      trend: "stable",
      lastMonth: {
        totalMembers: 570,
        activeMembers: 427,
        activeRate: 74.9
      },
      improvement: "+0.1%",
      avgPointsEarned: 1100,
      avgPointsRedeemed: 720,
      engagementScore: 78.5
    },
    {
      location: "The Potbelly Rooftop Cafe (Shahpur Jat)",
      totalMembers: 375,
      activeMembers: 225,
      activeRate: 60.0,
      status: "Low Performer",
      trend: "down",
      lastMonth: {
        totalMembers: 396,
        activeMembers: 257,
        activeRate: 64.9
      },
      improvement: "-4.9%",
      avgPointsEarned: 950,
      avgPointsRedeemed: 580,
      engagementScore: 65.8
    }
  ]

  const activeRateAnalysis = {
    totalMembers: 1838,
    totalActiveMembers: 1366,
    overallActiveRate: 74.3,
    topPerformer: "The Potbelly Divine (Gurugram)",
    focusArea: "The Potbelly Rooftop Cafe (Shahpur Jat)",
    avgEngagementScore: 76.5,
    totalPointsEarned: 2100000
  }

  const getActiveRateColor = (rate: number) => {
    if (rate >= 75) return "text-green-600"
    if (rate >= 65) return "text-yellow-600"
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
          <h1 className="text-xs font-bold">Loyalty Program Active Rate</h1>
          <p className="text-xs text-gray-500">DIG_012 - Digital & Marketing</p>
        </div>
        <Badge variant="outline" className="text-xs">
          Weekly Analysis
        </Badge>
      </div>

      {/* Active Rate Analysis by Location */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xs font-bold flex items-center gap-2">
            <Activity className="h-4 w-4" />
            Active Rate by Location
          </CardTitle>
          <CardDescription className="text-xs">
            Loyalty program member activity rates across locations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activeRateData.map((location, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-xs font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <div className="text-xs font-bold">{location.location}</div>
                      <div className="text-xs text-gray-500">{location.totalMembers.toLocaleString()} total members</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {getTrendIcon(location.trend)}
                    <Badge variant={getStatusBadge(location.status)} className="text-xs">
                      {location.status}
                    </Badge>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <div className="text-xs font-bold">Active Members</div>
                    <div className="text-xs text-gray-600">{location.activeMembers.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold">Active Rate</div>
                    <div className={`text-xs font-bold ${getActiveRateColor(location.activeRate)}`}>
                      {location.activeRate}%
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold">Avg Points Earned</div>
                    <div className="text-xs text-gray-600">{location.avgPointsEarned}</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold">Engagement Score</div>
                    <div className="text-xs text-gray-600">{location.engagementScore}/100</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold">Active Rate</span>
                    <span className="text-xs text-gray-500">{location.activeRate}%</span>
                  </div>
                  <Progress value={location.activeRate} className="h-2" />
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">vs Last Month</span>
                    <span className={`text-xs font-bold ${location.improvement.startsWith('+') ? 'text-green-600' : location.improvement.startsWith('-') ? 'text-red-600' : 'text-gray-600'}`}>
                      {location.improvement}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Active Rate Analysis Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xs font-bold flex items-center gap-2">
            <Target className="h-4 w-4" />
            Active Rate Analysis Summary
          </CardTitle>
          <CardDescription className="text-xs">
            Overall loyalty program activity and engagement
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <div className="text-xs font-bold">Total Members</div>
              <div className="text-xs text-gray-600">{activeRateAnalysis.totalMembers.toLocaleString()}</div>
            </div>
            <div>
              <div className="text-xs font-bold">Total Active Members</div>
              <div className="text-xs text-gray-600">{activeRateAnalysis.totalActiveMembers.toLocaleString()}</div>
            </div>
            <div>
              <div className="text-xs font-bold">Overall Active Rate</div>
              <div className="text-xs text-gray-600">{activeRateAnalysis.overallActiveRate}%</div>
            </div>
            <div>
              <div className="text-xs font-bold">Avg Engagement Score</div>
              <div className="text-xs text-gray-600">{activeRateAnalysis.avgEngagementScore}/100</div>
            </div>
            <div>
              <div className="text-xs font-bold">Top Performer</div>
              <div className="text-xs text-gray-600">{activeRateAnalysis.topPerformer}</div>
            </div>
            <div>
              <div className="text-xs font-bold">Focus Area</div>
              <div className="text-xs text-gray-600">{activeRateAnalysis.focusArea}</div>
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
                  <strong>The Potbelly Divine (Gurugram)</strong> - 80% active rate
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Highest engagement with stable performance
                </div>
              </div>
              <div>
                <div className="text-xs font-bold mb-2">Focus Area</div>
                <div className="text-xs text-gray-600">
                  <strong>The Potbelly Rooftop Cafe (Shahpur Jat)</strong> - 60% active rate
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Declining activity needs engagement strategy
                </div>
              </div>
            </div>
            
            <div className="text-xs text-gray-600 space-y-1">
              <p><strong>Key Insights:</strong></p>
              <p>• Overall active rate of 74.3% across all locations</p>
              <p>• Gurugram location leads with 80% active rate</p>
              <p>• Shahpur Jat location needs engagement improvement</p>
              <p>• Higher engagement correlates with better retention</p>
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
              <p>• Launch engagement campaigns for inactive members</p>
              <p>• Implement personalized reward recommendations</p>
              <p>• Improve program communication and visibility</p>
              <p>• Create location-specific engagement strategies</p>
            </div>
            
            <div className="text-xs text-gray-600 space-y-2">
              <p><strong>Medium-term Goals (Next 90 Days):</strong></p>
              <p>• Achieve 75%+ active rate across all locations</p>
              <p>• Implement gamification features</p>
              <p>• Launch referral program for member acquisition</p>
              <p>• Create tier-based engagement incentives</p>
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
            <p>• Mobile-first engagement crucial for Indian market</p>
            <p>• WhatsApp integration drives higher engagement</p>
            <p>• Regional festival campaigns boost activity</p>
            <p>• Family account sharing increases participation</p>
            <p>• UPI integration simplifies reward redemption</p>
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
            <p><strong>Data Source:</strong> Loyalty platform, POS system, customer database</p>
            <p><strong>Refresh:</strong> Daily calculation</p>
            <p><strong>Drill Down:</strong> By location, by tier, by time period, by engagement level</p>
            <p><strong>Users:</strong> Marketing Manager, Customer Service, Owner</p>
            <p><strong>Purpose:</strong> Optimize customer engagement and program effectiveness</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
