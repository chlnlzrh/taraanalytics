import Link from 'next/link'
import { RESTAURANTS } from '@/lib/restaurant-data'

export default function LocationPerformancePage() {
  const locationSummary = [
    {
      restaurant: RESTAURANTS[0],
      revenue: 485000,
      revenueVariance: 16.9,
      sameStoreGrowth: 9.0,
      status: 'high-performer'
    }
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xs font-bold text-black dark:text-white">
            Location Performance Variance
          </h1>
          <p className="text-xs font-normal text-gray-500 mt-1">
            CMP_001 - Comparative Analytics
          </p>
        </div>
      </div>
    </div>
  )
}