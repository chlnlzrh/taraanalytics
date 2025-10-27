import { RESTAURANTS } from '@/lib/restaurant-data'

export default function ComplaintResolutionTimeKPI() {
  const resolutionData = [
    {
      restaurant: RESTAURANTS[0],
      totalComplaints: 18,
      avgResolutionTime: 2.3,
      resolutionBreakdown: {
        immediate: 6,
        within24h: 8,
        within48h: 3,
        over48h: 1
      }
    },
    {
      restaurant: RESTAURANTS[1],
      totalComplaints: 28,
      avgResolutionTime: 3.1,
      resolutionBreakdown: {
        immediate: 7,
        within24h: 12,
        within48h: 6,
        over48h: 3
      }
    },
    {
      restaurant: RESTAURANTS[2],
      totalComplaints: 35,
      avgResolutionTime: 4.2,
      resolutionBreakdown: {
        immediate: 8,
        within24h: 14,
        within48h: 9,
        over48h: 4
      }
    }
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Complaint Resolution Time
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            CUS_013 - Customer Acquisition, Experience & Retention
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {resolutionData.map((location, index) => (
          <div key={index} className="border rounded-lg p-4">
            <h3 className="text-xs font-bold mb-2">{location.restaurant.name}</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span>Total Complaints:</span>
                <span>{location.totalComplaints}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Immediate:</span>
                <span>{location.resolutionBreakdown.immediate}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Within 24h:</span>
                <span>{location.resolutionBreakdown.within24h}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Within 48h:</span>
                <span>{location.resolutionBreakdown.within48h}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Over 48h:</span>
                <span>{location.resolutionBreakdown.over48h}</span>
              </div>
              <div className="flex justify-between text-xs font-bold border-t pt-2">
                <span>Avg Resolution:</span>
                <span>{location.avgResolutionTime} hours</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}