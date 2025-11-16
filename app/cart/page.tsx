'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Trash2, Plus, Minus, ShoppingBag, CreditCard, Loader2, CheckCircle2, X } from 'lucide-react'

declare global {
  interface Window {
    Razorpay: any
  }
}

interface CartItem {
  id: string
  type: 'currency' | 'card'
  name: string
  amount: number
  rate: number
  total: number
  quantity: number
}

export default function CartPage() {
  const router = useRouter()
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      type: 'currency',
      name: 'US Dollar (USD)',
      amount: 1000,
      rate: 83.50,
      total: 83500,
      quantity: 1,
    },
  ])
  const [isProcessing, setIsProcessing] = useState(false)
  const [showDemoModal, setShowDemoModal] = useState(false)
  const [demoStep, setDemoStep] = useState(0)
  const [demoOrderId, setDemoOrderId] = useState<string | null>(null)

  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    )
  }

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const handleCheckout = async () => {
    if (isProcessing) return
    
    setIsProcessing(true)
    
    try {
      // Create Razorpay order
      const response = await fetch('/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: grandTotal,
          currency: 'INR',
          receipt: `receipt_${Date.now()}`,
          notes: {
            order_type: 'forex_exchange',
            items: cartItems.map(item => ({
              id: item.id,
              name: item.name,
              quantity: item.quantity,
            })),
          },
        }),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.error || `Server error: ${response.status}`)
      }

      const data = await response.json()

      if (!data.success) {
        throw new Error(data.error || 'Failed to create payment order')
      }

      // Demo mode - show Razorpay demo process
      if (data.demo) {
        setDemoOrderId(data.orderId)
        setShowDemoModal(true)
        setDemoStep(1)
        
        // Simulate Razorpay checkout steps
        setTimeout(() => setDemoStep(2), 1500) // Opening checkout
        setTimeout(() => setDemoStep(3), 3000) // Payment form
        setTimeout(() => setDemoStep(4), 4500) // Processing
        setTimeout(() => {
          setDemoStep(5) // Success
          setTimeout(() => {
            const mockPaymentId = `pay_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
            router.push(`/payment-success?payment_id=${mockPaymentId}&order_id=${data.orderId}&demo=true`)
          }, 2000)
        }, 6000)
        return
      }

      // Production mode - use Razorpay checkout
      if (!window.Razorpay) {
        throw new Error('Razorpay SDK not loaded. Please refresh the page.')
      }

      // Initialize Razorpay checkout
      const options = {
        key: data.key || process.env.NEXT_PUBLIC_RAZORPAY_KEY || 'rzp_test_1DP5mmOlF5G5ag',
        amount: data.amount,
        currency: data.currency,
        name: 'BookMyForex',
        description: 'Forex Currency Exchange',
        order_id: data.orderId,
        handler: function (response: any) {
          // Payment successful
          router.push(`/payment-success?payment_id=${response.razorpay_payment_id}&order_id=${response.razorpay_order_id}`)
        },
        prefill: {
          name: 'Demo User',
          email: 'demo@bookmyforex.com',
          contact: '9999999999',
        },
        theme: {
          color: '#2563eb',
        },
        modal: {
          ondismiss: function() {
            setIsProcessing(false)
          },
        },
      }

      const razorpay = new window.Razorpay(options)
      razorpay.on('payment.failed', function (response: any) {
        router.push(`/payment-failed?error=${encodeURIComponent(response.error?.description || 'Payment failed')}`)
        setIsProcessing(false)
      })
      razorpay.open()
    } catch (error: any) {
      console.error('Payment error:', error)
      alert(`Payment Error: ${error.message || 'Something went wrong. Please try again.'}`)
      setIsProcessing(false)
    }
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.total * item.quantity, 0)
  const deliveryFee = 100
  const grandTotal = subtotal + deliveryFee

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="card text-center py-16">
            <ShoppingBag className="mx-auto mb-4 text-gray-400" size={64} />
            <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Add some items to get started</p>
            <Link href="/exchange-currency" className="btn-primary inline-block">
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map(item => (
                <div key={item.id} className="card">
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <h3 className="font-bold text-lg">{item.name}</h3>
                      <p className="text-gray-600">
                        {item.type === 'currency' ? 'Currency Notes' : 'Forex Card'}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Amount: {item.amount} {item.name.match(/\(([^)]+)\)/)?.[1]} @ ₹{item.rate.toFixed(2)}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Minus size={20} />
                      </button>
                      <span className="font-semibold w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Plus size={20} />
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="font-bold text-lg">₹{(item.total * item.quantity).toFixed(2)}</p>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-600 hover:text-red-700 mt-2 flex items-center gap-1"
                      >
                        <Trash2 size={16} />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="card sticky top-24">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold">₹{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivery Fee</span>
                    <span className="font-semibold">₹{deliveryFee.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between">
                    <span className="font-bold text-lg">Total</span>
                    <span className="font-bold text-lg text-primary-600">₹{grandTotal.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  disabled={isProcessing}
                  className="btn-primary w-full mb-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing ? 'Processing...' : 'Proceed to Checkout'}
                </button>
                
                <Link href="/exchange-currency" className="btn-outline w-full block text-center">
                  Continue Shopping
                </Link>

                <div className="mt-6 space-y-3">
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-sm text-green-700">
                      ✓ Free delivery on orders above ₹50,000
                    </p>
                  </div>
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-sm text-blue-700">
                      💳 <strong>Demo Mode:</strong> Payment integration is in demo mode. No real transactions will be processed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Razorpay Demo Modal */}
      {showDemoModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
            <button
              onClick={() => {
                setShowDemoModal(false)
                setIsProcessing(false)
                setDemoStep(0)
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={24} />
            </button>

            <div className="text-center mb-6">
              <div className="flex justify-center mb-4">
                {demoStep < 5 ? (
                  <div className="bg-blue-100 rounded-full p-4">
                    <CreditCard className="text-blue-600" size={48} />
                  </div>
                ) : (
                  <div className="bg-green-100 rounded-full p-4">
                    <CheckCircle2 className="text-green-600" size={48} />
                  </div>
                )}
              </div>
              <h2 className="text-2xl font-bold mb-2">Razorpay Payment Demo</h2>
              <p className="text-gray-600 text-sm">Simulating payment process...</p>
            </div>

            {/* Progress Steps */}
            <div className="space-y-4 mb-6">
              {/* Step 1: Creating Order */}
              <div className={`flex items-center gap-3 p-3 rounded-lg ${
                demoStep >= 1 ? 'bg-blue-50 border border-blue-200' : 'bg-gray-50'
              }`}>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  demoStep >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
                }`}>
                  {demoStep > 1 ? <CheckCircle2 size={20} /> : '1'}
                </div>
                <div className="flex-1">
                  <p className="font-semibold">Creating Payment Order</p>
                  <p className="text-sm text-gray-600">Order ID: {demoOrderId || '...'}</p>
                </div>
                {demoStep === 1 && <Loader2 className="animate-spin text-blue-600" size={20} />}
              </div>

              {/* Step 2: Opening Checkout */}
              <div className={`flex items-center gap-3 p-3 rounded-lg ${
                demoStep >= 2 ? 'bg-blue-50 border border-blue-200' : 'bg-gray-50'
              }`}>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  demoStep >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
                }`}>
                  {demoStep > 2 ? <CheckCircle2 size={20} /> : '2'}
                </div>
                <div className="flex-1">
                  <p className="font-semibold">Opening Razorpay Checkout</p>
                  <p className="text-sm text-gray-600">Initializing payment gateway...</p>
                </div>
                {demoStep === 2 && <Loader2 className="animate-spin text-blue-600" size={20} />}
              </div>

              {/* Step 3: Payment Form */}
              <div className={`flex items-center gap-3 p-3 rounded-lg ${
                demoStep >= 3 ? 'bg-blue-50 border border-blue-200' : 'bg-gray-50'
              }`}>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  demoStep >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
                }`}>
                  {demoStep > 3 ? <CheckCircle2 size={20} /> : '3'}
                </div>
                <div className="flex-1">
                  <p className="font-semibold">Payment Form</p>
                  <p className="text-sm text-gray-600">Card: 4111 1111 1111 1111</p>
                </div>
                {demoStep === 3 && <Loader2 className="animate-spin text-blue-600" size={20} />}
              </div>

              {/* Step 4: Processing */}
              <div className={`flex items-center gap-3 p-3 rounded-lg ${
                demoStep >= 4 ? 'bg-blue-50 border border-blue-200' : 'bg-gray-50'
              }`}>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  demoStep >= 4 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
                }`}>
                  {demoStep > 4 ? <CheckCircle2 size={20} /> : '4'}
                </div>
                <div className="flex-1">
                  <p className="font-semibold">Processing Payment</p>
                  <p className="text-sm text-gray-600">Verifying transaction...</p>
                </div>
                {demoStep === 4 && <Loader2 className="animate-spin text-blue-600" size={20} />}
              </div>

              {/* Step 5: Success */}
              <div className={`flex items-center gap-3 p-3 rounded-lg ${
                demoStep >= 5 ? 'bg-green-50 border border-green-200' : 'bg-gray-50'
              }`}>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  demoStep >= 5 ? 'bg-green-600 text-white' : 'bg-gray-300 text-gray-600'
                }`}>
                  {demoStep >= 5 ? <CheckCircle2 size={20} /> : '5'}
                </div>
                <div className="flex-1">
                  <p className="font-semibold">Payment Successful!</p>
                  <p className="text-sm text-gray-600">Redirecting to confirmation...</p>
                </div>
                {demoStep === 5 && <CheckCircle2 className="text-green-600" size={20} />}
              </div>
            </div>

            {/* Demo Info */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-yellow-800">
                <strong>Demo Mode:</strong> This is a simulated payment flow. 
                In production, users would see the actual Razorpay checkout modal.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

