import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, CreditCard, TrendingUp, DollarSign } from "lucide-react"

export default function AggregatorCommissionPage() {
  // Synthetic data based on DIG_002 specifications
  const currentData = {
    totalPlatformFees: 12500, // ₹12.5K fees paid
    aggregatorRevenue: 50000, // ₹50K from aggregators
    commissionRate: 25, // 25% effective rate
    zomatoCommission: 24,
    swiggyCommission: 26,
    monthlyFees: 12500,
    annualProjection: 150000
  }

  const targets = {
    commissionTarget: "20-25%",
    warningThreshold: 25,
    criticalThreshold: 28
  }

  const alerts = {
    warning: currentData.commissionRate > 25 && currentData.commissionRate <= 28,
    critical: currentData.commissionRate > 28
  }

  const getStatusColor = (value: number) => {
    if (value > 28) return "text-red-600"
    if (value > 25) return "text-yellow-600"
    return "text-green-600"
  }

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold">Aggregator Commission %</h1>
          <p className="text-xs text-gray-500">DIG_002 - Digital Channel Mix</p>
        </div>
        <Badge variant="outline" className="text-xs">
          Weekly Refresh
        </Badge>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Overall Commission */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-bold flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              Overall Commission
              {alerts.critical && <AlertTriangle className="h-4 w-4 text-red-500" />}
              {alerts.warning && !alerts.critical && <AlertTriangle className="h-4 w-4 text-yellow-500" />}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold text-xs ${getStatusColor(currentData.commissionRate)}`}>
              {currentData.commissionRate}%
            </div>
            <div className="text-xs text-gray-500">Target: {targets.commissionTarget}</div>
            <Progress value={currentData.commissionRate} className="mt-2" />
          </CardContent>
        </Card>

        {/* Platform Fees */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-bold flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              Platform Fees
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-xs">₹{(currentData.totalPlatformFees / 1000).toFixed(1)}K</div>
            <div className="text-xs text-gray-500">This month</div>
            <Progress value={75} className="mt-2" />
          </CardContent>
        </Card>

        {/* Zomato Commission */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-bold flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Zomato Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold text-xs ${getStatusColor(currentData.zomatoCommission)}`}>
              {currentData.zomatoCommission}%
            </div>
            <div className="text-xs text-gray-500">Platform specific</div>
            <Progress value={currentData.zomatoCommission} className="mt-2" />
          </CardContent>
        </Card>

        {/* Swiggy Commission */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-bold flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Swiggy Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold text-xs ${getStatusColor(currentData.swiggyCommission)}`}>
              {currentData.swiggyCommission}%
            </div>
            <div className="text-xs text-gray-500">Platform specific</div>
            <Progress value={currentData.swiggyCommission} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      {/* Platform Comparison */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xs font-bold">Platform Commission Rates</CardTitle>
          <CardDescription className="text-xs">
            Effective commission rate paid to aggregator platforms. Direct impact on margin.
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
                <span className={`text-xs font-bold ${getStatusColor(currentData.zomatoCommission)}`}>
                  {currentData.zomatoCommission}%
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
                <span className={`text-xs font-bold ${getStatusColor(currentData.swiggyCommission)}`}>
                  {currentData.swiggyCommission}%
                </span>
                <Badge variant="secondary" className="text-xs">Warning</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Financial Impact */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xs font-bold">Financial Impact</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-xs font-bold">Monthly Fees</div>
                <div className="text-xs text-gray-600">₹{(currentData.monthlyFees / 1000).toFixed(1)}K</div>
              </div>
              <div>
                <div className="text-xs font-bold">Annual Projection</div>
                <div className="text-xs text-gray-600">₹{(currentData.annualProjection / 1000).toFixed(0)}K</div>
              </div>
            </div>
            
            <div className="text-xs text-gray-600 space-y-1">
              <p><strong>Negotiation Opportunities:</strong></p>
              <p>• Volume discounts available at ₹2L+ monthly revenue</p>
              <p>• Annual contracts offer 2-3% rate reduction</p>
              <p>• Performance bonuses for high SLA compliance</p>
              <p>• Consider direct channel investment to reduce dependency</p>
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
            <p>• Zomato/Swiggy set commission rates; negotiate volume discounts annually</p>
            <p>• Monitor quarterly rate changes from platforms</p>
            <p>• Commission increases erode profitability significantly</p>
            <p>• Consider multi-platform strategy to maintain negotiation leverage</p>
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
            <p><strong>Data Source:</strong> Aggregator settlement reports (Zomato/Swiggy dashboards), Accounting reconciliation</p>
            <p><strong>Refresh:</strong> Weekly</p>
            <p><strong>Drill Down:</strong> By platform (Zomato vs. Swiggy), by location, by order type (delivery vs. pickup)</p>
            <p><strong>Users:</strong> Finance, Manager, Owner</p>
            <p><strong>Alert Threshold:</strong> Red if &gt;28%</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
