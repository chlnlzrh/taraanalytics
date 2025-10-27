import { BarChart3, DollarSign, Users, TrendingUp } from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xs font-bold text-black dark:text-white">
          Executive Dashboard
        </h1>
      </div>

      {/* Executive Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-card p-4 rounded-lg border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-normal text-gray-500">Total Revenue</p>
              <p className="text-xs font-bold text-black dark:text-white">₹12,45,000</p>
            </div>
            <DollarSign className="h-4 w-4 text-green-600" />
          </div>
        </div>

        <div className="bg-card p-4 rounded-lg border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-normal text-gray-500">Prime Cost %</p>
              <p className="text-xs font-bold text-black dark:text-white">56.2%</p>
            </div>
            <BarChart3 className="h-4 w-4 text-blue-600" />
          </div>
        </div>

        <div className="bg-card p-4 rounded-lg border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-normal text-gray-500">Customer Satisfaction</p>
              <p className="text-xs font-bold text-black dark:text-white">4.7/5</p>
            </div>
            <Users className="h-4 w-4 text-purple-600" />
          </div>
        </div>

        <div className="bg-card p-4 rounded-lg border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-normal text-gray-500">EBITDA Margin</p>
              <p className="text-xs font-bold text-black dark:text-white">16.8%</p>
            </div>
            <TrendingUp className="h-4 w-4 text-orange-600" />
          </div>
        </div>
      </div>

      {/* Location Selector */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          Location Performance Overview
        </h2>
        <div className="space-y-2">
          {[
            { name: 'The Potbelly (Chanakyapuri)', revenue: '₹4,85,000', status: 'green' },
            { name: 'The Potbelly Divine (Gurugram)', revenue: '₹3,95,000', status: 'green' },
            { name: 'The Potbelly Rooftop (Shahpur Jat)', revenue: '₹3,65,000', status: 'yellow' }
          ].map((location, index) => (
            <div key={location.name} className="flex items-center justify-between p-2 rounded border">
              <span className="text-xs font-normal text-gray-500">{location.name}</span>
              <div className="flex items-center gap-4">
                <span className="text-xs font-normal">{location.revenue}</span>
                <div className={`w-2 h-2 rounded-full ${
                  location.status === 'green' ? 'bg-green-500' : 
                  location.status === 'yellow' ? 'bg-yellow-500' : 'bg-red-500'
                }`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Real-time Alerts */}
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-xs font-bold text-black dark:text-white mb-4">
          Real-time Alerts & Anomalies
        </h2>
        <div className="space-y-2">
          <div className="flex items-center gap-2 p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="w-2 h-2 bg-yellow-500 rounded-full" />
            <span className="text-xs font-normal text-yellow-700 dark:text-yellow-300">
              Food waste at Shahpur Jat location: 6.2% (above 5% target)
            </span>
          </div>
          <div className="flex items-center gap-2 p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
            <div className="w-2 h-2 bg-yellow-500 rounded-full" />
            <span className="text-xs font-normal text-yellow-700 dark:text-yellow-300">
              Labor cost variance at Gurugram location: +2.8% from target
            </span>
          </div>
          <div className="flex items-center gap-2 p-2 bg-green-50 dark:bg-green-900/20 rounded border border-green-200">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span className="text-xs font-normal text-green-700 dark:text-green-300">
              All locations meeting food safety compliance standards
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}