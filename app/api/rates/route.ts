import { NextResponse } from 'next/server'

// Mock exchange rates data
const rates = [
  { currency: 'USD', name: 'US Dollar', flag: '🇺🇸', buyRate: 83.50, sellRate: 84.20, change: 0.15 },
  { currency: 'EUR', name: 'Euro', flag: '🇪🇺', buyRate: 90.25, sellRate: 91.10, change: -0.08 },
  { currency: 'GBP', name: 'British Pound', flag: '🇬🇧', buyRate: 105.80, sellRate: 106.90, change: 0.22 },
  { currency: 'AED', name: 'UAE Dirham', flag: '🇦🇪', buyRate: 22.75, sellRate: 23.10, change: 0.05 },
  { currency: 'AUD', name: 'Australian Dollar', flag: '🇦🇺', buyRate: 54.30, sellRate: 55.00, change: -0.12 },
  { currency: 'CAD', name: 'Canadian Dollar', flag: '🇨🇦', buyRate: 61.20, sellRate: 61.90, change: 0.18 },
  { currency: 'SGD', name: 'Singapore Dollar', flag: '🇸🇬', buyRate: 62.40, sellRate: 63.10, change: 0.10 },
  { currency: 'CHF', name: 'Swiss Franc', flag: '🇨🇭', buyRate: 95.60, sellRate: 96.50, change: -0.05 },
]

export async function GET() {
  // Simulate slight rate fluctuations
  const updatedRates = rates.map(rate => ({
    ...rate,
    buyRate: rate.buyRate + (Math.random() - 0.5) * 0.1,
    sellRate: rate.sellRate + (Math.random() - 0.5) * 0.1,
    change: (Math.random() - 0.5) * 0.3,
  }))

  return NextResponse.json({
    success: true,
    data: updatedRates,
    timestamp: new Date().toISOString(),
  })
}

