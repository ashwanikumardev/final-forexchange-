import { NextResponse } from 'next/server'

// Mock orders data
const mockOrders = [
  {
    id: 'ORD-2024-001',
    userId: 'user-1',
    orderType: 'BUY',
    productType: 'NOTES',
    status: 'COMPLETED',
    fromCurrency: 'INR',
    toCurrency: 'USD',
    fromAmount: 83500,
    toAmount: 1000,
    rate: 83.50,
    deliveryAddress: 'Mumbai, Maharashtra',
    createdAt: '2024-01-15T10:30:00Z',
    updatedAt: '2024-01-16T14:20:00Z',
  },
  {
    id: 'ORD-2024-002',
    userId: 'user-1',
    orderType: 'BUY',
    productType: 'CARD',
    status: 'PROCESSING',
    fromCurrency: 'INR',
    toCurrency: 'MULTI',
    fromAmount: 50000,
    toAmount: 50000,
    rate: 1,
    deliveryAddress: 'Delhi, India',
    createdAt: '2024-01-18T09:15:00Z',
    updatedAt: '2024-01-18T09:15:00Z',
  },
]

export async function GET() {
  return NextResponse.json({
    success: true,
    data: mockOrders,
  })
}

export async function POST(request: Request) {
  const body = await request.json()
  
  const newOrder = {
    id: `ORD-2024-${String(mockOrders.length + 1).padStart(3, '0')}`,
    userId: 'user-1',
    ...body,
    status: 'PENDING',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }

  mockOrders.push(newOrder)

  return NextResponse.json({
    success: true,
    data: newOrder,
    message: 'Order created successfully',
  })
}

