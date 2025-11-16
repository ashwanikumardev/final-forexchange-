'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { TrendingUp, TrendingDown, ArrowRight } from 'lucide-react'

interface Rate {
  currency: string
  name: string
  flag: string
  buy: number
  sell: number
  change: number
}

const initialRates: Rate[] = [
  { currency: 'USD', name: 'US Dollar', flag: '🇺🇸', buy: 83.50, sell: 84.20, change: 0.15 },
  { currency: 'EUR', name: 'Euro', flag: '🇪🇺', buy: 90.25, sell: 91.10, change: -0.08 },
  { currency: 'GBP', name: 'British Pound', flag: '🇬🇧', buy: 105.80, sell: 106.90, change: 0.22 },
  { currency: 'AED', name: 'UAE Dirham', flag: '🇦🇪', buy: 22.75, sell: 23.10, change: 0.05 },
  { currency: 'AUD', name: 'Australian Dollar', flag: '🇦🇺', buy: 54.30, sell: 55.00, change: -0.12 },
  { currency: 'CAD', name: 'Canadian Dollar', flag: '🇨🇦', buy: 61.20, sell: 61.90, change: 0.18 },
  { currency: 'SGD', name: 'Singapore Dollar', flag: '🇸🇬', buy: 62.40, sell: 63.10, change: 0.10 },
  { currency: 'CHF', name: 'Swiss Franc', flag: '🇨🇭', buy: 95.60, sell: 96.50, change: -0.05 },
  { currency: 'JPY', name: 'Japanese Yen', flag: '🇯🇵', buy: 0.56, sell: 0.58, change: 0.03 },
  { currency: 'THB', name: 'Thai Baht', flag: '🇹🇭', buy: 2.35, sell: 2.42, change: -0.02 },
]

export default function LiveRatesTable() {
  const router = useRouter()
  const [rates, setRates] = useState<Rate[]>(initialRates)
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setLastUpdate(new Date())

    const interval = setInterval(() => {
      setRates(prevRates =>
        prevRates.map(rate => ({
          ...rate,
          buy: rate.buy + (Math.random() - 0.5) * 0.1,
          sell: rate.sell + (Math.random() - 0.5) * 0.1,
          change: (Math.random() - 0.5) * 0.3,
        }))
      )
      setLastUpdate(new Date())
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="card">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-2">
        <h2 className="text-xl sm:text-2xl font-bold">Today's Exchange Rates</h2>
        <div className="text-xs sm:text-sm text-gray-500">
          Last updated: {mounted && lastUpdate ? lastUpdate.toLocaleTimeString() : 'Loading...'}
        </div>
      </div>

      <div className="overflow-x-auto -mx-4 sm:mx-0">
        <div className="inline-block min-w-full align-middle">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-semibold text-gray-700 text-xs sm:text-sm">Currency</th>
                <th className="text-right py-2 sm:py-3 px-2 sm:px-4 font-semibold text-gray-700 text-xs sm:text-sm">Buy</th>
                <th className="text-right py-2 sm:py-3 px-2 sm:px-4 font-semibold text-gray-700 text-xs sm:text-sm">Sell</th>
                <th className="text-right py-2 sm:py-3 px-2 sm:px-4 font-semibold text-gray-700 text-xs sm:text-sm hidden md:table-cell">Change</th>
                <th className="text-right py-2 sm:py-3 px-2 sm:px-4 font-semibold text-gray-700 text-xs sm:text-sm">Action</th>
              </tr>
            </thead>
          <tbody>
            {rates.map((rate, index) => (
              <tr key={index} className="border-b hover:bg-gray-50 transition-colors">
                <td className="py-3 sm:py-4 px-2 sm:px-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-xl sm:text-2xl">{rate.flag}</span>
                    <div>
                      <p className="font-semibold text-gray-900 text-xs sm:text-sm">{rate.currency}</p>
                      <p className="text-xs text-gray-500 hidden sm:block">{rate.name}</p>
                    </div>
                  </div>
                </td>
                <td className="text-right py-3 sm:py-4 px-2 sm:px-4">
                  <span className="font-semibold text-green-600 text-xs sm:text-sm">₹{rate.buy.toFixed(2)}</span>
                </td>
                <td className="text-right py-3 sm:py-4 px-2 sm:px-4">
                  <span className="font-semibold text-red-600 text-xs sm:text-sm">₹{rate.sell.toFixed(2)}</span>
                </td>
                <td className="text-right py-3 sm:py-4 px-2 sm:px-4 hidden md:table-cell">
                  <div className={`flex items-center justify-end gap-1 ${rate.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {rate.change >= 0 ? <TrendingUp size={14} className="sm:w-4 sm:h-4" /> : <TrendingDown size={14} className="sm:w-4 sm:h-4" />}
                    <span className="font-medium text-xs sm:text-sm">{Math.abs(rate.change).toFixed(2)}%</span>
                  </div>
                </td>
                <td className="text-right py-3 sm:py-4 px-2 sm:px-4">
                  <button
                    onClick={() => router.push(`/exchange-currency?currency=${rate.currency}`)}
                    className="text-primary-600 hover:text-primary-700 font-semibold flex items-center gap-1 ml-auto transition-colors hover:bg-primary-50 px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg text-xs sm:text-sm whitespace-nowrap"
                  >
                    <span className="hidden sm:inline">Buy Now</span>
                    <span className="sm:hidden">Buy</span>
                    <ArrowRight size={14} className="sm:w-4 sm:h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          </table>
        </div>
      </div>

      <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-xs sm:text-sm text-yellow-800">
          <strong>Note:</strong> Rates are indicative and subject to change. Final rates will be locked at the time of transaction.
        </p>
      </div>
    </div>
  )
}

