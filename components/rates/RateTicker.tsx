'use client'

import { useEffect, useState } from 'react'
import { TrendingUp, TrendingDown } from 'lucide-react'

interface Rate {
  currency: string
  flag: string
  buy: number
  sell: number
  change: number
}

const initialRates: Rate[] = [
  { currency: 'USD', flag: '🇺🇸', buy: 83.50, sell: 84.20, change: 0.15 },
  { currency: 'EUR', flag: '🇪🇺', buy: 90.25, sell: 91.10, change: -0.08 },
  { currency: 'GBP', flag: '🇬🇧', buy: 105.80, sell: 106.90, change: 0.22 },
  { currency: 'AED', flag: '🇦🇪', buy: 22.75, sell: 23.10, change: 0.05 },
  { currency: 'AUD', flag: '🇦🇺', buy: 54.30, sell: 55.00, change: -0.12 },
  { currency: 'CAD', flag: '🇨🇦', buy: 61.20, sell: 61.90, change: 0.18 },
  { currency: 'SGD', flag: '🇸🇬', buy: 62.40, sell: 63.10, change: 0.10 },
  { currency: 'CHF', flag: '🇨🇭', buy: 95.60, sell: 96.50, change: -0.05 },
]

export default function RateTicker() {
  const [rates, setRates] = useState<Rate[]>(initialRates)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Simulate live rate updates
    const interval = setInterval(() => {
      setRates(prevRates =>
        prevRates.map(rate => ({
          ...rate,
          buy: rate.buy + (Math.random() - 0.5) * 0.1,
          sell: rate.sell + (Math.random() - 0.5) * 0.1,
          change: (Math.random() - 0.5) * 0.3,
        }))
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  if (!mounted) {
    return (
      <section className="bg-gray-900 text-white py-4 overflow-hidden">
        <div className="container-custom">
          <div className="flex items-center gap-4 mb-2">
            <span className="font-semibold text-sm">LIVE FOREX RATES</span>
            <span className="text-xs text-gray-400">Loading...</span>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-gray-900 text-white py-4 overflow-hidden">
      <div className="container-custom">
        <div className="flex items-center gap-4 mb-2">
          <span className="font-semibold text-sm">LIVE FOREX RATES</span>
          <span className="text-xs text-gray-400">Updated every 5 seconds</span>
        </div>
        
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-2 scrollbar-hide">
            {rates.map((rate, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-gray-800 rounded-lg px-4 py-3 min-w-[200px]"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{rate.flag}</span>
                    <span className="font-bold">{rate.currency}</span>
                  </div>
                  <div className={`flex items-center gap-1 text-xs ${rate.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {rate.change >= 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                    {Math.abs(rate.change).toFixed(2)}%
                  </div>
                </div>
                <div className="flex justify-between text-sm">
                  <div>
                    <p className="text-gray-400 text-xs">Buy</p>
                    <p className="font-semibold text-green-400">₹{rate.buy.toFixed(2)}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400 text-xs">Sell</p>
                    <p className="font-semibold text-red-400">₹{rate.sell.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

