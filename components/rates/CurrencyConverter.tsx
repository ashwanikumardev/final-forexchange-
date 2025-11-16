'use client'

import { useState } from 'react'
import { ArrowLeftRight, TrendingUp } from 'lucide-react'
import Link from 'next/link'

const currencies = [
  { code: 'INR', name: 'Indian Rupee', flag: '🇮🇳' },
  { code: 'USD', name: 'US Dollar', flag: '🇺🇸', rate: 83.50 },
  { code: 'EUR', name: 'Euro', flag: '🇪🇺', rate: 90.25 },
  { code: 'GBP', name: 'British Pound', flag: '🇬🇧', rate: 105.80 },
  { code: 'AED', name: 'UAE Dirham', flag: '🇦🇪', rate: 22.75 },
  { code: 'AUD', name: 'Australian Dollar', flag: '🇦🇺', rate: 54.30 },
  { code: 'CAD', name: 'Canadian Dollar', flag: '🇨🇦', rate: 61.20 },
]

export default function CurrencyConverter() {
  const [fromCurrency, setFromCurrency] = useState('INR')
  const [toCurrency, setToCurrency] = useState('USD')
  const [amount, setAmount] = useState('10000')
  const [convertedAmount, setConvertedAmount] = useState('0')

  const handleConvert = () => {
    const fromRate = currencies.find(c => c.code === fromCurrency)?.rate || 1
    const toRate = currencies.find(c => c.code === toCurrency)?.rate || 1
    
    let result = 0
    if (fromCurrency === 'INR') {
      result = parseFloat(amount) / toRate
    } else if (toCurrency === 'INR') {
      result = parseFloat(amount) * fromRate
    } else {
      result = (parseFloat(amount) * fromRate) / toRate
    }
    
    setConvertedAmount(result.toFixed(2))
  }

  const swapCurrencies = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
  }

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Currency Converter</h2>
            <p className="text-xl text-gray-600">Check live exchange rates and convert currencies instantly</p>
          </div>

          <div className="card">
            <div className="grid md:grid-cols-2 gap-6">
              {/* From Currency */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">You Have</label>
                <div className="flex gap-2">
                  <select
                    value={fromCurrency}
                    onChange={(e) => setFromCurrency(e.target.value)}
                    className="input-field flex-1"
                  >
                    {currencies.map(currency => (
                      <option key={currency.code} value={currency.code}>
                        {currency.flag} {currency.code} - {currency.name}
                      </option>
                    ))}
                  </select>
                </div>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="input-field mt-3"
                  placeholder="Enter amount"
                />
              </div>

              {/* Swap Button */}
              <div className="hidden md:flex items-center justify-center">
                <button
                  onClick={swapCurrencies}
                  className="bg-primary-100 hover:bg-primary-200 text-primary-600 p-4 rounded-full transition-colors"
                >
                  <ArrowLeftRight size={24} />
                </button>
              </div>

              {/* To Currency */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">You Get</label>
                <div className="flex gap-2">
                  <select
                    value={toCurrency}
                    onChange={(e) => setToCurrency(e.target.value)}
                    className="input-field flex-1"
                  >
                    {currencies.map(currency => (
                      <option key={currency.code} value={currency.code}>
                        {currency.flag} {currency.code} - {currency.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="input-field mt-3 bg-gray-50 font-bold text-2xl text-primary-600">
                  {convertedAmount || '0.00'}
                </div>
              </div>
            </div>

            <button
              onClick={handleConvert}
              className="btn-primary w-full mt-6 flex items-center justify-center gap-2"
            >
              <TrendingUp size={20} />
              Convert Now
            </button>

            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-green-700 text-center">
                💰 <strong>Best Rate Guaranteed!</strong> Get an effective rate of ₹{currencies.find(c => c.code === toCurrency)?.rate || 0} per {toCurrency}
              </p>
            </div>

            <div className="mt-4 text-center">
              <Link href="/exchange-currency" className="text-primary-600 font-semibold hover:underline">
                Proceed to Exchange Currency →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

