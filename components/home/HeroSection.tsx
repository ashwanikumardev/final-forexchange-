'use client'

import Link from 'next/link'
import { ArrowRight, TrendingUp, Shield, Clock } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              ✨ India's #1 Forex Platform
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Best Forex Rates
              <span className="text-primary-600"> Guaranteed</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Get the best exchange rates for currency notes, forex cards, and international money transfers. 
              Doorstep delivery across 650+ cities in India.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="/exchange-currency" className="btn-primary flex items-center gap-2">
                Exchange Currency
                <ArrowRight size={20} />
              </Link>
              <Link href="/rates" className="btn-outline">
                View Live Rates
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <div className="bg-primary-100 p-2 rounded-lg">
                  <TrendingUp className="text-primary-600" size={24} />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Best Rates</p>
                  <p className="text-sm text-gray-600">Guaranteed</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-secondary-100 p-2 rounded-lg">
                  <Shield className="text-secondary-600" size={24} />
                </div>
                <div>
                  <p className="font-bold text-gray-900">100% Safe</p>
                  <p className="text-sm text-gray-600">RBI Approved</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Clock className="text-green-600" size={24} />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Same Day</p>
                  <p className="text-sm text-gray-600">Delivery</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-400 to-secondary-500 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex justify-between items-center pb-4 border-b">
                    <span className="text-gray-600">USD to INR</span>
                    <span className="text-2xl font-bold text-primary-600">₹83.50</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b">
                    <span className="text-gray-600">EUR to INR</span>
                    <span className="text-2xl font-bold text-primary-600">₹90.25</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b">
                    <span className="text-gray-600">GBP to INR</span>
                    <span className="text-2xl font-bold text-primary-600">₹105.80</span>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                    <p className="text-green-700 font-semibold">Save up to ₹5 per USD</p>
                    <p className="text-sm text-green-600">compared to banks</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 font-bold px-6 py-3 rounded-full shadow-lg transform rotate-12">
              Zero Markup
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

