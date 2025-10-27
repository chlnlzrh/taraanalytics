import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, BarChart3, TrendingUp, TrendingDown, Target, Award, Users, Clock } from "lucide-react"

export default function LaborProductivityScatterPage() {
  // Synthetic data based on CMP_014 specifications from restaurant_kpi_metrics_127.txt
  const locationData = [
    {
      location: "The Potbelly Divine (Gurugram)",
      revenuePerHour: 1200,
      laborCostPercent: 28.0,
      efficiency: 95,
      status: "High Performer",
      trend: "up",
      schedulingModel: "Optimized",
      trainingHours: 24,
      staffingRatio: "1:5"
    },
    {
      location: "The Potbelly (Chanakyapuri)",
      revenuePerHour: 950,
      laborCostPercent: 30.0,
      efficiency: 88,
      status: "Good Performer",
      trend: "stable",
      schedulingModel: "Standard",
      trainingHours: 20,
      staffingRatio: "1:6"
    },
    {
      location: "The Potbelly Rooftop Cafe (Shahpur Jat)",
      revenuePerHour: 650,
      laborCostPercent: 35.0,
      efficiency: 65,
      status: "Needs Improvement",
      trend: "down",
      schedulingModel: "Inefficient",
      trainingHours: 16,
      staffingRatio: "1:8"
    }
  ]

  const getEfficiencyColor = (efficiency: number) => {
    if (efficiency >= 90) return "text-green-600"
    if (efficiency >= 80) return "text-yellow-600"
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

  const productivityAnalysis = {
    averageEfficiency: 82.7,
    standardDeviation: 15.3,
    consistencyScore: 72,
    topPerformer: "The Potbelly Divine (Gurugram)",
    focusArea: "The Potbelly Rooftop Cafe (Shahpur Jat)",
    targetQuadrant: "High-productivity, moderate-cost",
    criticalThreshold: "Low-productivity, high-cost quadrant",
    correlation: "Strong positive correlation between training hours and productivity"
  }

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold">Labor Productivity Scatter</h1>
          <p className="text-xs text-gray-500">CMP_014 - Operational Consistency</p>
        </div>
        <Badge variant="outline" className="text-xs">
          Weekly Analysis
        </Badge>
      </div>

      {/* Productivity Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xs font-bold flex items-center gap-2">
            <Users className="h-4 w-4" />
            Labor Productivity by Location
          </CardTitle>
          <CardDescription className="text-xs">
            Scatter analysis of revenue per labor hour vs covers per labor hour to identify productivity patterns.
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
                    <div className="text-xs font-bold">Revenue per Labor Hour</div>
                    <div className="text-xs text-gray-600">₹{location.revenuePerHour.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold">Labor Cost %</div>
                    <div className="text-xs text-gray-600">{location.laborCostPercent}%</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold">Efficiency Score</div>
                    <div className={`text-xs font-bold ${getEfficiencyColor(location.efficiency)}`}>
                      {location.efficiency}/100
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold">Scheduling Model</div>
                    <div className="text-xs text-gray-600">{location.schedulingModel}</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs font-bold">Training Hours</div>
                    <div className="text-xs text-gray-600">{location.trainingHours}</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold">Staffing Ratio</div>
                    <div className="text-xs text-gray-600">{location.staffingRatio}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Scatter Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xs font-bold flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            Productivity Scatter Analysis
          </CardTitle>
          <CardDescription className="text-xs">
            Correlation analysis between revenue per hour and covers per hour across locations.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div className="text-xs font-bold">Average Efficiency</div>
                <div className="text-xs text-gray-600">{productivityAnalysis.averageEfficiency}/100</div>
              </div>
              <div>
                <div className="text-xs font-bold">Standard Deviation</div>
                <div className="text-xs text-gray-600">{productivityAnalysis.standardDeviation}</div>
              </div>
              <div>
                <div className="text-xs font-bold">Consistency Score</div>
                <div className="text-xs text-gray-600">{productivityAnalysis.consistencyScore}/100</div>
              </div>
              <div>
                <div className="text-xs font-bold">Correlation</div>
                <div className="text-xs text-gray-600">0.87 (Strong)</div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold">Consistency Score</span>
                <span className="text-xs text-gray-500">{productivityAnalysis.consistencyScore}/100</span>
              </div>
              <Progress value={productivityAnalysis.consistencyScore} className="h-2" />
            </div>
            
            <div className="text-xs text-gray-600">
              <strong>Key Finding:</strong> {productivityAnalysis.correlation}
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
                  <strong>The Potbelly Divine (Gurugram)</strong> - ₹2,850/hour
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  High staff tenure and comprehensive training drive productivity
                </div>
              </div>
              <div>
                <div className="text-xs font-bold mb-2">Focus Area</div>
                <div className="text-xs text-gray-600">
                  <strong>The Potbelly Rooftop Cafe</strong> - ₹2,200/hour
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Low staff tenure and limited training impact productivity
                </div>
              </div>
            </div>
            
            <div className="text-xs text-gray-600 space-y-1">
              <p><strong>Key Insights:</strong></p>
              <p>• Gurugram: High productivity (₹1,200/hr) + moderate cost (28%) = optimal quadrant</p>
              <p>• Shahpur Jat: Low productivity (₹650/hr) + high cost (35%) = critical quadrant</p>
              <p>• Scheduling model optimization drives productivity improvements</p>
              <p>• Training hours correlate with efficiency scores</p>
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
              <p>• Increase training hours at Shahpur Jat to 24+ hours</p>
              <p>• Implement staff retention programs at underperforming locations</p>
              <p>• Cross-train staff for multiple roles to improve flexibility</p>
              <p>• Conduct productivity audit at low-performing locations</p>
            </div>
            
            <div className="text-xs text-gray-600 space-y-2">
              <p><strong>Medium-term Goals (Next 90 Days):</strong></p>
              <p>• Achieve 85%+ efficiency score at all locations</p>
              <p>• Increase average staff tenure to 6+ months</p>
              <p>• Standardize training programs across chain</p>
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
            <p>• Staff turnover rates vary by location (Gurugram: 15%, Shahpur Jat: 35%)</p>
            <p>• Local labor market conditions impact hiring and retention</p>
            <p>• Training costs and availability differ by location</p>
            <p>• Cultural factors influence staff motivation and productivity</p>
            <p>• Language barriers affect training effectiveness in some locations</p>
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
            <p><strong>Data Source:</strong> POS system, payroll records, training logs, staff schedules</p>
            <p><strong>Refresh:</strong> Weekly calculation</p>
            <p><strong>Drill Down:</strong> By location, by shift, by role, by time period</p>
            <p><strong>Users:</strong> Owner, Manager, HR Team</p>
            <p><strong>Purpose:</strong> Identify productivity patterns and optimize labor efficiency</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
