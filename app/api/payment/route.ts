import { NextResponse } from 'next/server'

// Demo mode - simulates Razorpay without actual API calls
const DEMO_MODE = !process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET

// Initialize Razorpay only if we have valid credentials
let razorpay: any = null
if (!DEMO_MODE) {
  try {
    const Razorpay = require('razorpay')
    razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    })
  } catch (error) {
    console.warn('Razorpay initialization failed, using demo mode')
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { amount, currency = 'INR', receipt, notes } = body

    if (!amount || amount <= 0) {
      return NextResponse.json(
        { error: 'Invalid amount' },
        { status: 400 }
      )
    }

    // Demo mode - generate mock order
    if (DEMO_MODE || !razorpay) {
      const orderId = `order_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      const amountInPaise = Math.round(amount * 100)
      
      return NextResponse.json({
        success: true,
        orderId: orderId,
        amount: amountInPaise,
        currency: currency,
        key: 'rzp_test_1DP5mmOlF5G5ag', // Demo key for Razorpay checkout UI
        demo: true, // Flag to indicate demo mode
      })
    }

    // Production mode - create actual Razorpay order
    const options = {
      amount: Math.round(amount * 100), // Convert to paise (multiply by 100)
      currency: currency,
      receipt: receipt || `receipt_${Date.now()}`,
      notes: notes || {},
    }

    const order = await razorpay.orders.create(options)

    return NextResponse.json({
      success: true,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      key: process.env.RAZORPAY_KEY_ID,
      demo: false,
    })
  } catch (error: any) {
    console.error('Payment order creation error:', error)
    return NextResponse.json(
      { 
        error: 'Failed to create payment order',
        message: error.message || 'Unknown error'
      },
      { status: 500 }
    )
  }
}

