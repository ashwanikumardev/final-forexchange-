import ExchangeForm from '@/components/exchange/ExchangeForm'
import { Banknote, Shield, Truck, Clock } from 'lucide-react'

export default function ExchangeCurrencyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-12">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Exchange Foreign Currency</h1>
          <p className="text-xl opacity-90">Buy or sell foreign currency notes at the best rates with doorstep delivery</p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-lg">
                <Banknote className="text-green-600" size={24} />
              </div>
              <div>
                <p className="font-bold text-gray-900">Best Rates</p>
                <p className="text-sm text-gray-600">Guaranteed</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Shield className="text-blue-600" size={24} />
              </div>
              <div>
                <p className="font-bold text-gray-900">100% Safe</p>
                <p className="text-sm text-gray-600">RBI Approved</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-purple-100 p-2 rounded-lg">
                <Truck className="text-purple-600" size={24} />
              </div>
              <div>
                <p className="font-bold text-gray-900">Free Delivery</p>
                <p className="text-sm text-gray-600">650+ Cities</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-orange-100 p-2 rounded-lg">
                <Clock className="text-orange-600" size={24} />
              </div>
              <div>
                <p className="font-bold text-gray-900">Same Day</p>
                <p className="text-sm text-gray-600">Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exchange Form */}
      <section className="py-12">
        <div className="container-custom">
          <ExchangeForm />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-8">How Currency Exchange Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary-600">1</div>
              <h3 className="font-bold mb-2">Select Currency</h3>
              <p className="text-sm text-gray-600">Choose the currency you want to buy or sell</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary-600">2</div>
              <h3 className="font-bold mb-2">Enter Amount</h3>
              <p className="text-sm text-gray-600">Enter the amount and see live rates</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary-600">3</div>
              <h3 className="font-bold mb-2">Place Order</h3>
              <p className="text-sm text-gray-600">Fill details and make secure payment</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary-600">4</div>
              <h3 className="font-bold mb-2">Get Delivery</h3>
              <p className="text-sm text-gray-600">Receive forex at your doorstep</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

