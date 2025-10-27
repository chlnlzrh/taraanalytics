import { RESTAURANTS } from '@/lib/restaurant-data'

export default function WaitTimeWalkInsKPI() {
  const waitTimeData = [
    {
      restaurant: RESTAURANTS[0],
      avgWaitTime: 12.3,
      peakHourWaitTime: 18.5,
      totalWalkIns: 1456,
      waitTimeBreakdown: {
        under5min: 421,
        min5to10: 567,
        min10to15: 312,
        min15to20: 123,
        over20min: 33
      },
      satisfactionScore: 4.2
    },
    {
      restaurant: RESTAURANTS[1],
      avgWaitTime: 15.7,
      peakHourWaitTime: 22.4,
      totalWalkIns: 1234,
      waitTimeBreakdown: {
        under5min: 297,
        min5to10: 445,
        min10to15: 356,
        min15to20: 101,
        over20min: 35
      },
      satisfactionScore: 3.9
    },
    {
      restaurant: RESTAURANTS[2],
      avgWaitTime: 18.9,
      peakHourWaitTime: 26.8,
      totalWalkIns: 987,
      waitTimeBreakdown: {
        under5min: 198,
        min5to10: 345,
        min10to15: 267,
        min15to20: 134,
        over20min: 43
      },
      satisfactionScore: 3.6
    }
  ]

  const getWaitTimeColor = (time: number) => {
    if (time <= 10) return 'text-green-600'
    if (time <= 15) return 'text-yellow-600'
    return 'text-red-600'
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Wait Time for Walk-ins (minutes)
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            CUS_004 - Customer Acquisition, Experience & Retention
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {waitTimeData.map((location, index) => (
          <div key={index} className="border rounded-lg p-4">
            <h3 className="text-xs font-bold mb-2">{location.restaurant.name}</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span>Total Walk-ins:</span>
                <span>{location.totalWalkIns.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Peak Hour Wait:</span>
                <span>{location.peakHourWaitTime} min</span>
              </div>
              <div className="text-xs font-medium mt-2 mb-1">Wait Time Distribution:</div>
              <div className="flex justify-between text-xs">
                <span>Under 5 min:</span>
                <span>{location.waitTimeBreakdown.under5min}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>5-10 min:</span>
                <span>{location.waitTimeBreakdown.min5to10}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>10-15 min:</span>
                <span>{location.waitTimeBreakdown.min10to15}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>15-20 min:</span>
                <span>{location.waitTimeBreakdown.min15to20}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Over 20 min:</span>
                <span>{location.waitTimeBreakdown.over20min}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Satisfaction:</span>
                <span>{location.satisfactionScore}/5</span>
              </div>
              <div className="flex justify-between text-xs font-bold border-t pt-2">
                <span>Avg Wait Time:</span>
                <span className={getWaitTimeColor(location.avgWaitTime)}>{location.avgWaitTime} min</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}