'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { XCircle, Home, RefreshCw } from 'lucide-react'

function PaymentFailedContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const errorParam = searchParams.get('error')
    setError(errorParam ? decodeURIComponent(errorParam) : 'Payment could not be processed')
  }, [searchParams])

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom max-w-2xl">
        <div className="card text-center py-12">
          <div className="flex justify-center mb-6">
            <div className="bg-red-100 rounded-full p-4">
              <XCircle className="text-red-600" size={64} />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Payment Failed
          </h1>
          
          <p className="text-gray-600 mb-2 text-lg">
            We couldn't process your payment.
          </p>

          {error && (
            <p className="text-red-600 mb-8">
              {error}
            </p>
          )}

          <div className="bg-gray-50 rounded-lg p-6 mb-6 text-left">
            <h2 className="font-semibold text-lg mb-4">What to do next?</h2>
            <ul className="space-y-2 text-gray-600">
              <li>• Check if your card has sufficient balance</li>
              <li>• Verify your card details are correct</li>
              <li>• Try using a different payment method</li>
              <li>• Contact your bank if the issue persists</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-yellow-700">
              <strong>Note:</strong> This is a demo payment using Razorpay test mode. 
              No actual money was charged.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/cart" className="btn-primary inline-flex items-center justify-center gap-2">
              <RefreshCw size={20} />
              Try Again
            </Link>
            <Link href="/" className="btn-outline inline-flex items-center justify-center gap-2">
              <Home size={20} />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function PaymentFailedPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <PaymentFailedContent />
    </Suspense>
  )
}
