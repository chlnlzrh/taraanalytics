import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, BarChart3, TrendingUp, TrendingDown, Target, Award, Users, Calendar } from "lucide-react"

export default function ReservationConversionRatePage() {
  // Synthetic data based on DIG_018 specifications
  const conversionData = [
    {
      source: "Website",
      visits: 2850,
      reservations: 1425,
      conversionRate: 50.0,
      status: "High Performer",
      trend: "up",
      lastMonth: {
        visits: 2650,
        reservations: 1200,
        conversionRate: 45.3
      },
      improvement: "+4.7%",
      avgTimeToConvert: "3.2 min",
      bounceRate: 25.0
    },
    {
      source: "Google Search",
      visits: 1950,
      reservations: 780,
      conversionRate: 40.0,
      status: "Good Performer",
      trend: "stable",
      lastMonth: {
        visits: 1900,
        reservations: 760,
        conversionRate: 40.0
      },
      improvement: "0%",
      avgTimeToConvert: "4.1 min",
      bounceRate: 30.0
    },
    {
      source: "Social Media",
      visits: 1200,
      reservations: 360,
      conversionRate: 30.0,
      status: "Low Performer",
      trend: "down",
      lastMonth: {
        visits: 1300,
        reservations: 455,
        conversionRate: 35.0
      },
      improvement: "-5.0%",
      avgTimeToConvert: "5.8 min",
      bounceRate: 45.0
    },
    {
      source: "Mobile App",
      visits: 850,
      reservations: 425,
      conversionRate: 50.0,
      status: "High Performer",
      trend: "up",
      lastMonth: {
        visits: 750,
        reservations: 300,
        conversionRate: 40.0
      },
      improvement: "+10.0%",
      avgTimeToConvert: "2.8 min",
      bounceRate: 20.0
    },
    {
      source: "Referral",
      visits: 450,
      reservations: 315,
      conversionRate: 70.0,
      status: "Excellent",
      trend: "up",
      lastMonth: {
        visits: 400,
        reservations: 240,
        conversionRate: 60.0
      },
      improvement: "+10.0%",
      avgTimeToConvert: "2.1 min",
      bounceRate: 15.0
    }
  ]

  const overallAnalysis = {
    totalVisits: 7300,
    totalReservations: 3305,
    overallConversionRate: 45.3,
    topPerformingSource: "Referral",
    focusArea: "Social Media",
    avgConversionTime: "3.6 min",
    totalRevenue: 165250
  }

  const getConversionColor = (rate: number) => {
    if (rate >= 60) return "text-green-600"
    if (rate >= 40) return "text-yellow-600"
    return "text-red-600"
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Excellent": return "default"
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
          <h1 className="text-xs font-bold">Reservation Conversion Rate</h1>
          <p className="text-xs text-gray-500">DIG_018 - Digital Marketing</p>
        </div>
        <Badge variant="outline" className="text-xs">
          Daily Analysis
        </Badge>
      </div>

      {/* Conversion Analysis by Source */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xs font-bold flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Conversion Rate by Source
          </CardTitle>
          <CardDescription className="text-xs">
            Reservation conversion rates across different traffic sources
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {conversionData.map((source, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-xs font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <div className="text-xs font-bold">{source.source}</div>
                      <div className="text-xs text-gray-500">{source.visits.toLocaleString()} visits</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {getTrendIcon(source.trend)}
                    <Badge variant={getStatusBadge(source.status)} className="text-xs">
                      {source.status}
                    </Badge>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <div className="text-xs font-bold">Reservations</div>
                    <div className="text-xs text-gray-600">{source.reservations.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold">Conversion Rate</div>
                    <div className={`text-xs font-bold ${getConversionColor(source.conversionRate)}`}>
                      {source.conversionRate}%
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold">Avg Time to Convert</div>
                    <div className="text-xs text-gray-600">{source.avgTimeToConvert}</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold">Bounce Rate</div>
                    <div className="text-xs text-gray-600">{source.bounceRate}%</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold">Conversion Rate</span>
                    <span className="text-xs text-gray-500">{source.conversionRate}%</span>
                  </div>
                  <Progress value={source.conversionRate} className="h-2" />
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">vs Last Month</span>
                    <span className={`text-xs font-bold ${source.improvement.startsWith('+') ? 'text-green-600' : source.improvement.startsWith('-') ? 'text-red-600' : 'text-gray-600'}`}>
                      {source.improvement}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Overall Analysis Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xs font-bold flex items-center gap-2">
            <Target className="h-4 w-4" />
            Overall Conversion Analysis
          </CardTitle>
          <CardDescription className="text-xs">
            Summary of reservation conversion performance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <div className="text-xs font-bold">Total Visits</div>
              <div className="text-xs text-gray-600">{overallAnalysis.totalVisits.toLocaleString()}</div>
            </div>
            <div>
              <div className="text-xs font-bold">Total Reservations</div>
              <div className="text-xs text-gray-600">{overallAnalysis.totalReservations.toLocaleString()}</div>
            </div>
            <div>
              <div className="text-xs font-bold">Overall Conversion Rate</div>
              <div className="text-xs text-gray-600">{overallAnalysis.overallConversionRate}%</div>
            </div>
            <div>
              <div className="text-xs font-bold">Avg Conversion Time</div>
              <div className="text-xs text-gray-600">{overallAnalysis.avgConversionTime}</div>
            </div>
            <div>
              <div className="text-xs font-bold">Top Source</div>
              <div className="text-xs text-gray-600">{overallAnalysis.topPerformingSource}</div>
            </div>
            <div>
              <div className="text-xs font-bold">Focus Area</div>
              <div className="text-xs text-gray-600">{overallAnalysis.focusArea}</div>
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
                  <strong>Referral</strong> - 70% conversion rate
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Word-of-mouth drives highest conversions
                </div>
              </div>
              <div>
                <div className="text-xs font-bold mb-2">Focus Area</div>
                <div className="text-xs text-gray-600">
                  <strong>Social Media</strong> - 30% conversion rate
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Needs optimization and better targeting
                </div>
              </div>
            </div>
            
            <div className="text-xs text-gray-600 space-y-1">
              <p><strong>Key Insights:</strong></p>
              <p>• Referral traffic shows highest conversion rates (70%)</p>
              <p>• Mobile app performs well with 50% conversion</p>
              <p>• Social media needs strategy improvement</p>
              <p>• Website and mobile app are primary conversion drivers</p>
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
              <p>• Optimize social media landing pages for better conversion</p>
              <p>• Implement referral program to boost word-of-mouth</p>
              <p>• Improve mobile app user experience</p>
              <p>• A/B test reservation flow on website</p>
            </div>
            
            <div className="text-xs text-gray-600 space-y-2">
              <p><strong>Medium-term Goals (Next 90 Days):</strong></p>
              <p>• Achieve 50%+ conversion rate on all sources</p>
              <p>• Increase referral traffic by 30%</p>
              <p>• Optimize social media campaigns for conversions</p>
              <p>• Implement retargeting campaigns for bounced users</p>
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
            <p>• WhatsApp sharing drives significant referral traffic</p>
            <p>• Mobile-first design crucial for Indian users</p>
            <p>• Regional language support improves conversion</p>
            <p>• Festival and special occasion bookings peak conversion</p>
            <p>• UPI integration simplifies reservation process</p>
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
            <p><strong>Data Source:</strong> Website analytics, reservation system, mobile app analytics</p>
            <p><strong>Refresh:</strong> Real-time calculation</p>
            <p><strong>Drill Down:</strong> By source, by time period, by device, by campaign</p>
            <p><strong>Users:</strong> Marketing Manager, Web Developer, Owner</p>
            <p><strong>Purpose:</strong> Optimize digital marketing ROI and reservation conversion</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

