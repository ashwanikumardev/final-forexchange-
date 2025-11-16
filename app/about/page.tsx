import { CheckCircle, Users, Globe, Award } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About BookMyForex</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            India's most trusted platform for foreign exchange services
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
            <p className="text-gray-700 text-lg mb-4">
              BookMyForex was founded with a simple mission: to make foreign exchange services accessible, 
              transparent, and affordable for everyone. We recognized that traditional forex services were 
              often complicated, expensive, and time-consuming.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              Today, we serve thousands of customers across India, offering the best exchange rates, 
              fastest delivery, and most reliable service in the industry. Our platform combines 
              cutting-edge technology with personalized customer service to deliver an unmatched experience.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-green-600" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Best Rates</h3>
              <p className="text-gray-600">Guaranteed best exchange rates in the market</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-blue-600" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">50,000+ Customers</h3>
              <p className="text-gray-600">Trusted by thousands across India</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-purple-600" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">40+ Currencies</h3>
              <p className="text-gray-600">Wide range of currencies available</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-orange-600" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">RBI Authorized</h3>
              <p className="text-gray-600">Fully licensed and regulated</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card">
              <h3 className="font-bold text-xl mb-3">Transparency</h3>
              <p className="text-gray-600">
                No hidden charges. What you see is what you get. We believe in complete transparency 
                in all our dealings.
              </p>
            </div>
            <div className="card">
              <h3 className="font-bold text-xl mb-3">Customer First</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We go the extra mile to ensure you have the best 
                experience with us.
              </p>
            </div>
            <div className="card">
              <h3 className="font-bold text-xl mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continuously innovate to bring you the latest technology and services in foreign 
                exchange.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied customers and experience the best forex service
          </p>
          <div className="flex gap-4 justify-center">
            <a href="/exchange-currency" className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
              Exchange Currency
            </a>
            <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

