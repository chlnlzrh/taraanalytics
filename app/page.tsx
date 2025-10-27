'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function RootPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to Executive Dashboard as the main landing page
    router.replace('/executive-dashboard')
  }, [router])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="text-xs font-normal text-gray-500">
          Redirecting to Executive Dashboard...
        </div>
      </div>
    </div>
  )
}