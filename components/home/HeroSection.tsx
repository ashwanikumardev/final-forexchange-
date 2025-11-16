'use client'

import Link from 'next/link'
import { ArrowRight, TrendingUp, Shield, Clock } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-12 sm:py-16 lg:py-20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block bg-primary-100 text-primary-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
              ✨ India's #1 Forex Platform
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Best Forex Rates
              <span className="text-primary-600"> Guaranteed</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8">
              Get the best exchange rates for currency notes, forex cards, and international money transfers.
              Doorstep delivery across 650+ cities in India.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-12">
              <Link href="/exchange-currency" className="btn-primary flex items-center justify-center gap-2">
                Exchange Currency
                <ArrowRight size={18} className="sm:w-5 sm:h-5" />
              </Link>
              <Link href="/rates" className="btn-outline text-center">
                View Live Rates
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="flex items-start gap-3">
                <div className="bg-primary-100 p-2 rounded-lg flex-shrink-0">
                  <TrendingUp className="text-primary-600 w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm sm:text-base">Best Rates</p>
                  <p className="text-xs sm:text-sm text-gray-600">Guaranteed</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-secondary-100 p-2 rounded-lg flex-shrink-0">
                  <Shield className="text-secondary-600 w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm sm:text-base">100% Safe</p>
                  <p className="text-xs sm:text-sm text-gray-600">RBI Approved</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                  <Clock className="text-green-600 w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm sm:text-base">Same Day</p>
                  <p className="text-xs sm:text-sm text-gray-600">Delivery</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative mt-8 lg:mt-0">
            <div className="bg-gradient-to-br from-primary-400 to-secondary-500 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl">
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex justify-between items-center pb-3 sm:pb-4 border-b">
                    <span className="text-gray-600 text-sm sm:text-base">USD to INR</span>
                    <span className="text-xl sm:text-2xl font-bold text-primary-600">₹83.50</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 sm:pb-4 border-b">
                    <span className="text-gray-600 text-sm sm:text-base">EUR to INR</span>
                    <span className="text-xl sm:text-2xl font-bold text-primary-600">₹90.25</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 sm:pb-4 border-b">
                    <span className="text-gray-600 text-sm sm:text-base">GBP to INR</span>
                    <span className="text-xl sm:text-2xl font-bold text-primary-600">₹105.80</span>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 sm:p-4 text-center">
                    <p className="text-green-700 font-semibold text-sm sm:text-base">Save up to ₹5 per USD</p>
                    <p className="text-xs sm:text-sm text-green-600">compared to banks</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-yellow-400 text-gray-900 font-bold px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-lg transform rotate-12 text-sm sm:text-base">
              Zero Markup
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

