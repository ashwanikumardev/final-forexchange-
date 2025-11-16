'use client'

import { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { CheckCircle, Home, Package } from 'lucide-react'

export default function PaymentSuccessPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [paymentId, setPaymentId] = useState<string | null>(null)
  const [orderId, setOrderId] = useState<string | null>(null)
  const [isDemo, setIsDemo] = useState(false)

  useEffect(() => {
    const payment_id = searchParams.get('payment_id')
    const order_id = searchParams.get('order_id')
    const demo = searchParams.get('demo') === 'true'
    setPaymentId(payment_id)
    setOrderId(order_id)
    setIsDemo(demo)
  }, [searchParams])

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom max-w-2xl">
        <div className="card text-center py-12">
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 rounded-full p-4">
              <CheckCircle className="text-green-600" size={64} />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Payment Successful!
          </h1>
          
          <p className="text-gray-600 mb-8 text-lg">
            Thank you for your payment. Your order has been confirmed.
          </p>

          {paymentId && (
            <div className="bg-gray-50 rounded-lg p-6 mb-6 text-left">
              <h2 className="font-semibold text-lg mb-4">Payment Details</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Payment ID:</span>
                  <span className="font-mono text-sm">{paymentId}</span>
                </div>
                {orderId && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Order ID:</span>
                    <span className="font-mono text-sm">{orderId}</span>
                  </div>
                )}
                <div className="flex justify-between pt-2 border-t">
                  <span className="text-gray-600">Status:</span>
                  <span className="text-green-600 font-semibold">Completed</span>
                </div>
              </div>
            </div>
          )}

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-blue-700">
              {isDemo ? (
                <>
                  <strong>Demo Mode:</strong> This is a simulated payment. No actual transaction occurred. 
                  In production with real Razorpay credentials, you would receive an order confirmation email and tracking details.
                </>
              ) : (
                <>
                  <strong>Note:</strong> This is a demo payment using Razorpay test mode. 
                  In production, you would receive an order confirmation email and tracking details.
                </>
              )}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard" className="btn-primary inline-flex items-center justify-center gap-2">
              <Package size={20} />
              View Orders
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

