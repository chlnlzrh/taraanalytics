export default function Reports() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xs font-bold text-black dark:text-white">
          Reports & Analytics
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pre-built Reports */}
        <div className="bg-card p-4 rounded-lg border">
          <h2 className="text-xs font-bold text-black dark:text-white mb-4">
            Pre-built Report Templates
          </h2>
          <div className="space-y-3">
            {[
              'Daily Operations Summary',
              'Weekly Financial Performance',
              'Monthly KPI Dashboard',
              'Location Comparison Report',
              'Food Cost Analysis',
              'Labor Productivity Report',
              'Customer Satisfaction Trends',
              'Compliance Status Report'
            ].map((report) => (
              <div key={report} className="flex items-center justify-between p-2 rounded border">
                <span className="text-xs font-normal text-gray-500">{report}</span>
                <button className="text-xs font-normal text-blue-600 hover:text-blue-800">
                  Generate
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Report Builder */}
        <div className="bg-card p-4 rounded-lg border">
          <h2 className="text-xs font-bold text-black dark:text-white mb-4">
            Custom Report Builder
          </h2>
          <div className="space-y-4">
            <div>
              <label className="text-xs font-normal text-gray-500 block mb-1">Date Range</label>
              <select className="w-full p-2 text-xs border rounded">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
                <option>Custom Range</option>
              </select>
            </div>
            
            <div>
              <label className="text-xs font-normal text-gray-500 block mb-1">Locations</label>
              <select className="w-full p-2 text-xs border rounded">
                <option>All Locations</option>
                <option>Gurugram Central</option>
                <option>Sector 29</option>
                <option>Cyber City</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-normal text-gray-500 block mb-1">Metrics</label>
              <div className="space-y-2">
                {['Revenue', 'Prime Cost %', 'Customer Satisfaction', 'Food Cost %'].map((metric) => (
                  <label key={metric} className="flex items-center gap-2">
                    <input type="checkbox" className="text-xs" />
                    <span className="text-xs font-normal text-gray-500">{metric}</span>
                  </label>
                ))}
              </div>
            </div>

            <button className="w-full p-2 bg-blue-600 text-white text-xs rounded hover:bg-blue-700">
              Generate Custom Report
            </button>
          </div>
        </div>
      </div>

      {/* Scheduled Exports */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          Scheduled Exports
        </h2>
        <div className="space-y-3">
          {[
            { name: 'Daily Summary Email', frequency: 'Daily at 9:00 AM', format: 'PDF', recipients: 'management@restaurant.com' },
            { name: 'Weekly KPI Report', frequency: 'Monday at 8:00 AM', format: 'Excel', recipients: 'cfo@restaurant.com' },
            { name: 'Monthly Financial Report', frequency: '1st of month', format: 'PDF', recipients: 'board@restaurant.com' }
          ].map((export_item) => (
            <div key={export_item.name} className="p-3 rounded border">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-black dark:text-white">{export_item.name}</span>
                <button className="text-xs font-normal text-red-600 hover:text-red-800">
                  Disable
                </button>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <span className="text-xs font-normal text-gray-500">Frequency</span>
                  <p className="text-xs font-normal text-black dark:text-white">{export_item.frequency}</p>
                </div>
                <div>
                  <span className="text-xs font-normal text-gray-500">Format</span>
                  <p className="text-xs font-normal text-black dark:text-white">{export_item.format}</p>
                </div>
                <div>
                  <span className="text-xs font-normal text-gray-500">Recipients</span>
                  <p className="text-xs font-normal text-black dark:text-white">{export_item.recipients}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}