'use client'

import { RESTAURANTS } from '@/lib/restaurant-data'
import { useState, useEffect } from 'react'

export default function ExecutiveDashboard() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000)
    return () => clearInterval(timer)
  }, [])

  // Critical Financial Health Data
  const financialHealth = {
    netProfitMargin: {
      current: 6.2,
      target: 7.0,
      trend: 'up',
      variance: -11.4,
      status: 'warning'
    },
    sameStoreSalesGrowth: {
      current: 12.5,
      target: 8.0,
      trend: 'up',
      variance: 56.3,
      status: 'excellent'
    },
    cashFlow: {
      current: 245000,
      target: 200000,
      trend: 'up',
      variance: 22.5,
      status: 'good'
    },
    roiVsBudget: {
      current: 18.5,
      target: 15.0,
      trend: 'up',
      variance: 23.3,
      status: 'excellent'
    }
  }

  // Operational Excellence Data
  const operationalExcellence = {
    customerSatisfaction: {
      current: 4.6,
      target: 4.5,
      trend: 'up',
      variance: 2.2,
      status: 'excellent'
    },
    tableTurnover: {
      current: 3.2,
      target: 3.5,
      trend: 'down',
      variance: -8.6,
      status: 'warning'
    },
    laborCost: {
      current: 28.5,
      target: 30.0,
      trend: 'down',
      variance: -5.0,
      status: 'good'
    },
    foodCost: {
      current: 32.1,
      target: 30.0,
      trend: 'up',
      variance: 7.0,
      status: 'warning'
    }
  }

  // Growth & Market Position Data
  const growthMetrics = {
    customerAcquisition: {
      current: 85,
      target: 75,
      trend: 'up',
      variance: 13.3,
      status: 'excellent'
    },
    averageCheck: {
      current: 1875,
      target: 1650,
      trend: 'up',
      variance: 13.6,
      status: 'excellent'
    },
    peakEfficiency: {
      current: 1.52,
      target: 1.40,
      trend: 'up',
      variance: 8.6,
      status: 'good'
    },
    topLocation: {
      name: 'Chanakyapuri',
      performance: 116.9,
      revenue: 485000
    }
  }

  // Risk & Alerts Data
  const alerts = [
    {
      type: 'critical',
      metric: 'Food Cost %',
      location: 'Shahpur Jat',
      value: '40.0%',
      threshold: '30.0%',
      action: 'Immediate inventory audit required'
    },
    {
      type: 'warning',
      metric: 'Table Turnover',
      location: 'Gurugram',
      value: '2.8x',
      threshold: '3.5x',
      action: 'Review service processes'
    },
    {
      type: 'budget',
      metric: 'Labor Cost',
      location: 'Chain Average',
      value: '28.5%',
      threshold: '30.0%',
      action: 'Under budget - opportunity for expansion'
    }
  ]

  // Strategic Insights
  const insights = {
    bestPerformer: {
      location: 'Chanakyapuri',
      netProfit: 48500,
      margin: 10.0,
      keySuccess: 'Premium location + operational excellence'
    },
    topOpportunities: [
      'Reduce food cost at Shahpur Jat (-8% margin impact)',
      'Improve table turnover at Gurugram (+12% revenue potential)',
      'Replicate Chanakyapuri model at underperforming locations'
    ],
    marketPosition: {
      rank: 2,
      totalMarket: 15,
      marketShare: 12.5,
      vsCompetitor: '+2.3%'
    },
    projections: {
      revenue30Day: 1580000,
      growth: 15.2,
      confidence: 'high'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'text-green-600'
      case 'good': return 'text-green-600'
      case 'warning': return 'text-yellow-600'
      case 'critical': return 'text-red-600'
      default: return 'text-gray-600'
    }
  }

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'excellent': return 'bg-green-50 dark:bg-green-900/20 border-green-200'
      case 'good': return 'bg-green-50 dark:bg-green-900/20 border-green-200'
      case 'warning': return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
      case 'critical': return 'bg-red-50 dark:bg-red-900/20 border-red-200'
      default: return 'bg-gray-50 dark:bg-gray-900/20 border-gray-200'
    }
  }

  const getAlertColor = (type: string) => {
    switch (type) {
      case 'critical': return 'border-l-red-500 bg-red-50 dark:bg-red-900/20'
      case 'warning': return 'border-l-yellow-500 bg-yellow-50 dark:bg-yellow-900/20'
      case 'budget': return 'border-l-green-500 bg-green-50 dark:bg-green-900/20'
      default: return 'border-l-gray-500 bg-gray-50 dark:bg-gray-900/20'
    }
  }

  const getTrendIcon = (trend: string) => {
    return trend === 'up' ? '📈' : trend === 'down' ? '📉' : '➡️'
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Executive Dashboard
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            Real-time business intelligence for TaraAnalytics Restaurant Chain
          </p>
        </div>
        <div className="text-right">
          <div className="text-xs font-normal text-gray-500">
            Last Updated: {currentTime.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
          </div>
          <div className="text-xs font-normal text-gray-500">
            {currentTime.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
          </div>
        </div>
      </div>

      {/* Critical Financial Health */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          💰 Critical Financial Health
        </h2>
        <div className="grid grid-cols-4 gap-4">
          <div className={`p-3 rounded border ${getStatusBg(financialHealth.netProfitMargin.status)}`}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-normal text-gray-600">Net Profit Margin</span>
              <span>{getTrendIcon(financialHealth.netProfitMargin.trend)}</span>
            </div>
            <div className={`text-xs font-bold ${getStatusColor(financialHealth.netProfitMargin.status)}`}>
              {financialHealth.netProfitMargin.current.toFixed(1)}%
            </div>
            <div className="text-xs font-normal text-gray-500">
              Target: {financialHealth.netProfitMargin.target.toFixed(1)}%
            </div>
          </div>

          <div className={`p-3 rounded border ${getStatusBg(financialHealth.sameStoreSalesGrowth.status)}`}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-normal text-gray-600">Same Store Growth</span>
              <span>{getTrendIcon(financialHealth.sameStoreSalesGrowth.trend)}</span>
            </div>
            <div className={`text-xs font-bold ${getStatusColor(financialHealth.sameStoreSalesGrowth.status)}`}>
              {financialHealth.sameStoreSalesGrowth.current.toFixed(1)}%
            </div>
            <div className="text-xs font-normal text-gray-500">
              Target: {financialHealth.sameStoreSalesGrowth.target.toFixed(1)}%
            </div>
          </div>

          <div className={`p-3 rounded border ${getStatusBg(financialHealth.cashFlow.status)}`}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-normal text-gray-600">Cash Flow</span>
              <span>{getTrendIcon(financialHealth.cashFlow.trend)}</span>
            </div>
            <div className={`text-xs font-bold ${getStatusColor(financialHealth.cashFlow.status)}`}>
              ₹{(financialHealth.cashFlow.current/1000).toFixed(0)}K
            </div>
            <div className="text-xs font-normal text-gray-500">
              Target: ₹{(financialHealth.cashFlow.target/1000).toFixed(0)}K
            </div>
          </div>

          <div className={`p-3 rounded border ${getStatusBg(financialHealth.roiVsBudget.status)}`}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-normal text-gray-600">ROI vs Budget</span>
              <span>{getTrendIcon(financialHealth.roiVsBudget.trend)}</span>
            </div>
            <div className={`text-xs font-bold ${getStatusColor(financialHealth.roiVsBudget.status)}`}>
              {financialHealth.roiVsBudget.current.toFixed(1)}%
            </div>
            <div className="text-xs font-normal text-gray-500">
              Target: {financialHealth.roiVsBudget.target.toFixed(1)}%
            </div>
          </div>
        </div>
      </div>

      {/* Operational Excellence */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          ⚡ Operational Excellence
        </h2>
        <div className="grid grid-cols-4 gap-4">
          <div className={`p-3 rounded border ${getStatusBg(operationalExcellence.customerSatisfaction.status)}`}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-normal text-gray-600">Customer Satisfaction</span>
              <span>{getTrendIcon(operationalExcellence.customerSatisfaction.trend)}</span>
            </div>
            <div className={`text-xs font-bold ${getStatusColor(operationalExcellence.customerSatisfaction.status)}`}>
              {operationalExcellence.customerSatisfaction.current.toFixed(1)}/5.0
            </div>
            <div className="text-xs font-normal text-gray-500">
              Target: {operationalExcellence.customerSatisfaction.target.toFixed(1)}
            </div>
          </div>

          <div className={`p-3 rounded border ${getStatusBg(operationalExcellence.tableTurnover.status)}`}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-normal text-gray-600">Table Turnover</span>
              <span>{getTrendIcon(operationalExcellence.tableTurnover.trend)}</span>
            </div>
            <div className={`text-xs font-bold ${getStatusColor(operationalExcellence.tableTurnover.status)}`}>
              {operationalExcellence.tableTurnover.current.toFixed(1)}x
            </div>
            <div className="text-xs font-normal text-gray-500">
              Target: {operationalExcellence.tableTurnover.target.toFixed(1)}x
            </div>
          </div>

          <div className={`p-3 rounded border ${getStatusBg(operationalExcellence.laborCost.status)}`}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-normal text-gray-600">Labor Cost %</span>
              <span>{getTrendIcon(operationalExcellence.laborCost.trend)}</span>
            </div>
            <div className={`text-xs font-bold ${getStatusColor(operationalExcellence.laborCost.status)}`}>
              {operationalExcellence.laborCost.current.toFixed(1)}%
            </div>
            <div className="text-xs font-normal text-gray-500">
              Target: {operationalExcellence.laborCost.target.toFixed(1)}%
            </div>
          </div>

          <div className={`p-3 rounded border ${getStatusBg(operationalExcellence.foodCost.status)}`}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-normal text-gray-600">Food Cost %</span>
              <span>{getTrendIcon(operationalExcellence.foodCost.trend)}</span>
            </div>
            <div className={`text-xs font-bold ${getStatusColor(operationalExcellence.foodCost.status)}`}>
              {operationalExcellence.foodCost.current.toFixed(1)}%
            </div>
            <div className="text-xs font-normal text-gray-500">
              Target: {operationalExcellence.foodCost.target.toFixed(1)}%
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Growth & Market Position */}
        <div className="col-span-2">
          <div className="bg-card p-4 rounded-lg border">
            <h2 className="text-xs font-bold text-black dark:text-white mb-4">
              📊 Growth & Market Position
            </h2>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className={`p-3 rounded border ${getStatusBg(growthMetrics.customerAcquisition.status)}`}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-normal text-gray-600">New Customers/Day</span>
                  <span>{getTrendIcon(growthMetrics.customerAcquisition.trend)}</span>
                </div>
                <div className={`text-xs font-bold ${getStatusColor(growthMetrics.customerAcquisition.status)}`}>
                  {growthMetrics.customerAcquisition.current}
                </div>
                <div className="text-xs font-normal text-gray-500">
                  Target: {growthMetrics.customerAcquisition.target}
                </div>
              </div>

              <div className={`p-3 rounded border ${getStatusBg(growthMetrics.averageCheck.status)}`}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-normal text-gray-600">Average Check Size</span>
                  <span>{getTrendIcon(growthMetrics.averageCheck.trend)}</span>
                </div>
                <div className={`text-xs font-bold ${getStatusColor(growthMetrics.averageCheck.status)}`}>
                  ₹{growthMetrics.averageCheck.current}
                </div>
                <div className="text-xs font-normal text-gray-500">
                  Target: ₹{growthMetrics.averageCheck.target}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className={`p-3 rounded border ${getStatusBg(growthMetrics.peakEfficiency.status)}`}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-normal text-gray-600">Peak Efficiency</span>
                  <span>{getTrendIcon(growthMetrics.peakEfficiency.trend)}</span>
                </div>
                <div className={`text-xs font-bold ${getStatusColor(growthMetrics.peakEfficiency.status)}`}>
                  {growthMetrics.peakEfficiency.current.toFixed(2)}
                </div>
                <div className="text-xs font-normal text-gray-500">
                  Target: {growthMetrics.peakEfficiency.target.toFixed(2)}
                </div>
              </div>

              <div className="p-3 rounded border bg-blue-50 dark:bg-blue-900/20 border-blue-200">
                <div className="text-xs font-normal text-gray-600 mb-1">Top Performer</div>
                <div className="text-xs font-bold text-blue-700 dark:text-blue-300">
                  {growthMetrics.topLocation.name}
                </div>
                <div className="text-xs font-normal text-gray-500">
                  {growthMetrics.topLocation.performance.toFixed(1)}% vs target
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Risk & Alert Panel */}
        <div className="col-span-1">
          <div className="bg-card p-4 rounded-lg border">
            <h2 className="text-xs font-bold text-black dark:text-white mb-4">
              🚨 Risk & Alerts
            </h2>
            <div className="space-y-3">
              {alerts.map((alert, index) => (
                <div key={index} className={`p-3 rounded border-l-4 ${getAlertColor(alert.type)}`}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-black dark:text-white">
                      {alert.metric}
                    </span>
                    <span className="text-xs font-normal text-gray-500">
                      {alert.location}
                    </span>
                  </div>
                  <div className="text-xs font-normal text-gray-600 mb-1">
                    Current: {alert.value} | Target: {alert.threshold}
                  </div>
                  <div className="text-xs font-normal text-gray-500">
                    {alert.action}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Insights */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🎯 Strategic Insights & Recommendations
        </h2>
        <div className="grid grid-cols-4 gap-4">
          {/* Best Performer */}
          <div className="p-3 rounded border bg-green-50 dark:bg-green-900/20 border-green-200">
            <h3 className="text-xs font-bold text-green-700 dark:text-green-300 mb-2">
              🏆 Best Performer
            </h3>
            <div className="text-xs font-bold text-black dark:text-white">
              {insights.bestPerformer.location}
            </div>
            <div className="text-xs font-normal text-gray-600">
              ₹{insights.bestPerformer.netProfit.toLocaleString('en-IN')} profit
            </div>
            <div className="text-xs font-normal text-gray-600">
              {insights.bestPerformer.margin}% margin
            </div>
            <div className="text-xs font-normal text-gray-500 mt-1">
              {insights.bestPerformer.keySuccess}
            </div>
          </div>

          {/* Top Opportunities */}
          <div className="p-3 rounded border bg-blue-50 dark:bg-blue-900/20 border-blue-200">
            <h3 className="text-xs font-bold text-blue-700 dark:text-blue-300 mb-2">
              💡 Top Opportunities
            </h3>
            <div className="space-y-1">
              {insights.topOpportunities.map((opportunity, index) => (
                <div key={index} className="text-xs font-normal text-gray-600">
                  • {opportunity}
                </div>
              ))}
            </div>
          </div>

          {/* Market Position */}
          <div className="p-3 rounded border bg-purple-50 dark:bg-purple-900/20 border-purple-200">
            <h3 className="text-xs font-bold text-purple-700 dark:text-purple-300 mb-2">
              📈 Market Position
            </h3>
            <div className="text-xs font-bold text-black dark:text-white">
              #{insights.marketPosition.rank} of {insights.marketPosition.totalMarket}
            </div>
            <div className="text-xs font-normal text-gray-600">
              {insights.marketPosition.marketShare}% market share
            </div>
            <div className="text-xs font-normal text-green-600">
              {insights.marketPosition.vsCompetitor} vs nearest competitor
            </div>
          </div>

          {/* 30-Day Projections */}
          <div className="p-3 rounded border bg-orange-50 dark:bg-orange-900/20 border-orange-200">
            <h3 className="text-xs font-bold text-orange-700 dark:text-orange-300 mb-2">
              🔮 30-Day Forecast
            </h3>
            <div className="text-xs font-bold text-black dark:text-white">
              ₹{(insights.projections.revenue30Day/100000).toFixed(1)}L revenue
            </div>
            <div className="text-xs font-normal text-gray-600">
              {insights.projections.growth}% projected growth
            </div>
            <div className="text-xs font-normal text-green-600">
              {insights.projections.confidence} confidence
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-lg border border-gray-200">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          ⚡ Quick Actions
        </h2>
        <div className="grid grid-cols-5 gap-3">
          <button className="p-2 bg-blue-600 text-white rounded text-xs font-normal hover:bg-blue-700 transition-colors">
            View Full P&L
          </button>
          <button className="p-2 bg-green-600 text-white rounded text-xs font-normal hover:bg-green-700 transition-colors">
            Location Comparison
          </button>
          <button className="p-2 bg-yellow-600 text-white rounded text-xs font-normal hover:bg-yellow-700 transition-colors">
            Generate Report
          </button>
          <button className="p-2 bg-purple-600 text-white rounded text-xs font-normal hover:bg-purple-700 transition-colors">
            Schedule Review
          </button>
          <button className="p-2 bg-red-600 text-white rounded text-xs font-normal hover:bg-red-700 transition-colors">
            Emergency Protocol
          </button>
        </div>
      </div>
    </div>
  )
}