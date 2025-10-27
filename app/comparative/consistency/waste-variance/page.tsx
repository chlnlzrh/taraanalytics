import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, BarChart3, TrendingUp, TrendingDown, Target, Award, Users, Trash2 } from "lucide-react"

export default function WasteVariancePage() {
  // Synthetic data based on CMP_015 specifications from restaurant_kpi_metrics_127.txt
  const locationData = [
    {
      location: "The Potbelly Divine (Gurugram)",
      wastePercent: 2.8,
      benchmark: 3.0,
      variance: -6.7,
      status: "High Performer",
      trend: "up",
      procurement: "Excellent",
      prepPractices: "Standardized",
      storagePractices: "Optimal",
      wasteType: { spoilage: 0.8, prep: 1.2, returns: 0.5, comp: 0.3 }
    },
    {
      location: "The Potbelly (Chanakyapuri)",
      wastePercent: 3.2,
      benchmark: 3.0,
      variance: 6.7,
      status: "Good Performer",
      trend: "stable",
      procurement: "Good",
      prepPractices: "Good",
      storagePractices: "Good",
      wasteType: { spoilage: 1.0, prep: 1.4, returns: 0.5, comp: 0.3 }
    },
    {
      location: "The Potbelly Rooftop Cafe (Shahpur Jat)",
      wastePercent: 5.8,
      benchmark: 3.0,
      variance: 93.3,
      status: "Needs Improvement",
      trend: "down",
      procurement: "Poor",
      prepPractices: "Inconsistent",
      storagePractices: "Suboptimal",
      wasteType: { spoilage: 2.1, prep: 2.2, returns: 0.8, comp: 0.7 }
    }
  ]

  const getVarianceColor = (variance: number) => {
    if (Math.abs(variance) > 3) return "text-red-600" // Critical: >3% variance
    if (Math.abs(variance) > 2) return "text-yellow-600" // Warning: 2-3% variance
    return "text-green-600" // Good: <2% variance
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

  const wasteAnalysis = {
    averageWaste: 3.9,
    standardDeviation: 1.5,
    consistencyScore: 65,
    topPerformer: "The Potbelly Divine (Gurugram)",
    focusArea: "The Potbelly Rooftop Cafe (Shahpur Jat)",
    targetVariance: "&lt;2% variance between lowest and highest",
    criticalThreshold: "&gt;3% variance",
    totalWasteCost: 48500
  }

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold">Waste % Variance</h1>
          <p className="text-xs text-gray-500">CMP_015 - Operational Consistency</p>
        </div>
        <Badge variant="outline" className="text-xs">
          Weekly Analysis
        </Badge>
      </div>

      {/* Waste Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xs font-bold flex items-center gap-2">
            <Trash2 className="h-4 w-4" />
            Waste Percentage by Location
          </CardTitle>
          <CardDescription className="text-xs">
            Compare waste percentages across locations to identify efficiency gaps and cost reduction opportunities.
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
                    <div className="text-xs font-bold">Current Waste %</div>
                    <div className="text-xs text-gray-600">{location.wastePercent}%</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold">Target Variance</div>
                    <div className="text-xs text-gray-600">&lt;2%</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold">Variance</div>
                    <div className={`text-xs font-bold ${getVarianceColor(location.variance)}`}>
                      {location.variance > 0 ? '+' : ''}{location.variance}%
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold">Procurement</div>
                    <div className="text-xs text-gray-600">{location.procurement}</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs font-bold">Prep Practices</div>
                    <div className="text-xs text-gray-600">{location.prepPractices}</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold">Storage Practices</div>
                    <div className="text-xs text-gray-600">{location.storagePractices}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Waste Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xs font-bold flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            Waste Analysis Summary
          </CardTitle>
          <CardDescription className="text-xs">
            Overall waste metrics and cost impact analysis across all locations.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div className="text-xs font-bold">Average Waste %</div>
                <div className="text-xs text-gray-600">{wasteAnalysis.averageWaste}%</div>
              </div>
              <div>
                <div className="text-xs font-bold">Standard Deviation</div>
                <div className="text-xs text-gray-600">{wasteAnalysis.standardDeviation}%</div>
              </div>
              <div>
                <div className="text-xs font-bold">Consistency Score</div>
                <div className="text-xs text-gray-600">{wasteAnalysis.consistencyScore}/100</div>
              </div>
              <div>
                <div className="text-xs font-bold">Monthly Waste Cost</div>
                <div className="text-xs text-gray-600">₹{wasteAnalysis.totalWasteCost.toLocaleString()}</div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold">Consistency Score</span>
                <span className="text-xs text-gray-500">{wasteAnalysis.consistencyScore}/100</span>
              </div>
              <Progress value={wasteAnalysis.consistencyScore} className="h-2" />
            </div>
            
            <div className="text-xs text-gray-600">
              <strong>Cost Impact:</strong> Reducing waste by 1% could save ₹12,000+ monthly across chain
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
                  <strong>The Potbelly Divine (Gurugram)</strong> - 2.8% waste
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Excellent portion control and inventory management
                </div>
              </div>
              <div>
                <div className="text-xs font-bold mb-2">Focus Area</div>
                <div className="text-xs text-gray-600">
                  <strong>The Potbelly Rooftop Cafe</strong> - 5.8% waste
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  High food waste due to overproduction and poor forecasting
                </div>
              </div>
            </div>
            
            <div className="text-xs text-gray-600 space-y-1">
              <p><strong>Key Insights:</strong></p>
              <p>• Gurugram leads with 30% below benchmark waste rate</p>
              <p>• Shahpur Jat exceeds benchmark by 45% - immediate action needed</p>
              <p>• Food waste is the primary contributor to overall waste</p>
              <p>• Portion control and forecasting improvements can reduce waste significantly</p>
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
              <p>• Implement portion control training at Shahpur Jat</p>
              <p>• Improve demand forecasting accuracy at high-waste locations</p>
              <p>• Standardize inventory management procedures</p>
              <p>• Conduct waste audit to identify specific waste sources</p>
            </div>
            
            <div className="text-xs text-gray-600 space-y-2">
              <p><strong>Medium-term Goals (Next 90 Days):</strong></p>
              <p>• Achieve &lt;4% waste rate at all locations</p>
              <p>• Reduce variance between locations to &lt;20%</p>
              <p>• Implement waste tracking and reporting system</p>
              <p>• Create waste reduction incentive program</p>
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
            <p>• Seasonal variations in waste (higher during monsoon and festivals)</p>
            <p>• Local supplier quality affects ingredient shelf life</p>
            <p>• Power outages impact refrigeration and food safety</p>
            <p>• Cultural preferences influence portion sizes and waste patterns</p>
            <p>• Local regulations on food waste disposal vary by location</p>
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
            <p><strong>Data Source:</strong> Inventory management system, waste logs, supplier invoices</p>
            <p><strong>Refresh:</strong> Weekly calculation</p>
            <p><strong>Drill Down:</strong> By location, by category, by time period, by waste type</p>
            <p><strong>Users:</strong> Owner, Manager, Kitchen Staff</p>
            <p><strong>Purpose:</strong> Reduce waste costs and improve operational efficiency</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
