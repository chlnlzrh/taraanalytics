import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, BarChart3, TrendingUp, TrendingDown, Target, Award, Users, Percent } from "lucide-react"

export default function PromoCodeRedemptionRatePage() {
  // Synthetic data based on DIG_013 specifications
  const redemptionData = [
    {
      promoCode: "WELCOME20",
      totalSent: 5000,
      redeemed: 1250,
      redemptionRate: 25.0,
      status: "High Performer",
      trend: "up",
      lastMonth: {
        totalSent: 4500,
        redeemed: 1080,
        redemptionRate: 24.0
      },
      improvement: "+1.0%",
      avgOrderValue: 450,
      totalRevenue: 562500,
      campaignType: "New Customer"
    },
    {
      promoCode: "SAVE15",
      totalSent: 3500,
      redeemed: 700,
      redemptionRate: 20.0,
      status: "Good Performer",
      trend: "stable",
      lastMonth: {
        totalSent: 3200,
        redeemed: 640,
        redemptionRate: 20.0
      },
      improvement: "0%",
      avgOrderValue: 380,
      totalRevenue: 266000,
      campaignType: "General Discount"
    },
    {
      promoCode: "FESTIVAL50",
      totalSent: 2000,
      redeemed: 300,
      redemptionRate: 15.0,
      status: "Low Performer",
      trend: "down",
      lastMonth: {
        totalSent: 1800,
        redeemed: 324,
        redemptionRate: 18.0
      },
      improvement: "-3.0%",
      avgOrderValue: 520,
      totalRevenue: 156000,
      campaignType: "Festival Special"
    },
    {
      promoCode: "LOYALTY10",
      totalSent: 8000,
      redeemed: 1600,
      redemptionRate: 20.0,
      status: "Good Performer",
      trend: "up",
      lastMonth: {
        totalSent: 7500,
        redeemed: 1350,
        redemptionRate: 18.0
      },
      improvement: "+2.0%",
      avgOrderValue: 320,
      totalRevenue: 512000,
      campaignType: "Loyalty Reward"
    }
  ]

  const redemptionAnalysis = {
    totalSent: 18500,
    totalRedeemed: 3850,
    overallRedemptionRate: 20.8,
    topPerformer: "WELCOME20",
    focusArea: "FESTIVAL50",
    totalRevenue: 1496500,
    avgOrderValue: 388.7
  }

  const getRedemptionColor = (rate: number) => {
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
          <h1 className="text-xs font-bold">Promo Code Redemption Rate</h1>
          <p className="text-xs text-gray-500">DIG_013 - Digital & Marketing</p>
        </div>
        <Badge variant="outline" className="text-xs">
          Campaign Analysis
        </Badge>
      </div>

      {/* Redemption Analysis by Promo Code */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xs font-bold flex items-center gap-2">
            <Percent className="h-4 w-4" />
            Redemption Rate by Promo Code
          </CardTitle>
          <CardDescription className="text-xs">
            Promo code performance and redemption analysis
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {redemptionData.map((promo, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-xs font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <div className="text-xs font-bold">{promo.promoCode}</div>
                      <div className="text-xs text-gray-500">{promo.campaignType}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {getTrendIcon(promo.trend)}
                    <Badge variant={getStatusBadge(promo.status)} className="text-xs">
                      {promo.status}
                    </Badge>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <div className="text-xs font-bold">Total Sent</div>
                    <div className="text-xs text-gray-600">{promo.totalSent.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold">Redeemed</div>
                    <div className="text-xs text-gray-600">{promo.redeemed.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold">Redemption Rate</div>
                    <div className={`text-xs font-bold ${getRedemptionColor(promo.redemptionRate)}`}>
                      {promo.redemptionRate}%
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold">Avg Order Value</div>
                    <div className="text-xs text-gray-600">₹{promo.avgOrderValue}</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold">Redemption Rate</span>
                    <span className="text-xs text-gray-500">{promo.redemptionRate}%</span>
                  </div>
                  <Progress value={promo.redemptionRate} className="h-2" />
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">vs Last Month</span>
                    <span className={`text-xs font-bold ${promo.improvement.startsWith('+') ? 'text-green-600' : promo.improvement.startsWith('-') ? 'text-red-600' : 'text-gray-600'}`}>
                      {promo.improvement}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Redemption Analysis Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xs font-bold flex items-center gap-2">
            <Target className="h-4 w-4" />
            Redemption Analysis Summary
          </CardTitle>
          <CardDescription className="text-xs">
            Overall promo code performance and insights
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <div className="text-xs font-bold">Total Sent</div>
              <div className="text-xs text-gray-600">{redemptionAnalysis.totalSent.toLocaleString()}</div>
            </div>
            <div>
              <div className="text-xs font-bold">Total Redeemed</div>
              <div className="text-xs text-gray-600">{redemptionAnalysis.totalRedeemed.toLocaleString()}</div>
            </div>
            <div>
              <div className="text-xs font-bold">Overall Redemption Rate</div>
              <div className="text-xs text-gray-600">{redemptionAnalysis.overallRedemptionRate}%</div>
            </div>
            <div>
              <div className="text-xs font-bold">Total Revenue</div>
              <div className="text-xs text-gray-600">₹{redemptionAnalysis.totalRevenue.toLocaleString()}</div>
            </div>
            <div>
              <div className="text-xs font-bold">Top Performer</div>
              <div className="text-xs text-gray-600">{redemptionAnalysis.topPerformer}</div>
            </div>
            <div>
              <div className="text-xs font-bold">Focus Area</div>
              <div className="text-xs text-gray-600">{redemptionAnalysis.focusArea}</div>
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
                  <strong>WELCOME20</strong> - 25% redemption rate
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  New customer campaigns show highest redemption
                </div>
              </div>
              <div>
                <div className="text-xs font-bold mb-2">Focus Area</div>
                <div className="text-xs text-gray-600">
                  <strong>FESTIVAL50</strong> - 15% redemption rate
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Festival campaigns need better targeting
                </div>
              </div>
            </div>
            
            <div className="text-xs text-gray-600 space-y-1">
              <p><strong>Key Insights:</strong></p>
              <p>• Overall redemption rate of 20.8% across all campaigns</p>
              <p>• New customer campaigns perform best (25%)</p>
              <p>• Festival campaigns need strategy improvement</p>
              <p>• Loyalty rewards show consistent performance</p>
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
              <p>• Improve targeting for festival campaigns</p>
              <p>• Optimize promo code distribution channels</p>
              <p>• Enhance campaign messaging and visibility</p>
              <p>• Implement A/B testing for promo codes</p>
            </div>
            
            <div className="text-xs text-gray-600 space-y-2">
              <p><strong>Medium-term Goals (Next 90 Days):</strong></p>
              <p>• Achieve 25%+ redemption rate across all campaigns</p>
              <p>• Implement personalized promo code recommendations</p>
              <p>• Launch dynamic pricing strategies</p>
              <p>• Create customer segmentation for targeted campaigns</p>
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
            <p>• Festival seasons show higher redemption potential</p>
            <p>• Mobile-first promo code delivery crucial</p>
            <p>• WhatsApp sharing drives redemption rates</p>
            <p>• Regional language campaigns perform better</p>
            <p>• UPI integration simplifies redemption process</p>
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
            <p><strong>Data Source:</strong> Marketing platform, POS system, customer database</p>
            <p><strong>Refresh:</strong> Daily calculation</p>
            <p><strong>Drill Down:</strong> By campaign, by channel, by time period, by customer segment</p>
            <p><strong>Users:</strong> Marketing Manager, Campaign Manager, Owner</p>
            <p><strong>Purpose:</strong> Optimize marketing campaigns and customer acquisition</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
