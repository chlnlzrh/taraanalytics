import { RESTAURANTS } from '@/lib/restaurant-data'

export default function TrainingHoursPerEmployeeKPI() {
  // LAB_010 Training Hours per Employee - Exact specifications from restaurant_kpi_metrics_127.txt
  const trainingHoursData = [
    {
      restaurant: RESTAURANTS[0], // Chanakyapuri
      totalEmployees: 22,
      totalTrainingHours: 154, // Total training hours for month
      trainingHoursPerEmployee: 7.0, // 154/22
      foodSafetyHours: 44, // FSSAI required training
      posTrainingHours: 32,
      sopTrainingHours: 48,
      softSkillsHours: 30,
      averageParticipation: 95.5, // % participation rate
      status: 'excellent' // 4-8 hours/month target
    },
    {
      restaurant: RESTAURANTS[1], // Gurugram
      totalEmployees: 20,
      totalTrainingHours: 64,
      trainingHoursPerEmployee: 3.2,
      foodSafetyHours: 24,
      posTrainingHours: 16,
      sopTrainingHours: 20,
      softSkillsHours: 4,
      averageParticipation: 80.0,
      status: 'warning' // 2-4 hours/month warning
    },
    {
      restaurant: RESTAURANTS[2], // Shahpur Jat
      totalEmployees: 24,
      totalTrainingHours: 36,
      trainingHoursPerEmployee: 1.5,
      foodSafetyHours: 18,
      posTrainingHours: 8,
      sopTrainingHours: 8,
      softSkillsHours: 2,
      averageParticipation: 62.5,
      status: 'critical' // <2 hours/month critical
    }
  ]

  const chainAverage = trainingHoursData.reduce((sum, item) => sum + item.trainingHoursPerEmployee, 0) / trainingHoursData.length

  const getStatusColor = (hours: number) => {
    if (hours >= 4 && hours <= 8) return 'text-green-600'
    if (hours >= 2) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getStatusBg = (hours: number) => {
    if (hours >= 4 && hours <= 8) return 'bg-green-50 dark:bg-green-900/20 border-green-200'
    if (hours >= 2) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200'
    return 'bg-red-50 dark:bg-red-900/20 border-red-200'
  }

  const getStatusIcon = (hours: number) => {
    if (hours >= 4 && hours <= 8) return '✅'
    if (hours >= 2) return '⚠️'
    return '🚨'
  }

  return (
    <div className="space-y-6">
      {/* Header with KPI ID */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Training Hours per Employee Analysis
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            KPI ID: LAB_010 | Low Training Correlates with High Turnover and Quality Issues
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
            <strong>Formula:</strong> Total training hours per employee per month or quarter
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Definition:</strong> Investment in employee capability. Target 4–8 hours/month.
          </p>
          <p className="text-xs font-normal text-blue-800 dark:text-blue-300">
            <strong>Why Critical:</strong> Low training correlates with high turnover and quality issues.
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
            <div className="text-xs font-normal text-green-600">4–8 hours/month</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="text-xs font-bold text-yellow-700 dark:text-yellow-300">WARNING</div>
            <div className="text-xs font-normal text-yellow-600">2–4 hours/month</div>
          </div>
          <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
            <div className="text-xs font-bold text-red-700 dark:text-red-300">CRITICAL</div>
            <div className="text-xs font-normal text-red-600">&lt;2 hours/month</div>
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
            <span className="text-xs font-normal text-gray-500">Chain Average Training Hours</span>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${getStatusColor(chainAverage)}`}>
                {chainAverage.toFixed(1)} hrs/employee
              </span>
              <span>{getStatusIcon(chainAverage)}</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal text-gray-500">Performance Status</span>
            <div className="text-xs font-normal text-red-600">
              🚨 One location critical; significant training gaps
            </div>
          </div>
        </div>
      </div>

      {/* Location Ranking & Heatmap */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          🏆 Location Ranking by Training Hours per Employee
        </h2>
        <div className="space-y-3">
          {trainingHoursData
            .sort((a, b) => b.trainingHoursPerEmployee - a.trainingHoursPerEmployee)
            .map((location, index) => (
            <div key={location.restaurant.id} className={`p-3 rounded border ${getStatusBg(location.trainingHoursPerEmployee)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {location.restaurant.fullName}
                  </span>
                  <span>{getStatusIcon(location.trainingHoursPerEmployee)}</span>
                </div>
                <span className={`text-xs font-bold ${getStatusColor(location.trainingHoursPerEmployee)}`}>
                  {location.trainingHoursPerEmployee.toFixed(1)} hrs
                </span>
              </div>
              
              {/* Training Breakdown */}
              <div className="grid grid-cols-5 gap-4 text-xs mb-2">
                <div>
                  <span className="text-gray-500">Food Safety:</span>
                  <div className="font-normal text-black dark:text-white">{location.foodSafetyHours}h</div>
                </div>
                <div>
                  <span className="text-gray-500">POS Training:</span>
                  <div className="font-normal text-black dark:text-white">{location.posTrainingHours}h</div>
                </div>
                <div>
                  <span className="text-gray-500">SOP Training:</span>
                  <div className="font-normal text-black dark:text-white">{location.sopTrainingHours}h</div>
                </div>
                <div>
                  <span className="text-gray-500">Soft Skills:</span>
                  <div className="font-normal text-black dark:text-white">{location.softSkillsHours}h</div>
                </div>
                <div>
                  <span className="text-gray-500">Participation:</span>
                  <div className="font-normal text-black dark:text-white">{location.averageParticipation.toFixed(1)}%</div>
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
              <li>• Training log (manual or LMS)</li>
              <li>• HRIS training records</li>
              <li>• Learning management system</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-black dark:text-white">Refresh Schedule:</h3>
            <ul className="text-xs font-normal text-gray-500 space-y-1">
              <li>• Monthly refresh</li>
              <li>• Red alert if &lt;2 hours/month</li>
              <li>• Drill down by employee, location, training type</li>
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
            • Food safety training mandatory; FSSAI certification required for kitchen staff
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Include language training for better customer communication
          </p>
          <p className="text-xs font-normal text-orange-800 dark:text-orange-300">
            • Cultural sensitivity training for diverse customer base
          </p>
        </div>
      </div>

      {/* Users & Access */}
      <div className="bg-gray-50 dark:bg-gray-900/20 p-4 rounded-lg border border-gray-200">
        <h2 className="text-xs font-bold text-black dark:text-white mb-2">
          👥 Authorized Users
        </h2>
        <p className="text-xs font-normal text-gray-500">
          Manager, HR
        </p>
      </div>
    </div>
  )
}