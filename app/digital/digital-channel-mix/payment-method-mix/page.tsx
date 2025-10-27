import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, CreditCard, Smartphone, Banknote, Wallet } from "lucide-react"

export default function PaymentMethodMixPage() {
  // Synthetic data based on DIG_004 specifications
  const currentData = {
    totalTransactions: 1250,
    upiTransactions: 750, // 60% UPI
    cardTransactions: 300, // 24% Cards
    cashTransactions: 150, // 12% Cash
    walletTransactions: 50, // 4% Wallets
    upiShare: 60,
    cardShare: 24,
    cashShare: 12,
    walletShare: 4
  }

  const targets = {
    upiTarget: "50-70%",
    cardTarget: "20-30%",
    cashTarget: "5-15%",
    walletTarget: "5-10%"
  }

  const alerts = {
    cashVarianceWarning: currentData.cashShare > 14, // >2% variance from target
    cashVarianceCritical: currentData.cashShare > 17, // >5% variance
    upiLow: currentData.upiShare < 40
  }

  const getStatusColor = (value: number, targetMin: number, targetMax: number) => {
    if (value < targetMin || value > targetMax) return "text-yellow-600"
    return "text-green-600"
  }

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold">Payment Method Mix</h1>
          <p className="text-xs text-gray-500">DIG_004 - Digital Channel Mix</p>
        </div>
        <Badge variant="outline" className="text-xs">
          Daily Refresh
        </Badge>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* UPI */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-bold flex items-center gap-2">
              <Smartphone className="h-4 w-4" />
              UPI Share
              {alerts.upiLow && <AlertTriangle className="h-4 w-4 text-yellow-500" />}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold text-xs ${getStatusColor(currentData.upiShare, 50, 70)}`}>
              {currentData.upiShare}%
            </div>
            <div className="text-xs text-gray-500">Target: {targets.upiTarget}</div>
            <Progress value={currentData.upiShare} className="mt-2" />
          </CardContent>
        </Card>

        {/* Cards */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-bold flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              Card Share
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold text-xs ${getStatusColor(currentData.cardShare, 20, 30)}`}>
              {currentData.cardShare}%
            </div>
            <div className="text-xs text-gray-500">Target: {targets.cardTarget}</div>
            <Progress value={currentData.cardShare} className="mt-2" />
          </CardContent>
        </Card>

        {/* Cash */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-bold flex items-center gap-2">
              <Banknote className="h-4 w-4" />
              Cash Share
              {alerts.cashVarianceCritical && <AlertTriangle className="h-4 w-4 text-red-500" />}
              {alerts.cashVarianceWarning && !alerts.cashVarianceCritical && <AlertTriangle className="h-4 w-4 text-yellow-500" />}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold text-xs ${getStatusColor(currentData.cashShare, 5, 15)}`}>
              {currentData.cashShare}%
            </div>
            <div className="text-xs text-gray-500">Target: {targets.cashTarget}</div>
            <Progress value={currentData.cashShare} className="mt-2" />
          </CardContent>
        </Card>

        {/* Wallets */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-bold flex items-center gap-2">
              <Wallet className="h-4 w-4" />
              Wallet Share
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold text-xs ${getStatusColor(currentData.walletShare, 5, 10)}`}>
              {currentData.walletShare}%
            </div>
            <div className="text-xs text-gray-500">Target: {targets.walletTarget}</div>
            <Progress value={currentData.walletShare} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      {/* Payment Method Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xs font-bold">Payment Method Breakdown</CardTitle>
          <CardDescription className="text-xs">
            Percentage breakdown of payments by type. Useful for working capital and fraud monitoring.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* UPI */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded"></div>
                <span className="text-xs font-normal">UPI</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold">{currentData.upiShare}%</span>
                <span className="text-xs text-gray-500">({currentData.upiTransactions} transactions)</span>
                {alerts.upiLow && <Badge variant="secondary" className="text-xs">Low</Badge>}
                {!alerts.upiLow && <Badge variant="outline" className="text-xs">Good</Badge>}
              </div>
            </div>

            {/* Cards */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded"></div>
                <span className="text-xs font-normal">Cards</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold">{currentData.cardShare}%</span>
                <span className="text-xs text-gray-500">({currentData.cardTransactions} transactions)</span>
                <Badge variant="outline" className="text-xs">Good</Badge>
              </div>
            </div>

            {/* Cash */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-500 rounded"></div>
                <span className="text-xs font-normal">Cash</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold">{currentData.cashShare}%</span>
                <span className="text-xs text-gray-500">({currentData.cashTransactions} transactions)</span>
                {alerts.cashVarianceCritical && <Badge variant="destructive" className="text-xs">High Variance</Badge>}
                {alerts.cashVarianceWarning && !alerts.cashVarianceCritical && <Badge variant="secondary" className="text-xs">Variance</Badge>}
                {!alerts.cashVarianceWarning && <Badge variant="outline" className="text-xs">Normal</Badge>}
              </div>
            </div>

            {/* Wallets */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded"></div>
                <span className="text-xs font-normal">Wallets</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold">{currentData.walletShare}%</span>
                <span className="text-xs text-gray-500">({currentData.walletTransactions} transactions)</span>
                <Badge variant="outline" className="text-xs">Good</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Transaction Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xs font-bold">Transaction Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-xs font-bold">Total Transactions</div>
                <div className="text-xs text-gray-600">{currentData.totalTransactions}</div>
              </div>
              <div>
                <div className="text-xs font-bold">Digital Share</div>
                <div className="text-xs text-gray-600">{100 - currentData.cashShare}%</div>
              </div>
            </div>
            
            <div className="text-xs text-gray-600 space-y-1">
              <p><strong>Key Insights:</strong></p>
              <p>• UPI dominant in metros (60% vs. 50-70% target)</p>
              <p>• Cash variance within acceptable range (12% vs. 5-15% target)</p>
              <p>• Card usage stable at 24%</p>
              <p>• Wallet adoption growing slowly (4%)</p>
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
            <p>• UPI-dominant in metros; cash critical for small towns</p>
            <p>• Cash variance &gt;2% requires EOD reconciliation check</p>
            <p>• Monitor for fraud patterns in cash transactions</p>
            <p>• Digital payments reduce working capital requirements</p>
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
            <p><strong>Data Source:</strong> PetPooja POS /orders (payment_mode field)</p>
            <p><strong>Refresh:</strong> Daily</p>
            <p><strong>Drill Down:</strong> By payment method, by location, by daypart, by order value band</p>
            <p><strong>Users:</strong> Finance, Manager</p>
            <p><strong>Alert Threshold:</strong> Red if cash variance &gt;2%</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
