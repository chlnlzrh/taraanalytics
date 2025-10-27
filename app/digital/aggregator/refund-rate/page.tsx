import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, BarChart3, TrendingUp, TrendingDown, Target, Award, Users, RefreshCw } from "lucide-react"

export default function AggregatorRefundRatePage() {
  // Synthetic data based on DIG_007 specifications
  const refundData = [
    {
      aggregator: "Swiggy",
      totalOrders: 1250,
      refundedOrders: 75,
      refundRate: 6.0,
      status: "High Performer",
      trend: "down",
      lastMonth: {
        totalOrders: 1200,
        refundedOrders: 84,
        refundRate: 7.0
      },
      improvement: "-1.0%",
      avgRefundAmount: 180,
      refundReasons: {
        food_quality: 35,
        delivery_delay: 25,
        wrong_order: 15
      },
      resolutionTime: "2.5 hours"
    },
    {
      aggregator: "Zomato",
      totalOrders: 980,
      refundedOrders: 78,
      refundRate: 8.0,
      status: "Good Performer",
      trend: "stable",
      lastMonth: {
        totalOrders: 950,
        refundedOrders: 76,
        refundRate: 8.0
      },
      improvement: "0%",
      avgRefundAmount: 165,
      refundReasons: {
        food_quality: 40,
        delivery_delay: 20,
        wrong_order: 18
      },
      resolutionTime: "3.2 hours"
    },
    {
      aggregator: "Uber Eats",
      totalOrders: 650,
      refundedOrders: 78,
      refundRate: 12.0,
      status: "Low Performer",
      trend: "up",
      lastMonth: {
        totalOrders: 680,
        refundedOrders: 68,
        refundRate: 10.0
      },
      improvement: "+2.0%",
      avgRefundAmount: 195,
      refundReasons: {
        food_quality: 45,
        delivery_delay: 30,
        wrong_order: 3
      },
      resolutionTime: "4.1 hours"
    }
  ]

  const refundAnalysis = {
    totalOrders: 2880,
    totalRefunds: 231,
    overallRefundRate: 8.0,
    topPerformer: "Swiggy",
    focusArea: "Uber Eats",
    avgResolutionTime: "3.3 hours",
    totalRefundAmount: 41550
  }

  const getRefundColor = (rate: number) => {
    if (rate <= 6) return "text-green-600"
    if (rate <= 10) return "text-yellow-600"
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
      case "up": return <TrendingUp className="h-4 w-4 text-red-500" />
      case "down": return <TrendingDown className="h-4 w-4 text-green-500" />
      default: return <BarChart3 className="h-4 w-4 text-gray-500" />
    }
  }

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold">Aggregator Refund Rate</h1>
          <p className="text-xs text-gray-500">DIG_007 - Digital & Marketing</p>
        </div>
        <Badge variant="outline" className="text-xs">
          Weekly Analysis
        </Badge>
      </div>

      {/* Refund Analysis by Aggregator */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xs font-bold flex items-center gap-2">
            <RefreshCw className="h-4 w-4" />
            Refund Rate by Aggregator
          </CardTitle>
          <CardDescription className="text-xs">
            Refund rates and analysis across different aggregator platforms
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {refundData.map((aggregator, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-xs font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <div className="text-xs font-bold">{aggregator.aggregator}</div>
                      <div className="text-xs text-gray-500">{aggregator.totalOrders.toLocaleString()} total orders</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {getTrendIcon(aggregator.trend)}
                    <Badge variant={getStatusBadge(aggregator.status)} className="text-xs">
                      {aggregator.status}
                    </Badge>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <div className="text-xs font-bold">Refunded Orders</div>
                    <div className="text-xs text-gray-600">{aggregator.refundedOrders}</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold">Refund Rate</div>
                    <div className={`text-xs font-bold ${getRefundColor(aggregator.refundRate)}`}>
                      {aggregator.refundRate}%
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold">Avg Refund Amount</div>
                    <div className="text-xs text-gray-600">₹{aggregator.avgRefundAmount}</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold">Resolution Time</div>
                    <div className="text-xs text-gray-600">{aggregator.resolutionTime}</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold">Refund Rate</span>
                    <span className="text-xs text-gray-500">{aggregator.refundRate}%</span>
                  </div>
                  <Progress value={aggregator.refundRate} className="h-2" />
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">vs Last Month</span>
                    <span className={`text-xs font-bold ${aggregator.improvement.startsWith('+') ? 'text-red-600' : aggregator.improvement.startsWith('-') ? 'text-green-600' : 'text-gray-600'}`}>
                      {aggregator.improvement}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Refund Analysis Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xs font-bold flex items-center gap-2">
            <Target className="h-4 w-4" />
            Refund Analysis Summary
          </CardTitle>
          <CardDescription className="text-xs">
            Overall refund performance and insights
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <div className="text-xs font-bold">Total Orders</div>
              <div className="text-xs text-gray-600">{refundAnalysis.totalOrders.toLocaleString()}</div>
            </div>
            <div>
              <div className="text-xs font-bold">Total Refunds</div>
              <div className="text-xs text-gray-600">{refundAnalysis.totalRefunds}</div>
            </div>
            <div>
              <div className="text-xs font-bold">Overall Refund Rate</div>
              <div className="text-xs text-gray-600">{refundAnalysis.overallRefundRate}%</div>
            </div>
            <div>
              <div className="text-xs font-bold">Avg Resolution Time</div>
              <div className="text-xs text-gray-600">{refundAnalysis.avgResolutionTime}</div>
            </div>
            <div>
              <div className="text-xs font-bold">Top Performer</div>
              <div className="text-xs text-gray-600">{refundAnalysis.topPerformer}</div>
            </div>
            <div>
              <div className="text-xs font-bold">Focus Area</div>
              <div className="text-xs text-gray-600">{refundAnalysis.focusArea}</div>
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
                  <strong>Swiggy</strong> - 6.0% refund rate
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Lowest refund rate with improving trend
                </div>
              </div>
              <div>
                <div className="text-xs font-bold mb-2">Focus Area</div>
                <div className="text-xs text-gray-600">
                  <strong>Uber Eats</strong> - 12.0% refund rate
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Highest refund rate needs attention
                </div>
              </div>
            </div>
            
            <div className="text-xs text-gray-600 space-y-1">
              <p><strong>Key Insights:</strong></p>
              <p>• Overall refund rate of 8.0% across all aggregators</p>
              <p>• Swiggy shows best performance with 6.0% refund rate</p>
              <p>• Uber Eats needs quality improvement focus</p>
              <p>• Food quality issues are primary refund reason</p>
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
              <p>• Review food quality processes for Uber Eats orders</p>
              <p>• Implement quality checks specific to aggregator orders</p>
              <p>• Train staff on aggregator-specific requirements</p>
              <p>• Improve communication with delivery partners</p>
            </div>
            
            <div className="text-xs text-gray-600 space-y-2">
              <p><strong>Medium-term Goals (Next 90 Days):</strong></p>
              <p>• Achieve &lt;7% refund rate across all aggregators</p>
              <p>• Implement predictive quality monitoring</p>
              <p>• Create aggregator-specific quality protocols</p>
              <p>• Launch customer feedback integration</p>
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
            <p>• Regional food preferences impact refund patterns</p>
            <p>• Festival seasons show higher refund rates</p>
            <p>• Weather conditions affect delivery quality</p>
            <p>• Local competition influences customer expectations</p>
            <p>• Regional language support reduces miscommunication</p>
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
            <p><strong>Data Source:</strong> Aggregator APIs, POS system, refund tracking</p>
            <p><strong>Refresh:</strong> Daily calculation</p>
            <p><strong>Drill Down:</strong> By aggregator, by reason, by time period, by location</p>
            <p><strong>Users:</strong> Operations Manager, Quality Manager, Owner</p>
            <p><strong>Purpose:</strong> Optimize order quality and reduce refund costs</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
