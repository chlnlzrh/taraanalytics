import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, BarChart3, TrendingUp, TrendingDown, Target, Award, Users, Mail } from "lucide-react"

export default function EmailOpenRatePage() {
  // Synthetic data based on DIG_014 specifications
  const emailData = [
    {
      campaign: "Weekly Newsletter",
      totalSent: 5000,
      opened: 1500,
      openRate: 30.0,
      status: "High Performer",
      trend: "up",
      lastMonth: {
        totalSent: 4800,
        opened: 1344,
        openRate: 28.0
      },
      improvement: "+2.0%",
      clickRate: 8.5,
      unsubscribeRate: 1.2,
      subjectLine: "This Week's Specials & Updates"
    },
    {
      campaign: "Promotional Offers",
      totalSent: 3500,
      opened: 875,
      openRate: 25.0,
      status: "Good Performer",
      trend: "stable",
      lastMonth: {
        totalSent: 3200,
        opened: 800,
        openRate: 25.0
      },
      improvement: "0%",
      clickRate: 12.0,
      unsubscribeRate: 2.1,
      subjectLine: "Exclusive Discounts Just for You!"
    },
    {
      campaign: "Event Invitations",
      totalSent: 2000,
      opened: 400,
      openRate: 20.0,
      status: "Low Performer",
      trend: "down",
      lastMonth: {
        totalSent: 1800,
        opened: 414,
        openRate: 23.0
      },
      improvement: "-3.0%",
      clickRate: 6.5,
      unsubscribeRate: 3.2,
      subjectLine: "Join Us for Special Events"
    }
  ]

  const emailAnalysis = {
    totalSent: 10500,
    totalOpened: 2775,
    overallOpenRate: 26.4,
    topPerformer: "Weekly Newsletter",
    focusArea: "Event Invitations",
    avgClickRate: 9.0,
    avgUnsubscribeRate: 2.2
  }

  const getOpenRateColor = (rate: number) => {
    if (rate >= 25) return "text-green-600"
    if (rate >= 20) return "text-yellow-600"
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
          <h1 className="text-xs font-bold">Email Open Rate</h1>
          <p className="text-xs text-gray-500">DIG_014 - Digital & Marketing</p>
        </div>
        <Badge variant="outline" className="text-xs">
          Campaign Analysis
        </Badge>
      </div>

      {/* Email Open Rate Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xs font-bold flex items-center gap-2">
            <Mail className="h-4 w-4" />
            Email Open Rate by Campaign
          </CardTitle>
          <CardDescription className="text-xs">
            Email campaign performance and open rate analysis
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {emailData.map((campaign, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-xs font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <div className="text-xs font-bold">{campaign.campaign}</div>
                      <div className="text-xs text-gray-500">{campaign.subjectLine}</div>
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
                    <div className="text-xs font-bold">Total Sent</div>
                    <div className="text-xs text-gray-600">{campaign.totalSent.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold">Opened</div>
                    <div className="text-xs text-gray-600">{campaign.opened.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold">Open Rate</div>
                    <div className={`text-xs font-bold ${getOpenRateColor(campaign.openRate)}`}>
                      {campaign.openRate}%
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold">Click Rate</div>
                    <div className="text-xs text-gray-600">{campaign.clickRate}%</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold">Open Rate</span>
                    <span className="text-xs text-gray-500">{campaign.openRate}%</span>
                  </div>
                  <Progress value={campaign.openRate} className="h-2" />
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">vs Last Month</span>
                    <span className={`text-xs font-bold ${campaign.improvement.startsWith('+') ? 'text-green-600' : campaign.improvement.startsWith('-') ? 'text-red-600' : 'text-gray-600'}`}>
                      {campaign.improvement}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Email Analysis Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xs font-bold flex items-center gap-2">
            <Target className="h-4 w-4" />
            Email Analysis Summary
          </CardTitle>
          <CardDescription className="text-xs">
            Overall email marketing performance and insights
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <div className="text-xs font-bold">Total Sent</div>
              <div className="text-xs text-gray-600">{emailAnalysis.totalSent.toLocaleString()}</div>
            </div>
            <div>
              <div className="text-xs font-bold">Total Opened</div>
              <div className="text-xs text-gray-600">{emailAnalysis.totalOpened.toLocaleString()}</div>
            </div>
            <div>
              <div className="text-xs font-bold">Overall Open Rate</div>
              <div className="text-xs text-gray-600">{emailAnalysis.overallOpenRate}%</div>
            </div>
            <div>
              <div className="text-xs font-bold">Avg Click Rate</div>
              <div className="text-xs text-gray-600">{emailAnalysis.avgClickRate}%</div>
            </div>
            <div>
              <div className="text-xs font-bold">Top Performer</div>
              <div className="text-xs text-gray-600">{emailAnalysis.topPerformer}</div>
            </div>
            <div>
              <div className="text-xs font-bold">Focus Area</div>
              <div className="text-xs text-gray-600">{emailAnalysis.focusArea}</div>
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
                  <strong>Weekly Newsletter</strong> - 30% open rate
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Regular content drives highest engagement
                </div>
              </div>
              <div>
                <div className="text-xs font-bold mb-2">Focus Area</div>
                <div className="text-xs text-gray-600">
                  <strong>Event Invitations</strong> - 20% open rate
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Event campaigns need better targeting
                </div>
              </div>
            </div>
            
            <div className="text-xs text-gray-600 space-y-1">
              <p><strong>Key Insights:</strong></p>
              <p>• Overall open rate of 26.4% across all campaigns</p>
              <p>• Weekly newsletters show highest engagement</p>
              <p>• Event invitations need strategy improvement</p>
              <p>• Promotional offers maintain steady performance</p>
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
              <p>• Improve subject lines for event invitations</p>
              <p>• Implement A/B testing for email campaigns</p>
              <p>• Optimize send times based on open patterns</p>
              <p>• Enhance email content and personalization</p>
            </div>
            
            <div className="text-xs text-gray-600 space-y-2">
              <p><strong>Medium-term Goals (Next 90 Days):</strong></p>
              <p>• Achieve 30%+ open rate across all campaigns</p>
              <p>• Implement advanced segmentation strategies</p>
              <p>• Launch automated email sequences</p>
              <p>• Create mobile-optimized email templates</p>
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
            <p>• Mobile-first email design crucial for Indian market</p>
            <p>• Regional language emails show higher open rates</p>
            <p>• Festival-themed campaigns drive engagement</p>
            <p>• WhatsApp integration complements email marketing</p>
            <p>• Local time zones impact optimal send times</p>
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
            <p><strong>Data Source:</strong> Email marketing platform, customer database, analytics</p>
            <p><strong>Refresh:</strong> Daily calculation</p>
            <p><strong>Drill Down:</strong> By campaign, by segment, by time period, by device</p>
            <p><strong>Users:</strong> Marketing Manager, Email Specialist, Owner</p>
            <p><strong>Purpose:</strong> Optimize email marketing effectiveness and engagement</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
