import { Building2, Users, Globe, TrendingUp, Shield, Headphones } from 'lucide-react'
import Link from 'next/link'

export default function CorporatePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Corporate Forex Solutions</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Customized foreign exchange services for businesses and corporate travel
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Our Corporate Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="text-blue-600" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Dedicated Account Manager</h3>
              <p className="text-gray-600">Personal support for all your corporate forex needs</p>
            </div>
            <div className="card">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="text-green-600" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Competitive Rates</h3>
              <p className="text-gray-600">Special corporate rates for bulk transactions</p>
            </div>
            <div className="card">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-purple-600" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Employee Travel Cards</h3>
              <p className="text-gray-600">Bulk forex cards for business travelers</p>
            </div>
            <div className="card">
              <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Globe className="text-orange-600" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Global Coverage</h3>
              <p className="text-gray-600">Support for 40+ currencies worldwide</p>
            </div>
            <div className="card">
              <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-red-600" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Secure Transactions</h3>
              <p className="text-gray-600">Bank-grade security for all transactions</p>
            </div>
            <div className="card">
              <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Headphones className="text-indigo-600" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock assistance for urgent needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Corporate Services</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-6 border-2 border-gray-200 rounded-lg hover:border-primary-600 transition-colors">
              <h3 className="font-bold text-xl mb-3">Business Travel Cards</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Multi-currency cards for employees</li>
                <li>✓ Centralized billing and reporting</li>
                <li>✓ Real-time expense tracking</li>
                <li>✓ Customizable spending limits</li>
              </ul>
            </div>
            <div className="p-6 border-2 border-gray-200 rounded-lg hover:border-primary-600 transition-colors">
              <h3 className="font-bold text-xl mb-3">International Payments</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Vendor payments abroad</li>
                <li>✓ Salary remittances</li>
                <li>✓ Import/export settlements</li>
                <li>✓ Competitive exchange rates</li>
              </ul>
            </div>
            <div className="p-6 border-2 border-gray-200 rounded-lg hover:border-primary-600 transition-colors">
              <h3 className="font-bold text-xl mb-3">Bulk Currency Exchange</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Large volume transactions</li>
                <li>✓ Special corporate rates</li>
                <li>✓ Flexible delivery options</li>
                <li>✓ Priority processing</li>
              </ul>
            </div>
            <div className="p-6 border-2 border-gray-200 rounded-lg hover:border-primary-600 transition-colors">
              <h3 className="font-bold text-xl mb-3">Customized Solutions</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Tailored forex packages</li>
                <li>✓ Dedicated support team</li>
                <li>✓ Monthly invoicing</li>
                <li>✓ Detailed reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today to discuss your corporate forex requirements
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/contact" className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
              Contact Sales
            </Link>
            <a href="tel:+919121219191" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600">
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

