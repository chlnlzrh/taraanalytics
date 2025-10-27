import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, BarChart3, TrendingUp, TrendingDown, Target, Award, Users, Gift } from "lucide-react"

export default function LoyaltyProgramParticipationPage() {
  // Synthetic data based on CUS_007 specifications
  const participationData = [
    {
      location: "The Potbelly Divine (Gurugram)",
      totalCustomers: 1250,
      enrolledMembers: 875,
      participationRate: 70.0,
      status: "High Performer",
      trend: "up",
      lastMonth: {
        totalCustomers: 1200,
        enrolledMembers: 780,
        participationRate: 65.0
      },
      improvement: "+5.0%",
      avgSpend: 850,
      retentionRate: 78.5,
      tierDistribution: {
        gold: 125,
        silver: 350,
        bronze: 400
      }
    },
    {
      location: "The Potbelly (Chanakyapuri)",
      totalCustomers: 980,
      enrolledMembers: 588,
      participationRate: 60.0,
      status: "Good Performer",
      trend: "stable",
      lastMonth: {
        totalCustomers: 950,
        enrolledMembers: 570,
        participationRate: 60.0
      },
      improvement: "0%",
      avgSpend: 720,
      retentionRate: 72.3,
      tierDistribution: {
        gold: 88,
        silver: 235,
        bronze: 265
      }
    },
    {
      location: "The Potbelly Rooftop Cafe (Shahpur Jat)",
      totalCustomers: 750,
      enrolledMembers: 375,
      participationRate: 50.0,
      status: "Low Performer",
      trend: "down",
      lastMonth: {
        totalCustomers: 720,
        enrolledMembers: 396,
        participationRate: 55.0
      },
      improvement: "-5.0%",
      avgSpend: 650,
      retentionRate: 68.2,
      tierDistribution: {
        gold: 45,
        silver: 150,
        bronze: 180
      }
    }
  ]

  const programAnalysis = {
    totalCustomers: 2980,
    totalEnrolled: 1838,
    overallParticipationRate: 61.7,
    topPerformer: "The Potbelly Divine (Gurugram)",
    focusArea: "The Potbelly Rooftop Cafe (Shahpur Jat)",
    avgRetentionRate: 73.0,
    totalProgramRevenue: 1562300
  }

  const getParticipationColor = (rate: number) => {
    if (rate >= 65) return "text-green-600"
    if (rate >= 55) return "text-yellow-600"
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
          <h1 className="text-xs font-bold">Loyalty Program Participation</h1>
          <p className="text-xs text-gray-500">CUS_007 - Customer Experience</p>
        </div>
        <Badge variant="outline" className="text-xs">
          Monthly Analysis
        </Badge>
      </div>

      {/* Participation Analysis by Location */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xs font-bold flex items-center gap-2">
            <Gift className="h-4 w-4" />
            Loyalty Program Participation by Location
          </CardTitle>
          <CardDescription className="text-xs">
            Customer enrollment and participation rates across locations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {participationData.map((location, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-xs font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <div className="text-xs font-bold">{location.location}</div>
                      <div className="text-xs text-gray-500">{location.totalCustomers.toLocaleString()} total customers</div>
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
                    <div className="text-xs font-bold">Enrolled Members</div>
                    <div className="text-xs text-gray-600">{location.enrolledMembers.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold">Participation Rate</div>
                    <div className={`text-xs font-bold ${getParticipationColor(location.participationRate)}`}>
                      {location.participationRate}%
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold">Avg Spend</div>
                    <div className="text-xs text-gray-600">₹{location.avgSpend}</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold">Retention Rate</div>
                    <div className="text-xs text-gray-600">{location.retentionRate}%</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold">Participation Rate</span>
                    <span className="text-xs text-gray-500">{location.participationRate}%</span>
                  </div>
                  <Progress value={location.participationRate} className="h-2" />
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">vs Last Month</span>
                    <span className={`text-xs font-bold ${location.improvement.startsWith('+') ? 'text-green-600' : location.improvement.startsWith('-') ? 'text-red-600' : 'text-gray-600'}`}>
                      {location.improvement}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Program Analysis Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xs font-bold flex items-center gap-2">
            <Target className="h-4 w-4" />
            Program Analysis Summary
          </CardTitle>
          <CardDescription className="text-xs">
            Overall loyalty program participation and performance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <div className="text-xs font-bold">Total Customers</div>
              <div className="text-xs text-gray-600">{programAnalysis.totalCustomers.toLocaleString()}</div>
            </div>
            <div>
              <div className="text-xs font-bold">Total Enrolled</div>
              <div className="text-xs text-gray-600">{programAnalysis.totalEnrolled.toLocaleString()}</div>
            </div>
            <div>
              <div className="text-xs font-bold">Overall Participation Rate</div>
              <div className="text-xs text-gray-600">{programAnalysis.overallParticipationRate}%</div>
            </div>
            <div>
              <div className="text-xs font-bold">Avg Retention Rate</div>
              <div className="text-xs text-gray-600">{programAnalysis.avgRetentionRate}%</div>
            </div>
            <div>
              <div className="text-xs font-bold">Top Performer</div>
              <div className="text-xs text-gray-600">{programAnalysis.topPerformer}</div>
            </div>
            <div>
              <div className="text-xs font-bold">Focus Area</div>
              <div className="text-xs text-gray-600">{programAnalysis.focusArea}</div>
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
                  <strong>The Potbelly Divine (Gurugram)</strong> - 70% participation
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Strong enrollment with high retention
                </div>
              </div>
              <div>
                <div className="text-xs font-bold mb-2">Focus Area</div>
                <div className="text-xs text-gray-600">
                  <strong>The Potbelly Rooftop Cafe (Shahpur Jat)</strong> - 50% participation
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Needs enrollment strategy improvement
                </div>
              </div>
            </div>
            
            <div className="text-xs text-gray-600 space-y-1">
              <p><strong>Key Insights:</strong></p>
              <p>• Overall participation rate of 61.7% across all locations</p>
              <p>• Gurugram location leads with 70% participation rate</p>
              <p>• Shahpur Jat location needs enrollment strategy review</p>
              <p>• Higher participation correlates with better retention</p>
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
              <p>• Implement enrollment incentives at Shahpur Jat location</p>
              <p>• Train staff on program benefits and enrollment process</p>
              <p>• Launch targeted enrollment campaigns</p>
              <p>• Improve program visibility at point of sale</p>
            </div>
            
            <div className="text-xs text-gray-600 space-y-2">
              <p><strong>Medium-term Goals (Next 90 Days):</strong></p>
              <p>• Achieve 65%+ participation rate across all locations</p>
              <p>• Implement tier-based benefits to increase engagement</p>
              <p>• Launch referral program for member acquisition</p>
              <p>• Create location-specific enrollment strategies</p>
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
            <p>• Mobile-first enrollment process crucial for Indian market</p>
            <p>• WhatsApp integration for program communications</p>
            <p>• Regional festival-based enrollment campaigns</p>
            <p>• Family account sharing features popular in India</p>
            <p>• UPI integration for seamless reward redemption</p>
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
            <p><strong>Data Source:</strong> Loyalty platform, POS system, customer database</p>
            <p><strong>Refresh:</strong> Daily calculation</p>
            <p><strong>Drill Down:</strong> By location, by tier, by time period, by enrollment source</p>
            <p><strong>Users:</strong> Marketing Manager, Customer Service, Owner</p>
            <p><strong>Purpose:</strong> Optimize customer retention and program effectiveness</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
