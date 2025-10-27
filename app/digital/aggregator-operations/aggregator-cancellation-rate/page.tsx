import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, XCircle, RefreshCw, TrendingDown } from "lucide-react"

export default function AggregatorCancellationRatePage() {
  // Synthetic data based on DIG_006 specifications
  const currentData = {
    totalOrders: 1250,
    cancelledOrders: 25, // 2% cancellation rate
    cancellationRate: 2,
    restaurantCancelled: 8,
    driverCancelled: 12,
    customerCancelled: 5,
    monthlyCancellations: 75
  }

  const targets = {
    cancellationTarget: "<2%",
    warningThreshold: 2,
    criticalThreshold: 3
  }

  const alerts = {
    warning: currentData.cancellationRate >= 2 && currentData.cancellationRate < 3,
    critical: currentData.cancellationRate >= 3
  }

  const getStatusColor = (value: number) => {
    if (value >= 3) return "text-red-600"
    if (value >= 2) return "text-yellow-600"
    return "text-green-600"
  }

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold">Aggregator Cancellation Rate %</h1>
          <p className="text-xs text-gray-500">DIG_006 - Aggregator Operations</p>
        </div>
        <Badge variant="outline" className="text-xs">
          Daily Refresh
        </Badge>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Overall Cancellation Rate */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-bold flex items-center gap-2">
              <XCircle className="h-4 w-4" />
              Cancellation Rate
              {alerts.critical && <AlertTriangle className="h-4 w-4 text-red-500" />}
              {alerts.warning && !alerts.critical && <AlertTriangle className="h-4 w-4 text-yellow-500" />}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold text-xs ${getStatusColor(currentData.cancellationRate)}`}>
              {currentData.cancellationRate}%
            </div>
            <div className="text-xs text-gray-500">Target: {targets.cancellationTarget}</div>
            <Progress value={currentData.cancellationRate * 20} className="mt-2" />
          </CardContent>
        </Card>

        {/* Total Cancellations */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-bold flex items-center gap-2">
              <TrendingDown className="h-4 w-4" />
              Total Cancelled
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-xs">{currentData.cancelledOrders}</div>
            <div className="text-xs text-gray-500">Out of {currentData.totalOrders} orders</div>
            <Progress value={(currentData.cancelledOrders / currentData.totalOrders) * 100} className="mt-2" />
          </CardContent>
        </Card>

        {/* Restaurant Cancelled */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-bold flex items-center gap-2">
              <RefreshCw className="h-4 w-4" />
              Restaurant Cancelled
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-xs">{currentData.restaurantCancelled}</div>
            <div className="text-xs text-gray-500">{((currentData.restaurantCancelled / currentData.cancelledOrders) * 100).toFixed(0)}% of cancellations</div>
            <Progress value={(currentData.restaurantCancelled / currentData.cancelledOrders) * 100} className="mt-2" />
          </CardContent>
        </Card>

        {/* Driver Cancelled */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-bold flex items-center gap-2">
              <RefreshCw className="h-4 w-4" />
              Driver Cancelled
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-xs">{currentData.driverCancelled}</div>
            <div className="text-xs text-gray-500">{((currentData.driverCancelled / currentData.cancelledOrders) * 100).toFixed(0)}% of cancellations</div>
            <Progress value={(currentData.driverCancelled / currentData.cancelledOrders) * 100} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      {/* Cancellation Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xs font-bold">Cancellation Breakdown</CardTitle>
          <CardDescription className="text-xs">
            Percentage of orders cancelled by different parties. High cancellation damages ratings and partnership.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Restaurant Cancelled */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded"></div>
                <span className="text-xs font-normal">Restaurant Cancelled</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold">{currentData.restaurantCancelled}</span>
                <span className="text-xs text-gray-500">({((currentData.restaurantCancelled / currentData.cancelledOrders) * 100).toFixed(0)}%)</span>
                <Badge variant="destructive" className="text-xs">Critical</Badge>
              </div>
            </div>

            {/* Driver Cancelled */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-500 rounded"></div>
                <span className="text-xs font-normal">Driver Cancelled</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold">{currentData.driverCancelled}</span>
                <span className="text-xs text-gray-500">({((currentData.driverCancelled / currentData.cancelledOrders) * 100).toFixed(0)}%)</span>
                <Badge variant="secondary" className="text-xs">Warning</Badge>
              </div>
            </div>

            {/* Customer Cancelled */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded"></div>
                <span className="text-xs font-normal">Customer Cancelled</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold">{currentData.customerCancelled}</span>
                <span className="text-xs text-gray-500">({((currentData.customerCancelled / currentData.cancelledOrders) * 100).toFixed(0)}%)</span>
                <Badge variant="outline" className="text-xs">Normal</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Root Cause Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xs font-bold">Root Cause Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="text-xs text-gray-600 space-y-1">
              <p><strong>Restaurant Cancellations (32%):</strong></p>
              <p>• Stock-out incidents: 50%</p>
              <p>• Kitchen capacity issues: 30%</p>
              <p>• Order complexity: 20%</p>
            </div>
            
            <div className="text-xs text-gray-600 space-y-1">
              <p><strong>Driver Cancellations (48%):</strong></p>
              <p>• Location inaccessibility: 40%</p>
              <p>• Dispatch delays: 35%</p>
              <p>• Weather conditions: 25%</p>
            </div>
            
            <div className="text-xs text-gray-600 space-y-1">
              <p><strong>Customer Cancellations (20%):</strong></p>
              <p>• Change of mind: 60%</p>
              <p>• Delivery time concerns: 40%</p>
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
            <p>• Monitor driver cancellations; may indicate dispatch issues or restaurant location inaccessibility</p>
            <p>• High cancellation rates damage platform ratings and algorithm ranking</p>
            <p>• Target &lt;2% cancellation rate to maintain platform partnership</p>
            <p>• Implement better inventory management to reduce stock-out cancellations</p>
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
            <p><strong>Data Source:</strong> PetPooja POS (cancellation reason tracking), Aggregator platform cancellation logs</p>
            <p><strong>Refresh:</strong> Daily</p>
            <p><strong>Drill Down:</strong> By reason (restaurant/driver/customer cancelled), by location, by daypart</p>
            <p><strong>Users:</strong> Manager</p>
            <p><strong>Alert Threshold:</strong> Red if &gt;3%</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
