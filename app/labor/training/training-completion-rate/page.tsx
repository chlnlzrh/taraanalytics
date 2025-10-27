import { RESTAURANTS } from '@/lib/restaurant-data'

export default function TrainingCompletionRateKPI() {
  // LAB_011 Training Completion Rate % - Exact specifications from restaurant_kpi_metrics_127.txt
  const trainingCompletionData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      totalEmployees: 22,
      employeesCompletedTraining: 21, // Nearly all completed
      completionRate: 95.5, // (21/22) × 100
      foodSafetyCompletion: 100.0, // Mandatory 100%
      posTrainingCompletion: 95.5,
      sopTrainingCompletion: 90.9,
      softSkillsCompletion: 86.4,
      overdue: 1, // 1 employee overdue
      status: 'excellent' // >95% target
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      totalEmployees: 20,
      employeesCompletedTraining: 18,
      completionRate: 90.0,
      foodSafetyCompletion: 95.0, // Below mandatory requirement
      posTrainingCompletion: 85.0,
      sopTrainingCompletion: 90.0,
      softSkillsCompletion: 70.0,
      overdue: 2,
      status: 'warning' // 90-95% warning
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      totalEmployees: 24,
      employeesCompletedTraining: 19,
      completionRate: 79.2,
      foodSafetyCompletion: 83.3, // Critical - below compliance
      posTrainingCompletion: 75.0,
      sopTrainingCompletion: 79.2,
      softSkillsCompletion: 58.3,
      overdue: 5,
      status: 'critical' // <90% critical
    }
  ]

  const chainAverage = trainingCompletionData.reduce((sum, item) => sum + item.completionRate, 0) / trainingCompletionData.length

  const getStatusColor = (completionRate: number) => {
    if (completionRate >= 95) return 'text-green-600'
    if (completionRate >= 90) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (completionRate: number) => {
    if (completionRate >= 95) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (completionRate >= 90) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getStatusIcon = (completionRate: number) => {
    if (completionRate >= 95) return '✅'
    if (completionRate >= 90) return '⚠️'
    return '🚨'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Training Completion Rate % Analysis
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: LAB_011 | Below 90% Indicates HR Execution Gaps and Compliance Risk
          </p>
        </div>
      </div>

      {/* Definition & Formula Card */}
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200">
        <h2 className="text-xs font-bold text-blue-900 dark:text-blue-300 mb-2">
          📊 Definition & Formula
        </h2>
        <div className="space-y-2">
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Formula:</strong> (Employees completing required training ÷ Total employees) × 100
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Percentage of staff completing mandatory training modules (food safety, POS, SOP, etc.).
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> Target &gt;95%; &lt;90% indicates gaps in HR execution and compliance risk.
          </p>
        </div>
      </div>

      {/* Alert Thresholds */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🎯 Target Ranges & Alert Thresholds
        </h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded border border-green-200">
            <div className="text-xs font-bold text-green-700 dark:text-green-300">TARGET</div>
            <div className="text-xs font-normal text-green-600">&gt;95%</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">90–95%</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&lt;90%</div>
          </div>
        </div>
      </div>

      {/* Chain Summary */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          📈 Chain Performance Summary
        </h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <span className="text-xs font-normal text-gray-500">Chain Average Completion</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getStatusColor(chainAverage)}`}>
                {chainAverage.toFixed(1)}%
              </span>
              <span>{getStatusIcon(chainAverage)}</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Performance Status</span>
            <div className="text-xs font-normal text-red-600">
              🚨 One location critical; compliance risk identified
            </div>
          </div>
        </div>
      </div>

      {/* Location Ranking & Heatmap */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Ranking by Training Completion Rate
        </h2>
        <div className="space-y-3">
          {trainingCompletionData
            .sort((a, b) => b.completionRate - a.completionRate)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.completionRate)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span>{getStatusIcon(location.completionRate)}</span>
                </div>
                <span className={`text-xs font-bold ${getStatusColor(location.completionRate)}`}>
                  {location.completionRate.toFixed(1)}%
                </span>
              </div>
              
              {/* Training Module Breakdown */}
              <div className="grid grid-cols-5 gap-4 text-xs mb-2">
                <div>
                  <span className="text-gray-500">Food Safety:</span>
                  <div className={`font-normal ${location.foodSafetyCompletion < 100 ? 'text-red-600' : 'text-black dark:text-white'}`}>
                    {location.foodSafetyCompletion.toFixed(1)}%
                  </div>
                </div>
                <div>
                  <span className="text-gray-500">POS Training:</span>
                  <div className="font-normal text-black dark:text-white">{location.posTrainingCompletion.toFixed(1)}%</div>
                </div>
                <div>
                  <span className="text-gray-500">SOP Training:</span>
                  <div className="font-normal text-black dark:text-white">{location.sopTrainingCompletion.toFixed(1)}%</div>
                </div>
                <div>
                  <span className="text-gray-500">Soft Skills:</span>
                  <div className="font-normal text-black dark:text-white">{location.softSkillsCompletion.toFixed(1)}%</div>
                </div>
                <div>
                  <span className="text-gray-500">Overdue:</span>
                  <div className={`font-normal ${location.overdue > 0 ? 'text-red-600' : 'text-black dark:text-white'}`}>
                    {location.overdue} employees
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Data Sources & Refresh */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🔄 Data Sources & Refresh Schedule
        </h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Data Sources:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Training system/LMS</li>
              <li>• HRIS completion tracking</li>
              <li>• Compliance management system</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Monthly refresh</li>
              <li>• Red alert if &lt;90%</li>
              <li>• Drill down by module, location, role</li>
            </ul>
          </div>
        </div>
      </div>

      {/* India-Specific Considerations */}
      <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200">
        <h2 className="text-xs font-bold text-orange-900 dark:text-orange-300 mb-2">
          🇮🇳 India-Specific Monitoring
        </h2>
        <div className="space-y-1">
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • FSSAI training mandatory; document completion for audit
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Include local language training modules for better comprehension
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Track certification renewals and expiry dates
          </p>
        </div>
      </div>

      {/* Users & Access */}
      <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-lg border border-gray-200">
        <h2 className="text-xs font-bold text-black dark:text-white mb-2">
          👥 Authorized Users
        </h2>
        <p className="text-xs font-normal text-gray-500">
          HR, Manager
        </p>
      </div>
    </div>
  )
}