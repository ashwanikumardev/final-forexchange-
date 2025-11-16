import ForexCardList from '@/components/forex-cards/ForexCardList'
import { CreditCard, Globe, Shield, Zap } from 'lucide-react'

export default function ForexCardsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-12">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Zero Markup Forex Cards</h1>
          <p className="text-xl opacity-90">Travel smart with our multi-currency forex cards accepted in 200+ countries</p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="bg-purple-100 p-2 rounded-lg">
                <CreditCard className="text-purple-600" size={24} />
              </div>
              <div>
                <p className="font-bold text-gray-900">Zero Markup</p>
                <p className="text-sm text-gray-600">Best Rates</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Globe className="text-blue-600" size={24} />
              </div>
              <div>
                <p className="font-bold text-gray-900">200+ Countries</p>
                <p className="text-sm text-gray-600">Worldwide</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-lg">
                <Shield className="text-green-600" size={24} />
              </div>
              <div>
                <p className="font-bold text-gray-900">Chip & PIN</p>
                <p className="text-sm text-gray-600">Secure</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-orange-100 p-2 rounded-lg">
                <Zap className="text-orange-600" size={24} />
              </div>
              <div>
                <p className="font-bold text-gray-900">Instant Reload</p>
                <p className="text-sm text-gray-600">Online</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forex Cards List */}
      <section className="py-12">
        <div className="container-custom">
          <ForexCardList />
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Forex Cards?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Save Money</h3>
              <p className="text-gray-600">Zero cross-currency markup. Save up to 5% compared to credit cards</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏧</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Free ATM Withdrawals</h3>
              <p className="text-gray-600">First 3 ATM withdrawals free every month</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📱</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Mobile App</h3>
              <p className="text-gray-600">Track balance, reload, and manage your card on the go</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

