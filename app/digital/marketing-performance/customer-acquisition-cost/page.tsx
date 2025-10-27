import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, Users, Target, TrendingUp, DollarSign } from "lucide-react"

export default function CustomerAcquisitionCostPage() {
  // Synthetic data based on DIG_011 specifications
  const currentData = {
    totalMarketingSpend: 25000, // ₹25K marketing spend
    newCustomersAcquired: 125, // 125 new customers
    cac: 200, // ₹200 CAC
    avgCheckSize: 450, // ₹450 average check
    paybackPeriod: 0.44, // 0.44 transactions to payback
    channelCAC: {
      instagram: 150,
      google: 300,
      influencer: 100,
      email: 80
    }
  }

  const targets = {
    cacTarget: "₹100-400",
    warningThreshold: 300,
    criticalThreshold: 400
  }

  const alerts = {
    warning: currentData.cac > 300 && currentData.cac <= 400,
    critical: currentData.cac > 400
  }

  const getStatusColor = (value: number) => {
    if (value > 400) return "text-red-600"
    if (value > 300) return "text-yellow-600"
    return "text-green-600"
  }

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold">Customer Acquisition Cost (CAC)</h1>
          <p className="text-xs text-gray-500">DIG_011 - Marketing Performance</p>
        </div>
        <Badge variant="outline" className="text-xs">
          Per Campaign
        </Badge>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Overall CAC */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-bold flex items-center gap-2">
              <Target className="h-4 w-4" />
              Overall CAC
              {alerts.critical && <AlertTriangle className="h-4 w-4 text-red-500" />}
              {alerts.warning && !alerts.critical && <AlertTriangle className="h-4 w-4 text-yellow-500" />}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold text-xs ${getStatusColor(currentData.cac)}`}>
              ₹{currentData.cac}
            </div>
            <div className="text-xs text-gray-500">Target: {targets.cacTarget}</div>
            <Progress value={Math.min((currentData.cac / 400) * 100, 100)} className="mt-2" />
          </CardContent>
        </Card>

        {/* New Customers */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-bold flex items-center gap-2">
              <Users className="h-4 w-4" />
              New Customers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-xs">{currentData.newCustomersAcquired}</div>
            <div className="text-xs text-gray-500">This campaign</div>
            <Progress value={75} className="mt-2" />
          </CardContent>
        </Card>

        {/* Marketing Spend */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-bold flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              Marketing Spend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-xs">₹{(currentData.totalMarketingSpend / 1000).toFixed(0)}K</div>
            <div className="text-xs text-gray-500">Total investment</div>
            <Progress value={60} className="mt-2" />
          </CardContent>
        </Card>

        {/* Payback Period */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-bold flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Payback Period
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-xs">{currentData.paybackPeriod.toFixed(2)}</div>
            <div className="text-xs text-gray-500">Transactions to payback</div>
            <Progress value={80} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      {/* Channel CAC Comparison */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xs font-bold">CAC by Channel</CardTitle>
          <CardDescription className="text-xs">
            Customer acquisition cost by marketing channel. Compare across channels to identify ROI.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Email */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded"></div>
                <span className="text-xs font-normal">Email Marketing</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-green-600">₹{currentData.channelCAC.email}</span>
                <Badge variant="default" className="text-xs">Best</Badge>
              </div>
            </div>

            {/* Influencer */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded"></div>
                <span className="text-xs font-normal">Influencer</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-green-600">₹{currentData.channelCAC.influencer}</span>
                <Badge variant="outline" className="text-xs">Good</Badge>
              </div>
            </div>

            {/* Instagram */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-pink-500 rounded"></div>
                <span className="text-xs font-normal">Instagram</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-green-600">₹{currentData.channelCAC.instagram}</span>
                <Badge variant="outline" className="text-xs">Good</Badge>
              </div>
            </div>

            {/* Google Ads */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded"></div>
                <span className="text-xs font-normal">Google Ads</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-xs font-bold ${getStatusColor(currentData.channelCAC.google)}`}>₹{currentData.channelCAC.google}</span>
                <Badge variant="secondary" className="text-xs">Warning</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CAC Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xs font-bold">CAC Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-xs font-bold">Payback Analysis</div>
                <div className="text-xs text-gray-600">
                  CAC: ₹{currentData.cac} ÷ ACS: ₹{currentData.avgCheckSize} = {currentData.paybackPeriod.toFixed(2)} transactions
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Customer needs {currentData.paybackPeriod.toFixed(2)} visits to break even
                </div>
              </div>
              <div>
                <div className="text-xs font-bold">Channel Efficiency</div>
                <div className="text-xs text-gray-600">
                  Email marketing most efficient (₹{currentData.channelCAC.email})
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Google Ads need optimization (₹{currentData.channelCAC.google})
                </div>
              </div>
            </div>
            
            <div className="text-xs text-gray-600 space-y-1">
              <p><strong>Optimization Opportunities:</strong></p>
              <p>• Increase email marketing budget allocation</p>
              <p>• Optimize Google Ads targeting to reduce CAC</p>
              <p>• Focus on influencer partnerships for brand awareness</p>
              <p>• Implement referral programs to reduce paid CAC</p>
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
            <p>• Typical CAC ranges ₹100-400 depending on channel and market saturation</p>
            <p>• WhatsApp marketing often most cost-effective (not tracked separately)</p>
            <p>• Regional festivals drive 2-3x higher acquisition efficiency</p>
            <p>• Local micro-influencers (10K-100K followers) offer better CAC than macro</p>
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
            <p><strong>Data Source:</strong> Campaign tracking systems, CRM (new customer identification), PetPooja POS (transaction data)</p>
            <p><strong>Refresh:</strong> Per campaign</p>
            <p><strong>Drill Down:</strong> By channel, by campaign type, by location, by customer segment</p>
            <p><strong>Users:</strong> Marketing, Manager, Owner</p>
            <p><strong>Formula:</strong> Total Marketing Spend ÷ New Customers Acquired</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
