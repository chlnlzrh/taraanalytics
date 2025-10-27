import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, BarChart3, TrendingUp, TrendingDown, Target, Award, Users, MessageSquare } from "lucide-react"

export default function ComplaintVariancePage() {
  // Synthetic data based on CMP_017 specifications from restaurant_kpi_metrics_127.txt
  const locationData = [
    {
      location: "The Potbelly Divine (Gurugram)",
      complaintRate: 0.8,
      benchmark: 1.0,
      variance: -20.0,
      status: "High Performer",
      trend: "up",
      operationalExcellence: "Excellent",
      staffingLevel: "Optimal",
      managementQuality: "High",
      complaintThemes: { food: 0.3, service: 0.3, ambiance: 0.2 }
    },
    {
      location: "The Potbelly (Chanakyapuri)",
      complaintRate: 1.2,
      benchmark: 1.0,
      variance: 20.0,
      status: "Good Performer",
      trend: "stable",
      operationalExcellence: "Good",
      staffingLevel: "Good",
      managementQuality: "Good",
      complaintThemes: { food: 0.5, service: 0.4, ambiance: 0.3 }
    },
    {
      location: "The Potbelly Rooftop Cafe (Shahpur Jat)",
      complaintRate: 2.8,
      benchmark: 1.0,
      variance: 180.0,
      status: "Needs Improvement",
      trend: "down",
      operationalExcellence: "Poor",
      staffingLevel: "Inadequate",
      managementQuality: "Low",
      complaintThemes: { food: 1.2, service: 1.0, ambiance: 0.6 }
    }
  ]

  const getVarianceColor = (variance: number) => {
    if (variance > 1) return "text-red-600" // Critical: Variance >1 per 100 covers
    if (variance > 0.5) return "text-yellow-600" // Warning: Variance 0.5-1 per 100 covers
    return "text-green-600" // Good: Variance <0.5 per 100 covers
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

  const complaintAnalysis = {
    averageComplaintRate: 1.6,
    standardDeviation: 1.0,
    consistencyScore: 68,
    topPerformer: "The Potbelly Divine (Gurugram)",
    focusArea: "The Potbelly Rooftop Cafe (Shahpur Jat)",
    targetRate: "&lt;1 complaint per 100 covers (variance &lt;0.5 per 100)",
    criticalThreshold: "Variance &gt;1 per 100 covers or any location &gt;2 per 100",
    resolutionRate: 89.2
  }

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold">Complaint Rate Variance</h1>
          <p className="text-xs text-gray-500">CMP_017 - Operational Consistency</p>
        </div>
        <Badge variant="outline" className="text-xs">
          Weekly Analysis
        </Badge>
      </div>

      {/* Complaint Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xs font-bold flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            Complaint Rate by Location
          </CardTitle>
          <CardDescription className="text-xs">
            Compare complaint rates across locations to identify service quality gaps and customer satisfaction issues.
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
                    <div className="text-xs font-bold">Current Complaint Rate</div>
                    <div className="text-xs text-gray-600">{location.complaintRate} per 100 covers</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold">Target</div>
                    <div className="text-xs text-gray-600">&lt;1 per 100 covers</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold">Variance</div>
                    <div className={`text-xs font-bold ${getVarianceColor(location.variance)}`}>
                      {location.variance > 0 ? '+' : ''}{location.variance}%
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold">Operational Excellence</div>
                    <div className="text-xs text-gray-600">{location.operationalExcellence}</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs font-bold">Staffing Level</div>
                    <div className="text-xs text-gray-600">{location.staffingLevel}</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold">Management Quality</div>
                    <div className="text-xs text-gray-600">{location.managementQuality}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Complaint Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xs font-bold flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            Complaint Analysis Summary
          </CardTitle>
          <CardDescription className="text-xs">
            Overall complaint metrics and resolution analysis across all locations.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div className="text-xs font-bold">Average Complaint Rate</div>
                <div className="text-xs text-gray-600">{complaintAnalysis.averageComplaintRate}%</div>
              </div>
              <div>
                <div className="text-xs font-bold">Standard Deviation</div>
                <div className="text-xs text-gray-600">{complaintAnalysis.standardDeviation}%</div>
              </div>
              <div>
                <div className="text-xs font-bold">Consistency Score</div>
                <div className="text-xs text-gray-600">{complaintAnalysis.consistencyScore}/100</div>
              </div>
              <div>
                <div className="text-xs font-bold">Resolution Rate</div>
                <div className="text-xs text-gray-600">{complaintAnalysis.resolutionRate}%</div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold">Consistency Score</span>
                <span className="text-xs text-gray-500">{complaintAnalysis.consistencyScore}/100</span>
              </div>
              <Progress value={complaintAnalysis.consistencyScore} className="h-2" />
            </div>
            
            <div className="text-xs text-gray-600">
              <strong>Impact:</strong> Each 1% reduction in complaints improves customer satisfaction by ~8%
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
                  <strong>The Potbelly Divine (Gurugram)</strong> - 1.2% complaint rate
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Excellent service quality and customer experience
                </div>
              </div>
              <div>
                <div className="text-xs font-bold mb-2">Focus Area</div>
                <div className="text-xs text-gray-600">
                  <strong>The Potbelly Rooftop Cafe</strong> - 4.5% complaint rate
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  High food and service complaints need immediate attention
                </div>
              </div>
            </div>
            
            <div className="text-xs text-gray-600 space-y-1">
              <p><strong>Key Insights:</strong></p>
              <p>• Gurugram leads with 60% below benchmark complaint rate</p>
              <p>• Shahpur Jat exceeds benchmark by 50% - urgent action required</p>
              <p>• Food quality complaints are highest across all locations</p>
              <p>• Service complaints correlate with staff training levels</p>
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
              <p>• Conduct service quality audit at Shahpur Jat</p>
              <p>• Implement customer feedback system at all locations</p>
              <p>• Train staff on complaint resolution procedures</p>
              <p>• Review food quality standards and procedures</p>
            </div>
            
            <div className="text-xs text-gray-600 space-y-2">
              <p><strong>Medium-term Goals (Next 90 Days):</strong></p>
              <p>• Achieve &lt;3% complaint rate at all locations</p>
              <p>• Reduce variance between locations to &lt;20%</p>
              <p>• Implement proactive customer satisfaction measures</p>
              <p>• Create complaint prevention training program</p>
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
            <p>• Cultural expectations for service quality vary by location</p>
            <p>• Local competition levels impact customer satisfaction standards</p>
            <p>• Staff language skills affect service quality perception</p>
            <p>• Weather conditions impact ambiance complaints</p>
            <p>• Local food preferences influence quality expectations</p>
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
            <p><strong>Data Source:</strong> Customer feedback, complaint logs, review platforms, staff reports</p>
            <p><strong>Refresh:</strong> Weekly calculation</p>
            <p><strong>Drill Down:</strong> By location, by complaint type, by time period, by resolution status</p>
            <p><strong>Users:</strong> Owner, Manager, Customer Service Team</p>
            <p><strong>Purpose:</strong> Improve customer satisfaction and service quality</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
