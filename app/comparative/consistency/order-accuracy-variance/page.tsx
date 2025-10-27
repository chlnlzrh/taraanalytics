import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, BarChart3, TrendingUp, TrendingDown, Target, Award, Users, CheckCircle } from "lucide-react"

export default function OrderAccuracyVariancePage() {
  // Synthetic data based on CMP_016 specifications from restaurant_kpi_metrics_127.txt
  const locationData = [
    {
      location: "The Potbelly Divine (Gurugram)",
      accuracyRate: 98.2,
      benchmark: 97.0,
      variance: 1.2,
      status: "High Performer",
      trend: "up",
      operationalModel: "Standardized",
      trainingLevel: "Advanced",
      errorRootCause: { kitchen: 0.5, pos: 0.3, delivery: 1.0 }
    },
    {
      location: "The Potbelly (Chanakyapuri)",
      accuracyRate: 97.5,
      benchmark: 97.0,
      variance: 0.5,
      status: "Good Performer",
      trend: "stable",
      operationalModel: "Good",
      trainingLevel: "Standard",
      errorRootCause: { kitchen: 0.8, pos: 0.7, delivery: 1.0 }
    },
    {
      location: "The Potbelly Rooftop Cafe (Shahpur Jat)",
      accuracyRate: 92.8,
      benchmark: 97.0,
      variance: -4.2,
      status: "Needs Improvement",
      trend: "down",
      operationalModel: "Inconsistent",
      trainingLevel: "Basic",
      errorRootCause: { kitchen: 2.5, pos: 1.8, delivery: 2.9 }
    }
  ]

  const getVarianceColor = (variance: number) => {
    if (variance > 5) return "text-red-600" // Critical: Variance >5%
    if (variance > 2) return "text-yellow-600" // Warning: Variance 2-5%
    return "text-green-600" // Good: Variance <2%
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

  const accuracyAnalysis = {
    averageAccuracy: 96.2,
    standardDeviation: 2.7,
    consistencyScore: 78,
    topPerformer: "The Potbelly Divine (Gurugram)",
    focusArea: "The Potbelly Rooftop Cafe (Shahpur Jat)",
    targetAccuracy: "&gt;97% accuracy (variance &lt;2%)",
    criticalThreshold: "Variance &gt;5% or any location &lt;93%"
  }

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold">Order Accuracy Variance</h1>
          <p className="text-xs text-gray-500">CMP_016 - Operational Consistency</p>
        </div>
        <Badge variant="outline" className="text-xs">
          Weekly Analysis
        </Badge>
      </div>

      {/* Accuracy Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xs font-bold flex items-center gap-2">
            <CheckCircle className="h-4 w-4" />
            Order Accuracy by Location
          </CardTitle>
          <CardDescription className="text-xs">
            Compare order accuracy rates across locations to identify consistency gaps and service quality issues.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {locationData.map((location, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-xs font-bold">
                      {index + 1}
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
                
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <div className="text-xs font-bold">Current Accuracy</div>
                    <div className="text-xs text-gray-600">{location.accuracyRate}%</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold">Target</div>
                    <div className="text-xs text-gray-600">&gt;97%</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold">Variance</div>
                    <div className={`text-xs font-bold ${getVarianceColor(location.variance)}`}>
                      {location.variance > 0 ? '+' : ''}{location.variance}%
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold">Operational Model</div>
                    <div className="text-xs text-gray-600">{location.operationalModel}</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs font-bold">Training Level</div>
                    <div className="text-xs text-gray-600">{location.trainingLevel}</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold">Error Sources</div>
                    <div className="text-xs text-gray-600">Kitchen: {location.errorRootCause.kitchen}%, POS: {location.errorRootCause.pos}%, Delivery: {location.errorRootCause.delivery}%</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Accuracy Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xs font-bold flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            Accuracy Analysis Summary
          </CardTitle>
          <CardDescription className="text-xs">
            Overall accuracy metrics and error analysis across all locations.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div className="text-xs font-bold">Average Accuracy</div>
                <div className="text-xs text-gray-600">{accuracyAnalysis.averageAccuracy}%</div>
              </div>
              <div>
                <div className="text-xs font-bold">Standard Deviation</div>
                <div className="text-xs text-gray-600">{accuracyAnalysis.standardDeviation}%</div>
              </div>
              <div>
                <div className="text-xs font-bold">Consistency Score</div>
                <div className="text-xs text-gray-600">{accuracyAnalysis.consistencyScore}/100</div>
              </div>
              <div>
                <div className="text-xs font-bold">Total Errors (Monthly)</div>
                <div className="text-xs text-gray-600">{accuracyAnalysis.totalErrors}</div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold">Consistency Score</span>
                <span className="text-xs text-gray-500">{accuracyAnalysis.consistencyScore}/100</span>
              </div>
              <Progress value={accuracyAnalysis.consistencyScore} className="h-2" />
            </div>
            
            <div className="text-xs text-gray-600">
              <strong>Impact:</strong> Each 1% accuracy improvement reduces customer complaints by ~15%
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
                  <strong>The Potbelly Divine (Gurugram)</strong> - 96.8% accuracy
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Excellent order management and staff training
                </div>
              </div>
              <div>
                <div className="text-xs font-bold mb-2">Focus Area</div>
                <div className="text-xs text-gray-600">
                  <strong>The Potbelly Rooftop Cafe</strong> - 91.8% accuracy
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  High error rate in takeaway and online orders
                </div>
              </div>
            </div>
            
            <div className="text-xs text-gray-600 space-y-1">
              <p><strong>Key Insights:</strong></p>
              <p>• Gurugram leads with 96.8% accuracy, 1.9% above benchmark</p>
              <p>• Shahpur Jat falls 3.4% below benchmark - immediate attention needed</p>
              <p>• Takeaway orders show lowest accuracy across all locations</p>
              <p>• Online order accuracy varies significantly by location</p>
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
              <p>• Implement order confirmation system at Shahpur Jat</p>
              <p>• Train staff on order accuracy best practices</p>
              <p>• Improve communication between kitchen and service staff</p>
              <p>• Conduct order accuracy audit at underperforming locations</p>
            </div>
            
            <div className="text-xs text-gray-600 space-y-2">
              <p><strong>Medium-term Goals (Next 90 Days):</strong></p>
              <p>• Achieve 95%+ accuracy at all locations</p>
              <p>• Reduce variance between locations to &lt;2%</p>
              <p>• Standardize order management procedures</p>
              <p>• Implement accuracy tracking and reporting system</p>
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
            <p>• Language barriers affect order accuracy in some locations</p>
            <p>• Local food preferences and customizations increase complexity</p>
            <p>• Staff training levels vary by location and experience</p>
            <p>• Technology adoption impacts online order accuracy</p>
            <p>• Cultural factors influence customer communication styles</p>
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
            <p><strong>Data Source:</strong> POS system, customer feedback, order logs, complaint records</p>
            <p><strong>Refresh:</strong> Weekly calculation</p>
            <p><strong>Drill Down:</strong> By location, by order type, by time period, by error type</p>
            <p><strong>Users:</strong> Owner, Manager, Service Staff</p>
            <p><strong>Purpose:</strong> Improve service quality and customer satisfaction</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
