export default function Settings() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xs font-bold text-black dark:text-white">
          Settings & Configuration
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Data Configuration */}
        <div className="bg-card p-4 rounded-lg border">
          <h2 className="text-xs font-bold text-black dark:text-white mb-4">
            Data Configuration & Sync
          </h2>
          <div className="space-y-4">
            <div>
              <label className="text-xs font-normal text-gray-500 block mb-1">PetPooja API Status</label>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-xs font-normal text-green-600">Connected</span>
              </div>
            </div>
            
            <div>
              <label className="text-xs font-normal text-gray-500 block mb-1">Sync Frequency</label>
              <select className="w-full p-2 text-xs border rounded">
                <option>Real-time</option>
                <option>Every 5 minutes</option>
                <option>Every 15 minutes</option>
                <option>Hourly</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-normal text-gray-500 block mb-1">Data Retention</label>
              <select className="w-full p-2 text-xs border rounded">
                <option>12 months</option>
                <option>24 months</option>
                <option>36 months</option>
                <option>Unlimited</option>
              </select>
            </div>
          </div>
        </div>

        {/* KPI Definitions */}
        <div className="bg-card p-4 rounded-lg border">
          <h2 className="text-xs font-bold text-black dark:text-white mb-4">
            KPI Definitions & Formulas
          </h2>
          <div className="space-y-3">
            {[
              { kpi: 'Prime Cost %', formula: '(COGS + Labor) ÷ Revenue × 100' },
              { kpi: 'Food Cost %', formula: 'Food COGS ÷ Food Revenue × 100' },
              { kpi: 'RevPASH', formula: 'Revenue ÷ (Seats × Hours)' },
              { kpi: 'Table Turnover', formula: 'Covers ÷ Tables ÷ Service Hours' }
            ].map((item) => (
              <div key={item.kpi} className="p-2 rounded border">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-black dark:text-white">{item.kpi}</span>
                  <button className="text-xs font-normal text-blue-600 hover:text-blue-800">
                    Edit
                  </button>
                </div>
                <span className="text-xs font-normal text-gray-500">{item.formula}</span>
              </div>
            ))}
          </div>
        </div>

        {/* User Access & Permissions */}
        <div className="bg-card p-4 rounded-lg border">
          <h2 className="text-xs font-bold text-black dark:text-white mb-4">
            User Access & Permissions
          </h2>
          <div className="space-y-3">
            {[
              { role: 'Chain Owner', users: 2, permissions: 'Full Access' },
              { role: 'Location Manager', users: 3, permissions: 'Location-specific data' },
              { role: 'Finance Team', users: 3, permissions: 'Financial metrics only' },
              { role: 'Operations', users: 4, permissions: 'Operational metrics only' }
            ].map((role) => (
              <div key={role.role} className="p-2 rounded border">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-bold text-black dark:text-white">{role.role}</span>
                  <button className="text-xs font-normal text-blue-600 hover:text-blue-800">
                    Manage
                  </button>
                </div>
                <div className="flex justify-between text-xs font-normal text-gray-500">
                  <span>{role.users} users</span>
                  <span>{role.permissions}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Threshold Configuration */}
        <div className="bg-card p-4 rounded-lg border">
          <h2 className="text-xs font-bold text-black dark:text-white mb-4">
            Alert Thresholds (Red/Yellow/Green)
          </h2>
          <div className="space-y-3">
            {[
              { metric: 'Prime Cost %', green: '< 58%', yellow: '58-60%', red: '> 60%' },
              { metric: 'Food Waste %', green: '< 5%', yellow: '5-8%', red: '> 8%' },
              { metric: 'Customer Rating', green: '> 4.5', yellow: '4.0-4.5', red: '< 4.0' },
              { metric: 'Labor Turnover %', green: '< 30%', yellow: '30-45%', red: '> 45%' }
            ].map((threshold) => (
              <div key={threshold.metric} className="p-2 rounded border">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-black dark:text-white">{threshold.metric}</span>
                  <button className="text-xs font-normal text-blue-600 hover:text-blue-800">
                    Edit
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="font-normal text-gray-500">{threshold.green}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                    <span className="font-normal text-gray-500">{threshold.yellow}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    <span className="font-normal text-gray-500">{threshold.red}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}