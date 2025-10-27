import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, BarChart3, TrendingUp, TrendingDown, Target, Award, Users, Menu } from "lucide-react"

export default function MenuParityPage() {
  // Synthetic data based on DIG_008 specifications
  const parityData = [
    {
      aggregator: "Swiggy",
      totalItems: 85,
      availableItems: 82,
      parityRate: 96.5,
      status: "High Performer",
      trend: "up",
      lastMonth: {
        totalItems: 80,
        availableItems: 76,
        parityRate: 95.0
      },
      improvement: "+1.5%",
      missingItems: 3,
      priceAccuracy: 98.2,
      updateFrequency: "Real-time"
    },
    {
      aggregator: "Zomato",
      totalItems: 85,
      availableItems: 78,
      parityRate: 91.8,
      status: "Good Performer",
      trend: "stable",
      lastMonth: {
        totalItems: 80,
        availableItems: 74,
        parityRate: 92.5
      },
      improvement: "-0.7%",
      missingItems: 7,
      priceAccuracy: 95.8,
      updateFrequency: "Hourly"
    },
    {
      aggregator: "Uber Eats",
      totalItems: 85,
      availableItems: 72,
      parityRate: 84.7,
      status: "Low Performer",
      trend: "down",
      lastMonth: {
        totalItems: 80,
        availableItems: 70,
        parityRate: 87.5
      },
      improvement: "-2.8%",
      missingItems: 13,
      priceAccuracy: 92.1,
      updateFrequency: "Daily"
    }
  ]

  const parityAnalysis = {
    totalItems: 85,
    avgParityRate: 91.0,
    topPerformer: "Swiggy",
    focusArea: "Uber Eats",
    avgPriceAccuracy: 95.4,
    totalMissingItems: 23
  }

  const getParityColor = (rate: number) => {
    if (rate >= 95) return "text-green-600"
    if (rate >= 90) return "text-yellow-600"
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
          <h1 className="text-xs font-bold">Menu Parity</h1>
          <p className="text-xs text-gray-500">DIG_008 - Digital & Marketing</p>
        </div>
        <Badge variant="outline" className="text-xs">
          Daily Analysis
        </Badge>
      </div>

      {/* Menu Parity Analysis by Aggregator */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xs font-bold flex items-center gap-2">
            <Menu className="h-4 w-4" />
            Menu Parity by Aggregator
          </CardTitle>
          <CardDescription className="text-xs">
            Menu availability and accuracy across different aggregator platforms
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {parityData.map((aggregator, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-xs font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <div className="text-xs font-bold">{aggregator.aggregator}</div>
                      <div className="text-xs text-gray-500">{aggregator.totalItems} total items</div>
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
                    <div className="text-xs font-bold">Available Items</div>
                    <div className="text-xs text-gray-600">{aggregator.availableItems}</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold">Parity Rate</div>
                    <div className={`text-xs font-bold ${getParityColor(aggregator.parityRate)}`}>
                      {aggregator.parityRate}%
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold">Missing Items</div>
                    <div className="text-xs text-gray-600">{aggregator.missingItems}</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold">Price Accuracy</div>
                    <div className="text-xs text-gray-600">{aggregator.priceAccuracy}%</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold">Parity Rate</span>
                    <span className="text-xs text-gray-500">{aggregator.parityRate}%</span>
                  </div>
                  <Progress value={aggregator.parityRate} className="h-2" />
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

      {/* Parity Analysis Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xs font-bold flex items-center gap-2">
            <Target className="h-4 w-4" />
            Parity Analysis Summary
          </CardTitle>
          <CardDescription className="text-xs">
            Overall menu parity performance and insights
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <div className="text-xs font-bold">Total Items</div>
              <div className="text-xs text-gray-600">{parityAnalysis.totalItems}</div>
            </div>
            <div>
              <div className="text-xs font-bold">Avg Parity Rate</div>
              <div className="text-xs text-gray-600">{parityAnalysis.avgParityRate}%</div>
            </div>
            <div>
              <div className="text-xs font-bold">Avg Price Accuracy</div>
              <div className="text-xs text-gray-600">{parityAnalysis.avgPriceAccuracy}%</div>
            </div>
            <div>
              <div className="text-xs font-bold">Total Missing Items</div>
              <div className="text-xs text-gray-600">{parityAnalysis.totalMissingItems}</div>
            </div>
            <div>
              <div className="text-xs font-bold">Top Performer</div>
              <div className="text-xs text-gray-600">{parityAnalysis.topPerformer}</div>
            </div>
            <div>
              <div className="text-xs font-bold">Focus Area</div>
              <div className="text-xs text-gray-600">{parityAnalysis.focusArea}</div>
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
                  <strong>Swiggy</strong> - 96.5% parity rate
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Real-time updates with high accuracy
                </div>
              </div>
              <div>
                <div className="text-xs font-bold mb-2">Focus Area</div>
                <div className="text-xs text-gray-600">
                  <strong>Uber Eats</strong> - 84.7% parity rate
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Needs improved update frequency
                </div>
              </div>
            </div>
            
            <div className="text-xs text-gray-600 space-y-1">
              <p><strong>Key Insights:</strong></p>
              <p>• Overall parity rate of 91.0% across all aggregators</p>
              <p>• Swiggy leads with 96.5% parity and real-time updates</p>
              <p>• Uber Eats needs improved update frequency</p>
              <p>• Price accuracy correlates with parity performance</p>
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
              <p>• Implement real-time menu updates for Uber Eats</p>
              <p>• Review missing items and availability issues</p>
              <p>• Improve price synchronization across platforms</p>
              <p>• Train staff on menu update procedures</p>
            </div>
            
            <div className="text-xs text-gray-600 space-y-2">
              <p><strong>Medium-term Goals (Next 90 Days):</strong></p>
              <p>• Achieve 95%+ parity rate across all aggregators</p>
              <p>• Implement automated menu synchronization</p>
              <p>• Create centralized menu management system</p>
              <p>• Launch real-time inventory integration</p>
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
            <p>• Regional menu variations impact parity rates</p>
            <p>• Festival specials require rapid menu updates</p>
            <p>• Local ingredient availability affects menu accuracy</p>
            <p>• Regional language support improves customer experience</p>
            <p>• Local competition drives menu innovation needs</p>
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
            <p><strong>Data Source:</strong> Aggregator APIs, menu management system, POS system</p>
            <p><strong>Refresh:</strong> Real-time calculation</p>
            <p><strong>Drill Down:</strong> By aggregator, by category, by time period, by location</p>
            <p><strong>Users:</strong> Operations Manager, Menu Manager, Owner</p>
            <p><strong>Purpose:</strong> Ensure consistent menu availability across platforms</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
