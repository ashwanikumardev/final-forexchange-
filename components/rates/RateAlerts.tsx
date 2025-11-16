'use client'

import { useState } from 'react'
import { Bell, Plus } from 'lucide-react'

const currencies = ['USD', 'EUR', 'GBP', 'AED', 'AUD', 'CAD', 'SGD']

export default function RateAlerts() {
  const [alerts, setAlerts] = useState([
    { currency: 'USD', targetRate: 83.00, type: 'below' },
  ])
  const [showForm, setShowForm] = useState(false)
  const [newAlert, setNewAlert] = useState({ currency: 'USD', targetRate: '', type: 'below' })

  const handleAddAlert = () => {
    if (newAlert.targetRate) {
      setAlerts([...alerts, { ...newAlert, targetRate: parseFloat(newAlert.targetRate) }])
      setNewAlert({ currency: 'USD', targetRate: '', type: 'below' })
      setShowForm(false)
    }
  }

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Bell size={20} />
          Rate Alerts
        </h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="text-primary-600 hover:text-primary-700"
        >
          <Plus size={20} />
        </button>
      </div>

      <p className="text-sm text-gray-600 mb-4">
        Get notified when rates reach your target
      </p>

      {showForm && (
        <div className="mb-4 p-4 bg-gray-50 rounded-lg space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Currency</label>
            <select
              value={newAlert.currency}
              onChange={(e) => setNewAlert({ ...newAlert, currency: e.target.value })}
              className="input-field"
            >
              {currencies.map(curr => (
                <option key={curr} value={curr}>{curr}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Target Rate (₹)</label>
            <input
              type="number"
              value={newAlert.targetRate}
              onChange={(e) => setNewAlert({ ...newAlert, targetRate: e.target.value })}
              placeholder="Enter target rate"
              className="input-field"
              step="0.01"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Alert When</label>
            <select
              value={newAlert.type}
              onChange={(e) => setNewAlert({ ...newAlert, type: e.target.value })}
              className="input-field"
            >
              <option value="below">Rate goes below</option>
              <option value="above">Rate goes above</option>
            </select>
          </div>
          <button onClick={handleAddAlert} className="btn-primary w-full">
            Add Alert
          </button>
        </div>
      )}

      <div className="space-y-3">
        {alerts.length === 0 ? (
          <p className="text-sm text-gray-500 text-center py-4">No alerts set</p>
        ) : (
          alerts.map((alert, index) => (
            <div key={index} className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900">{alert.currency}</p>
                  <p className="text-sm text-gray-600">
                    Alert when {alert.type} ₹{alert.targetRate.toFixed(2)}
                  </p>
                </div>
                <button
                  onClick={() => setAlerts(alerts.filter((_, i) => i !== index))}
                  className="text-red-600 hover:text-red-700 text-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
        <p className="text-sm text-green-700">
          💡 <strong>Tip:</strong> Set alerts to buy when rates are favorable and save money!
        </p>
      </div>
    </div>
  )
}

