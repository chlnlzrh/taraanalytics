import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, BarChart3, TrendingUp, TrendingDown, Target, Award, Users, Gift } from "lucide-react"

export default function LoyaltyProgramMetricsPage() {
  // Synthetic data based on DIG_015 specifications
  const loyaltyData = [
    {
      metric: "Active Members",
      current: 2847,
      target: 3000,
      percentage: 94.9,
      status: "Good",
      trend: "up",
      lastMonth: 2650,
      improvement: "+7.4%",
      description: "Total active loyalty program members"
    },
    {
      metric: "Enrollment Rate",
      current: 68.5,
      target: 70.0,
      percentage: 97.9,
      status: "Good",
      trend: "up",
      lastMonth: 65.2,
      improvement: "+5.1%",
      description: "Percentage of customers who join loyalty program"
    },
    {
      metric: "Redemption Rate",
      current: 45.2,
      target: 50.0,
      percentage: 90.4,
      status: "Warning",
      trend: "down",
      lastMonth: 48.1,
      improvement: "-6.0%",
      description: "Percentage of members who redeem rewards"
    },
    {
      metric: "Average Points Earned",
      current: 1250,
      target: 1200,
      percentage: 104.2,
      status: "Excellent",
      trend: "up",
      lastMonth: 1180,
      improvement: "+5.9%",
      description: "Average points earned per member per month"
    },
    {
      metric: "Retention Rate",
      current: 78.3,
      target: 80.0,
      percentage: 97.9,
      status: "Good",
      trend: "stable",
      lastMonth: 78.5,
      improvement: "-0.3%",
      description: "Percentage of members retained after 6 months"
    }
  ]

  const programAnalysis = {
    totalMembers: 2847,
    monthlyEnrollments: 245,
    averageLifetimeValue: 1850,
    topTierMembers: 456,
    programROI: 320.5,
    engagementScore: 72.8
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Excellent": return "text-green-600"
      case "Good": return "text-blue-600"
      case "Warning": return "text-yellow-600"
      case "Critical": return "text-red-600"
      default: return "text-gray-600"
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Excellent": return "default"
      case "Good": return "secondary"
      case "Warning": return "destructive"
      case "Critical": return "destructive"
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
          <h1 className="text-xs font-bold">Loyalty Program Metrics</h1>
          <p className="text-xs text-gray-500">DIG_015 - Digital Marketing</p>
        </div>
        <Badge variant="outline" className="text-xs">
          Monthly Analysis
        </Badge>
      </div>

      {/* Key Metrics Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xs font-bold flex items-center gap-2">
            <Gift className="h-4 w-4" />
            Loyalty Program Performance
          </CardTitle>
          <CardDescription className="text-xs">
            Key performance indicators for customer loyalty program
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {loyaltyData.map((metric, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-xs font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <div className="text-xs font-bold">{metric.metric}</div>
                      <div className="text-xs text-gray-500">{metric.description}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {getTrendIcon(metric.trend)}
                    <Badge variant={getStatusBadge(metric.status)} className="text-xs">
                      {metric.status}
                    </Badge>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <div className="text-xs font-bold">Current Value</div>
                    <div className="text-xs text-gray-600">
                      {typeof metric.current === 'number' && metric.current > 1000 
                        ? metric.current.toLocaleString() 
                        : metric.current}
                      {typeof metric.current === 'number' && metric.current < 100 ? '%' : ''}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold">Target</div>
                    <div className="text-xs text-gray-600">
                      {typeof metric.target === 'number' && metric.target > 1000 
                        ? metric.target.toLocaleString() 
                        : metric.target}
                      {typeof metric.target === 'number' && metric.target < 100 ? '%' : ''}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold">Achievement</div>
                    <div className={`text-xs font-bold ${getStatusColor(metric.status)}`}>
                      {metric.percentage}%
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold">vs Last Month</div>
                    <div className={`text-xs font-bold ${metric.improvement.startsWith('+') ? 'text-green-600' : metric.improvement.startsWith('-') ? 'text-red-600' : 'text-gray-600'}`}>
                      {metric.improvement}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold">Progress to Target</span>
                    <span className="text-xs text-gray-500">{metric.percentage}%</span>
                  </div>
                  <Progress value={Math.min(metric.percentage, 100)} className="h-2" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Program Analysis Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xs font-bold flex items-center gap-2">
            <Target className="h-4 w-4" />
            Program Analysis Summary
          </CardTitle>
          <CardDescription className="text-xs">
            Overall loyalty program performance and insights
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <div className="text-xs font-bold">Total Members</div>
              <div className="text-xs text-gray-600">{programAnalysis.totalMembers.toLocaleString()}</div>
            </div>
            <div>
              <div className="text-xs font-bold">Monthly Enrollments</div>
              <div className="text-xs text-gray-600">{programAnalysis.monthlyEnrollments}</div>
            </div>
            <div>
              <div className="text-xs font-bold">Avg Lifetime Value</div>
              <div className="text-xs text-gray-600">₹{programAnalysis.averageLifetimeValue.toLocaleString()}</div>
            </div>
            <div>
              <div className="text-xs font-bold">Top Tier Members</div>
              <div className="text-xs text-gray-600">{programAnalysis.topTierMembers}</div>
            </div>
            <div>
              <div className="text-xs font-bold">Program ROI</div>
              <div className="text-xs text-gray-600">{programAnalysis.programROI}%</div>
            </div>
            <div>
              <div className="text-xs font-bold">Engagement Score</div>
              <div className="text-xs text-gray-600">{programAnalysis.engagementScore}/100</div>
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
            <div className="text-xs text-gray-600 space-y-1">
              <p><strong>Key Insights:</strong></p>
              <p>• Strong member growth with 7.4% increase in active members</p>
              <p>• High enrollment rate at 68.5% shows effective program appeal</p>
              <p>• Redemption rate declining - need to improve reward attractiveness</p>
              <p>• Excellent points earning indicates high engagement</p>
              <p>• Strong retention rate shows program value</p>
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
              <p>• Improve redemption rate with better reward options</p>
              <p>• Launch targeted campaigns for inactive members</p>
              <p>• Enhance reward catalog with popular items</p>
              <p>• Implement tier-based benefits for top members</p>
            </div>
            
            <div className="text-xs text-gray-600 space-y-2">
              <p><strong>Medium-term Goals (Next 90 Days):</strong></p>
              <p>• Achieve 70% enrollment rate target</p>
              <p>• Increase redemption rate to 50%</p>
              <p>• Launch referral program for member acquisition</p>
              <p>• Implement personalized reward recommendations</p>
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
            <p>• Mobile-first loyalty program design for Indian market</p>
            <p>• Integration with popular payment apps (Paytm, PhonePe)</p>
            <p>• Regional festival-based reward campaigns</p>
            <p>• Family account sharing features popular in India</p>
            <p>• WhatsApp integration for program communications</p>
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
            <p><strong>Drill Down:</strong> By tier, by location, by time period, by campaign</p>
            <p><strong>Users:</strong> Marketing Manager, Owner, Customer Service</p>
            <p><strong>Purpose:</strong> Optimize customer retention and lifetime value</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

