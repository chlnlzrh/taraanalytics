import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, TrendingUp, DollarSign, Users, Target, Mail, Share2, Calendar } from "lucide-react"

export default function MarketingROIPage() {
  // Synthetic data based on DIG_010 specifications
  const currentData = {
    totalCampaigns: 8,
    totalRevenue: 125000, // ₹1.25L from campaigns
    totalCost: 25000, // ₹25K campaign spend
    roi: 400, // 400% ROI
    avgROI: 350,
    bestChannel: "Instagram",
    worstChannel: "Google Ads",
    newCustomers: 125,
    costPerAcquisition: 200
  }

  const channelData = [
    { name: "Instagram", revenue: 45000, cost: 8000, roi: 462.5, customers: 45 },
    { name: "Google Ads", revenue: 35000, cost: 12000, roi: 191.7, customers: 35 },
    { name: "Influencer", revenue: 25000, cost: 3000, roi: 733.3, customers: 25 },
    { name: "Email", revenue: 20000, cost: 2000, roi: 900, customers: 20 }
  ]

  const targets = {
    roiTarget: ">300%",
    warningThreshold: 200,
    criticalThreshold: 100
  }

  const alerts = {
    warning: currentData.roi < 300 && currentData.roi >= 200,
    critical: currentData.roi < 200
  }

  const getStatusColor = (value: number) => {
    if (value < 200) return "text-red-600"
    if (value < 300) return "text-yellow-600"
    return "text-green-600"
  }

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold">Marketing ROI</h1>
          <p className="text-xs text-gray-500">DIG_010 - Marketing Performance</p>
        </div>
        <Badge variant="outline" className="text-xs">
          Per Campaign
        </Badge>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Overall ROI */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-bold flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Overall ROI
              {alerts.critical && <AlertTriangle className="h-4 w-4 text-red-500" />}
              {alerts.warning && !alerts.critical && <AlertTriangle className="h-4 w-4 text-yellow-500" />}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold text-xs ${getStatusColor(currentData.roi)}`}>
              {currentData.roi}%
            </div>
            <div className="text-xs text-gray-500">Target: {targets.roiTarget}</div>
            <Progress value={Math.min(currentData.roi, 500)} className="mt-2" />
          </CardContent>
        </Card>

        {/* Revenue Generated */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-bold flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              Revenue Generated
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-xs">₹{(currentData.totalRevenue / 1000).toFixed(0)}K</div>
            <div className="text-xs text-gray-500">From campaigns</div>
            <Progress value={75} className="mt-2" />
          </CardContent>
        </Card>

        {/* Campaign Cost */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-bold flex items-center gap-2">
              <Target className="h-4 w-4" />
              Campaign Cost
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-xs">₹{(currentData.totalCost / 1000).toFixed(0)}K</div>
            <div className="text-xs text-gray-500">Total spend</div>
            <Progress value={25} className="mt-2" />
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
            <div className="text-2xl font-bold text-xs">{currentData.newCustomers}</div>
            <div className="text-xs text-gray-500">CAC: ₹{currentData.costPerAcquisition}</div>
            <Progress value={60} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      {/* Channel Performance */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xs font-bold">Channel Performance</CardTitle>
          <CardDescription className="text-xs">
            ROI by marketing channel. Track by channel to allocate budget effectively.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {channelData.map((channel, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded ${
                    index === 0 ? 'bg-pink-500' : 
                    index === 1 ? 'bg-blue-500' : 
                    index === 2 ? 'bg-purple-500' : 'bg-green-500'
                  }`}></div>
                  <span className="text-xs font-normal">{channel.name}</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className={`text-xs font-bold ${getStatusColor(channel.roi)}`}>
                      {channel.roi.toFixed(0)}%
                    </div>
                    <div className="text-xs text-gray-500">
                      ₹{(channel.revenue / 1000).toFixed(0)}K / ₹{(channel.cost / 1000).toFixed(0)}K
                    </div>
                  </div>
                  <Badge variant={channel.roi > 400 ? "default" : channel.roi > 200 ? "secondary" : "destructive"} className="text-xs">
                    {channel.customers} customers
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Campaign Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xs font-bold">Campaign Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-xs font-bold">Best Performing Channel</div>
                <div className="text-xs text-green-600">{currentData.bestChannel}</div>
                <div className="text-xs text-gray-500">Highest ROI and customer acquisition</div>
              </div>
              <div>
                <div className="text-xs font-bold">Needs Optimization</div>
                <div className="text-xs text-red-600">{currentData.worstChannel}</div>
                <div className="text-xs text-gray-500">Lowest ROI, review targeting</div>
              </div>
            </div>
            
            <div className="text-xs text-gray-600 space-y-1">
              <p><strong>Key Insights:</strong></p>
              <p>• Email marketing shows highest ROI (900%)</p>
              <p>• Influencer campaigns effective for brand awareness</p>
              <p>• Google Ads need better targeting optimization</p>
              <p>• Instagram provides good balance of reach and conversion</p>
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
            <p>• WhatsApp marketing highly effective in India (not tracked separately)</p>
            <p>• Regional festivals drive 2-3x higher campaign performance</p>
            <p>• Local influencers (10K-100K followers) often better ROI than macro</p>
            <p>• UPI integration in campaigns increases conversion rates</p>
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
            <p><strong>Data Source:</strong> Campaign tracking systems, PetPooja POS (revenue attribution), CRM (customer data)</p>
            <p><strong>Refresh:</strong> Per campaign</p>
            <p><strong>Drill Down:</strong> By channel, by campaign type, by location, by customer segment</p>
            <p><strong>Users:</strong> Marketing, Manager, Owner</p>
            <p><strong>Formula:</strong> (Revenue from Campaign - Campaign Cost) ÷ Campaign Cost × 100</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
