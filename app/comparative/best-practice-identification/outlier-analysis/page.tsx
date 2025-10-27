import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, TrendingUp, Star, Award, Target, Users, DollarSign, Clock } from "lucide-react"

export default function OutlierAnalysisPage() {
  // Synthetic data based on CMP_018 specifications
  const outlierData = {
    highPerformers: [
      {
        location: "The Potbelly Divine (Gurugram)",
        metric: "Table Turnover Rate",
        value: "2.8x",
        benchmark: "2.0x",
        variance: "+40%",
        reason: "Optimized kitchen workflow, efficient service staff"
      },
      {
        location: "The Potbelly (Chanakyapuri)",
        metric: "Food Cost %",
        value: "28%",
        benchmark: "32%",
        variance: "-12.5%",
        reason: "Excellent portion control, supplier negotiations"
      },
      {
        location: "The Potbelly Rooftop Cafe",
        metric: "Customer Satisfaction",
        value: "4.8/5",
        benchmark: "4.2/5",
        variance: "+14%",
        reason: "Unique ambiance, personalized service"
      }
    ],
    operationalAudits: [
      {
        location: "The Potbelly Divine",
        auditDate: "2024-01-15",
        findings: [
          "Kitchen prep stations optimized for speed",
          "Staff cross-trained for multiple roles",
          "Digital ordering reduces wait times"
        ],
        replicablePractices: [
          "Standardized prep workflow",
          "Staff rotation schedule",
          "Technology integration"
        ]
      }
    ],
    replicationOpportunities: [
      {
        practice: "Kitchen Workflow Optimization",
        sourceLocation: "The Potbelly Divine",
        targetLocations: ["Chanakyapuri", "Shahpur Jat"],
        expectedImpact: "15-20% improvement in table turnover",
        implementationCost: "Low",
        timeline: "2-3 weeks"
      },
      {
        practice: "Portion Control System",
        sourceLocation: "The Potbelly (Chanakyapuri)",
        targetLocations: ["Gurugram", "Shahpur Jat"],
        expectedImpact: "2-3% reduction in food cost",
        implementationCost: "Medium",
        timeline: "4-6 weeks"
      }
    ]
  }

  const getVarianceColor = (variance: string) => {
    if (variance.startsWith('+')) return "text-green-600"
    if (variance.startsWith('-')) return "text-blue-600"
    return "text-gray-600"
  }

  const getImpactBadge = (impact: string) => {
    if (impact.includes('15-20%') || impact.includes('2-3%')) return "default"
    return "secondary"
  }

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold">Outlier Analysis (High Performers)</h1>
          <p className="text-xs text-gray-500">CMP_018 - Best Practice Identification</p>
        </div>
        <Badge variant="outline" className="text-xs">
          Monthly Analysis
        </Badge>
      </div>

      {/* High Performers Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xs font-bold flex items-center gap-2">
            <Star className="h-4 w-4" />
            High Performers Identified
          </CardTitle>
          <CardDescription className="text-xs">
            Locations performing exceptionally well on specific metrics. Conduct operational audit to document processes.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {outlierData.highPerformers.map((performer, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-yellow-500" />
                    <span className="text-xs font-bold">{performer.location}</span>
                  </div>
                  <Badge variant="default" className="text-xs">Outlier</Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <div className="text-xs font-bold">Metric</div>
                    <div className="text-xs text-gray-600">{performer.metric}</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold">Performance</div>
                    <div className="text-xs text-gray-600">{performer.value}</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold">Benchmark</div>
                    <div className="text-xs text-gray-600">{performer.benchmark}</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold">Variance</div>
                    <div className={`text-xs font-bold ${getVarianceColor(performer.variance)}`}>
                      {performer.variance}
                    </div>
                  </div>
                </div>
                
                <div className="text-xs text-gray-600">
                  <strong>Key Success Factor:</strong> {performer.reason}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Operational Audit Results */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xs font-bold flex items-center gap-2">
            <Target className="h-4 w-4" />
            Operational Audit Results
          </CardTitle>
          <CardDescription className="text-xs">
            Documented processes from high-performing locations for replication across chain.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {outlierData.operationalAudits.map((audit, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span className="text-xs font-bold">{audit.location}</span>
                  </div>
                  <Badge variant="outline" className="text-xs">{audit.auditDate}</Badge>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs font-bold mb-2">Key Findings</div>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {audit.findings.map((finding, idx) => (
                        <li key={idx}>• {finding}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-xs font-bold mb-2">Replicable Practices</div>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {audit.replicablePractices.map((practice, idx) => (
                        <li key={idx}>• {practice}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Replication Opportunities */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xs font-bold flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Replication Opportunities
          </CardTitle>
          <CardDescription className="text-xs">
            Best practices identified for implementation across other locations.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {outlierData.replicationOpportunities.map((opportunity, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span className="text-xs font-bold">{opportunity.practice}</span>
                  </div>
                  <Badge variant={getImpactBadge(opportunity.expectedImpact)} className="text-xs">
                    {opportunity.implementationCost} Cost
                  </Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <div className="text-xs font-bold">Source Location</div>
                    <div className="text-xs text-gray-600">{opportunity.sourceLocation}</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold">Target Locations</div>
                    <div className="text-xs text-gray-600">{opportunity.targetLocations.join(', ')}</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold">Expected Impact</div>
                    <div className="text-xs text-green-600">{opportunity.expectedImpact}</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold">Timeline</div>
                    <div className="text-xs text-gray-600">{opportunity.timeline}</div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Badge variant="outline" className="text-xs">Ready to Implement</Badge>
                  <Badge variant="secondary" className="text-xs">High Priority</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Implementation Roadmap */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xs font-bold">Implementation Roadmap</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="text-xs text-gray-600 space-y-2">
              <p><strong>Phase 1 (Weeks 1-2):</strong> Document best practices from high performers</p>
              <p><strong>Phase 2 (Weeks 3-4):</strong> Create standardized procedures and training materials</p>
              <p><strong>Phase 3 (Weeks 5-8):</strong> Implement practices at target locations</p>
              <p><strong>Phase 4 (Weeks 9-12):</strong> Monitor results and refine processes</p>
            </div>
            
            <div className="text-xs text-gray-600 space-y-1">
              <p><strong>Success Metrics:</strong></p>
              <p>• 15-20% improvement in table turnover at target locations</p>
              <p>• 2-3% reduction in food cost through portion control</p>
              <p>• Standardized processes across all 3 locations</p>
              <p>• Reduced variance in key performance metrics</p>
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
            <p>• High-performing locations often have better supplier relationships and pricing</p>
            <p>• Staff training and retention practices vary significantly by location</p>
            <p>• Local market conditions impact performance (competition, demographics)</p>
            <p>• Technology adoption rates differ across locations</p>
            <p>• Cultural factors influence customer satisfaction and service delivery</p>
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
            <p><strong>Data Source:</strong> All KPI metrics by location, operational audit reports, customer feedback</p>
            <p><strong>Refresh:</strong> Monthly analysis</p>
            <p><strong>Drill Down:</strong> By metric, by location, by time period, by implementation status</p>
            <p><strong>Users:</strong> Owner, CFO, Manager</p>
            <p><strong>Purpose:</strong> Identify and replicate best practices across locations</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
