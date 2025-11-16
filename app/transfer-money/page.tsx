import MoneyTransferForm from '@/components/transfer/MoneyTransferForm'
import { Send, DollarSign, Clock, Shield } from 'lucide-react'

export default function TransferMoneyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-12">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Transfer Money Abroad</h1>
          <p className="text-xl opacity-90">Send money internationally at the best rates with our partner banks</p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-lg">
                <DollarSign className="text-green-600" size={24} />
              </div>
              <div>
                <p className="font-bold text-gray-900">Low Fees</p>
                <p className="text-sm text-gray-600">Best Rates</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Send className="text-blue-600" size={24} />
              </div>
              <div>
                <p className="font-bold text-gray-900">Fast Transfer</p>
                <p className="text-sm text-gray-600">1-2 Days</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-purple-100 p-2 rounded-lg">
                <Shield className="text-purple-600" size={24} />
              </div>
              <div>
                <p className="font-bold text-gray-900">Secure</p>
                <p className="text-sm text-gray-600">Bank Transfer</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-orange-100 p-2 rounded-lg">
                <Clock className="text-orange-600" size={24} />
              </div>
              <div>
                <p className="font-bold text-gray-900">Track Online</p>
                <p className="text-sm text-gray-600">Real-time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transfer Form */}
      <section className="py-12">
        <div className="container-custom">
          <MoneyTransferForm />
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-8">Popular Transfer Purposes</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-3">🎓</div>
              <h3 className="font-bold mb-2">Education</h3>
              <p className="text-sm text-gray-600">Tuition fees, living expenses</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-3">👨‍👩‍👧</div>
              <h3 className="font-bold mb-2">Family Support</h3>
              <p className="text-sm text-gray-600">Send money to family abroad</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-3">🏥</div>
              <h3 className="font-bold mb-2">Medical</h3>
              <p className="text-sm text-gray-600">Healthcare expenses</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-3">💼</div>
              <h3 className="font-bold mb-2">Business</h3>
              <p className="text-sm text-gray-600">Trade payments, invoices</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

