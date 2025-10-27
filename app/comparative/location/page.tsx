export default function LocationPerformance() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xs font-bold text-black dark:text-white">
          Location Performance Variance
        </h1>
      </div>

      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          Prime Cost % Ranking by Location
        </h2>
        <div className="space-y-3">
          {[
            { location: 'Sector 29', primeCost: '54.2%', status: 'excellent' },
            { location: 'Gurugram Central', primeCost: '55.8%', status: 'good' },
            { location: 'DLF Phase 1', primeCost: '57.1%', status: 'good' },
            { location: 'Golf Course Road', primeCost: '58.9%', status: 'warning' },
            { location: 'Cyber City', primeCost: '59.4%', status: 'warning' },
            { location: 'MG Road', primeCost: '61.2%', status: 'critical' }
          ].map((location, index) => (
            <div key={location.location} className="flex items-center justify-between p-2 rounded border">
              <div className="flex items-center gap-3">
                <span className="text-xs font-normal text-gray-500">#{index + 1}</span>
                <span className="text-xs font-normal text-black dark:text-white">{location.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-normal text-black dark:text-white">{location.primeCost}</span>
                <div className={`w-2 h-2 rounded-full ${
                  location.status === 'excellent' ? 'bg-green-500' :
                  location.status === 'good' ? 'bg-green-400' :
                  location.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                }`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card p-4 rounded-lg border">
          <h2 className="text-xs font-bold text-black dark:text-white mb-4">
            Revenue Variance Analysis
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Chain Average</span>
              <span className="text-xs font-normal text-black dark:text-white">₹2,08,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Top Performer</span>
              <span className="text-xs font-normal text-green-600">+18.4%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Lowest Performer</span>
              <span className="text-xs font-normal text-red-600">-12.6%</span>
            </div>
          </div>
        </div>

        <div className="bg-card p-4 rounded-lg border">
          <h2 className="text-xs font-bold text-black dark:text-white mb-4">
            Customer Satisfaction Spread
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Highest Rating</span>
              <span className="text-xs font-normal text-green-600">4.8/5</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Lowest Rating</span>
              <span className="text-xs font-normal text-yellow-600">4.2/5</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-normal text-gray-500">Variance</span>
              <span className="text-xs font-normal text-black dark:text-white">0.6 stars</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}