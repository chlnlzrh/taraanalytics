import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, BarChart3, TrendingUp, TrendingDown, Target, Award, Users, DollarSign } from "lucide-react"

export default function ItemContributionMarginPage() {
  // Synthetic data based on CMP_012 specifications
  const menuItems = [
    {
      item: "Chicken Biryani",
      category: "Main Course",
      sellingPrice: 450,
      foodCost: 180,
      contributionMargin: 270,
      marginPercent: 60.0,
      status: "High Performer",
      trend: "up",
      salesVolume: 120,
      totalContribution: 32400,
      lastMonth: 55.0,
      improvement: "+5.0%"
    },
    {
      item: "Paneer Butter Masala",
      category: "Main Course",
      sellingPrice: 380,
      foodCost: 152,
      contributionMargin: 228,
      marginPercent: 60.0,
      status: "High Performer",
      trend: "stable",
      salesVolume: 95,
      totalContribution: 21660,
      lastMonth: 60.0,
      improvement: "0%"
    },
    {
      item: "Dal Makhani",
      category: "Main Course",
      sellingPrice: 320,
      foodCost: 160,
      contributionMargin: 160,
      marginPercent: 50.0,
      status: "Good Performer",
      trend: "down",
      salesVolume: 80,
      totalContribution: 12800,
      lastMonth: 52.0,
      improvement: "-2.0%"
    },
    {
      item: "Chicken Tikka",
      category: "Appetizer",
      sellingPrice: 280,
      foodCost: 140,
      contributionMargin: 140,
      marginPercent: 50.0,
      status: "Good Performer",
      trend: "up",
      salesVolume: 150,
      totalContribution: 21000,
      lastMonth: 48.0,
      improvement: "+2.0%"
    },
    {
      item: "Samosa",
      category: "Snack",
      sellingPrice: 25,
      foodCost: 15,
      contributionMargin: 10,
      marginPercent: 40.0,
      status: "Low Performer",
      trend: "down",
      salesVolume: 200,
      totalContribution: 2000,
      lastMonth: 45.0,
      improvement: "-5.0%"
    }
  ]

  const getMarginColor = (margin: number) => {
    if (margin >= 60) return "text-green-600"
    if (margin >= 50) return "text-yellow-600"
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

  const marginAnalysis = {
    averageMargin: 52.0,
    standardDeviation: 8.5,
    topPerformer: "Chicken Biryani",
    focusArea: "Samosa",
    totalContribution: 89860,
    targetMargin: ">50%"
  }

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold">Item Contribution Margin %</h1>
          <p className="text-xs text-gray-500">CMP_012 - Menu Performance</p>
        </div>
        <Badge variant="outline" className="text-xs">
          Weekly Analysis
        </Badge>
      </div>

      {/* Menu Items Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xs font-bold flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            Menu Item Contribution Analysis
          </CardTitle>
          <CardDescription className="text-xs">
            Contribution margin percentage for each menu item
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {menuItems.map((item, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-xs font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <div className="text-xs font-bold">{item.item}</div>
                      <div className="text-xs text-gray-500">{item.category}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {getTrendIcon(item.trend)}
                    <Badge variant={getStatusBadge(item.status)} className="text-xs">
                      {item.status}
                    </Badge>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <div className="text-xs font-bold">Selling Price</div>
                    <div className="text-xs text-gray-600">₹{item.sellingPrice}</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold">Food Cost</div>
                    <div className="text-xs text-gray-600">₹{item.foodCost}</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold">Contribution Margin</div>
                    <div className="text-xs text-gray-600">₹{item.contributionMargin}</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold">Margin %</div>
                    <div className={`text-xs font-bold ${getMarginColor(item.marginPercent)}`}>
                      {item.marginPercent}%
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs font-bold">Sales Volume</div>
                    <div className="text-xs text-gray-600">{item.salesVolume} units</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold">Total Contribution</div>
                    <div className="text-xs text-gray-600">₹{item.totalContribution.toLocaleString()}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Margin Analysis Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xs font-bold flex items-center gap-2">
            <Target className="h-4 w-4" />
            Contribution Margin Analysis
          </CardTitle>
          <CardDescription className="text-xs">
            Overall margin performance and insights
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <div className="text-xs font-bold">Average Margin %</div>
              <div className="text-xs text-gray-600">{marginAnalysis.averageMargin}%</div>
            </div>
            <div>
              <div className="text-xs font-bold">Standard Deviation</div>
              <div className="text-xs text-gray-600">{marginAnalysis.standardDeviation}%</div>
            </div>
            <div>
              <div className="text-xs font-bold">Top Performer</div>
              <div className="text-xs text-gray-600">{marginAnalysis.topPerformer}</div>
            </div>
            <div>
              <div className="text-xs font-bold">Focus Area</div>
              <div className="text-xs text-gray-600">{marginAnalysis.focusArea}</div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold">Average Margin</span>
              <span className="text-xs text-gray-500">{marginAnalysis.averageMargin}%</span>
            </div>
            <Progress value={marginAnalysis.averageMargin} className="h-2" />
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
                  <strong>Chicken Biryani</strong> - 60% margin
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  High contribution margin with strong sales volume
                </div>
              </div>
              <div>
                <div className="text-xs font-bold mb-2">Focus Area</div>
                <div className="text-xs text-gray-600">
                  <strong>Samosa</strong> - 40% margin
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Low margin item needs pricing review
                </div>
              </div>
            </div>
            
            <div className="text-xs text-gray-600 space-y-1">
              <p><strong>Key Insights:</strong></p>
              <p>• Main course items show highest contribution margins (50-60%)</p>
              <p>• Snack items have lower margins but higher volume</p>
              <p>• Price optimization needed for low-margin items</p>
              <p>• Focus on promoting high-margin items</p>
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
              <p>• Review pricing for Samosa to improve margin</p>
              <p>• Promote high-margin items (Chicken Biryani, Paneer Butter Masala)</p>
              <p>• Analyze food cost for low-margin items</p>
              <p>• Implement margin-based menu engineering</p>
            </div>
            
            <div className="text-xs text-gray-600 space-y-2">
              <p><strong>Medium-term Goals (Next 90 Days):</strong></p>
              <p>• Achieve 50%+ margin on all items</p>
              <p>• Optimize menu mix for maximum profitability</p>
              <p>• Implement dynamic pricing strategies</p>
              <p>• Create margin-based staff incentives</p>
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
            <p>• Regional spice costs impact margin calculations</p>
            <p>• Seasonal ingredient price fluctuations affect profitability</p>
            <p>• Local competition influences pricing strategies</p>
            <p>• Cultural preferences drive menu mix optimization</p>
            <p>• GST implications on food cost calculations</p>
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
            <p><strong>Data Source:</strong> POS system, inventory management, supplier invoices</p>
            <p><strong>Refresh:</strong> Weekly calculation</p>
            <p><strong>Drill Down:</strong> By item, by category, by time period, by location</p>
            <p><strong>Users:</strong> Owner, Manager, Kitchen Staff</p>
            <p><strong>Purpose:</strong> Optimize menu profitability and pricing strategies</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

