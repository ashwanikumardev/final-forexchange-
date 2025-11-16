'use client'

import { Shield, Plane, Heart, Briefcase, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function TravelInsurancePage() {
  const handleGetStarted = (planName: string, price: string) => {
    alert(`Great choice! You selected the ${planName} plan at ${price}/week.\n\nProceeding to insurance application...`)
  }
  const plans = [
    {
      name: 'Basic',
      price: '₹499',
      duration: 'per week',
      features: [
        'Medical coverage up to $50,000',
        'Trip cancellation',
        'Lost baggage coverage',
        'Emergency assistance',
        '24/7 helpline',
      ],
    },
    {
      name: 'Premium',
      price: '₹999',
      duration: 'per week',
      popular: true,
      features: [
        'Medical coverage up to $100,000',
        'Trip cancellation & interruption',
        'Lost baggage & delay',
        'Emergency medical evacuation',
        'Adventure sports coverage',
        '24/7 concierge service',
      ],
    },
    {
      name: 'Platinum',
      price: '₹1,999',
      duration: 'per week',
      features: [
        'Medical coverage up to $250,000',
        'Comprehensive trip protection',
        'Premium baggage coverage',
        'Emergency evacuation & repatriation',
        'All adventure sports',
        'Personal liability coverage',
        'VIP assistance services',
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Travel Insurance</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Comprehensive coverage for worry-free international travel
          </p>
        </div>
      </section>

      {/* Coverage Types */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">What's Covered</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-blue-600" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Medical Expenses</h3>
              <p className="text-gray-600">Emergency medical treatment and hospitalization</p>
            </div>
            <div className="card text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plane className="text-green-600" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Trip Cancellation</h3>
              <p className="text-gray-600">Reimbursement for cancelled or interrupted trips</p>
            </div>
            <div className="card text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="text-purple-600" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Lost Baggage</h3>
              <p className="text-gray-600">Coverage for lost, stolen, or damaged luggage</p>
            </div>
            <div className="card text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-orange-600" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Emergency Assistance</h3>
              <p className="text-gray-600">24/7 emergency support and evacuation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Choose Your Plan</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`card relative ${
                  plan.popular ? 'border-2 border-primary-600 shadow-xl' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary-600">{plan.price}</span>
                  <span className="text-gray-600"> {plan.duration}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleGetStarted(plan.name, plan.price)}
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-primary-600 text-white hover:bg-primary-700'
                      : 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Our Insurance</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-bold text-lg mb-2">Instant Coverage</h3>
              <p className="text-gray-600">Get covered in minutes with instant policy issuance</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="font-bold text-lg mb-2">Global Network</h3>
              <p className="text-gray-600">Assistance available in 200+ countries worldwide</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="font-bold text-lg mb-2">Easy Claims</h3>
              <p className="text-gray-600">Simple online claim process with quick settlement</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Travel with Confidence</h2>
          <p className="text-xl mb-8 opacity-90">
            Protect your trip with comprehensive travel insurance
          </p>
          <Link href="/contact" className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 inline-block">
            Get a Quote
          </Link>
        </div>
      </section>
    </div>
  )
}

