import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, BarChart3, TrendingUp, TrendingDown, Target, Award, Users } from "lucide-react"

export default function CompositePerformanceIndexPage() {
  // Synthetic data based on CMP_019 specifications
  const locationData = [
    {
      location: "The Potbelly Divine (Gurugram)",
      score: 87,
      rank: 1,
      metrics: {
        revenue: 92,
        primeCost: 88,
        customerSatisfaction: 91,
        laborProductivity: 85,
        foodCost: 89
      },
      status: "High Performer",
      trend: "up",
      improvementAreas: ["Labor productivity optimization"]
    },
    {
      location: "The Potbelly (Chanakyapuri)",
      score: 78,
      rank: 2,
      metrics: {
        revenue: 82,
        primeCost: 75,
        customerSatisfaction: 85,
        laborProductivity: 78,
        foodCost: 95
      },
      status: "Good Performer",
      trend: "stable",
      improvementAreas: ["Prime cost management", "Revenue growth"]
    },
    {
      location: "The Potbelly Rooftop Cafe (Shahpur Jat)",
      score: 71,
      rank: 3,
      metrics: {
        revenue: 75,
        primeCost: 68,
        customerSatisfaction: 88,
        laborProductivity: 72,
        foodCost: 82
      },
      status: "Needs Improvement",
      trend: "down",
      improvementAreas: ["Prime cost control", "Labor efficiency", "Revenue optimization"]
    }
  ]

  const getScoreColor = (score: number) => {
    if (score >= 85) return "text-green-600"
    if (score >= 75) return "text-yellow-600"
    return "text-red-600"
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "High Performer": return "default"
      case "Good Performer": return "secondary"
      case "Needs Improvement": return "destructive"
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

  const weightedMetrics = [
    { name: "Revenue Performance", weight: 25, description: "Daily revenue, SSSG, RevPASH" },
    { name: "Prime Cost Management", weight: 25, description: "Prime cost %, food cost %, labor cost %" },
    { name: "Customer Satisfaction", weight: 20, description: "NPS, ratings, complaint rate" },
    { name: "Labor Productivity", weight: 20, description: "Revenue per labor hour, covers per hour" },
    { name: "Operational Efficiency", weight: 10, description: "Table turnover, waste %, order accuracy" }
  ]

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold">Composite Performance Index</h1>
          <p className="text-xs text-gray-500">CMP_019 - Best Practice Identification</p>
        </div>
        <Badge variant="outline" className="text-xs">
          Monthly Calculation
        </Badge>
      </div>

      {/* Overall Rankings */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xs font-bold flex items-center gap-2">
            <Award className="h-4 w-4" />
            Location Performance Rankings
          </CardTitle>
          <CardDescription className="text-xs">
            Weighted score of top 5-7 metrics per location. Rank locations and address bottom performers systematically.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {locationData.map((location, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-xs font-bold">
                      {location.rank}
                    </div>
                    <div>
                      <div className="text-xs font-bold">{location.location}</div>
                      <div className="text-xs text-gray-500">{location.status}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {getTrendIcon(location.trend)}
                    <Badge variant={getStatusBadge(location.status)} className="text-xs">
                      {location.status}
                    </Badge>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold">Composite Score</span>
                      <span className={`text-xs font-bold ${getScoreColor(location.score)}`}>
                        {location.score}/100
                      </span>
                    </div>
                    <Progress value={location.score} className="h-2" />
                  </div>
                </div>
                
                <div className="grid grid-cols-5 gap-2 mb-3">
                  <div className="text-center">
                    <div className="text-xs font-bold">Revenue</div>
                    <div className={`text-xs ${getScoreColor(location.metrics.revenue)}`}>
                      {location.metrics.revenue}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-bold">Prime Cost</div>
                    <div className={`text-xs ${getScoreColor(location.metrics.primeCost)}`}>
                      {location.metrics.primeCost}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-bold">Satisfaction</div>
                    <div className={`text-xs ${getScoreColor(location.metrics.customerSatisfaction)}`}>
                      {location.metrics.customerSatisfaction}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-bold">Labor</div>
                    <div className={`text-xs ${getScoreColor(location.metrics.laborProductivity)}`}>
                      {location.metrics.laborProductivity}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-bold">Food Cost</div>
                    <div className={`text-xs ${getScoreColor(location.metrics.foodCost)}`}>
                      {location.metrics.foodCost}
                    </div>
                  </div>
                </div>
                
                <div className="text-xs text-gray-600">
                  <strong>Improvement Areas:</strong> {location.improvementAreas.join(', ')}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Weighted Metrics Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xs font-bold flex items-center gap-2">
            <Target className="h-4 w-4" />
            Weighted Metrics Breakdown
          </CardTitle>
          <CardDescription className="text-xs">
            Composite score calculation based on weighted importance of key performance indicators.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {weightedMetrics.map((metric, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold">{metric.name}</span>
                    <span className="text-xs text-gray-500">{metric.weight}%</span>
                  </div>
                  <div className="text-xs text-gray-600 mb-2">{metric.description}</div>
                  <Progress value={metric.weight} className="h-1" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Performance Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xs font-bold">Performance Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="text-xs font-bold mb-2">Top Performer</div>
                <div className="text-xs text-gray-600">
                  <strong>The Potbelly Divine (Gurugram)</strong> - Score: 87/100
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Strong across all metrics, particularly revenue and customer satisfaction
                </div>
              </div>
              <div>
                <div className="text-xs font-bold mb-2">Focus Area</div>
                <div className="text-xs text-gray-600">
                  <strong>The Potbelly Rooftop Cafe</strong> - Score: 71/100
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Needs improvement in prime cost control and labor efficiency
                </div>
              </div>
            </div>
            
            <div className="text-xs text-gray-600 space-y-1">
              <p><strong>Key Insights:</strong></p>
              <p>• Gurugram location leads in revenue and customer satisfaction</p>
              <p>• Chanakyapuri excels in food cost management</p>
              <p>• Shahpur Jat needs operational improvements</p>
              <p>• Cross-location learning opportunities identified</p>
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
              <p>• Conduct operational audit at Shahpur Jat location</p>
              <p>• Implement best practices from Gurugram at other locations</p>
              <p>• Focus on prime cost reduction at Shahpur Jat</p>
              <p>• Cross-train staff for improved labor productivity</p>
            </div>
            
            <div className="text-xs text-gray-600 space-y-2">
              <p><strong>Medium-term Goals (Next 90 Days):</strong></p>
              <p>• Achieve composite score >80 for all locations</p>
              <p>• Reduce variance between top and bottom performers</p>
              <p>• Standardize processes across all locations</p>
              <p>• Implement performance-based incentives</p>
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
            <p>• Location-specific factors impact performance (competition, demographics, rent)</p>
            <p>• Staff retention varies by location affecting consistency</p>
            <p>• Local supplier relationships impact food cost significantly</p>
            <p>• Cultural preferences influence customer satisfaction metrics</p>
            <p>• Technology adoption rates differ across locations</p>
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
            <p><strong>Data Source:</strong> All KPI metrics by location, weighted calculation</p>
            <p><strong>Refresh:</strong> Monthly calculation</p>
            <p><strong>Drill Down:</strong> By metric, by location, by time period, by improvement area</p>
            <p><strong>Users:</strong> Owner, CFO, Manager</p>
            <p><strong>Purpose:</strong> Rank locations and address bottom performers systematically</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
