import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, Smartphone, Globe, Phone, Users } from "lucide-react"

export default function DirectOrdersPage() {
  // Synthetic data based on DIG_003 specifications
  const currentData = {
    totalOrders: 1250,
    directOrders: 275, // 22% direct
    directShare: 22,
    websiteOrders: 150,
    appOrders: 125,
    whatsappOrders: 0, // Not tracked separately
    monthlyDirectRevenue: 123750 // ₹1.24L from direct orders
  }

  const targets = {
    directTarget: "20-30%",
    warningThreshold: 20,
    criticalThreshold: 10
  }

  const alerts = {
    warning: currentData.directShare < 20 && currentData.directShare >= 10,
    critical: currentData.directShare < 10
  }

  const getStatusColor = (value: number) => {
    if (value < 10) return "text-red-600"
    if (value < 20) return "text-yellow-600"
    return "text-green-600"
  }

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold">Direct Orders % (Owned Channel)</h1>
          <p className="text-xs text-gray-500">DIG_003 - Digital Channel Mix</p>
        </div>
        <Badge variant="outline" className="text-xs">
          Daily Refresh
        </Badge>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Direct Share */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-bold flex items-center gap-2">
              <Globe className="h-4 w-4" />
              Direct Share
              {alerts.critical && <AlertTriangle className="h-4 w-4 text-red-500" />}
              {alerts.warning && !alerts.critical && <AlertTriangle className="h-4 w-4 text-yellow-500" />}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold text-xs ${getStatusColor(currentData.directShare)}`}>
              {currentData.directShare}%
            </div>
            <div className="text-xs text-gray-500">Target: {targets.directTarget}</div>
            <Progress value={currentData.directShare} className="mt-2" />
          </CardContent>
        </Card>

        {/* Total Direct Orders */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-bold flex items-center gap-2">
              <Users className="h-4 w-4" />
              Direct Orders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-xs">{currentData.directOrders}</div>
            <div className="text-xs text-gray-500">Out of {currentData.totalOrders} total</div>
            <Progress value={(currentData.directOrders / currentData.totalOrders) * 100} className="mt-2" />
          </CardContent>
        </Card>

        {/* Website Orders */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-bold flex items-center gap-2">
              <Globe className="h-4 w-4" />
              Website Orders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-xs">{currentData.websiteOrders}</div>
            <div className="text-xs text-gray-500">{((currentData.websiteOrders / currentData.directOrders) * 100).toFixed(0)}% of direct</div>
            <Progress value={(currentData.websiteOrders / currentData.directOrders) * 100} className="mt-2" />
          </CardContent>
        </Card>

        {/* App Orders */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-bold flex items-center gap-2">
              <Smartphone className="h-4 w-4" />
              App Orders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-xs">{currentData.appOrders}</div>
            <div className="text-xs text-gray-500">{((currentData.appOrders / currentData.directOrders) * 100).toFixed(0)}% of direct</div>
            <Progress value={(currentData.appOrders / currentData.directOrders) * 100} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      {/* Direct Channel Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xs font-bold">Direct Channel Breakdown</CardTitle>
          <CardDescription className="text-xs">
            Strategically important; higher margins (no commission). Target 20-30% of total orders.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Website */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded"></div>
                <span className="text-xs font-normal">Website Orders</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold">{currentData.websiteOrders}</span>
                <span className="text-xs text-gray-500">({((currentData.websiteOrders / currentData.directOrders) * 100).toFixed(0)}%)</span>
                <Badge variant="outline" className="text-xs">Good</Badge>
              </div>
            </div>

            {/* App */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded"></div>
                <span className="text-xs font-normal">Mobile App</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold">{currentData.appOrders}</span>
                <span className="text-xs text-gray-500">({((currentData.appOrders / currentData.directOrders) * 100).toFixed(0)}%)</span>
                <Badge variant="outline" className="text-xs">Good</Badge>
              </div>
            </div>

            {/* WhatsApp (Not tracked separately) */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-300 rounded"></div>
                <span className="text-xs font-normal">WhatsApp Orders</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-gray-400">Not tracked</span>
                <Badge variant="secondary" className="text-xs">Consider adding</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Revenue Impact */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xs font-bold">Revenue Impact</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-xs font-bold">Direct Revenue</div>
                <div className="text-xs text-gray-600">₹{(currentData.monthlyDirectRevenue / 1000).toFixed(1)}K</div>
                <div className="text-xs text-gray-500 mt-1">Pure margin (no commission)</div>
              </div>
              <div>
                <div className="text-xs font-bold">Commission Saved</div>
                <div className="text-xs text-gray-600">₹{((currentData.monthlyDirectRevenue * 0.25) / 1000).toFixed(1)}K</div>
                <div className="text-xs text-gray-500 mt-1">At 25% aggregator rate</div>
              </div>
            </div>
            
            <div className="text-xs text-gray-600 space-y-1">
              <p><strong>Growth Opportunities:</strong></p>
              <p>• Implement WhatsApp ordering system</p>
              <p>• Improve website conversion rate</p>
              <p>• Launch mobile app marketing campaigns</p>
              <p>• Create direct channel loyalty programs</p>
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
            <p>• WhatsApp/SMS ordering highly effective in India; consider in 'direct' definition</p>
            <p>• Direct channel provides pure margin (no commission fees)</p>
            <p>• Anything &lt;15% suggests weak owned-channel strategy</p>
            <p>• Invest in digital marketing to drive direct channel growth</p>
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
            <p><strong>Data Source:</strong> PetPooja POS (orders tagged 'Direct'), Website/App analytics</p>
            <p><strong>Refresh:</strong> Daily</p>
            <p><strong>Drill Down:</strong> By channel (website vs. app), by location, by daypart</p>
            <p><strong>Users:</strong> Manager, Marketing, Owner</p>
            <p><strong>Alert Threshold:</strong> Red if &lt;10%</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
