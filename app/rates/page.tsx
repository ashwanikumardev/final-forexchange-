import LiveRatesTable from '@/components/rates/LiveRatesTable'
import RateAlerts from '@/components/rates/RateAlerts'
import { TrendingUp, Bell, Download } from 'lucide-react'

export default function RatesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Live Forex Rates</h1>
          <p className="text-xl opacity-90">Real-time exchange rates updated every 5 seconds</p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <TrendingUp className="text-green-600" size={28} />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">Best Rates</p>
                <p className="text-sm text-gray-600">Guaranteed in the market</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Bell className="text-blue-600" size={28} />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">Rate Alerts</p>
                <p className="text-sm text-gray-600">Get notified instantly</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Download className="text-purple-600" size={28} />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">Export Rates</p>
                <p className="text-sm text-gray-600">Download as PDF/Excel</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rates Table */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <LiveRatesTable />
            </div>
            <div>
              <RateAlerts />
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-8">Why Our Rates Are Better</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="font-bold text-lg mb-2">Zero Hidden Charges</h3>
              <p className="text-gray-600">What you see is what you get. No surprises at checkout.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="font-bold text-lg mb-2">Real-Time Updates</h3>
              <p className="text-gray-600">Rates updated every 5 seconds based on live market data.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="font-bold text-lg mb-2">Best Price Guarantee</h3>
              <p className="text-gray-600">Find a better rate? We'll match it or refund the difference.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

