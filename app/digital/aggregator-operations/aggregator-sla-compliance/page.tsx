import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, Clock, XCircle, RefreshCw, Star, CheckCircle } from "lucide-react"

export default function AggregatorSLACompliancePage() {
  // Synthetic data based on DIG_005 specifications
  const currentData = {
    totalOrders: 1250,
    compliantOrders: 1187, // 95% compliance
    slaCompliance: 95,
    zomatoCompliance: 96,
    swiggyCompliance: 94,
    onTimeOrders: 1125,
    lateOrders: 125
  }

  const targets = {
    slaTarget: ">95%",
    warningThreshold: 90,
    criticalThreshold: 90
  }

  const alerts = {
    warning: currentData.slaCompliance < 95 && currentData.slaCompliance >= 90,
    critical: currentData.slaCompliance < 90
  }

  const getStatusColor = (value: number) => {
    if (value < 90) return "text-red-600"
    if (value < 95) return "text-yellow-600"
    return "text-green-600"
  }

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold">Aggregator SLA Compliance</h1>
          <p className="text-xs text-gray-500">DIG_005 - Aggregator Operations</p>
        </div>
        <Badge variant="outline" className="text-xs">
          Daily Refresh
        </Badge>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Overall SLA Compliance */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-bold flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              Overall SLA
              {alerts.critical && <AlertTriangle className="h-4 w-4 text-red-500" />}
              {alerts.warning && !alerts.critical && <AlertTriangle className="h-4 w-4 text-yellow-500" />}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold text-xs ${getStatusColor(currentData.slaCompliance)}`}>
              {currentData.slaCompliance}%
            </div>
            <div className="text-xs text-gray-500">Target: {targets.slaTarget}</div>
            <Progress value={currentData.slaCompliance} className="mt-2" />
          </CardContent>
        </Card>

        {/* Zomato Compliance */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-bold flex items-center gap-2">
              <Star className="h-4 w-4" />
              Zomato SLA
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold text-xs ${getStatusColor(currentData.zomatoCompliance)}`}>
              {currentData.zomatoCompliance}%
            </div>
            <div className="text-xs text-gray-500">Platform specific</div>
            <Progress value={currentData.zomatoCompliance} className="mt-2" />
          </CardContent>
        </Card>

        {/* Swiggy Compliance */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-bold flex items-center gap-2">
              <Star className="h-4 w-4" />
              Swiggy SLA
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold text-xs ${getStatusColor(currentData.swiggyCompliance)}`}>
              {currentData.swiggyCompliance}%
            </div>
            <div className="text-xs text-gray-500">Platform specific</div>
            <Progress value={currentData.swiggyCompliance} className="mt-2" />
          </CardContent>
        </Card>

        {/* On-Time Orders */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-bold flex items-center gap-2">
              <Clock className="h-4 w-4" />
              On-Time Orders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-xs">{currentData.onTimeOrders}</div>
            <div className="text-xs text-gray-500">Out of {currentData.totalOrders} total</div>
            <Progress value={(currentData.onTimeOrders / currentData.totalOrders) * 100} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      {/* Platform Comparison */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xs font-bold">Platform Performance</CardTitle>
          <CardDescription className="text-xs">
            SLA compliance by aggregator platform. Low compliance risks de-prioritization.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Zomato */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-500 rounded"></div>
                <span className="text-xs font-normal">Zomato</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-xs font-bold ${getStatusColor(currentData.zomatoCompliance)}`}>
                  {currentData.zomatoCompliance}%
                </span>
                <Badge variant="outline" className="text-xs">Good</Badge>
              </div>
            </div>

            {/* Swiggy */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded"></div>
                <span className="text-xs font-normal">Swiggy</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-xs font-bold ${getStatusColor(currentData.swiggyCompliance)}`}>
                  {currentData.swiggyCompliance}%
                </span>
                <Badge variant="secondary" className="text-xs">Warning</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Delay Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xs font-bold">Delay Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-normal">Late Orders</span>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-red-600">{currentData.lateOrders}</span>
                <span className="text-xs text-gray-500">({((currentData.lateOrders / currentData.totalOrders) * 100).toFixed(1)}%)</span>
              </div>
            </div>
            
            <div className="text-xs text-gray-600 space-y-1">
              <p><strong>Common Delay Reasons:</strong></p>
              <p>• Kitchen preparation time: 45%</p>
              <p>• Delivery partner delays: 30%</p>
              <p>• Order complexity: 15%</p>
              <p>• System issues: 10%</p>
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
            <p>• India aggregators are very metric-driven; high SLA critical for visibility</p>
            <p>• Platform algorithms de-prioritize low-SLA restaurants</p>
            <p>• Monitor daily for immediate corrective action</p>
            <p>• Consider kitchen prep time optimization for better compliance</p>
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
            <p><strong>Data Source:</strong> Aggregator platform dashboards (Zomato/Swiggy), PetPooja integration</p>
            <p><strong>Refresh:</strong> Daily</p>
            <p><strong>Drill Down:</strong> By platform, by location, by time window, by reason for delays</p>
            <p><strong>Users:</strong> Manager</p>
            <p><strong>Alert Threshold:</strong> Red if &lt;90%</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
