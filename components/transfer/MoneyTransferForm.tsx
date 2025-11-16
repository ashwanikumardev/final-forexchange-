'use client'

import { useState } from 'react'
import { ArrowRight, User, Building } from 'lucide-react'

const countries = [
  { code: 'US', name: 'United States', currency: 'USD', flag: '🇺🇸' },
  { code: 'GB', name: 'United Kingdom', currency: 'GBP', flag: '🇬🇧' },
  { code: 'CA', name: 'Canada', currency: 'CAD', flag: '🇨🇦' },
  { code: 'AU', name: 'Australia', currency: 'AUD', flag: '🇦🇺' },
  { code: 'SG', name: 'Singapore', currency: 'SGD', flag: '🇸🇬' },
]

const purposes = [
  'Education - Tuition Fees',
  'Education - Living Expenses',
  'Family Maintenance',
  'Medical Treatment',
  'Business Payment',
  'Gift',
  'Other',
]

export default function MoneyTransferForm() {
  const [amount, setAmount] = useState('')
  const [country, setCountry] = useState('US')
  const [purpose, setPurpose] = useState('')
  const [beneficiaryName, setBeneficiaryName] = useState('')
  const [accountNumber, setAccountNumber] = useState('')
  const [bankName, setBankName] = useState('')

  const selectedCountry = countries.find(c => c.code === country)
  const rate = 83.50 // Example rate
  const foreignAmount = amount ? (parseFloat(amount) / rate).toFixed(2) : '0'

  const handleSubmit = () => {
    if (!amount || !purpose || !beneficiaryName || !accountNumber || !bankName) {
      alert('Please fill in all required fields')
      return
    }
    alert(`Transfer Request Submitted!\n\n` +
          `Amount: ₹${amount}\n` +
          `Recipient Gets: ${selectedCountry?.currency} ${foreignAmount}\n` +
          `Beneficiary: ${beneficiaryName}\n` +
          `Country: ${selectedCountry?.name}\n\n` +
          `Proceeding to payment gateway...`)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="card">
        <h2 className="text-2xl font-bold mb-6">Send Money Abroad</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Amount in INR */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Amount to Send (INR)
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount in INR"
              className="input-field"
            />
          </div>

          {/* Destination Country */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Destination Country
            </label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="input-field"
            >
              {countries.map(c => (
                <option key={c.code} value={c.code}>
                  {c.flag} {c.name}
                </option>
              ))}
            </select>
          </div>

          {/* Purpose */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Purpose of Transfer
            </label>
            <select
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
              className="input-field"
            >
              <option value="">Select purpose</option>
              {purposes.map(p => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Rate Display */}
        <div className="mt-6 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-700">Exchange Rate:</span>
            <span className="text-2xl font-bold text-green-600">
              ₹{rate} = 1 {selectedCountry?.currency}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700 font-semibold">Recipient Gets:</span>
            <span className="text-3xl font-bold text-gray-900">
              {selectedCountry?.currency} {foreignAmount}
            </span>
          </div>
        </div>

        {/* Beneficiary Details */}
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <User size={20} />
            Beneficiary Details
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Beneficiary Name
              </label>
              <input
                type="text"
                value={beneficiaryName}
                onChange={(e) => setBeneficiaryName(e.target.value)}
                placeholder="Full name as per bank account"
                className="input-field"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Account Number / IBAN
              </label>
              <input
                type="text"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                placeholder="Enter account number"
                className="input-field"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <Building size={16} />
                Bank Name & Branch
              </label>
              <input
                type="text"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
                placeholder="Enter bank name and branch"
                className="input-field"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="btn-primary w-full mt-6 flex items-center justify-center gap-2"
        >
          Proceed to Payment
          <ArrowRight size={20} />
        </button>

        <p className="text-sm text-gray-500 text-center mt-4">
          🔒 Secure bank transfer | Processing time: 1-2 business days
        </p>
      </div>
    </div>
  )
}

