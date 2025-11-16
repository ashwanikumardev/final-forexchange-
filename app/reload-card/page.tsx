'use client'

import { useState } from 'react'
import { CreditCard, Plus, Minus } from 'lucide-react'

export default function ReloadCardPage() {
  const [cardNumber, setCardNumber] = useState('')
  const [action, setAction] = useState<'reload' | 'unload'>('reload')
  const [currency, setCurrency] = useState('USD')
  const [amount, setAmount] = useState('')

  const currencies = [
    { code: 'USD', name: 'US Dollar', rate: 83.50 },
    { code: 'EUR', name: 'Euro', rate: 90.25 },
    { code: 'GBP', name: 'British Pound', rate: 105.80 },
    { code: 'AED', name: 'UAE Dirham', rate: 22.75 },
  ]

  const selectedCurrency = currencies.find(c => c.code === currency)
  const inrAmount = amount && selectedCurrency ? (parseFloat(amount) * selectedCurrency.rate).toFixed(2) : '0'

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`${action === 'reload' ? 'Reload' : 'Unload'} request submitted successfully!`)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Reload / Unload Forex Card</h1>
          <p className="text-xl text-gray-600">
            Manage your forex card balance online - quick and easy
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="card">
              <h2 className="text-2xl font-bold mb-6">Card Details</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Action Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Select Action
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setAction('reload')}
                      className={`p-4 border-2 rounded-lg font-semibold transition-all ${
                        action === 'reload'
                          ? 'border-primary-600 bg-primary-50 text-primary-600'
                          : 'border-gray-300 hover:border-primary-300'
                      }`}
                    >
                      <Plus className="mx-auto mb-2" size={24} />
                      Reload Card
                    </button>
                    <button
                      type="button"
                      onClick={() => setAction('unload')}
                      className={`p-4 border-2 rounded-lg font-semibold transition-all ${
                        action === 'unload'
                          ? 'border-primary-600 bg-primary-50 text-primary-600'
                          : 'border-gray-300 hover:border-primary-300'
                      }`}
                    >
                      <Minus className="mx-auto mb-2" size={24} />
                      Unload Card
                    </button>
                  </div>
                </div>

                {/* Card Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Card Number *
                  </label>
                  <input
                    type="text"
                    required
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="input-field"
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                  />
                </div>

                {/* Currency Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Currency *
                  </label>
                  <select
                    required
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="input-field"
                  >
                    {currencies.map(curr => (
                      <option key={curr.code} value={curr.code}>
                        {curr.code} - {curr.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Amount */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Amount ({currency}) *
                  </label>
                  <input
                    type="number"
                    required
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="input-field"
                    placeholder="Enter amount"
                    min="1"
                    step="0.01"
                  />
                </div>

                {/* Rate Display */}
                {amount && (
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-600">Exchange Rate</p>
                        <p className="font-semibold">1 {currency} = ₹{selectedCurrency?.rate.toFixed(2)}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Amount in INR</p>
                        <p className="font-bold text-lg text-primary-600">₹{inrAmount}</p>
                      </div>
                    </div>
                  </div>
                )}

                <button type="submit" className="btn-primary w-full">
                  {action === 'reload' ? 'Reload Card' : 'Unload Card'}
                </button>
              </form>
            </div>
          </div>

          {/* Info Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="card">
              <CreditCard className="text-primary-600 mb-4" size={32} />
              <h3 className="font-bold text-lg mb-3">How it Works</h3>
              <ol className="space-y-2 text-sm text-gray-600">
                <li>1. Enter your forex card number</li>
                <li>2. Select reload or unload</li>
                <li>3. Choose currency and amount</li>
                <li>4. Complete payment</li>
                <li>5. Balance updated instantly</li>
              </ol>
            </div>

            <div className="card bg-green-50 border border-green-200">
              <h3 className="font-bold mb-2">Benefits</h3>
              <ul className="space-y-2 text-sm text-green-700">
                <li>✓ Instant balance update</li>
                <li>✓ No additional charges</li>
                <li>✓ 24/7 online service</li>
                <li>✓ Secure transactions</li>
              </ul>
            </div>

            <div className="card bg-yellow-50 border border-yellow-200">
              <h3 className="font-bold mb-2">Important Notes</h3>
              <ul className="space-y-2 text-sm text-yellow-700">
                <li>• Minimum reload: $100 or equivalent</li>
                <li>• Unload charges may apply</li>
                <li>• Processing time: Instant</li>
                <li>• Keep card details handy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

