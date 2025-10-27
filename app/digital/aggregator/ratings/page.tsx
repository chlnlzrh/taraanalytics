import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, BarChart3, TrendingUp, TrendingDown, Target, Award, Users, Star } from "lucide-react"

export default function AggregatorRatingsPage() {
  // Synthetic data based on DIG_009 specifications
  const ratingData = [
    {
      aggregator: "Swiggy",
      avgRating: 4.6,
      totalReviews: 1250,
      ratingDistribution: {
        "5": 750,
        "4": 350,
        "3": 100,
        "2": 30,
        "1": 20
      },
      status: "High Performer",
      trend: "up",
      lastMonth: {
        avgRating: 4.5,
        totalReviews: 1200
      },
      improvement: "+0.1",
      responseRate: 95.2,
      topComplaints: ["Delivery time", "Food temperature", "Packaging"]
    },
    {
      aggregator: "Zomato",
      avgRating: 4.3,
      totalReviews: 980,
      ratingDistribution: {
        "5": 520,
        "4": 300,
        "3": 120,
        "2": 25,
        "1": 15
      },
      status: "Good Performer",
      trend: "stable",
      lastMonth: {
        avgRating: 4.3,
        totalReviews: 950
      },
      improvement: "0.0",
      responseRate: 88.5,
      topComplaints: ["Food quality", "Order accuracy", "Customer service"]
    },
    {
      aggregator: "Uber Eats",
      avgRating: 4.0,
      totalReviews: 650,
      ratingDistribution: {
        "5": 300,
        "4": 200,
        "3": 100,
        "2": 35,
        "1": 15
      },
      status: "Low Performer",
      trend: "down",
      lastMonth: {
        avgRating: 4.1,
        totalReviews: 680
      },
      improvement: "-0.1",
      responseRate: 82.3,
      topComplaints: ["Delivery delays", "Food quality", "App issues"]
    }
  ]

  const ratingAnalysis = {
    overallRating: 4.3,
    totalReviews: 2880,
    topPerformer: "Swiggy",
    focusArea: "Uber Eats",
    avgResponseRate: 88.7,
    ratingTrend: "Stable"
  }

  const getRatingColor = (rating: number) => {
    if (rating >= 4.5) return "text-green-600"
    if (rating >= 4.0) return "text-yellow-600"
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
          <h1 className="text-xs font-bold">Aggregator Ratings</h1>
          <p className="text-xs text-gray-500">DIG_009 - Digital & Marketing</p>
        </div>
        <Badge variant="outline" className="text-xs">
          Weekly Analysis
        </Badge>
      </div>

      {/* Rating Analysis by Aggregator */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xs font-bold flex items-center gap-2">
            <Star className="h-4 w-4" />
            Rating Analysis by Aggregator
          </CardTitle>
          <CardDescription className="text-xs">
            Customer ratings and reviews across different aggregator platforms
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {ratingData.map((aggregator, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-xs font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <div className="text-xs font-bold">{aggregator.aggregator}</div>
                      <div className="text-xs text-gray-500">{aggregator.totalReviews.toLocaleString()} reviews</div>
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
                    <div className="text-xs font-bold">Average Rating</div>
                    <div className={`text-xs font-bold ${getRatingColor(aggregator.avgRating)}`}>
                      {aggregator.avgRating}/5.0
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold">Response Rate</div>
                    <div className="text-xs text-gray-600">{aggregator.responseRate}%</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold">5-Star Reviews</div>
                    <div className="text-xs text-gray-600">{aggregator.ratingDistribution["5"]}</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold">1-Star Reviews</div>
                    <div className="text-xs text-gray-600">{aggregator.ratingDistribution["1"]}</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold">Average Rating</span>
                    <span className="text-xs text-gray-500">{aggregator.avgRating}/5.0</span>
                  </div>
                  <Progress value={(aggregator.avgRating / 5) * 100} className="h-2" />
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">vs Last Month</span>
                    <span className={`text-xs font-bold ${aggregator.improvement.startsWith('+') ? 'text-green-600' : aggregator.improvement.startsWith('-') ? 'text-red-600' : 'text-gray-600'}`}>
                      {aggregator.improvement}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Rating Analysis Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xs font-bold flex items-center gap-2">
            <Target className="h-4 w-4" />
            Rating Analysis Summary
          </CardTitle>
          <CardDescription className="text-xs">
            Overall rating performance and insights
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <div className="text-xs font-bold">Overall Rating</div>
              <div className="text-xs text-gray-600">{ratingAnalysis.overallRating}/5.0</div>
            </div>
            <div>
              <div className="text-xs font-bold">Total Reviews</div>
              <div className="text-xs text-gray-600">{ratingAnalysis.totalReviews.toLocaleString()}</div>
            </div>
            <div>
              <div className="text-xs font-bold">Avg Response Rate</div>
              <div className="text-xs text-gray-600">{ratingAnalysis.avgResponseRate}%</div>
            </div>
            <div>
              <div className="text-xs font-bold">Rating Trend</div>
              <div className="text-xs text-gray-600">{ratingAnalysis.ratingTrend}</div>
            </div>
            <div>
              <div className="text-xs font-bold">Top Performer</div>
              <div className="text-xs text-gray-600">{ratingAnalysis.topPerformer}</div>
            </div>
            <div>
              <div className="text-xs font-bold">Focus Area</div>
              <div className="text-xs text-gray-600">{ratingAnalysis.focusArea}</div>
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
                  <strong>Swiggy</strong> - 4.6/5.0 rating
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Highest rating with improving trend
                </div>
              </div>
              <div>
                <div className="text-xs font-bold mb-2">Focus Area</div>
                <div className="text-xs text-gray-600">
                  <strong>Uber Eats</strong> - 4.0/5.0 rating
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Lowest rating needs improvement
                </div>
              </div>
            </div>
            
            <div className="text-xs text-gray-600 space-y-1">
              <p><strong>Key Insights:</strong></p>
              <p>• Overall rating of 4.3/5.0 across all aggregators</p>
              <p>• Swiggy leads with 4.6/5.0 and high response rate</p>
              <p>• Uber Eats needs quality improvement focus</p>
              <p>• Response rate correlates with rating performance</p>
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
              <p>• Improve food quality for Uber Eats orders</p>
              <p>• Enhance delivery time management</p>
              <p>• Implement better packaging standards</p>
              <p>• Increase response rate to customer reviews</p>
            </div>
            
            <div className="text-xs text-gray-600 space-y-2">
              <p><strong>Medium-term Goals (Next 90 Days):</strong></p>
              <p>• Achieve 4.5+ rating across all aggregators</p>
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
            <p>• Regional food preferences impact rating patterns</p>
            <p>• Festival seasons show higher rating expectations</p>
            <p>• Weather conditions affect delivery quality</p>
            <p>• Local competition influences customer expectations</p>
            <p>• Regional language support improves customer satisfaction</p>
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
            <p><strong>Data Source:</strong> Aggregator APIs, review platforms, customer feedback</p>
            <p><strong>Refresh:</strong> Daily calculation</p>
            <p><strong>Drill Down:</strong> By aggregator, by rating, by time period, by location</p>
            <p><strong>Users:</strong> Operations Manager, Quality Manager, Owner</p>
            <p><strong>Purpose:</strong> Monitor customer satisfaction and improve service quality</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
