import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, TrendingUp, TrendingDown, PieChart, BarChart3 } from "lucide-react"

export default function OnlineOrderSharePage() {
  // Synthetic data based on DIG_001 specifications
  const currentData = {
    totalOrders: 1250,
    onlineOrders: 687, // 55% online
    aggregatorOrders: 412, // 33% aggregator
    directOrders: 275, // 22% direct
    phoneWalkInOrders: 563, // 45% traditional
    onlineShare: 55,
    aggregatorShare: 33,
    directShare: 22,
    phoneWalkInShare: 45
  }

  const targets = {
    aggregatorTarget: "40-50%",
    directTarget: "15-25%",
    phoneWalkInTarget: "25-40%"
  }

  const alerts = {
    aggregatorWarning: currentData.aggregatorShare > 55,
    aggregatorCritical: currentData.aggregatorShare > 70,
    directWarning: currentData.directShare < 10,
    directCritical: currentData.directShare < 5
  }

  const getStatusColor = (value: number, warningThreshold: number, criticalThreshold: number) => {
    if (value >= criticalThreshold) return "text-red-600"
    if (value >= warningThreshold) return "text-yellow-600"
    return "text-green-600"
  }

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold">Online Order Share %</h1>
          <p className="text-xs text-gray-500">DIG_001 - Digital Channel Mix</p>
        </div>
        <Badge variant="outline" className="text-xs">
          Daily Refresh
        </Badge>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Online Share */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-bold flex items-center gap-2">
              <PieChart className="h-4 w-4" />
              Online Share
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-xs">{currentData.onlineShare}%</div>
            <div className="text-xs text-gray-500">{currentData.onlineOrders} orders</div>
            <Progress value={currentData.onlineShare} className="mt-2" />
          </CardContent>
        </Card>

        {/* Aggregator Share */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-bold flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Aggregator Share
              {alerts.aggregatorCritical && <AlertTriangle className="h-4 w-4 text-red-500" />}
              {alerts.aggregatorWarning && !alerts.aggregatorCritical && <AlertTriangle className="h-4 w-4 text-yellow-500" />}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold text-xs ${getStatusColor(currentData.aggregatorShare, 55, 70)}`}>
              {currentData.aggregatorShare}%
            </div>
            <div className="text-xs text-gray-500">Target: {targets.aggregatorTarget}</div>
            <Progress value={currentData.aggregatorShare} className="mt-2" />
          </CardContent>
        </Card>

        {/* Direct Share */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-bold flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Direct Share
              {alerts.directCritical && <AlertTriangle className="h-4 w-4 text-red-500" />}
              {alerts.directWarning && !alerts.directCritical && <AlertTriangle className="h-4 w-4 text-yellow-500" />}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold text-xs ${getStatusColor(25 - currentData.directShare, 15, 20)}`}>
              {currentData.directShare}%
            </div>
            <div className="text-xs text-gray-500">Target: {targets.directTarget}</div>
            <Progress value={currentData.directShare} className="mt-2" />
          </CardContent>
        </Card>

        {/* Phone/Walk-in Share */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-bold flex items-center gap-2">
              <TrendingDown className="h-4 w-4" />
              Phone/Walk-in
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-xs">{currentData.phoneWalkInShare}%</div>
            <div className="text-xs text-gray-500">Target: {targets.phoneWalkInTarget}</div>
            <Progress value={currentData.phoneWalkInShare} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      {/* Channel Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xs font-bold">Channel Mix Breakdown</CardTitle>
          <CardDescription className="text-xs">
            Percentage of orders from digital channels vs. traditional. High aggregator dependency creates risk.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Aggregator */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded"></div>
                <span className="text-xs font-normal">Aggregator (Zomato/Swiggy)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold">{currentData.aggregatorShare}%</span>
                <span className="text-xs text-gray-500">({currentData.aggregatorOrders} orders)</span>
                {alerts.aggregatorCritical && <Badge variant="destructive" className="text-xs">Critical</Badge>}
                {alerts.aggregatorWarning && !alerts.aggregatorCritical && <Badge variant="secondary" className="text-xs">Warning</Badge>}
              </div>
            </div>

            {/* Direct */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded"></div>
                <span className="text-xs font-normal">Direct (Own Website/App)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold">{currentData.directShare}%</span>
                <span className="text-xs text-gray-500">({currentData.directOrders} orders)</span>
                {alerts.directCritical && <Badge variant="destructive" className="text-xs">Critical</Badge>}
                {alerts.directWarning && !alerts.directCritical && <Badge variant="secondary" className="text-xs">Warning</Badge>}
              </div>
            </div>

            {/* Phone/Walk-in */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-500 rounded"></div>
                <span className="text-xs font-normal">Phone/Walk-in</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold">{currentData.phoneWalkInShare}%</span>
                <span className="text-xs text-gray-500">({currentData.phoneWalkInOrders} orders)</span>
              </div>
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
            <p>• Aggregators are very powerful in India; over-reliance creates vulnerability to commission increases</p>
            <p>• Direct channel provides pure margin (no commission fees)</p>
            <p>• Monitor weekly for channel mix changes</p>
            <p>• Consider WhatsApp/SMS ordering as part of direct channel strategy</p>
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
            <p><strong>Data Source:</strong> PetPooja POS /orders (channel field), Aggregator API (for verification)</p>
            <p><strong>Refresh:</strong> Daily</p>
            <p><strong>Drill Down:</strong> By platform (Zomato/Swiggy/own app/website), by location, by daypart</p>
            <p><strong>Users:</strong> Manager, Owner, Marketing</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
