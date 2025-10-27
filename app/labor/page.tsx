import Link from 'next/link'

export default function LaborPage() {
  const laborKPIs = [
    {
      category: 'Labor Cost & Productivity',
      description: 'Monitor labor costs, productivity metrics, and operational efficiency',
      kpis: [
        {
          id: 'LAB_001',
          title: 'Labor Cost %',
          description: 'Labor costs (all payroll components) as percentage of revenue',
          path: '/labor/cost-control/labor-cost-percent',
          status: 'critical',
          value: '31.4%',
          target: '28-32%'
        },
        {
          id: 'LAB_002',
          title: 'Revenue per Labor Hour',
          description: 'Revenue generated per labor hour worked',
          path: '/labor/cost-control/revenue-per-labor-hour',
          status: 'warning',
          value: '₹766',
          target: '₹800-₹1,500'
        },
        {
          id: 'LAB_003',
          title: 'Covers per Labor Hour',
          description: 'Number of customers served per labor hour',
          path: '/labor/cost-control/covers-per-labor-hour',
          status: 'good',
          value: '7.9',
          target: '8-15 covers/hour'
        }
      ]
    },
    {
      category: 'Workforce Stability & Engagement',
      description: 'Track employee retention, attendance, and engagement metrics',
      kpis: [
        {
          id: 'LAB_004',
          title: 'Employee Turnover Rate %',
          description: 'Annual percentage of staff leaving the organization',
          path: '/labor/retention/employee-turnover-rate',
          status: 'warning',
          value: '41.3%',
          target: '<40% annual'
        },
        {
          id: 'LAB_005',
          title: 'Average Tenure',
          description: 'Average months of service across all employees',
          path: '/labor/retention/average-tenure',
          status: 'good',
          value: '19.8 months',
          target: '>18 months'
        },
        {
          id: 'LAB_006',
          title: 'Absenteeism Rate %',
          description: 'Percentage of scheduled shifts missed',
          path: '/labor/retention/absenteeism-rate',
          status: 'warning',
          value: '3.4%',
          target: '<2%'
        },
        {
          id: 'LAB_007',
          title: 'Shift Coverage %',
          description: 'Percentage of scheduled shifts actually filled',
          path: '/labor/productivity/shift-coverage',
          status: 'warning',
          value: '93.2%',
          target: '>95%'
        }
      ]
    },
    {
      category: 'Staffing & Training',
      description: 'Monitor staffing ratios, training effectiveness, and compliance',
      kpis: [
        {
          id: 'LAB_008',
          title: 'Staff-to-Customer Ratio (Peak)',
          description: 'Service staff to customer ratio during peak hours',
          path: '/labor/productivity/staff-customer-ratio',
          status: 'warning',
          value: '1:6.8',
          target: '1:4 to 1:6'
        },
        {
          id: 'LAB_009',
          title: 'Manager-to-Staff Ratio',
          description: 'Ratio of supervisory to operational staff',
          path: '/labor/productivity/manager-staff-ratio',
          status: 'good',
          value: '1:6.8',
          target: '1:5 to 1:8'
        },
        {
          id: 'LAB_010',
          title: 'Training Hours per Employee',
          description: 'Monthly training investment per employee',
          path: '/labor/training/training-hours-per-employee',
          status: 'warning',
          value: '3.9 hrs',
          target: '4-8 hours/month'
        },
        {
          id: 'LAB_011',
          title: 'Training Completion Rate %',
          description: 'Percentage completing mandatory training modules',
          path: '/labor/training/training-completion-rate',
          status: 'warning',
          value: '88.2%',
          target: '>95%'
        },
        {
          id: 'LAB_012',
          title: 'Food Safety Certification Rate',
          description: 'Kitchen staff with FSSAI certification',
          path: '/labor/training/food-safety-certification',
          status: 'warning',
          value: '89.5%',
          target: '100%'
        }
      ]
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent':
      case 'good':
        return 'text-green-600 bg-green-50 dark:bg-green-900/20'
      case 'warning':
        return 'text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20'
      case 'critical':
        return 'text-red-600 bg-red-50 dark:bg-red-900/20'
      default:
        return 'text-gray-600 bg-gray-50 dark:bg-gray-900/20'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'excellent':
      case 'good':
        return '✅'
      case 'warning':
        return '⚠️'
      case 'critical':
        return '🚨'
      default:
        return '📊'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-xs font-bold text-black dark:text-white">
          Labor Management Dashboard
        </h1>
        <p className="text-xs font-normal text-gray-500 mt-1">
          Comprehensive workforce analytics and labor productivity metrics
        </p>
      </div>

      {/* Chain Overview */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          📈 Chain Performance Overview
        </h2>
        <div className="grid grid-cols-4 gap-4">
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL ALERTS</div>
            <div className="text-xs font-normal text-red-600">2 locations</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING ALERTS</div>
            <div className="text-xs font-normal text-yellow-600">8 KPIs</div>
          </div>
          <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200">
            <div className="text-xs font-bold text-blue-700 dark:text-blue-300">TOTAL EMPLOYEES</div>
            <div className="text-xs font-normal text-blue-600">66 staff</div>
          </div>
          <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded border border-green-200">
            <div className="text-xs font-bold text-green-700 dark:text-green-300">CHAIN LABOR COST</div>
            <div className="text-xs font-normal text-green-600">31.4%</div>
          </div>
        </div>
      </div>

      {/* KPI Categories */}
      {laborKPIs.map((category) => (
        <div key={category.category} className="bg-card p-4 rounded-lg border">
          <h2 className="text-xs font-bold text-black dark:text-white mb-2">
            {category.category}
          </h2>
          <p className="text-xs font-normal text-gray-500 mb-4">
            {category.description}
          </p>
          
          <div className="grid grid-cols-1 gap-3">
            {category.kpis.map((kpi) => (
              <Link
                key={kpi.id}
                href={kpi.path}
                className="block p-3 rounded border hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-normal text-gray-500">{kpi.id}</span>
                    <span className="text-xs font-bold text-black dark:text-white">
                      {kpi.title}
                    </span>
                    <span className={`text-xs font-normal px-2 py-1 rounded ${getStatusColor(kpi.status)}`}>
                      {getStatusIcon(kpi.status)} {kpi.status.toUpperCase()}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-bold text-black dark:text-white">{kpi.value}</div>
                    <div className="text-xs font-normal text-gray-500">Target: {kpi.target}</div>
                  </div>
                </div>
                <p className="text-xs font-normal text-gray-500 mt-1">
                  {kpi.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      ))}

      {/* Key Insights */}
      <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200">
        <h2 className="text-xs font-bold text-orange-900 dark:text-orange-300 mb-2">
          🎯 Key Labor Management Insights
        </h2>
        <div className="space-y-1">
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Shahpur Jat location shows critical labor cost (35.3%) and low productivity - immediate intervention needed
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Training completion rates below target across chain - compliance risk for FSSAI certification
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Gurugram showing high turnover (50%) - retention strategies required
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Strong tenure metrics (19.8 months average) indicate good core team retention
          </p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-lg border border-gray-200">
        <h2 className="text-xs font-bold text-black dark:text-white mb-2">
          ⚡ Recommended Actions
        </h2>
        <div className="space-y-1">
          <p className="text-xs font-normal text-gray-500">
            1. Review Shahpur Jat staffing levels and productivity processes
          </p>
          <p className="text-xs font-normal text-gray-500">
            2. Implement mandatory training completion tracking system
          </p>
          <p className="text-xs font-normal text-gray-500">
            3. Develop retention program for Gurugram location
          </p>
          <p className="text-xs font-normal text-gray-500">
            4. Schedule FSSAI certification renewals for expiring staff
          </p>
        </div>
      </div>
    </div>
  )
}