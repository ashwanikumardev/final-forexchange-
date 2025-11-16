'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { ArrowRight, MapPin, Calendar } from 'lucide-react'

const currencies = [
  { code: 'USD', name: 'US Dollar', flag: '🇺🇸', buyRate: 83.50, sellRate: 84.20 },
  { code: 'EUR', name: 'Euro', flag: '🇪🇺', buyRate: 90.25, sellRate: 91.10 },
  { code: 'GBP', name: 'British Pound', flag: '🇬🇧', buyRate: 105.80, sellRate: 106.90 },
  { code: 'AED', name: 'UAE Dirham', flag: '🇦🇪', buyRate: 22.75, sellRate: 23.10 },
  { code: 'AUD', name: 'Australian Dollar', flag: '🇦🇺', buyRate: 54.30, sellRate: 55.00 },
  { code: 'CAD', name: 'Canadian Dollar', flag: '🇨🇦', buyRate: 61.20, sellRate: 61.90 },
  { code: 'SGD', name: 'Singapore Dollar', flag: '🇸🇬', buyRate: 62.40, sellRate: 63.10 },
]

const cities = ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Pune', 'Kolkata', 'Ahmedabad']

export default function ExchangeForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [orderType, setOrderType] = useState<'BUY' | 'SELL'>('BUY')
  const [currency, setCurrency] = useState('USD')
  const [productType, setProductType] = useState<'NOTES' | 'CARD'>('NOTES')
  const [amount, setAmount] = useState('')
  const [city, setCity] = useState('')
  const [deliveryDate, setDeliveryDate] = useState('')

  // Set currency from URL parameter if provided
  useEffect(() => {
    const currencyParam = searchParams.get('currency')
    if (currencyParam && currencies.find(c => c.code === currencyParam)) {
      setCurrency(currencyParam)
    }
  }, [searchParams])

  const selectedCurrency = currencies.find(c => c.code === currency)
  const rate = orderType === 'BUY' ? selectedCurrency?.buyRate : selectedCurrency?.sellRate
  const inrAmount = amount ? (parseFloat(amount) * (rate || 0)).toFixed(2) : '0'

  const handleProceedToCheckout = () => {
    if (!amount || !city || !deliveryDate) {
      alert('Please fill in all required fields')
      return
    }
    // Add to cart and navigate
    router.push('/cart')
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="card">
        <h2 className="text-2xl font-bold mb-6">Exchange Currency</h2>

        {/* Order Type Toggle */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setOrderType('BUY')}
            className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all ${
              orderType === 'BUY'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Buy Foreign Currency
          </button>
          <button
            onClick={() => setOrderType('SELL')}
            className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all ${
              orderType === 'SELL'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Sell Foreign Currency
          </button>
        </div>

        {/* Product Type */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Product Type</label>
          <div className="flex gap-4">
            <button
              onClick={() => setProductType('NOTES')}
              className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all ${
                productType === 'NOTES'
                  ? 'bg-secondary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              💵 Currency Notes
            </button>
            <button
              onClick={() => setProductType('CARD')}
              className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all ${
                productType === 'CARD'
                  ? 'bg-secondary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              💳 Forex Card
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Currency Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Currency</label>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="input-field"
            >
              {currencies.map(curr => (
                <option key={curr.code} value={curr.code}>
                  {curr.flag} {curr.code} - {curr.name}
                </option>
              ))}
            </select>
          </div>

          {/* Amount */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Amount in {currency}
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              className="input-field"
            />
          </div>

          {/* City */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <MapPin className="inline" size={16} /> Select City
            </label>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="input-field"
            >
              <option value="">Choose your city</option>
              {cities.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Delivery Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Calendar className="inline" size={16} /> Delivery Date
            </label>
            <input
              type="date"
              value={deliveryDate}
              onChange={(e) => setDeliveryDate(e.target.value)}
              className="input-field"
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
        </div>

        {/* Rate Display */}
        <div className="mt-6 p-6 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-700">Exchange Rate:</span>
            <span className="text-2xl font-bold text-primary-600">₹{rate?.toFixed(2)} per {currency}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700 font-semibold">You {orderType === 'BUY' ? 'Pay' : 'Receive'}:</span>
            <span className="text-3xl font-bold text-gray-900">₹{inrAmount}</span>
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleProceedToCheckout}
          className="btn-primary w-full mt-6 flex items-center justify-center gap-2"
        >
          Proceed to Checkout
          <ArrowRight size={20} />
        </button>

        <p className="text-sm text-gray-500 text-center mt-4">
          🔒 100% Safe & Secure | RBI Authorized | Free Doorstep Delivery
        </p>
      </div>
    </div>
  )
}

